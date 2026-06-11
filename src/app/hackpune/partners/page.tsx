"use client";

import { ArrowRight, Target, Zap, Handshake, Globe } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import { LinkButton } from "@/components/ui/Button";
import { TechPartnersGrid } from "@/components/TechPartnersGrid";

const partnerTypes = [
  { key: "challenge" as const, icon: Target },
  { key: "tech" as const, icon: Zap },
  { key: "sponsor" as const, icon: Handshake },
  { key: "community" as const, icon: Globe },
];

export default function PartnersPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-canvas py-20 lg:py-32">
        <div className="relative z-10 page-container">
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

      {/* German-India bridge section */}
      <section className="section-pad bg-lifted">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">THE OPPORTUNITY</p>
              <h2 className="text-h2 text-ink mb-6">India&apos;s IT scale.<br />Germany&apos;s industry depth.</h2>
              <p className="text-body text-slate-gray font-[450] leading-relaxed mb-6">
                By connecting German industry with India&apos;s rapidly growing IT ecosystem, terns.tech creates a scalable platform for cross-border innovation, talent acquisition, and cost-efficient digital execution.
              </p>
              <p className="text-body text-slate-gray font-[450] leading-relaxed">
                For the first edition, we are actively sourcing sponsors locally, companies in Hamburg and Germany with an interest in hiring, employer branding, and product adoption among India&apos;s top engineering talent.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "160", label: "Curated builders" },
                { value: "8", label: "German challenges" },
                { value: "~20", label: "Builders per challenge" },
                { value: "Hamburg", label: "Where Terns was born" },
              ].map((stat) => (
                <div key={stat.label} className="content-card content-card--compact">
                  <div className="text-2xl font-medium text-ink mb-1 tracking-tight">{stat.value}</div>
                  <div className="text-sm text-slate-gray font-[450]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership types */}
      <section className="section-pad bg-canvas">
        <div className="page-container">
          <p className="eyebrow mb-4">PARTNERSHIP TYPES</p>
          <h2 className="text-h2 text-ink mb-14">
            Find the right partnership for you.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {partnerTypes.map(({ key, icon: Icon }) => {
              const info = t.partners.types[key];
              return (
                <div
                  key={key}
                  className="content-card card-hover flex flex-col sm:flex-row gap-4 sm:gap-5"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-soft-bone flex items-center justify-center text-ink">
                    <Icon size={22} strokeWidth={1.75} />
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
      <section className="section-pad bg-canvas">
        <div className="page-container">
          <p className="eyebrow mb-4">WHY PARTNER WITH TERNS</p>
          <h2 className="text-h2 text-ink mb-14">
            More than sponsorship, direct talent access at scale.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "Direct IP Access",
                body: "Challenge partners retain all IP from solutions built on their problem. Get up to 8 working prototypes per challenge with full source code after the event.",
              },
              {
                title: "Hire the Best",
                body: "Get a front-row view of how 160 curated builders work under pressure. Challenge partners actively hire from HackPune participants.",
              },
              {
                title: "Brand Authority",
                body: "Position your company as a technical leader in Pune's fast-growing AI community. Reach builders, founders, and engineers who are building the future.",
              },
              {
                title: "Mentorship Presence",
                body: "Your team gets dedicated access to mentor the teams working on your challenge - building authentic relationships with top talent.",
              },
              {
                title: "Community Reach",
                body: "HackPune marketing reaches Pune's 500K+ tech professionals. Sponsor visibility across Discord, Slack, LinkedIn, event collateral, and the Terns pitch decks.",
              },
              {
                title: "Post-Event Pilots",
                body: "Several past hackathon solutions from similar events have evolved into actual pilots or products. You could be building with that team next quarter.",
              },
            ].map((b, i) => (
              <div key={i} className="content-card card-hover h-full">
                <div className="w-1.5 h-6 bg-ink rounded-full mb-4" />
                <h3 className="text-h3 text-ink mb-2">{b.title}</h3>
                <p className="text-body text-slate-gray font-[450]">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current partners in conversation */}
      <section className="section-pad bg-lifted">
        <div className="page-container">
          <p className="eyebrow mb-4">IN CONVERSATION</p>
          <h2 className="text-h2 text-ink mb-5">
            Tech partners we&apos;re exploring.
          </h2>
          <p className="text-body text-slate-gray font-[450] max-w-2xl mb-10">
            These partnerships are being explored and are not yet confirmed. Announcements will come when agreements are in place.
          </p>

          <TechPartnersGrid variant="dark" />
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-lifted">
        <div className="page-container">
          <div className="content-card content-card--center shadow-elevated">
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
