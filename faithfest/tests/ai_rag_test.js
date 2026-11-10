const assert = require('assert');

async function runAiTests() {
  console.log('================================================================');
  console.log('       FAITHFEST AI RAG ENGINE & LLM SERVICE TEST SUITE        ');
  console.log('================================================================\n');

  const baseUrl = 'http://localhost:3000';

  // 1. Health check
  console.log('1. Testing GET /api/ai/health...');
  const healthRes = await fetch(`${baseUrl}/api/ai/health`);
  assert.strictEqual(healthRes.status, 200, 'Health endpoint should return 200');
  const healthData = await healthRes.json();
  assert.strictEqual(healthData.ok, true);
  assert.strictEqual(healthData.initialized, true);
  assert(healthData.chunks_indexed >= 800, 'Should have indexed >= 800 chunks');
  console.log(`   ✓ Health OK: ${healthData.chunks_indexed} cultural heritage chunks indexed across 4 languages\n`);

  // 2. Suggested questions
  console.log('2. Testing GET /api/ai/suggested-questions across 4 languages...');
  for (const lang of ['English', 'Telugu', 'Hindi', 'Tamil']) {
    const qRes = await fetch(`${baseUrl}/api/ai/suggested-questions?lang=${lang}`);
    assert.strictEqual(qRes.status, 200);
    const qData = await qRes.json();
    assert(qData.questions && qData.questions.length >= 5, `${lang} should return at least 5 questions`);
    console.log(`   ✓ ${lang.padEnd(8)}: ${qData.questions.length} verified starter questions returned`);
  }
  console.log('');

  // 3. English Chat (Diwali foods)
  console.log('3. Testing POST /api/ai/chat (English query: Diwali foods)...');
  const t0 = Date.now();
  const diwaliRes = await fetch(`${baseUrl}/api/ai/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: 'What foods are eaten on Diwali?' })
  });
  assert.strictEqual(diwaliRes.status, 200);
  const diwaliData = await diwaliRes.json();
  assert.strictEqual(diwaliData.success, true);
  assert(diwaliData.answer.length > 50, 'Answer should not be empty');
  assert(diwaliData.sources && diwaliData.sources.length > 0, 'Sources should be cited');
  assert(diwaliData.sources.some(s => s.festival_name.toLowerCase().includes('diwali')), 'Diwali should be cited');
  console.log(`   ✓ Latency: ${Date.now() - t0}ms | Cited: ${diwaliData.sources.map(s => s.festival_name + ' (' + s.section + ')').join(', ')}\n`);

  // 4. Telugu Chat (Pongal rituals)
  console.log('4. Testing POST /api/ai/chat (Telugu query: పొంగల్ విశేషాలు)...');
  const teluguRes = await fetch(`${baseUrl}/api/ai/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: 'పొంగల్ పండుగలో తయారుచేసే ఆహారాలు ఏమిటి?' })
  });
  assert.strictEqual(teluguRes.status, 200);
  const teluguData = await teluguRes.json();
  assert.strictEqual(teluguData.success, true);
  assert.strictEqual(teluguData.lang, 'Telugu');
  assert(teluguData.sources.some(s => s.festival_name.toLowerCase().includes('pongal')), 'Pongal should be cited for Telugu query');
  console.log(`   ✓ Detected Language: ${teluguData.lang} | Cited: ${teluguData.sources.map(s => s.festival_name).join(', ')}\n`);

  // 5. Hindi Chat (Eid-ul-Fitr)
  console.log('5. Testing POST /api/ai/chat (Hindi query: ईद-उल-फ़ितर)...');
  const hindiRes = await fetch(`${baseUrl}/api/ai/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: 'ईद-उल-फ़ितर कैसे मनाया जाता है?' })
  });
  assert.strictEqual(hindiRes.status, 200);
  const hindiData = await hindiRes.json();
  assert.strictEqual(hindiData.success, true);
  assert.strictEqual(hindiData.lang, 'Hindi');
  assert(hindiData.sources.some(s => s.festival_name.toLowerCase().includes('eid')), 'Eid should be cited for Hindi query');
  console.log(`   ✓ Detected Language: ${hindiData.lang} | Cited: ${hindiData.sources.map(s => s.festival_name).join(', ')}\n`);

  // 6. Test Frontend Page Route #/ai-guide via Static HTML and JavaScript
  console.log('6. Testing Frontend Client Integration...');
  const appJsRes = await fetch(`${baseUrl}/app.js`);
  const appJsText = await appJsRes.text();
  assert(appJsText.includes('initAiGuideWidget'), 'app.js should contain initAiGuideWidget');
  assert(appJsText.includes('aiGuidePage'), 'app.js should contain aiGuidePage');
  assert(appJsText.includes('aiGuideNavLink'), 'app.js should contain aiGuideNavLink');
  console.log('   ✓ app.js includes all AI Guide controller, navigation, and page functions\n');

  const stylesRes = await fetch(`${baseUrl}/styles.css`);
  const stylesText = await stylesRes.text();
  assert(stylesText.includes('.aiFabBtn'), 'styles.css should contain .aiFabBtn');
  assert(stylesText.includes('.aiDrawer'), 'styles.css should contain .aiDrawer');
  assert(stylesText.includes('.aiGuidePage'), 'styles.css should contain .aiGuidePage');
  console.log('   ✓ styles.css includes all AI drawer, FAB button, and full-page styles\n');

  console.log('================================================================');
  console.log('     ALL AI RAG & LLM INTEGRATION TESTS PASSED (100% HEALTHY)   ');
  console.log('================================================================');
}

runAiTests().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
