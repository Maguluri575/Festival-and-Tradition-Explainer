CREATE TABLE IF NOT EXISTS religions (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE NOT NULL, description TEXT, icon TEXT, active INTEGER DEFAULT 1, created_at TEXT DEFAULT CURRENT_TIMESTAMP, updated_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS festivals (id INTEGER PRIMARY KEY AUTOINCREMENT, religion_id INTEGER NOT NULL REFERENCES religions(id), name TEXT NOT NULL, category TEXT NOT NULL, description TEXT, country TEXT, region TEXT, typical_date TEXT, duration TEXT, status TEXT DEFAULT 'published', historical_information TEXT, significance TEXT, celebration TEXT, modern_celebration TEXT, created_at TEXT DEFAULT CURRENT_TIMESTAMP, updated_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS festival_history (id INTEGER PRIMARY KEY AUTOINCREMENT, festival_id INTEGER REFERENCES festivals(id) ON DELETE CASCADE, period TEXT, title TEXT, description TEXT, source_id INTEGER);
CREATE TABLE IF NOT EXISTS festival_regions (id INTEGER PRIMARY KEY AUTOINCREMENT, festival_id INTEGER REFERENCES festivals(id) ON DELETE CASCADE, country TEXT, region TEXT, rituals TEXT, foods TEXT, clothing TEXT, music TEXT, decorations TEXT, celebration_style TEXT);
CREATE TABLE IF NOT EXISTS foods (id INTEGER PRIMARY KEY AUTOINCREMENT, festival_id INTEGER REFERENCES festivals(id) ON DELETE CASCADE, name TEXT, description TEXT, ingredients TEXT, preparation TEXT, region TEXT, significance TEXT, image_url TEXT);
CREATE TABLE IF NOT EXISTS clothing (id INTEGER PRIMARY KEY AUTOINCREMENT, festival_id INTEGER REFERENCES festivals(id) ON DELETE CASCADE, name TEXT, category TEXT, description TEXT, region TEXT, cultural_context TEXT, image_url TEXT);
CREATE TABLE IF NOT EXISTS music_dance (id INTEGER PRIMARY KEY AUTOINCREMENT, festival_id INTEGER REFERENCES festivals(id) ON DELETE CASCADE, kind TEXT, name TEXT, description TEXT, region TEXT, media_url TEXT);
CREATE TABLE IF NOT EXISTS decorations (id INTEGER PRIMARY KEY AUTOINCREMENT, festival_id INTEGER REFERENCES festivals(id) ON DELETE CASCADE, name TEXT, description TEXT, meaning TEXT, region TEXT, image_url TEXT);
CREATE TABLE IF NOT EXISTS symbols (id INTEGER PRIMARY KEY AUTOINCREMENT, festival_id INTEGER REFERENCES festivals(id) ON DELETE CASCADE, name TEXT, description TEXT, meaning TEXT, region TEXT, image_url TEXT);
CREATE TABLE IF NOT EXISTS media (id INTEGER PRIMARY KEY AUTOINCREMENT, festival_id INTEGER REFERENCES festivals(id) ON DELETE CASCADE, type TEXT, url TEXT, caption TEXT, alt_text TEXT, source TEXT, license TEXT);
CREATE TABLE IF NOT EXISTS references_table (id INTEGER PRIMARY KEY AUTOINCREMENT, festival_id INTEGER REFERENCES festivals(id) ON DELETE CASCADE, source_name TEXT, source_type TEXT, url TEXT, author TEXT, publication_date TEXT, verification_status TEXT DEFAULT 'demo', last_reviewed TEXT);
CREATE TABLE IF NOT EXISTS quiz_questions (id INTEGER PRIMARY KEY AUTOINCREMENT, festival_id INTEGER REFERENCES festivals(id) ON DELETE CASCADE, question TEXT, options_json TEXT, answer_index INTEGER);
CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT UNIQUE NOT NULL, password_hash TEXT NOT NULL, role TEXT DEFAULT 'user', created_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS favorites (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, festival_id INTEGER REFERENCES festivals(id) ON DELETE CASCADE, UNIQUE(user_id, festival_id));
CREATE TABLE IF NOT EXISTS reminders (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, festival_id INTEGER REFERENCES festivals(id) ON DELETE CASCADE, reminder_days INTEGER DEFAULT 7, enabled INTEGER DEFAULT 1, UNIQUE(user_id, festival_id));
CREATE TABLE IF NOT EXISTS progress (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, festival_id INTEGER REFERENCES festivals(id) ON DELETE CASCADE, step INTEGER DEFAULT 0, completed INTEGER DEFAULT 0, updated_at TEXT DEFAULT CURRENT_TIMESTAMP, UNIQUE(user_id, festival_id));
CREATE TABLE IF NOT EXISTS quiz_attempts (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, festival_id INTEGER REFERENCES festivals(id) ON DELETE CASCADE, score INTEGER, total INTEGER, percentage INTEGER, created_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS badges (id INTEGER PRIMARY KEY AUTOINCREMENT, code TEXT UNIQUE, name TEXT, description TEXT);
CREATE TABLE IF NOT EXISTS user_badges (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER REFERENCES users(id) ON DELETE CASCADE, badge_id INTEGER REFERENCES badges(id) ON DELETE CASCADE, earned_at TEXT DEFAULT CURRENT_TIMESTAMP, UNIQUE(user_id,badge_id));
CREATE TABLE IF NOT EXISTS analytics_events (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, event_type TEXT, festival_id INTEGER, metadata_json TEXT, created_at TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE INDEX IF NOT EXISTS idx_festivals_religion ON festivals(religion_id);
CREATE INDEX IF NOT EXISTS idx_festivals_name ON festivals(name);
CREATE INDEX IF NOT EXISTS idx_events_type ON analytics_events(event_type);

CREATE TABLE IF NOT EXISTS calendar_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  religion_id INTEGER REFERENCES religions(id) ON DELETE CASCADE,
  festival_id INTEGER REFERENCES festivals(id) ON DELETE SET NULL,
  event_date TEXT NOT NULL,
  year INTEGER,
  month INTEGER,
  day INTEGER,
  weekday TEXT,
  title TEXT NOT NULL,
  lunar_month TEXT,
  tithi TEXT,
  source TEXT DEFAULT 'Hindu calendar dataset',
  UNIQUE(religion_id,event_date,title)
);
CREATE INDEX IF NOT EXISTS idx_calendar_date ON calendar_events(event_date);
CREATE INDEX IF NOT EXISTS idx_calendar_religion ON calendar_events(religion_id);
CREATE INDEX IF NOT EXISTS idx_calendar_title ON calendar_events(title);
CREATE TABLE IF NOT EXISTS user_settings (
  user_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  language TEXT DEFAULT 'English',
  high_contrast INTEGER DEFAULT 0,
  font_scale REAL DEFAULT 1.0
);
CREATE TABLE IF NOT EXISTS content_reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  festival_id INTEGER REFERENCES festivals(id) ON DELETE CASCADE,
  reviewer_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  status TEXT DEFAULT 'under_review',
  notes TEXT,
  reviewed_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS audit_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id INTEGER,
  details_json TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS reported_content (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
  festival_id INTEGER REFERENCES festivals(id) ON DELETE CASCADE,
  reason TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  admin_notes TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  resolved_at TEXT
);

CREATE TABLE IF NOT EXISTS festival_locations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  religion TEXT NOT NULL,
  address TEXT,
  city TEXT,
  state TEXT,
  country TEXT,
  latitude REAL NOT NULL,
  longitude REAL NOT NULL,
  description TEXT,
  image_url TEXT,
  source_url TEXT,
  place_type TEXT DEFAULT 'place_of_worship',
  seasonal_notes TEXT,
  verification_status TEXT DEFAULT 'published',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS festival_location_relations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  location_id INTEGER NOT NULL REFERENCES festival_locations(id) ON DELETE CASCADE,
  festival_id INTEGER NOT NULL REFERENCES festivals(id) ON DELETE CASCADE,
  significance_notes TEXT,
  is_primary_celebration_site INTEGER DEFAULT 1,
  UNIQUE(location_id, festival_id)
);

CREATE INDEX IF NOT EXISTS idx_fl_religion ON festival_locations(religion);
CREATE INDEX IF NOT EXISTS idx_fl_city ON festival_locations(city);
CREATE INDEX IF NOT EXISTS idx_fl_coords ON festival_locations(latitude, longitude);
CREATE INDEX IF NOT EXISTS idx_flr_loc ON festival_location_relations(location_id);
CREATE INDEX IF NOT EXISTS idx_flr_fest ON festival_location_relations(festival_id);


