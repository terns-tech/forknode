# Terns — Global Hackathon Ecosystem

**terns.tech** · Where the world's builders take flight.

---

## About

Terns is a global hackathon ecosystem built for founders, hackers, creators, and students. Named after the Arctic Tern — the bird that migrates 70,000 km every year, crossing entire oceans, navigating by the stars — Terns is built on that same instinct: that builders, wherever they are in the world, can cross borders, find their people, and build something that matters.

**Flagship Event:** HackPune 2026 — a 24-hour AI hackathon in Pune, India.

**Founded by:**
- **Omkar Kondhalkar** (CEO) — AI Engineer, Hamburg & Pune
- **Yash Pawar** (COO) — HPC Engineer, C-DAC PARAM Supercomputer
- **Elias Tilmes** (CFO) — Serial Entrepreneur, Hamburg

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion v12 |
| Database | Supabase (PostgreSQL) |
| Backend (alt) | Appwrite |
| Language | TypeScript |
| Font | Sofia Sans (Google Fonts) |
| i18n | EN + DE (custom context) |

---

## Design System

The visual identity is derived from a Mastercard-inspired editorial design language:

- **Canvas Cream** `#F3F0EE` — warm putty body background (never pure white)
- **Ink Black** `#141413` — primary CTAs, headlines, footer
- **Signal Orange** `#CF4500` — accent dot on eyebrow labels, brand highlight
- **Light Signal Orange** `#F37338` — orbital decorative arcs
- **Sofia Sans** — all typography, weight 450/500/700
- **Pill shapes** — 999px radius for navigation and containers
- **40px radius** — hero media frames
- **Circular portraits** — for founder/team imagery

---

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# → Fill in your Supabase keys and other config

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, SEO metadata
│   ├── page.tsx            # Home page (cinematic landing)
│   ├── about/page.tsx      # Founders + mission
│   ├── hackpune/           # Flagship event pages
│   │   ├── page.tsx
│   │   ├── apply/page.tsx
│   │   ├── partners/page.tsx
│   │   ├── speakers/page.tsx
│   │   └── faq/page.tsx
│   ├── updates/page.tsx    # News & updates
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── globals.css         # Design tokens, animations
├── components/
│   ├── Nav.tsx             # Floating pill navigation
│   ├── Footer.tsx          # Ink black footer
│   └── ui/
│       ├── Button.tsx
│       └── Badge.tsx
├── contexts/
│   └── LanguageContext.tsx # EN/DE i18n provider
└── lib/
    ├── translations.ts     # All copy in EN + DE
    ├── appwrite.ts
    ├── supabase.ts
    └── utils.ts

public/
├── wallpaper.jpg           # Hero cinematic image
├── pune1.jpg               # Event/team photos
├── pune2.jpg
├── pune3.jpg
├── omkar_profile.jpg       # Founder portraits
├── yash_profile.jpeg
├── elias_profile.jpeg
└── robots.txt
```

---

## Brand Emails

| Purpose | Email |
|---------|-------|
| General | hello@terns.tech |
| Support | support@terns.tech |
| Founders direct | founders@terns.tech |
| Partnerships | partnerships@terns.tech |
| Events | events@terns.tech |

---

## Deployment

This project is optimized for **Vercel** deployment:

```bash
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

**Environment variables** required in production:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_DISCORD_URL`
- `NEXT_PUBLIC_SLACK_URL`

---

## Why "Terns"?

Arctic Terns travel 70,000 km each year — the longest migration of any living creature. They cross entire oceans, navigate by the stars, and always find their way. But wherever they land, they build a community.

We are builders who cross borders. And we built this platform for everyone like us.

---

## License

Private. © 2026 Terns. All rights reserved.

**Contact:** hello@terns.tech · [terns.tech](https://terns.tech)
