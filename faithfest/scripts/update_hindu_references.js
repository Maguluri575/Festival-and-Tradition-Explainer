const path = require('path');
const { DatabaseSync } = require('node:sqlite');

const dataDir = path.join(__dirname, '..', 'data');
const db = new DatabaseSync(path.join(dataDir, 'faithfest.db'));

function one(sql, p = []) { return db.prepare(sql).get(...p); }
function all(sql, p = []) { return db.prepare(sql).all(...p); }
function run(sql, p = []) { return db.prepare(sql).run(...p); }

const hindu = one("SELECT id FROM religions WHERE name='Hinduism'");
if (!hindu) {
  console.error('Hinduism not in DB.');
  process.exit(1);
}
const hid = hindu.id;

const festivals = all('SELECT id, name FROM festivals WHERE religion_id=?', [hid]);

db.exec('BEGIN');
let updated = 0;

for (const f of festivals) {
  let url = '';
  const n = f.name;
  
  // Custom Britannica URLs for common ones
  if (n === 'Diwali' || n === 'Diwali / Deepavali') url = 'https://www.britannica.com/topic/Diwali-Hindu-festival';
  else if (n === 'Holi') url = 'https://www.britannica.com/topic/Holi';
  else if (n === 'Maha Shivaratri') url = 'https://www.britannica.com/topic/Maha-Shivaratri';
  else if (n === 'Dussehra / Vijayadashami') url = 'https://www.britannica.com/topic/Dussehra';
  else if (n === 'Ganesh Chaturthi') url = 'https://www.britannica.com/topic/Ganesha-Chaturthi';
  else if (n === 'Rama Navami') url = 'https://www.britannica.com/topic/Rama-Navami';
  else if (n === 'Krishna Janmashtami') url = 'https://www.britannica.com/topic/Janmashtami';
  else if (n === 'Raksha Bandhan') url = 'https://www.britannica.com/topic/Raksha-Bandhan';
  else if (n === 'Navratri') url = 'https://www.britannica.com/topic/Navratri';
  else {
    // Default to Wikipedia for others as they are highly reliable
    let safeName = n.split('/')[0].trim().replace(/ /g, '_');
    url = `https://en.wikipedia.org/wiki/${safeName}`;
  }

  const existingRef = one('SELECT id FROM references_table WHERE festival_id=?', [f.id]);
  
  if (existingRef) {
    run('UPDATE references_table SET url=? WHERE id=?', [url, existingRef.id]);
  } else {
    run('INSERT INTO references_table (festival_id, source_name, source_type, url, verification_status) VALUES (?, ?, ?, ?, ?)',
      [f.id, n + ' Reference', 'Reference', url, 'demo']);
  }
  updated++;
}

db.exec('COMMIT');
console.log(`Successfully added/updated reference URLs for ${updated} Hindu festivals.`);
