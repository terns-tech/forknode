#!/usr/bin/env node
/**
 * One-time Discord setup for Terns HackPune 2026.
 * Requires: DISCORD_TOKEN env var and bot invited to your server (admin).
 *
 * Usage: DISCORD_TOKEN=... node scripts/discord-setup.mjs
 */

const TOKEN = process.env.DISCORD_TOKEN;
if (!TOKEN) {
  console.error("Set DISCORD_TOKEN");
  process.exit(1);
}

const API = "https://discord.com/api/v10";
const CHANNEL_NAME = "terns-hackpune26";
const BOT_INVITE =
  "https://discord.com/oauth2/authorize?client_id=1518345703930462338&permissions=8&scope=bot%20applications.commands";

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

async function findOrCreateChannel(guildId) {
  const channels = await api(`/guilds/${guildId}/channels`);
  const existing = channels.find(
    (c) => c.type === 0 && c.name === CHANNEL_NAME
  );
  if (existing) return existing;

  return api(`/guilds/${guildId}/channels`, {
    method: "POST",
    body: JSON.stringify({
      name: CHANNEL_NAME,
      type: 0,
      topic:
        "Terns (hackpune26) — HackPune 2026 community, announcements, partners & volunteers",
    }),
  });
}

async function createInvite(channelId) {
  const invite = await api(`/channels/${channelId}/invites`, {
    method: "POST",
    body: JSON.stringify({
      max_age: 0,
      max_uses: 0,
      unique: true,
    }),
  });
  return `https://discord.gg/${invite.code}`;
}

async function sendMessage(channelId, content) {
  return api(`/channels/${channelId}/messages`, {
    method: "POST",
    body: JSON.stringify({ content }),
  });
}

async function pinMessage(channelId, messageId) {
  await api(`/channels/${channelId}/pins/${messageId}`, { method: "PUT" });
}

const MESSAGES = [
  `👋 **Welcome to Terns (hackpune26) on Discord**

We're moving community chat here from Slack due to technical issues on our Slack workspace. This channel replaces our previous Slack channels — all HackPune 2026 updates land here.

**Save the date:** 3–4 October 2026 (Sat & Sun) · Pune, India · 24h AI hackathon
**Website:** https://terns.tech/hackpune
**Contact:** hello@terns.tech

**Stay in the loop**
• Latest news → https://terns.tech/updates
• Event details → https://terns.tech/hackpune
• Apply (opening soon) → https://terns.tech/hackpune/apply
• Partner with us → https://terns.tech/hackpune/partners

Born in Hamburg. First reach: Pune. Built for builders who cross borders. Drop a 👋 and tell us what you're building!`,

  `📌 **HackPune 2026 — Main Event Hub**

**Save the date:** 3–4 October 2026 (Sat & Sun) · Pune, India

**What this channel is for**
• Event announcements and updates
• Participant Q&A (once applications open)
• Challenge partner reveals
• Schedule changes

**Role-specific channels**
• Partners → #hackpune-2026-partners
• Volunteers → #hackpune-2026-volunteers

**Key links**
• Wiki (Notion): https://www.notion.so/37171235c64681dba4a6ca6625e70556
• Participant timetable: https://www.notion.so/37171235c64681b99ae3ffc17cf8e7f1
• Media Kit: https://www.notion.so/37171235c646815686f6f857a5e27a8c
• Master plan: https://www.notion.so/36771235c6468006a6c1c6788157afce

**Provisional schedule (not final)**
*Day 1 (Sat 3 Oct):* Check-in 08:30 · Welcome 09:00 · Challenge pitches 10:00 · Hack from 12:00 · Speed dating 14:00 · Women in AI 16:00 · Code freeze 22:00
*Day 2 (Sun 4 Oct):* Pitches 10:30 · Awards 13:00 · End 13:30

> Times may shift as venue is finalised. Inspired by ChefTreff AI Hackathon 2026 format.`,

  `🚀 **Team update from Omkar**

Hey everyone 👋

First of all — thank you. Genuinely. Every single one of you joining this project means a lot.

Quick update on where we're at:

We were arranging a full group call but it isn't possible to coordinate right now given everyone's schedules and timezones, so instead we're running focused domain-specific meetings this week and next:

📌 Funding & Finance
📌 Venue & On-Ground Ops (Pune)
📌 Government & Private Org Collaborations
📌 Community & Partnerships

If your name is in one of those areas, expect a direct ping from me or Elias shortly.

On the partnerships front — we've reached out to both GINSEP and ChefTreff for potential collaborations. Really excited about where those conversations could go. Full updates here as we hear back.

— Omkar & the Terns Core Team`,
];

async function main() {
  const guilds = await api("/users/@me/guilds");
  if (!guilds.length) {
    console.error(
      `\nBot is not in any Discord server yet.\n\n1. Create a server named "Terns (hackpune26)" (or use an existing one)\n2. Add the bot: ${BOT_INVITE}\n3. Re-run: DISCORD_TOKEN=... node scripts/discord-setup.mjs\n`
    );
    process.exit(1);
  }

  const guild = guilds[0];
  console.log(`Using guild: ${guild.name} (${guild.id})`);

  const channel = await findOrCreateChannel(guild.id);
  console.log(`Channel: #${channel.name} (${channel.id})`);

  const inviteUrl = await createInvite(channel.id);
  console.log(`Invite link: ${inviteUrl}`);

  const pinned = await sendMessage(channel.id, MESSAGES[0]);
  await pinMessage(channel.id, pinned.id);
  console.log("Pinned welcome message");

  for (let i = 1; i < MESSAGES.length; i++) {
    await sendMessage(channel.id, MESSAGES[i]);
    console.log(`Posted message ${i + 1}/${MESSAGES.length}`);
  }

  console.log("\nDone! Update NEXT_PUBLIC_DISCORD_URL in .env.local:");
  console.log(`NEXT_PUBLIC_DISCORD_URL=${inviteUrl}`);
  console.log("\nRun partner/volunteer channels: node scripts/discord-channels.mjs");
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
