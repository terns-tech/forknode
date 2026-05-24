-- Bridgr Supabase Schema — HackPune Platform
-- Run this migration in your Supabase SQL editor or via CLI

-- Enable required extensions
create extension if not exists "uuid-ossp";

-- ─────────────────────────────────────────
-- SITE CONTENT
-- ─────────────────────────────────────────

create table if not exists site_pages (
  id uuid primary key default uuid_generate_v4(),
  slug text not null unique,
  status text not null default 'draft' check (status in ('draft', 'published')),
  seo_title text,
  seo_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists page_sections (
  id uuid primary key default uuid_generate_v4(),
  page_slug text not null references site_pages(slug) on delete cascade,
  section_key text not null,
  title text,
  subtitle text,
  body_markdown text,
  cta_primary_label text,
  cta_primary_url text,
  cta_secondary_label text,
  cta_secondary_url text,
  order_index integer not null default 0,
  visibility text not null default 'public' check (visibility in ('public', 'hidden')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(page_slug, section_key)
);

create table if not exists faq_items (
  id uuid primary key default uuid_generate_v4(),
  event_slug text not null default 'hackpune-2026',
  question text not null,
  answer_markdown text not null,
  order_index integer not null default 0,
  visibility text not null default 'public' check (visibility in ('public', 'hidden')),
  created_at timestamptz not null default now()
);

-- ─────────────────────────────────────────
-- PARTNERS & SPEAKERS
-- ─────────────────────────────────────────

create table if not exists partners (
  id uuid primary key default uuid_generate_v4(),
  type text not null check (type in ('challenge_partner', 'sponsor', 'tech_partner', 'community_partner')),
  status text not null default 'in_conversation' check (status in ('in_conversation', 'announced', 'hidden')),
  name text not null,
  logo_url text,
  website_url text,
  blurb text,
  order_index integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists speakers (
  id uuid primary key default uuid_generate_v4(),
  status text not null default 'invite_sent' check (status in ('invite_sent', 'tentative', 'announced', 'hidden')),
  name text not null,
  photo_url text,
  bio text,
  talk_title text,
  tags text[] default '{}',
  order_index integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ─────────────────────────────────────────
-- EVENT CONFIG
-- ─────────────────────────────────────────

create table if not exists events (
  id uuid primary key default uuid_generate_v4(),
  slug text not null unique,
  year integer not null,
  location_text text not null default 'Pune, India (TBA venue)',
  date_text text not null default 'Date TBA',
  luma_url text,
  discord_url text,
  slack_url text,
  applications_open boolean not null default false,
  applications_close_text text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ─────────────────────────────────────────
-- USER PROFILES & AUTH
-- ─────────────────────────────────────────

create table if not exists profiles (
  id uuid primary key default uuid_generate_v4(),
  user_id text not null unique, -- Appwrite user ID
  role text not null default 'speaker' check (role in ('admin', 'partner', 'speaker')),
  display_name text,
  email text,
  created_at timestamptz not null default now()
);

create table if not exists partner_profiles (
  id uuid primary key default uuid_generate_v4(),
  user_id text not null references profiles(user_id) on delete cascade,
  org_name text,
  org_website text,
  org_logo_url text,
  org_description text,
  primary_contact_name text,
  primary_contact_email text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists speaker_profiles (
  id uuid primary key default uuid_generate_v4(),
  user_id text not null references profiles(user_id) on delete cascade,
  name text,
  email text,
  bio text,
  photo_url text,
  talk_title_suggestion text,
  availability_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ─────────────────────────────────────────
-- FORM SUBMISSIONS
-- ─────────────────────────────────────────

create table if not exists applications_participants (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  event_slug text not null default 'hackpune-2026',
  status text not null default 'new' check (status in ('new', 'reviewing', 'accepted', 'rejected')),
  email text not null,
  full_name text not null,
  organization text,
  data jsonb not null default '{}'
);

create index if not exists idx_participants_email on applications_participants(email);
create index if not exists idx_participants_status on applications_participants(status);
create index if not exists idx_participants_event on applications_participants(event_slug);

create table if not exists applications_volunteers (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  event_slug text not null default 'hackpune-2026',
  status text not null default 'new' check (status in ('new', 'reviewing', 'accepted', 'rejected')),
  email text not null,
  full_name text not null,
  organization text,
  data jsonb not null default '{}'
);

create table if not exists applications_sponsors (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  event_slug text not null default 'hackpune-2026',
  status text not null default 'new' check (status in ('new', 'reviewing', 'accepted', 'rejected')),
  email text not null,
  full_name text not null,
  organization text,
  data jsonb not null default '{}'
);

create table if not exists applications_speakers (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamptz not null default now(),
  event_slug text not null default 'hackpune-2026',
  status text not null default 'new' check (status in ('new', 'reviewing', 'accepted', 'rejected')),
  email text not null,
  full_name text not null,
  organization text,
  data jsonb not null default '{}'
);

-- ─────────────────────────────────────────
-- NOTION CACHE & INTEGRATION
-- ─────────────────────────────────────────

create table if not exists notion_cache (
  id uuid primary key default uuid_generate_v4(),
  cache_key text not null unique,
  data jsonb not null default '[]',
  last_synced_at timestamptz not null default now(),
  error_message text
);

create table if not exists integration_settings (
  id uuid primary key default uuid_generate_v4(),
  key text not null unique,
  value text,
  updated_at timestamptz not null default now()
);

-- ─────────────────────────────────────────
-- AUDIT LOG
-- ─────────────────────────────────────────

create table if not exists audit_log (
  id uuid primary key default uuid_generate_v4(),
  user_id text not null,
  action text not null,
  table_name text not null,
  record_id text,
  details jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_audit_user on audit_log(user_id);
create index if not exists idx_audit_created on audit_log(created_at desc);

-- ─────────────────────────────────────────
-- ROW LEVEL SECURITY
-- ─────────────────────────────────────────

-- Enable RLS on all tables
alter table site_pages enable row level security;
alter table page_sections enable row level security;
alter table faq_items enable row level security;
alter table partners enable row level security;
alter table speakers enable row level security;
alter table events enable row level security;
alter table profiles enable row level security;
alter table partner_profiles enable row level security;
alter table speaker_profiles enable row level security;
alter table applications_participants enable row level security;
alter table applications_volunteers enable row level security;
alter table applications_sponsors enable row level security;
alter table applications_speakers enable row level security;
alter table notion_cache enable row level security;
alter table audit_log enable row level security;

-- Public read on published site content (anon key)
create policy "Public can read published pages"
  on site_pages for select
  using (status = 'published');

create policy "Public can read visible sections"
  on page_sections for select
  using (visibility = 'public');

create policy "Public can read visible FAQ"
  on faq_items for select
  using (visibility = 'public');

create policy "Public can read non-hidden partners"
  on partners for select
  using (status in ('in_conversation', 'announced'));

create policy "Public can read announced speakers"
  on speakers for select
  using (status = 'announced');

create policy "Public can read events"
  on events for select
  using (true);

-- Public can insert form submissions (no auth needed)
create policy "Anyone can submit participant application"
  on applications_participants for insert
  with check (true);

create policy "Anyone can submit volunteer application"
  on applications_volunteers for insert
  with check (true);

create policy "Anyone can submit sponsor application"
  on applications_sponsors for insert
  with check (true);

create policy "Anyone can submit speaker application"
  on applications_speakers for insert
  with check (true);

-- Service role (admin operations) — bypasses RLS by default

-- ─────────────────────────────────────────
-- SEED DATA
-- ─────────────────────────────────────────

insert into site_pages (slug, status, seo_title, seo_description) values
  ('home', 'published', 'Bridgr — AI Hackathons in Pune, India', 'Bridgr creates high-signal, problem-first AI hackathons in Pune, India.'),
  ('hackpune', 'published', 'HackPune — India''s Premier AI Hackathon', '24-hour AI hackathon in Pune. Real challenges from real companies.'),
  ('about', 'published', 'About Bridgr', 'Learn about the team behind Bridgr and our mission.'),
  ('updates', 'published', 'Updates — Bridgr', 'Latest announcements from Bridgr and HackPune.')
on conflict (slug) do nothing;

insert into events (slug, year, location_text, date_text, applications_open) values
  ('hackpune', 2026, 'Pune, India (TBA venue)', '2026 — Date TBA', false)
on conflict (slug) do nothing;

insert into partners (type, status, name, blurb) values
  ('tech_partner', 'in_conversation', 'Cursor', 'AI-powered code editor — in conversation'),
  ('tech_partner', 'in_conversation', 'OpenAI', 'Leading AI research company — in conversation'),
  ('tech_partner', 'in_conversation', 'Lovable', 'AI-powered app builder — in conversation'),
  ('tech_partner', 'in_conversation', 'Manus', 'AI agent platform — in conversation');

insert into integration_settings (key, value) values
  ('notion_token', null),
  ('notion_announcements_db_id', null)
on conflict (key) do nothing;
