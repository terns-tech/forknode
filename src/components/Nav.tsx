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

  const links = [
    { href: "/hackpune", label: t.nav.hackpune },
    { href: "/hackpune/partners", label: t.nav.partners },
    { href: "/hackpune/speakers", label: t.nav.speakers },
    { href: "/about", label: t.nav.about },
    { href: "/updates", label: t.nav.updates },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={cn(
              "nav-surface mx-auto mt-5 flex items-center justify-between gap-6 rounded-pill backdrop-blur-xl backdrop-saturate-150 px-5 py-3 shadow-nav-pill transition-all duration-300 border",
              scrolled ? "shadow-elevated" : ""
            )}
          >
            <TernsLogo priority />

            <div className="hidden lg:flex items-center gap-9">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[15px] font-medium tracking-[-0.3px] transition-all duration-150",
                    isActive(link.href) ? "text-ink" : "text-ink/60 hover:text-ink"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-ink/70 hover:text-ink transition-colors"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <div className="flex items-center border border-border rounded-pill overflow-hidden">
                {(["en", "de"] as Locale[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLocale(lang)}
                    className={cn(
                      "px-3 py-1.5 text-xs font-bold uppercase tracking-[0.56px] transition-colors",
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

            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-ink/70"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                className="text-ink/70 hover:text-ink p-2 -mr-1 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="nav-surface lg:hidden backdrop-blur-md border shadow-elevated mx-6 mt-2 rounded-pill">
            <div className="px-6 py-5 flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2.5 text-[15px] font-medium rounded-md transition-colors",
                    isActive(link.href)
                      ? "text-ink bg-lifted"
                      : "text-ink/60 hover:text-ink hover:bg-lifted/60"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-border mt-2 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {(["en", "de"] as Locale[]).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLocale(lang)}
                      className={cn(
                        "px-3 py-1.5 text-xs font-bold uppercase tracking-[0.56px] rounded-pill transition-colors",
                        locale === lang
                          ? "bg-ink text-canvas"
                          : "text-ink/50 border border-border hover:text-ink"
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
            </div>
          </div>
        )}
      </nav>
      <div className="h-24" />
    </>
  );
}
