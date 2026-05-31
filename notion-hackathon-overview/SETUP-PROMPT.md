# Terns HackPune 2026 — Setup Prompt

Use this prompt to create and maintain the **Terns HackPune 2026** operational setup on **Notion** and **Slack**, inspired 1:1 by the **ChefTreff AI Hackathon 2026** wiki. Then sync the public website at **terns.tech**.

---

## Goal

Build a complete HackPune 2026 ops hub under **Terns** that mirrors every section of the ChefTreff **AI Hackathon 2026: Wiki** — same structure, same level of detail, adapted for Pune/India and Terns branding. Domain is **terns.tech** (not terns.io).

**Reference (ChefTreff):** [AI Hackathon 2026: Wiki](https://www.notion.so/4a771235c64682cba0c88150b228e254)

**Target (Terns):** [HackPune 2026: Wiki](https://www.notion.so/37171235c64681dba4a6ca6625e70556)

---

## Event facts (from terns.tech)

| Field | Value |
|-------|-------|
| **Event** | HackPune 2026 — Terns flagship |
| **Dates** | **3 & 4 October 2026** (Saturday & Sunday) |
| **Location** | Pune, India (venue TBA — CDAC Pune preferred) |
| **Format** | 24-hour AI hackathon |
| **Participants** | ~100 curated builders |
| **Challenges** | 8 (3 EU · 3 India · 2 flex) |
| **Language** | English (primary) |
| **Website** | terns.tech/hackpune |
| **Email** | hello@terns.tech |
| **Apply** | terns.tech/hackpune/apply (Devfolio — opening soon) |

---

## Phase 1 — Notion setup

Create separate pages under **Terns — HackPune 2026** matching ChefTreff wiki structure:

### Page tree

```
Terns — HackPune 2026 (master plan)
├── HackPune 2026: Wiki                    ← hub with TOC
│   ├── Zeitlicher Ablauf für Teilnehmende (HackPune 2026)
│   └── Terns HackPune 2026 – Media Kit    ← EN + DE sections
└── Cursor/Claude Prompt — Terns Website
```

### Wiki sections (mirror ChefTreff)

Each section must exist in **HackPune 2026: Wiki** with EN primary + DE summary where ChefTreff has German:

1. **Quick Overview / Kurzüberblick** — dates, location, participants, format, language, challenges
2. **Target Audience & Registration / Zielgruppe & Teilnahme** — 40/40/20 mix, deposit, Devfolio
3. **Challenge Deadlines / Deadlines Challenge** — partner briefs, slides, code freeze
4. **Timetable (Provisional) / Zeitplan** — Day 1 Sat 3 Oct + Day 2 Sun 4 Oct (mark as not final)
5. **Challenges 2026** — definition, checklist, guidelines, partner list (TBA placeholders)
6. **Prizes 2026 / Preise** — min INR 50k per challenge, in-kind options
7. **Challenge Area Back-wall / Rückwand** — 800×2000 mm specs
8. **Mentors & Jury / Mentor:innen & Jury** — 1+1 per partner, hours, scoring format
9. **Speed Dating** — Day 1 14:00, 3-min rotations, Calendly to hello@terns.tech
10. **Keynote & Speakers** — 30-min opening keynote, optional mid-hack workshop
11. **Women in AI / Inklusion** — Day 1 16:00 coffee, 30% target, deposit waiver
12. **Pitches & Presentations** — 4 min + 3 min Q&A, max 4 slides, code freeze submission
13. **Location & Logistics / Location & Logistik** — venue TBA, catering table, sleeping zone
14. **Media Kit** — link to sub-page
15. **Slack Channels** — list all channels
16. **Open Items / Offene Punkte**

### Media Kit sub-page

Mirror **ChefTreff Media Kit - 2026** section-by-section, bilingual:

- General description (EN + DE)
- WhatsApp / Slack templates (EN + DE)
- Email & newsletter templates (EN + DE)
- LinkedIn posts: challenge partner, sponsor, meet us (EN + DE)
- Post-event winner announcement
- Asset list (logo, banners, QR code — TBA until design ready)
- Brand links: terns.tech, hello@terns.tech

### Participant timetable sub-page

Mirror **Zeitlicher Ablauf für Teilnehmende (AI Hackathon 2026)** with HackPune dates and all slots including speed dating + Women in AI.

---

## Phase 2 — Slack setup

Workspace: **terns-hackpune26.slack.com**

Create channels and pin setup messages:

| Channel | Purpose |
|---------|---------|
| `#hackpune-2026` | Public announcements, schedule, Q&A |
| `#hackpune-2026-core` | Private — core team ops |
| `#hackpune-2026-partners` | Challenge partners & sponsors |
| `#hackpune-2026-volunteers` | Volunteer shifts & briefing |
| `#terns-community` | Global Terns builder community |

Each channel message must include:
- Save the date: 3–4 Oct 2026
- Links to Notion wiki, timetable, media kit
- Role-specific info (partner deliverables, volunteer shifts, etc.)
- Note: schedule is **provisional**

---

## Phase 3 — Website sync (terns.tech)

After Notion + Slack are live, update the codebase:

### `/hackpune` page
- Save the date: **3 & 4 October 2026 (Sat & Sun)**
- Stats: 24h · 100 curated builders · 8 challenges · 3–4 Oct 2026
- **Provisional 2-day schedule** (6 blocks) matching wiki timetable
- **Program highlights** section: keynote, speed dating, Women in AI, mentors & jury
- FAQ: dates, judging, Women in AI

### `/hackpune/speakers`
- Keynote, mentors, judges, workshop roles (TBA badges)

### Translations
- EN + DE for schedule, program, speakers, FAQ
- All URLs/emails: **terns.tech**, hello@terns.tech

### Rules
- Mark all schedule times as **provisional / not fixed**
- Do not hardcode confirmed partners until announced
- Keep "in conversation" language for Cursor, OpenAI, etc.

---

## ChefTreff → Terns mapping

| ChefTreff AI Hackathon 2026 | Terns HackPune 2026 |
|----------------------------|----------------------|
| 9–10 April 2026, Hamburg | 3–4 October 2026, Pune |
| Factory Hammerbrooklyn | Venue TBA (CDAC Pune) |
| ~300–350 participants | ~100 curated |
| 8 challenges, ~6 teams each | 8 challenges, ~6 teams each |
| luma.com/cheftreff-ai-hackathon | terns.tech/hackpune/apply |
| konrad@ / emilio@chef-treff.de | hello@terns.tech |
| ITGirls coffee 16:00 Day 1 | Women in AI coffee 16:00 Day 1 |
| Speed dating 14:00 Day 1 | Speed dating 14:00 Day 1 |
| 3–4 min pitch, ~4 slides | 4 min + 3 min Q&A, max 4 slides |
| Mentor 9 Apr 9:00–19:00; 10 Apr 7:30–13:00 | Mentor Day 1 09:00–22:00; Day 2 07:30–13:30 |

---

## Verification checklist

- [ ] All Notion pages created and cross-linked
- [ ] terns.io → terns.tech everywhere in Notion
- [ ] Media Kit has EN + DE for every template section
- [ ] Slack channels created with pinned setup messages
- [ ] Website schedule matches Notion timetable (provisional disclaimer)
- [ ] Speakers page covers keynote, mentors, judges
- [ ] FAQ covers dates, judging, Women in AI
- [ ] README index updated with new page URLs

---

*Last updated: 2026-05-31. Source: ChefTreff AI Hackathon 2026 wiki + terns.tech.*
