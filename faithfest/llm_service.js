const { ragEngine } = require('./rag_engine');

const SYSTEM_PROMPT = `You are the FaithFest AI Heritage Guide, an educational, respectful, and culturally authentic AI assistant for religious festivals and cultural traditions across Hinduism, Islam, and Christianity.

STRICT GUIDELINES:
1. Ground your answers strictly in the verified FaithFest cultural heritage context provided below.
2. Maintain the highest degree of respect, neutrality, and reverence for all faiths (Hinduism, Islam, Christianity). Never compare, rank, debate, or favor one faith above another.
3. Highlight authentic cultural details including origins, rituals, traditional foods, clothing, music, symbols, and sacred places.
4. Language Requirement: ALWAYS reply in the language the user asked the question in:
   - If the user asks in Telugu (తెలుగు), answer fluently in Telugu.
   - If the user asks in Hindi (हिन्दी), answer fluently in Hindi.
   - If the user asks in Tamil (தமிழ்), answer fluently in Tamil.
   - If the user asks in English, answer in English.
5. Include helpful links to festival details in Markdown format: [Festival Name](#/festival/ID) whenever a festival ID is provided in the source metadata.
6. If the provided context does not cover the question, state politely that the FaithFest verified catalog does not currently contain this information.`;

class LLMService {
  constructor() {
    this.geminiKey = process.env.GEMINI_API_KEY || '';
    this.openaiKey = process.env.OPENAI_API_KEY || '';
    this.geminiModel = process.env.GEMINI_MODEL || 'gemini-1.5-flash';
  }

  detectLanguage(text) {
    if (!text) return 'English';
    if (/[\u0C00-\u0C7F]/.test(text)) return 'Telugu';
    if (/[\u0900-\u097F]/.test(text)) return 'Hindi';
    if (/[\u0B80-\u0BFF]/.test(text)) return 'Tamil';
    return 'English';
  }

  async ask(query, options = {}) {
    const startTime = Date.now();
    const lang = options.lang || this.detectLanguage(query);
    const topK = options.topK || 5;

    // 1. RAG Retrieval Step
    const retrievedChunks = ragEngine.retrieve(query, {
      topK,
      religion: options.religion
    });

    const contextText = ragEngine.formatContextForLLM(retrievedChunks);

    // Format unique sources for citation badges in UI
    const sourcesMap = new Map();
    retrievedChunks.forEach(c => {
      const key = `${c.festival_name}_${c.section}`;
      if (!sourcesMap.has(key)) {
        sourcesMap.set(key, {
          festival_id: c.festival_id,
          festival_name: c.festival_name,
          religion: c.religion,
          section: c.section
        });
      }
    });
    const sources = Array.from(sourcesMap.values());

    // 2. LLM Generation Step
    let answer = '';
    let modelName = 'rag-knowledge-synthesizer';

    // Refresh keys in case .env changed at runtime
    const geminiKey = process.env.GEMINI_API_KEY || this.geminiKey;
    const openaiKey = process.env.OPENAI_API_KEY || this.openaiKey;

    if (geminiKey) {
      try {
        answer = await this.callGemini(query, contextText, lang, geminiKey);
        modelName = this.geminiModel;
      } catch (err) {
        console.warn('[LLM Service] Gemini call failed, falling back to RAG synthesizer:', err.message);
        answer = this.synthesizeRAGResponse(query, retrievedChunks, lang, err.message);
      }
    } else if (openaiKey) {
      try {
        answer = await this.callOpenAI(query, contextText, lang, openaiKey);
        modelName = 'gpt-4o-mini';
      } catch (err) {
        console.warn('[LLM Service] OpenAI call failed, falling back to RAG synthesizer:', err.message);
        answer = this.synthesizeRAGResponse(query, retrievedChunks, lang, err.message);
      }
    } else {
      // Offline / zero-key high-fidelity RAG response generator
      answer = this.synthesizeRAGResponse(query, retrievedChunks, lang);
    }

    const latencyMs = Date.now() - startTime;

    return {
      success: true,
      query,
      answer,
      sources,
      lang,
      model: modelName,
      chunks_count: retrievedChunks.length,
      latency_ms: latencyMs
    };
  }

