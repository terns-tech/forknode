#!/usr/bin/env node
/**
 * Create role-specific Discord channels (partners, volunteers) with pinned guidance.
 * Usage: DISCORD_TOKEN=... node scripts/discord-channels.mjs
 */

const TOKEN = process.env.DISCORD_TOKEN;
if (!TOKEN) {
  console.error("Set DISCORD_TOKEN");
  process.exit(1);
}

const API = "https://discord.com/api/v10";

async function api(path, options = {}) {
  const res = await fetch(`${API}${path}`, {
    ...options,
    headers: {
      Authorization: `Bot ${TOKEN}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) {
    throw new Error(`${options.method || "GET"} ${path} → ${res.status}: ${JSON.stringify(data)}`);
  }
  return data;
}

async function findOrCreateChannel(guildId, name, topic) {
  const channels = await api(`/guilds/${guildId}/channels`);
  const existing = channels.find((c) => c.type === 0 && c.name === name);
  if (existing) {
    console.log(`Found existing #${name}`);
    return existing;
  }
  const created = await api(`/guilds/${guildId}/channels`, {
    method: "POST",
    body: JSON.stringify({ name, type: 0, topic }),
  });
  console.log(`Created #${name}`);
  return created;
}

async function postAndPin(channelId, content) {
  const msg = await api(`/channels/${channelId}/messages`, {
    method: "POST",
    body: JSON.stringify({ content }),
  });
  await api(`/channels/${channelId}/pins/${msg.id}`, { method: "PUT" });
  return msg;
}

// Guidance copied from Slack #hackpune-2026-partners and #hackpune-2026-volunteers
const CHANNELS = [
  {
    name: "hackpune-2026-partners",
    topic: "HackPune 2026 — challenge partners & sponsors",
    message: `🤝 **HackPune 2026 — Partners Channel**

Welcome challenge partners and sponsors.

**Event:** 3–4 October 2026 · Pune, India · 24h AI hackathon
**Website:** https://terns.tech/hackpune

**What each challenge partner provides**
• Real challenge statement + dataset/API
• Prize (min INR 50,000 or EUR 1,000)
• 1 mentor on-site (full 24h)
• 1 judge for Day 2 pitches

**What you receive**
• Working prototype from winning team
• Recruiting access to 100 vetted builders
• 5-min stage pitch + brand visibility
• Speed dating session with participants (Day 1, 14:00)

**Resources**
• Wiki: https://www.notion.so/37171235c64681dba4a6ca6625e70556
• Media Kit (copy + templates EN/DE): https://www.notion.so/37171235c646815686f6f857a5e27a8c
• Contact: hello@terns.tech

**Deadlines (TBA)**
• Challenge brief: 2 weeks before event
• Pitch slides: TBA
• Mentor/judge names: confirm with core team`,
  },
  {
    name: "hackpune-2026-volunteers",
    topic: "HackPune 2026 — volunteer coordination & shifts",
    message: `🙋 **HackPune 2026 — Volunteers**

**Event:** 3–4 October 2026 · Pune · 24h AI hackathon by Terns

**Roles needed (15 volunteers)**
• 3 registration desk
• 4 food & facilities
• 3 IT / WiFi support
• 3 floor monitors
• 2 photo / video

**Key moments to staff**
Check the wiki for the full provisional timetable — registration, meals, pitch block, and awards all need coverage.

**Wiki:** https://www.notion.so/37171235c64681dba4a6ca6625e70556
**Contact:** hello@terns.tech`,
  },
];

async function main() {
  const guilds = await api("/users/@me/guilds");
  if (!guilds.length) {
    console.error("Bot is not in any Discord server.");
    process.exit(1);
  }

  const guild = guilds[0];
  console.log(`Guild: ${guild.name} (${guild.id})\n`);

  for (const ch of CHANNELS) {
    const channel = await findOrCreateChannel(guild.id, ch.name, ch.topic);
    await postAndPin(channel.id, ch.message);
    console.log(`Pinned guidance in #${ch.name}\n`);
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
