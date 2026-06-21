import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ThemeFavicon } from "@/components/ThemeFavicon";
import { RevealObserver } from "@/components/RevealObserver";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteBackground } from "@/components/site/SiteBackground";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <ThemeFavicon />
      <LanguageProvider>
        <div className="nexura-site relative bg-[#0B0F19] text-white overflow-x-hidden min-h-screen selection:bg-blue-500/30">
          <RevealObserver />
          <SiteBackground />
          <SiteHeader />
          <main className="relative z-10 min-w-0 overflow-x-clip">{children}</main>
          <SiteFooter />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