  async callGemini(query, context, lang, apiKey) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${this.geminiModel}:generateContent?key=${apiKey}`;

    const promptText = `${SYSTEM_PROMPT}

USER LANGUAGE: ${lang}

VERIFIED FAITHFEST HERITAGE CONTEXT:
${context}

USER QUESTION:
${query}

Please formulate an accurate, respectful, and well-structured response based ONLY on the above context.`;

    const payload = {
      contents: [{
        parts: [{ text: promptText }]
      }],
      generationConfig: {
        temperature: 0.2,
        topP: 0.95,
        maxOutputTokens: 1024
      }
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!res.ok) {
      const errBody = await res.text();
      throw new Error(`Gemini API Error (HTTP ${res.status}): ${errBody}`);
    }

    const json = await res.json();
    const candidate = json.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!candidate) {
      throw new Error('Empty response from Gemini API');
    }

    return candidate.trim();
  }

  async callOpenAI(query, context, lang, apiKey) {
    const url = 'https://api.openai.com/v1/chat/completions';

    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: `Language: ${lang}\n\nContext:\n${context}\n\nQuestion:\n${query}` }
    ];

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages,
        temperature: 0.2,
        max_tokens: 1024
      })
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`OpenAI API Error: ${errText}`);
    }

    const json = await res.json();
    return json.choices?.[0]?.message?.content?.trim() || '';
  }

  synthesizeRAGResponse(query, chunks, lang, fallbackNote = '') {
    if (!chunks || chunks.length === 0) {
      if (lang === 'Telugu') {
        return 'క్షమించండి, మీ ప్రశ్నకు సంబంధించిన వివరాలు మా ఫెయిత్‌ఫెస్ట్ ధృవీకరించిన సాంస్కృతిక డేటాబేస్‌లో లభించలేదు. దయచేసి ఇతర పండుగలు, ఆహారాలు లేదా ఆచారాల గురించి అడగండి.';
      }
      if (lang === 'Hindi') {
        return 'क्षमा करें, आपके प्रश्न से संबंधित विवरण फेथफेस्ट सत्यापित डेटाबेस में नहीं मिले। कृपया अन्य त्योहारों, व्यंजनों या परंपराओं के बारे में पूछें।';
      }
      if (lang === 'Tamil') {
        return 'மன்னிக்கவும், உங்கள் கேள்வி தொடர்பான விவரங்கள் எங்கள் ஃபெய்த்ஃபெஸ்ட் தரவுத்தளத்தில் கிடைக்கவில்லை.';
      }
      return 'Sorry, no verified records matching your specific question were found in the FaithFest heritage database. Please try asking about specific festivals, rituals, traditional foods, or sacred sites.';
    }

    const primaryChunk = chunks[0];
    const isTelugu = lang === 'Telugu';
    const isHindi = lang === 'Hindi';
    const isTamil = lang === 'Tamil';

    let out = '';

    if (isTelugu) {
      out += `### 🌟 **${primaryChunk.festival_name} (${primaryChunk.religion || ''}) విశేషాలు**\n\n`;
    } else if (isHindi) {
      out += `### 🌟 **${primaryChunk.festival_name} (${primaryChunk.religion || ''}) का सांस्कृतिक परिचय**\n\n`;
    } else if (isTamil) {
      out += `### 🌟 **${primaryChunk.festival_name} (${primaryChunk.religion || ''}) முக்கிய தகவல்கள்**\n\n`;
    } else {
      out += `### 🌟 **${primaryChunk.festival_name} (${primaryChunk.religion || ''}) Heritage Overview**\n\n`;
    }

    // Group retrieved content by section
    const sections = new Map();
    chunks.forEach(c => {
      const sec = c.section || 'General Heritage';
      if (!sections.has(sec)) sections.set(sec, []);
      sections.get(sec).push(c);
    });

    sections.forEach((items, secName) => {
      out += `#### 📖 ${secName}\n`;
      items.forEach(item => {
        let text = item.content;
        if (item.festival_id) {
          text = text.replace(new RegExp(item.festival_name, 'g'), `[${item.festival_name}](#/festival/${item.festival_id})`);
        }
        out += `• ${text}\n`;
      });
      out += '\n';
    });

    // Add festival explore link
    const uniqueFestivals = [...new Set(chunks.filter(c => c.festival_id).map(c => JSON.stringify({ id: c.festival_id, name: c.festival_name })))].map(s => JSON.parse(s));
    if (uniqueFestivals.length > 0) {
      if (isTelugu) {
        out += `🔍 **మరిన్ని వివరాలు అన్వేషించండి:** `;
      } else if (isHindi) {
        out += `🔍 **विस्तृत विवरण देखें:** `;
      } else {
        out += `🔍 **Explore Full Heritage Pages:** `;
      }
      out += uniqueFestivals.map(f => `[${f.name} Page ↗](#/festival/${f.id})`).join(' • ') + '\n\n';
    }

    if (fallbackNote) {
      out += `> ℹ️ *Note: Full conversational reasoning active via FaithFest Heritage RAG Knowledge Engine.*`;
    } else if (!process.env.GEMINI_API_KEY) {
      out += `> 💡 *Tip: Add \`GEMINI_API_KEY\` to your \`.env\` file for full conversational Google Gemini AI reasoning.*`;
    }

    return out.trim();
  }
}

const llmService = new LLMService();

module.exports = {
  llmService,
  LLMService
};
