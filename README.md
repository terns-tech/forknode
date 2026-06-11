# Terns — Global Hackathon Ecosystem

**terns.tech** · Where the world's builders take flight.

---

## About

Terns is a global hackathon ecosystem built for founders, hackers, creators, and students.

**Flagship Event:** HackPune 2026 — a 24-hour AI hackathon in Pune, India.

### Navigation note

The site includes **About** (`/about`) and **Partners** (`/hackpune/partners`) pages, but they are **not linked in the main header** yet. They remain reachable via direct URLs and footer links.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Hosting | [Vercel](https://vercel.com) |
| Framework | Next.js 15 (App Router) |
| Backend | [Appwrite](https://appwrite.io) (auth + database) |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion v12 |
| Language | TypeScript |
| i18n | EN + DE |

---

## Getting Started

```bash
npm install
cp .env.example .env.local
```

Configure Appwrite: **[docs/APPWRITE_SETUP.md](./docs/APPWRITE_SETUP.md)**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deployment

**[DEPLOY.md](./DEPLOY.md)** — Vercel + Appwrite step-by-step.

---

## Project Structure

```
src/
├── app/
│   ├── api/applications/   # POST applications → Appwrite
│   ├── hackpune/apply/     # Application forms
│   ├── login/              # Appwrite auth
│   └── admin/              # Admin dashboard
├── components/
└── lib/
    ├── appwrite.ts         # Client auth
    ├── appwrite-server.ts  # Server database (API routes)
    └── appwrite-config.ts
docs/
└── APPWRITE_SETUP.md
```

---

## Environment variables

See [.env.example](./.env.example). Required for production:

- `NEXT_PUBLIC_APPWRITE_PROJECT_ID`
- `NEXT_PUBLIC_APPWRITE_ENDPOINT`
- `APPWRITE_API_KEY`
- `APPWRITE_DATABASE_ID` (default: `terns`)
- `APPWRITE_APPLICATIONS_COLLECTION_ID` (default: `applications`)

---

## License

Private. © 2026 Terns. All rights reserved.

**Contact:** hello@terns.tech · [terns.tech](https://terns.tech)
