#!/usr/bin/env python3
"""Generate expanded EN/DE TXT companion files for HackPune pitch decks."""

from pathlib import Path

OUT = Path(__file__).parent
LANGUAGES = ("en", "de")

REFERENCES = """
REFERENCES (verified through May/June 2026)
────────────────────────────────────────────
[1]  Bitkom — IT-Fachkräfte Studie 2025
     https://www.bitkom.org/sites/main/files/2026-01/bitkom-studienbericht-it-fachkraefte-2025.pdf
     109,000 unfilled IT roles · 85% report shortage · 79% expect worsening · 7.7 months avg. fill time

[2]  APRIORI HR:LAB Q1 2026
     https://www.apriori.de/app/uploads/2026/03/APRIORI_HRLAB_Arbeitsmarkt_2026.pdf

[3]  PM India — India-Germany Joint Statement (Jan 2026)
     https://www.pmindia.gov.in/en/news_updates/india-germany-joint-statement/
     Bilateral trade > USD 50 billion · Innovation & Technology Partnership Roadmap

[4]  PM India — 7th Indo-German IGC (Oct 2024)
     https://www.pmindia.gov.in/en/news_updates/joint-statement-7th-india-germany-inter-governmental-consultations-igc/

[5]  DWIH — Indo-German InnoXchange Programme (2026)
     https://www.dwih-newdelhi.org/en/2026/03/28/indo-german-innoxchange-programme/
     DST + DAAD + DWIH · first delegation June 2026

[6]  GINSEP — German Indian Startup Exchange Program
     https://www.ginsep.co/
     1,500+ startups · 70+ market entries · BMWK-backed (POTENTIAL partner)

[7]  IGCC / AHK India
     https://igtcindia.com/about-igcc/
     4,500–6,000 members · Pune office (POTENTIAL partner)

[8]  Inc42 — Pune emerging startup hub (May 2025)
     https://inc42.com/features/from-hyderabad-to-pune-which-city-holds-indias-startup-hub-baton/
     $5.1B / 421 deals since 2014

[9]  Zinnov / IMP.NEWS — Pune GCC surge
     https://imp.news/industry/punes-surge-in-gccs-talent-specialization-and-real-estate-wins-62034/
     360+ GCCs · ~90,000 graduates/year

[10] NITI Aayog — AI Economy Job Creation Roadmap (2025)
     https://niti.gov.in/sites/default/files/2025-10/Roadmap_for_Job_Creation_in_the_AI_Economy.pdf
     AI demand 800k–850k → 1.25M+ by 2026–27

[11] NASSCOM + Indeed — India's AI Talent Inflection Point
     https://community.nasscom.in/communities/nasscom-insights/indias-ai-talent-inflection-point-skill-gaps-competitive-advantage
     40% prefer demonstrable AI skills over degrees

[12] STEM Pipeline India (UDISE+ / AISHE)
     https://educationforallinindia.com/wp-content/uploads/2026/03/The-STEM-Pipeline-in-India-From-Science-Classrooms-to-STEM-Degrees-UDISEPlus-2024-25-AISHE-2021-22.pdf
     ~2.55 million STEM graduates/year

[13] ChefTreff AI Hackathon 2026 (reference format)
     https://chef-treff.de/en/hackathon/
     300–350 builders · 9 real challenges · 24h · Hamburg

[14] terns.tech
     https://terns.tech
     HackPune 2026 · 3–4 October · Pune

[15] Internal: docs/info.md, docs/pre1.pdf, docs/Ceo.pdf, Notion HackPune Wiki
"""

