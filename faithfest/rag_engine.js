const { q } = require('./db');

// Multi-lingual cross-reference dictionary for all major festival and religion names
const MULTILINGUAL_ENTITIES = {
  // Telugu
  'దీపావళి': 'Diwali', 'దివాళి': 'Diwali', 'పొంగల్': 'Pongal', 'హోలీ': 'Holi',
  'మహా శివరాత్రి': 'Maha Shivaratri', 'శివరాత్రి': 'Maha Shivaratri',
  'ఈద్': 'Eid', 'రంజాన్': 'Ramadan', 'ఈద్-ఉల్-ఫితర్': 'Eid-ul-Fitr', 'ఈద్ ఉల్-ఫితర్': 'Eid-ul-Fitr',
  'బక్రీద్': 'Eid-ul-Zuha (Eid-ul-Azha)', 'ఈద్-ఉల్-అదా': 'Eid-ul-Zuha (Eid-ul-Azha)',
  'క్రిస్మస్': 'Christmas', 'ఈస్టర్': 'Easter', 'గుడ్ ఫ్రైడే': 'Good Friday',
  'వినాయక చవితి': 'Ganesh Chaturthi', 'గణేష్ చతుర్థి': 'Ganesh Chaturthi',
  'కృష్ణాష్టమి': 'Janmashtami', 'జన్మాష్టమి': 'Janmashtami', 'దసరా': 'Dussehra',
  'నవరాత్రి': 'Navratri', 'శ్రీరామ నవమి': 'Rama Navami', 'రక్షా బంధన్': 'Raksha Bandhan',
  'ఓనం': 'Onam', 'ఉగాది': 'Ugadi', 'బతుకమ్మ': 'Bathukamma', 'బోనాలు': 'Bonalu',
  'హిందూ': 'Hinduism', 'ఇస్లాం': 'Islam', 'క్రైస్తవం': 'Christianity',
  'ఆహారం': 'food', 'దుస్తులు': 'clothing', 'సంగీతం': 'music', 'చరిత్ర': 'history',

  // Hindi
  'दीपावली': 'Diwali', 'दिवाली': 'Diwali', 'पोंगल': 'Pongal', 'होली': 'Holi',
  'महाशिवरात्रि': 'Maha Shivaratri', 'शिवरात्रि': 'Maha Shivaratri',
  'ईद': 'Eid', 'रमज़ान': 'Ramadan', 'ईद-उल-फ़ितर': 'Eid-ul-Fitr', 'ईद-उल-अज़हा': 'Eid-ul-Zuha (Eid-ul-Azha)',
  'क्रिसमस': 'Christmas', 'ईस्टर': 'Easter', 'गुड फ्राइडे': 'Good Friday',
  'गणेश चतुर्थी': 'Ganesh Chaturthi', 'जन्माष्टमी': 'Janmashtami', 'दशहरा': 'Dussehra',
  'नवरात्रि': 'Navratri', 'राम नवमी': 'Rama Navami', 'रक्षाबंधन': 'Raksha Bandhan',
  'ओणम': 'Onam', 'उगादी': 'Ugadi',
  'हिन्दू': 'Hinduism', 'इस्लाम': 'Islam', 'ईसाई': 'Christianity',
  'भोजन': 'food', 'व्यंजन': 'food', 'वस्त्र': 'clothing', 'इतिहास': 'history',

  // Tamil
  'தீபாவளி': 'Diwali', 'பொங்கல்': 'Pongal', 'ஹோலி': 'Holi', 'சிவராத்திரி': 'Maha Shivaratri',
  'ரமலான்': 'Ramadan', 'ஈகைத் திருநாள்': 'Eid-ul-Fitr', 'பக்ரீத்': 'Eid-ul-Zuha (Eid-ul-Azha)',
  'கிறிஸ்துமஸ்': 'Christmas', 'ஈஸ்டர்': 'Easter', 'புனித வெள்ளி': 'Good Friday',
  'விநாயகர் சதுர்த்தி': 'Ganesh Chaturthi', 'கிருஷ்ண ஜெயந்தி': 'Janmashtami', 'தசரா': 'Dussehra',
  'இந்து': 'Hinduism', 'இஸ்லாம்': 'Islam', 'கிறிஸ்தவம்': 'Christianity',
  'உணவு': 'food', 'உடை': 'clothing', 'வரலாறு': 'history'
};

class HeritageRAGEngine {
  constructor() {
    this.chunks = [];
    this.termIndex = new Map(); // term -> Set(chunkIndex)
    this.docCount = 0;
    this.avgDocLength = 0;
    this.initialized = false;
  }

