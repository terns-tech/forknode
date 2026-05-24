import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ThemeFavicon } from "@/components/ThemeFavicon";

export const metadata: Metadata = {
  title: {
    default: "Terns — Global Hackathon Ecosystem",
    template: "%s | Terns",
  },
  description:
    "Terns is a global hackathon ecosystem connecting builders, founders, hackers, and creators across borders. Born from friendship, designed for the world. Join our flagship event HackPune 2026.",
  keywords: [
    "hackathon", "global hackathon", "builders", "Terns", "terns.tech",
    "HackPune", "AI hackathon", "Pune", "India", "Germany", "Hamburg",
    "tech events", "startup community", "community-first", "founders", "innovation",
  ],
  authors: [
    { name: "Omkar Kondhalkar", url: "https://terns.tech" },
    { name: "Yash Pawar", url: "https://terns.tech" },
    { name: "Elias Tilmes", url: "https://terns.tech" },
  ],
  creator: "Terns",
  publisher: "Terns",
  metadataBase: new URL("https://terns.tech"),
  openGraph: {
    title: "Terns — Global Hackathon Ecosystem",
    description:
      "Where the world builders take flight. A global hackathon ecosystem built for community-first innovation.",
    siteName: "Terns",
    locale: "en_US",
    type: "website",
    url: "https://terns.tech",
    images: [
      {
        url: "/icon-light.png",
        width: 500,
        height: 500,
        alt: "Terns",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terns — Global Hackathon Ecosystem",
    description: "Where the world builders take flight. Join the global community at terns.tech",
    creator: "@ternstech",
    site: "@ternstech",
    images: ["/icon-light.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon-light.png", sizes: "360x360", type: "image/png" },
      { url: "/apple-touch-icon-dark.png", sizes: "360x360", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://terns.tech",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#F3F0EE" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" type="image/x-icon" />
        <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon-light.png" sizes="360x360" type="image/png" data-terns-theme />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('terns-theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');var a=document.querySelector('link[rel="apple-touch-icon"][data-terns-theme]');if(a)a.href=d?'/apple-touch-icon-dark.png':'/apple-touch-icon-light.png'}catch(e){}})()`,
          }}
        />
      </head>
      <body className="bg-canvas text-ink antialiased">
        <ThemeProvider>
          <ThemeFavicon />
          <LanguageProvider>
            <Nav />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