MASTER = {
    "en": """
MASTER NARRATIVE — HACKPUNE 2026
════════════════════════════════

ONE-LINER
─────────
Terns connects German startups and companies with 160 curated Indian hackers
through a 24-hour AI hackathon in Pune — real problems, real prototypes,
real recruiting signals.

WHY WE ARE DOING THIS (expanded)
────────────────────────────────
Germany faces a structural IT and AI talent gap that cannot be closed quickly
through domestic hiring alone. At the same time, India produces millions of STEM
graduates — but employers increasingly demand applied, demonstrable AI skills,
not theory alone. The gap is not volume. It is access, signal, and trust.

HackPune exists to give German companies a low-risk, high-signal way to:
  • Test a real internal AI problem with Indian builders in 24 hours
  • Observe talent under pressure before any hiring commitment
  • Build an Indo-German employer brand story in Pune's top tech ecosystem
  • Validate India expansion interest before consulting or full hiring spend

This is NOT logistics-first event planning. Per docs/info.md, the biggest risk is
investing months of effort and discovering German companies do not want to
participate. HackPune validates demand first.

EVENT FACTS (current plan)
──────────────────────────
Date:           3–4 October 2026 (Saturday–Sunday)
Location:       Pune, India (venue TBA)
Participants:   160 Indian hackers total (accept ~180, seat 160)
Profile mix:    40% students · 40% professional workers · 20% anyone
Nationality:    All participants Indian residents
Challenges:     8 — ALL from German startups and companies
Format:         24-hour AI hackathon · English · free food + workspace
Prizes:         NOT FIXED YET — to be decided with each challenge partner
Partnerships:   NONE CONFIRMED YET — all institutional names are outreach targets

PARTICIPANT MIX (detail)
────────────────────────
40% Students
  Target colleges: COEP, VIT Pune, PICT, SPPU, IIT Bombay, BITS Pilani Goa
  Selection: GitHub/portfolio + challenge-fit statement + AI interest

40% Professional workers
  AI/ML engineers, full-stack developers, data scientists, product managers
  Working in Pune, Bengaluru, Mumbai or remote-for-India roles

20% Anyone (open category)
  Founders, designers, strategists, indie builders, career-switchers
  No single profile required — must demonstrate builder mindset and AI interest

Curated applications only. Refundable registration deposit (amount TBD in EUR equivalent).
Target 30% women participants. Women in AI session on Day 1.

GERMAN CHALLENGE MODEL (all 8 slots)
────────────────────────────────────
Every challenge is owned by a German startup or company. No Indian company challenges.
Each German challenge partner provides:
  • One real internal problem statement
  • Dataset, API, or sandbox environment
  • One mentor for 24 hours (on-site or remote)
  • One judge for final pitches
  • Prize for winning team — AMOUNT TBD per partner

Each German challenge partner receives:
  • Multiple working prototypes (typically 4+ teams per challenge track)
  • Direct access to 160 vetted Indian builders
  • Speed-dating recruiting conversations (Day 1, 14:00)
  • 5-minute stage pitch slot at opening
  • Optional 30-minute keynote (for partners attending in person)
  • Brand visibility across event materials and post-event recap

ECONOMICS (EUR only)
────────────────────
Challenge slot:         €3,500 – €5,500 per German company
Title sponsor:          €5,500 (1 slot)
Founder sponsor:        €100 – €500 (community tier)
Institutional partner:  €1,000 – €2,000 (potential ecosystem partners)
Tool/cloud sponsors:    In-kind (€30,000 – €50,000 combined toolkit value target)
Operating budget:       ~€12,000 – €15,000 (venue, food, AV, ops, contingency)
Prizes:                 TBD — decided individually with each challenge partner

Pitch to German companies:
"You are not sponsoring an event. You are buying 24 hours of focused AI engineering
on your exact problem from curated Indian builders — and you keep what they build."

POTENTIAL COLLABORATIONS (not confirmed)
──────────────────────────────────────────
Priority A outreach targets:
  • GINSEP (BMWK-backed Indo-German startup network)
  • AHK / IGCC India (Pune office — 4,500–6,000 member companies)
  • DWIH New Delhi + DAAD (InnoXchange programme alignment)
  • German Accelerator India alumni companies
  • EU-India Innocenter
  • India Week Hamburg (announcement platform)

Priority B outreach targets:
  • NASSCOM Pune chapter
  • SINE IIT Bombay
  • Fraunhofer India (advisor / intro channel — not a confirmed partner)
  • MCCIA Pune
  • GDG Cloud Pune, MLH (volunteers / recruitment)
  • Devfolio (applications platform)
  • Media: YourStory, Inc42, TheDialog

University venue options (not partners — venue exploration only):
  1. COEP Technological University, Pune
  2. Savitribai Phule Pune University — Dept. of Technology
  3. WeWork Pune (Kalyani Nagar / Kharadi — in-kind pitch)
  4. Innov8 Coworking Pune

Note: No institutional or company names should be presented as confirmed partners
until MoUs are signed. Use "potential collaboration" language in all external materials.

SUCCESS METRICS
───────────────
  • 8 German challenge partners confirmed by end of July 2026
  • 160 Indian participants seated
  • 8 working prototypes delivered
  • ≥3 qualified hire/intent signals per challenge partner
  • Event operating costs covered via challenge + sponsor revenue

TEAM (Terns)
────────────
  • Omkar Kondhalkar — Founder, AI/CV engineer, Hamburg; event vision & German outreach
  • Elias Tilmes — Finance & legal, Hamburg
  • Sebastian Steltzer — PMO & investor relations; AHK/GINSEP outreach
  • Luna Schreiner — Policy & government relations; BMWK grant channels
  • Yash Pawar — India operations lead, Pune (ground logistics)
  • Antje Ute Bauer — Pune community & Indo-German network
  • Florian Burka — Agentic AI advisor
  • Rasika Deshmukh — Operations & participant management
  • Magdalena Geissler — Workshop facilitation

Contact: hello@terns.tech · +49 176 43380383 · terns.tech/hackpune
""",
    "de": """
MASTER-NARRATIV — HACKPUNE 2026
═══════════════════════════════

ONE-LINER
─────────
Terns verbindet deutsche Startups und Unternehmen mit 160 kuratierten indischen
Hackern in einem 24-Stunden-AI-Hackathon in Pune — echte Probleme, echte
Prototypen, echte Recruiting-Signale.

WARUM WIR DAS TUN (ausfuehrlich)
────────────────────────────────
Deutschland hat eine strukturelle IT- und KI-Fachkraefteluecke. Indien produziert
Millionen STEM-Absolventen — aber Arbeitgeber verlangen zunehmend angewandte,
nachweisbare AI-Skills. Die Luecke ist nicht Volumen. Es sind Zugang, Signal und Vertrauen.

HackPune gibt deutschen Unternehmen einen risikoarmen, hochsignifikanten Weg:
  • Ein echtes internes AI-Problem in 24h mit indischen Buildern testen
  • Talent unter Druck erleben, bevor Hiring-Entscheidungen fallen
  • Indo-German Employer Brand in Punes Top-Tech-Oekosystem aufbauen
  • Indien-Interesse validieren, bevor Consulting- oder Voll-Hiring-Budgets fliessen

Das groesste Risiko ist nicht das Venue. Es ist, dass deutsche Unternehmen nach
Monaten Outreach nicht mitmachen wollen. HackPune validiert Nachfrage zuerst.

EVENT-FAKTEN (aktueller Plan)
─────────────────────────────
Datum:          3.–4. Oktober 2026
Ort:            Pune, Indien (Venue TBA)
Teilnehmende:   160 indische Hacker (ca. 180 angenommen, 160 Plaetze)
Mix:            40 % Studierende · 40 % Berufstaetige · 20 % alle
Nationalitaet:  Alle Teilnehmenden aus Indien
Challenges:     8 — ALLE von deutschen Startups und Unternehmen
Format:         24h AI-Hackathon · Englisch · kostenlos inkl. Verpflegung
Preise:         NOCH NICHT FESTGELEGT — mit jedem Partner individuell
Partnerschaften: NOCH KEINE BESTAETIGT — alle Namen sind Outreach-Ziele

DEUTSCHES CHALLENGE-MODELL (alle 8 Slots)
──────────────────────────────────────────
Jede Challenge gehoert einem deutschen Startup oder Unternehmen.
Jeder Partner liefert: Problem, Daten/API, Mentor, Judge, Preis (TBD).
Jeder Partner erhaelt: Prototypen, Recruiting-Zugang, Buehnenzeit, Sichtbarkeit.

OEKONOMIE (nur EUR)
───────────────────
Challenge Slot:     3.500 – 5.500 EUR
Title Sponsor:      5.500 EUR
Founder Sponsor:      100 – 500 EUR
Institutionell:       1.000 – 2.000 EUR
Betriebsbudget:       ca. 12.000 – 15.000 EUR
Preise:             TBD

POTENZIELLE KOOPERATIONEN (nicht bestaetigt)
────────────────────────────────────────────
GINSEP · AHK/IGCC · DWIH/DAAD · German Accelerator · EU-India Innocenter
NASSCOM · SINE · MCCIA · GDG Cloud Pune · Devfolio · YourStory · Inc42

Uni-Venue-Optionen: COEP · SPPU · WeWork · Innov8

ERFOLGSKENNZAHLEN
──────────────────
8 deutsche Challenge Partner bis Ende Juli 2026 · 160 Teilnehmende · 8 Prototypen

KONTAKT: hello@terns.tech · +49 176 43380383
""",
}

