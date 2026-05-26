"use client";

import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import { LinkButton } from "@/components/ui/Button";

export default function SpeakersPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-canvas py-20 lg:py-32">
        <div className="relative z-10 page-container">
          <p className="eyebrow mb-6">{t.speakers.hero.eyebrow}</p>
          <h1 className="text-h1 text-ink mb-6 whitespace-pre-line max-w-3xl">
            {t.speakers.hero.title}
          </h1>
          <p className="text-body text-slate-gray font-[450] max-w-2xl mb-10">
            {t.speakers.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Coming soon */}
      <section className="section-pad bg-lifted">
        <div className="page-container">
          <p className="eyebrow mb-4">SPEAKERS &amp; MENTORS</p>
          <div className="content-card content-card--center max-w-2xl mx-auto py-16">
            <span className="text-[11px] uppercase tracking-[0.6px] font-bold text-slate-gray mb-4">
              Status
            </span>
            <h2 className="text-h2 text-ink mb-4">Coming Soon</h2>
            <p className="text-body text-slate-gray font-[450] max-w-lg mx-auto">
              We&apos;re lining up speakers and mentors for HackPune 2026. Confirmations will be shared on the updates page as soon as they&apos;re official.
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

      {/* What mentors do */}
      <section className="section-pad bg-canvas">
        <div className="page-container">
          <p className="eyebrow mb-4">MENTORSHIP</p>
          <h2 className="text-h2 text-ink mb-14">What mentors do at HackPune.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Technical Unblocking", body: "Mentors sit with teams during the hackathon to help unblock technical challenges. No lectures - just practical help." },
              { title: "Product Feedback", body: "Experienced product leaders and founders give feedback on your approach, scope, and how to pitch your solution." },
              { title: "Pitch Coaching", body: "Before the final pitch, mentors review your deck and delivery. The best teams come prepared - mentors make them even better." },
            ].map((item, i) => (
              <div key={i} className="content-card card-hover h-full">
                <div className="w-1.5 h-6 bg-ink rounded-full mb-4" />
                <h3 className="text-h3 text-ink mb-3">{item.title}</h3>
                <p className="text-body text-slate-gray font-[450]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker CTA */}
      <section className="section-pad bg-lifted">
        <div className="page-container">
          <div className="content-card content-card--center shadow-elevated max-w-3xl mx-auto">
            <h2 className="text-h2 text-ink mb-5">
              {t.speakers.cta.title}
            </h2>
            <p className="text-body text-slate-gray font-[450] mb-10">{t.speakers.cta.subtitle}</p>
            <LinkButton href="/hackpune/apply#speaker" variant="primary" size="lg">
              {t.speakers.cta.button}
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}
