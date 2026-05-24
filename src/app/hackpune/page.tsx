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
  const discordUrl = process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/bridgr";

  return (
    <div className="min-h-screen">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-canvas">
        <div className="page-container pt-24 pb-24 lg:pt-32 lg:pb-32">
          <p className="eyebrow mb-6">{t.hackpune.hero.eyebrow}</p>
          <h1 className="text-h1 text-ink mb-6 whitespace-pre-line max-w-4xl">
            {t.hackpune.hero.title}
          </h1>
          <p className="text-body text-slate-gray font-[450] max-w-2xl mb-10">
            {t.hackpune.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 mb-14">
            <LinkButton href="/hackpune/apply" variant="primary" size="lg">
              {t.hackpune.hero.ctaPrimary}
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
            <a
              href={discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-ink border border-ink px-6 py-2 rounded-md font-medium hover:translate-y-[1px] transition-all"
            >
              <MessageCircle size={18} />
              {t.hackpune.hero.ctaSecondary}
            </a>
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
          <h2 className="text-h2 text-ink mb-5">
            {t.hackpune.tracks.title}
          </h2>
          <p className="text-body text-slate-gray font-[450] max-w-2xl mb-12">
            {t.hackpune.tracks.subtitle}
          </p>

          {/* Placeholder challenge slots */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="content-card content-card--dashed opacity-60 min-h-[150px]">
                <div className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center">
                  <Target size={18} className="text-slate-gray" />
                </div>
                <div>
                  <div className="h-4 bg-soft-bone rounded-pill w-32 mb-2" />
                  <div className="h-3 bg-soft-bone rounded-pill w-24" />
                </div>
                <Badge variant="outline">{t.hackpune.tracks.tba}</Badge>
              </div>
            ))}
          </div>

          <div className="mt-10 content-card content-card--compact text-center">
            <p className="text-body text-slate-gray font-[450]">{t.hackpune.tracks.placeholder}</p>
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
