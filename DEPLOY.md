# Deploy Terns — Vercel + Appwrite

## Architecture

```
Browser → Vercel (Next.js 15)
              ├── Appwrite Auth (login / admin)
              └── Appwrite Databases (applications via /api/applications)
```

No Supabase. All backend config is in [docs/APPWRITE_SETUP.md](./docs/APPWRITE_SETUP.md).

---

## Step 1 — Appwrite

Complete **APPWRITE_SETUP.md** (project, auth platforms, API key, `terns` database, `applications` collection, admin user).

---

## Step 2 — Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New** → **Project**.
2. Import GitHub repo `terns-tech/forknode`.
3. Framework: **Next.js** (auto).
4. **Environment Variables** — add every key from `.env.example`:
   - Mark `APPWRITE_API_KEY` as sensitive; do **not** prefix with `NEXT_PUBLIC_`.
5. **Deploy**.

First deploy URL: `https://forknode-xxx.vercel.app`.

---

## Step 3 — Connect Appwrite to Vercel URL

In Appwrite → **Auth** → **Platforms** → add your Vercel URL (and custom domain when ready).

Redeploy is not required for platform changes.

---

## Step 4 — Custom domain (optional)

1. Vercel → **Settings** → **Domains** → add `terns.tech` (+ `www`).
2. Update DNS per Vercel instructions (CNAME).
3. Add `https://terns.tech` to Appwrite Web platforms.

---

## Local development

```bash
npm install
cp .env.example .env.local
# edit .env.local
npm run dev
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Login “platform not allowed” | Add exact URL to Appwrite Web platforms |
| Apply form 500 | Check `APPWRITE_API_KEY`, database/collection IDs, collection attributes |
| Admin redirects to login | Create Appwrite user; sign in at `/login` |
| Env missing on Vercel | Redeploy after adding variables |

---

## Commands

```bash
npm run build   # production build (same as Vercel)
npm run start   # run production build locally
npm run lint
```
