"use client";

import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const DECKS = [
  {
    id: "hackers",
    title: "Hacker Pitch Deck",
    description:
      "160 Indian builders. 8 German company challenges. 24 hours in Pune to ship an AI prototype, and meet mentors, judges, and recruiters.",
    thumb: "/pitches/thumb_hackers-1.png",
    pdf: "/pitches/Pitchdeck_Terns_hackers.pdf",
    filename: "HackPune_2026_Hackers.pdf",
  },
  {
    id: "partners",
    title: "Partners & Collaborations",
    description:
      "An Indo-German AI bridge in Pune, built for institutions, sponsors, and ecosystem partners who want talent discovery, prototypes, and long-term collaboration.",
    thumb: "/pitches/thumb_partners-1.png",
    pdf: "/pitches/Pitchdeck_Terns_partners.pdf",
    filename: "HackPune_2026_Partners.pdf",
  },
  {
    id: "startup",
    title: "Startup & Company Brief",
    description:
      "24 hours of applied AI and agentic prototyping on your real problem, delivered by 160 curated Indian builders in Pune.",
    thumb: "/pitches/thumb_startup-1.png",
    pdf: "/pitches/Pitchdeck_Terns_startup.pdf",
    filename: "HackPune_2026_Startup.pdf",
  },
];

interface DeckCardProps {
  title: string;
  description: string;
  thumb: string;
  pdf: string;
  filename: string;
  index: number;
}

function DeckCard({ title, description, thumb, pdf, filename, index }: DeckCardProps) {
  return (
    <motion.div
      className="group relative flex flex-col rounded-xl overflow-hidden border border-border bg-surface shadow-sm hover:shadow-elevated transition-all duration-300"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
    >
      <div className="relative w-full overflow-hidden bg-[#0a0a09]" style={{ aspectRatio: "16/9" }}>
        <Image
          src={thumb}
          alt={title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 className="text-h3 text-ink mb-2">{title}</h3>
          <p className="text-sm text-slate-gray font-[450] leading-relaxed">{description}</p>
        </div>

        <div className="mt-auto pt-3 border-t border-border flex items-center justify-between gap-3">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-link-blue font-medium hover:opacity-75 transition-opacity"
          >
            <ExternalLink size={12} />
            Open in browser
          </a>
          <a
            href={pdf}
            download={filename}
            className="inline-flex items-center gap-1.5 bg-ink text-canvas text-xs font-semibold px-4 py-2 rounded-md hover:opacity-80 transition-opacity"
          >
            <Download size={12} />
            Download PDF
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function PitchDecksSection() {
  return (
    <section className="section-pad bg-canvas" id="pitch-decks">
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-14"
        >
          <p className="eyebrow mb-4">DOWNLOADS & PITCH DECKS</p>
          <h2 className="text-h2 text-ink mb-4 max-w-2xl">
            Everything you need, ready to share.
          </h2>
          <p className="text-body text-slate-gray font-[450] max-w-xl">
            Download the pitch deck that matches your role, whether you&apos;re a hacker looking to join, a company with a challenge, or a German startup seeking AI talent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DECKS.map((deck, i) => (
            <DeckCard key={deck.id} {...deck} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
