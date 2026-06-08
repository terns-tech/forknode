"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { type Locale } from "@/lib/translations";
import { cn } from "@/lib/utils";
import { LinkButton } from "@/components/ui/Button";
import { TernsLogo } from "@/components/TernsLogo";

const navLinkClass =
  "relative text-[15px] font-medium tracking-[-0.3px] transition-colors duration-150 whitespace-nowrap py-1";

export function Nav() {
  const { t, locale, setLocale } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const links = [
    { href: "/hackpune", label: t.nav.hackpune },
    { href: "/hackpune/partners", label: t.nav.partners },
    { href: "/hackpune/speakers", label: t.nav.speakers },
    { href: "/updates", label: t.nav.updates },
  ];

  // Pick only the single best (longest prefix) match so just one nav item
  // is underlined at a time. Exact match wins over prefix match.
  const activeHref = (() => {
    const exact = links.find((l) => l.href === pathname);
    if (exact) return exact.href;
    const prefixMatches = links
      .filter((l) => l.href !== "/" && pathname.startsWith(l.href + "/"))
      .sort((a, b) => b.href.length - a.href.length);
    return prefixMatches[0]?.href ?? (pathname === "/" ? "/" : null);
  })();

  const isActive = (href: string) => href === activeHref;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="page-container pt-3 sm:pt-4 lg:pt-5">
          <div
            className={cn(
              "nav-surface flex items-center justify-between gap-3 sm:gap-4 rounded-pill backdrop-blur-xl backdrop-saturate-150 px-3 py-2.5 sm:px-5 sm:py-3 shadow-nav-pill transition-all duration-300 border min-h-[52px] sm:min-h-[56px]",
              scrolled ? "shadow-elevated" : ""
            )}
          >
            <TernsLogo priority size="xs" className="shrink-0 sm:hidden" />
            <TernsLogo priority size="sm" className="shrink-0 hidden sm:flex" />

            <div className="hidden lg:flex items-center gap-7 xl:gap-9 min-w-0">
              {links.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(navLinkClass, active ? "text-ink" : "text-ink/60 hover:text-ink")}
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className={cn(
                        "pointer-events-none absolute left-0 right-0 -bottom-0.5 h-[1.5px] rounded-full bg-ink origin-center transition-transform duration-200 ease-out",
                        active ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={toggleTheme}
                className="touch-target w-9 h-9 rounded-full border border-border flex items-center justify-center text-ink/70 hover:text-ink transition-colors"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <div className="flex items-center border border-border rounded-pill overflow-hidden">
                {(["en", "de"] as Locale[]).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setLocale(lang)}
                    className={cn(
                      "touch-target px-3 py-1.5 text-xs font-bold uppercase tracking-[0.56px] transition-colors min-h-[36px]",
                      locale === lang ? "bg-ink text-canvas" : "text-ink/50 hover:text-ink"
                    )}
                  >
                    {lang}
                  </button>
                ))}
              </div>
              <LinkButton href="/hackpune/apply" variant="primary" size="sm">
                {t.nav.apply}
              </LinkButton>
            </div>

            <div className="lg:hidden flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={toggleTheme}
                className="touch-target w-9 h-9 rounded-full border border-border flex items-center justify-center text-ink/70"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                type="button"
                className="touch-target text-ink/70 hover:text-ink p-2 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <>
            <button
              type="button"
              className="nav-mobile-backdrop lg:hidden"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            />
            <div className="nav-mobile-panel lg:hidden">
              <div className="flex flex-col gap-1 py-2">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "touch-target px-4 py-3 text-[16px] font-medium rounded-xl transition-colors min-h-[48px] flex items-center",
                      isActive(link.href)
                        ? "text-ink bg-lifted"
                        : "text-ink/70 hover:text-ink hover:bg-lifted/70"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="nav-mobile-panel__footer">
                <div className="flex items-center gap-1.5">
                  {(["en", "de"] as Locale[]).map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setLocale(lang)}
                      className={cn(
                        "touch-target px-4 py-2 text-xs font-bold uppercase tracking-[0.56px] rounded-pill transition-colors min-h-[40px]",
                        locale === lang
                          ? "bg-ink text-canvas"
                          : "text-ink/50 border border-border hover:text-ink"
                      )}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
                <LinkButton
                  href="/hackpune/apply"
                  variant="primary"
                  size="sm"
                  className="w-full sm:w-auto justify-center min-h-[44px]"
                >
                  {t.nav.apply}
                </LinkButton>
              </div>
            </div>
          </>
        )}
      </nav>
      <div className="nav-spacer" aria-hidden />
    </>
  );
}
