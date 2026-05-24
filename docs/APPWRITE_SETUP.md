# Appwrite setup (Terns)

Backend for **auth** (`/login`, `/admin`) and **hackathon applications** (`/hackpune/apply`).

## 1. Create project

1. [Appwrite Cloud](https://cloud.appwrite.io) → **Create project** (e.g. `Terns`).
2. Copy **Project ID** → `NEXT_PUBLIC_APPWRITE_PROJECT_ID`.
3. Endpoint is usually `https://cloud.appwrite.io/v1` → `NEXT_PUBLIC_APPWRITE_ENDPOINT`.

## 2. Auth

1. **Auth** → **Settings** → enable **Email/Password**.
2. **Auth** → **Users** → create an admin user (or sign up once `/login` is deployed).
3. **Auth** → **Platforms** → **Add platform** → **Web**:
   - `http://localhost:3000`
   - `https://your-project.vercel.app`
   - `https://terns.tech` (production)

Without every hostname you use, login will fail with a platform error.

## 3. API key (server)

1. **Overview** → **API keys** → **Create API key**.
2. Name: `terns-vercel-server`.
3. Scopes: **Databases** → read + write (minimum for applications).
4. Copy the key once → `APPWRITE_API_KEY` (Vercel: **never** expose as `NEXT_PUBLIC_`).

## 4. Database & collection

1. **Databases** → **Create database**  
   - Database ID: `terns` → `APPWRITE_DATABASE_ID`
2. Inside `terns`, **Create collection**  
   - Collection ID: `applications` → `APPWRITE_APPLICATIONS_COLLECTION_ID`

### Collection attributes (`applications`)

| Attribute   | Type   | Size | Required |
|------------|--------|------|----------|
| `event_slug` | String | 64   | Yes      |
| `type`       | String | 32   | Yes      |
| `email`      | String | 320  | Yes      |
| `full_name`  | String | 256  | Yes      |
| `status`     | String | 32   | Yes      |
| `data`       | String | 8192 | No       |

**Indexes (recommended):** `type`, `status`, `email`.

### Permissions (`applications`)

For server-side writes via API key only:

- **Create / Read / Update / Delete:** leave empty for `Any` and `Users` (the API key bypasses collection permissions when using server SDK).

If create fails with 401/403, grant **Role: Any** → **Create** temporarily, or confirm the API key has `databases.write`.

## 5. Verify locally

```bash
cp .env.example .env.local
# fill Appwrite vars
npm install
npm run dev
```

Submit a test application at `/hackpune/apply` → check **Databases** → `terns` → `applications` for a new document.

## 6. Vercel env vars

Set in **Production** (and **Preview** if needed):

| Variable | Public? |
|----------|---------|
| `NEXT_PUBLIC_APPWRITE_ENDPOINT` | Yes |
| `NEXT_PUBLIC_APPWRITE_PROJECT_ID` | Yes |
| `APPWRITE_API_KEY` | **No** |
| `APPWRITE_DATABASE_ID` | No |
| `APPWRITE_APPLICATIONS_COLLECTION_ID` | No |
| `NEXT_PUBLIC_DISCORD_URL` | Yes (optional) |

Redeploy after changing env vars.
