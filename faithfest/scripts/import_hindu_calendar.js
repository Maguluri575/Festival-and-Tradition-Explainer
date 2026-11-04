/**
 * import_hindu_calendar.js  (fast version — uses a single transaction)
 * Run: node scripts/import_hindu_calendar.js
 */
const fs   = require('fs');
const path = require('path');
const { DatabaseSync } = require('node:sqlite');

const dataDir = path.join(__dirname, '..', 'data');
const db = new DatabaseSync(path.join(dataDir, 'faithfest.db'));

function one(sql, p = []) { return db.prepare(sql).get(...p); }
function run(sql, p = []) { return db.prepare(sql).run(...p); }

const hindu = one("SELECT id FROM religions WHERE name='Hinduism'");
if (!hindu) { console.error('Hinduism not in DB. Start the server once first.'); process.exit(1); }
const hid = hindu.id;

// ── 1. Import all CSV rows inside ONE transaction (fast) ─────────────────────
console.log('Clearing existing Hindu calendar events...');
run('DELETE FROM calendar_events WHERE religion_id=?', [hid]);

const csvPath = path.join(dataDir, 'hindu_calendar', 'hindu_calendar_1900_2100.csv');
const lines = fs.readFileSync(csvPath, 'utf8').trim().split(/\r?\n/);
lines.shift(); // remove header

const insertEvent = db.prepare(
  `INSERT OR IGNORE INTO calendar_events
   (religion_id,event_date,year,month,day,weekday,title,lunar_month,tithi,source)
   VALUES(?,?,?,?,?,?,?,?,?,?)`
);

console.log(`Importing ${lines.length} rows inside a single transaction...`);
db.exec('BEGIN');
let importedEvents = 0;
try {
  for (const line of lines) {
    const cols = line.split(',');
    if (cols.length < 8) continue;
    const [date, year, month, day, weekday, title, lunar, tithi] = cols;
    insertEvent.run(hid, date, Number(year), Number(month), Number(day),
      weekday, title.trim(), lunar.trim(), tithi.trim(),
      'Hindu calendar dataset (1900–2100)');
    importedEvents++;
  }
  db.exec('COMMIT');
} catch(e) { db.exec('ROLLBACK'); throw e; }
console.log(`✓ Imported ${importedEvents} calendar event rows.`);


