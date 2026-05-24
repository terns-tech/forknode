import Image from "next/image";
import { cn } from "@/lib/utils";

type TechPartnerLogoProps = {
  src: string;
  name: string;
  colored?: boolean;
  variant?: "light" | "dark";
  className?: string;
};

export function TechPartnerLogo({
  src,
  name,
  colored = false,
  variant = "light",
  className,
}: TechPartnerLogoProps) {
  return (
    <Image
      src={src}
      alt={name}
      width={120}
      height={32}
      className={cn(
        "h-7 w-auto object-contain object-left",
        !colored && variant === "light" && "opacity-80",
        !colored && variant === "dark" && "brightness-0 invert opacity-90",
        className
      )}
    />
  );
}
