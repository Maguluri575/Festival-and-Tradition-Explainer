-- ============================================================================
-- FAITHFEST SAFE PERMISSIONS & ROLE-BASED ACCESS CONTROL (RLS)
-- High-security script: Granular SELECT/INSERT grants, NO blanket GRANT ALL
-- ============================================================================

-- 1. Grant Schema Usage to Public Roles
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;

-- 2. PUBLIC READ ONLY (Catalog & Educational Heritage Tables)
-- The 'anon' (unauthenticated guest) and 'authenticated' roles can ONLY READ published heritage data.
-- They CANNOT insert, update, delete, or alter any catalog data.
GRANT SELECT ON public.religions TO anon, authenticated;
GRANT SELECT ON public.festivals TO anon, authenticated;
GRANT SELECT ON public.festival_history TO anon, authenticated;
GRANT SELECT ON public.festival_regions TO anon, authenticated;
GRANT SELECT ON public.foods TO anon, authenticated;
GRANT SELECT ON public.clothing TO anon, authenticated;
GRANT SELECT ON public.music_dance TO anon, authenticated;
GRANT SELECT ON public.decorations TO anon, authenticated;
GRANT SELECT ON public.symbols TO anon, authenticated;
GRANT SELECT ON public.media TO anon, authenticated;
GRANT SELECT ON public.references_table TO anon, authenticated;
GRANT SELECT ON public.quiz_questions TO anon, authenticated;
GRANT SELECT ON public.calendar_events TO anon, authenticated;
GRANT SELECT ON public.festival_locations TO anon, authenticated;
GRANT SELECT ON public.festival_location_relations TO anon, authenticated;
GRANT SELECT ON public.badges TO anon, authenticated;

-- 3. INTERACTIVE GUEST / USER SUBMISSIONS (Restricted INSERT Only)
-- Guests and users can report issues, take quizzes, and set reminders.
GRANT INSERT ON public.reported_content TO anon, authenticated;
GRANT INSERT ON public.quiz_attempts TO anon, authenticated;
GRANT INSERT ON public.reminders TO anon, authenticated;

-- Grant sequence usage for auto-incrementing IDs on permitted tables
GRANT USAGE, SELECT ON SEQUENCE public.reported_content_id_seq TO anon, authenticated;
GRANT USAGE, SELECT ON SEQUENCE public.quiz_attempts_id_seq TO anon, authenticated;
GRANT USAGE, SELECT ON SEQUENCE public.reminders_id_seq TO anon, authenticated;

-- 4. AUTHENTICATED USER PRIVATE DATA (Favorites, Progress, Settings)
-- Only logged-in users have access to their own bookmarks and learning progress.
-- 'anon' has ZERO access to user profiles, passwords, or personal bookmarks.
GRANT SELECT, INSERT, UPDATE, DELETE ON public.favorites TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.progress TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.user_settings TO authenticated;
GRANT SELECT ON public.user_badges TO authenticated;

GRANT USAGE, SELECT ON SEQUENCE public.favorites_id_seq TO authenticated;
GRANT USAGE, SELECT ON SEQUENCE public.progress_id_seq TO authenticated;

-- 5. SERVICE ROLE & ADMIN FULL CONTROL
-- The backend server / service role retains full management rights.
GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;
GRANT ALL ON ALL ROUTINES IN SCHEMA public TO service_role;

-- 6. REFINED RLS POLICIES FOR ADMIN WRITE ACCESS
-- Ensure public reads only see published content, and only Admins can create/modify festivals & locations.

-- Drop duplicate or older policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Public Read Festivals" ON public.festivals;
DROP POLICY IF EXISTS "Admin Manage Festivals" ON public.festivals;
DROP POLICY IF EXISTS "Public Read Locations" ON public.festival_locations;
DROP POLICY IF EXISTS "Admin Manage Locations" ON public.festival_locations;
DROP POLICY IF EXISTS "Admin Manage Reports" ON public.reported_content;

-- Festivals RLS
CREATE POLICY "Public Read Festivals" ON public.festivals
  FOR SELECT USING (status = 'published');

CREATE POLICY "Admin Manage Festivals" ON public.festivals
  FOR ALL
  USING (
    auth.role() = 'service_role' OR
    (auth.jwt() ->> 'role') = 'admin'
  )
  WITH CHECK (
    auth.role() = 'service_role' OR
    (auth.jwt() ->> 'role') = 'admin'
  );

-- Festival Locations RLS
CREATE POLICY "Public Read Locations" ON public.festival_locations
  FOR SELECT USING (verification_status = 'published');

CREATE POLICY "Admin Manage Locations" ON public.festival_locations
  FOR ALL
  USING (
    auth.role() = 'service_role' OR
    (auth.jwt() ->> 'role') = 'admin'
  )
  WITH CHECK (
    auth.role() = 'service_role' OR
    (auth.jwt() ->> 'role') = 'admin'
  );

-- Reported Content RLS: Guests can insert, only Admins can view/manage
CREATE POLICY "Admin Manage Reports" ON public.reported_content
  FOR ALL
  USING (
    auth.role() = 'service_role' OR
    (auth.jwt() ->> 'role') = 'admin'
  );

