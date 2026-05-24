"use client";

import { useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const APPLE_TOUCH = {
  light: "/apple-touch-icon-light.png",
  dark: "/apple-touch-icon-dark.png",
} as const;

function setAppleTouchIcon(href: string) {
  let link = document.querySelector<HTMLLinkElement>(
    'link[rel="apple-touch-icon"][data-terns-theme]'
  );
  if (!link) {
    link = document.createElement("link");
    link.rel = "apple-touch-icon";
    link.setAttribute("data-terns-theme", "");
    document.head.appendChild(link);
  }
  link.href = href;
  link.sizes = "360x360";
  link.type = "image/png";
}

export function ThemeFavicon() {
  const { theme } = useTheme();

  useEffect(() => {
    const variant = theme === "dark" ? "dark" : "light";
    setAppleTouchIcon(APPLE_TOUCH[variant]);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0f0f0e" : "#F3F0EE");
  }, [theme]);

  return null;
}
