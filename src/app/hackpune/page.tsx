"use client";

import Link from "next/link";
import { ArrowRight, Clock, Users, Zap, MessageCircle, Target, Coffee } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import { LinkButton } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const techPartnerLogos = ["Cursor", "OpenAI", "Lovable", "Manus"];

export default function HackPunePage() {
  const { t } = useTranslation();
  const discordUrl = process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/bridgr";

  return (
    <div className="min-h-screen">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-24 lg:pt-32 lg:pb-32">
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
              <div key={stat.value} className="border border-border rounded-pill p-5 bg-white">
                <div className="text-3xl font-medium text-ink mb-1">{stat.value}</div>
                <div className="text-xs text-slate-gray uppercase tracking-[0.56px]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT TO EXPECT ──────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-lifted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">{t.hackpune.expect.eyebrow}</p>
          <h2 className="text-h2 text-ink mb-14">
            {t.hackpune.expect.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.hackpune.expect.items.map((item, i) => (
              <div key={i} className="rounded-pill bg-white border border-border p-8 card-hover">
                <h3 className="text-h3 text-ink mb-3">{item.title}</h3>
                <p className="text-body text-slate-gray font-[450]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CHALLENGES ──────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">{t.hackpune.tracks.eyebrow}</p>
          <h2 className="text-h2 text-ink mb-5">
            {t.hackpune.tracks.title}
          </h2>
          <p className="text-body text-slate-gray font-[450] max-w-2xl mb-12">
            {t.hackpune.tracks.subtitle}
          </p>

          {/* Placeholder challenge slots */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="border border-dashed border-border rounded-pill p-8 flex flex-col items-start gap-4 opacity-60">
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

          <div className="mt-10 p-5 bg-white border border-border rounded-pill text-center">
            <p className="text-body text-slate-gray font-[450]">{t.hackpune.tracks.placeholder}</p>
          </div>
        </div>
      </section>

      {/* ─── WHO SHOULD APPLY ────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-lifted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">{t.hackpune.who.eyebrow}</p>
          <h2 className="text-h2 text-ink mb-14">
            {t.hackpune.who.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.hackpune.who.items.map((item, i) => {
              const icons = [Zap, Users, Coffee, Target];
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="bg-white border border-border rounded-pill p-8 card-hover flex gap-5">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-soft-bone flex items-center justify-center">
                    <Icon size={18} className="text-ink" />
                  </div>
                  <div>
                    <h3 className="text-h3 text-ink mb-2">{item.title}</h3>
                    <p className="text-body text-slate-gray font-[450]">{item.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
                  <div className="flex-1 bg-white border border-border rounded-pill p-6">
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
      <section className="py-24 lg:py-32 bg-lifted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">{t.hackpune.partners.eyebrow}</p>
          <h2 className="text-h2 text-ink mb-4">
            {t.hackpune.partners.title}
          </h2>
          <p className="text-body text-slate-gray font-[450] max-w-2xl mb-12">
            {t.hackpune.partners.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {t.hackpune.partners.companies.map((name, i) => (
              <div key={i} className="bg-white border border-dashed border-border rounded-pill px-6 py-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-signal-orange" />
                <span className="text-slate-gray text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>

          <Link
            href="/hackpune/partners"
            className="inline-flex items-center gap-2 text-link-blue text-sm hover:opacity-80 transition-colors"
          >
            View partner info hub <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* ─── MINI FAQ ────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-canvas">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="text-h2 text-ink mb-12">Quick answers.</h2>
          <div className="flex flex-col gap-4">
            {t.faq.items.slice(0, 5).map((item, i) => (
              <details
                key={i}
                className="group bg-white border border-border rounded-pill overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none text-ink font-medium hover:bg-lifted transition-colors">
                  {item.q}
                  <span className="ml-4 text-slate-gray group-open:rotate-45 transition-transform text-xl leading-none">+</span>
                </summary>
                <div className="px-6 pb-6 text-body text-slate-gray font-[450]">{item.a}</div>
              </details>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/hackpune/faq" className="text-link-blue text-sm hover:opacity-80">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-lifted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white border border-border rounded-lg p-12 lg:p-20 text-center shadow-elevated">
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