DECKS = {
    "company": {
        "en": {
            "title": "HackPune 2026 — German Company Pitch",
            "subtitle": "24 hours of focused AI engineering on your real problem — delivered by 160 Indian builders in Pune.",
            "audience": "German startups and companies: CTOs, VPs Engineering, innovation leads, founders, Mittelstand",
            "slides": [
                ("Title", "HackPune 2026 · 3–4 October 2026 · Pune, India · terns.tech/hackpune"),
                ("Why We Are Doing This",
                 "German companies need faster, lower-risk access to India's applied AI builder pool.\n"
                 "Indian builders need real company problems — not toy hackathon tasks.\n"
                 "HackPune brings 8 German challenge owners together with 160 curated Indian hackers for 24 hours.\n"
                 "We validate German company demand BEFORE scaling venue, media, and logistics."),
                ("Germany — The Structural Talent Gap",
                 "• 109,000 unfilled IT positions in Germany (Bitkom 2025, 855 companies surveyed)\n"
                 "• 85% report IT talent shortage; 79% expect it to worsen; only 4% expect relief\n"
                 "• Average 7.7 months to fill a specialized IT role (APRIORI HR:LAB Q1 2026)\n"
                 "• Top shortage roles: software developers, cybersecurity, AI/ML, cloud/DevOps\n"
                 "• 42% of German companies expect ADDITIONAL IT hiring demand because of AI\n"
                 "• 27% expect some job reduction from AI — but 42% expect net new IT demand\n"
                 "• Every 4th IT hire in Germany already goes to a career changer (Quereinsteiger)"),
                ("India / Pune — The Builder Opportunity",
                 "• ~2.55 million STEM graduates per year in India\n"
                 "• AI talent demand: 800k–850k today → 1.25M+ by 2026–27 (25% CAGR, NITI Aayog)\n"
                 "• Supply at ~50% of demand; skills mismatch is the real bottleneck\n"
                 "• 40% of employers prefer demonstrable AI skills/certifications over formal degrees\n"
                 "• Pune: India's top emerging startup hub — $5.1B raised across 421 deals (2014–2025)\n"
                 "• 360+ Global Capability Centres in Pune; ~90,000 engineering graduates/year\n"
                 "• HackPune taps this pool with curation — not mass open registration"),
                ("Why Now — Bilateral Policy Tailwind",
                 "• Oct 2024: 7th Indo-German IGC launched Innovation & Technology Partnership Roadmap\n"
                 "• Jan 2026: Chancellor visit — bilateral trade > USD 50B; AI, digitalisation, startups reaffirmed\n"
                 "• Early 2026: Indo-German InnoXchange (DST + DAAD + DWIH) — deep-tech entrepreneurship\n"
                 "• German leaders explicitly invite German companies to invest and scale in India\n"
                 "• Window: German Mittelstand and startups exploring India need structured talent access now"),
                ("What Is HackPune?",
                 "• Date: 3–4 October 2026 (Saturday–Sunday), Pune, India\n"
                 "• 160 Indian hackers — all participants Indian residents\n"
                 "• 40% students · 40% professional workers · 20% anyone (open category)\n"
                 "• 8 challenges — ALL from German startups and companies\n"
                 "• 24-hour AI-native build sprint; English; free food and workspace\n"
                 "• Accept ~180 applications; seat 160 curated builders\n"
                 "• Prizes: NOT FIXED YET — each German partner decides their own prize structure"),
                ("How It Works — Step by Step",
                 "BEFORE EVENT (German partner):\n"
                 "  1. Discovery call — scope your challenge (15 min)\n"
                 "  2. Sign MoU; 50% upfront payment in EUR\n"
                 "  3. Submit challenge brief 2 weeks before event\n"
                 "     (problem statement, API/data access, judging criteria)\n\n"
                 "DURING EVENT:\n"
                 "  Day 0 Fri 02.10: Partner challenge pitches (5 min each)\n"
                 "  Day 1 Sat 03.10 12:00: Hack begins (24h countdown)\n"
                 "  Day 1 14:00: Speed-dating — 3-min rotations with challenge partner tables\n"
                 "  Day 1 16:00: Women in AI coffee session\n"
                 "  Day 1 22:00: Code freeze — GitHub + demo video + pitch deck submitted\n"
                 "  Day 2 Sun 04.10 10:00: Live pitches (4 min + 3 min Q&A per team)\n"
                 "  Day 2 13:00: Awards — 1 winner per German challenge\n\n"
                 "Format reference: ChefTreff AI Hackathon 2026, Hamburg (300+ builders, 9 challenges)."),
                ("Talent Quality — Curation Process",
                 "We do NOT accept everyone. HackPune is curated, not a mass event.\n"
                 "• Application requires: GitHub/portfolio + challenge preference + one-paragraph motivation\n"
                 "• Review panel scores technical interest, AI relevance, and team-fit potential\n"
                 "• Refundable deposit (EUR equivalent, amount TBD) reduces no-shows\n"
                 "• Recruitment channels: COEP, VIT Pune, PICT, SPPU, GDG Cloud Pune, Devfolio, LinkedIn\n"
                 "• 30% women participant target; deposit waiver for underrepresented applicants\n"
                 "• 2 mentors + 1 judge per challenge (supplied by German partner company)"),
                ("What Your Company Gets",
                 "DELIVERABLES:\n"
                 "  • Multiple working AI prototypes on your exact internal problem\n"
                 "  • GitHub repos + demo videos + pitch decks from all teams on your challenge\n"
                 "  • Winner team prototype + all submission materials\n\n"
                 "RECRUITING:\n"
                 "  • Speed-dating access to builders on your challenge track\n"
                 "  • Post-event intro emails to all 160 participants (with consent)\n"
                 "  • First-access to CVs and GitHub profiles from your challenge teams\n\n"
                 "VISIBILITY:\n"
                 "  • 5-minute stage pitch at opening ceremony\n"
                 "  • Optional 30-minute keynote (in-person EU/German partner)\n"
                 "  • Logo on all event materials, T-shirts, banners, social posts\n"
                 "  • Mention in press outreach (YourStory, Inc42, Indo-German channels)\n\n"
                 "STRATEGIC:\n"
                 "  • Low-risk India talent and market signal before full hiring or consulting spend\n"
                 "  • Case study for your innovation and HR teams"),
                ("Economics — EUR Only",
                 "Challenge slot investment: €3,500 – €5,500\n"
                 "  vs. typical AI consulting sprint: €15,000 – €50,000+ for comparable scope\n"
                 "  vs. 6-month junior hire onboarding cost in Germany: significantly higher\n\n"
                 "What the challenge slot fee covers:\n"
                 "  • Challenge track ownership (1 of 8 German slots)\n"
                 "  • 24h focused engineering from curated Indian builders on your problem\n"
                 "  • Mentor and judge slots; stage time; recruiting access\n"
                 "  • Event operations share (venue, food, AV, ops)\n\n"
                 "Prizes: TBD — you set your own prize for the winning team on your challenge\n"
                 "Tool credits for participants: target €30,000 – €50,000 combined in-kind value\n"
                 "  (Cursor, OpenAI, Claude, AWS, Google Cloud — potential tool sponsors, not confirmed)"),
                ("Participation Options",
                 "CHALLENGE OWNER (primary ask):\n"
                 "  €3,500 – €5,500 · owns one of 8 German challenge tracks\n"
                 "  Provides: problem, data/API, mentor, judge, prize (TBD)\n\n"
                 "TITLE SPONSOR:\n"
                 "  €5,500 · event naming, keynote slot, extended recruiting access\n\n"
                 "MENTOR / JUDGE / RECRUITER:\n"
                 "  Included in challenge owner package; can also attend without owning a challenge\n\n"
                 "Remote participation fully supported for German mentors and judges."),
                ("Potential Collaborations — Not Confirmed",
                 "We have NOT partnered with any institution yet. Outreach targets include:\n"
                 "  • GINSEP — warm intros to German startups exploring India\n"
                 "  • AHK / IGCC Pune — member company outreach\n"
                 "  • DWIH + DAAD — InnoXchange programme alignment\n"
                 "  • German Accelerator India alumni\n"
                 "  • EU-India Innocenter\n"
                 "  • Universities: COEP, SPPU, VIT Pune (recruitment + venue exploration)\n"
                 "  • Tool sponsors: Cursor, OpenAI, AWS, Google Cloud (in-kind, not confirmed)"),
                ("The Terns Team",
                 "Indo-German founding team — Hamburg ↔ Pune:\n"
                 "  • Omkar Kondhalkar — Founder, AI engineer, Hamburg; vision & German company outreach\n"
                 "  • Elias Tilmes — Finance & legal, Hamburg\n"
                 "  • Sebastian Steltzer — PMO & investor relations\n"
                 "  • Luna Schreiner — Policy & BMWK grant channels\n"
                 "  • Yash Pawar — India operations lead, Pune\n"
                 "  • Antje Ute Bauer — Pune community & Indo-German network\n"
                 "Contact: hello@terns.tech · +49 176 43380383"),
                ("Expected Outcomes & Success Metrics",
                 "• 8 German challenge partners confirmed\n"
                 "• 160 Indian participants seated\n"
                 "• 8 working AI prototypes delivered to German partners\n"
                 "• ≥3 qualified hire/intent conversations per challenge partner\n"
                 "• Press coverage in Indian tech media and Indo-German business channels\n"
                 "• Documented case studies for partner innovation teams"),
                ("Next Steps",
                 "1. Book a 15-minute discovery call: hello@terns.tech\n"
                 "2. Scope your challenge — what problem, what data, what success looks like\n"
                 "3. Receive challenge partner MoU (EUR, 50% upfront)\n"
                 "4. Submit challenge brief 2 weeks before 3 October 2026\n"
                 "5. Attend in person or participate remotely as mentor/judge\n\n"
                 "DEADLINE: Reserve one of 8 German challenge slots by end of July 2026\n"
                 "Apply / enquire: terns.tech/hackpune · hello@terns.tech"),
            ],
            "expanded": """
GERMAN COMPANY OUTREACH — DETAILED PLAYBOOK
───────────────────────────────────────────

ELEVATOR PITCH (use on every call):
"Terns runs AI hackathons where German companies bring real problems and Indian
builders build real solutions. No toy challenges. 24 hours, 160 Indian hackers,
8 German challenges. You leave with prototypes and recruiting signals. We validate
your India talent interest before you commit to hiring or consulting."

OBJECTION HANDLING:

Q: "Why India? Why not hire in Germany?"
A: Germany has 109k unfilled IT roles and 7.7-month average fill times. India has
   2.55M STEM graduates/year and Pune is a top global GCC hub. HackPune is a
   24-hour low-cost signal before any full hiring decision.

Q: "How do we know the talent quality?"
A: Curated applications only. GitHub review, challenge-fit statement, refundable
   deposit. You watch builders work on YOUR problem for 24 hours before any interview.

Q: "What does it cost vs. alternatives?"
A: €3,500–5,500 for a challenge slot vs. €15k–50k+ for a consulting sprint.
   Prizes are separate and TBD — you control that investment.

Q: "We are not ready for India expansion."
A: HackPune is explicitly designed as a low-risk probe. No office, no entity, no
   long-term commitment required. Just one real problem and 24 hours.

GERMAN OUTREACH TARGET LIST (not contacted yet — internal):
Hamburg: Otto Group, About You, Statista, New Work SE/Xing, Jungheinrich, HHLA
Berlin: n8n, Parloa Technologies, Personio
Munich: Celonis, Aleph Alpha
Channels: GINSEP (info@ginsep.co), German Accelerator alumni, EU-India Innocenter

CHALLENGE PARTNER CHECKLIST (submit 2 weeks before event):
PUBLIC (on event page):
  □ Challenge statement (max 150 words)
  □ Company intro (3 sentences — who you are, what you do, why Pune)
  □ Prize description (amount TBD — you decide)
  □ Mentor name and one-line bio
PRIVATE (shared with teams on your challenge):
  □ Technical brief: API URL, auth keys, sample queries, schema docs
  □ Judging criteria: 3–5 bullet points
  □ Non-starters: what you do NOT want (e.g. generic LLM wrapper)
ON-SITE:
  □ 5-minute challenge pitch deck (max 3 slides)
  □ Mentor available 24h from hack start
  □ Judge present Day 2 pitches (10:00–13:00)
  □ Optional rollup banner (800 × 2000 mm)
""",
        },
        "de": {
            "title": "HackPune 2026 — Pitch für Deutsche Unternehmen",
            "subtitle": "24 Stunden fokussiertes AI Engineering — mit 160 indischen Buildern in Pune.",
            "audience": "Deutsche Startups und Unternehmen: CTOs, Innovation, Gründer, Mittelstand",
            "slides": [
                ("Titel", "HackPune 2026 · 3.–4. Oktober 2026 · Pune, Indien · terns.tech/hackpune"),
                ("Warum Wir Das Tun",
                 "Deutsche Unternehmen brauchen schnelleren, risikoärmeren Zugang zu Indiens AI-Builder-Pool.\n"
                 "Indische Builder brauchen echte Unternehmensprobleme.\n"
                 "HackPune bringt 8 deutsche Challenge-Owner mit 160 kuratierten indischen Hackern zusammen.\n"
                 "Wir validieren deutsches Unternehmensinteresse VOR Venue-, Media- und Logistik-Skalierung."),
                ("Deutschland — Strukturelle Talentlücke",
                 "• 109.000 unbesetzte IT-Stellen (Bitkom 2025)\n"
                 "• 85 % sehen Mangel; 79 % erwarten Verschärfung\n"
                 "• 7,7 Monate durchschnittliche Besetzungsdauer\n"
                 "• Größte Lücken: Software, Cybersecurity, AI/ML, Cloud/DevOps\n"
                 "• 42 % erwarten zusätzlichen IT-Bedarf durch KI"),
                ("Indien / Pune — Die Builder-Chance",
                 "• ~2,55 Mio. STEM-Absolventen/Jahr\n"
                 "• AI-Bedarf: 800k–850k → 1,25 Mio.+ bis 2026–27\n"
                 "• 40 % bevorzugen nachweisbare AI-Skills vor Abschluss\n"
                 "• Pune: Top Emerging Hub — 5,1 Mrd. USD / 421 Deals seit 2014\n"
                 "• 360+ GCCs; ~90.000 Absolventen/Jahr"),
                ("Warum Jetzt", "Innovation Roadmap Okt. 2024 · InnoXchange 2026 · Handel > 50 Mrd. USD"),
                ("Was Ist HackPune?",
                 "• 3.–4. Oktober 2026, Pune\n"
                 "• 160 indische Hacker — alle aus Indien\n"
                 "• 40 % Studierende · 40 % Berufstätige · 20 % alle\n"
                 "• 8 Challenges — ALLE von deutschen Unternehmen\n"
                 "• 24h · Englisch · kostenlos inkl. Verpflegung\n"
                 "• Preise: NOCH NICHT FESTGELEGT"),
                ("Ablauf",
                 "Vor Event: Discovery Call · MoU · Brief 2 Wochen vorher\n"
                 "Tag 1: Hack 12:00 · Speed-Dating 14:00 · Code Freeze 22:00\n"
                 "Tag 2: Pitches 10:00 · Awards 13:00\n"
                 "Vorbild: ChefTreff AI Hackathon 2026, Hamburg"),
                ("Talent-Qualität", "Kuratiert · GitHub-Review · Kaution · 30 % Frauen-Ziel"),
                ("Was Sie Bekommen",
                 "Prototypen · Recruiting · Sichtbarkeit · Indien-Signal vor Voll-Commitment"),
                ("Ökonomie (EUR)",
                 "Challenge Slot: 3.500 – 5.500 EUR\n"
                 "vs. Consulting: 15.000 – 50.000+ EUR\n"
                 "Preise: TBD · Tool-Credits-Ziel: 30.000 – 50.000 EUR"),
                ("Teilnahme-Optionen",
                 "Challenge Owner · Title Sponsor 5.500 EUR · Mentor/Judge inklusive · Remote möglich"),
                ("Potenzielle Kooperationen",
                 "NOCH KEINE BESTÄTIGT: GINSEP · AHK · DWIH/DAAD · German Accelerator · Unis"),
                ("Terns Team", "Hamburg ↔ Pune · hello@terns.tech · +49 176 43380383"),
                ("Ergebnisse", "8 Prototypen · Recruiting-Signale · Presse · Case Studies"),
                ("Nächste Schritte",
                 "1. 15-Min Discovery Call\n"
                 "2. Challenge scopen\n"
                 "3. MoU + 50 % Anzahlung EUR\n"
                 "4. Brief 2 Wochen vor Event\n"
                 "FRIST: Slot bis Ende Juli 2026 · terns.tech/hackpune"),
            ],
            "expanded": """
DEUTSCHES OUTREACH — DETAILLIERTES PLAYBOOK
───────────────────────────────────────────

ELEVATOR PITCH:
„Terns verbindet deutsche Unternehmen mit 160 kuratierten indischen Buildern.
Echte Probleme, echte Prototypen, echte Recruiting-Signale — in 24 Stunden."

EINWANDBEHANDLUNG:

F: „Warum Indien?"
A: 109k unbesetzte IT-Stellen, 7,7 Monate Besetzungsdauer. Indien: 2,55 Mio.
   STEM/Jahr. HackPune = 24h-Signal vor jeder Hiring-Entscheidung.

F: „Was kostet das?"
A: 3.500–5.500 EUR Challenge Slot vs. 15.000–50.000+ EUR Consulting-Sprint.
   Preise separat und TBD.

OUTREACH-ZIELE (noch nicht kontaktiert):
Hamburg: Otto Group, About You, Statista, New Work SE, Jungheinrich
Berlin: n8n, Parloa, Personio · München: Celonis, Aleph Alpha
Kanäle: GINSEP, German Accelerator, EU-India Innocenter
""",
        },
    },
    "sponsor_partner": {
        "en": {
            "title": "HackPune 2026 — Potential Partners & Collaborations",
            "subtitle": "Indo-German AI bridge — outreach targets for institutions, sponsors and ecosystem partners. No partnerships confirmed yet.",
            "audience": "GINSEP, AHK, DWIH, DAAD, tool sponsors, venue/food partners, media, government programmes",
            "slides": [
                ("Title", "HackPune 2026 — Potential Partners & Collaborations · terns.tech"),
                ("Why This Partnership Opportunity Exists",
                 "HackPune aligns with the India-Germany Innovation & Technology Partnership Roadmap.\n"
                 "It offers institutions a concrete, visible Indo-German talent and innovation format.\n"
                 "We are in early outreach — no MoUs signed, no partners confirmed yet.\n"
                 "Early collaborators shape the inaugural edition and gain first-mover visibility."),
                ("Event Snapshot",
                 "• 3–4 October 2026 · Pune, India · 24 hours\n"
                 "• 160 Indian hackers (40% students · 40% professionals · 20% anyone)\n"
                 "• 8 challenges — all from German startups and companies\n"
                 "• ~140 people total on site\n"
                 "• Operating budget target: ~€12,000 – €15,000\n"
                 "• Prizes: TBD per challenge partner"),
                ("Potential Institutional Collaborations (Priority A)",
                 "GINSEP (BMWK-backed):\n"
                 "  Ask: co-promotion to 1,500+ startup network; warm intros to German challenge partners\n"
                 "  Status: NOT CONFIRMED — outreach planned June 2026\n\n"
                 "AHK / IGCC India (Pune office):\n"
                 "  Ask: member company outreach; venue introductions; official co-branding\n"
                 "  Status: NOT CONFIRMED\n\n"
                 "DWIH New Delhi + DAAD (InnoXchange):\n"
                 "  Ask: programme alignment; newsletter to Indo-German ecosystem; grant pathway\n"
                 "  Status: NOT CONFIRMED\n\n"
                 "German Accelerator India:\n"
                 "  Ask: warm intros to India-focused German startup alumni as challenge owners\n"
                 "  Status: NOT CONFIRMED"),
                ("Potential Institutional Collaborations (Priority B)",
                 "DAAD India: alumni network promotion to Indo-German graduates\n"
                 "NASSCOM Pune: participant recruitment pipeline\n"
                 "SINE IIT Bombay: deep-tech startup referrals\n"
                 "Fraunhofer India: advisor/intro channel (not a confirmed partner)\n"
                 "MCCIA Pune: local German company Pune contacts\n"
                 "Devfolio: participant application platform\n"
                 "GDG Cloud Pune / MLH: volunteer and community recruitment\n"
                 "Media: YourStory, Inc42, TheDialog, Times of India Pune"),
                ("Sponsor Tiers (EUR)",
                 "Title Sponsor (1 slot):        €5,500\n"
                 "Challenge Partner (8 slots):   €3,500 – €5,500 each (German companies)\n"
                 "Founder Sponsor (5–8 slots): €100 – €500\n"
                 "Institutional Partner:         €1,000 – €2,000\n"
                 "Tool/Cloud Sponsor:          In-kind (target €30k–50k toolkit value)\n"
                 "Venue Sponsor:               In-kind (24h space for 160+ people)\n"
                 "Food Sponsor:                In-kind or cash (~€1,700 – €2,800 for 160 people)"),
                ("What Potential Partners Would Receive",
                 "• Co-branding on all event materials (once MoU signed)\n"
                 "• Logo on website, banners, T-shirts, social posts\n"
                 "• Mentor/judge slots for institutional representatives\n"
                 "• Newsletter and community promotion to your network\n"
                 "• Post-event recap and case study mention\n"
                 "• Potential eligibility for BMWK-aligned grants (€5,000 – €20,000) with DWIH endorsement\n"
                 "  (grant pathway not confirmed — under exploration)"),
                ("Venue Exploration (not confirmed)",
                 "Priority order for venue outreach:\n"
                 "  1. COEP Technological University, Pune\n"
                 "  2. Savitribai Phule Pune University — Dept. of Technology\n"
                 "  3. WeWork Pune (Kalyani Nagar / Kharadi — in-kind pitch)\n"
                 "  4. Innov8 Coworking Pune\n"
                 "Requirements: 160 desks + power · 1 Gbps WiFi · AV · sleeping zone · 24h access\n"
                 "Venue decision deadline: end of July 2026"),
                ("Timeline",
                 "June 2026:    Partner outreach begins; first discovery calls\n"
                 "July 2026:    8 German challenges confirmed; venue locked\n"
                 "August 2026:  Applications open; 160 hackers selected\n"
                 "September 2026: Dry run; final prep\n"
                 "3–4 October 2026: HackPune\n"
                 "October 2026: Post-event recap, partner handoff, case studies"),
                ("Express Interest",
                 "We welcome expressions of interest from potential partners.\n"
                 "No commitment required at first contact.\n"
                 "Contact: hello@terns.tech · terns.tech/hackpune"),
            ],
            "expanded": """
PARTNER OUTREACH STATUS
───────────────────────
As of document generation: ZERO partnerships confirmed.
All names below are TARGETS for outreach, not existing relationships.

OUTREACH SEQUENCE (recommended):
Week 1–2: GINSEP, AHK Pune, DWIH — institutional credibility first
Week 3–4: German Accelerator, EU-India Innocenter — challenge partner pipeline
Week 5–6: Tool sponsors (Cursor, OpenAI, AWS) — in-kind applications
Week 7–8: Universities (COEP, SPPU, VIT) — recruitment + venue
Ongoing:  Media (YourStory, Inc42) — pre-event coverage

GRANT EXPLORATION (not confirmed):
If DWIH or GINSEP formally co-endorse HackPune, team will explore:
  • BMWK bilateral initiative grants: €5,000 – €20,000 range
  • DAAD event promotion grants
Status: exploratory only — do not claim grant eligibility in external materials yet.

FUNDING MODEL:
Primary revenue: 8 German challenge partners × €3,500–5,500 = €28,000–44,000
Secondary: title sponsor €5,500 + founder sponsors + institutional partners
In-kind: tool credits, venue, food
Target: operating budget ~€12,000–15,000 covered with surplus for HackPune 2027 seed
""",
        },
        "de": {
            "title": "HackPune 2026 — Potenzielle Partner & Kooperationen",
            "subtitle": "Indo-German AI Bridge — Outreach-Ziele. Noch keine Partnerschaften bestätigt.",
            "audience": "GINSEP, AHK, DWIH, DAAD, Sponsoren, Medien",
            "slides": [
                ("Titel", "HackPune 2026 — Potenzielle Partner & Kooperationen"),
                ("Warum Diese Gelegenheit", "Alignment mit Innovation Roadmap · Early Mover Vorteil · Noch keine MoUs"),
                ("Event-Überblick", "3.–4. Okt. · 160 indische Hacker · 8 deutsche Challenges · Budget ca. 12–15k EUR"),
                ("Potenzielle Partner A", "GINSEP · AHK · DWIH/DAAD · German Accelerator — NICHT BESTÄTIGT"),
                ("Potenzielle Partner B", "DAAD · NASSCOM · SINE · MCCIA · Devfolio · Medien — NICHT BESTÄTIGT"),
                ("Sponsor-Stufen (EUR)", "Title 5.500 · Challenge 3.500–5.500 · Founder 100–500 · Institutionell 1–2k"),
                ("Was Partner Bekommen", "Co-Branding · Logo · Promotion · Recap · ggf. Grant-Pfad (explorativ)"),
                ("Venue-Exploration", "COEP · SPPU · WeWork · Innov8 — Entscheidung bis Ende Juli 2026"),
                ("Timeline", "Jun Outreach · Jul Challenges · Aug Selection · Okt Event"),
                ("Interesse Bekunden", "hello@terns.tech · terns.tech/hackpune"),
            ],
            "expanded": "Stand: KEINE Partnerschaften bestätigt. Alle Namen sind Outreach-Ziele.",
        },
    },
    "participant_university": {
        "en": {
            "title": "HackPune 2026 — Indian Participants & Universities",
            "subtitle": "160 Indian hackers. 8 German company challenges. 24 hours in Pune. Real prototypes, real career access.",
            "audience": "Indian students, professional workers, open-category builders; university promoters and tech clubs",
            "slides": [
                ("Title", "HackPune 2026 — Apply · terns.tech/hackpune/apply"),
                ("Why We Are Doing This",
                 "India produces 2.55 million STEM graduates per year — but only 31% of professionals\n"
                 "feel prepared to use AI tools effectively. Employers want demonstrable skills, not degrees.\n"
                 "HackPune gives Indian builders a direct path to German companies:\n"
                 "real problems, real mentors, real recruiting conversations — in 24 hours."),
                ("What Makes HackPune Different",
                 "• 8 challenges from GERMAN startups and companies — not Indian companies\n"
                 "• This is an Indo-German talent bridge: you build for German industry\n"
                 "• 160 curated Indian participants — not a mass open event\n"
                 "• 24 hours to ship a working AI prototype\n"
                 "• Direct access to German mentors, judges, and recruiters in Pune\n"
                 "• Tool access: Cursor, Claude, OpenAI, cloud credits (potential sponsors, TBD)\n"
                 "• Free: food, workspace, community · small refundable deposit (EUR equivalent, TBD)\n"
                 "• Prizes: TBD — set by each German challenge partner"),
                ("Who Gets In — 160 Indian Hackers",
                 "ALL PARTICIPANTS: Indian residents only\n\n"
                 "40% STUDENTS (~64 seats):\n"
                 "  COEP, VIT Pune, PICT, SPPU, IIT Bombay, BITS Pilani Goa\n"
                 "  Selection: GitHub/portfolio + challenge preference statement\n\n"
                 "40% PROFESSIONAL WORKERS (~64 seats):\n"
                 "  AI/ML engineers, full-stack developers, data scientists, product managers\n"
                 "  Working professionals with demonstrable AI project experience\n\n"
                 "20% ANYONE (~32 seats):\n"
                 "  Founders, designers, strategists, indie builders, career-switchers\n"
                 "  Open category — show us what you build, not just your job title\n\n"
                 "Accept ~180 applications · seat 160 · curated review panel\n"
                 "30% women target · Women in AI session Day 1 · deposit waiver for underrepresented applicants"),
                ("Event Schedule (Provisional)",
                 "DAY 0 — Friday 2 October 2026 (setup + opening):\n"
                 "  18:00  Participant check-in and kit distribution\n"
                 "  19:30  Opening ceremony\n"
                 "  20:00  Keynote (German challenge partner, TBD)\n"
                 "  20:30  All 8 German partners pitch their challenges (5 min each)\n"
                 "  21:30  Challenge preference voting\n"
                 "  22:00  Team announcements and dinner\n"
                 "  23:00  HACK BEGINS — 24-hour countdown\n\n"
                 "DAY 1 — Saturday 3 October 2026:\n"
                 "  06:00  Breakfast · 09:00  Mentor check-ins\n"
                 "  12:00  (alt. schedule) Hack in progress\n"
                 "  14:00  Speed-dating with German challenge partners (3-min rotations)\n"
                 "  16:00  Women in AI coffee session\n"
                 "  22:00  CODE FREEZE — submit GitHub + demo video + pitch deck\n\n"
                 "DAY 2 — Sunday 4 October 2026:\n"
                 "  09:00  Breakfast · 10:00  Live pitches begin\n"
                 "  10:00  4-min pitch + 3-min Q&A per team (2 teams per challenge)\n"
                 "  12:30  Judges deliberate · 13:00  Awards — 8 winners (prizes TBD)\n"
                 "  14:30  Networking and teardown"),
                ("Pitch Format",
                 "Submission at code freeze (Day 1, 22:00):\n"
                 "  • GitHub repository (public or private with judge access)\n"
                 "  • 3-minute demo video (Loom or YouTube unlisted)\n"
                 "  • Pitch deck (PDF or Google Slides, max 4 slides)\n\n"
                 "Live pitch (Day 2):\n"
                 "  • 4-minute team pitch + 3-minute Q&A from German challenge partner judge\n"
                 "  • No live coding — use demo video or screenshots\n"
                 "  • 2 teams pitch per challenge; 1 winner per challenge\n\n"
                 "Slide guidance: visual-first, not text-heavy. Max 4 slides:\n"
                 "  1. Problem reframe  2. Solution + screenshot  3. Tech stack diagram  4. What you'd build next"),
                ("For Universities — How to Help",
                 "We are looking for university PROMOTERS, not confirmed partners yet.\n"
                 "• Share HackPune with your CS, AI, and engineering student communities\n"
                 "• Connect us with tech club leaders (GDG, ACM, developer societies)\n"
                 "• Explore venue support (COEP, SPPU — under discussion, not confirmed)\n"
                 "• Volunteer coordinators from your student tech societies\n"
                 "• Co-endorsement letter from AHK/DWIH (if available) strengthens venue requests\n\n"
                 "Target colleges: COEP, VIT Pune, PICT, SPPU, IIT Bombay, BITS Pilani Goa"),
                ("Pune Ecosystem — Why Here",
                 "• India's #1 emerging startup hub by deal volume: 421 deals, $5.1B since 2014\n"
                 "• 360+ Global Capability Centres; 500+ projected by 2030\n"
                 "• ~90,000 engineering/IT graduates per year in Pune region\n"
                 "• Sectors: SaaS, fintech, automotive ER&D, BFSI, deeptech, AI-native engineering\n"
                 "• Startup Genome 2025: Pune among top global ecosystem climbers\n"
                 "• Hamburg-born Terns chose Pune as first international flagship city"),
                ("Community Beyond the Event",
                 "The event lasts 24 hours. The Terns community is permanent.\n"
                 "• Discord/Slack community for builders across borders\n"
                 "• Monthly meetups and future events (HackBerlin, HackSingapore planned)\n"
                 "• Arctic Tern metaphor: builders who cross borders and build community wherever they land\n"
                 "• Your German challenge experience becomes part of your portfolio and network"),
                ("Apply",
                 "Applications opening soon: terns.tech/hackpune/apply\n"
                 "Questions: hello@terns.tech\n"
                 "Hashtags: #HackPune2026 #AIHackathon #Terns #IndoGerman #Pune\n"
                 "Refundable deposit required upon acceptance (EUR equivalent, amount TBD)"),
            ],
            "expanded": """
PARTICIPANT RECRUITMENT — DETAILED PLAN
────────────────────────────────────────
Target: 180 applications → 160 seated Indian hackers

STUDENT CHANNELS (40% = ~64 seats):
  • COEP Tech Clubs — reach out via college ambassadors
  • VIT Pune CS/AI department bulletin
  • PICT Pune developer community
  • SPPU Department of Technology
  • IIT Bombay Devfolio alumni network
  • BITS Pilani Goa tech society

PROFESSIONAL CHANNELS (40% = ~64 seats):
  • LinkedIn posts targeting Pune/Bengaluru AI engineers
  • GDG Cloud Pune meetup announcements
  • TFUG Pune (TensorFlow User Group)
  • Pune AI/ML WhatsApp and Discord communities
  • Foundit/Naukri developer community posts

OPEN CATEGORY (20% = ~32 seats):
  • Indie Hackers Pune
  • Product Hunt India community
  • SheBuildsAI Pune, Women in Tech Pune
  • Open LinkedIn call: "founders, designers, strategists welcome"

APPLICATION FORM FIELDS (planned):
  1. Full name, email, phone, city
  2. Category: student / professional / anyone
  3. College or company (if applicable)
  4. GitHub URL (required)
  5. Portfolio or LinkedIn (optional)
  6. Which German challenge interests you and why (150 words)
  7. AI/ML experience level (beginner / intermediate / advanced)
  8. Dietary requirements and T-shirt size

SELECTION CRITERIA (scoring rubric):
  • GitHub activity and project quality (40%)
  • Challenge-fit statement (30%)
  • AI/ML relevance of past work (20%)
  • Diversity and mix balance (10%)

WHAT TO TELL YOUR UNIVERSITY:
"HackPune is a 24-hour AI hackathon in Pune where 160 Indian students and
professionals build real solutions for 8 German companies. It is free to attend,
curated, and gives direct access to German recruiters and mentors. We need your
help reaching the right students — not a formal partnership yet."
""",
        },
        "de": {
            "title": "HackPune 2026 — Indische Teilnehmende & Universitäten",
            "subtitle": "160 indische Hacker. 8 deutsche Challenges. 24 Stunden in Pune.",
            "audience": "Indische Studierende, Berufstätige, Open-Category Builder; Uni-Promoter",
            "slides": [
                ("Titel", "HackPune 2026 — Bewerben · terns.tech/hackpune/apply"),
                ("Warum", "Angewandte AI-Skills statt Theorie — direkter Zugang zu deutschen Unternehmen."),
                ("Was HackPune Anders Macht", "8 deutsche Challenges · 160 kuratiert · 24h · German mentors · Preise TBD"),
                ("Wer Kommt Rein", "40 % Studierende · 40 % Berufstätige · 20 % alle · alle aus Indien"),
                ("Ablauf", "Tag 0 Opening · Tag 1 Hack + Speed-Dating · Tag 2 Pitches + Awards"),
                ("Pitch-Format", "4+3 Min · max 4 Slides · GitHub + Demo-Video"),
                ("Für Universitäten", "Promoter gesucht — noch keine formalen Partnerschaften"),
                ("Pune Ökosystem", "421 Deals · 360+ GCCs · Top Emerging Hub"),
                ("Community", "Terns Netzwerk über das Event hinaus"),
                ("Bewerben", "terns.tech/hackpune/apply · hello@terns.tech"),
            ],
            "expanded": "Deutschsprachige Begleitinfo für indische Uni-Koordinatoren und deutsche Partner.",
        },
    },
}


