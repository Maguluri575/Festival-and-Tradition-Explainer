const http=require('http');
const fs=require('fs');
const path=require('path');
const crypto=require('crypto');
const {q,one,run,hashPassword,verifyPassword}=require('./db');
const supabase = require('./config/supabase');
const { ragEngine } = require('./rag_engine');
const { llmService } = require('./llm_service');
const PORT=Number(process.env.PORT||3000);
let PUBLIC=path.join(__dirname,'public');
if(!fs.existsSync(PUBLIC)){
  const alt=path.join(process.cwd(),'public');
  if(fs.existsSync(alt)) PUBLIC=alt;
  else {
    const alt2=path.join(process.cwd(),'faithfest','public');
    if(fs.existsSync(alt2)) PUBLIC=alt2;
  }
}
const JWT_SECRET=process.env.JWT_SECRET||'faithfest-development-secret-change-me';
function json(res,status,data){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'});res.end(JSON.stringify(data));}
function token(payload){const h=Buffer.from(JSON.stringify({alg:'HS256',typ:'JWT'})).toString('base64url');const p=Buffer.from(JSON.stringify({...payload,exp:Math.floor(Date.now()/1000)+60*60*24})).toString('base64url');const s=crypto.createHmac('sha256',JWT_SECRET).update(h+'.'+p).digest('base64url');return h+'.'+p+'.'+s;}
function auth(req){const a=req.headers.authorization||'';if(!a.startsWith('Bearer '))return null;const [h,p,s]=a.slice(7).split('.');try{const expected=crypto.createHmac('sha256',JWT_SECRET).update(h+'.'+p).digest('base64url');if(s!==expected)return null;const d=JSON.parse(Buffer.from(p,'base64url'));if(d.exp<Date.now()/1000)return null;return d;}catch{return null;}}
async function body(req){
  if(req.body!==undefined && req.body!==null){
    if(typeof req.body==='object') return req.body;
    if(typeof req.body==='string'){
      try { return JSON.parse(req.body); } catch { return null; }
    }
  }
  let b='';
  try {
    for await(const c of req) b+=c;
  } catch(e) {
    return (req.body && typeof req.body==='object') ? req.body : null;
  }
  if(!b) return {};
  try { return JSON.parse(b); } catch { return null; }
}
function event(userId,type,festivalId,meta={}){run('INSERT INTO analytics_events(user_id,event_type,festival_id,metadata_json) VALUES(?,?,?,?)',[userId||null,type,festivalId||null,JSON.stringify(meta)]);}
function audit(userId,action,entityType,entityId,details={}){run('INSERT INTO audit_logs(user_id,action,entity_type,entity_id,details_json) VALUES(?,?,?,?,?)',[userId||null,action,entityType,entityId||null,JSON.stringify(details)]);}
function sendError(res,status,msg){return json(res,status,{error:msg});}
function getFullFestival(id,includeUnpublished=false){
 const f=one(`SELECT f.*,r.name religion,r.icon religion_icon FROM festivals f JOIN religions r ON r.id=f.religion_id WHERE f.id=? ${includeUnpublished?'':"AND f.status='published'"}`,[id]);
 if(!f)return null;
 f.history=q('SELECT * FROM festival_history WHERE festival_id=?',[id]);
 f.regions=q('SELECT * FROM festival_regions WHERE festival_id=?',[id]);
 f.foods=q('SELECT * FROM foods WHERE festival_id=?',[id]);
 f.clothing=q('SELECT * FROM clothing WHERE festival_id=?',[id]);
 f.music=q('SELECT * FROM music_dance WHERE festival_id=?',[id]);
 f.decorations=q('SELECT * FROM decorations WHERE festival_id=?',[id]);
 f.symbols=q('SELECT * FROM symbols WHERE festival_id=?',[id]);
 f.media=q('SELECT * FROM media WHERE festival_id=?',[id]);
 f.references=q('SELECT * FROM references_table WHERE festival_id=?',[id]);
 f.calendar_events=q('SELECT * FROM calendar_events WHERE festival_id=? ORDER BY event_date',[id]);
 f.quiz=q('SELECT id,question,options_json,answer_index FROM quiz_questions WHERE festival_id=?',[id]).map(x=>({id:x.id,question:x.question,options:JSON.parse(x.options_json),answer_index:x.answer_index}));
 return f;
}
const supabaseCache = {
  religions: null,
  festivals: null,
  details: {},
  lastFetched: 0
};

async function getSupabaseReligions() {
  if (supabaseCache.religions && (Date.now() - supabaseCache.lastFetched < 60000)) {
    return supabaseCache.religions;
  }
  try {
    const { data, error } = await supabase
      .from('religions')
      .select('*')
      .eq('active', true)
      .order('id');
    if (!error && Array.isArray(data) && data.length > 0) {
      supabaseCache.religions = data;
      supabaseCache.lastFetched = Date.now();
      return data;
    }
  } catch(e) {}
  return supabaseCache.religions;
}

async function getSupabaseFestivals(filters = {}) {
  let list = supabaseCache.festivals;
  if (!list || (Date.now() - supabaseCache.lastFetched >= 60000)) {
    try {
      const { data, error } = await supabase
        .from('festivals')
        .select('id, name, category, description, country, region, typical_date, duration, religion_id, religions(name, icon)')
        .eq('status', 'published')
        .order('name', { ascending: true });
      if (!error && Array.isArray(data) && data.length > 0) {
        list = data.map(item => ({
          id: item.id,
          name: item.name,
          category: item.category,
          description: item.description,
          country: item.country,
          region: item.region,
          typical_date: item.typical_date,
          duration: item.duration,
          religion_id: item.religion_id,
          religion: item.religions?.name || '',
          religion_icon: item.religions?.icon || ''
        }));
        supabaseCache.festivals = list;
        supabaseCache.lastFetched = Date.now();
      }
    } catch(e) {}
  }
  if (!list) return null;

  let filtered = list;
  const { search, religion, region, category, month } = filters;
  if (religion) filtered = filtered.filter(f => String(f.religion_id) === String(religion));
  if (category) filtered = filtered.filter(f => f.category === category);
  if (region) filtered = filtered.filter(f => (f.region || '').toLowerCase().includes(region.toLowerCase()));
  if (month) filtered = filtered.filter(f => (f.typical_date || '').toLowerCase().includes(month.toLowerCase()));
  if (search) {
    const s = search.toLowerCase();
    filtered = filtered.filter(f =>
      (f.name || '').toLowerCase().includes(s) ||
      (f.description || '').toLowerCase().includes(s) ||
      (f.region || '').toLowerCase().includes(s)
    );
  }
  return filtered;
}

async function getFullFestivalFromSupabase(id,includeUnpublished=false){
 if (!includeUnpublished && supabaseCache.details[id] && (Date.now() - (supabaseCache.details[id]._ts || 0) < 60000)) {
  return supabaseCache.details[id];
 }
 try {
  let qry = supabase
    .from('festivals')
    .select('*, religions(name, icon)')
    .eq('id', id);
  if (!includeUnpublished) qry = qry.eq('status', 'published');
  const { data: fest, error } = await qry.maybeSingle();
  if (error || !fest) return null;

  const [
    { data: history },
    { data: regions },
    { data: foods },
    { data: clothing },
    { data: music },
    { data: decorations },
    { data: symbols },
    { data: media },
    { data: refs },
    { data: calEvents },
    { data: quiz }
  ] = await Promise.all([
    supabase.from('festival_history').select('*').eq('festival_id', id),
    supabase.from('festival_regions').select('*').eq('festival_id', id),
    supabase.from('foods').select('*').eq('festival_id', id),
    supabase.from('clothing').select('*').eq('festival_id', id),
    supabase.from('music_dance').select('*').eq('festival_id', id),
    supabase.from('decorations').select('*').eq('festival_id', id),
    supabase.from('symbols').select('*').eq('festival_id', id),
    supabase.from('media').select('*').eq('festival_id', id),
    supabase.from('references_table').select('*').eq('festival_id', id),
    supabase.from('calendar_events').select('*').eq('festival_id', id).order('event_date'),
    supabase.from('quiz_questions').select('id, question, options_json, answer_index').eq('festival_id', id)
  ]);

  const full = {
    ...fest,
    religion: fest.religions?.name || '',
    religion_icon: fest.religions?.icon || '',
    history: history || [],
    regions: regions || [],
    foods: foods || [],
    clothing: clothing || [],
    music: music || [],
    decorations: decorations || [],
    symbols: symbols || [],
    media: media || [],
    references: refs || [],
    calendar_events: calEvents || [],
    quiz: (quiz || []).map(x => ({
      id: x.id,
      question: x.question,
      options: typeof x.options_json === 'string' ? JSON.parse(x.options_json) : x.options_json,
      answer_index: x.answer_index
    })),
    _ts: Date.now()
  };
  if (!includeUnpublished) supabaseCache.details[id] = full;
  return full;
 } catch(err) {
  return null;
 }
}
function publicFestival(id){return getFullFestival(id,false);}

async function route(req,res){
 let rawUrl = req.url || '';
 if (req.query && (req.query.path || req.query.slug)) {
   const sub = Array.isArray(req.query.slug || req.query.path) ? (req.query.slug || req.query.path).join('/') : (req.query.slug || req.query.path);
   rawUrl = '/api/' + sub.replace(/^\/+/, '');
 } else if (!rawUrl.startsWith('/api/') || rawUrl === '/api' || rawUrl === '/api/' || rawUrl.startsWith('/api/index') || rawUrl.startsWith('/api/[...')) {
   const orig = req.headers['x-forwarded-url'] || req.headers['x-original-url'];
   if (orig && orig.startsWith('/api/') && !orig.startsWith('/api/index') && !orig.startsWith('/api/[...')) {
     rawUrl = orig;
   }
 }
 if (req.url && req.url.includes('?') && !rawUrl.includes('?')) {
   rawUrl += req.url.slice(req.url.indexOf('?'));
 }
 const u=new URL(rawUrl,'http://localhost');
 let p=u.pathname;
 if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
 const method=req.method;const user=auth(req);
 if(p==='/api/health')return json(res,200,{ok:true,service:'FaithFest',time:new Date().toISOString()});
 if(p==='/api/ai/health'&&method==='GET'){
  if(!ragEngine.initialized){try{ragEngine.buildIndex();}catch(e){}}
  return json(res,200,{
    ok:true,
    service:'FaithFest AI Cultural Heritage Guide',
    chunks_indexed:ragEngine.docCount,
    initialized:ragEngine.initialized,
    provider:process.env.GEMINI_API_KEY?'gemini':(process.env.OPENAI_API_KEY?'openai':'rag-knowledge-synthesizer'),
    model:process.env.GEMINI_API_KEY?(process.env.GEMINI_MODEL||'gemini-1.5-flash'):'faithfest-rag-knowledge-synthesizer',
    has_gemini_key:Boolean(process.env.GEMINI_API_KEY),
    supported_languages:['English','Telugu','Hindi','Tamil']
  });
 }
 if(p==='/api/ai/suggested-questions'&&method==='GET'){
  const lang=u.searchParams.get('lang')||'English';
  const questionsByLang={
    Telugu:[
      {text:"దీపావళి పండుగ ప్రాముఖ్యత మరియు దీపాలు వెలిగించే ఆచారం ఏమిటి?",religion:"Hinduism"},
      {text:"పొంగల్ పండుగలో తయారుచేసే సాంప్రదాయ వంటకాలు ఏమిటి?",religion:"Hinduism"},
      {text:"ఈద్-ఉల్-ఫితర్ ఎలా జరుపుకుంటారు మరియు జకాత్ ప్రాముఖ్యత ఏమిటి?",religion:"Islam"},
      {text:"క్రిస్మస్ పండుగ పుట్టుక మరియు నేటివిటీ సంప్రదాయం వివరించండి.",religion:"Christianity"},
      {text:"మీనాక్షి అమ్మవారి ఆలయం ఎక్కడ ఉంది మరియు అక్కడ జరిగే పండుగలు ఏమిటి?",religion:"Hinduism"}
    ],
    Hindi:[
      {text:"दीपावली का सांस्कृतिक महत्व और दीप जलाने की परंपरा क्या है?",religion:"Hinduism"},
      {text:"ईद-उल-फ़ितर कैसे मनाया जाता है और ज़कात-उल-फ़ितर क्या है?",religion:"Islam"},
      {text:"पोंगल में बनाए जाने वाले पारंपरिक व्यंजन कौन-से हैं?",religion:"Hinduism"},
      {text:"क्रिसमस का ऐतिहासिक मूल और चरनी (नेटीविटी) की परंपरा क्या है?",religion:"Christianity"},
      {text:"मीनाक्षी अम्मन मंदिर कहाँ स्थित है और यहाँ कौन-से उत्सव मनाए जाते हैं?",religion:"Hinduism"}
    ],
    Tamil:[
      {text:"பொங்கல் பண்டிகையின் வரலாற்று பின்னணி மற்றும் பாரம்பரிய உணவுகள் யாவை?",religion:"Hinduism"},
      {text:"தீபாவளி பண்டிகையின் கலாச்சார மற்றும் ஆன்மீக முக்கியத்துவம் என்ன?",religion:"Hinduism"},
      {text:"ஈகைத் திருநாள் (ஈத்-உல்-பித்ர்) எவ்வாறு கொண்டாடப்படுகிறது?",religion:"Islam"},
      {text:"கிறிஸ்துமஸ் பண்டிகையின் தோற்றம் மற்றும் மரபுகள் என்ன?",religion:"Christianity"},
      {text:"மீனாட்சி அம்மன் திருக்கோவில் எங்கு அமைந்துள்ளது?",religion:"Hinduism"}
    ],
    English:[
      {text:"What is the spiritual significance of Diwali and the lighting of diyas?",religion:"Hinduism"},
      {text:"What traditional foods are cooked during Pongal celebrations?",religion:"Hinduism"},
      {text:"How is Eid-ul-Fitr celebrated and what is the importance of Zakat-al-Fitr?",religion:"Islam"},
      {text:"What is the historical origin of Christmas and the Nativity tradition?",religion:"Christianity"},
      {text:"Where is the Meenakshi Amman Temple located and what festivals are linked to it?",religion:"Hinduism"},
      {text:"What is the symbolic meaning of the Easter candle and Easter eggs?",religion:"Christianity"}
    ]
  };
  const list=questionsByLang[lang]||questionsByLang['English'];
  return json(res,200,{success:true,lang,questions:list});
 }
 if(p==='/api/ai/chat'&&method==='POST'){
  return body(req).then(async b=>{
    if(!b||!b.query||!String(b.query).trim()){
      return sendError(res,400,'Query text is required');
    }
    const query=String(b.query).trim();
    const lang=b.lang||null;
    const religion=b.religion||null;
    try {
      const response=await llmService.ask(query,{lang,religion,topK:b.topK||5});
      return json(res,200,response);
    } catch(err){
      console.error('[AI Chat Error]',err);
      return sendError(res,500,'AI processing error: '+err.message);
    }
  });
 }
 if(p==='/api/test-supabase'&&method==='GET'){
  try {
   const { data: religions, error: relError } = await supabase
     .from('religions')
     .select('id, name, description, icon')
     .eq('active', true)
     .order('id');
   if (relError) return json(res, 500, { success: false, message: relError.message });
   const { count } = await supabase
     .from('festivals')
     .select('*', { count: 'exact', head: true })
     .eq('status', 'published');
   return json(res, 200, {
     success: true,
     database: 'Supabase Cloud (PostgreSQL)',
     religions_count: religions ? religions.length : 0,
     festivals_count: count !== null ? count : 0,
     religions: religions
   });
  } catch(e) {
   return json(res, 500, { success: false, message: e.message });
  }
 }
 if(p==='/api/auth/register'&&method==='POST')return body(req).then(async b=>{
   if(!b||!b.name||!b.email||!b.password)return sendError(res,400,'Name, email and password are required');
   if(b.password.length<8)return sendError(res,400,'Password must be at least 8 characters');
   const email = String(b.email).toLowerCase().trim();
   const name = String(b.name).trim();
   const targetRole = (b.role==='admin')?'admin':'user';
   const pwdHash = hashPassword(b.password);

   try {
     const { data: existing } = await supabase.from('users').select('id').eq('email', email).maybeSingle();
     if (existing) return sendError(res, 409, 'Email already registered');
     const { data: inserted, error: insErr } = await supabase.from('users').insert([{ name, email, password_hash: pwdHash, role: targetRole }]).select('id, name, email, role').maybeSingle();
     if (!insErr && inserted) {
       try { run('INSERT OR IGNORE INTO users(id, name, email, password_hash, role) VALUES(?,?,?,?,?)', [inserted.id, name, email, pwdHash, targetRole]); } catch(e) {}
       return json(res, 201, { user: inserted, token: token({ id: inserted.id, role: inserted.role, email: inserted.email, name: inserted.name }) });
     }
   } catch(e) {}

   try {
     if(one('SELECT id FROM users WHERE email=?',[email]))return sendError(res,409,'Email already registered');
     const r=run('INSERT INTO users(name,email,password_hash,role) VALUES(?,?,?,?)',[name,email,pwdHash,targetRole]);
     const u2=one('SELECT id,name,email,role FROM users WHERE id=?',[r.lastInsertRowid]);
     return json(res,201,{user:u2,token:token({id:u2.id,role:u2.role,email:u2.email,name:u2.name})});
   } catch(err) {
     return sendError(res, 500, 'Registration error: ' + err.message);
   }
 });
 if(p==='/api/auth/google/config'&&method==='GET')return json(res,200,{client_id:process.env.GOOGLE_CLIENT_ID||''});
  if(p==='/api/auth/google'&&method==='POST')return body(req).then(b=>{
    let email = '', name = '', picture = '', sub = '';
    if(b?.credential){
      try {
        const payloadBase64 = b.credential.split('.')[1];
        const decoded = JSON.parse(Buffer.from(payloadBase64, 'base64').toString('utf8'));
        email = (decoded.email || '').toLowerCase().trim();
        name = decoded.name || decoded.given_name || email.split('@')[0];
        picture = decoded.picture || '';
        sub = decoded.sub || '';
      } catch(err){
        return sendError(res, 400, 'Invalid Google credential token');
      }
    } else if(b?.email){
      email = String(b.email).toLowerCase().trim();
      name = String(b.name || email.split('@')[0]).trim();
      picture = b.picture || '';
      sub = b.google_id || '';
    } else {
      return sendError(res, 400, 'Google account information required');
    }

    if(!email || !email.includes('@')){
      return sendError(res, 400, 'Valid Google email address is required');
    }

    let u2 = one('SELECT id, name, email, role FROM users WHERE email=?', [email]);
    if(!u2){
      const randomPassword = crypto.randomBytes(16).toString('hex');
      const r = run('INSERT INTO users(name, email, password_hash, role) VALUES(?,?,?,?)', [
        name,
        email,
        hashPassword(randomPassword),
        'user'
      ]);
      u2 = one('SELECT id, name, email, role FROM users WHERE id=?', [r.lastInsertRowid]);
      try { award(u2.id, 'learner'); } catch {}
      try { event(u2.id, 'google_signup', null, { email, name }); } catch {}
    } else {
      if(name && (!u2.name || u2.name === u2.email.split('@')[0])){
        run('UPDATE users SET name=? WHERE id=?', [name, u2.id]);
        u2.name = name;
      }
      try { event(u2.id, 'google_login', null, { email }); } catch {}
    }

    const t = token({ id: u2.id, role: u2.role, email: u2.email, name: u2.name });
    const avatar = picture || ('https://api.dicebear.com/7.x/initials/svg?seed=' + encodeURIComponent(u2.name) + '&backgroundColor=4285f4,34a853,fbbc05,ea4335');
    return json(res, 200, {
      user: {
        id: u2.id,
        name: u2.name,
        email: u2.email,
        role: u2.role,
        avatar_url: avatar,
        is_google: true
      },
      token: t
    });
  });
  if(p==='/api/auth/login'&&method==='POST')return body(req).then(async b=>{
   const email = String(b?.email||'').toLowerCase().trim();
   const password = String(b?.password||'');
   if(!email || !password) return sendError(res, 400, 'Email and password are required');

   let u2 = null;
   try {
     const { data, error } = await supabase.from('users').select('*').eq('email', email).maybeSingle();
     if (!error && data) u2 = data;
   } catch(e) {}

   if (!u2) {
     try { u2 = one('SELECT * FROM users WHERE email=?', [email]); } catch(e) {}
   }

   if(!u2 || !verifyPassword(password, u2.password_hash)) {
     return sendError(res, 401, 'Invalid email or password');
   }

   return json(res, 200, {
     user: { id: u2.id, name: u2.name, email: u2.email, role: u2.role },
     token: token({ id: u2.id, role: u2.role, email: u2.email, name: u2.name })
   });
 });
 if(p==='/api/me'){if(!user)return sendError(res,401,'Authentication required');const u2=one('SELECT id,name,email,role,created_at FROM users WHERE id=?',[user.id]);return json(res,200,{user:u2});}
 if(p==='/api/religions'&&method==='GET'){
  const data = await getSupabaseReligions();
  if (data && data.length > 0) {
    return json(res, 200, data);
  }
  return json(res,200,q("SELECT * FROM religions WHERE active=1 ORDER BY CASE name WHEN 'Hinduism' THEN 1 WHEN 'Islam' THEN 2 WHEN 'Christianity' THEN 3 ELSE 4 END, name"));
 }
 const rid=p.match(/^\/api\/religions\/(\d+)$/);if(rid&&method==='GET'){const r=one('SELECT * FROM religions WHERE id=? AND active=1',[Number(rid[1])]);if(!r)return sendError(res,404,'Religion not found');return json(res,200,r); }
 if(p==='/api/festivals'&&method==='GET'){
  const search=u.searchParams.get('search')||'';
  const religion=u.searchParams.get('religion')||'';
  const region=u.searchParams.get('region')||'';
  const category=u.searchParams.get('category')||'';
  const month=u.searchParams.get('month')||'';

  const list = await getSupabaseFestivals({ search, religion, region, category, month });
  if (list && list.length > 0) {
    return json(res, 200, list);
  }

  let sql=`SELECT f.id,f.name,f.category,f.description,f.country,f.region,f.typical_date,f.duration,r.name religion,r.icon religion_icon FROM festivals f JOIN religions r ON r.id=f.religion_id WHERE f.status='published'`;
  const args=[];
  if(search){sql+=' AND (LOWER(f.name) LIKE ? OR LOWER(f.description) LIKE ? OR LOWER(f.region) LIKE ?)';const x='%'+search.toLowerCase()+'%';args.push(x,x,x)}
  if(religion){sql+=' AND f.religion_id=?';args.push(religion)}
  if(region){sql+=' AND LOWER(f.region) LIKE ?';args.push('%'+region.toLowerCase()+'%')}
  if(category){sql+=' AND f.category=?';args.push(category)}
  if(month){sql+=' AND LOWER(f.typical_date) LIKE ?';args.push('%'+month.toLowerCase()+'%')}
  sql+=' ORDER BY f.name';
  return json(res,200,q(sql,args));
 }
 if(p==='/api/festivals/with-locations'&&method==='GET'){
  const religion=u.searchParams.get('religion')||'';
  const search=(u.searchParams.get('search')||'').trim().toLowerCase();
  const country=u.searchParams.get('country')||'';
  const city=u.searchParams.get('city')||'';

  const sql=`
    SELECT f.id, f.name, f.category, f.description, f.country, f.region, f.typical_date, f.duration,
           r.id as religion_id, r.name as religion, r.icon as religion_icon,
           COUNT(DISTINCT fl.id) as location_count,
           GROUP_CONCAT(DISTINCT fl.id || ':::' || fl.name || ':::' || COALESCE(fl.city, '') || ':::' || COALESCE(fl.state, '') || ':::' || COALESCE(fl.country, '') || ':::' || fl.latitude || ':::' || fl.longitude || ':::' || COALESCE(fl.place_type, '')) as locations_concat,
           (SELECT m.url FROM media m WHERE m.festival_id=f.id AND m.type='image' LIMIT 1) as media_image
    FROM festivals f
    JOIN religions r ON r.id=f.religion_id
    LEFT JOIN festival_location_relations flr ON flr.festival_id=f.id
    LEFT JOIN festival_locations fl ON fl.id=flr.location_id AND fl.verification_status='published'
    WHERE f.status='published'
    GROUP BY f.id
    ORDER BY f.name ASC
  `;

  let rows = q(sql);
  rows = rows.map(r => {
    const locs = [];
    if(r.locations_concat){
      r.locations_concat.split(',').forEach(item => {
        const p = item.split(':::');
        if(p[0] && p[5] && p[6]){
          locs.push({
            id: Number(p[0]),
            name: p[1],
            city: p[2],
            state: p[3],
            country: p[4],
            latitude: Number(p[5]),
            longitude: Number(p[6]),
            place_type: p[7]
          });
        }
      });
    }
    delete r.locations_concat;
    r.locations = locs;
    r.has_location = locs.length > 0;
    return r;
  });

  if(religion){
    rows = rows.filter(r => r.religion.toLowerCase() === religion.toLowerCase());
  }
  if(search){
    rows = rows.filter(r => {
      const inFest = r.name.toLowerCase().includes(search) || (r.description||'').toLowerCase().includes(search) || (r.region||'').toLowerCase().includes(search);
      const inLoc = r.locations.some(l => l.name.toLowerCase().includes(search) || l.city.toLowerCase().includes(search) || l.country.toLowerCase().includes(search));
      return inFest || inLoc;
    });
  }
  if(country){
    rows = rows.filter(r => (r.country||'').toLowerCase().includes(country.toLowerCase()) || r.locations.some(l => l.country.toLowerCase().includes(country.toLowerCase())));
  }
  if(city){
    rows = rows.filter(r => r.locations.some(l => (l.city||'').toLowerCase().includes(city.toLowerCase())));
  }

  return json(res, 200, rows);
 }
 const fm=p.match(/^\/api\/festivals\/(\d+)$/);if(fm&&method==='GET'){const isAdmin=Boolean(user&&user.role==='admin');let f=await getFullFestivalFromSupabase(Number(fm[1]),isAdmin);if(!f)f=getFullFestival(Number(fm[1]),isAdmin);if(!f)return sendError(res,404,'Festival not found');event(user?.id,'festival_view',f.id);return json(res,200,f);}
 if(p==='/api/calendar'&&method==='GET'){const year=u.searchParams.get('year')||String(new Date().getFullYear());const religion=u.searchParams.get('religion')||'';const search=(u.searchParams.get('search')||'').toLowerCase();const upcoming=u.searchParams.get('upcoming')==='true';const limit=Math.min(Number(u.searchParams.get('limit')||500),2000);let sql=`SELECT ce.id,ce.event_date,ce.year,ce.month,ce.day,ce.weekday,ce.title,ce.lunar_month,ce.tithi,ce.festival_id,r.name religion,r.icon religion_icon,f.name festival_name,f.category FROM calendar_events ce JOIN religions r ON r.id=ce.religion_id LEFT JOIN festivals f ON f.id=ce.festival_id WHERE ce.year=?`;const args=[Number(year)];if(religion){sql+=' AND ce.religion_id=?';args.push(Number(religion))}if(upcoming){const d=new Date();const yyyymmdd=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;sql+=' AND ce.event_date >= ?';args.push(yyyymmdd);}if(search){sql+=" AND (LOWER(ce.title) LIKE ? OR LOWER(COALESCE(f.name,'')) LIKE ?)";const x='%'+search+'%';args.push(x,x)}sql+=' ORDER BY ce.event_date,ce.title LIMIT ?';args.push(limit);let rows=q(sql,args);if(!rows.length && !search){let fallback=`SELECT f.id festival_id,f.name,f.category,f.typical_date event_date,f.region,r.name religion,r.icon religion_icon FROM festivals f JOIN religions r ON r.id=f.religion_id WHERE f.status='published'`;const fa=[];if(religion){fallback+=' AND f.religion_id=?';fa.push(Number(religion))}fallback+=' ORDER BY f.name LIMIT ?';fa.push(limit);rows=q(fallback,fa)}return json(res,200,rows);}
 if(p==='/api/search'&&method==='GET'){const s=u.searchParams.get('q')||'';return json(res,200,q(`SELECT f.id,f.name,f.category,f.region,r.name religion FROM festivals f JOIN religions r ON r.id=f.religion_id WHERE f.status='published' AND (LOWER(f.name) LIKE ? OR LOWER(f.description) LIKE ?) ORDER BY f.name`,['%'+s.toLowerCase()+'%','%'+s.toLowerCase()+'%']));}
 if(p==='/api/map'&&method==='GET')return json(res,200,q(`SELECT DISTINCT region,country,COUNT(*) count FROM festivals WHERE status='published' GROUP BY country,region ORDER BY country,region`));
 if(p==='/api/locations'&&method==='GET'){
  const religion = u.searchParams.get('religion') || '';
  const festivalId = u.searchParams.get('festival_id') || '';
  const search = (u.searchParams.get('search') || '').trim().toLowerCase();
  const city = (u.searchParams.get('city') || '').trim().toLowerCase();
  const placeType = u.searchParams.get('place_type') || '';
  const userLat = parseFloat(u.searchParams.get('lat'));
  const userLng = parseFloat(u.searchParams.get('lng'));
  const radiusKm = parseFloat(u.searchParams.get('radius')) || 500;

  let sql = `
    SELECT DISTINCT 
      fl.*,
      GROUP_CONCAT(DISTINCT f.id || ':::' || f.name || ':::' || COALESCE(r.icon, '')) as festivals_concat
    FROM festival_locations fl
    LEFT JOIN festival_location_relations flr ON flr.location_id = fl.id
    LEFT JOIN festivals f ON f.id = flr.festival_id
    LEFT JOIN religions r ON r.id = f.religion_id
    WHERE fl.verification_status = 'published'
  `;
  const args = [];

  if (religion) {
    sql += ' AND LOWER(fl.religion) = LOWER(?)';
    args.push(religion);
  }
  if (festivalId) {
    sql += ' AND flr.festival_id = ?';
    args.push(Number(festivalId));
  }
  if (placeType) {
    sql += ' AND fl.place_type = ?';
    args.push(placeType);
  }
  if (city) {
    sql += ' AND (LOWER(fl.city) LIKE ? OR LOWER(fl.state) LIKE ?)';
    args.push('%' + city + '%', '%' + city + '%');
  }
  if (search) {
    sql += " AND (LOWER(fl.name) LIKE ? OR LOWER(fl.city) LIKE ? OR LOWER(fl.state) LIKE ? OR LOWER(fl.country) LIKE ? OR LOWER(fl.description) LIKE ? OR LOWER(COALESCE(f.name, '')) LIKE ?)";
    const s = '%' + search + '%';
    args.push(s, s, s, s, s, s);
  }

  sql += ' GROUP BY fl.id ORDER BY fl.name ASC';

  let rows = q(sql, args);

  rows = rows.map(row => {
    const related = [];
    if (row.festivals_concat) {
      row.festivals_concat.split(',').forEach(item => {
        const parts = item.split(':::');
        if (parts[0]) {
          related.push({ id: Number(parts[0]), name: parts[1] || '', icon: parts[2] || '' });
        }
      });
    }
    delete row.festivals_concat;
    row.festivals = related;

    if (!isNaN(userLat) && !isNaN(userLng)) {
      const R = 6371; // Earth radius in km
      const dLat = (row.latitude - userLat) * Math.PI / 180;
      const dLon = (row.longitude - userLng) * Math.PI / 180;
      const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(userLat * Math.PI / 180) * Math.cos(row.latitude * Math.PI / 180) *
                Math.sin(dLon/2) * Math.sin(dLon/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      row.distance_km = Math.round(R * c);
    }
    return row;
  });

  if (!isNaN(userLat) && !isNaN(userLng) && u.searchParams.get('nearby') === 'true') {
    rows = rows.filter(r => (r.distance_km !== undefined && r.distance_km <= radiusKm)).sort((a,b) => (a.distance_km || 0) - (b.distance_km || 0));
  }

  return json(res, 200, rows);
 }
 const locIdMatch = p.match(/^\/api\/locations\/(\d+)$/);
 if (locIdMatch && method === 'GET') {
  const locId = Number(locIdMatch[1]);
  const loc = one('SELECT * FROM festival_locations WHERE id=?', [locId]);
  if (!loc) return sendError(res, 404, 'Location not found');
  loc.festivals = q(`
    SELECT f.id, f.name, f.category, f.typical_date, r.name as religion, r.icon as religion_icon, flr.significance_notes
    FROM festival_location_relations flr
    JOIN festivals f ON f.id = flr.festival_id
    JOIN religions r ON r.id = f.religion_id
    WHERE flr.location_id = ?
  `, [locId]);
  return json(res, 200, loc);
 }
 if(p==='/api/favorites'&&method==='GET'){if(!user)return sendError(res,401,'Authentication required');return json(res,200,q(`SELECT f.*,r.name religion,r.icon religion_icon FROM favorites x JOIN festivals f ON f.id=x.festival_id JOIN religions r ON r.id=f.religion_id WHERE x.user_id=? ORDER BY x.id DESC`,[user.id]));}
 const fav=p.match(/^\/api\/favorites\/(\d+)$/);if(fav&&method==='POST'){if(!user)return sendError(res,401,'Authentication required');run('INSERT OR IGNORE INTO favorites(user_id,festival_id) VALUES(?,?)',[user.id,Number(fav[1])]);event(user.id,'favorite_add',Number(fav[1]));return json(res,200,{ok:true});}if(fav&&method==='DELETE'){if(!user)return sendError(res,401,'Authentication required');run('DELETE FROM favorites WHERE user_id=? AND festival_id=?',[user.id,Number(fav[1])]);return json(res,200,{ok:true});}
 if(p==='/api/progress'&&method==='GET'){if(!user)return sendError(res,401,'Authentication required');return json(res,200,q('SELECT * FROM progress WHERE user_id=?',[user.id]));}
 if(p==='/api/progress'&&method==='POST'){if(!user)return sendError(res,401,'Authentication required');return body(req).then(b=>{run(`INSERT INTO progress(user_id,festival_id,step,completed,updated_at) VALUES(?,?,?,?,CURRENT_TIMESTAMP) ON CONFLICT(user_id,festival_id) DO UPDATE SET step=excluded.step,completed=excluded.completed,updated_at=CURRENT_TIMESTAMP`,[user.id,b.festival_id,Number(b.step||0),b.completed?1:0]);event(user.id,b.completed?'learning_complete':'learning_progress',b.festival_id,{step:b.step});if(b.completed)award(user.id,'learner');return json(res,200,{ok:true});});}
 const quiz=p.match(/^\/api\/quiz\/(\d+)$/);if(quiz&&method==='GET'){return json(res,200,q('SELECT id,question,options_json,answer_index FROM quiz_questions WHERE festival_id=?',[Number(quiz[1])]).map(x=>({id:x.id,question:x.question,options:JSON.parse(x.options_json)})));}if(quiz&&method==='POST'){return body(req).then(b=>{const qs=q('SELECT id,answer_index FROM quiz_questions WHERE festival_id=?',[Number(quiz[1])]);const answers=b.answers||{};let score=0;const details={};qs.forEach(x=>{const chosen=Number(answers[x.id]);const isCorrect=chosen===x.answer_index;if(isCorrect)score++;details[x.id]={chosen,correct:x.answer_index,isCorrect};});const pct=qs.length?Math.round(score*100/qs.length):0;if(user){run('INSERT INTO quiz_attempts(user_id,festival_id,score,total,percentage) VALUES(?,?,?,?,?)',[user.id,Number(quiz[1]),score,qs.length,pct]);if(pct>=80)award(user.id,'quizmaster');event(user.id,'quiz_complete',Number(quiz[1]),{score,pct});}return json(res,200,{score,total:qs.length,percentage:pct,details});});}
 if(p==='/api/reminders'&&method==='POST'){return body(req).then(b=>{if(user){run('INSERT INTO reminders(user_id,festival_id,reminder_days,enabled) VALUES(?,?,?,1) ON CONFLICT(user_id,festival_id) DO UPDATE SET reminder_days=excluded.reminder_days,enabled=1',[user.id,b.festival_id,Number(b.reminder_days||7)]);}return json(res,200,{ok:true});});}
 if(p==='/api/reminders'&&method==='GET'){if(!user)return sendError(res,401,'Authentication required');return json(res,200,q(`SELECT m.*,f.name festival,f.typical_date FROM reminders m JOIN festivals f ON f.id=m.festival_id WHERE m.user_id=? ORDER BY m.id DESC`,[user.id]));}
 if(p==='/api/badges'&&method==='GET'){if(!user)return sendError(res,401,'Authentication required');return json(res,200,q(`SELECT b.*,ub.earned_at FROM user_badges ub JOIN badges b ON b.id=ub.badge_id WHERE ub.user_id=? ORDER BY ub.earned_at DESC`,[user.id]));}
 if(p==='/api/profile'&&method==='GET'){if(!user)return sendError(res,401,'Authentication required');const u2=one('SELECT id,name,email,role,created_at FROM users WHERE id=?',[user.id]);const badges=q(`SELECT b.name,b.description,ub.earned_at FROM user_badges ub JOIN badges b ON b.id=ub.badge_id WHERE ub.user_id=?`,[user.id]);return json(res,200,{user:u2,badges});}
 if(p==='/api/assistant'&&method==='POST'){return body(req).then(async b=>{if(!process.env.AI_API_URL||!process.env.AI_API_KEY)return json(res,503,{error:'AI assistant is not configured. The core FaithFest application remains available.'});try{const rr=await fetch(process.env.AI_API_URL,{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+process.env.AI_API_KEY},body:JSON.stringify({message:b.message,festival_id:b.festival_id})});const data=await rr.json();return json(res,rr.status,{answer:data.answer||data.output||'AI provider returned no answer.'});}catch(e){return sendError(res,502,'AI provider unavailable');}});}
 if(p==='/api/reports'&&method==='POST'){
   return body(req).then(b=>{
    if(!b||!b.festival_id||!b.reason)return sendError(res,400,'Festival and reason are required');
    const reporterId = user ? user.id : null;
    run('INSERT INTO reported_content(user_id,festival_id,reason) VALUES(?,?,?)',[reporterId,Number(b.festival_id),b.reason.trim()]);
    return json(res,201,{ok:true,message:'Report submitted for administrative review'});
   });
  }
 if(p.startsWith('/api/admin/')){if(!user||user.role!=='admin')return sendError(res,403,'Admin access required');return adminRoute(req,res,u,user);}
 serveStatic(req,res,p);
}
function award(uid,code){const b=one('SELECT id FROM badges WHERE code=?',[code]);if(b)run('INSERT OR IGNORE INTO user_badges(user_id,badge_id) VALUES(?,?)',[uid,b.id]);}
async function adminRoute(req,res,u,user){
 const p=u.pathname;
 if(p==='/api/admin/stats'){
  const users=one('SELECT COUNT(*) c FROM users').c;
  const festivals=one("SELECT COUNT(*) c FROM festivals WHERE status='published'").c;
  const draftFestivals=one("SELECT COUNT(*) c FROM festivals WHERE status!='published'").c;
  const views=one("SELECT COUNT(*) c FROM analytics_events WHERE event_type='festival_view'").c;
  const quiz_attempts=one('SELECT COUNT(*) c FROM quiz_attempts').c;
  const favorites=one('SELECT COUNT(*) c FROM favorites').c;
  const reported=one("SELECT COUNT(*) c FROM reported_content WHERE status='pending'").c;
  const religionCounts=q("SELECT r.name, COUNT(f.id) count FROM religions r LEFT JOIN festivals f ON f.religion_id=r.id GROUP BY r.id");
  const popular=q(`SELECT f.id, f.name, r.name religion, COUNT(ae.id) views FROM festivals f JOIN religions r ON r.id=f.religion_id LEFT JOIN analytics_events ae ON ae.festival_id=f.id AND ae.event_type='festival_view' GROUP BY f.id ORDER BY views DESC LIMIT 6`);
  const recentQuiz=q(`SELECT qa.id, u.name user_name, u.email, f.name festival_name, qa.score, qa.total, qa.percentage, qa.created_at FROM quiz_attempts qa JOIN users u ON u.id=qa.user_id JOIN festivals f ON f.id=qa.festival_id ORDER BY qa.id DESC LIMIT 8`);
  return json(res,200,{users,festivals,draftFestivals,views,quiz_attempts,favorites,pendingReports:reported,religionCounts,popular,recentQuiz});
 }
 if(p==='/api/admin/festivals'&&req.method==='POST')return body(req).then(b=>{
  if(!b.name||!b.religion_id)return sendError(res,400,'Name and religion are required');
  const r=run(`INSERT INTO festivals(religion_id,name,category,description,country,region,typical_date,duration,status,historical_information,significance,celebration,modern_celebration) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
   [b.religion_id,b.name,b.category||'Festival',b.description||'',b.country||'Global',b.region||'Global',b.typical_date||'Date varies',b.duration||'Varies',b.status||'draft',b.history||'',b.significance||'',b.celebration||'',b.modern||'']);
  audit(user.id,'create_festival','festivals',r.lastInsertRowid,{name:b.name,status:b.status||'draft'});
  return json(res,201,{id:r.lastInsertRowid});
 });
 const m=p.match(/^\/api\/admin\/festivals\/(\d+)$/);
 if(m&&req.method==='GET'){
  const f=getFullFestival(Number(m[1]),true);
  if(!f)return sendError(res,404,'Festival not found');
  return json(res,200,f);
 }
 if(m&&req.method==='PUT')return body(req).then(b=>{
  const id=Number(m[1]);
  run(`UPDATE festivals SET name=COALESCE(?,name),religion_id=COALESCE(?,religion_id),category=COALESCE(?,category),description=COALESCE(?,description),country=COALESCE(?,country),region=COALESCE(?,region),typical_date=COALESCE(?,typical_date),duration=COALESCE(?,duration),status=COALESCE(?,status),historical_information=COALESCE(?,historical_information),significance=COALESCE(?,significance),celebration=COALESCE(?,celebration),modern_celebration=COALESCE(?,modern_celebration),updated_at=CURRENT_TIMESTAMP WHERE id=?`,
   [b.name,b.religion_id,b.category,b.description,b.country,b.region,b.typical_date,b.duration,b.status,b.history,b.significance,b.celebration,b.modern,id]);
  audit(user.id,'update_festival','festivals',id,{name:b.name,status:b.status});
  return json(res,200,{ok:true});
 });
 const mStatus=p.match(/^\/api\/admin\/festivals\/(\d+)\/status$/);
 if(mStatus&&req.method==='POST')return body(req).then(b=>{
  const id=Number(mStatus[1]);
  if(!['draft','under_review','approved','published'].includes(b.status))return sendError(res,400,'Invalid status');
  run("UPDATE festivals SET status=?, updated_at=CURRENT_TIMESTAMP WHERE id=?",[b.status,id]);
  run("INSERT INTO content_reviews(festival_id,reviewer_id,status,notes) VALUES(?,?,?,?)",[id,user.id,b.status,b.notes||'Status updated via Admin CMS']);
  audit(user.id,'update_status','festivals',id,{status:b.status,notes:b.notes});
  return json(res,200,{ok:true,status:b.status});
 });
 if(p==='/api/admin/festivals'&&req.method==='GET'){
  const rel=u.searchParams.get('religion');
  const stat=u.searchParams.get('status');
  let sql=`SELECT f.*,r.name religion,r.icon religion_icon FROM festivals f JOIN religions r ON r.id=f.religion_id WHERE 1=1`;
  const args=[];
  if(rel){sql+=' AND f.religion_id=?';args.push(rel);}
  if(stat){sql+=' AND f.status=?';args.push(stat);}
  sql+=' ORDER BY f.id DESC';
  return json(res,200,q(sql,args));
 }
 const del=p.match(/^\/api\/admin\/festivals\/(\d+)$/);
 if(del&&req.method==='DELETE'){
  const id=Number(del[1]);
  const f=one('SELECT name FROM festivals WHERE id=?',[id]);
  run('DELETE FROM festivals WHERE id=?',[id]);
  audit(user.id,'delete_festival','festivals',id,{name:f?.name});
  return json(res,200,{ok:true});
 }
 const child=p.match(/^\/api\/admin\/festivals\/(\d+)\/(history|foods|clothing|music|decorations|symbols|regions|media|references|quiz)$/);
 if(child&&req.method==='POST'){
  const id=Number(child[1]),type=child[2];
  const b=await body(req);
  const maps={
   history:['festival_history','period,title,description'],
   foods:['foods','name,description,ingredients,preparation,region,significance,image_url'],
   clothing:['clothing','name,category,description,region,cultural_context,image_url'],
   music:['music_dance','kind,name,description,region,media_url'],
   decorations:['decorations','name,description,meaning,region,image_url'],
   symbols:['symbols','name,description,meaning,region,image_url'],
   regions:['festival_regions','country,region,rituals,foods,clothing,music,decorations,celebration_style'],
   media:['media','type,url,caption,alt_text,source,license'],
   references:['references_table','source_name,source_type,url,author,publication_date,verification_status,last_reviewed'],
   quiz:['quiz_questions','question,options_json,answer_index']
  };
  const m2=maps[type];
  if(!m2)return sendError(res,400,'Unsupported content type');
  const fields=m2[1].split(',');
  const vals=fields.map(k=>k==='options_json'&&Array.isArray(b[k])?JSON.stringify(b[k]):b[k]??'');
  const r=run(`INSERT INTO ${m2[0]}(festival_id,${m2[1]}) VALUES(?,${fields.map(()=>'?').join(',')})`,[id,...vals]);
  audit(user.id,'add_'+type,'festivals',id,{item_id:r.lastInsertRowid});
  return json(res,201,{id:r.lastInsertRowid});
 }
 const delChild=p.match(/^\/api\/admin\/(history|foods|clothing|music|decorations|symbols|regions|media|references|quiz)\/(\d+)$/);
 if(delChild&&req.method==='DELETE'){
  const tableMap={
   history:'festival_history',foods:'foods',clothing:'clothing',music:'music_dance',decorations:'decorations',symbols:'symbols',regions:'festival_regions',media:'media',references:'references_table',quiz:'quiz_questions'
  };
  const tname=tableMap[delChild[1]];
  const rowId=Number(delChild[2]);
  if(tname){
   run(`DELETE FROM ${tname} WHERE id=?`,[rowId]);
   audit(user.id,'delete_'+delChild[1],tname,rowId,{});
   return json(res,200,{ok:true});
  }
 }
 // Calendar events management
 if(p==='/api/admin/calendar'&&req.method==='POST')return body(req).then(b=>{
  if(!b.title||!b.event_date||!b.religion_id)return sendError(res,400,'Title, date and religion are required');
  const parts=b.event_date.split('-');
  const y=Number(parts[0])||new Date().getFullYear();
  const m=Number(parts[1])||1;
  const d=Number(parts[2])||1;
  const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const wk=days[new Date(b.event_date).getDay()]||'';
  const r=run(`INSERT INTO calendar_events(religion_id,festival_id,event_date,year,month,day,weekday,title,lunar_month,tithi,source) VALUES(?,?,?,?,?,?,?,?,?,?,?)`,
   [b.religion_id,b.festival_id||null,b.event_date,y,m,d,wk,b.title,b.lunar_month||(b.is_provisional?'Provisional / Unconfirmed':'Confirmed'),b.tithi||b.timing||'',b.source||'Admin Verified Entry']);
  audit(user.id,'create_calendar_event','calendar_events',r.lastInsertRowid,{title:b.title,date:b.event_date});
  return json(res,201,{id:r.lastInsertRowid});
 });
 const calDel=p.match(/^\/api\/admin\/calendar\/(\d+)$/);
 if(calDel&&req.method==='DELETE'){
  const id=Number(calDel[1]);
  run('DELETE FROM calendar_events WHERE id=?',[id]);
  audit(user.id,'delete_calendar_event','calendar_events',id,{});
  return json(res,200,{ok:true});
 }
 // User accounts management
 if(p==='/api/admin/users'&&req.method==='GET'){
  return json(res,200,q(`SELECT id,name,email,role,created_at FROM users ORDER BY id DESC`));
 }
 const userRole=p.match(/^\/api\/admin\/users\/(\d+)\/role$/);
 if(userRole&&req.method==='PUT')return body(req).then(b=>{
  const uid=Number(userRole[1]);
  if(!['user','admin','moderator'].includes(b.role))return sendError(res,400,'Invalid role');
  if(uid===user.id&&b.role!=='admin')return sendError(res,400,'Cannot demote yourself');
  run('UPDATE users SET role=? WHERE id=?',[b.role,uid]);
  audit(user.id,'change_user_role','users',uid,{new_role:b.role});
  return json(res,200,{ok:true});
 });
 const userDel=p.match(/^\/api\/admin\/users\/(\d+)$/);
 if(userDel&&req.method==='DELETE'){
  const uid=Number(userDel[1]);
  if(uid===user.id)return sendError(res,400,'Cannot delete your own account');
  run('DELETE FROM users WHERE id=?',[uid]);
  audit(user.id,'delete_user','users',uid,{});
  return json(res,200,{ok:true});
 }
 // Audit logs
 if(p==='/api/admin/audit'&&req.method==='GET'){
  return json(res,200,q(`SELECT a.*, u.name admin_name, u.email admin_email FROM audit_logs a LEFT JOIN users u ON u.id=a.user_id ORDER BY a.id DESC LIMIT 100`));
 }
 // Reported content
 if(p==='/api/admin/reports'&&req.method==='GET'){
  return json(res,200,q(`SELECT r.*, f.name festival_name, u.name user_name, u.email user_email FROM reported_content r LEFT JOIN festivals f ON f.id=r.festival_id LEFT JOIN users u ON u.id=r.user_id ORDER BY r.id DESC`));
 }
 const repResolve=p.match(/^\/api\/admin\/reports\/(\d+)\/resolve$/);
 if(repResolve&&req.method==='POST')return body(req).then(b=>{
  const rid=Number(repResolve[1]);
  run(`UPDATE reported_content SET status=?, admin_notes=?, resolved_at=CURRENT_TIMESTAMP WHERE id=?`,[b.status||'resolved',b.notes||'Resolved by admin',rid]);
  audit(user.id,'resolve_report','reported_content',rid,{status:b.status});
  return json(res,200,{ok:true});
 });
 if(p==='/api/admin/events')return json(res,200,q(`SELECT event_type,COUNT(*) count FROM analytics_events GROUP BY event_type ORDER BY count DESC`));
 if(p==='/api/admin/religions'&&req.method==='POST')return body(req).then(b=>{if(!b.name)return sendError(res,400,'Religion name is required');const r=run('INSERT INTO religions(name,description,icon,active) VALUES(?,?,?,1)',[b.name,b.description||'',b.icon||'✦']);audit(user.id,'create_religion','religions',r.lastInsertRowid,{name:b.name});return json(res,201,{id:r.lastInsertRowid});});
 if(p==='/api/admin/locations/stats'&&req.method==='GET'){
  const total = one('SELECT COUNT(*) c FROM festival_locations').c;
  const published = one("SELECT COUNT(*) c FROM festival_locations WHERE verification_status='published'").c;
  const verified = one("SELECT COUNT(*) c FROM festival_locations WHERE verification_status='verified'").c;
  const draft = one("SELECT COUNT(*) c FROM festival_locations WHERE verification_status='draft'").c;
  const under_review = one("SELECT COUNT(*) c FROM festival_locations WHERE verification_status='under_review'").c;
  const archived = one("SELECT COUNT(*) c FROM festival_locations WHERE verification_status='archived'").c;
  const missing_coords = one("SELECT COUNT(*) c FROM festival_locations WHERE latitude IS NULL OR longitude IS NULL OR latitude=0 OR longitude=0").c;
  const missing_source = one("SELECT COUNT(*) c FROM festival_locations WHERE source_url IS NULL OR source_url=''").c;
  const religion_dist = q("SELECT religion, COUNT(*) count FROM festival_locations GROUP BY religion");
  const type_dist = q("SELECT place_type, COUNT(*) count FROM festival_locations GROUP BY place_type");
  const status_dist = q("SELECT verification_status, COUNT(*) count FROM festival_locations GROUP BY verification_status");
  const reported_locations = one("SELECT COUNT(DISTINCT fl.id) c FROM festival_locations fl JOIN festival_location_relations flr ON flr.location_id=fl.id JOIN reported_content rc ON rc.festival_id=flr.festival_id WHERE rc.status='pending'").c;
  return json(res,200,{total,published,verified,draft,under_review,archived,missing_coords,missing_source,religion_dist,type_dist,status_dist,reported_locations});
 }
 if(p==='/api/admin/locations'&&req.method==='GET'){
  return json(res,200,q(`
    SELECT fl.*, 
           COUNT(DISTINCT flr.festival_id) as festival_count,
           GROUP_CONCAT(DISTINCT f.name) as festival_names,
           GROUP_CONCAT(DISTINCT f.id || ':::' || f.name) as festival_details
    FROM festival_locations fl 
    LEFT JOIN festival_location_relations flr ON flr.location_id=fl.id 
    LEFT JOIN festivals f ON f.id=flr.festival_id 
    GROUP BY fl.id 
    ORDER BY fl.id DESC
  `));
 }
 if(p==='/api/admin/locations'&&req.method==='POST')return body(req).then(b=>{
  if(!b.name||!b.religion||b.latitude===undefined||b.longitude===undefined)return sendError(res,400,'Name, religion, latitude and longitude are required');
  const lat = Number(b.latitude);
  const lng = Number(b.longitude);
  if(isNaN(lat) || lat < -90 || lat > 90) return sendError(res,400,'Latitude must be between -90 and 90');
  if(isNaN(lng) || lng < -180 || lng > 180) return sendError(res,400,'Longitude must be between -180 and 180');
  
  const existing = one('SELECT id FROM festival_locations WHERE LOWER(name)=LOWER(?) AND LOWER(city)=LOWER(?)',[b.name.trim(),(b.city||'').trim()]);
  if(existing) return sendError(res,400,'A location with this name and city already exists (ID: #' + existing.id + ')');

  const r=run(`INSERT INTO festival_locations (name,religion,address,city,state,country,latitude,longitude,description,image_url,source_url,place_type,seasonal_notes,verification_status) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
   [b.name.trim(),b.religion,b.address||'',b.city||'',b.state||'',b.country||'India',lat,lng,b.description||'',b.image_url||'',b.source_url||'',b.place_type||'place_of_worship',b.seasonal_notes||'',b.verification_status||'draft']);
  const locId=r.lastInsertRowid;
  if(Array.isArray(b.festival_ids)){b.festival_ids.forEach(fid=>run('INSERT OR IGNORE INTO festival_location_relations(location_id,festival_id) VALUES(?,?)',[locId,Number(fid)]));}
  audit(user.id,'create_location','festival_locations',locId,{name:b.name,religion:b.religion,status:b.verification_status||'draft',lat,lng});
  return json(res,201,{id:locId,ok:true});
 });
 const adminLocCoordsMatch=p.match(/^\/api\/admin\/locations\/(\d+)\/coordinates$/);
 if(adminLocCoordsMatch&&req.method==='PUT')return body(req).then(b=>{
  const id=Number(adminLocCoordsMatch[1]);
  const lat=Number(b.latitude);
  const lng=Number(b.longitude);
  if(isNaN(lat)||lat<-90||lat>90||isNaN(lng)||lng<-180||lng>180) return sendError(res,400,'Valid latitude and longitude coordinates required');
  run(`UPDATE festival_locations SET latitude=?, longitude=?, updated_at=CURRENT_TIMESTAMP WHERE id=?`,[lat,lng,id]);
  audit(user.id,'update_location_coordinates','festival_locations',id,{latitude:lat,longitude:lng});
  return json(res,200,{ok:true});
 });
 const adminLocStatusMatch=p.match(/^\/api\/admin\/locations\/(\d+)\/status$/);
 if(adminLocStatusMatch&&req.method==='PUT')return body(req).then(b=>{
  const id=Number(adminLocStatusMatch[1]);
  const valid=['draft','under_review','verified','published','archived'];
  if(!valid.includes(b.verification_status)) return sendError(res,400,'Invalid status');
  run(`UPDATE festival_locations SET verification_status=?, updated_at=CURRENT_TIMESTAMP WHERE id=?`,[b.verification_status,id]);
  audit(user.id,'update_location_status','festival_locations',id,{verification_status:b.verification_status,notes:b.notes||''});
  return json(res,200,{ok:true});
 });
 const adminLocMatch=p.match(/^\/api\/admin\/locations\/(\d+)$/);
 if(adminLocMatch&&req.method==='PUT')return body(req).then(b=>{
  const id=Number(adminLocMatch[1]);
  const lat = b.latitude!==undefined && b.latitude!=='' ? Number(b.latitude) : null;
  const lng = b.longitude!==undefined && b.longitude!=='' ? Number(b.longitude) : null;
  if(lat!==null && (isNaN(lat)||lat<-90||lat>90)) return sendError(res,400,'Latitude must be between -90 and 90');
  if(lng!==null && (isNaN(lng)||lng<-180||lng>180)) return sendError(res,400,'Longitude must be between -180 and 180');
  run(`UPDATE festival_locations SET name=COALESCE(?,name),religion=COALESCE(?,religion),address=COALESCE(?,address),city=COALESCE(?,city),state=COALESCE(?,state),country=COALESCE(?,country),latitude=COALESCE(?,latitude),longitude=COALESCE(?,longitude),description=COALESCE(?,description),image_url=COALESCE(?,image_url),source_url=COALESCE(?,source_url),place_type=COALESCE(?,place_type),seasonal_notes=COALESCE(?,seasonal_notes),verification_status=COALESCE(?,verification_status),updated_at=CURRENT_TIMESTAMP WHERE id=?`,
   [b.name,b.religion,b.address,b.city,b.state,b.country,lat,lng,b.description,b.image_url,b.source_url,b.place_type,b.seasonal_notes,b.verification_status,id]);
  if(Array.isArray(b.festival_ids)){run('DELETE FROM festival_location_relations WHERE location_id=?',[id]);b.festival_ids.forEach(fid=>run('INSERT OR IGNORE INTO festival_location_relations(location_id,festival_id) VALUES(?,?)',[id,Number(fid)]));}
  audit(user.id,'update_location','festival_locations',id,{name:b.name,status:b.verification_status});
  return json(res,200,{ok:true});
 });
 if(adminLocMatch&&req.method==='DELETE'){
  const id=Number(adminLocMatch[1]);
  const prev=one('SELECT name FROM festival_locations WHERE id=?',[id]);
  run('DELETE FROM festival_location_relations WHERE location_id=?',[id]);
  run('DELETE FROM festival_locations WHERE id=?',[id]);
  audit(user.id,'delete_location','festival_locations',id,{name:prev?.name});
  return json(res,200,{ok:true});
 }
 return sendError(res,404,'Admin endpoint not found');
}
function serveStatic(req,res,p){let file=p==='/'?'/index.html':p;file=path.normalize(file).replace(/^([.][.][/\\])+/, '');const fp=path.join(PUBLIC,file);if(!fp.startsWith(PUBLIC)||!fs.existsSync(fp)||fs.statSync(fp).isDirectory())return sendError(res,404,'Not found');const ext=path.extname(fp);const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.svg':'image/svg+xml'};res.writeHead(200,{'Content-Type':types[ext]||'application/octet-stream','Cache-Control':'no-cache, no-store, must-revalidate','Pragma':'no-cache','Expires':'0'});fs.createReadStream(fp).pipe(res);}
const handler = (req, res) => {
  try {
    Promise.resolve(route(req, res)).catch(e => {
      console.error(`[Server Error] ${req.method} ${req.url}:`, e);
      if (!res.headersSent) sendError(res, 500, e.message || 'Internal server error');
    });
  } catch(e) {
    console.error(`[Server Sync Error] ${req.method} ${req.url}:`, e);
    if (!res.headersSent) sendError(res, 500, e.message || 'Internal server error');
  }
};

const server = http.createServer(handler);

const isServerless = Boolean(process.env.VERCEL || process.env.NOW_REGION || process.env.AWS_LAMBDA_FUNCTION_NAME);

if (!isServerless && require.main === module) {
  server.listen(PORT, () => {
    console.log(`FaithFest running at http://localhost:${PORT}`);
    (async () => {
      try {
        await getSupabaseReligions();
        await getSupabaseFestivals();
        await getFullFestivalFromSupabase(1);
        console.log('⚡ Supabase cloud cache initialized');
      } catch(e) {}
      try { ragEngine.buildIndex(); } catch(e) { console.error('Error pre-indexing RAG engine:', e); }
    })();
  });
} else {
  (async () => {
    try {
      await getSupabaseReligions();
      await getSupabaseFestivals();
    } catch(e) {}
    try { ragEngine.buildIndex(); } catch(e) {}
  })();
}

module.exports = handler;
module.exports.default = handler;
module.exports.handler = handler;
module.exports.server = server;
module.exports.route = route;
