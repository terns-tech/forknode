/**
 * Editorial composition for THE STORY - right column only.
 * CSS-only (no client JS) to avoid dev HMR / RSC manifest glitches.
 */
export function StoryVisual() {
  return (
    <div
      className="story-visual relative mx-auto w-full max-w-[min(100%,22rem)] sm:max-w-[min(100%,26rem)] min-h-[min(75vw,20rem)] sm:min-h-[315px] aspect-[4/5] select-none overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-br from-lifted via-canvas to-surface/80" />

      <div className="story-visual__light story-visual__light--a absolute -top-[20%] -right-[10%] h-[70%] w-[80%] bg-gradient-to-bl from-ink/[0.06] via-transparent to-transparent dark:from-ink/10" />
      <div className="story-visual__light story-visual__light--b absolute -bottom-[15%] -left-[5%] h-[55%] w-[65%] bg-gradient-to-tr from-ink/[0.04] to-transparent" />

      <div className="story-visual__panel story-visual__panel--1 absolute top-[6%] right-0 w-[78%] h-[84%] border border-border/50 bg-surface/50 shadow-[0_24px_64px_-12px_rgba(20,20,19,0.08)] dark:shadow-[0_24px_64px_-12px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-0 bg-gradient-to-b from-ink/[0.03] via-transparent to-ink/[0.05]" />
      </div>

      <div className="story-visual__panel story-visual__panel--2 absolute top-[14%] left-[4%] w-[52%] h-[48%]">
        <div className="story-visual__float h-full w-full border border-border/40 bg-canvas/90 backdrop-blur-[2px] shadow-[0_12px_40px_-8px_rgba(20,20,19,0.06)]">
          <div className="absolute inset-x-0 top-0 h-px bg-border/70" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-ink/[0.02] to-ink/[0.06]" />
        </div>
      </div>

      <div className="story-visual__panel story-visual__panel--3 absolute bottom-[14%] right-[8%] w-[62%] h-[26%] border border-border/35 bg-surface/40 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]" />

      <div className="story-visual__panel story-visual__panel--4 absolute bottom-[32%] left-[10%] w-[38%] h-[18%] bg-ink/[0.04] dark:bg-ink/15 border border-border/30" />

      <div className="absolute top-[12%] left-[46%] h-[58%] w-px bg-border/50" />
      <div className="absolute top-[38%] left-[12%] w-[36%] h-px bg-border/35" />

      <div className="story-visual__grain pointer-events-none absolute inset-0" />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-lifted/80 via-transparent to-transparent" />
    </div>
  );
}
