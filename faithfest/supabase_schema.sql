-- ============================================================================
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

-- 9. Row Level Security (RLS) Configuration
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
ALTER TABLE public.user_settings ENABLE ROW LEVEL SECURITY;

-- 9.1 Public Read Policies (Accessible to unauthenticated and authenticated users)
DROP POLICY IF EXISTS "Public Read Religions" ON public.religions;
CREATE POLICY "Public Read Religions" ON public.religions FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Festivals" ON public.festivals;
CREATE POLICY "Public Read Festivals" ON public.festivals FOR SELECT USING (status = 'published');

DROP POLICY IF EXISTS "Public Read History" ON public.festival_history;
CREATE POLICY "Public Read History" ON public.festival_history FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Regions" ON public.festival_regions;
CREATE POLICY "Public Read Regions" ON public.festival_regions FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Foods" ON public.foods;
CREATE POLICY "Public Read Foods" ON public.foods FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Clothing" ON public.clothing;
CREATE POLICY "Public Read Clothing" ON public.clothing FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Music" ON public.music_dance;
CREATE POLICY "Public Read Music" ON public.music_dance FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Decorations" ON public.decorations;
CREATE POLICY "Public Read Decorations" ON public.decorations FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Symbols" ON public.symbols;
CREATE POLICY "Public Read Symbols" ON public.symbols FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Media" ON public.media;
CREATE POLICY "Public Read Media" ON public.media FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read References" ON public.references_table;
CREATE POLICY "Public Read References" ON public.references_table FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Quizzes" ON public.quiz_questions;
CREATE POLICY "Public Read Quizzes" ON public.quiz_questions FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Calendar" ON public.calendar_events;
CREATE POLICY "Public Read Calendar" ON public.calendar_events FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Locations" ON public.festival_locations;
CREATE POLICY "Public Read Locations" ON public.festival_locations FOR SELECT USING (verification_status = 'published');

DROP POLICY IF EXISTS "Public Read Relations" ON public.festival_location_relations;
CREATE POLICY "Public Read Relations" ON public.festival_location_relations FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Read Badges" ON public.badges;
CREATE POLICY "Public Read Badges" ON public.badges FOR SELECT USING (true);

-- 9.2 Interactive User & Guest Action Policies
DROP POLICY IF EXISTS "Allow Public Issue Reporting" ON public.reported_content;
CREATE POLICY "Allow Public Issue Reporting" ON public.reported_content FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow Quiz Attempts Recording" ON public.quiz_attempts;
CREATE POLICY "Allow Quiz Attempts Recording" ON public.quiz_attempts FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow Reminders Recording" ON public.reminders;
CREATE POLICY "Allow Reminders Recording" ON public.reminders FOR INSERT WITH CHECK (true);

-- 9.3 Admin Management Policies (Festivals, Locations, Moderation)
DROP POLICY IF EXISTS "Admin Manage Festivals" ON public.festivals;
CREATE POLICY "Admin Manage Festivals" ON public.festivals
  FOR ALL
  USING (auth.role() = 'service_role' OR (auth.jwt() ->> 'role') = 'admin')
  WITH CHECK (auth.role() = 'service_role' OR (auth.jwt() ->> 'role') = 'admin');

DROP POLICY IF EXISTS "Admin Manage Locations" ON public.festival_locations;
CREATE POLICY "Admin Manage Locations" ON public.festival_locations
  FOR ALL
  USING (auth.role() = 'service_role' OR (auth.jwt() ->> 'role') = 'admin')
  WITH CHECK (auth.role() = 'service_role' OR (auth.jwt() ->> 'role') = 'admin');

DROP POLICY IF EXISTS "Admin Manage Reports" ON public.reported_content;
CREATE POLICY "Admin Manage Reports" ON public.reported_content
  FOR ALL
  USING (auth.role() = 'service_role' OR (auth.jwt() ->> 'role') = 'admin');

-- 10. Safe Granular Privileges (NO blanket GRANT ALL)
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;

-- Public read-only for educational heritage data
GRANT SELECT ON public.religions, public.festivals, public.festival_history,
  public.festival_regions, public.foods, public.clothing, public.music_dance,
  public.decorations, public.symbols, public.media, public.references_table,
  public.quiz_questions, public.calendar_events, public.festival_locations,
  public.festival_location_relations, public.badges
TO anon, authenticated;

-- Restricted guest / user interactive actions
GRANT INSERT ON public.reported_content, public.quiz_attempts, public.reminders TO anon, authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;

-- Authenticated user private data
GRANT SELECT, INSERT, UPDATE, DELETE ON public.favorites, public.progress, public.user_settings TO authenticated;
GRANT SELECT ON public.user_badges TO authenticated;

-- Backend server / service role full administration
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;
GRANT ALL ON ALL ROUTINES IN SCHEMA public TO service_role;
