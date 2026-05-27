# Cursor/Claude Prompt — Terns Website (Appwrite + Supabase)



**Goal:** Generate the Terns website (terns.tech) + Hackathon microsite with Appwrite + Supabase, with editable content via an Admin dashboard and light Notion sync for selected sections.

Use [**design.md**](http://design.md) for visuals (do not invent a new design system). Take layout + UX inspiration from **ChefTreff** and modern **AI hackathon** sites.

</aside>

## Instructions (read carefully)

- Produce **positioning + structure only** (copy should avoid fixed commitments).
- Do **not** hardcode money amounts, confirmed partners, confirmed dates, or fixed venue details.
- Everything should be phrased as **upcoming / to be announced** unless explicitly provided at runtime via admin CMS.
- We will publish the event on **Luma** and use **Discord + Slack** for community and organization — include links/CTAs, but treat the URLs as configurable.
- Mention “upcoming tech partners” as examples: **Cursor, OpenAI, Lovable, Manus, and more** (not confirmed; mark as “in conversation / exploring”).
- Prioritize maintainability, clear content modeling, and a simple admin workflow.

## Tech stack

- Framework: **Next.js (App Router) + TypeScript**
- Styling: as defined in [**design.md**](http://design.md)
- Hosting: Vercel (or equivalent) — keep deployment steps minimal
- Auth + RBAC: **Appwrite Auth** (sessions/JWT) + role-based access
- Content + forms DB: **Supabase Postgres** (with Row Level Security)
- File storage: Supabase Storage (logos, speaker headshots, etc.)
- Integrations:
    - **Notion** for a few sections (e.g., public announcements feed, selected partner challenges list, or a “Press/Updates” page) pulled read-only.
    - Luma event link (configurable)
    - Discord + Slack invite links (configurable)

## Required pages & routes

### Public marketing

- `/` — Terns (company) landing page
- `/hackpune` — Hackathon main page (event overview)
- `/hackpune/partners` — Partners info hub (for challenge partners & sponsors)
- `/hackpune/speakers` — Speakers & mentors page (teasers; “TBA” states)
- `/hackpune/faq` — FAQ
- `/hackpune/apply` — Apply / Register hub (forms)
- `/updates` — Updates / announcements (Notion-synced + admin posts)
- `/privacy`, `/terms`

### Authenticated portals

- `/login`
- `/partner` — Partner portal (for challenge partners / sponsors)
- `/speaker` — Speaker portal (for speakers / mentors)
- `/admin` — Admin CMS dashboard

## Roles & permissions (RBAC)

Use Appwrite Teams/Roles (or equivalent) and enforce in UI + API.

- **Admin**
    - Can create/edit all public site content stored in Supabase (sections, headlines, CTAs, FAQ items, partner listings, “in conversation” logos, speakers list, homepage modules).
    - Can review/export form submissions.
    - Can manage partner/speaker accounts and role assignments.
    - Can configure external links (Luma, Discord, Slack) and toggles (applications open/closed).
    - Can configure Notion integration keys + which Notion page/database is used for which section.
- **Partner**
    - Can view partner onboarding steps, timelines (high-level), and downloadable assets (brand kit).
    - Can submit/modify their organization profile (logo, description, contact person).
    - Can submit “challenge brief draft” (if applicable) — remains private unless admin publishes.
- **Speaker**
    - Can manage their profile (bio, photo, talk title suggestion).
    - Can upload talk resources (optional) and indicate availability.

## Content model (Supabase schema)

Design tables so everything can be “TBA” / draft-first.

### Core tables

- `site_pages`
    - `slug` (e.g. "home", "hackpune")
    - `status` ("draft" | "published")
    - `seo_title`, `seo_description`
- `page_sections`
    - `page_slug`
    - `section_key` (stable id)
    - `title`, `subtitle`, `body_markdown`
    - `cta_primary_label`, `cta_primary_url`
    - `cta_secondary_label`, `cta_secondary_url`
    - `order_index`
    - `visibility` ("public" | "hidden")
- `faq_items`
    - `event_slug` (default "hackpune-2026" but keep configurable)
    - `question`, `answer_markdown`
    - `order_index`, `visibility`
- `partners`
    - `type` ("challenge_partner" | "sponsor" | "tech_partner" | "community_partner")
    - `status` ("in_conversation" | "announced" | "hidden")
    - `name`
    - `logo_url`
    - `website_url`
    - `blurb`
    - `order_index`
- `speakers`
    - `status` ("invite_sent" | "tentative" | "announced" | "hidden")
    - `name`, `photo_url`, `bio`
    - `talk_title` (optional)
    - `tags` (array) (e.g. "AI", "Product", "Infra")
    - `order_index`
- `events`
    - `slug` (e.g. "hackpune")
    - `year` (int)
    - `location_text` (string, can be “Pune, India (TBA venue)”)
    - `date_text` (string, can be “October 2026 (TBA)”)
    - `luma_url`, `discord_url`, `slack_url`
    - `applications_open` (bool)
    - `applications_close_text` (optional)

### Auth & profiles

- `profiles`
    - `user_id` (Appwrite user id)
    - `role` ("admin" | "partner" | "speaker")
    - `display_name`, `email`
- `partner_profiles`
    - `user_id`
    - `org_name`
    - `org_website`
    - `org_logo_url`
    - `org_description`
    - `primary_contact_name`
    - `primary_contact_email`
- `speaker_profiles`
    - `user_id`
    - `name`, `email`
    - `bio`, `photo_url`
    - `talk_title_suggestion`
    - `availability_notes`

### Form submissions (public → stored, admin-reviewed)

All forms should support spam protection + rate limiting.

- `applications_participants`
- `applications_volunteers`
- `applications_sponsors`
- `applications_speakers`

Each table should store:

- `id`, `created_at`
- `event_slug`
- `status` ("new" | "reviewing" | "accepted" | "rejected")
- `data` (JSONB) to allow iterating fast
- plus a few indexed columns for filtering (e.g. `email`, `full_name`, `organization`)

## Forms (public UX)

Create dedicated, polished forms (inspired by ChefTreff flow quality):

- Participant application
    - basics, links (GitHub/portfolio/LinkedIn), interests, skills, motivation, travel constraints (optional)
- Volunteer application
    - availability, role preferences, experience, contact
- Sponsor inquiry
    - company, intent, what they want, contact
- Speaker/mentor interest
    - bio, proposed topic, availability, contact

Rules:

- Users do **not** need an account to submit forms.
- On submission, show a success state + “Next steps are coming soon” language.
- Send an optional confirmation email (configurable; if email integration is not implemented now, leave stub).

## Notion integration (read-only, minimal, resilient)

Use Notion as an optional content source. Do not make the site depend on it.

Implement:

- A server-side cron or on-demand revalidation endpoint:
    - Fetch a Notion page/database content for “Updates/Announcements”.
    - Cache results in Supabase (`notion_cache` table).
- Admin config:
    - Store Notion page/database IDs in Supabase `integration_settings`.
- Fallback:
    - If Notion fails, show last cached version + a friendly message.

## UI structure (copy positioning)

### `/` Terns landing (company)

Sections (editable):

- Hero: “Terns connects builders and real-world challenges — upcoming AI hackathons across regions.”
- What we do: curated, high-signal, problem-first events
- How it works: partners bring real problems; builders ship prototypes
- Upcoming: teaser for HackPune (TBA details)
- Community: Discord + Slack CTAs (configurable)
- Updates: latest 3 items (Notion/admin)
- Footer: contact + links

### `/hackpune` Hackathon page

Sections (editable; everything “TBA-ready”):

- Hero: “HackPune — upcoming 24-hour AI hackathon in Pune” (avoid hard dates)
- What to expect: challenges, mentoring, demos
- Tracks/challenges: show placeholders until announced
- Who should apply: students/pros/founders (no fixed numbers)
- Timeline: “Applications open soon” + milestone-style overview (not exact schedule)
- Partners: “in conversation” logos (Cursor, OpenAI, Lovable, Manus, and more) + “announcements coming soon”
- FAQ
- CTA: Apply (form), Join community, Get updates (newsletter placeholder optional)

## Admin dashboard requirements

- Secure route guard + role check
- CRUD for:
    - Page sections per page
    - Partners + status (in_conversation/announced/hidden)
    - Speakers + status
    - FAQ items
    - Event settings (links, toggles, text)
    - Notion integration settings + manual “Sync now”
- Review form submissions with filters + CSV export
- Audit log (basic): record admin edits (who/when/what table)

## Engineering requirements

- Clear folder structure, clean component boundaries
- Server actions or API routes for admin CRUD (protected)
- Supabase RLS:
    - Public read on published content only
    - Admin can read/write all
    - Partner/speaker can read/write only their profile tables
- Environment variables:
    - Appwrite endpoint/project id
    - Supabase url/anon key/service role key (service key server-only)
    - Notion integration token + ids (server-only)
- Seed script for initial content (TBA-ready)
- Accessibility basics + fast performance

## Deliverables from you (Claude/Cursor)

1. Project scaffold with the routes above
2. Supabase migrations (SQL) + RLS policies
3. Appwrite auth setup code + RBAC enforcement
4. Admin dashboard CRUD UI (minimal but complete)
5. Public pages with editable sections wired to Supabase
6. Forms wired to Supabase tables + validation
7. Notion sync module (read-only + cache) + admin “sync now”
8. README with setup steps and env var list

## Output format

- Generate code and file structure only (no extra explanations beyond README).
- Keep placeholder copy “upcoming / to be announced”.
- Use `design.md` as the single source of truth for styling decisions.