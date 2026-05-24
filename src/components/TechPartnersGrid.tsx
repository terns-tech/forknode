import { TechPartnerLogo } from "@/components/TechPartnerLogo";
import { techPartners, techPartnersMore } from "@/lib/tech-partners";
import { cn } from "@/lib/utils";

type TechPartnersGridProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function TechPartnersGrid({
  variant = "light",
  className,
}: TechPartnersGridProps) {
  const panelClass =
    variant === "dark" ? "partners-float-panel" : "partners-float-panel partners-float-panel--light";

  return (
    <div className={cn(panelClass, className)}>
      <div className="partners-float-grid">
        {techPartners.map((partner) => (
          <div key={partner.id} className={cn("partners-float-item", partner.offset)}>
            <TechPartnerLogo
              src={partner.logo}
              name={partner.name}
              colored={partner.colored}
              variant={variant}
              className="h-8"
            />
            <span className="partners-float-name">{partner.name}</span>
          </div>
        ))}
        <div className={cn("partners-float-item", techPartnersMore.offset)}>
          <div className="partners-float-mark partners-float-mark--more">
            <span className="text-2xl font-light leading-none">+</span>
          </div>
          <span className="partners-float-name">{techPartnersMore.label}</span>
        </div>
      </div>
    </div>
  );
}