  tokenize(text) {
    if (!text) return [];
    return String(text)
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, ' ')
      .split(/\s+/)
      .filter(w => w.length > 1);
  }

  buildIndex() {
    console.log('[RAG Engine] Indexing FaithFest cultural heritage corpus...');
    this.chunks = [];
    this.termIndex.clear();

    // 1. Fetch Festivals with Religions
    let festivals = [];
    try {
      festivals = q(`
        SELECT f.*, r.name as religion, r.icon as religion_icon
        FROM festivals f
        JOIN religions r ON r.id = f.religion_id
        WHERE f.status = 'published'
      `);
    } catch(e) {
      festivals = [];
    }

    if (!festivals || festivals.length === 0) {
      const fs = require('fs');
      const path = require('path');
      const candidates = [
        path.join(__dirname, 'rag_chunks_seed.json'),
        path.join(__dirname, '..', 'rag_chunks_seed.json'),
        path.join(__dirname, 'faithfest', 'rag_chunks_seed.json'),
        path.join(process.cwd(), 'rag_chunks_seed.json'),
        path.join(process.cwd(), 'faithfest', 'rag_chunks_seed.json')
      ];
      const seedPath = candidates.find(p => fs.existsSync(p));
      if (seedPath) {
        try {
          const seedData = JSON.parse(fs.readFileSync(seedPath, 'utf8'));
          seedData.forEach(item => this.addChunk(item));
          this.computeBM25Stats();
          console.log(`[RAG Engine] Successfully indexed ${this.docCount} cultural heritage knowledge chunks from bundled seed: ${seedPath}!`);
          return this.docCount;
        } catch(e) {
          console.warn('[RAG Engine] Failed to load seed JSON:', e.message);
        }
      }
    }

    festivals.forEach(f => {
      // General Overview Chunk
      let overviewText = `${f.name} is a major ${f.category} in ${f.religion}. `;
      if (f.description) overviewText += `${f.description} `;
      if (f.significance) overviewText += `Significance: ${f.significance} `;
      if (f.celebration) overviewText += `How celebrated: ${f.celebration} `;
      if (f.modern_celebration) overviewText += `Contemporary celebration: ${f.modern_celebration} `;
      if (f.typical_date) overviewText += `Observance timing: ${f.typical_date} (duration: ${f.duration || 'varies'}). `;
      if (f.region) overviewText += `Regions: ${f.region}. `;

      this.addChunk({
        id: `fest_overview_${f.id}`,
        festival_id: f.id,
        festival_name: f.name,
        religion: f.religion,
        religion_icon: f.religion_icon,
        section: 'Overview & Significance',
        content: overviewText.trim()
      });

      if (f.historical_information) {
        this.addChunk({
          id: `fest_hist_${f.id}`,
          festival_id: f.id,
          festival_name: f.name,
          religion: f.religion,
          religion_icon: f.religion_icon,
          section: 'History & Origin',
          content: `${f.name} historical origin: ${f.historical_information}`
        });
      }
    });

    // 2. Index Festival History Timelines
    const historyRows = q('SELECT h.*, f.name as festival_name, r.name as religion FROM festival_history h JOIN festivals f ON f.id=h.festival_id JOIN religions r ON r.id=f.religion_id');
    historyRows.forEach(h => {
      this.addChunk({
        id: `hist_${h.id}`,
        festival_id: h.festival_id,
        festival_name: h.festival_name,
        religion: h.religion,
        section: 'Historical Timeline',
        content: `During the ${h.period || 'Origins'} period of ${h.festival_name}: ${h.title}. ${h.description || ''}`
      });
    });

    // 3. Index Traditional Foods
    const foodRows = q('SELECT fd.*, f.name as festival_name, r.name as religion FROM foods fd JOIN festivals f ON f.id=fd.festival_id JOIN religions r ON r.id=f.religion_id');
    foodRows.forEach(fd => {
      let foodText = `Traditional food for ${fd.festival_name}: ${fd.name}. `;
      if (fd.description) foodText += `${fd.description} `;
      if (fd.ingredients) foodText += `Key ingredients: ${fd.ingredients}. `;
      if (fd.preparation) foodText += `Preparation style: ${fd.preparation}. `;
      if (fd.significance) foodText += `Cultural significance: ${fd.significance}. `;
      if (fd.region) foodText += `Region: ${fd.region}. `;

      this.addChunk({
        id: `food_${fd.id}`,
        festival_id: fd.festival_id,
        festival_name: fd.festival_name,
        religion: fd.religion,
        section: 'Traditional Foods',
        content: foodText.trim()
      });
    });

    // 4. Index Traditional Clothing
    const clothingRows = q('SELECT c.*, f.name as festival_name, r.name as religion FROM clothing c JOIN festivals f ON f.id=c.festival_id JOIN religions r ON r.id=f.religion_id');
    clothingRows.forEach(c => {
      this.addChunk({
        id: `clothing_${c.id}`,
        festival_id: c.festival_id,
        festival_name: c.festival_name,
        religion: c.religion,
        section: 'Traditional Attire',
        content: `Traditional attire for ${c.festival_name} (${c.category || 'Garment'}): ${c.name}. ${c.description || ''} ${c.cultural_context ? 'Cultural context: ' + c.cultural_context : ''} Region: ${c.region || 'Global'}`
      });
    });

    // 5. Index Music & Dance
    const musicRows = q('SELECT m.*, f.name as festival_name, r.name as religion FROM music_dance m JOIN festivals f ON f.id=m.festival_id JOIN religions r ON r.id=f.religion_id');
    musicRows.forEach(m => {
      this.addChunk({
        id: `music_${m.id}`,
        festival_id: m.festival_id,
        festival_name: m.festival_name,
        religion: m.religion,
        section: 'Music & Dance Traditions',
        content: `Traditional ${m.kind || 'Music/Dance'} for ${m.festival_name}: ${m.name}. ${m.description || ''} (Region: ${m.region || 'Various'})`
      });
    });

    // 6. Index Decorations & Symbols
    const symbolRows = q('SELECT s.*, f.name as festival_name, r.name as religion FROM symbols s JOIN festivals f ON f.id=s.festival_id JOIN religions r ON r.id=f.religion_id');
    symbolRows.forEach(s => {
      this.addChunk({
        id: `symbol_${s.id}`,
        festival_id: s.festival_id,
        festival_name: s.festival_name,
        religion: s.religion,
        section: 'Symbols & Meanings',
        content: `Symbol of ${s.festival_name}: ${s.name}. Meaning: ${s.meaning || s.description || ''} (Region: ${s.region || 'Various'})`
      });
    });

    const decorRows = q('SELECT d.*, f.name as festival_name, r.name as religion FROM decorations d JOIN festivals f ON f.id=d.festival_id JOIN religions r ON r.id=f.religion_id');
    decorRows.forEach(d => {
      this.addChunk({
        id: `decor_${d.id}`,
        festival_id: d.festival_id,
        festival_name: d.festival_name,
        religion: d.religion,
        section: 'Decorations & Ritual Objects',
        content: `Decoration for ${d.festival_name}: ${d.name}. ${d.description || ''} Symbolic meaning: ${d.meaning || ''}`
      });
    });

    // 7. Index Sacred Geography & Map Locations
    const locRows = q(`
      SELECT fl.*, GROUP_CONCAT(f.name, ', ') as linked_festivals
      FROM festival_locations fl
      LEFT JOIN festival_location_relations flr ON flr.location_id=fl.id
      LEFT JOIN festivals f ON f.id=flr.festival_id
      WHERE fl.verification_status = 'published'
      GROUP BY fl.id
    `);
    locRows.forEach(l => {
      this.addChunk({
        id: `loc_${l.id}`,
        festival_id: null,
        festival_name: l.linked_festivals || l.name,
        religion: l.religion,
        section: 'Sacred Geography & Places',
        content: `Sacred Site: ${l.name} (${l.religion}). Located in ${l.city || ''}, ${l.state || ''}, ${l.country || ''}. Type: ${l.place_type}. Description: ${l.description || ''}. Associated festivals: ${l.linked_festivals || 'Important pilgrimage site'}. Coordinates: [${l.latitude}, ${l.longitude}].`
      });
    });

    // 8. Index 2026/2027 Calendar Events (Sample highlights)
    const calRows = q(`
      SELECT ce.title, ce.event_date, ce.year, ce.weekday, ce.lunar_month, ce.tithi, r.name as religion, f.name as festival_name
      FROM calendar_events ce
      JOIN religions r ON r.id = ce.religion_id
      LEFT JOIN festivals f ON f.id = ce.festival_id
      WHERE ce.year IN (2026, 2027) AND (ce.festival_id IS NOT NULL OR ce.title IN ('Diwali', 'Pongal', 'Holi', 'Maha Shivaratri', 'Eid-ul-Fitr', 'Ramadan', 'Christmas', 'Easter', 'Good Friday'))
      LIMIT 200
    `);
    calRows.forEach((c, idx) => {
      this.addChunk({
        id: `cal_${idx}`,
        festival_id: null,
        festival_name: c.festival_name || c.title,
        religion: c.religion,
        section: 'Calendar Observance',
        content: `${c.title} (${c.religion}): Date is ${c.event_date} (${c.weekday}, Year ${c.year}). ${c.lunar_month ? 'Lunar month: ' + c.lunar_month : ''} ${c.tithi ? 'Tithi: ' + c.tithi : ''}`
      });
    });

    // Compute BM25 statistics
    this.computeBM25Stats();
    console.log(`[RAG Engine] Successfully indexed ${this.docCount} cultural heritage knowledge chunks!`);
    return this.docCount;
  }

  computeBM25Stats() {
    this.docCount = this.chunks.length;
    let totalLength = 0;
    this.chunks.forEach((chunk, idx) => {
      totalLength += chunk.tokens.length;
      chunk.tokens.forEach(term => {
        if (!this.termIndex.has(term)) {
          this.termIndex.set(term, new Set());
        }
        this.termIndex.get(term).add(idx);
      });
    });
    this.avgDocLength = totalLength / Math.max(1, this.docCount);
    this.initialized = true;
  }

  addChunk(data) {
    const tokens = this.tokenize(`${data.festival_name} ${data.religion} ${data.section} ${data.content}`);
    this.chunks.push({
      ...data,
      tokens
    });
  }

  expandQuery(query) {
    let expanded = query.toLowerCase();
    for (const [nativeTerm, engTerm] of Object.entries(MULTILINGUAL_ENTITIES)) {
      if (query.includes(nativeTerm)) {
        expanded += ' ' + engTerm.toLowerCase();
      }
    }
    return expanded;
  }

  retrieve(query, options = {}) {
    if (!this.initialized) {
      this.buildIndex();
    }

    const topK = options.topK || Number(process.env.RAG_TOP_K || 5);
    const religionFilter = options.religion;
    const expandedQuery = this.expandQuery(query);
    const queryTokens = this.tokenize(expandedQuery);

    if (queryTokens.length === 0) {
      return [];
    }

    // BM25 parameters (configurable via environment variables)
    const k1 = Number(process.env.RAG_BM25_K1 || 1.5);
    const b = Number(process.env.RAG_BM25_B || 0.75);
    const scores = new Map(); // chunkIndex -> score

    queryTokens.forEach(term => {
      const matchingDocIndices = this.termIndex.get(term);
      if (!matchingDocIndices) return;

      const n = matchingDocIndices.size;
      const idf = Math.log(1 + (this.docCount - n + 0.5) / (n + 0.5));

      matchingDocIndices.forEach(docIdx => {
        const doc = this.chunks[docIdx];
        if (religionFilter && doc.religion && doc.religion.toLowerCase() !== religionFilter.toLowerCase()) {
          return;
        }

        // Count term frequency in document
        let tf = 0;
        for (let i = 0; i < doc.tokens.length; i++) {
          if (doc.tokens[i] === term) tf++;
        }

        const docLen = doc.tokens.length;
        const bm25Score = idf * ((tf * (k1 + 1)) / (tf + k1 * (1 - b + b * (docLen / this.avgDocLength))));

        // Additional entity & title boost
        let boost = 1.0;
        const festNameLower = (doc.festival_name || '').toLowerCase();
        if (festNameLower.includes(term)) boost += 2.0;
        if (query.toLowerCase().includes(festNameLower) && festNameLower.length > 2) boost += 3.0;

        scores.set(docIdx, (scores.get(docIdx) || 0) + (bm25Score * boost));
      });
    });

    const ranked = Array.from(scores.entries())
      .map(([idx, score]) => ({
        ...this.chunks[idx],
        score
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, topK);

    return ranked;
  }

  formatContextForLLM(chunks) {
    if (!chunks || chunks.length === 0) {
      return 'No specific FaithFest catalog matches found for this query.';
    }

    return chunks.map((c, i) => {
      return `[Source ${i + 1}: ${c.festival_name} | Religion: ${c.religion} | Category: ${c.section}]\n${c.content}`;
    }).join('\n\n');
  }
}

const ragEngine = new HeritageRAGEngine();

module.exports = {
  ragEngine,
  HeritageRAGEngine
};

