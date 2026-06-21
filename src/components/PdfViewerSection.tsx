"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

const PDFS = [
  {
    id: "hackers",
    label: "Hackers",
    name: "Hacker Pitch Deck",
    pdf: "/pitches/Pitchdeck_Terns_hackers.pdf",
    filename: "HackPune_2026_Hackers.pdf",
    thumb: "/pitches/thumb_hackers-1.png",
    pages: [
      "/pitches/pages_hackers-1.png",
      "/pitches/pages_hackers-2.png",
      "/pitches/pages_hackers-3.png",
      "/pitches/pages_hackers-4.png",
      "/pitches/pages_hackers-5.png",
      "/pitches/pages_hackers-6.png",
      "/pitches/pages_hackers-7.png",
    ],
  },
];

const SWIPE_THRESHOLD = 50;

export function PdfViewerSection() {
  const [activePdfIdx, setActivePdfIdx] = useState(0);
  const [pageIdx, setPageIdx] = useState(0);
  const [direction, setDirection] = useState(0);

  const activePdf = PDFS[activePdfIdx];
  const totalPages = activePdf.pages.length;

  const goToPage = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(totalPages - 1, next));
      setDirection(clamped > pageIdx ? 1 : -1);
      setPageIdx(clamped);
    },
    [pageIdx, totalPages]
  );

  const switchPdf = (idx: number) => {
    setActivePdfIdx(idx);
    setPageIdx(0);
    setDirection(0);
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) goToPage(pageIdx + 1);
    else if (info.offset.x > SWIPE_THRESHOLD) goToPage(pageIdx - 1);
  };

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 48 : -48 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -48 : 48 }),
  };

  return (
    <section className="section-pad bg-lifted" id="pitch-decks">
      <div className="page-container mb-6">
        <p className="eyebrow mb-4">PITCH DECKS</p>
        <h2 className="text-h2 text-ink max-w-2xl">
          Explore our decks. Swipe through every page.
        </h2>
      </div>

      <div className="page-container">
        <div className="relative w-full">
          <div className="relative w-full overflow-hidden rounded-xl border border-border bg-surface shadow-elevated">
            <div className="relative w-full aspect-[3000/1688]">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={`${activePdfIdx}-${pageIdx}`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing select-none"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.1}
                  onDragEnd={onDragEnd}
                >
                  <Image
                    src={activePdf.pages[pageIdx]}
                    alt={`${activePdf.name}, page ${pageIdx + 1}`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={pageIdx === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {pageIdx > 0 && (
                <button
                  type="button"
                  onClick={() => goToPage(pageIdx - 1)}
                  aria-label="Previous page"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
              )}
              {pageIdx < totalPages - 1 && (
                <button
                  type="button"
                  onClick={() => goToPage(pageIdx + 1)}
                  aria-label="Next page"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              )}

              <div className="absolute top-3 right-3 z-10 bg-ink/70 border border-white/15 text-white text-[11px] font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                {pageIdx + 1} / {totalPages}
              </div>
            </div>
          </div>

            <div className="mt-6 flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-2.5 w-full">
              {PDFS.map((deck, i) => (
                <button
                  key={deck.id}
                  type="button"
                  onClick={() => switchPdf(i)}
                  aria-label={`Switch to ${deck.name}`}
                  aria-pressed={i === activePdfIdx}
                  className={`flex flex-col text-left w-full max-w-[168px] sm:w-[168px] shrink-0 rounded-md overflow-hidden border-2 transition-all duration-200 focus:outline-none ${
                    i === activePdfIdx
                      ? "border-ink shadow-md"
                      : "border-border opacity-70 hover:opacity-100 hover:border-ink/50"
                  }`}
                >
                  <div className="relative w-full aspect-[16/10] bg-[#0a0a09]">
                    <Image
                      src={deck.thumb}
                      alt={deck.name}
                      fill
                      className="object-cover object-top"
                      sizes="168px"
                    />
                  </div>
                  <div className={`px-2 py-1.5 ${i === activePdfIdx ? "bg-ink text-canvas" : "bg-surface text-ink"}`}>
                    <p className="text-[10px] font-semibold leading-snug">{deck.name}</p>
                    <p className={`text-[9px] mt-0.5 ${i === activePdfIdx ? "text-canvas/70" : "text-slate-gray"}`}>
                      {deck.pages.length} pages
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between gap-4 flex-wrap w-full">
              <div className="flex items-center gap-1.5">
                {activePdf.pages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goToPage(i)}
                    aria-label={`Go to page ${i + 1}`}
                    className={`rounded-full transition-all duration-150 ${
                      i === pageIdx
                        ? "w-4 h-2 bg-ink"
                        : "w-2 h-2 bg-ink/25 hover:bg-ink/50"
                    }`}
                  />
                ))}
              </div>

              <a
                href={activePdf.pdf}
                download={activePdf.filename}
                className="inline-flex items-center gap-2 bg-ink text-canvas text-sm font-semibold px-5 py-2.5 rounded-md hover:opacity-80 transition-opacity shrink-0"
              >
                <Download size={15} />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
