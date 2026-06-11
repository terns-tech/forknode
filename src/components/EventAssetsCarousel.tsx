"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

const ASSETS = [
  {
    id: "poster",
    title: "HackPune 2026, Poster",
    src: "/pitches/HackPune_2026_Poster_EN.png",
    filename: "HackPune_2026_Poster.png",
  },
  {
    id: "onepager",
    title: "HackPune 2026, One-Pager",
    src: "/pitches/HackPune_2026_OnePager_EN.pptx.png",
    filename: "HackPune_2026_OnePager.png",
  },
];

const SWIPE_THRESHOLD = 60;

export function EventAssetsCarousel() {
  const [index, setIndex] = useState(0);
  const asset = ASSETS[index];

  const goTo = (next: number) => {
    setIndex((next + ASSETS.length) % ASSETS.length);
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) goTo(index + 1);
    else if (info.offset.x > SWIPE_THRESHOLD) goTo(index - 1);
  };

  return (
    <section className="section-pad bg-lifted overflow-hidden">
      <div className="page-container mb-8">
        <p className="eyebrow mb-4">EVENT ASSETS</p>
        <h2 className="text-h2 text-ink max-w-2xl">
          Poster &amp; one-pager, swipe to explore.
        </h2>
      </div>

      <div className="page-container">
        <div className="relative w-full">
          <div className="relative w-full overflow-hidden rounded-xl border border-border bg-[#0a0a09] shadow-elevated">
            <div className="relative w-full" style={{ minHeight: "min(78vh, 860px)" }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={asset.id}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.12}
                  onDragEnd={onDragEnd}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <Image
                    src={asset.src}
                    alt={asset.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority={index === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Nav arrows */}
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous asset"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-surface/90 border border-border flex items-center justify-center text-ink hover:bg-surface transition-colors shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next asset"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-surface/90 border border-border flex items-center justify-center text-ink hover:bg-surface transition-colors shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {ASSETS.map((a, i) => (
              <button
                key={a.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show ${a.title}`}
                className={`h-2 rounded-full transition-all duration-200 ${
                  i === index ? "w-6 bg-ink" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>

        </div>

        {/* Bottom bar, title + download only */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-ink">{asset.title}</p>
            <p className="text-xs text-slate-gray mt-1">
              {index + 1} of {ASSETS.length} · swipe or use arrows
            </p>
          </div>
          <a
            href={asset.src}
            download={asset.filename}
            className="inline-flex items-center justify-center gap-2 bg-ink text-canvas text-sm font-semibold px-6 py-3 rounded-md hover:opacity-85 transition-opacity shrink-0"
          >
            <Download size={16} />
            Download PNG
          </a>
        </div>
      </div>
    </section>
  );
}
