"use client";

import { useTranslation } from "@/contexts/LanguageContext";

export function EventSchedule() {
  const { t } = useTranslation();
  const { schedule } = t.hackpune;

  return (
    <section className="section-pad bg-canvas">
      <div className="page-container">
        <p className="eyebrow mb-4">{schedule.eyebrow}</p>
        <h2 className="text-h2 text-ink mb-5 max-w-3xl">{schedule.title}</h2>
        <p className="text-body text-slate-gray font-[450] max-w-2xl mb-16 lg:mb-20">
          {schedule.subtitle}
        </p>

        <div className="event-schedule">
          <div className="event-schedule__track" aria-hidden />
          <div className="event-schedule__grid">
            {schedule.items.map((item, i) => (
              <article key={i} className="event-schedule__item">
                <p className="event-schedule__time">{item.time}</p>
                <div className="event-schedule__marker-wrap">
                  <span className="event-schedule__marker" />
                </div>
                <div className="event-schedule__body">
                  <h3 className="text-h3 text-ink mb-3">{item.title}</h3>
                  <ul className="event-schedule__details">
                    {item.details.map((detail, j) => (
                      <li key={j}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
