-- ============================================================================
-- FAITHFEST SUPABASE USER AUTHENTICATION & REGISTRATION FIX
-- Run this in Supabase SQL Editor to enable persistent cloud login on Vercel
-- ============================================================================

-- 1. Grant table and sequence permissions for users table
GRANT SELECT, INSERT, UPDATE ON public.users TO anon, authenticated;
GRANT USAGE, SELECT ON SEQUENCE public.users_id_seq TO anon, authenticated;

-- 2. Configure safe Row Level Security policies
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow user registration" ON public.users;
CREATE POLICY "Allow user registration" ON public.users
  FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow user login check" ON public.users;
CREATE POLICY "Allow user login check" ON public.users
  FOR SELECT USING (true);

-- 3. Sync 'hari@123gmail.com' into Supabase cloud database
INSERT INTO public.users (id, name, email, password_hash, role)
VALUES (
  10,
  'hari',
  'hari@123gmail.com',
  'c5b8466e95fdc99bffe848901363875e:e024e736cb457f87e2d0be76218836245976ebd34773e2236e6ebe61bc3cc6b2376e89aea5e08da9af117d069df06daf208b923418652c50acd7ab2e6634c22c',
  'user'
)
ON CONFLICT (email) DO UPDATE
SET password_hash = EXCLUDED.password_hash;

SELECT setval(pg_get_serial_sequence('public.users', 'id'), COALESCE(max(id), 1)) FROM public.users;

