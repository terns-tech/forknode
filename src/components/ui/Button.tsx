"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
  const base =
      "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-ink text-canvas border border-ink hover:translate-y-[1px]",
      secondary: "bg-surface text-ink border-[1.5px] border-ink hover:translate-y-[1px]",
      ghost: "bg-transparent text-ink border border-transparent hover:underline",
      accent: "bg-ink text-canvas rounded-[24px] px-7 py-1.5 text-[13px] font-normal tracking-[0.13px]",
    };

    const sizes = {
      sm: "px-5 py-2 text-[14px]",
      md: "px-6 py-1.5 text-[16px] tracking-[-0.32px]",
      lg: "px-7 py-2 text-[16px] tracking-[-0.32px]",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
}

export function LinkButton({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: LinkButtonProps) {
    const base =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink";

  const variants = {
    primary: "bg-ink text-canvas border border-ink hover:translate-y-[1px]",
    secondary: "bg-white text-ink border-[1.5px] border-ink hover:translate-y-[1px]",
    ghost: "bg-transparent text-ink border border-transparent hover:underline",
    accent: "bg-ink text-canvas rounded-[24px] px-7 py-1.5 text-[13px] font-normal tracking-[0.13px]",
  };

  const sizes = {
    sm: "px-5 py-2 text-[14px]",
    md: "px-6 py-1.5 text-[16px] tracking-[-0.32px]",
    lg: "px-7 py-2 text-[16px] tracking-[-0.32px]",
  };

  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </a>
  );
}
