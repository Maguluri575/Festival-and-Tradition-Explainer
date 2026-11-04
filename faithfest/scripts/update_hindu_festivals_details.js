const fs = require('fs');
const path = require('path');
const { DatabaseSync } = require('node:sqlite');

const dataDir = path.join(__dirname, '..', 'data');
const db = new DatabaseSync(path.join(dataDir, 'faithfest.db'));

function one(sql, p = []) { return db.prepare(sql).get(...p); }
function run(sql, p = []) { return db.prepare(sql).run(...p); }

const hindu = one("SELECT id FROM religions WHERE name='Hinduism'");
if (!hindu) {
  console.error('Hinduism not in DB.');
  process.exit(1);
}
const hid = hindu.id;

const rawText = fs.readFileSync(path.join(__dirname, 'raw_hindu_festivals.txt'), 'utf8');

const festivalBlocks = rawText.split(/\n(?=\d+\.\s+)/).map(b => b.trim()).filter(b => b);

console.log(`Found ${festivalBlocks.length} festivals to parse.`);

db.exec('BEGIN');

for (const block of festivalBlocks) {
  const lines = block.split('\n');
  const nameLine = lines[0].replace(/^\d+\.\s+/, '').trim();
  const name = nameLine.split('/')[0].trim(); // Take first name if there are multiple

  const fields = {};
  let currentKey = null;
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    const match = line.match(/^([^:]+):\s*(.*)/);
    if (match) {
      currentKey = match[1].trim();
      fields[currentKey] = match[2].trim();
    } else if (currentKey) {
      fields[currentKey] += ' ' + line;
    }
  }

  // Map to db schema
  const data = {
    name: name,
    category: 'Festival',
    description: fields['History'] ? fields['History'].substring(0, 150) + '...' : 'Hindu Festival',
    country: 'India',
    region: fields['Regional Variations'] || 'Global',
    date: fields['Calendar/Date'] || 'Date varies',
    duration: '1+ days',
    history: fields['History'] || '',
    significance: (fields['Religious Significance'] || '') + ' ' + (fields['Cultural Significance'] || ''),
    celebration: fields['Traditions'] || '',
    modern: fields['Rituals'] || '',
    foods: fields['Food'] || '',
    clothing: fields['Clothing'] || '',
    music: (fields['Music'] || '') + ' ' + (fields['Dance'] || ''),
    decorations: fields['Decorations'] || '',
    ref: fields['References'] || ''
  };

  // Upsert festival
  let f = one('SELECT id FROM festivals WHERE name=? AND religion_id=?', [data.name, hid]);
  if (!f) {
    run(`INSERT INTO festivals(religion_id,name,category,description,country,region,typical_date,duration,status,historical_information,significance,celebration,modern_celebration) 
         VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`, 
         [hid, data.name, data.category, data.description, data.country, data.region, data.date, data.duration, 'published', data.history, data.significance, data.celebration, data.modern]);
    f = one('SELECT id FROM festivals WHERE name=? AND religion_id=?', [data.name, hid]);
  } else {
    run(`UPDATE festivals SET description=?, region=?, typical_date=?, historical_information=?, significance=?, celebration=?, modern_celebration=? WHERE id=?`,
        [data.description, data.region, data.date, data.history, data.significance, data.celebration, data.modern, f.id]);
  }

  // Update regions
  const existingReg = one('SELECT id FROM festival_regions WHERE festival_id=?', [f.id]);
  if (!existingReg) {
    run('INSERT INTO festival_regions(festival_id,country,region,rituals,foods,clothing,music,decorations,celebration_style) VALUES(?,?,?,?,?,?,?,?,?)',
        [f.id, 'India', data.region, data.modern, data.foods, data.clothing, data.music, data.decorations, data.celebration]);
  } else {
    run('UPDATE festival_regions SET region=?, rituals=?, foods=?, clothing=?, music=?, decorations=?, celebration_style=? WHERE festival_id=?',
        [data.region, data.modern, data.foods, data.clothing, data.music, data.decorations, data.celebration, f.id]);
  }

  // Update references
  const existingRef = one('SELECT id FROM references_table WHERE festival_id=? LIMIT 1', [f.id]);
  if (!existingRef && data.ref) {
    run('INSERT INTO references_table(festival_id,source_name,source_type,verification_status) VALUES(?,?,?,?)',
        [f.id, data.ref, 'Reference', 'demo']);
  } else if (existingRef && data.ref) {
    run('UPDATE references_table SET source_name=? WHERE id=?', [data.ref, existingRef.id]);
  }
}

db.exec('COMMIT');
console.log('Successfully updated Hindu festivals.');
