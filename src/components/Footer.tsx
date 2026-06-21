"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { TernsLogo } from "@/components/TernsLogo";

type FooterLink =
  | { label: string; href: string; external?: boolean }
  | { label: string; comingSoon: true };

export function Footer() {
  const { t } = useTranslation();

  const discordUrl = process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/terns";

  const cols: { label: string; links: FooterLink[] }[] = [
    {
      label: t.footer.links.company,
      links: [
        { label: t.footer.company[0], href: "/about" },
        { label: t.footer.company[1], href: "/updates" },
        { label: t.footer.company[2], href: "mailto:hello@terns.tech" },
      ],
    },
    {
      label: t.footer.links.events,
      links: [
        { label: t.footer.events[0], href: "/hackpune" },
        { label: t.footer.events[1], href: "/hackpune/partners" },
        { label: t.footer.events[2], href: "/hackpune/speakers" },
        { label: t.footer.events[3], href: "/hackpune/apply" },
      ],
    },
    {
      label: t.footer.links.resources,
      links: [
        { label: t.footer.resources[0], href: "/hackpune/faq" },
        { label: t.footer.resources[1], href: discordUrl, external: true },
        { label: t.footer.resources[2], comingSoon: true },
      ],
    },
    {
      label: t.footer.links.legal,
      links: [
        { label: t.footer.legal[0], href: "/privacy" },
        { label: t.footer.legal[1], href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="footer-surface">
      <div className="page-container pt-12 sm:pt-16 pb-10 sm:pb-12 lg:pt-24 lg:pb-16">
        <div className="mb-14">
          <TernsLogo
            size="md"
            iconVariant="white"
            nameClassName="text-[18px] opacity-90"
            className="mb-6"
          />

          <h2 className="footer-heading text-2xl lg:text-[32px] font-medium tracking-[-0.64px] mb-3 max-w-xl leading-tight">
            {t.footer.tagline}
          </h2>
          <p className="text-sm footer-muted max-w-sm">hello@terns.tech</p>
        </div>

        <div className="arc-divider mb-12 opacity-20" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
          {cols.map((col) => (
            <div key={col.label}>
              <p className="text-[11px] font-bold uppercase tracking-[0.56px] footer-subtle mb-4">
                {col.label}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"comingSoon" in link ? (
                      <span
                        title="Coming soon - channel not live yet"
                        className="text-[14px] font-[450] footer-link opacity-40 blur-[0.4px] cursor-not-allowed select-none"
                      >
                        {link.label}
                      </span>
                    ) : link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] font-[450] footer-link"
                      >
                        {link.label} ↗
                      </a>
                    ) : (
                      <Link href={link.href} className="text-[14px] font-[450] footer-link">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-12 content-card content-card--on-dark content-card--compact">
          <p className="text-[11px] font-bold uppercase tracking-[0.56px] footer-subtle mb-3">
            Contact
          </p>
          <a href="mailto:hello@terns.tech" className="text-[13px] font-[450] footer-body footer-link">
            hello@terns.tech
          </a>
        </div>

        <div className="pt-6 border-t footer-divider flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <p className="text-xs footer-subtle">{t.footer.copyright}</p>
          <p className="text-xs footer-faint">{t.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
