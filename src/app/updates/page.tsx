"use client";

import { useTranslation } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/Badge";

const tagVariant: Record<string, "purple" | "blue" | "pink" | "orange" | "green"> = {
  Announcement: "purple",
  Ankündigung: "purple",
  Community: "blue",
  Partnership: "pink",
  Partnerschaft: "pink",
  Milestone: "green",
  Meilenstein: "green",
  Team: "orange",
};

export default function UpdatesPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-canvas py-20 lg:py-28 relative overflow-hidden">
        <div className="relative z-10 page-container">
          <p className="eyebrow mb-6">{t.updates.eyebrow}</p>
          <h1 className="text-h1 text-ink">
            {t.updates.title}
          </h1>
        </div>
      </section>

      {/* Updates list */}
      <section className="py-16 lg:py-24 bg-lifted">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

            <div className="flex flex-col gap-1">
              {t.updates.all.map((item, i) => (
                <div key={i} className="relative pl-8 pb-10">
                  {/* Dot */}
                  <div className="absolute left-[-5px] top-6 w-2.5 h-2.5 rounded-full bg-ink border-2 border-canvas" />

                  <article className="content-card card-hover h-full">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge variant={tagVariant[item.tag] ?? "default"}>{item.tag}</Badge>
                      <time className="text-xs text-slate-gray">{item.date}</time>
                    </div>
                    <h2 className="text-h3 text-ink mb-3">{item.title}</h2>
                    <p className="text-body text-slate-gray font-[450]">{item.body}</p>
                  </article>
                </div>
              ))}
            </div>

            {/* End of feed */}
            <div className="relative pl-8">
              <div className="absolute left-[-5px] top-3 w-2.5 h-2.5 rounded-full bg-border border-2 border-canvas" />
              <p className="text-xs text-slate-gray py-3">
                More updates coming soon — join{" "}
                <a
                  href={process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/bridgr"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link-blue hover:opacity-80 transition-colors"
                >
                  Discord
                </a>{" "}
                for real-time announcements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
