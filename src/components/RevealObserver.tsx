"use client";

import { useEffect } from "react";

/**
 * Faithful port of the Nexura source scroll-reveal system.
 * Observes `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-fade`
 * elements and toggles `.in-view`, honoring manual `data-delay` values.
 */
export function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll(
      ".reveal,.reveal-left,.reveal-right,.reveal-fade"
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const d = e.target.getAttribute("data-delay") || "0";
            window.setTimeout(() => {
              e.target.classList.add("in-view");
            }, parseInt(d, 10));
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
