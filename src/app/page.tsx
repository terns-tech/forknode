import type { Metadata } from "next";
import { RevealObserver } from "@/components/RevealObserver";
import { NexuraHeader } from "@/components/site/NexuraHeader";

export const metadata: Metadata = {
  title: "Terns - Global Hackathon Ecosystem",
  description:
    "Terns is a global hackathon ecosystem connecting builders, founders, hackers, and creators across borders. Join our flagship event HackPune 2026.",
  alternates: { canonical: "/" },
};

const DISCORD_URL = "https://discord.gg/terns";

export default function HomePage() {
  return (
    <div className="nexura relative bg-[#0B0F19] text-white overflow-x-hidden min-h-screen selection:bg-blue-500/30">
      <RevealObserver />

      {/* Background glows */}
      <div className="absolute inset-x-0 top-0 z-[-1] bg-[#0B0F19] h-screen pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/10 blur-[120px]"></div>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px]"></div>
      </div>

      {/* HERO + Nav (shared video background) */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-40 mix-blend-screen"
          style={{ overflow: "hidden", isolation: "isolate" }}
        >
          <video
            src="/animations/hero2.mp4"
            muted
            playsInline
            preload="metadata"
            loop
            autoPlay
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
              zIndex: 0,
              maxWidth: "none",
            }}
          />
        </div>

        <NexuraHeader className="relative z-10" />

        <main className="relative z-10 pt-4 sm:pt-8 md:pt-12 pb-12 px-6 md:px-10 flex flex-col items-center text-center reveal" data-delay="200">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1] font-dot reveal" data-delay="100">
          Where the world builders take flight
        </h1>
        <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Terns is a global ecosystem for hackathons, builders, and communities.
          Born from late-night sessions, designed for the world. We connect
          founders, hackers, creators, and students across borders.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 items-center reveal" data-delay="300">
          <a href="/hackpune" className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Explore HackPune →
          </a>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-xs font-medium hover:bg-white/10 transition-all backdrop-blur-md">
            Join Community
          </a>
        </div>

        {/* Stats inline */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-16 mt-12 sm:mt-16 max-w-2xl w-full px-2">
          <div className="text-center reveal">
            <div className="text-2xl sm:text-3xl md:text-4xl text-white font-dot tracking-tight">24h</div>
            <div className="text-xs text-gray-500 mt-1">Non-stop hacking</div>
          </div>
          <div className="text-center border-x border-white/5 reveal" data-delay="100">
            <div className="text-2xl sm:text-3xl md:text-4xl text-white font-dot tracking-tight">160</div>
            <div className="text-xs text-gray-500 mt-1">Curated builders</div>
          </div>
          <div className="text-center reveal" data-delay="200">
            <div className="text-2xl sm:text-3xl md:text-4xl text-white font-dot tracking-tight">8</div>
            <div className="text-xs text-gray-500 mt-1">Company challenges</div>
          </div>
        </div>
        </main>

        {/* Dashboard Mockup */}
        <div className="relative z-10 w-full px-6 md:px-10 pb-16 md:pb-24 mt-8 sm:mt-12">
        <div className="rounded-2xl sm:rounded-3xl p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-[0_30px_100px_-20px_rgba(0,0,0,1)] reveal max-w-[1024px] mx-auto">
          <div className="bg-[#1C1F26] rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col h-[360px] sm:h-[480px] md:h-[580px] ring-1 ring-white/5">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#22252D]">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2 text-white font-medium text-xs">
                  <iconify-icon icon="solar:ghost-smile-bold" width="18"></iconify-icon>
                  <span>Terns</span>
                </div>
                <div className="hidden sm:flex items-center gap-1 bg-black/20 rounded-full p-1 border border-white/5">
                  <button className="px-4 py-1 rounded-full bg-white/10 text-white text-xs font-semibold">Board</button>
                  <button className="px-4 py-1 rounded-full text-gray-400 text-xs font-medium">Team</button>
                  <button className="px-4 py-1 rounded-full text-gray-400 text-xs font-medium">Timeline</button>
                </div>
              </div>
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 ring-2 ring-[#22252D]"></div>
            </div>
            <div className="flex flex-col h-full overflow-hidden bg-gradient-to-b from-[#1C1F26] to-[#14161C]">
              <div className="px-6 md:px-8 pt-6 pb-4">
                <div className="flex items-center gap-3 text-white mb-4">
                  <h2 className="text-2xl tracking-tight font-dot">HackPune Ops</h2>
                  <span className="px-2 py-0.5 rounded-md border border-white/10 bg-white/5 text-xs text-gray-300">8</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-6 text-xs font-medium">
                    <button className="text-white border-b-2 border-white pb-1">Board</button>
                    <button className="text-gray-500 pb-1">List</button>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-xs font-medium transition-colors">
                    + Add task
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-x-auto overflow-y-hidden px-6 md:px-8 pb-8 flex gap-6 kanban-scroll">
                {/* Col 1 */}
                <div className="w-[280px] flex-shrink-0 flex flex-col">
                  <div className="flex items-center justify-between text-gray-300 text-xs font-medium px-1 mb-4">
                    <div className="flex items-center gap-2">
                      <iconify-icon icon="solar:sun-2-linear" width="14"></iconify-icon>
                      <span>Active</span>
                    </div>
                    <iconify-icon icon="solar:menu-dots-bold" width="14" className="text-gray-500"></iconify-icon>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="bg-[#262A34] p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all">
                      <div className="flex justify-between items-start gap-2 mb-3">
                        <h3 className="text-white text-xs font-dot">Challenge partner onboarding</h3>
                        <div className="w-5 h-5 shrink-0 rounded-md bg-yellow-500/10 text-yellow-500 flex items-center justify-center">
                          <iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-semibold text-xs">E</div>
                        <span>Oct 03</span>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-white/5">
                        <span className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 text-xs border border-blue-500/20">Partners</span>
                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                          <iconify-icon icon="solar:chat-line-linear" width="12"></iconify-icon>
                          1
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#262A34] p-4 rounded-xl border border-white/5">
                      <h3 className="text-white text-xs font-dot mb-3">Venue confirmation, Pune</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                        <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-semibold text-xs">Y</div>
                        <span>Oct 03</span>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-white/5">
                        <span className="px-2 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs border border-purple-500/20">Logistics</span>
                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                          <iconify-icon icon="solar:chat-line-linear" width="12"></iconify-icon>
                          3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Col 2 */}
                <div className="w-[280px] flex-shrink-0 flex flex-col">
                  <div className="flex items-center justify-between text-gray-300 text-xs font-medium px-1 mb-4">
                    <div className="flex items-center gap-2">
                      <iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
                      <span>In Progress</span>
                    </div>
                    <iconify-icon icon="solar:menu-dots-bold" width="14" className="text-gray-500"></iconify-icon>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="bg-[#262A34] p-4 rounded-xl border border-white/10 ring-1 ring-blue-500/30 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                      <h3 className="text-white text-xs font-dot mb-3 pl-2">Mentor &amp; jury outreach</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 pl-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-semibold text-xs">O</div>
                        <span>Oct 04</span>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-white/5 pl-2">
                        <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">Mentors</span>
                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                          <iconify-icon icon="solar:chat-line-linear" width="12"></iconify-icon>
                          8
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#262A34] p-4 rounded-xl border border-white/5">
                      <div className="flex justify-between items-start gap-2 mb-3">
                        <h3 className="text-white text-xs font-dot">Applicant review, 160 spots</h3>
                        <div className="w-5 h-5 shrink-0 rounded-md bg-white/5 text-gray-300 flex items-center justify-center">
                          <iconify-icon icon="solar:users-group-rounded-linear" width="12"></iconify-icon>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                        <div className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-semibold text-xs">T</div>
                        <span>Sep 30</span>
                      </div>
                      <div className="pt-3 border-t border-white/5">
                        <span className="px-2 py-1 rounded-md bg-orange-500/10 text-orange-400 text-xs border border-orange-500/20">Review</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Col 3 */}
                <div className="w-[280px] flex-shrink-0 flex flex-col">
                  <div className="flex items-center justify-between text-gray-400 text-xs font-medium px-1 mb-4">
                    <div className="flex items-center gap-2">
                      <iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
                      <span>Done</span>
                    </div>
                    <iconify-icon icon="solar:menu-dots-bold" width="14" className="text-gray-600"></iconify-icon>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="bg-[#262A34]/50 p-4 rounded-xl border border-white/5 opacity-60">
                      <h3 className="text-gray-400 text-xs line-through decoration-gray-600 font-dot mb-3">Discord community launch</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <div className="w-5 h-5 rounded-full bg-gray-500/20 flex items-center justify-center text-xs">T</div>
                        <span>Apr 12</span>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-white/5">
                        <span className="px-2 py-1 rounded-md bg-gray-500/10 text-gray-400 text-xs border border-gray-500/20">Community</span>
                        <div className="flex items-center gap-1 text-gray-600 text-xs">
                          <iconify-icon icon="solar:chat-line-linear" width="12"></iconify-icon>
                          12
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#262A34]/50 p-4 rounded-xl border border-white/5 opacity-50">
                      <h3 className="text-gray-500 text-xs line-through font-dot mb-3">terns.tech goes live</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <div className="w-5 h-5 rounded-full bg-gray-600/20 flex items-center justify-center text-xs">T</div>
                        <span>Feb 01</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* FEATURES → WHAT WE BUILD */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="text-center mb-10 md:mb-16 reveal">
          <div className="text-xs text-blue-400 mb-3 tracking-widest uppercase">// What We Build</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-dot tracking-tight mb-4">
            Community-first.
            <br />
            Builder-native.
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            We don&apos;t run generic hackathons. Terns curates real challenges, real
            mentors, and real outcomes, wrapped in a community that outlasts every event.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent reveal">
            <div className="bg-[#1C1F26] rounded-2xl p-6 h-full">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                <iconify-icon icon="solar:target-linear" width="20"></iconify-icon>
              </div>
              <h3 className="text-base font-dot mb-2 tracking-tight">Real Challenges</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Every track comes from a company with a genuine problem. No toy
                prompts, no fake datasets. Real business contexts you can build on.
              </p>
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                8 company challenges
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent reveal" data-delay="100">
            <div className="bg-[#1C1F26] rounded-2xl p-6 h-full">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
              </div>
              <h3 className="text-base font-dot mb-2 tracking-tight">Expert Mentorship</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Direct access to senior engineers, product leads, and founders
                throughout the event. Mentors who can actually unblock you.
              </p>
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-purple-400"></span>
                1 mentor per challenge
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent reveal" data-delay="200">
            <div className="bg-[#1C1F26] rounded-2xl p-6 h-full">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <iconify-icon icon="solar:cup-star-linear" width="20"></iconify-icon>
              </div>
              <h3 className="text-base font-dot mb-2 tracking-tight">Ship &amp; Win</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                24 hours to go from zero to prototype. Pitch to the challenge
                partners. Win prizes, credits, and job interviews.
              </p>
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                One winner per challenge
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent reveal">
            <div className="bg-[#1C1F26] rounded-2xl p-6 h-full">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
                <iconify-icon icon="solar:cpu-bolt-linear" width="20"></iconify-icon>
              </div>
              <h3 className="text-base font-dot mb-2 tracking-tight">AI-Native Events</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Every challenge has an AI angle. We partner with leading platforms
                so every team gets cutting-edge tools and APIs.
              </p>
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-orange-400"></span>
                Cursor, OpenAI &amp; more
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent reveal" data-delay="100">
            <div className="bg-[#1C1F26] rounded-2xl p-6 h-full">
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-4">
                <iconify-icon icon="solar:heart-angle-linear" width="20"></iconify-icon>
              </div>
              <h3 className="text-base font-dot mb-2 tracking-tight">Community Forever</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                The event lasts 24 hours. The community is permanent. We invest in
                the network of builders that outlasts every hackathon.
              </p>
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-pink-400"></span>
                Active year-round
              </div>
            </div>
          </div>
          <div className="rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent reveal" data-delay="200">
            <div className="bg-[#1C1F26] rounded-2xl p-6 h-full">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <iconify-icon icon="solar:globus-linear" width="20"></iconify-icon>
              </div>
              <h3 className="text-base font-dot mb-2 tracking-tight">Borderless by Design</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Born in Hamburg, landing first in Pune. An Indo-German bridge for
                builders, movement without borders.
              </p>
              <div className="text-xs text-gray-500 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                Hamburg ↔ Pune
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS → COMMUNITY VOICES */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="text-center mb-10 md:mb-16 reveal">
          <div className="text-xs text-blue-400 mb-3 tracking-widest uppercase">// Community</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-dot tracking-tight mb-4">Builders love Terns</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-[#262A34] rounded-2xl border border-white/5 p-6 reveal-left">
            <div className="flex gap-1 mb-4 text-yellow-400">
              <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
            </div>
            <p className="text-sm text-gray-200 leading-relaxed mb-6 font-dot">
              &quot;Terns is the first event that treats builders like the main
              characters. Real problems, real mentors, zero fluff.&quot;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400"></div>
              <div>
                <div className="text-xs text-white">Aarav Mehta</div>
                <div className="text-xs text-gray-500">Builder, Pune</div>
              </div>
            </div>
          </div>
          <div className="bg-[#262A34] rounded-2xl border border-white/5 p-6 ring-1 ring-blue-500/20 reveal" data-delay="150">
            <div className="flex gap-1 mb-4 text-yellow-400">
              <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
            </div>
            <p className="text-sm text-gray-200 leading-relaxed mb-6 font-dot">
              &quot;The Indo-German bridge is real. I mentored a team in Pune solving
              a problem my company actually has. We&apos;re still in touch.&quot;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-pink-400"></div>
              <div>
                <div className="text-xs text-white">Lena Schmidt</div>
                <div className="text-xs text-gray-500">Mentor, Hamburg</div>
              </div>
            </div>
          </div>
          <div className="bg-[#262A34] rounded-2xl border border-white/5 p-6 reveal-right">
            <div className="flex gap-1 mb-4 text-yellow-400">
              <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
              <iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
            </div>
            <p className="text-sm text-gray-200 leading-relaxed mb-6 font-dot">
              &quot;Came solo, got matched into a team, shipped a working AI prototype
              in 24 hours. Best weekend of my year.&quot;
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400"></div>
              <div>
                <div className="text-xs text-white">Rohan Desai</div>
                <div className="text-xs text-gray-500">Student, Pune</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY → HOW IT WORKS */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="text-center mb-10 md:mb-16 reveal">
          <div className="text-xs text-blue-400 mb-3 tracking-widest uppercase">// How It Works</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-dot tracking-tight mb-4">From application to prototype</h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            Four steps from signing up to shipping a working prototype in 24 hours.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative">
          <div className="hidden md:block absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="relative reveal">
            <div className="w-12 h-12 rounded-2xl bg-[#1C1F26] border border-white/10 flex items-center justify-center text-blue-400 mb-4 relative z-10">
              <span className="text-xs">01</span>
            </div>
            <h3 className="font-dot text-base mb-2 tracking-tight">Apply</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Submit your application solo or with a team. Developers, designers,
              and product thinkers all welcome.
            </p>
          </div>
          <div className="relative reveal" data-delay="100">
            <div className="w-12 h-12 rounded-2xl bg-[#1C1F26] border border-white/10 flex items-center justify-center text-purple-400 mb-4 relative z-10">
              <span className="text-xs">02</span>
            </div>
            <h3 className="font-dot text-base mb-2 tracking-tight">Get Matched</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              We review applications and match you to a challenge and team based on
              your skills and preferences.
            </p>
          </div>
          <div className="relative reveal" data-delay="200">
            <div className="w-12 h-12 rounded-2xl bg-[#1C1F26] border border-white/10 flex items-center justify-center text-emerald-400 mb-4 relative z-10">
              <span className="text-xs">03</span>
            </div>
            <h3 className="font-dot text-base mb-2 tracking-tight">Build</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              24 hours to turn a real problem into a working prototype, with
              mentorship at every step.
            </p>
          </div>
          <div className="relative reveal" data-delay="300">
            <div className="w-12 h-12 rounded-2xl bg-[#1C1F26] border border-white/10 flex items-center justify-center text-orange-400 mb-4 relative z-10">
              <span className="text-xs">04</span>
            </div>
            <h3 className="font-dot text-base mb-2 tracking-tight">Pitch &amp; Win</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Present your solution. Judges pick winners per challenge. Prizes,
              offers, and recognition.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="rounded-2xl sm:rounded-3xl p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent reveal">
          <div className="bg-[#1C1F26] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="text-xs text-blue-400 mb-3 tracking-widest uppercase">// Our Story</div>
              <h2 className="text-3xl md:text-4xl font-dot tracking-tight mb-6 leading-tight">
                We chose the name Terns because the world&apos;s builders deserve a
                global home.
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Arctic Terns make the longest migration of any animal, crossing
                entire oceans, navigating by the stars, always finding their way.
                Wherever they land, they build a community.
              </p>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                We&apos;re builders who cross borders. Born in Hamburg, landing first in
                Pune, we built the global home for the developers, designers, and
                founders who know the best things get built when the right people
                find each other.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 ring-2 ring-[#1C1F26]"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 ring-2 ring-[#1C1F26]"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 ring-2 ring-[#1C1F26]"></div>
                </div>
                <div className="text-xs text-gray-400">Founders, Terns</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#262A34] rounded-2xl p-5 border border-white/5">
                <div className="text-3xl font-dot text-white tracking-tight">2026</div>
                <div className="text-xs text-gray-500 mt-1">Founded in Hamburg</div>
              </div>
              <div className="bg-[#262A34] rounded-2xl p-5 border border-white/5 mt-6">
                <div className="text-3xl font-dot text-white tracking-tight">6</div>
                <div className="text-xs text-gray-500 mt-1">Team members</div>
              </div>
              <div className="bg-[#262A34] rounded-2xl p-5 border border-white/5">
                <div className="text-3xl font-dot text-white tracking-tight">2</div>
                <div className="text-xs text-gray-500 mt-1">Countries: India &amp; Germany</div>
              </div>
              <div className="bg-[#262A34] rounded-2xl p-5 border border-white/5 mt-6">
                <div className="text-3xl font-dot text-white tracking-tight">70K</div>
                <div className="text-xs text-gray-500 mt-1">km tern migration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIST → WHAT'S COVERED */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="text-center mb-10 md:mb-16 reveal">
          <div className="text-xs text-blue-400 mb-3 tracking-widest uppercase">// What&apos;s Covered</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-dot tracking-tight mb-4">Everything for accepted builders</h2>
        </div>
        <div className="rounded-2xl border border-white/5 bg-[#1C1F26] divide-y divide-white/5 reveal">
          <div className="grid grid-cols-12 px-4 sm:px-6 py-4 text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest">
            <div className="col-span-7 sm:col-span-6">Inclusion</div>
            <div className="col-span-3 hidden md:block">Detail</div>
            <div className="col-span-5 sm:col-span-3 md:col-span-3 text-right">Included</div>
          </div>
          {[
            { swatch: "bg-blue-500/10 border-blue-500/20 text-blue-400", icon: "solar:target-linear", label: "Curated company challenges", volume: "8 challenges" },
            { swatch: "bg-purple-500/10 border-purple-500/20 text-purple-400", icon: "solar:users-group-rounded-linear", label: "Expert mentorship", volume: "1 per challenge" },
            { swatch: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400", icon: "solar:hand-shake-linear", label: "Team matching", volume: "Skills-based" },
            { swatch: "bg-orange-500/10 border-orange-500/20 text-orange-400", icon: "solar:cup-hot-linear", label: "Food, drinks & snacks", volume: "All 24h" },
            { swatch: "bg-pink-500/10 border-pink-500/20 text-pink-400", icon: "solar:wifi-router-linear", label: "Workspace & wifi", volume: "On-site" },
            { swatch: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400", icon: "solar:cup-star-linear", label: "Prizes & recognition", volume: "Per challenge" },
            { swatch: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400", icon: "solar:bolt-linear", label: "24-hour build", volume: "Non-stop" },
          ].map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-12 px-4 sm:px-6 py-4 sm:py-5 items-center hover:bg-white/[0.02] transition-colors"
            >
              <div className="col-span-7 sm:col-span-6 flex items-center gap-2 sm:gap-3 min-w-0">
                <div className={`w-7 h-7 shrink-0 rounded-lg border flex items-center justify-center ${row.swatch}`}>
                  <iconify-icon icon={row.icon} width="14"></iconify-icon>
                </div>
                <span className="text-[11px] sm:text-xs text-white truncate">{row.label}</span>
              </div>
              <div className="col-span-3 hidden md:block text-xs text-gray-400">{row.volume}</div>
              <div className="col-span-5 sm:col-span-6 md:col-span-3 text-right">
                <iconify-icon icon="solar:check-circle-bold" width="18" className="text-emerald-400"></iconify-icon>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENTO */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="text-center mb-10 md:mb-16 reveal">
          <div className="text-xs text-blue-400 mb-3 tracking-widest uppercase">// At a Glance</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-dot tracking-tight mb-4">The Terns advantage</h2>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {/* Big stat */}
          <div className="col-span-12 md:col-span-6 rounded-2xl p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent reveal-left">
            <div className="bg-[#1C1F26] rounded-2xl p-8 h-full relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
              <div className="relative">
                <div className="text-xs text-gray-500 mb-3">The Arctic Tern flies</div>
                <div className="text-6xl md:text-7xl font-dot tracking-tight text-white mb-2">70K</div>
                <p className="text-xs text-gray-400 max-w-xs">
                  kilometres a year, the longest migration of any animal. We cross
                  borders the same way, connecting builders worldwide.
                </p>
              </div>
            </div>
          </div>
          {/* Two small */}
          <div className="col-span-12 sm:col-span-6 md:col-span-3 rounded-2xl bg-[#262A34] border border-white/5 p-5 sm:p-6 reveal" data-delay="100">
            <iconify-icon icon="solar:globus-linear" width="20" className="text-purple-400 mb-3"></iconify-icon>
            <div className="text-3xl font-dot tracking-tight">2</div>
            <div className="text-xs text-gray-500 mt-1">Countries: India &amp; Germany</div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 rounded-2xl bg-[#262A34] border border-white/5 p-5 sm:p-6 reveal" data-delay="200">
            <iconify-icon icon="solar:users-group-rounded-linear" width="20" className="text-emerald-400 mb-3"></iconify-icon>
            <div className="text-3xl font-dot tracking-tight">160</div>
            <div className="text-xs text-gray-500 mt-1">Curated builders</div>
          </div>
          {/* Wide media */}
          <div className="col-span-12 md:col-span-4 rounded-2xl bg-gradient-to-br from-purple-500/20 via-[#1C1F26] to-[#1C1F26] border border-white/5 p-6 flex flex-col justify-between min-h-[200px] reveal">
            <iconify-icon icon="solar:buildings-3-linear" width="24" className="text-purple-300"></iconify-icon>
            <div>
              <div className="text-base font-dot tracking-tight">Real company challenges</div>
              <div className="text-xs text-gray-400 mt-1">8 genuine problems from real companies.</div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 rounded-2xl bg-[#262A34] border border-white/5 p-6 flex flex-col justify-between min-h-[200px] reveal" data-delay="100">
            <div>
              <div className="flex items-baseline gap-1 mb-1">
                <div className="text-4xl font-dot tracking-tight">30</div>
                <div className="text-xl text-gray-500 font-dot">%</div>
              </div>
              <div className="text-xs text-gray-500">Women in AI target</div>
            </div>
            <p className="text-xs text-gray-400">Inclusion designed in from day one.</p>
          </div>
          <div className="col-span-12 md:col-span-4 rounded-2xl bg-gradient-to-br from-blue-500/20 via-[#1C1F26] to-[#1C1F26] border border-white/5 p-6 flex flex-col justify-between min-h-[200px] reveal" data-delay="200">
            <iconify-icon icon="solar:rocket-linear" width="24" className="text-blue-300"></iconify-icon>
            <div>
              <div className="text-base font-dot tracking-tight">Ship in 24h</div>
              <div className="text-xs text-gray-400 mt-1">A working prototype, every team.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-24 text-center reveal">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-dot tracking-tight mb-4">Ready to take flight?</h2>
        <p className="text-sm text-gray-400 mb-8 max-w-lg mx-auto">
          Applications for HackPune 2026 are opening soon. Sign up to be the first
          in line.
        </p>
        <a href="/hackpune/apply" className="inline-block px-7 py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          Apply for HackPune →
        </a>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5 bg-[#0B0F19] reveal-fade">
        <div className="w-full px-6 md:px-10 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10 mb-10 md:mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 text-white font-medium text-base mb-4">
                <div className="bg-white text-[#0B0F19] rounded-lg p-1">
                  <iconify-icon icon="solar:ghost-smile-bold" width="20"></iconify-icon>
                </div>
                <span className="tracking-tight">Terns</span>
              </div>
              <p className="text-xs text-gray-500 max-w-xs leading-relaxed mb-6">
                A global hackathon ecosystem connecting builders, founders, hackers,
                and creators across borders.
              </p>
              <div className="flex items-center gap-2">
                <a href="mailto:hello@terns.tech" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
                </a>
                <a href="https://www.linkedin.com/company/ternstech" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <iconify-icon icon="solar:link-linear" width="14"></iconify-icon>
                </a>
                <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <iconify-icon icon="solar:chat-round-line-linear" width="14"></iconify-icon>
                </a>
              </div>
            </div>
            <div>
              <div className="text-xs text-white font-semibold mb-4 tracking-widest uppercase">Events</div>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><a href="/hackpune" className="hover:text-white transition-colors">HackPune</a></li>
                <li><a href="/hackpune/partners" className="hover:text-white transition-colors">Partners</a></li>
                <li><a href="/hackpune/speakers" className="hover:text-white transition-colors">Speakers</a></li>
                <li><a href="/hackpune/apply" className="hover:text-white transition-colors">Apply</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs text-white font-semibold mb-4 tracking-widest uppercase">Company</div>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/updates" className="hover:text-white transition-colors">Updates</a></li>
                <li><a href="mailto:hello@terns.tech" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/login" className="hover:text-white transition-colors">Login</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs text-white font-semibold mb-4 tracking-widest uppercase">Resources</div>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><a href="/hackpune/faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-gray-500">© 2026 Terns. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