def write_txt(deck: str, lang: str, data: dict) -> Path:
    pptx = f"Terns_HackPune_2026_{deck}_{lang}.pptx"
    path = OUT / f"Terns_HackPune_2026_{deck}_{lang}.txt"
    lines = [
        "=" * 78,
        data["title"].upper(),
        "=" * 78,
        f"Companion text file for: {pptx}",
        f"Language: {lang.upper()}",
        f"Audience: {data['audience']}",
        "",
        data["subtitle"],
        "",
        "IMPORTANT DISCLAIMERS",
        "-" * 40,
        "• All 160 participants are Indian residents.",
        "• All 8 challenges are from German startups and companies only.",
        "• All financial figures are in EUR only.",
        "• Prizes are NOT fixed yet — TBD with each challenge partner.",
        "• No partnerships confirmed yet — all names are potential collaborations.",
        "• No institutional or company names should be used as 'partners' until MoU signed.",
        "",
        "─" * 78,
        "SLIDE-BY-SLIDE CONTENT",
        "─" * 78,
    ]
    for i, (heading, body) in enumerate(data["slides"], 1):
        lines += [f"\nSLIDE {i}: {heading}", "-" * 40, body]

    lines += [
        "",
        "─" * 78,
        "EXPANDED RESEARCH, SPEAKER NOTES & PLAYBOOK",
        "─" * 78,
        data.get("expanded", "").strip(),
        "",
        "─" * 78,
        "MASTER NARRATIVE EXCERPT",
        "─" * 78,
        MASTER[lang].strip(),
        "",
        REFERENCES.strip(),
        "",
        "─" * 78,
        "BRAND (from Ceo.pdf)",
        "─" * 78,
        "Colors: Purple #621BFF · Black #050505 · Light grey #F2F2F2",
        "Tagline: Where the world builders take flight.",
        "Contact: hello@terns.tech · terns.tech/hackpune",
        "=" * 78,
    ]
    path.write_text("\n".join(lines), encoding="utf-8")
    return path