// ── 2. Seed major Hindu festivals as full festival records ───────────────────
const festivals = [
  {
    name: 'Diwali',
    category: 'Festival',
    description: 'A widely celebrated festival of lights with diverse regional and religious traditions across South Asia.',
    region: 'India',
    date: 'October/November (Kartika Amavasya)',
    duration: '5 days',
    history: 'Diwali has multiple historical and religious narratives. In Vaishnavism it celebrates the return of Rama to Ayodhya; in Shaivism and Shaktism other traditions prevail; Jains celebrate Mahavira\'s nirvana; Sikhs celebrate the release of Guru Hargobind. The festival predates recorded history and has merged many regional traditions.',
    significance: 'Associated with themes of light over darkness, knowledge over ignorance, prosperity and devotion. Different traditions emphasise different deities and narratives.',
    celebration: 'Homes are cleaned and decorated with diyas (oil lamps), rangoli and flowers. Families perform Lakshmi Puja, exchange sweets and gifts, burst firecrackers (where permitted) and visit relatives. Markets and streets are decorated with lights.',
    modern: 'Modern Diwali includes community events, fireworks displays and growing awareness around eco-friendly celebrations.',
    ref: 'Encyclopaedia Britannica – Diwali', refUrl: 'https://www.britannica.com/topic/Diwali-Hindu-festival',
    quiz: [
      { q: 'Diwali is primarily a festival of ___?', o: ['Lights', 'Colors', 'Water', 'Harvest'], a: 0 },
      { q: 'During Diwali, which goddess is commonly worshipped?', o: ['Saraswati', 'Durga', 'Lakshmi', 'Kali'], a: 2 },
    ]
  },
  {
    name: 'Holi',
    category: 'Festival',
    description: 'A spring festival known for color play and community celebrations across India and the diaspora.',
    region: 'India',
    date: 'Phalguna Purnima (February/March)',
    duration: '2 days',
    history: 'Holi has ancient roots in Hindu texts. Holika Dahan (the bonfire night) commemorates the legend of Prahlada and Holika. The color play the next day (Rangwali Holi) is associated with Krishna and Radha in Braj traditions.',
    significance: 'Celebrates the arrival of spring, the triumph of good over evil and community bonding. Associated with the story of Prahlada and devotion to Vishnu.',
    celebration: 'On Holika Dahan, bonfires are lit. The next day people play with colored powders and water, visit friends and share sweets such as gujiya and thandai.',
    modern: 'Holi is now celebrated globally with organised color festivals; there is growing awareness about natural, non-toxic colors.',
    ref: 'Encyclopaedia Britannica – Holi', refUrl: 'https://www.britannica.com/topic/Holi',
    quiz: [{ q: 'What is burned on the night before Holi?', o: ['Incense', 'Holika (bonfire)', 'Lamps', 'Sugarcane'], a: 1 }]
  },
  {
    name: 'Navratri',
    category: 'Festival',
    description: 'A nine-night festival dedicated to the Goddess Durga, celebrated twice a year.',
    region: 'India',
    date: 'Ashwina (September/October) and Chaitra (March/April)',
    duration: '9 nights',
    history: 'Navratri (nine nights) is rooted in the Shakta tradition and the story of the Goddess defeating the demon Mahishasura. The festival is celebrated differently in North, South, East and West India.',
    significance: 'Dedicated to the nine forms (Navadurga) of Goddess Durga. Celebrates feminine divine energy (Shakti).',
    celebration: 'Devotees fast, perform puja, visit temples and participate in Garba and Dandiya Raas dances (particularly in Gujarat). In West Bengal it culminates in Durga Puja.',
    modern: 'Navratri is one of the most widely attended festivals in India, with large Garba events and community gatherings.',
    ref: 'Encyclopaedia Britannica – Navratri', refUrl: 'https://www.britannica.com/topic/Navaratri',
    quiz: [{ q: 'How many nights does Navratri last?', o: ['5', '7', '9', '11'], a: 2 }]
  },
  {
    name: 'Ganesh Chaturthi',
    category: 'Festival',
    description: 'A festival celebrating the birth of Lord Ganesha, observed widely across Maharashtra and beyond.',
    region: 'Maharashtra, India',
    date: 'Bhadrapada Shukla Chaturthi (August/September)',
    duration: '10 days',
    history: 'Ganesh Chaturthi has ancient origins in Maharashtra and was popularized as a public festival by Bal Gangadhar Tilak in 1893 to foster community unity during the independence movement.',
    significance: 'Celebrates the birth of Ganesha, the remover of obstacles and lord of beginnings. Associated with prosperity, wisdom and success.',
    celebration: 'Clay Ganesha idols are installed at home and in public pandals. Prayers, devotional music and cultural programmes are held for 10 days, culminating in the immersion (Visarjan) of the idol in water.',
    modern: 'One of the largest public festivals in India; eco-friendly clay idols are increasingly encouraged.',
    ref: 'Encyclopaedia Britannica – Ganesh Chaturthi', refUrl: 'https://www.britannica.com/topic/Ganesh-Chaturthi',
    quiz: [{ q: 'Ganesh Chaturthi celebrates the birth of which deity?', o: ['Shiva', 'Ganesha', 'Vishnu', 'Brahma'], a: 1 }]
  },
  {
    name: 'Janmashtami',
    category: 'Festival',
    description: 'The celebration of the birth of Lord Krishna, observed with devotion, music and midnight prayers.',
    region: 'India',
    date: 'Bhadrapada Krishna Ashtami (August)',
    duration: '1–2 days',
    history: 'Janmashtami commemorates the birth of Krishna at midnight in Mathura. Texts describe his birth as the eighth avatar of Vishnu. The Braj region (Mathura, Vrindavan) has the oldest and most elaborate celebrations.',
    significance: 'Celebrates Krishna\'s birth and his divine qualities of love, wisdom and protection of dharma.',
    celebration: 'Devotees fast until midnight, participate in bhajans and kirtans, perform Dahi Handi (a human pyramid to break a pot of curd, symbolising Krishna\'s love of butter), and celebrate with midnight prayers.',
    modern: 'Celebrated globally, with ISKCON temples hosting large events; Dahi Handi is a major public event in Maharashtra.',
    ref: 'Encyclopaedia Britannica – Janmashtami', refUrl: 'https://www.britannica.com/topic/Janmashtami',
    quiz: [{ q: 'Janmashtami celebrates the birth of which avatar of Vishnu?', o: ['Rama', 'Krishna', 'Parashurama', 'Narasimha'], a: 1 }]
  },
  {
    name: 'Maha Shivaratri',
    category: 'Holy Day',
    description: 'The great night of Shiva — a major Hindu observance of fasting, prayer and vigil dedicated to Lord Shiva.',
    region: 'India',
    date: 'Phalguna Krishna Chaturdashi (February/March)',
    duration: '1 night',
    history: 'Maha Shivaratri is mentioned in Shaiva Puranas. It is associated with multiple narratives including Shiva\'s cosmic dance (Tandava) and the night of Shiva and Parvati\'s wedding.',
    significance: 'The most important night in the Shaiva calendar. Devotees seek Shiva\'s blessings for spiritual liberation, health and wellbeing.',
    celebration: 'Devotees fast throughout the day and night, perform abhisheka (ritual bathing) of the Shiva linga with milk, honey, water and bael leaves, chant Om Namah Shivaya and visit temples.',
    modern: 'Millions gather at major Shiva temples such as Kashi Vishwanath, Somnath and Kedarnath. Special pujas are held through the night.',
    ref: 'Encyclopaedia Britannica – Shivaratri', refUrl: 'https://www.britannica.com/topic/Shivaratri',
    quiz: [{ q: 'Maha Shivaratri is dedicated to which deity?', o: ['Vishnu', 'Brahma', 'Shiva', 'Indra'], a: 2 }]
  },
  {
    name: 'Pongal',
    category: 'Festival',
    description: 'A Tamil harvest festival of thanksgiving celebrated over four days in Tamil Nadu.',
    region: 'Tamil Nadu, India',
    date: 'Thai 1 (January)',
    duration: '4 days',
    history: 'Pongal is an ancient Tamil harvest festival mentioned in Sangam literature. It marks the sun\'s northward journey (Uttarayan) and gives thanks for the harvest.',
    significance: 'Expresses gratitude to the Sun, cattle, nature and family for a successful harvest. Central to Tamil cultural identity.',
    celebration: 'Day 1: Bhogi (cleaning the old, welcoming the new). Day 2: Thai Pongal (cooking pongal rice in new pots, Sun worship). Day 3: Mattu Pongal (honoring cattle). Day 4: Kaanum Pongal (family visits).',
    modern: 'Celebrated by Tamil communities worldwide; traditional kolam drawings and cooking of pongal in clay pots remain central.',
    ref: 'Tamil Nadu Government – Pongal', refUrl: 'https://www.tn.gov.in/',
    quiz: [{ q: 'Pongal is the harvest festival of which Indian state?', o: ['Kerala', 'Tamil Nadu', 'Karnataka', 'Andhra Pradesh'], a: 1 }]
  },
  {
    name: 'Rama Navami',
    category: 'Holy Day',
    description: 'The birthday of Lord Rama, celebrated with devotion, processions and recitation of the Ramayana.',
    region: 'India',
    date: 'Chaitra Shukla Navami (March/April)',
    duration: '1 day',
    history: 'Rama Navami celebrates the birth of Rama, the seventh avatar of Vishnu, as described in the Valmiki Ramayana and Tulsidas\'s Ramcharitmanas.',
    significance: 'Rama is revered as the ideal king, son and husband. The festival emphasises dharma, righteousness and devotion.',
    celebration: 'Devotees fast, recite the Ramayana, participate in bhajans and temple processions carrying the idol of baby Rama (Ramlalla). Temples are decorated and prasad is distributed.',
    modern: 'Ayodhya hosts some of the largest Rama Navami celebrations; the festival is observed globally.',
    ref: 'Encyclopaedia Britannica – Rama', refUrl: 'https://www.britannica.com/topic/Rama-Hindu-deity',
    quiz: [{ q: 'Rama Navami celebrates the birth of which avatar of Vishnu?', o: ['Krishna', 'Parashurama', 'Rama', 'Narasimha'], a: 2 }]
  },
  {
    name: 'Raksha Bandhan',
    category: 'Festival',
    description: 'A festival celebrating the bond between brothers and sisters, marked by tying the sacred rakhi thread.',
    region: 'India',
    date: 'Shravana Purnima (July/August)',
    duration: '1 day',
    history: 'The festival has ancient roots in Vedic rituals and is referenced in the Mahabharata and Bhavishya Purana. The custom of sisters tying rakhi has deep historical and cultural layers across regions.',
    significance: 'Celebrates the bond of protection and love between siblings. The rakhi symbolises the sister\'s prayer for her brother\'s wellbeing.',
    celebration: 'Sisters tie a rakhi (sacred thread) on their brother\'s wrist; brothers give gifts and promise to protect their sisters. Sweets such as mithai are exchanged.',
    modern: 'Raksha Bandhan is now celebrated beyond siblings to honor any protective bond; rakhi is also tied to soldiers and community figures.',
    ref: 'Encyclopaedia Britannica – Raksha Bandhan', refUrl: 'https://www.britannica.com/topic/Raksha-Bandhan',
    quiz: [{ q: 'What does a sister tie on her brother\'s wrist during Raksha Bandhan?', o: ['Flowers', 'Rakhi (sacred thread)', 'Coins', 'Beads'], a: 1 }]
  },
  {
    name: 'Dussehra',
    category: 'Festival',
    description: 'A festival marking the victory of good over evil, commemorating Rama\'s defeat of Ravana.',
    region: 'India',
    date: 'Ashwina Shukla Dashami (October)',
    duration: '1 day',
    history: 'Dussehra (Vijayadashami) marks the end of Navratri and celebrates Rama\'s victory over Ravana as narrated in the Ramayana. In some regions it celebrates Durga\'s victory over Mahishasura.',
    significance: 'Symbolises the triumph of dharma (righteousness) over adharma (evil). One of the most important days in the Hindu calendar.',
    celebration: 'Effigies of Ravana, Kumbhakarna and Meghanada are burned in public celebrations. Processions, Ramlila (theatrical enactment of the Ramayana) are held across India. In Mysore, a grand procession marks the day.',
    modern: 'The Mysore Dasara and Kullu Dussehra are internationally recognised celebrations. Ramlila performances are a UNESCO-recognized cultural tradition.',
    ref: 'Encyclopaedia Britannica – Dussehra', refUrl: 'https://www.britannica.com/topic/Dussehra',
    quiz: [{ q: 'Dussehra celebrates the victory of Rama over which demon king?', o: ['Kali', 'Ravana', 'Hiranyakashipu', 'Mahishasura'], a: 1 }]
  },
  {
    name: 'Vasant Panchami',
    category: 'Festival',
    description: 'A spring festival dedicated to Goddess Saraswati, the deity of learning, arts and wisdom.',
    region: 'India',
    date: 'Magha Shukla Panchami (January/February)',
    duration: '1 day',
    history: 'Vasant Panchami marks the beginning of spring (vasant ritu) in the Hindu calendar. Saraswati Puja on this day has roots in ancient Vedic traditions.',
    significance: 'Students, artists and scholars seek Saraswati\'s blessings. Yellow is the colour of the festival, symbolising mustard flowers in bloom.',
    celebration: 'Saraswati idols are installed in schools, colleges and homes. Books, musical instruments and pens are placed at the altar. Devotees wear yellow clothes and prepare yellow sweets.',
    modern: 'Widely celebrated in educational institutions and homes; large public celebrations in West Bengal and Punjab.',
    ref: 'Encyclopaedia Britannica – Saraswati', refUrl: 'https://www.britannica.com/topic/Saraswati-Hindu-goddess',
    quiz: [{ q: 'Vasant Panchami is dedicated to which goddess?', o: ['Durga', 'Lakshmi', 'Saraswati', 'Kali'], a: 2 }]
  },
  {
    name: 'Guru Purnima',
    category: 'Religious Observance',
    description: 'A day to honour spiritual and academic teachers, observed on the full moon of Ashadha.',
    region: 'India',
    date: 'Ashadha Purnima (June/July)',
    duration: '1 day',
    history: 'Guru Purnima is said to be the birthday of Veda Vyasa, compiler of the Vedas and the Mahabharata. Buddhists also observe it as the day the Buddha gave his first teaching at Sarnath.',
    significance: 'The guru (teacher) is revered as equal to God in Hindu, Buddhist and Jain traditions. The day expresses gratitude and discipleship.',
    celebration: 'Disciples offer prayers and gratitude to their guru. Spiritual discourses, bhajans and seva (service) are performed. Ashrams and yoga centres hold special programmes.',
    modern: 'Celebrated globally in yoga communities and spiritual organisations.',
    ref: 'Encyclopaedia Britannica – Guru Purnima', refUrl: 'https://www.britannica.com/topic/guru',
    quiz: [{ q: 'Guru Purnima is traditionally associated with the birthday of which sage?', o: ['Valmiki', 'Veda Vyasa', 'Narada', 'Patanjali'], a: 1 }]
  },
  {
    name: 'Onam',
    category: 'Cultural Celebration',
    description: 'Kerala\'s harvest festival celebrating the homecoming of the legendary king Mahabali, marked by grand feasts and boat races.',
    region: 'Kerala, India',
    date: 'Thiru Onam (August/September)',
    duration: '10 days',
    history: 'Onam celebrates the return of the mythical king Mahabali (Maveli) who is said to visit Kerala once a year. The story is connected to the Vamana avatar of Vishnu.',
    significance: 'A symbol of Kerala\'s cultural identity, celebrating prosperity, equality and communal harmony.',
    celebration: 'Elaborate flower carpets (Pookalam) are made; the grand Onam Sadya (feast of 26+ dishes on a banana leaf) is prepared. Vallam Kali (snake boat races), Pulikali (tiger dances) and Thumbi Thullal (dances) are performed.',
    modern: 'Onam is Kerala\'s state festival; the Nehru Trophy Boat Race draws international visitors.',
    ref: 'Kerala Tourism – Onam', refUrl: 'https://www.keralatourism.org/onam/',
    quiz: [{ q: 'Onam is the harvest festival of which Indian state?', o: ['Tamil Nadu', 'Karnataka', 'Kerala', 'Andhra Pradesh'], a: 2 }]
  },
  {
    name: 'Chhath Puja',
    category: 'Religious Observance',
    description: 'An ancient Vedic festival dedicated to the Sun god Surya, observed with fasting and offerings at rivers.',
    region: 'Bihar, Uttar Pradesh, Jharkhand, India',
    date: 'Kartika Shukla Shashthi (October/November)',
    duration: '4 days',
    history: 'Chhath Puja is one of the oldest Vedic festivals. It is believed to have been practiced since the time of the Mahabharata.',
    significance: 'Dedicated to Surya (Sun) and Chhathi Maiya (the sixth form of Shakti). Seeks blessings for children\'s health and family prosperity.',
    celebration: 'Devotees observe a strict fast for 36 hours without water. Offerings of fruits, sugarcane and thekua (a sweet) are made to the setting and rising sun at riverbanks with devotees standing in water.',
    modern: 'Chhath is now celebrated in cities and in the diaspora worldwide; rivers and public water bodies are used for the sunset and sunrise rituals.',
    ref: 'Encyclopaedia Britannica – Chhath', refUrl: 'https://www.britannica.com/topic/Chhath',
    quiz: [{ q: 'Chhath Puja is primarily dedicated to which deity?', o: ['Vishnu', 'Surya (Sun god)', 'Indra', 'Agni'], a: 1 }]
  },
  {
    name: 'Karwa Chauth',
    category: 'Religious Observance',
    description: 'A fast observed by married Hindu women for the long life and wellbeing of their husbands.',
    region: 'North India',
    date: 'Kartika Krishna Chaturthi (October/November)',
    duration: '1 day',
    history: 'Karwa Chauth has roots in northern Indian folk traditions and is mentioned in the Puranas. The word Karwa refers to an earthen pot and Chauth to the fourth day.',
    significance: 'Expresses love and devotion within marriage. Women pray for their husband\'s long life and prosperity.',
    celebration: 'Women observe a strict fast from sunrise until moonrise. After seeing the moon through a sieve and the face of their husband, they break their fast with water and food offered by the husband.',
    modern: 'Widely celebrated in urban areas and the diaspora; growing debate around gender equality and evolving practices.',
    ref: 'Encyclopaedia Britannica – Karwa Chauth', refUrl: 'https://www.britannica.com/topic/Karva-Chauth',
    quiz: [{ q: 'When do women break their fast on Karwa Chauth?', o: ['Sunrise', 'Noon', 'After moonrise', 'Midnight'], a: 2 }]
  },
  {
    name: 'Akshaya Tritiya',
    category: 'Holy Day',
    description: 'An auspicious day considered highly favorable for new beginnings, purchases and charitable acts.',
    region: 'India',
    date: 'Vaishakha Shukla Tritiya (April/May)',
    duration: '1 day',
    history: 'Akshaya Tritiya (Akha Teej) is considered one of the most auspicious days in the Hindu and Jain calendars. The word Akshaya means inexhaustible — associated with perpetual prosperity.',
    significance: 'Believed to bring inexhaustible good luck and success. Many begin new ventures, marriages and purchases on this day.',
    celebration: 'Gold and other valuables are purchased as this is considered auspicious. Charitable acts, prayers and donations are performed. Many weddings are held on this day.',
    modern: 'Major commercial festival for jewellers in India; one of the highest days for gold purchases.',
    ref: 'Encyclopaedia Britannica – Akshaya Tritiya', refUrl: 'https://www.britannica.com/topic/Akshaya-Tritiya',
    quiz: [{ q: 'What does "Akshaya" mean in Akshaya Tritiya?', o: ['Sacred', 'Inexhaustible', 'Golden', 'Bright'], a: 1 }]
  },
  {
    name: 'Makara Sankranti',
    category: 'Festival',
    description: 'A harvest festival marking the sun\'s transition into Capricorn, celebrated across India with regional names.',
    region: 'India',
    date: 'January 14 (fixed solar date)',
    duration: '1–4 days',
    history: 'Makara Sankranti is one of the few Hindu festivals based on the solar calendar. It marks the sun\'s entry into Makara (Capricorn) and the beginning of Uttarayan (northward journey of the sun).',
    significance: 'A time of harvest thanksgiving; regarded as auspicious for holy dips, charity and worship. Also celebrated as Pongal in Tamil Nadu and Lohri in Punjab.',
    celebration: 'Ritual dips in sacred rivers, flying kites (especially in Gujarat), preparing til-gul (sesame and jaggery sweets), and Pongal rice dishes. Bonfires are lit in Punjab on the preceding Lohri.',
    modern: 'Kite festivals in Ahmedabad and Jaipur are internationally famous; the festival bridges solar and agricultural traditions.',
    ref: 'Encyclopaedia Britannica – Makar Sankranti', refUrl: 'https://www.britannica.com/topic/Makar-Sankranti',
    quiz: [{ q: 'Makara Sankranti is celebrated when the sun enters which zodiac sign?', o: ['Aries', 'Cancer', 'Capricorn (Makara)', 'Libra'], a: 2 }]
  },
  {
    name: 'Nag Panchami',
    category: 'Religious Observance',
    description: 'A traditional festival of snake worship, observed on the fifth day of the bright fortnight of Shravana.',
    region: 'India',
    date: 'Shravana Shukla Panchami (July/August)',
    duration: '1 day',
    history: 'Nag Panchami has ancient Vedic roots and is associated with Naga worship, which predates and was integrated into mainstream Hindu practice.',
    significance: 'Snakes (Nagas) are revered in Hindu, Buddhist and Jain traditions as divine beings. The festival seeks protection from snakebites and harm.',
    celebration: 'Images or clay figurines of cobras are worshipped with milk, flowers and sweets. Serpents in the wild are also revered. Women pray for family protection.',
    modern: 'Practiced widely in rural and semi-urban areas; wildlife authorities actively discourage pouring milk on live snakes.',
    ref: 'Encyclopaedia Britannica – Nag Panchami', refUrl: 'https://www.britannica.com/topic/Nag-Panchami',
    quiz: [{ q: 'Nag Panchami is a festival associated with the worship of which creature?', o: ['Elephants', 'Cows', 'Snakes', 'Monkeys'], a: 2 }]
  },
  {
    name: 'Sharad Purnima',
    category: 'Holy Day',
    description: 'The harvest full moon night, associated with Lakshmi worship and the legend of Krishna\'s Raas Leela.',
    region: 'India',
    date: 'Ashwina Purnima (October)',
    duration: '1 night',
    history: 'Sharad Purnima (Kojagara Purnima) is the full moon of the autumn harvest. It is said that on this night Lakshmi descends to earth to bless devotees who are awake.',
    significance: 'The moonlight on this night is believed to have healing properties. Devotees offer kheer (rice pudding) to the moon and consume it as prasad.',
    celebration: 'Kheer is prepared, left under the moonlight and consumed as blessed food. Lakshmi puja is performed; devotees stay awake through the night (jagran).',
    modern: 'Celebrated by families and temples; the Vrindavan Raas Leela performances on this night are famous.',
    ref: 'Encyclopaedia Britannica – Sharad Purnima', refUrl: 'https://www.britannica.com/topic/Sharad-Purnima',
    quiz: [{ q: 'Which goddess descends to bless devotees on Sharad Purnima?', o: ['Durga', 'Saraswati', 'Lakshmi', 'Parvati'], a: 2 }]
  },
  {
    name: 'Dhanteras',
    category: 'Festival',
    description: 'The first day of the Diwali festival week, dedicated to Goddess Lakshmi and Lord Dhanvantari.',
    region: 'India',
    date: 'Kartika Krishna Trayodashi (October/November)',
    duration: '1 day',
    history: 'Dhanteras (Dhanatrayodashi) is dedicated to Dhanvantari, the divine physician, who is said to have emerged from the churning of the cosmic ocean on this day carrying the pot of Amrita.',
    significance: 'Marks the beginning of Diwali celebrations. Associated with health, wealth and prosperity.',
    celebration: 'New utensils, gold or silver are purchased as this is considered auspicious. Diyas are lit at dusk; a lamp is kept burning through the night facing south to ward off untimely death.',
    modern: 'One of the biggest shopping days in India for gold, jewellery and electronic goods.',
    ref: 'Encyclopaedia Britannica – Dhanteras', refUrl: 'https://www.britannica.com/topic/Dhanteras',
    quiz: [{ q: 'Dhanteras is the first day of which major Hindu festival week?', o: ['Navratri', 'Holi', 'Diwali', 'Pongal'], a: 2 }]
  },
  {
    name: 'Hanuman Jayanti',
    category: 'Holy Day',
    description: 'The birthday of Lord Hanuman, the great devotee of Rama, celebrated with devotion and recitation of the Hanuman Chalisa.',
    region: 'India',
    date: 'Chaitra Purnima (March/April)',
    duration: '1 day',
    history: 'Hanuman Jayanti celebrates the birth of Hanuman, as described in the Valmiki Ramayana and the Ananda Ramayana. Hanuman is revered as a symbol of strength, devotion and selfless service.',
    significance: 'Hanuman embodies perfect devotion (bhakti), strength (shakti) and selfless service (seva) in Hindu tradition.',
    celebration: 'Temples hold special abhisheka, reading of the Sundarakanda and Hanuman Chalisa. Prasad of besan ke laddoo and panchamrit is distributed. Devotees observe fasts and visit Hanuman temples.',
    modern: 'Celebrated at millions of Hanuman temples across India; major processions held in key Hanuman temples.',
    ref: 'Encyclopaedia Britannica – Hanuman', refUrl: 'https://www.britannica.com/topic/Hanuman',
    quiz: [{ q: 'Hanuman is celebrated as the devotee of which deity?', o: ['Shiva', 'Vishnu', 'Rama', 'Krishna'], a: 2 }]
  },
  {
    name: 'Ugadi',
    category: 'Cultural Celebration',
    description: 'The Telugu and Kannada New Year, marking the beginning of a new Hindu lunar year.',
    region: 'Andhra Pradesh, Telangana, Karnataka, India',
    date: 'Chaitra Shukla Pratipada (March/April)',
    duration: '1 day',
    history: 'Ugadi means the beginning of a new Yuga (era). It is the new year of the Kannada and Telugu communities, celebrated from ancient times.',
    significance: 'Marks the start of a new year; associated with Brahma beginning creation on this day. A time for new beginnings and fresh starts.',
    celebration: 'Homes are cleaned and decorated with mango leaves and rangoli. Ugadi Pachadi, a dish of six tastes (sweet, sour, bitter, salty, spicy and astringent) is prepared, symbolizing the diverse experiences of the coming year. The Panchanga (almanac) is read.',
    modern: 'Ugadi is a public holiday in Karnataka, Andhra Pradesh and Telangana; cultural events are held statewide.',
    ref: 'Encyclopaedia Britannica – Ugadi', refUrl: 'https://www.britannica.com/topic/Ugadi',
    quiz: [{ q: 'Ugadi is the New Year of which two communities?', o: ['Marathi and Gujarati', 'Telugu and Kannada', 'Tamil and Malayalam', 'Bengali and Odia'], a: 1 }]
  },
  {
    name: 'Gudi Padwa',
    category: 'Cultural Celebration',
    description: 'The Marathi New Year, celebrated on the first day of the Chaitra month.',
    region: 'Maharashtra, India',
    date: 'Chaitra Shukla Pratipada (March/April)',
    duration: '1 day',
    history: 'Gudi Padwa marks the Marathi New Year and is associated with the creation of the universe by Brahma. The Gudi (a decorated pole) is said to commemorate Shivaji Maharaja\'s victories.',
    significance: 'Celebrates new beginnings, victory and prosperity. The Gudi is erected as a symbol of victory.',
    celebration: 'A Gudi (decorated bamboo with a bright cloth, neem leaves, mango leaves and a pot) is erected at the entrance of homes. Families prepare Puran Poli, Shrikhand and other traditional foods. New clothes are worn and homes are decorated.',
    modern: 'Celebrated with processions and cultural events in Maharashtra; Gudi Padwa is a public holiday.',
    ref: 'Maharashtra Tourism – Gudi Padwa', refUrl: 'https://www.maharashtratourism.gov.in/',
    quiz: [{ q: 'Gudi Padwa is the New Year celebration of which community?', o: ['Telugu', 'Tamil', 'Marathi', 'Gujarati'], a: 2 }]
  },
];

