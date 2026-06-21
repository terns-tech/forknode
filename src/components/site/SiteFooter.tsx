import Link from "next/link";
import { DISCORD_URL, LINKEDIN_URL } from "@/lib/site-urls";

export function SiteFooter() {
  return (
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
              <a
                href="mailto:hello@terns.tech"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <iconify-icon icon="solar:link-linear" width="14"></iconify-icon>
              </a>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <iconify-icon icon="solar:chat-round-line-linear" width="14"></iconify-icon>
              </a>
            </div>
          </div>
          <div>
            <div className="text-xs text-white font-semibold mb-4 tracking-widest uppercase">
              Events
            </div>
            <ul className="space-y-3 text-xs text-gray-400">
              <li>
                <Link href="/hackpune" className="hover:text-white transition-colors">
                  HackPune
                </Link>
              </li>
              <li>
                <Link href="/hackpune/partners" className="hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/hackpune/speakers" className="hover:text-white transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link href="/hackpune/apply" className="hover:text-white transition-colors">
                  Apply
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs text-white font-semibold mb-4 tracking-widest uppercase">
              Company
            </div>
            <ul className="space-y-3 text-xs text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/updates" className="hover:text-white transition-colors">
                  Updates
                </Link>
              </li>
              <li>
                <a href="mailto:hello@terns.tech" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs text-white font-semibold mb-4 tracking-widest uppercase">
              Resources
            </div>
            <ul className="space-y-3 text-xs text-gray-400">
              <li>
                <Link href="/hackpune/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-500">© 2026 Terns. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