def write_master() -> Path:
    path = OUT / "00_MASTER_NARRATIVE.txt"
    content = (
        "=" * 78 + "\n"
        "TERNs HACKPUNE 2026 — MASTER NARRATIVE (EN + DE)\n"
        + "=" * 78 + "\n\n"
        + MASTER["en"].strip()
        + "\n\n"
        + "─" * 78 + "\n"
        + MASTER["de"].strip()
        + "\n\n"
        + REFERENCES.strip()
        + "\n" + "=" * 78 + "\n"
    )
    path.write_text(content, encoding="utf-8")
    return path


def write_index(count: int) -> None:
    lines = [
        "TERNs HACKPUNE 2026 — PITCH DECK FILES INDEX",
        "=" * 50,
        "Languages: English (en) and German (de) only.",
        "",
        "KEY FACTS (current plan):",
        "  • 160 Indian hackers (40% students · 40% professionals · 20% anyone)",
        "  • 8 challenges — ALL from German startups and companies",
        "  • All figures in EUR · Prizes TBD · No confirmed partners yet",
        "",
        "PPTX:",
    ]
    for p in sorted(OUT.glob("*.pptx")):
        if "_hi." not in p.name:
            lines.append(f"  • {p.name}")
    lines += ["", "TXT:"]
    for p in sorted(OUT.glob("*.txt")):
        if p.name != "INDEX.txt" and "_hi." not in p.name:
            lines.append(f"  • {p.name}")
    lines += [
        "",
        "GENERATORS:",
        "  • generate_pptx_decks.py",
        "  • generate_txt_companions.py",
        "",
        "ZIP: Terns_HackPune_2026_pitch_decks_EN_DE.zip",
        f"Total EN/DE TXT companions: {count}",
    ]
    (OUT / "INDEX.txt").write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    paths = [write_master()]
    for deck, langs in DECKS.items():
        for lang in LANGUAGES:
            paths.append(write_txt(deck, lang, langs[lang]))
    write_index(len(paths))
    print(f"Generated {len(paths)} TXT files + INDEX.txt")


if __name__ == "__main__":
    main()
