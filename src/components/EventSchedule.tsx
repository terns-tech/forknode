"use client";

import { useTranslation } from "@/contexts/LanguageContext";
import { LottieAnimation } from "@/components/LottieAnimation";

// Split the 6 items 3+3 for Day 1 / Day 2
function DayColumn({ day, items }: { day: string; items: { time: string; title: string; details: string[] }[] }) {
  return (
    <div className="flex-1 min-w-0">
      {/* Day header */}
      <div className="border-b border-ink pb-3 mb-0">
        <span className="text-[11px] uppercase tracking-[0.7px] font-bold text-ink">{day}</span>
      </div>

      {items.map((item, i) => (
        <div key={i} className="grid grid-cols-[100px_1fr] border-b border-border last:border-b-0">
          {/* Time */}
          <div className="py-4 pr-4 border-r border-border">
            <span className="text-[12px] font-semibold text-ink leading-snug block">
              {item.time.replace(/^(Sat|Sun) \d \w+\s·\s/, "")}
            </span>
          </div>

          {/* Content */}
          <div className="py-4 pl-5">
            <p className="text-sm font-semibold text-ink mb-1">{item.title}</p>
            {item.details.map((d, j) => (
              <p key={j} className="text-xs text-slate-gray font-[450] leading-relaxed mt-1">
                {d}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function EventSchedule() {
  const { t } = useTranslation();
  const { schedule } = t.hackpune;

  const day1 = schedule.items.slice(0, 3);
  const day2 = schedule.items.slice(3, 6);

  return (
    <section className="section-pad bg-canvas">
      <div className="page-container">
        <p className="eyebrow mb-4">{schedule.eyebrow}</p>
        <h2 className="text-h2 text-ink mb-3 max-w-3xl">{schedule.title}</h2>
        <p className="text-body text-slate-gray font-[450] max-w-2xl mb-12">
          {schedule.subtitle}
        </p>

        <div className="relative">
          <LottieAnimation
            src="/animations/boy-coding.json"
            variant="accent"
            className="pointer-events-none absolute -bottom-6 -right-2 z-10 hidden w-44 opacity-80 lg:block xl:w-52"
          />

        {/* Two-column table */}
        <div className="border border-border rounded-xl overflow-hidden">
          {/* Table header row */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border bg-soft-bone">
            <div className="px-6 py-4">
              <span className="text-[11px] uppercase tracking-[0.7px] font-bold text-slate-gray">Day 1</span>
              <p className="text-sm font-semibold text-ink mt-0.5">Saturday · 3 October 2026</p>
            </div>
            <div className="px-6 py-4">
              <span className="text-[11px] uppercase tracking-[0.7px] font-bold text-slate-gray">Day 2</span>
              <p className="text-sm font-semibold text-ink mt-0.5">Sunday · 4 October 2026</p>
            </div>
          </div>

          {/* Rows side-by-side */}
          <div className="divide-y divide-border">
            {[0, 1, 2].map((rowIdx) => {
              const left = day1[rowIdx];
              const right = day2[rowIdx];
              return (
                <div key={rowIdx} className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                  {/* Day 1 cell */}
                  <div className="grid grid-cols-[90px_1fr] divide-x divide-border">
                    <div className="px-4 py-5 flex items-start">
                      <span className="text-[12px] font-bold text-ink leading-tight">
                        {left.time.replace(/^Sat \d \w+ · /, "")}
                      </span>
                    </div>
                    <div className="px-5 py-5">
                      <p className="text-sm font-semibold text-ink mb-1.5">{left.title}</p>
                      {left.details.map((d, j) => (
                        <p key={j} className="text-xs text-slate-gray font-[450] leading-relaxed mt-1">
                          {d}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Day 2 cell */}
                  <div className="grid grid-cols-[90px_1fr] divide-x divide-border">
                    <div className="px-4 py-5 flex items-start">
                      <span className="text-[12px] font-bold text-ink leading-tight">
                        {right.time.replace(/^Sun \d \w+ · /, "")}
                      </span>
                    </div>
                    <div className="px-5 py-5">
                      <p className="text-sm font-semibold text-ink mb-1.5">{right.title}</p>
                      {right.details.map((d, j) => (
                        <p key={j} className="text-xs text-slate-gray font-[450] leading-relaxed mt-1">
                          {d}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </div>

        <LottieAnimation
          src="/animations/boy-coding.json"
          variant="accent"
          className="mx-auto mt-8 h-40 w-64 lg:hidden"
        />
      </div>
    </section>
  );
}
