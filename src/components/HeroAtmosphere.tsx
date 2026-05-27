"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Full-bleed ambient lighting for the home hero.
 * Sits behind nav (z-50) and hero content (z-10) via parent stacking.
 * On mobile or when reduced-motion is preferred, orb animations are skipped.
 */
export function HeroAtmosphere() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="hero-atmosphere" aria-hidden>
      {/* Primary center wash - extends through navbar zone */}
      <div className="hero-glow-primary absolute -top-[35%] left-1/2 -translate-x-1/2 w-[140%] max-w-[1400px] aspect-[4/3] rounded-full blur-[100px] opacity-90" />

      {/* Secondary accents */}
      <div className="hero-glow-secondary absolute -top-[10%] -left-[15%] w-[55%] max-w-[640px] aspect-square rounded-full blur-[90px]" />
      <div className="hero-glow-tertiary absolute -top-[5%] -right-[10%] w-[50%] max-w-[560px] aspect-square rounded-full blur-[80px]" />

      {/* Soft horizon band behind headline area */}
      <div className="hero-glow-horizon absolute top-[8%] left-1/2 -translate-x-1/2 w-[80%] h-[45%] rounded-full blur-[120px] opacity-70" />

      {/* Top-edge diffusion into canvas/black */}
      <div className="hero-vignette-top absolute inset-x-0 top-0 h-[28%] min-h-[140px]" />

      {/* Corner vignettes for cinematic depth */}
      <div className="hero-vignette-edge absolute inset-y-0 left-0 w-[18%] max-w-[220px]" />
      <div className="hero-vignette-edge absolute inset-y-0 right-0 w-[18%] max-w-[220px] scale-x-[-1]" />

      {/* Animated orbs — static on mobile / reduced-motion */}
      <motion.div
        className="hero-orb absolute top-[2%] left-[5%] w-[min(520px,70vw)] h-[min(520px,70vw)] rounded-full blur-2xl opacity-80"
        animate={shouldReduceMotion ? false : { y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="hero-orb hero-orb-alt absolute top-[0%] right-[0%] w-[min(440px,60vw)] h-[min(440px,60vw)] rounded-full blur-2xl opacity-60"
        animate={shouldReduceMotion ? false : { y: [0, -16, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 9, ease: "easeInOut", repeat: Infinity, delay: 2 }}
      />
    </div>
  );
}