// Seed each festival
let seeded = 0, updated = 0;
for (const data of festivals) {
  let f = one('SELECT * FROM festivals WHERE name=? AND religion_id=?', [data.name, hid]);
  if (!f) {
    run(
      `INSERT INTO festivals(religion_id,name,category,description,country,region,typical_date,duration,status,historical_information,significance,celebration,modern_celebration)
       VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [hid, data.name, data.category, data.description, 'India', data.region,
       data.date, data.duration, 'published',
       data.history, data.significance, data.celebration, data.modern]
    );
    f = one('SELECT * FROM festivals WHERE name=? AND religion_id=?', [data.name, hid]);
    seeded++;
  } else {
    // update key fields so existing records get enriched
    run(
      `UPDATE festivals SET category=?,description=?,region=?,typical_date=?,duration=?,status='published',historical_information=?,significance=?,celebration=?,modern_celebration=? WHERE id=?`,
      [data.category, data.description, data.region, data.date, data.duration,
       data.history, data.significance, data.celebration, data.modern, f.id]
    );
    updated++;
  }
  if (!f) continue;

  // Add reference if missing
  if (!one('SELECT id FROM references_table WHERE festival_id=? LIMIT 1', [f.id]) && data.ref) {
    run('INSERT INTO references_table(festival_id,source_name,source_type,url,verification_status) VALUES(?,?,?,?,?)',
      [f.id, data.ref, 'Reference', data.refUrl || '', 'verified']);
  }

  // Add quiz questions if missing
  if (!one('SELECT id FROM quiz_questions WHERE festival_id=? LIMIT 1', [f.id])) {
    for (const qi of (data.quiz || [])) {
      run('INSERT INTO quiz_questions(festival_id,question,options_json,answer_index) VALUES(?,?,?,?)',
        [f.id, qi.q, JSON.stringify(qi.o), qi.a]);
    }
  }

  // Link calendar events to this festival
  const pattern = `%${data.name}%`;
  run(`UPDATE calendar_events SET festival_id=? WHERE religion_id=? AND LOWER(title) LIKE LOWER(?) AND festival_id IS NULL`,
    [f.id, hid, pattern]);
}

console.log(`✓ Seeded ${seeded} new festivals, updated ${updated} existing festivals.`);

// ── 3. Summary ───────────────────────────────────────────────────────────────
const totalEvents = one('SELECT COUNT(*) c FROM calendar_events WHERE religion_id=?', [hid]);
const totalFestivals = one("SELECT COUNT(*) c FROM festivals WHERE religion_id=? AND status='published'", [hid]);
const linked = one('SELECT COUNT(*) c FROM calendar_events WHERE religion_id=? AND festival_id IS NOT NULL', [hid]);

console.log(`\n📊 Summary:`);
console.log(`   Calendar events: ${totalEvents.c}`);
console.log(`   Published Hindu festivals: ${totalFestivals.c}`);
console.log(`   Calendar events linked to festivals: ${linked.c}`);
console.log('\n✅ Done! Restart the server to see all changes.');
