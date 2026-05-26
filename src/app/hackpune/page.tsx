"use client";

import Link from "next/link";
import { ArrowRight, Clock, Users, Zap, MessageCircle, Target, Coffee } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import { LinkButton } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { EventSchedule } from "@/components/EventSchedule";
import { TechPartnersGrid } from "@/components/TechPartnersGrid";
import { FAQSection } from "@/components/FAQSection";

export default function HackPunePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-canvas">
        <div className="page-container pt-24 pb-24 lg:pt-32 lg:pb-32">
          <p className="eyebrow mb-6">{t.hackpune.hero.eyebrow}</p>
          <h1 className="text-h1 text-ink mb-6 whitespace-pre-line max-w-4xl">
            {t.hackpune.hero.title}
          </h1>
          <p className="text-body text-slate-gray font-[450] max-w-2xl mb-8">
            {t.hackpune.hero.subtitle}
          </p>

          {/* Save the Date */}
          <div className="mb-10 inline-flex flex-col gap-1 border-l-2 border-ink pl-4">
            <span className="text-[11px] uppercase tracking-[0.6px] font-bold text-ink">
              Save the Date
            </span>
            <span className="text-[16px] font-medium text-ink tracking-[-0.2px]">
              3 &amp; 4 October 2026 (Sat &amp; Sun) · Pune, India
            </span>
          </div>

          <div className="flex flex-wrap gap-4 mb-14">
            <LinkButton href="/hackpune/apply" variant="primary" size="lg">
              {t.hackpune.hero.ctaPrimary}
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
            <button
              type="button"
              disabled
              aria-disabled="true"
              title="Coming soon - community channel not live yet"
              className="relative inline-flex items-center gap-2 bg-white text-ink border border-ink px-6 py-2 rounded-md font-medium opacity-40 blur-[0.4px] cursor-not-allowed select-none"
            >
              <MessageCircle size={18} />
              {t.hackpune.hero.ctaSecondary}
              <span className="ml-2 text-[10px] uppercase tracking-[0.6px] font-bold bg-ink/10 border border-ink/25 rounded-pill px-2 py-0.5">
                Coming Soon
              </span>
            </button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.hackpune.hero.stats.map((stat) => (
              <div key={stat.value} className="content-card content-card--compact">
                <div className="text-3xl font-medium text-ink mb-1">{stat.value}</div>
                <div className="text-xs text-slate-gray uppercase tracking-[0.56px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT TO EXPECT ──────────────────────────────────── */}
      <section className="section-pad bg-lifted">
        <div className="page-container">
          <p className="eyebrow mb-4">{t.hackpune.expect.eyebrow}</p>
          <h2 className="text-h2 text-ink mb-14">
            {t.hackpune.expect.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.hackpune.expect.items.map((item, i) => (
              <div key={i} className="content-card card-hover h-full">
                <h3 className="text-h3 text-ink mb-3">{item.title}</h3>
                <p className="text-body text-slate-gray font-[450]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CHALLENGES ──────────────────────────────────────── */}
      <section className="section-pad bg-canvas">
        <div className="page-container">
          <p className="eyebrow mb-4">{t.hackpune.tracks.eyebrow}</p>
          <div className="content-card content-card--center max-w-2xl mx-auto py-16">
            <span className="text-[11px] uppercase tracking-[0.6px] font-bold text-slate-gray mb-4">
              Status
            </span>
            <h2 className="text-h2 text-ink mb-4">Coming Soon</h2>
            <p className="text-body text-slate-gray font-[450] max-w-lg mx-auto">
              We&apos;re lining up challenge partners and tracks for HackPune 2026. Confirmations will be shared on the updates page as soon as they&apos;re official.
            </p>
            <a
              href="/updates"
              className="mt-6 inline-flex items-center gap-2 text-link-blue hover:opacity-80 transition-colors text-sm font-medium"
            >
              Follow the updates <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ─── WHO SHOULD APPLY ────────────────────────────────── */}
      <section className="section-pad bg-lifted">
        <div className="page-container">
          <p className="eyebrow mb-4">{t.hackpune.who.eyebrow}</p>
          <h2 className="text-h2 text-ink mb-14">
            {t.hackpune.who.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.hackpune.who.items.map((item, i) => {
              const icons = [Zap, Users, Coffee, Target];
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="content-card card-hover flex flex-col sm:flex-row gap-4 sm:gap-5">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-soft-bone flex items-center justify-center">
                    <Icon size={18} className="text-ink" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-h3 text-ink mb-2">{item.title}</h3>
                    <p className="text-body text-slate-gray font-[450]">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <EventSchedule />

      {/* ─── TIMELINE ────────────────────────────────────────── */}
      <section className="section-pad bg-canvas">
        <div className="page-container">
          <p className="eyebrow mb-4">{t.hackpune.timeline.eyebrow}</p>
          <h2 className="text-h2 text-ink mb-4">
            {t.hackpune.timeline.title}
          </h2>
          <p className="text-body text-slate-gray font-[450] mb-14">{t.hackpune.timeline.subtitle}</p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="flex flex-col gap-6">
              {t.hackpune.timeline.milestones.map((m, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="hidden md:flex shrink-0 w-10 h-10 rounded-full border border-border bg-white items-center justify-center z-10 relative">
                    <div className="w-2 h-2 rounded-full bg-ink" />
                  </div>
                  <div className="flex-1 content-card content-card--compact min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium text-ink">{m.phase}</span>
                      <Badge variant="outline">{m.status === "upcoming" ? "Upcoming" : "Done"}</Badge>
                    </div>
                    <h3 className="text-h3 text-ink mb-1">{m.title}</h3>
                    <p className="text-body text-slate-gray font-[450]">{m.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECH PARTNERS IN CONVERSATION ──────────────────── */}
      <section className="section-pad bg-lifted">
        <div className="page-container">
          <p className="eyebrow mb-4">{t.hackpune.partners.eyebrow}</p>
          <h2 className="text-h2 text-ink mb-4">
            {t.hackpune.partners.title}
          </h2>
          <p className="text-body text-slate-gray font-[450] max-w-2xl mb-10">
            {t.hackpune.partners.subtitle}
          </p>

          <TechPartnersGrid variant="light" />

          <Link
            href="/hackpune/partners"
            className="inline-flex items-center gap-2 text-link-blue text-sm hover:opacity-80 transition-colors mt-8"
          >
            View partner info hub <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ─── MINI FAQ ────────────────────────────────────────── */}
      <section className="section-pad bg-canvas">
        <div className="page-container">
          <FAQSection
            title={t.faq.title}
            subtitle={t.faq.subtitle}
            items={t.faq.items.slice(0, 6)}
            viewAllHref="/hackpune/faq"
          />
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────── */}
      <section className="section-pad bg-lifted">
        <div className="page-container">
          <div className="content-card content-card--center shadow-elevated max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-lifted rounded-pill px-3 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-ink" />
              <span className="text-xs text-ink font-medium uppercase tracking-[0.56px]">Applications opening soon</span>
            </div>
            <h2 className="text-h2 text-ink mb-5">
              {t.hackpune.cta.title}
            </h2>
            <p className="text-body text-slate-gray font-[450] mb-10 max-w-md mx-auto">
              {t.hackpune.cta.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <LinkButton href="/hackpune/apply" variant="primary" size="lg">
                {t.hackpune.cta.primary}
                <ArrowRight size={18} className="ml-2" />
              </LinkButton>
              <LinkButton href="/updates" variant="secondary" size="lg">
                {t.hackpune.cta.secondary}
              </LinkButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
