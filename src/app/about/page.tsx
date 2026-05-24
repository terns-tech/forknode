"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, Globe, Zap, Users, Star } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import { LinkButton } from "@/components/ui/Button";

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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function FounderCard({
  name,
  bio,
  highlights,
  image,
  linkedin,
  email,
  delay = 0,
  reverse = false,
}: {
  name: string;
  bio: string;
  highlights: [string, string];
  image: string;
  linkedin: string;
  email: string;
  delay?: number;
  reverse?: boolean;
}) {
  return (
    <Reveal delay={delay}>
      <motion.article
        className={`group flex flex-col sm:flex-row gap-7 sm:gap-10 p-7 sm:p-9 bg-surface border border-border rounded-lg card-hover ${
          reverse ? "sm:flex-row-reverse" : ""
        }`}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div className="relative shrink-0 mx-auto sm:mx-0">
          <div className="absolute -inset-3 rounded-[28px] bg-ink/[0.04] dark:bg-ink/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-[148px] h-[184px] sm:w-[168px] sm:h-[208px] rounded-[22px] overflow-hidden ring-1 ring-border shadow-sm">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="168px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-60" />
          </div>
        </div>

        <div className="flex-1 min-w-0 flex flex-col">
          <div className={`flex items-start justify-between gap-4 mb-4 ${reverse ? "sm:flex-row-reverse" : ""}`}>
            <div className={reverse ? "sm:text-right" : ""}>
              <p className="eyebrow mb-2 text-slate-gray/80">Co-founder</p>
              <h3 className="text-[22px] sm:text-[24px] font-semibold text-ink tracking-[-0.48px] leading-tight">
                {name}
              </h3>
            </div>
            <div className="flex gap-2 shrink-0">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on LinkedIn`}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-ink/60 hover:text-ink hover:bg-lifted transition-colors"
              >
                <Linkedin size={15} />
              </a>
              <a
                href={`mailto:${email}`}
                aria-label={`Email ${name}`}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-ink/60 hover:text-ink hover:bg-lifted transition-colors"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          <p className={`text-body text-slate-gray font-[450] leading-relaxed mb-5 ${reverse ? "sm:text-right" : ""}`}>
            {bio}
          </p>

          <div className={`flex flex-wrap gap-2 mt-auto ${reverse ? "sm:justify-end" : ""}`}>
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center text-[13px] text-slate-gray font-[450] leading-snug bg-lifted border border-border rounded-pill px-3.5 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

const founders = [
  {
    name: "Omkar Kondhalkar",
    image: "/omkar_profile.jpg",
    linkedin: "https://linkedin.com/in/omkar-kondhalkar",
    email: "omkar@terns.tech",
    bio: "AI engineer building computer vision for humanitarian landmine detection. Bridges product vision with deep technical execution.",
    highlights: [
      "Computer Vision & AI Engineering at reGround.systems, Hamburg",
      "MSc Data Science & AI, Universität Hamburg",
    ] as [string, string],
  },
  {
    name: "Yash Pawar",
    image: "/yash_profile.jpeg",
    linkedin: "https://linkedin.com/in/yash-pawar",
    email: "yash.pawar@terns.tech",
    bio: "Runs India's national AI supercomputing infrastructure. Builds LLM systems at scale and keeps complex operations moving.",
    highlights: [
      "AI & HPC Engineer, C-DAC PARAM National Supercomputing Facility",
      "Post-Graduate Diploma in AI & Data Analytics, CDAC Pune (88.2%)",
    ] as [string, string],
  },
  {
    name: "Elias Tilmes",
    image: "/elias_profile.jpeg",
    linkedin: "https://linkedin.com/in/elias-tilmes",
    email: "elias@terns.tech",
    bio: "Serial entrepreneur with a gift for partnerships and momentum. Turns vision into deals, events, and community energy.",
    highlights: [
      "Economics, University of Hamburg",
      "Co-founder, Pettoo & MRBL Studios",
    ] as [string, string],
  },
];

export default function AboutPage() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Zap,
      title: "Authenticity",
      body: "No fake problems. No participation trophies. Real challenges from real companies with real stakes.",
    },
    {
      icon: Star,
      title: "Quality over scale",
      body: "We'd rather have 300 focused builders than 3,000 distracted ones. Curation is our superpower.",
    },
    {
      icon: Users,
      title: "Community forever",
      body: "The event is 24 hours. The community is permanent.",
    },
    {
      icon: Globe,
      title: "Globally rooted",
      body: "From Pune to Hamburg, we build for builders wherever they are.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-canvas py-20 lg:py-32">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-ink/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 page-container">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <p className="eyebrow mb-6">{t.about.eyebrow}</p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
            className="text-h1 text-ink mb-7 whitespace-pre-line max-w-4xl"
            style={{ letterSpacing: "-1.5px" }}
          >
            {t.about.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
            className="text-body text-slate-gray font-[450] max-w-2xl"
          >
            {t.about.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="section-pad bg-lifted">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <Reveal>
              <div>
                <p className="eyebrow mb-4">{t.about.mission.eyebrow}</p>
                <h2 className="text-h2 text-ink">{t.about.mission.title}</h2>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-body text-slate-gray font-[450] leading-relaxed">{t.about.mission.body}</p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <motion.div
                  className="content-card card-hover h-full"
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.2 }}
                >
                  <v.icon size={24} className="text-ink mb-4" />
                  <h3 className="text-h3 text-ink mb-3">{v.title}</h3>
                  <p className="text-body text-slate-gray font-[450]">{v.body}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-canvas relative overflow-hidden">
        <div
          className="ghost-headline absolute top-0 right-0 translate-x-8 opacity-40 pointer-events-none select-none"
          aria-hidden
        >
          FOUNDERS
        </div>

        <div className="page-container relative z-10">
          <div className="mb-16 max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-4">{t.about.team.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-h2 text-ink mb-5">{t.about.team.title}</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-body text-slate-gray font-[450] max-w-xl">{t.about.team.subtitle}</p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-5 max-w-4xl">
            {founders.map((founder, i) => (
              <FounderCard key={founder.name} {...founder} delay={i * 0.12} reverse={i % 2 === 1} />
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-16 content-card content-card--accent relative overflow-hidden">
              <div className="relative z-10 max-w-3xl">
                <p className="eyebrow mb-5 text-canvas/60">THE STORY</p>
                <blockquote className="text-[22px] lg:text-[28px] font-medium tracking-[-0.5px] leading-[1.3] mb-6">
                  &ldquo;We met building things and decided to build something bigger. Not for the exit. For the builders who deserve a better ecosystem.&rdquo;
                </blockquote>
                <p className="text-[15px] text-canvas/60 font-[450]">
                  Omkar, Yash & Elias, Terns Founders
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-lifted">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <p className="eyebrow mb-4">{t.about.pune.eyebrow}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-h2 text-ink mb-6">{t.about.pune.title}</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-body text-slate-gray font-[450] leading-relaxed">{t.about.pune.body}</p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["🇮🇳 Pune, India", "🇩🇪 Hamburg, Germany", "🌍 Global"].map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center border border-border rounded-pill px-4 py-2 text-sm text-ink font-medium bg-surface"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-3 min-h-[320px] lg:min-h-[400px] auto-rows-fr">
                <div className="relative rounded-lg overflow-hidden row-span-2">
                  <Image
                    src="/pune1.jpg"
                    alt="Pune, Maharashtra"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="300px"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/pune2.jpg"
                    alt="Terns community"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="200px"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src="/pune3.jpg"
                    alt="Terns builders"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="200px"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-canvas">
        <div className="page-container text-center">
          <Reveal>
            <h2 className="text-h2 text-ink mb-5">Want to be part of the story?</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-body text-slate-gray font-[450] max-w-md mx-auto mb-10">
              Apply to participate, partner, or speak at HackPune. Or just say hello.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center">
              <LinkButton href="/hackpune/apply" variant="primary" size="lg">
                Apply Now
                <ArrowRight size={18} className="ml-2" />
              </LinkButton>
              <LinkButton href="/hackpune/partners" variant="secondary" size="lg">
                Become a Partner
              </LinkButton>
              <a
                href="mailto:founders@terns.tech"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-ink text-[15px] font-medium hover:bg-lifted transition-all"
              >
                <Mail size={16} />
                founders@terns.tech
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
