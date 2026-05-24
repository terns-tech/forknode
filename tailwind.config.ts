import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        lifted: "var(--lifted)",
        surface: "var(--surface)",
        white: "var(--surface)",
        "soft-bone": "var(--soft-bone)",
        ink: "var(--ink)",
        charcoal: "var(--charcoal)",
        "slate-gray": "var(--slate-gray)",
        granite: "var(--granite)",
        graphite: "var(--graphite)",
        "dust-taupe": "var(--dust-taupe)",
        "signal-orange": "var(--signal-orange)",
        "signal-orange-light": "var(--signal-orange-light)",
        "clay-brown": "var(--clay-brown)",
        "link-blue": "var(--link-blue)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["Sofia Sans", "Arial", "sans-serif"],
      },
      fontSize: {
        h1: ["64px", { lineHeight: "64px", letterSpacing: "-1.28px", fontWeight: "500" }],
        h2: ["36px", { lineHeight: "44px", letterSpacing: "-0.72px", fontWeight: "500" }],
        h3: ["24px", { lineHeight: "28.8px", letterSpacing: "-0.48px", fontWeight: "500" }],
        eyebrow: ["14px", { lineHeight: "14px", letterSpacing: "0.56px", fontWeight: "700" }],
        body: ["16px", { lineHeight: "22.4px", letterSpacing: "0", fontWeight: "450" }],
        "nav-label": ["16px", { lineHeight: "16px", letterSpacing: "-0.48px", fontWeight: "500" }],
        "footer-link": ["14px", { lineHeight: "20px", letterSpacing: "0", fontWeight: "450" }],
      },
      borderRadius: {
        xs: "6px",
        md: "20px",
        card: "21px",
        lg: "40px",
        pill: "999px",
        full: "9999px",
      },
      boxShadow: {
        "nav-pill": "var(--shadow-nav)",
        elevated: "var(--shadow-elevated)",
        dramatic: "rgba(0, 0, 0, 0.25) 0px 70px 110px 0px",
      },
    },
  },
  plugins: [],
};

export default config;
