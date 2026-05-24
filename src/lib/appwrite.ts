import { Client, Account, Teams } from "appwrite";
import { appwriteConfig, assertAppwriteClientConfig } from "@/lib/appwrite-config";

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const teams = new Teams(client);
export { client };

export type UserRole = "admin" | "partner" | "speaker";

export async function getCurrentUser() {
  try {
    assertAppwriteClientConfig();
    return await account.get();
  } catch {
    return null;
  }
}

export async function signIn(email: string, password: string) {
  assertAppwriteClientConfig();
  return account.createEmailPasswordSession(email, password);
}

export async function signOut() {
  return account.deleteSession("current");
}
