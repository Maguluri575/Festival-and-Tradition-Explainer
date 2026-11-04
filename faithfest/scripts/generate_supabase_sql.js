const { DatabaseSync } = require('node:sqlite');
const fs = require('fs');
const path = require('path');

const db = new DatabaseSync('faithfest/data/faithfest.db');

console.log('Generating Supabase PostgreSQL Schema and Seed Scripts...');

// 1. GENERATE SUPABASE SCHEMA (supabase_schema.sql)
const schemaSql = `-- ============================================================================
-- FAITHFEST SUPABASE (POSTGRESQL) SCHEMA
-- Complete database schema with types, foreign keys, indexes, and RLS policies
-- ============================================================================

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Religions Table
CREATE TABLE IF NOT EXISTS public.religions (
  id BIGSERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Festivals Table
CREATE TABLE IF NOT EXISTS public.festivals (
  id BIGSERIAL PRIMARY KEY,
  religion_id BIGINT NOT NULL REFERENCES public.religions(id) ON DELETE RESTRICT,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  country TEXT DEFAULT 'Global',
  region TEXT DEFAULT 'Global',
  typical_date TEXT DEFAULT 'Date varies',
  duration TEXT DEFAULT 'Varies',
  status TEXT DEFAULT 'published',
  historical_information TEXT,
  significance TEXT,
  celebration TEXT,
  modern_celebration TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Festival Sub-content Tables
CREATE TABLE IF NOT EXISTS public.festival_history (
  id BIGSERIAL PRIMARY KEY,
  festival_id BIGINT NOT NULL REFERENCES public.festivals(id) ON DELETE CASCADE,
  period TEXT,
  title TEXT NOT NULL,
  description TEXT,
  source_id BIGINT
);

CREATE TABLE IF NOT EXISTS public.festival_regions (
  id BIGSERIAL PRIMARY KEY,
  festival_id BIGINT NOT NULL REFERENCES public.festivals(id) ON DELETE CASCADE,
  country TEXT,
  region TEXT,
  rituals TEXT,
  foods TEXT,
  clothing TEXT,
  music TEXT,
  decorations TEXT,
  celebration_style TEXT
);

CREATE TABLE IF NOT EXISTS public.foods (
  id BIGSERIAL PRIMARY KEY,
  festival_id BIGINT NOT NULL REFERENCES public.festivals(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  ingredients TEXT,
  preparation TEXT,
  region TEXT,
  significance TEXT,
  image_url TEXT
);

CREATE TABLE IF NOT EXISTS public.clothing (
  id BIGSERIAL PRIMARY KEY,
  festival_id BIGINT NOT NULL REFERENCES public.festivals(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  category TEXT,
  description TEXT,
  region TEXT,
  cultural_context TEXT,
  image_url TEXT
);

CREATE TABLE IF NOT EXISTS public.music_dance (
  id BIGSERIAL PRIMARY KEY,
  festival_id BIGINT NOT NULL REFERENCES public.festivals(id) ON DELETE CASCADE,
  kind TEXT,
  name TEXT NOT NULL,
  description TEXT,
  region TEXT,
  media_url TEXT
);

CREATE TABLE IF NOT EXISTS public.decorations (
  id BIGSERIAL PRIMARY KEY,
  festival_id BIGINT NOT NULL REFERENCES public.festivals(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  meaning TEXT,
  region TEXT,
  image_url TEXT
);

CREATE TABLE IF NOT EXISTS public.symbols (
  id BIGSERIAL PRIMARY KEY,
  festival_id BIGINT NOT NULL REFERENCES public.festivals(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  meaning TEXT,
  region TEXT,
  image_url TEXT
);

CREATE TABLE IF NOT EXISTS public.media (
  id BIGSERIAL PRIMARY KEY,
  festival_id BIGINT NOT NULL REFERENCES public.festivals(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  url TEXT NOT NULL,
  caption TEXT,
  alt_text TEXT,
  source TEXT,
  license TEXT
);

CREATE TABLE IF NOT EXISTS public.references_table (
  id BIGSERIAL PRIMARY KEY,
  festival_id BIGINT NOT NULL REFERENCES public.festivals(id) ON DELETE CASCADE,
  source_name TEXT NOT NULL,
  source_type TEXT DEFAULT 'Source',
  url TEXT,
  author TEXT,
  publication_date TEXT,
  verification_status TEXT DEFAULT 'verified',
  last_reviewed TEXT
);

CREATE TABLE IF NOT EXISTS public.quiz_questions (
  id BIGSERIAL PRIMARY KEY,
  festival_id BIGINT NOT NULL REFERENCES public.festivals(id) ON DELETE CASCADE,
  question TEXT NOT NULL,
  options_json JSONB NOT NULL,
  answer_index INTEGER NOT NULL
);

-- 4. Calendar Events Table
CREATE TABLE IF NOT EXISTS public.calendar_events (
  id BIGSERIAL PRIMARY KEY,
  religion_id BIGINT REFERENCES public.religions(id) ON DELETE CASCADE,
  festival_id BIGINT REFERENCES public.festivals(id) ON DELETE SET NULL,
  event_date DATE NOT NULL,
  year INTEGER,
  month INTEGER,
  day INTEGER,
  weekday TEXT,
  title TEXT NOT NULL,
  lunar_month TEXT,
  tithi TEXT,
  source TEXT DEFAULT 'Hindu calendar dataset',
  UNIQUE(religion_id, event_date, title)
);

-- 5. Sacred Geography & Explorer Map Tables
CREATE TABLE IF NOT EXISTS public.festival_locations (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  religion TEXT NOT NULL,
  address TEXT,
  city TEXT,
  state TEXT,
  country TEXT,
  latitude NUMERIC(10, 7) NOT NULL,
  longitude NUMERIC(10, 7) NOT NULL,
  description TEXT,
  image_url TEXT,
  source_url TEXT,
  place_type TEXT DEFAULT 'place_of_worship',
  seasonal_notes TEXT,
  verification_status TEXT DEFAULT 'published',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.festival_location_relations (
  id BIGSERIAL PRIMARY KEY,
  location_id BIGINT NOT NULL REFERENCES public.festival_locations(id) ON DELETE CASCADE,
  festival_id BIGINT NOT NULL REFERENCES public.festivals(id) ON DELETE CASCADE,
  significance_notes TEXT,
  is_primary_celebration_site BOOLEAN DEFAULT TRUE,
  UNIQUE(location_id, festival_id)
);

-- 6. User Profiles, Badges & Interactive Tables
CREATE TABLE IF NOT EXISTS public.users (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.favorites (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  festival_id BIGINT NOT NULL REFERENCES public.festivals(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, festival_id)
);

CREATE TABLE IF NOT EXISTS public.reminders (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT REFERENCES public.users(id) ON DELETE CASCADE,
  festival_id BIGINT NOT NULL REFERENCES public.festivals(id) ON DELETE CASCADE,
  reminder_days INTEGER DEFAULT 7,
  enabled BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, festival_id)
);

CREATE TABLE IF NOT EXISTS public.progress (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  festival_id BIGINT NOT NULL REFERENCES public.festivals(id) ON DELETE CASCADE,
  step INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT FALSE,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, festival_id)
);

CREATE TABLE IF NOT EXISTS public.quiz_attempts (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT REFERENCES public.users(id) ON DELETE SET NULL,
  festival_id BIGINT NOT NULL REFERENCES public.festivals(id) ON DELETE CASCADE,
  score INTEGER NOT NULL,
  total INTEGER NOT NULL,
  percentage INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.badges (
  id BIGSERIAL PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT
);

CREATE TABLE IF NOT EXISTS public.user_badges (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  badge_id BIGINT NOT NULL REFERENCES public.badges(id) ON DELETE CASCADE,
  earned_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, badge_id)
);

CREATE TABLE IF NOT EXISTS public.user_settings (
  user_id BIGINT PRIMARY KEY REFERENCES public.users(id) ON DELETE CASCADE,
  language TEXT DEFAULT 'English',
  high_contrast BOOLEAN DEFAULT FALSE,
  font_scale NUMERIC(3, 2) DEFAULT 1.00
);

-- 7. Audit, Analytics & Issue Reporting Tables
CREATE TABLE IF NOT EXISTS public.reported_content (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT REFERENCES public.users(id) ON DELETE SET NULL,
  festival_id BIGINT NOT NULL REFERENCES public.festivals(id) ON DELETE CASCADE,
  reason TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  admin_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  resolved_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS public.audit_logs (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT REFERENCES public.users(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id BIGINT,
  details_json JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.analytics_events (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT,
  event_type TEXT NOT NULL,
  festival_id BIGINT,
  metadata_json JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Performance Indexes
CREATE INDEX IF NOT EXISTS idx_festivals_religion ON public.festivals(religion_id);
CREATE INDEX IF NOT EXISTS idx_festivals_name ON public.festivals(name);
CREATE INDEX IF NOT EXISTS idx_festivals_category ON public.festivals(category);
CREATE INDEX IF NOT EXISTS idx_calendar_date ON public.calendar_events(event_date);
CREATE INDEX IF NOT EXISTS idx_calendar_religion ON public.calendar_events(religion_id);
CREATE INDEX IF NOT EXISTS idx_calendar_title ON public.calendar_events(title);
CREATE INDEX IF NOT EXISTS idx_fl_religion ON public.festival_locations(religion);
CREATE INDEX IF NOT EXISTS idx_fl_city ON public.festival_locations(city);
CREATE INDEX IF NOT EXISTS idx_fl_coords ON public.festival_locations(latitude, longitude);
CREATE INDEX IF NOT EXISTS idx_flr_loc ON public.festival_location_relations(location_id);
CREATE INDEX IF NOT EXISTS idx_flr_fest ON public.festival_location_relations(festival_id);
CREATE INDEX IF NOT EXISTS idx_reported_status ON public.reported_content(status);

-- 9. Supabase Row Level Security (RLS) Configuration
ALTER TABLE public.religions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.festivals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.festival_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.festival_regions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.foods ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.clothing ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.music_dance ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.decorations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.symbols ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.references_table ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.calendar_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.festival_locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.festival_location_relations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reported_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reminders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_attempts ENABLE ROW LEVEL SECURITY;

-- Public Read Policies (Accessible to anyone reading festival heritage)
CREATE POLICY "Public Read Religions" ON public.religions FOR SELECT USING (true);
CREATE POLICY "Public Read Festivals" ON public.festivals FOR SELECT USING (status = 'published');
CREATE POLICY "Public Read History" ON public.festival_history FOR SELECT USING (true);
CREATE POLICY "Public Read Regions" ON public.festival_regions FOR SELECT USING (true);
CREATE POLICY "Public Read Foods" ON public.foods FOR SELECT USING (true);
CREATE POLICY "Public Read Clothing" ON public.clothing FOR SELECT USING (true);
CREATE POLICY "Public Read Music" ON public.music_dance FOR SELECT USING (true);
CREATE POLICY "Public Read Decorations" ON public.decorations FOR SELECT USING (true);
CREATE POLICY "Public Read Symbols" ON public.symbols FOR SELECT USING (true);
CREATE POLICY "Public Read Media" ON public.media FOR SELECT USING (true);
CREATE POLICY "Public Read References" ON public.references_table FOR SELECT USING (true);
CREATE POLICY "Public Read Quizzes" ON public.quiz_questions FOR SELECT USING (true);
CREATE POLICY "Public Read Calendar" ON public.calendar_events FOR SELECT USING (true);
CREATE POLICY "Public Read Locations" ON public.festival_locations FOR SELECT USING (verification_status = 'published');
CREATE POLICY "Public Read Relations" ON public.festival_location_relations FOR SELECT USING (true);
CREATE POLICY "Public Read Badges" ON public.badges FOR SELECT USING (true);

-- Interactive User & Guest Policies
CREATE POLICY "Allow Public Issue Reporting" ON public.reported_content FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow Quiz Attempts Recording" ON public.quiz_attempts FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow Reminders Recording" ON public.reminders FOR INSERT WITH CHECK (true);
`;

