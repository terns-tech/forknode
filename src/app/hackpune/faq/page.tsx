"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import { LinkButton } from "@/components/ui/Button";
import { FAQSection } from "@/components/FAQSection";

export default function FAQPage() {
  const { t } = useTranslation();
  const discordUrl = process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/terns";

  return (
    <div className="min-h-screen">
      <section className="py-24 lg:py-32 bg-canvas">
        <div className="page-container">
          <FAQSection
            title={t.faq.title}
            subtitle={t.faq.subtitle}
            items={t.faq.items}
          />

          <div className="mt-16 lg:mt-20 faq-cta">
            <h3 className="text-h2 text-ink mb-3">Still have questions?</h3>
            <p className="text-body text-slate-gray font-[450] mb-6 max-w-md mx-auto">
              Join our Discord community for HackPune 2026 updates, or email us anytime.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center font-medium rounded-md px-6 py-2.5 text-[16px] tracking-[-0.32px] min-h-[44px] bg-ink text-canvas border border-ink hover:opacity-90 transition-opacity"
              >
                Join Discord
              </a>
              <LinkButton href="mailto:hello@terns.tech" variant="secondary" size="md">
                Email us
              </LinkButton>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/hackpune/apply"
              className="inline-flex items-center gap-2 text-link-blue hover:opacity-80 transition-colors font-medium"
            >
              Ready to apply? <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
