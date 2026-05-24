import { cn } from "@/lib/utils";

export type CardVariant = "default" | "accent" | "dashed" | "compact" | "clip";

const variantClass: Record<CardVariant, string> = {
  default: "content-card",
  accent: "content-card content-card--accent",
  dashed: "content-card content-card--dashed",
  compact: "content-card content-card--compact",
  clip: "content-card content-card--clip",
};

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  hover?: boolean;
}

export function Card({
  variant = "default",
  hover = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(variantClass[variant], hover && "card-hover", className)}
      {...props}
    >
      {children}
    </div>
  );
}
