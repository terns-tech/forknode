import { Client, Databases, ID } from "node-appwrite";
import {
  appwriteConfig,
  assertAppwriteServerConfig,
} from "@/lib/appwrite-config";

export type ApplicationType =
  | "participant"
  | "volunteer"
  | "speaker"
  | "sponsor";

export type ApplicationStatus = "new" | "reviewing" | "accepted" | "rejected";

function createServerClient() {
  assertAppwriteServerConfig();
  return new Client()
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId)
    .setKey(process.env.APPWRITE_API_KEY!);
}

export function getServerDatabases() {
  return new Databases(createServerClient());
}

export async function createApplication(input: {
  type: ApplicationType;
  email: string;
  fullName: string;
  eventSlug?: string;
  data: Record<string, unknown>;
}) {
  const databases = getServerDatabases();
  return databases.createDocument(
    appwriteConfig.databaseId,
    appwriteConfig.applicationsCollectionId,
    ID.unique(),
    {
      event_slug: input.eventSlug ?? "hackpune",
      type: input.type,
      email: input.email,
      full_name: input.fullName,
      status: "new",
      data: JSON.stringify(input.data),
    }
  );
}
