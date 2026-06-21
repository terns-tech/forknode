import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "purple" | "pink" | "blue" | "orange" | "green" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const base = "inline-flex items-center px-3 py-1 text-xs font-semibold tracking-[0.56px] rounded-pill uppercase";

  const variants = {
    default: "bg-lifted text-ink border border-border",
    purple: "bg-white/10 text-ink border border-white/15",
    pink: "bg-white/10 text-ink border border-white/15",
    blue: "bg-white/10 text-ink border border-white/15",
    orange: "bg-white/10 text-ink border border-white/15",
    green: "bg-white/10 text-ink border border-white/15",
    outline: "bg-transparent border border-ink/30 text-ink",
  };

  return (
    <span className={cn(base, variants[variant], className)}>
      {children}
    </span>
  );
}
