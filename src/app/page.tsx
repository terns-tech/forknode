"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, Zap, MessageCircle } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import { LinkButton } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeroAtmosphere } from "@/components/HeroAtmosphere";
import { StoryVisual } from "@/components/StoryVisual";
import { TeamProfiles } from "@/components/TeamProfiles";
import { EventAssetsCarousel } from "@/components/EventAssetsCarousel";

/* ─── Animation Variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Scroll-Reveal Section Wrapper ─────────────────────────────────────── */
function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}


/* ─── Main Page ─────────────────────────────────────────────────────────── */
export default function HomePage() {
  const { t } = useTranslation();
  const discordUrl = process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/terns";
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches || "ontouchstart" in window);
  }, []);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], isMobile || shouldReduceMotion ? ["0%", "0%"] : ["0%", "20%"]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (isMobile || shouldReduceMotion) return;
    const handler = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight;
      mouseX.set(x * 30);
      mouseY.set(y * 20);
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [mouseX, mouseY, isMobile, shouldReduceMotion]);

  return (
    <div className="min-h-screen">

      {/* ─── HERO ───────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative -mt-24 overflow-hidden bg-canvas"
      >
        <HeroAtmosphere />

        <div className="relative z-10 page-container pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-44 lg:pb-20">

          {/* Hero text */}
          <motion.div
            className="max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="eyebrow mb-6">
              {t.home.hero.eyebrow}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="text-h1 text-ink mb-7 whitespace-pre-line leading-[1.02]"
            >
              {t.home.hero.title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-body text-slate-gray max-w-2xl mb-10 font-[450]"
            >
              {t.home.hero.subtitle}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <LinkButton href="/hackpune" variant="primary" size="lg">
                {t.home.hero.ctaPrimary}
                <ArrowRight size={18} className="ml-2" />
              </LinkButton>
              <button
                type="button"
                disabled
                aria-disabled="true"
                title="Coming soon - community channel not live yet"
                className="relative inline-flex items-center justify-center font-medium rounded-md px-7 py-3 text-[16px] tracking-[-0.32px] min-h-[48px] bg-surface text-ink border-[1.5px] border-ink opacity-40 blur-[0.4px] cursor-not-allowed select-none"
              >
                <MessageCircle size={16} className="mr-2" />
                {t.home.hero.ctaSecondary}
                <span className="ml-3 text-[10px] uppercase tracking-[0.6px] font-bold bg-ink/10 border border-ink/25 rounded-pill px-2 py-0.5">
                  Coming Soon
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* ─── CINEMATIC HERO FRAME (wallpaper.jpg) ─────────────────────── */}
          <motion.div
            className="mt-14 relative"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
            style={{ y: heroY }}
          >
            <div className="hero-frame relative overflow-hidden" style={{ height: "clamp(340px, 56vh, 680px)" }}>
              {/* Parallax image via motion */}
              <motion.div
                className="absolute inset-0"
                style={{
                  x: isMobile || shouldReduceMotion ? 0 : smoothX,
                  y: isMobile || shouldReduceMotion ? 0 : smoothY,
                  scale: 1.08,
                }}
              >
                <Image
                  src="/wallpaper.jpg"
                  alt="Terns - Global Hackathon Ecosystem"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 1280px"
                />
              </motion.div>

              {/* Dark overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/30 to-transparent" />

              {/* Bottom-right: badge */}
              <motion.div
                className="absolute bottom-6 right-6 hidden md:flex"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="flex items-center gap-2 bg-surface/10 backdrop-blur-sm border border-white/20 rounded-pill px-4 py-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-xs text-white font-semibold uppercase tracking-[0.5px]">
                    Save the Date · HackPune 2026 · 3-4 Oct (Sat & Sun)
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Decorative orbital arc below the frame */}
            <div className="arc-divider mt-0 opacity-40" />
          </motion.div>
        </div>
      </section>

      {/* ─── BRAND STORY: WHY TERNS ─────────────────────────────────────── */}
      <section className="section-pad bg-lifted relative overflow-hidden">
        {/* Ghost watermark */}
        <div
          className="ghost-headline absolute -top-4 left-0 opacity-60 whitespace-nowrap pointer-events-none select-none"
          aria-hidden
        >
          TERNS
        </div>

        <div className="page-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="section-copy">
              <Reveal>
                <p className="eyebrow mb-4">THE STORY</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-h2 text-ink mb-8">
                  We chose the name Terns<br />for a reason.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="space-y-5 text-body text-slate-gray font-[450]">
                  <p>
                    Arctic Terns travel <strong className="text-ink font-medium">70,000 km every year</strong> - the longest migration of any living creature. They cross entire oceans, navigate by the stars, and always find their way. They never stay in one place. But wherever they land, they build a community.
                  </p>
                  <p>
                    We are builders who cross borders. We have lived in Pune and Hamburg, built AI systems and startups, stayed up all night hacking on ideas. We are Terns.
                  </p>
                  <p>
                    And we built this platform for everyone like us - the developers, designers, and founders who know that the best things get built when the right people find each other, anywhere in the world.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-ink font-medium text-[15px] tracking-[-0.3px] hover:opacity-70 transition-opacity"
                  >
                    Meet the team <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <StoryVisual />
            </Reveal>
          </div>
        </div>
      </section>

      <TeamProfiles />

      {/* ─── GLOBAL COMMUNITY ───────────────────────────────────────────── */}
      <section className="section-pad bg-lifted">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <p className="eyebrow mb-4">{t.home.community.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-h2 text-ink mb-6">{t.home.community.title}</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-body text-slate-gray font-[450] mb-8">
                  {t.home.community.subtitle}
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="mb-8 inline-flex flex-col gap-1 border-l-2 border-[#621bff] pl-4">
                  <span className="text-[11px] uppercase tracking-[0.6px] font-bold text-[#621bff]">
                    Save the Date
                  </span>
                  <span className="text-[15px] font-medium text-ink tracking-[-0.2px]">
                    HackPune 2026 - 3 &amp; 4 October 2026 (Sat &amp; Sun) · Pune, India
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={discordUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center font-medium rounded-md px-7 py-3 text-[16px] tracking-[-0.32px] min-h-[48px] bg-ink text-canvas border border-ink hover:opacity-90 transition-opacity"
                  >
                    <MessageCircle size={18} className="mr-2" />
                    {t.home.community.discord}
                  </a>
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    title="Slack is deprecated — we moved to Discord"
                    className="relative inline-flex items-center justify-center font-medium rounded-md px-7 py-3 text-[16px] tracking-[-0.32px] min-h-[48px] bg-surface text-ink border-[1.5px] border-ink opacity-40 blur-[0.4px] cursor-not-allowed select-none"
                  >
                    <Zap size={18} className="mr-2" />
                    {t.home.community.slack}
                    <span className="ml-3 text-[10px] uppercase tracking-[0.6px] font-bold bg-ink/10 border border-ink/25 rounded-pill px-2 py-0.5">
                      Deprecated
                    </span>
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Stats grid */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "24h", label: "Nonstop Hacking", sub: "Per event, no sleeping" },
                  { value: "2026", label: "HackPune", sub: "Flagship event, Pune India" },
                  { value: "Hamburg", label: "Germany", sub: "Where Terns was born" },
                  { value: "Pune", label: "India", sub: "Our first reach - flagship city" },
                ].map((stat, i) => (
                  <Reveal key={stat.label} delay={0.1 * i}>
                    <div className="content-card card-hover">
                      <div className="text-3xl font-medium text-ink mb-1 tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-sm font-semibold text-ink mb-1">{stat.label}</div>
                      <div className="text-xs text-slate-gray font-[450]">{stat.sub}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── PUNE GALLERY ───────────────────────────────────────────────── */}
      <section className="section-pad bg-canvas">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="section-copy">
              <Reveal>
                <p className="eyebrow mb-4">{t.home.pune.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-h2 text-ink mb-6">{t.home.pune.title}</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-body text-slate-gray font-[450] mb-10">{t.home.pune.subtitle}</p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="grid grid-cols-2 gap-3">
                  {t.home.pune.facts.map((fact, i) => (
                    <div key={i} className="content-card content-card--compact">
                      <div className="text-2xl font-medium text-ink mb-1">{fact.stat}</div>
                      <div className="text-sm text-slate-gray font-[450]">{fact.label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Photo mosaic with actual pune images */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-3 min-h-[320px] lg:min-h-[400px] auto-rows-fr">
                <div className="relative rounded-lg overflow-hidden row-span-2">
                  <Image
                    src="/pune1.jpg"
                    alt="Pune, India"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="300px"
                  />
                  <div className="absolute inset-0 bg-surface/5" />
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/pune2.jpg"
                    alt="Pune tech community"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="200px"
                  />
                  <div className="absolute inset-0 bg-surface/5" />
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/pune3.jpg"
                    alt="Pune builders"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="200px"
                  />
                  <div className="absolute inset-0 bg-surface/5" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── EVENT ASSETS ─────────────────────────────────────────────── */}
      <EventAssetsCarousel />

      {/* ─── UPDATES ────────────────────────────────────────────────────── */}
      <section className="section-pad bg-canvas">
        <div className="page-container">
          <Reveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="eyebrow mb-4">{t.home.updates.eyebrow}</p>
                <h2 className="text-h2 text-ink">{t.home.updates.title}</h2>
              </div>
              <Link href="/updates" className="hidden md:inline-flex text-sm text-link-blue hover:opacity-80 transition-colors">
                {t.home.updates.viewAll}
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.home.updates.items.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <motion.div
                  className="content-card card-hover h-full"
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{item.tag}</Badge>
                    <span className="text-xs text-slate-gray">{item.date}</span>
                  </div>
                  <h3 className="text-h3 text-ink leading-snug">{item.title}</h3>
                  <p className="text-body text-slate-gray font-[450] flex-1">{item.body}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <Link href="/updates" className="text-sm text-link-blue">
              {t.home.updates.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ──────────────────────────────────────────────────── */}
      <section className="section-pad bg-ink relative overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-ink/10 rounded-full blur-3xl pointer-events-none" />

        <div className="page-container text-center relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-canvas/10 border border-canvas/15 rounded-pill px-5 py-2 mb-8">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-xs text-white font-bold uppercase tracking-[0.56px]">
                Save the Date · HackPune 2026 · 3-4 Oct (Sat &amp; Sun)
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-h2 text-white mb-6 max-w-2xl mx-auto">
              Ready to take flight?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-body text-white font-[450] max-w-xl mx-auto mb-10">
              Join Terns - a global hackathon ecosystem built for builders, founders, hackers, and creators. Your next great project, your next co-founder, your next community - all in one place.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4 justify-center">
              <LinkButton href="/hackpune/apply" variant="primary" size="lg">
                Apply for HackPune
                <ArrowRight size={18} className="ml-2" />
              </LinkButton>
              <a
                href="mailto:hello@terns.tech"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-canvas/25 text-canvas text-[16px] font-medium tracking-[-0.32px] hover:bg-canvas/10 transition-all"
              >
                hello@terns.tech
              </a>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
