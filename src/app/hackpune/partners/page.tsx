"use client";

import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import { LinkButton } from "@/components/ui/Button";

const partnerTypes = [
  { key: "challenge" as const, icon: "🎯" },
  { key: "tech" as const, icon: "⚡" },
  { key: "sponsor" as const, icon: "🤝" },
  { key: "community" as const, icon: "🌐" },
];

export default function PartnersPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-canvas py-20 lg:py-32">
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-6">{t.partners.hero.eyebrow}</p>
          <h1 className="text-h1 text-ink mb-6 whitespace-pre-line max-w-3xl">
            {t.partners.hero.title}
          </h1>
          <p className="text-body text-slate-gray font-[450] max-w-2xl mb-10">
            {t.partners.hero.subtitle}
          </p>
          <LinkButton href="/hackpune/apply#sponsor" variant="primary" size="lg">
            Become a Partner
            <ArrowRight size={18} className="ml-2" />
          </LinkButton>
        </div>
      </section>

      {/* Partnership types */}
      <section className="py-24 lg:py-32 bg-lifted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">PARTNERSHIP TYPES</p>
          <h2 className="text-h2 text-ink mb-14">
            Find the right partnership for you.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {partnerTypes.map(({ key, icon }) => {
              const info = t.partners.types[key];
              return (
                <div
                  key={key}
                  className="bg-white border border-border rounded-pill p-8 card-hover flex gap-5"
                >
                  <div
                    className="shrink-0 w-12 h-12 rounded-full bg-soft-bone flex items-center justify-center text-2xl"
                  >
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-h3 text-ink mb-3">{info.title}</h3>
                    <p className="text-body text-slate-gray font-[450]">{info.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-24 lg:py-32 bg-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">WHY PARTNER WITH BRIDGR</p>
          <h2 className="text-h2 text-ink mb-14">
            More than sponsorship — direct talent access.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Direct IP Access",
                body: "Challenge partners retain all IP from solutions built on their problem. You get 4–6 working prototypes with full source code after the event.",
              },
              {
                title: "Hire the Best",
                body: "Get a front-row view of how 300+ builders work under pressure. Several challenge partners actively hire from HackPune participants.",
              },
              {
                title: "Brand Authority",
                body: "Position your company as a technical leader in Pune's fast-growing AI community. Reach builders, founders, and engineers who are building the future.",
              },
              {
                title: "Mentorship Presence",
                body: "Your team gets dedicated access to mentor the teams working on your challenge — building authentic relationships with top talent.",
              },
              {
                title: "Community Reach",
                body: "HackPune marketing reaches Pune's 500,000+ tech professionals. Sponsor visibility across Discord, Slack, LinkedIn, and event collateral.",
              },
              {
                title: "Post-Event Pilots",
                body: "Several past hackathon solutions from similar events have evolved into actual pilots or products. You could be building with that team next quarter.",
              },
            ].map((b, i) => (
              <div key={i} className="bg-white border border-border rounded-pill p-7 card-hover">
                <div className="w-1.5 h-6 bg-ink rounded-full mb-4" />
                <h3 className="text-h3 text-ink mb-2">{b.title}</h3>
                <p className="text-body text-slate-gray font-[450]">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current partners in conversation */}
      <section className="py-24 lg:py-32 bg-lifted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">IN CONVERSATION</p>
          <h2 className="text-h2 text-ink mb-5">
            Tech partners we&apos;re exploring.
          </h2>
          <p className="text-body text-slate-gray font-[450] max-w-2xl mb-12">
            These partnerships are being explored and are not yet confirmed. Announcements will come when agreements are in place.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Cursor", "OpenAI", "Lovable", "Manus", "and more"].map((name, i) => (
              <div
                key={i}
                className="border border-dashed border-border rounded-pill p-6 text-center flex flex-col items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-lg">
                  {name === "and more" ? "+" : "🔧"}
                </div>
                <span className="text-sm text-slate-gray font-medium">{name}</span>
                <span className="text-xs text-slate-gray bg-soft-bone border border-border rounded-pill px-2 py-0.5">
                  In conversation
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white border border-border rounded-lg p-12 lg:p-20 text-center shadow-elevated">
            <h2 className="text-h2 text-ink mb-5">
              {t.partners.cta.title}
            </h2>
            <p className="text-body text-slate-gray font-[450] mb-10">{t.partners.cta.subtitle}</p>
            <LinkButton href="/hackpune/apply#sponsor" variant="primary" size="lg">
              {t.partners.cta.button}
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}
