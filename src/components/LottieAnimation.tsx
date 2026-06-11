"use client";

import { useEffect, useRef, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type LottieVariant = "hero-bg" | "hero-full" | "accent" | "inline";

const variantStyles: Record<LottieVariant, string> = {
  "hero-bg":
    "opacity-[0.16] pointer-events-none select-none [filter:hue-rotate(248deg)_saturate(1.35)_brightness(1.02)]",
  "hero-full":
    "pointer-events-none select-none opacity-[0.32] [filter:hue-rotate(200deg)_saturate(1.2)_brightness(1.05)]",
  accent: "opacity-95 pointer-events-none select-none",
  inline: "pointer-events-none select-none",
};

interface LottieAnimationProps {
  src: string;
  className?: string;
  variant?: LottieVariant;
  loop?: boolean;
  cover?: boolean;
  speed?: number;
}

export function LottieAnimation({
  src,
  className,
  variant = "inline",
  loop = true,
  cover = false,
  speed = 1,
}: LottieAnimationProps) {
  const [data, setData] = useState<object | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let cancelled = false;
    fetch(src)
      .then((res) => res.json())
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [src]);

  useEffect(() => {
    if (data && lottieRef.current) {
      lottieRef.current.setSpeed(speed);
    }
  }, [data, speed]);

  if (!data) {
    return (
      <div
        className={cn(variantStyles[variant], className, "rounded-lg")}
        aria-hidden
      />
    );
  }

  return (
    <div className={cn(variantStyles[variant], className)} aria-hidden>
      <Lottie
        lottieRef={lottieRef}
        animationData={data}
        loop={loop && !shouldReduceMotion}
        autoplay={!shouldReduceMotion}
        className="h-full w-full"
        rendererSettings={
          cover ? { preserveAspectRatio: "xMidYMid slice" } : undefined
        }
      />
    </div>
  );
}
