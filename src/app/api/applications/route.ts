import { NextResponse } from "next/server";
import {
  createApplication,
  type ApplicationType,
} from "@/lib/appwrite-server";

const VALID_TYPES: ApplicationType[] = [
  "participant",
  "volunteer",
  "speaker",
  "sponsor",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const type = body?.type as ApplicationType;
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const fullName =
      typeof body?.fullName === "string" ? body.fullName.trim() : "";
    const data =
      body?.data && typeof body.data === "object" ? body.data : {};

    if (!VALID_TYPES.includes(type)) {
      return NextResponse.json({ error: "Invalid application type" }, { status: 400 });
    }
    if (!email || !fullName) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    await createApplication({
      type,
      email,
      fullName,
      eventSlug:
        typeof body?.eventSlug === "string" ? body.eventSlug : "hackpune",
      data: data as Record<string, unknown>,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[applications]", err);
    const message =
      err instanceof Error ? err.message : "Failed to save application";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
