const fs = require('fs');
const path = require('path');
const os = require('os');
const { DatabaseSync } = require('node:sqlite');
const crypto = require('crypto');

const isServerless = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || process.env.NOW_REGION);
const dataDir = isServerless ? path.join(os.tmpdir(), 'faithfest-data') : path.join(__dirname, 'data');
try { fs.mkdirSync(dataDir, { recursive: true }); } catch (e) {}

const dbPath = path.join(dataDir, 'faithfest.db');
const existingSeed = path.join(__dirname, 'data', 'faithfest.db');
if (isServerless && fs.existsSync(existingSeed) && !fs.existsSync(dbPath)) {
  try { fs.copyFileSync(existingSeed, dbPath); } catch (e) {}
}

const db = new DatabaseSync(dbPath);
try {
  db.exec(fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8'));
} catch (e) {}

function q(sql, params=[]) {
  try { return db.prepare(sql).all(...params); } catch (e) { return []; }
}
function one(sql, params=[]) {
  try { return db.prepare(sql).get(...params); } catch (e) { return null; }
}
function run(sql, params=[]) {
  try { return db.prepare(sql).run(...params); } catch (e) { return { changes: 0, lastInsertRowid: 0 }; }
}
function hashPassword(password, salt=crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}
function verifyPassword(password, stored) {
  const [salt, hash] = String(stored).split(':');
  if (!salt || !hash) return false;
  const actual = crypto.scryptSync(password, salt, 64).toString('hex');
  return crypto.timingSafeEqual(Buffer.from(actual,'hex'), Buffer.from(hash,'hex'));
}
module.exports={db,q,one,run,hashPassword,verifyPassword};

try { autoSeed(); } catch (e) {}
function seedReligion(name, description, icon) {
  let r = one('SELECT * FROM religions WHERE name=?',[name]);
  if (!r) { run('INSERT INTO religions(name,description,icon) VALUES(?,?,?)',[name,description,icon]); r=one('SELECT * FROM religions WHERE name=?',[name]); }
  return r;
}
function seedFestival(r, data) {
  let f=one('SELECT * FROM festivals WHERE name=? AND religion_id=?',[data.name,r.id]);
  if (!f) {
    run(`INSERT INTO festivals(religion_id,name,category,description,country,region,typical_date,duration,status,historical_information,significance,celebration,modern_celebration) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`,[r.id,data.name,data.category,data.description,'India',data.region||'Global',data.date||'Date varies',data.duration||'Varies','published',data.history,data.significance,data.celebration,data.modern]);
    f=one('SELECT * FROM festivals WHERE name=? AND religion_id=?',[data.name,r.id]);
  }
  const ref=one('SELECT id FROM references_table WHERE festival_id=? LIMIT 1',[f.id]);
  if(!ref && data.ref) run('INSERT INTO references_table(festival_id,source_name,source_type,url,verification_status) VALUES(?,?,?,?,?)',[f.id,data.ref,'Reference',data.refUrl||'', 'demo']);
  if(!one('SELECT id FROM festival_history WHERE festival_id=? LIMIT 1',[f.id])) {
    (data.timeline||[]).forEach(x=>run('INSERT INTO festival_history(festival_id,period,title,description) VALUES(?,?,?,?)',[f.id,x[0],x[1],x[2]]));
  }
  if(!one('SELECT id FROM festival_regions WHERE festival_id=? LIMIT 1',[f.id])) run('INSERT INTO festival_regions(festival_id,country,region,rituals,foods,clothing,music,decorations,celebration_style) VALUES(?,?,?,?,?,?,?,?,?)',[f.id,'India',data.region||'Multiple regions',data.rituals||'',data.foods||'',data.clothing||'',data.music||'',data.decorations||'',data.celebration||'']);
  if(!one('SELECT id FROM quiz_questions WHERE festival_id=? LIMIT 1',[f.id])) (data.quiz||[]).forEach(x=>run('INSERT INTO quiz_questions(festival_id,question,options_json,answer_index) VALUES(?,?,?,?)',[f.id,x.q,JSON.stringify(x.o),x.a]));
  return f;
}
function autoSeed(){
  const h=seedReligion('Hinduism','A broad family of traditions with diverse festivals, observances and regional practices.','🕉️');
  const i=seedReligion('Islam','A global faith with important holy days, months and festivals whose dates often follow the Islamic lunar calendar.','☪️');
  const c=seedReligion('Christianity','A global Christian tradition with major holy days and festivals observed in different ways across denominations and regions.','✝️');
  const base=(name,category,description,region,date,duration,history,significance,celebration,modern,foods,clothing,music,decorations,question,options,answer,ref,refUrl)=>({name,category,description,region,date,duration,history,significance,celebration,modern,foods,clothing,music,decorations,quiz:[{q:question,o:options,a:answer}],ref,refUrl,timeline:[['Origins','Early development','Historical details vary by region and tradition; consult the cited source.'],['Regional development','Regional traditions','Practices developed differently across communities and places.'],['Modern era','Contemporary celebration','Modern celebrations combine inherited traditions with local practices.']]});
  seedFestival(h,base('Diwali','Festival','A widely celebrated festival of lights with diverse regional and religious traditions.','India','October/November','Several days','Diwali has multiple historical and religious narratives across South Asian traditions; practices differ by region.','Associated with themes such as light, renewal, prosperity, devotion and the triumph of good over evil in different traditions.','Families clean and decorate homes, light lamps, prepare foods, visit relatives and participate in prayers or other local customs.','Modern celebrations vary widely and may include community events and environmentally conscious practices.','Sweets, savory snacks, regional festive foods','Traditional regional festive clothing','Devotional and regional music; performances vary','Lamps, rangoli/kolam, flowers and lights','What is a common symbol of Diwali?',['Lamps','Snowflakes','Bells','Olive branches'],0,'Encyclopaedia Britannica','https://www.britannica.com/topic/Diwali-Hindu-festival'));
  seedFestival(h,base('Pongal','Festival','A Tamil harvest festival associated with thanksgiving, agriculture and community.','Tamil Nadu, India','January','4 days','Pongal is a longstanding Tamil harvest celebration with agricultural and regional traditions.','Expresses gratitude connected with the harvest, the Sun, cattle, family and community in Tamil traditions.','Bhogi, Thai Pongal, Mattu Pongal and Kaanum Pongal involve cleaning, cooking, honoring cattle, family visits and community activities.','Contemporary Pongal combines household traditions with public cultural programs and modern celebrations.','Pongal, sugarcane and regional festive foods','Veshti, saree and regional festive attire','Tamil folk music and regional performances','Kolam, sugarcane, decorated pots and cattle adornments','How many days are commonly associated with Pongal?',['2','3','4','7'],2,'Tamil Nadu Government – Pongal','https://www.tn.gov.in/'));
  seedFestival(h,base('Holi','Festival','A spring festival known for colors and community celebrations in many parts of India.','India','February/March','1–2 days','Holi has ancient roots and multiple regional narratives and practices.','Often associated with spring, community, renewal and religious stories that differ by tradition and region.','People gather for color play, music, food and community celebrations; customs vary by location.','Modern events may include organized community celebrations and awareness around safe, responsible color use.','Gujiya and regional sweets/snacks','Regional festive clothing','Folk and contemporary music','Colors, flowers and community decorations','What is strongly associated with Holi celebrations?',['Color','Snow','Lanterns only','Harvesting'],0,'Encyclopaedia Britannica – Holi','https://www.britannica.com/topic/Holi'));
  seedFestival(h,base('Maha Shivaratri','Holy Day','An important Hindu observance associated with Shiva, with regional practices varying.','India','February/March','1 day/night','The observance has long-standing Shaiva traditions and multiple narratives.','Associated with devotion, prayer, fasting and reflection in traditions dedicated to Shiva.','Devotees may visit temples, observe fasts, perform prayers and participate in night vigils.','Practices vary by region, temple and family tradition.','Fruits, milk-based preparations and regional fasting foods','Traditional regional attire','Devotional music and chanting','Flowers, lamps and temple decorations','Maha Shivaratri is associated with which deity?',['Vishnu','Shiva','Brahma','Indra'],1,'Encyclopaedia Britannica – Shivaratri','https://www.britannica.com/topic/Shivaratri'));

  seedFestival(i,base('Eid al-Fitr','Festival','A major Islamic festival marking the end of Ramadan, observed with communal prayer and celebration.','Global Muslim communities','1 Shawwal (lunar calendar)','1–3 days or regional variation','Eid al-Fitr developed as a major Islamic celebration associated with the completion of Ramadan.','Marks the end of Ramadan and is associated with gratitude, charity, prayer, family and community.','Communal prayers, charity, family visits, festive meals and greetings are common, with regional variation.','Modern celebrations differ by country while retaining prayer, charity and community traditions.','Regional sweets, dates and festive dishes','Regional traditional clothing; often new or festive attire','Nasheeds and regional music where culturally appropriate','Homes, mosques and public spaces may be decorated differently by region','Eid al-Fitr follows which period?',['Ramadan','Advent','Diwali','Lent'],0,'Encyclopaedia Britannica – Eid al-Fitr','https://www.britannica.com/topic/Eid-al-Fitr'));
  seedFestival(i,base('Eid al-Adha','Festival','An Islamic festival associated with sacrifice, charity, prayer and remembrance.','Global Muslim communities','10 Dhu al-Hijjah (lunar calendar)','Several days of observance','The festival is connected with the Hajj season and traditions of sacrifice and devotion.','Emphasizes devotion, generosity, charity and community.','Prayers, sacrifice where permitted and practiced, distribution of food, family visits and charity occur with regional differences.','Modern celebrations vary according to local law and custom.','Meat dishes, rice dishes and regional sweets','Festive regional clothing','Religious recitation and regional cultural music where appropriate','Mosques, homes and community spaces may be prepared for gatherings','Eid al-Adha occurs during which Islamic month?',['Ramadan','Dhu al-Hijjah','Muharram','Rajab'],1,'Encyclopaedia Britannica – Eid al-Adha','https://www.britannica.com/topic/Eid-al-Adha'));
  seedFestival(i,base('Ramadan','Religious Observance','A sacred month in Islam marked by fasting, prayer, reflection and charity.','Global Muslim communities','9th month of Islamic lunar calendar','About 29–30 days','Ramadan is the ninth month of the Islamic calendar and has central significance in Islamic practice.','Associated with fasting, spiritual reflection, prayer, charity and community.','Many Muslims fast from dawn to sunset, gather for iftar, increase prayer and charitable activity, subject to religious exemptions.','Practices vary by country and community, while the central observance remains fasting and devotion.','Dates, soups, rice dishes and regional iftar foods','Regional clothing, especially for evening gatherings','Quran recitation and religious audio','Mosques and homes may be decorated according to local custom','Ramadan is the ___ month of the Islamic calendar.',['7th','8th','9th','10th'],2,'Encyclopaedia Britannica – Ramadan','https://www.britannica.com/topic/Ramadan'));
  seedFestival(i,base('Islamic New Year','Observance','The beginning of a new year in the Islamic lunar calendar.','Global Muslim communities','1 Muharram','1 day/date varies','The Islamic calendar is a lunar calendar beginning with Muharram.','Marks the start of a new Islamic year; observance varies widely by community.','Some communities hold religious gatherings, reflection or educational programs; there is no single universal celebration style.','Modern observance is highly dependent on local tradition.','Regional foods vary','Regional traditional attire','Religious recitation and community programs','Varies by community','Which month begins the Islamic calendar year?',['Muharram','Ramadan','Shawwal','Dhu al-Hijjah'],0,'Encyclopaedia Britannica – Islamic calendar','https://www.britannica.com/topic/Islamic-calendar'));

  seedFestival(c,base('Christmas','Festival','A major Christian festival commemorating the birth of Jesus Christ, celebrated in diverse ways.','Global Christian communities','December 25 in many traditions','1+ days','Christmas developed over centuries with different liturgical calendars and cultural customs.','Centers on the Christian celebration of the birth of Jesus and themes of hope, giving and community.','Church services, family gatherings, meals, gifts, music and decorations are common, with substantial regional and denominational variation.','Modern celebrations blend religious observance with local cultural customs.','Regional festive meals, sweets and baked foods','Regional formal/festive clothing','Carols, hymns and regional music','Nativity scenes, trees, lights and local decorations','Christmas commemorates the birth of whom?',['Jesus Christ','Moses','Buddha','Muhammad'],0,'Encyclopaedia Britannica – Christmas','https://www.britannica.com/topic/Christmas-holiday'));
  seedFestival(c,base('Easter','Festival','A central Christian festival commemorating the resurrection of Jesus in Christian belief.','Global Christian communities','March/April, date varies','Several days in many traditions','Easter traditions developed through early Christian observance and later liturgical and cultural practices.','Centers on the resurrection of Jesus and is the culmination of Holy Week in many Christian traditions.','Church services, prayer, family gatherings and regional foods are common. Customs differ significantly among denominations and countries.','Modern celebrations include both religious services and cultural family activities.','Egg-based and regional festive foods, breads and sweets','Regional festive clothing','Hymns, choral music and regional traditions','Churches, flowers, candles and regional decorations','Easter commemorates the resurrection of whom?',['Jesus Christ','Abraham','Solomon','Paul'],0,'Encyclopaedia Britannica – Easter','https://www.britannica.com/topic/Easter-holiday'));
  seedFestival(c,base('Good Friday','Holy Day','A Christian holy day commemorating the crucifixion of Jesus in Christian belief.','Global Christian communities','Friday before Easter','1 day','Good Friday developed as part of Holy Week observance in early Christianity.','A day of prayer, remembrance and reflection on the crucifixion.','Church services, prayer, fasting or abstinence and processions are observed differently by denomination and region.','Modern practices vary by church tradition and local culture.','Regional fasting foods','Conservative/formal regional attire','Hymns and religious music','Churches may use subdued decorations and symbols','Good Friday occurs during which period?',['Holy Week','Advent','Ramadan','Navratri'],0,'Encyclopaedia Britannica – Good Friday','https://www.britannica.com/topic/Good-Friday'));
  seedFestival(c,base('Pentecost','Holy Day','A Christian observance commemorating the descent of the Holy Spirit in Christian belief.','Global Christian communities','50 days after Easter','1 day','Pentecost is rooted in the New Testament account and early Christian liturgical tradition.','Associated with the Holy Spirit and the beginnings of Christian mission in Christian theology.','Church services, prayer, music and community gatherings vary by denomination.','Modern observance differs among Christian communities.','Regional foods','Regional church/festive attire','Hymns, worship music and choral traditions','Church flowers and liturgical colors vary by denomination','Pentecost is traditionally associated with which Christian concept?',['The Holy Spirit','The harvest only','The Islamic New Year','Diwali'],0,'Encyclopaedia Britannica – Pentecost','https://www.britannica.com/topic/Pentecost-Christianity'));

  const badges=[['explorer','Festival Explorer','Explore your first festival'],['learner','Culture Learner','Complete a learning module'],['quizmaster','Quiz Master','Complete a quiz with 80% or higher'],['heritage','Heritage Explorer','Explore five festivals']];
  badges.forEach(b=>{if(!one('SELECT id FROM badges WHERE code=?',[b[0]]))run('INSERT INTO badges(code,name,description) VALUES(?,?,?)',b);});
  const demoHash=hashPassword('Demo@12345');
  if(!one('SELECT id FROM users WHERE email=?',['demo@faithfest.local']))run('INSERT INTO users(name,email,password_hash,role) VALUES(?,?,?,?)',['Demo User','demo@faithfest.local',demoHash,'user']);
  const adminHash=hashPassword('Admin@12345');
  if(!one('SELECT id FROM users WHERE email=?',['admin@faithfest.local']))run('INSERT INTO users(name,email,password_hash,role) VALUES(?,?,?,?)',['FaithFest Admin','admin@faithfest.local',adminHash,'admin']);

  try {
    const { seedLocations } = require('./scripts/seed_locations');
    seedLocations();
  } catch (err) {}
}
