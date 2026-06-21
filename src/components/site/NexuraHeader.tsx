"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/hackpune", label: "HackPune" },
  { href: "/hackpune/partners", label: "Partners" },
  { href: "/hackpune/speakers", label: "Speakers" },
];

export function NexuraHeader({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <>
      <header
        className={`relative z-50 w-full flex justify-between items-center gap-3 px-6 md:px-10 py-4 md:py-6 reveal-fade ${className}`}
      >
        <Link href="/" className="flex items-center gap-2.5 text-white font-medium text-base shrink-0">
          <div className="bg-white text-[#0B0F19] rounded-lg p-1">
            <iconify-icon icon="solar:ghost-smile-bold" width="20"></iconify-icon>
          </div>
          <span className="tracking-tight font-mono">Terns</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-xs text-gray-400 font-medium">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`hover:text-white transition-colors ${isActive(link.href) ? "text-white" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          <Link
            href="/updates"
            className="text-xs text-gray-300 hover:text-white transition-colors hidden sm:block"
          >
            Updates
          </Link>
          <Link
            href="/hackpune/apply"
            className="inline-flex px-4 sm:px-5 py-2 rounded-full bg-white/10 border border-white/5 text-white text-xs font-medium hover:bg-white/20 transition-all backdrop-blur-md min-h-[40px] items-center"
          >
            Apply Now
          </Link>
          <button
            type="button"
            className="md:hidden touch-target flex items-center justify-center p-2 text-gray-300 hover:text-white transition-colors rounded-lg"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {isOpen && (
        <>
          <button
            type="button"
            className="nexura-mobile-backdrop md:hidden"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          />
          <div className="nexura-mobile-panel md:hidden">
            <nav className="flex flex-col gap-1 py-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`touch-target px-4 py-3 text-sm font-medium rounded-xl transition-colors min-h-[48px] flex items-center ${
                    isActive(link.href)
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/updates"
                className={`touch-target px-4 py-3 text-sm font-medium rounded-xl transition-colors min-h-[48px] flex items-center sm:hidden ${
                  isActive("/updates")
                    ? "text-white bg-white/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                Updates
              </Link>
            </nav>
            <div className="nexura-mobile-panel__footer">
              <Link
                href="/hackpune/apply"
                className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-black text-xs font-semibold hover:bg-gray-200 transition-all min-h-[44px]"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
