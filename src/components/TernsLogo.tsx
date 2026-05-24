import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SIZE_MAP = { sm: 64, md: 72, lg: 80 } as const;

export const TERN_ICON = {
  light: "/icon-light.png",
  dark: "/icon2.png",
} as const;

export type TernsLogoProps = {
  size?: keyof typeof SIZE_MAP | number;
  showName?: boolean;
  label?: string;
  nameClassName?: string;
  href?: string | null;
  className?: string;
  priority?: boolean;
  /** When set, always shows that icon (e.g. light logo on dark footer). */
  iconVariant?: "auto" | "light" | "dark";
};

export function TernsLogo({
  size = "sm",
  showName = true,
  label = "Terns",
  nameClassName,
  href = "/",
  className,
  priority,
  iconVariant = "auto",
}: TernsLogoProps) {
  const px = typeof size === "number" ? size : SIZE_MAP[size];
  const imageClass = "rounded-full object-cover";

  const icon =
    iconVariant === "auto" ? (
      <>
        <Image
          src={TERN_ICON.light}
          alt="Terns"
          fill
          className={cn(imageClass, "dark:hidden")}
          priority={priority}
        />
        <Image
          src={TERN_ICON.dark}
          alt="Terns"
          fill
          className={cn(imageClass, "hidden dark:block")}
          priority={priority}
        />
      </>
    ) : (
      <Image
        src={iconVariant === "light" ? TERN_ICON.light : TERN_ICON.dark}
        alt="Terns"
        fill
        className={imageClass}
        priority={priority}
      />
    );

  const content = (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div
        className="relative flex-shrink-0"
        style={{ width: px, height: px }}
      >
        {icon}
      </div>
      {showName && (
        <span
          className={cn(
            "font-semibold text-[17px] tracking-[-0.5px] text-ink",
            nameClassName
          )}
        >
          {label}
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="Terns home" className="inline-flex">
        {content}
      </Link>
    );
  }

  return content;
}
