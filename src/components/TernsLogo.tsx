import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SIZE_MAP = { xs: 44, sm: 56, md: 72, lg: 80 } as const;

export const TERN_ICON = {
  white: "/icon-white.png",
  black: "/icon-black.png",
} as const;

export type TernsLogoProps = {
  size?: keyof typeof SIZE_MAP | number;
  showName?: boolean;
  label?: string;
  nameClassName?: string;
  href?: string | null;
  className?: string;
  priority?: boolean;
  /** auto = theme-aware; white = always white icon (footer); black = always black icon */
  iconVariant?: "auto" | "white" | "black" | "light" | "dark";
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
  const forcedWhite = iconVariant === "white" || iconVariant === "light";
  const forcedBlack = iconVariant === "black" || iconVariant === "dark";

  const icon = forcedWhite ? (
    <Image
      src={TERN_ICON.white}
      alt="Terns"
      fill
      className={imageClass}
      priority={priority}
    />
  ) : forcedBlack ? (
    <Image
      src={TERN_ICON.black}
      alt="Terns"
      fill
      className={imageClass}
      priority={priority}
    />
  ) : (
    <>
      <Image
        src={TERN_ICON.black}
        alt="Terns"
        fill
        className={cn(imageClass, "dark:hidden")}
        priority={priority}
      />
      <Image
        src={TERN_ICON.white}
        alt="Terns"
        fill
        className={cn(imageClass, "hidden dark:block")}
        priority={priority}
      />
    </>
  );

  const content = (
    <div className={cn("flex items-center gap-2 sm:gap-2.5 min-w-0", className)}>
      <div className="relative shrink-0" style={{ width: px, height: px }}>
        {icon}
      </div>
      {showName && (
        <span
          className={cn(
            "font-semibold text-[15px] sm:text-[17px] tracking-[-0.5px] truncate",
            forcedWhite ? "footer-wordmark" : "text-ink",
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
      <Link href={href} aria-label="Terns home" className="inline-flex min-w-0 max-w-full">
        {content}
      </Link>
    );
  }

  return content;
}