fs.writeFileSync('faithfest/supabase_schema.sql', schemaSql, 'utf8');
console.log('✓ Created faithfest/supabase_schema.sql');

// 2. GENERATE SUPABASE DATA SEED (supabase_seed.sql)
function escapeSqlVal(val, isJson = false) {
  if (val === null || val === undefined) return 'NULL';
  if (typeof val === 'number') return val;
  if (typeof val === 'boolean') return val ? 'TRUE' : 'FALSE';
  const str = String(val).replace(/'/g, "''");
  if (isJson) return `'${str}'::jsonb`;
  return `'${str}'`;
}

function dumpTable(tableName, jsonCols = []) {
  const rows = db.prepare(`SELECT * FROM ${tableName}`).all();
  if (!rows.length) return '';

  const cols = Object.keys(rows[0]);
  let out = `\n-- Table: ${tableName} (${rows.length} rows)\n`;
  out += `INSERT INTO public.${tableName} (${cols.join(', ')}) VALUES\n`;

  const valueRows = rows.map(r => {
    const vals = cols.map(c => {
      const isJson = jsonCols.includes(c);
      let v = r[c];
      if (typeof v === 'number' && (c === 'active' || c === 'completed' || c === 'enabled' || c === 'is_primary_celebration_site' || c === 'high_contrast')) {
        v = (v === 1);
      }
      return escapeSqlVal(v, isJson);
    });
    return `  (${vals.join(', ')})`;
  });

  out += valueRows.join(',\n') + ';\n';
  out += `SELECT setval(pg_get_serial_sequence('public.${tableName}', 'id'), COALESCE(max(id), 1)) FROM public.${tableName};\n`;
  return out;
}

let seedSql = `-- ============================================================================
-- FAITHFEST SUPABASE DATA SEED
-- Full datasets: Religions, Festivals, Traditions, Foods, Music, Sites & Quizzes
-- ============================================================================

-- Disable triggers temporarily during batch insert
SET session_replication_role = 'replica';
`;

seedSql += dumpTable('religions');
seedSql += dumpTable('festivals');
seedSql += dumpTable('festival_history');
seedSql += dumpTable('festival_regions');
seedSql += dumpTable('foods');
seedSql += dumpTable('clothing');
seedSql += dumpTable('music_dance');
seedSql += dumpTable('decorations');
seedSql += dumpTable('symbols');
seedSql += dumpTable('media');
seedSql += dumpTable('references_table');
seedSql += dumpTable('quiz_questions', ['options_json']);
seedSql += dumpTable('badges');
seedSql += dumpTable('festival_locations');
seedSql += dumpTable('festival_location_relations');
seedSql += dumpTable('users');

// Core calendar events (sample 2026/2027 high-priority events)
const calRows = db.prepare(`
  SELECT id, religion_id, festival_id, event_date, year, month, day, weekday, title, lunar_month, tithi, source
  FROM calendar_events
  WHERE year IN (2026, 2027) AND (festival_id IS NOT NULL OR tithi IS NOT NULL)
  LIMIT 500
`).all();

if (calRows.length) {
  const cols = Object.keys(calRows[0]);
  seedSql += `\n-- Table: calendar_events (Core 2026/2027 Events, ${calRows.length} rows)\n`;
  seedSql += `INSERT INTO public.calendar_events (${cols.join(', ')}) VALUES\n`;
  const calValues = calRows.map(r => `  (${cols.map(c => escapeSqlVal(r[c])).join(', ')})`);
  seedSql += calValues.join(',\n') + '\nON CONFLICT (religion_id, event_date, title) DO NOTHING;\n';
  seedSql += `SELECT setval(pg_get_serial_sequence('public.calendar_events', 'id'), COALESCE(max(id), 1)) FROM public.calendar_events;\n`;
}

seedSql += `\n-- Re-enable triggers\nSET session_replication_role = 'origin';\n`;

fs.writeFileSync('faithfest/supabase_seed.sql', seedSql, 'utf8');
console.log('✓ Created faithfest/supabase_seed.sql');

