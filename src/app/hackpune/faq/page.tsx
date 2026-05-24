"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import { LinkButton } from "@/components/ui/Button";

export default function FAQPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-canvas py-20 lg:py-28 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <p className="eyebrow mb-6">{t.faq.eyebrow}</p>
          <h1 className="text-h1 text-ink mb-6">
            {t.faq.title}
          </h1>
        </div>
      </section>

      {/* FAQ items */}
      <section className="py-16 lg:py-24 bg-lifted">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col gap-3">
            {t.faq.items.map((item, i) => (
              <details
                key={i}
                className="group bg-white border border-border rounded-pill overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-ink font-medium pr-4">{item.q}</span>
                  <span className="shrink-0 ml-4 text-slate-gray group-open:rotate-45 transition-transform text-xl leading-none">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-body text-slate-gray font-[450] border-t border-border pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-16 text-center bg-white border border-border rounded-pill p-10">
            <h3 className="text-h2 text-ink mb-3">Still have questions?</h3>
            <p className="text-body text-slate-gray font-[450] mb-6">
              Join the Discord and ask the community — or drop us an email.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <LinkButton href={process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/bridgr"} variant="primary" size="md">
                Join Discord
              </LinkButton>
              <LinkButton href="mailto:hello@bridgr.io" variant="secondary" size="md">
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
