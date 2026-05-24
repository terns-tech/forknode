import { Client, Account, Teams } from "appwrite";

const client = new Client();

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "");

export const account = new Account(client);
export const teams = new Teams(client);
export { client };

export type UserRole = "admin" | "partner" | "speaker";

export async function getCurrentUser() {
  try {
    return await account.get();
  } catch {
    return null;
  }
}

export async function signIn(email: string, password: string) {
  return account.createEmailPasswordSession(email, password);
}

export async function signOut() {
  return account.deleteSession("current");
}
