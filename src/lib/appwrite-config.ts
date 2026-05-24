/** Shared Appwrite IDs — set in Vercel / .env.local (see docs/APPWRITE_SETUP.md) */

export const appwriteConfig = {
  endpoint:
    process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? "https://cloud.appwrite.io/v1",
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? "",
  databaseId: process.env.APPWRITE_DATABASE_ID ?? "terns",
  applicationsCollectionId:
    process.env.APPWRITE_APPLICATIONS_COLLECTION_ID ?? "applications",
} as const;

export function assertAppwriteClientConfig() {
  if (!appwriteConfig.projectId) {
    throw new Error("Missing NEXT_PUBLIC_APPWRITE_PROJECT_ID");
  }
}

export function assertAppwriteServerConfig() {
  assertAppwriteClientConfig();
  if (!process.env.APPWRITE_API_KEY) {
    throw new Error("Missing APPWRITE_API_KEY (server-only)");
  }
}
