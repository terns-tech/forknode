import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "purple" | "pink" | "blue" | "orange" | "green" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const base = "inline-flex items-center px-3 py-1 text-xs font-semibold tracking-[0.56px] rounded-pill uppercase";

  const variants = {
    default: "bg-lifted text-ink",
    purple: "bg-white text-ink border border-ink",
    pink: "bg-white text-ink border border-ink",
    blue: "bg-white text-ink border border-ink",
    orange: "bg-white text-ink border border-ink",
    green: "bg-white text-ink border border-ink",
    outline: "bg-transparent border border-ink text-ink",
  };

  return (
    <span className={cn(base, variants[variant], className)}>
      {children}
    </span>
  );
}
