"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FAQItem = {
  q: string;
  a: string;
};

type FAQSectionProps = {
  title: string;
  subtitle?: string;
  items: FAQItem[];
  viewAllHref?: string;
  viewAllLabel?: string;
  className?: string;
};

export function FAQSection({
  title,
  subtitle,
  items,
  viewAllHref,
  viewAllLabel = "View all FAQs →",
  className,
}: FAQSectionProps) {
  const midpoint = Math.ceil(items.length / 2);
  const columns = [items.slice(0, midpoint), items.slice(midpoint)];

  return (
    <div className={cn("faq-section", className)}>
      <div className="faq-section__header">
        <h2 className="text-h2 text-ink mb-4">{title}</h2>
        {subtitle ? (
          <p className="text-body text-slate-gray font-[450] max-w-2xl mx-auto">{subtitle}</p>
        ) : null}
      </div>

      <div className="faq-grid">
        {columns.map((colItems, colIndex) => (
          <div key={colIndex} className="faq-col">
            {colItems.map((item, index) => (
              <details key={index} className="faq-item">
                <summary>
                  <span className="faq-question">{item.q}</span>
                  <ChevronDown
                    size={18}
                    strokeWidth={1.75}
                    className="faq-chevron shrink-0 text-slate-gray"
                    aria-hidden
                  />
                </summary>
                <div className="faq-answer">{item.a}</div>
              </details>
            ))}
          </div>
        ))}
      </div>

      {viewAllHref ? (
        <div className="faq-section__footer">
          <Link href={viewAllHref} className="text-link-blue text-sm hover:opacity-80 transition-opacity">
            {viewAllLabel}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
