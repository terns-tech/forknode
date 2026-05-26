"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { TernsLogo } from "@/components/TernsLogo";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/ternstech", icon: "in" },
  { label: "X", href: "https://x.com/ternstech", icon: "𝕏" },
  { label: "Discord", href: "https://discord.gg/terns", icon: "D" },
  { label: "GitHub", href: "https://github.com/terns-tech", icon: "G" },
];

export function Footer() {
  const { t } = useTranslation();

  const discordUrl = process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/terns";
  const slackUrl = process.env.NEXT_PUBLIC_SLACK_URL || "https://join.slack.com/terns";

  const cols = [
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
        { label: t.footer.resources[2], href: slackUrl, external: true },
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 pb-10 sm:pb-12 lg:pt-24 lg:pb-16">
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
                    {"external" in link && link.external ? (
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
          <div className="footer-contact-grid">
            {[
              { label: "General", email: "hello@terns.tech" },
              { label: "Partnerships", email: "partnerships@terns.tech" },
              { label: "Events", email: "events@terns.tech" },
              { label: "Support", email: "support@terns.tech" },
              { label: "Founders", email: "founders@terns.tech" },
            ].map((item) => (
              <div key={item.email} className="flex items-center gap-2">
                <span className="text-[11px] footer-faint uppercase tracking-wider">{item.label}</span>
                <a href={`mailto:${item.email}`} className="text-[13px] font-[450] footer-body footer-link">
                  {item.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t footer-divider flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <p className="text-xs footer-subtle">{t.footer.copyright}</p>
            <p className="text-xs footer-faint">{t.footer.madeIn}</p>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="footer-icon-btn w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
