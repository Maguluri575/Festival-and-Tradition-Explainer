const path = require('path');
const { DatabaseSync } = require('node:sqlite');

const dataDir = path.join(__dirname, '..', 'data');
const db = new DatabaseSync(path.join(dataDir, 'faithfest.db'));

function one(sql, p = []) { return db.prepare(sql).get(...p); }

const christianity = one("SELECT id FROM religions WHERE name='Christianity'");
if (!christianity) {
  console.error('Christianity not in DB.');
  process.exit(1);
}
const cid = christianity.id;

const events = [
  { d: '2026-01-06', t: 'Epiphany' },
  { d: '2026-01-11', t: 'The Baptism of Jesus' },
  { d: '2026-02-02', t: 'Candlemas' },
  { d: '2026-02-14', t: "St. Valentine's Day" },
  { d: '2026-02-18', t: 'Ash Wednesday' },
  { d: '2026-03-17', t: "St. Patrick's Day" },
  { d: '2026-03-19', t: "St. Joseph's Day" },
  { d: '2026-03-29', t: 'Palm Sunday' },
  { d: '2026-04-02', t: 'Maundy (Holy) Thursday' },
  { d: '2026-04-03', t: 'Good Friday' },
  { d: '2026-04-05', t: 'Easter' },
  { d: '2026-04-06', t: 'Easter Monday' },
  { d: '2026-04-23', t: "St. George's Day" },
  { d: '2026-05-14', t: 'Ascension of Jesus' },
  { d: '2026-05-24', t: 'Pentecost' },
  { d: '2026-05-31', t: 'Trinity Sunday' },
  { d: '2026-06-04', t: 'Corpus Christi' },
  { d: '2026-06-29', t: 'Saints Peter and Paul' },
  { d: '2026-07-15', t: 'Saint Vladimir' },
  { d: '2026-07-25', t: 'St. James the Great Day' },
  { d: '2026-08-01', t: 'Lammas' },
  { d: '2026-08-15', t: 'The Assumption of Mary' },
  { d: '2026-09-14', t: 'Holy Cross Day' },
  { d: '2026-09-29', t: 'Michael and All Angels' },
  { d: '2026-10-31', t: 'All Hallows Eve' },
  { d: '2026-11-01', t: "All Saints' Day" },
  { d: '2026-11-02', t: "All Souls' Day" },
  { d: '2026-11-22', t: 'Christ the King' },
  { d: '2026-11-26', t: 'Thanksgiving (USA)' },
  { d: '2026-11-29', t: 'Advent - first Sunday' },
  { d: '2026-11-30', t: "St. Andrew's Day" },
  { d: '2026-12-06', t: 'St. Nicholas Day' },
  { d: '2026-12-24', t: 'Christmas Eve' },
  { d: '2026-12-25', t: 'Christmas' },
  { d: '2026-12-28', t: 'Holy Innocents' },
  { d: '2026-12-31', t: 'Watch Night' },
];

const insertEvent = db.prepare(
  `INSERT INTO calendar_events (religion_id, event_date, year, month, day, weekday, title, source)
   VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
);

db.exec('BEGIN');
let count = 0;
for (const ev of events) {
  const dateObj = new Date(ev.d);
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const weekday = weekdays[dateObj.getDay()];
  
  insertEvent.run(
    cid,
    ev.d,
    2026,
    parseInt(ev.d.split('-')[1], 10),
    parseInt(ev.d.split('-')[2], 10),
    weekday,
    ev.t,
    'User Provided Data'
  );
  count++;
}
db.exec('COMMIT');

console.log(`Successfully added ${count} Christian events to the calendar.`);
