"use client";

import { useEffect } from "react";

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
  useEffect(() => {
    setAppleTouchIcon("/apple-touch-icon-dark.png");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", "#0B0F19");
  }, []);

  return null;
}
