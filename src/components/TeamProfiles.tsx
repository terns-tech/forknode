"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { teamRowOne, teamRowTwo, type TeamMember } from "@/lib/team";

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
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function splitName(name: string): { first: string; last: string } {
  const parts = name.trim().split(/\s+/);
  if (parts.length <= 1) return { first: name, last: "" };
  return {
    first: parts.slice(0, -1).join(" "),
    last: parts[parts.length - 1]!,
  };
}

function TeamPortrait({
  name,
  image,
  initials,
  portraitFocus = "center 18%",
}: {
  name: string;
  image?: string;
  initials: string;
  portraitFocus?: string;
}) {
  return (
    <div className="team-portrait">
      {image ? (
        <Image
          src={image}
          alt={name}
          fill
          className="team-portrait__photo"
          style={{ objectPosition: portraitFocus }}
          sizes="(max-width: 640px) 210px, 235px"
          priority={name === "Omkar Kondhalkar"}
        />
      ) : (
        <div className="team-portrait__fallback" aria-hidden>
          {initials}
        </div>
      )}
    </div>
  );
}

function TeamCard({ member, delay }: { member: TeamMember; delay: number }) {
  const { first, last } = splitName(member.name);

  return (
    <Reveal delay={delay} className="flex-1 min-w-0 max-w-[300px] mx-auto w-full">
      <article className="flex flex-col items-center text-center h-full">
        <TeamPortrait
          name={member.name}
          image={member.image}
          initials={member.initials}
          portraitFocus={member.portraitFocus}
        />

        <div className="mt-5 w-full px-1">
          <p className="team-card__role">{member.role}</p>

          <h3 className="team-card__name">
            {first}
            {last && (
              <>
                <br />
                {last}
              </>
            )}
          </h3>

          <div className="team-card__details space-y-1 px-1">
            <p className="team-card__detail">{member.work}</p>
            {member.study && <p className="team-card__detail">{member.study}</p>}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function TeamRow({ members, baseDelay = 0 }: { members: TeamMember[]; baseDelay?: number }) {
  return (
    <div
      className={`grid gap-x-6 gap-y-14 sm:gap-x-8 sm:gap-y-16 ${
        members.length === 3
          ? "grid-cols-1 sm:grid-cols-3"
          : "grid-cols-1 sm:grid-cols-2 w-full"
      }`}
    >
      {members.map((member, i) => (
        <TeamCard key={member.name} member={member} delay={baseDelay + i * 0.06} />
      ))}
    </div>
  );
}

export function TeamProfiles() {
  return (
    <section className="section-pad bg-lifted">
      <div className="page-container">
        <Reveal>
          <div className="mb-14 text-center sm:text-left">
            <p className="eyebrow mb-4">THE TEAM</p>
            <h2 className="text-h2 text-ink mb-4">Core team</h2>
            <p className="text-body text-slate-gray font-[450]">
              The team building Terns and HackPune, connecting Hamburg and Pune for builders worldwide.
            </p>
          </div>
        </Reveal>

        <div className="space-y-14 sm:space-y-16">
          <TeamRow members={teamRowOne} />
          <TeamRow members={teamRowTwo} baseDelay={0.18} />
        </div>
      </div>
    </section>
  );
}
