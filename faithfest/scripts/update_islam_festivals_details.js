const fs = require('fs');
const path = require('path');
const { DatabaseSync } = require('node:sqlite');

const dataDir = path.join(__dirname, '..', 'data');
const db = new DatabaseSync(path.join(dataDir, 'faithfest.db'));

function one(sql, p = []) { return db.prepare(sql).get(...p); }
function run(sql, p = []) { return db.prepare(sql).run(...p); }

const rel = one("SELECT id FROM religions WHERE name='Islam'");
if (!rel) {
  console.error('Islam not in DB.');
  process.exit(1);
}
const rid = rel.id;

const rawText = fs.readFileSync(path.join(__dirname, 'raw_islam_festivals.txt'), 'utf8');

const festivals = [];
let currentFestival = null;
let currentSection = null;

const lines = rawText.split('\n');

for (const line of lines) {
  const tLine = line.trim();
  if (!tLine || tLine.startsWith('#')) {
      continue;
  }
  
  const sectionMatch = tLine.match(/^\d+\.\s+(History|Origin|Religious Significance|Cultural Significance|Traditions|Rituals|Traditional Food|Traditional Clothing|Music|Dance|Decorations|Symbols|Regional Variations|Calendar \/ Date|Event Time|Famous Locations|Gallery Keywords|Video Information|References)$/i);
  
  if (sectionMatch) {
    currentSection = sectionMatch[1];
    if (!currentFestival[currentSection]) {
        currentFestival[currentSection] = '';
    }
  } else if (tLine.match(/^\d+\.\s+(.*)$/)) {
    const nameMatch = tLine.match(/^\d+\.\s+(.*)$/);
    currentFestival = { name: nameMatch[1].trim() };
    festivals.push(currentFestival);
    currentSection = null;
  } else {
    if (currentSection && currentFestival) {
      if (currentFestival[currentSection]) currentFestival[currentSection] += '\n';
      currentFestival[currentSection] += tLine;
    }
  }
}

console.log(`Found ${festivals.length} Islamic festivals to parse.`);

db.exec('BEGIN');

for (const data of festivals) {
  const name = data.name.split('/')[0].trim();
  
  const dbData = {
    name: name,
    category: 'Festival',
    description: data['History'] ? data['History'].substring(0, 150) + '...' : 'Islamic Observance',
    country: 'Global',
    region: data['Regional Variations'] ? data['Regional Variations'].substring(0, 100) : 'Global',
    date: data['Calendar / Date'] ? data['Calendar / Date'].substring(0, 120) : 'Date varies',
    duration: 'Varies',
    history: (data['History'] || '') + '\n\n' + (data['Origin'] || ''),
    significance: (data['Religious Significance'] || '') + '\n\n' + (data['Cultural Significance'] || ''),
    celebration: (data['Traditions'] || '') + (data['Event Time'] ? '\n\nEvent Time:\n' + data['Event Time'] : ''),
    modern: data['Rituals'] || '',
    foods: data['Traditional Food'] || '',
    clothing: data['Traditional Clothing'] || '',
    music: (data['Music'] || '') + '\n' + (data['Dance'] || ''),
    decorations: (data['Decorations'] || '') + '\n' + (data['Symbols'] || ''),
    ref: data['References'] || ''
  };

  let url = '';
  const urlMatch = dbData.ref.match(/\[.*?\]\((.*?)\)/);
  if (urlMatch) {
      url = urlMatch[1];
  } else {
      url = `https://en.wikipedia.org/wiki/${name.replace(/ /g, '_')}`;
  }

  let f = one('SELECT id FROM festivals WHERE name=? AND religion_id=?', [dbData.name, rid]);
  if (!f) {
    run(`INSERT INTO festivals(religion_id,name,category,description,country,region,typical_date,duration,status,historical_information,significance,celebration,modern_celebration) 
         VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`, 
         [rid, dbData.name, dbData.category, dbData.description, dbData.country, dbData.region, dbData.date, dbData.duration, 'published', dbData.history, dbData.significance, dbData.celebration, dbData.modern]);
    f = one('SELECT id FROM festivals WHERE name=? AND religion_id=?', [dbData.name, rid]);
  } else {
    run(`UPDATE festivals SET description=?, region=?, typical_date=?, historical_information=?, significance=?, celebration=?, modern_celebration=? WHERE id=?`,
        [dbData.description, dbData.region, dbData.date, dbData.history, dbData.significance, dbData.celebration, dbData.modern, f.id]);
  }

  const existingReg = one('SELECT id FROM festival_regions WHERE festival_id=?', [f.id]);
  if (!existingReg) {
    run('INSERT INTO festival_regions(festival_id,country,region,rituals,foods,clothing,music,decorations,celebration_style) VALUES(?,?,?,?,?,?,?,?,?)',
        [f.id, 'Global', dbData.region, dbData.modern, dbData.foods, dbData.clothing, dbData.music, dbData.decorations, dbData.celebration]);
  } else {
    run('UPDATE festival_regions SET region=?, rituals=?, foods=?, clothing=?, music=?, decorations=?, celebration_style=? WHERE festival_id=?',
        [dbData.region, dbData.modern, dbData.foods, dbData.clothing, dbData.music, dbData.decorations, dbData.celebration, f.id]);
  }

  const existingRef = one('SELECT id FROM references_table WHERE festival_id=? LIMIT 1', [f.id]);
  if (!existingRef) {
    run('INSERT INTO references_table(festival_id,source_name,source_type,url,verification_status) VALUES(?,?,?,?,?)',
        [f.id, name + ' Reference', 'Reference', url, 'verified']);
  } else {
    run('UPDATE references_table SET url=? WHERE id=?', [url, existingRef.id]);
  }
}

db.exec('COMMIT');
console.log('Successfully updated Islamic festivals.');
