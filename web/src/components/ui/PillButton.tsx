import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "solid-light" | "outline-light" | "solid-dark" | "outline-dark";
type Size = "sm" | "md" | "lg";

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
};

const variants: Record<Variant, string> = {
  // Sobre fondo claro (hueso o blanco)
  "solid-light":
    "bg-monte text-hueso hover:bg-monte-soft active:scale-[0.98] shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset]",
  "outline-light":
    "border border-monte/30 text-monte hover:bg-monte hover:text-hueso hover:border-monte active:scale-[0.98]",
  // Sobre fondo oscuro o foto
  "solid-dark":
    "bg-white text-monte hover:bg-hueso-light active:scale-[0.98] shadow-[0_1px_3px_rgba(0,0,0,0.18)]",
  "outline-dark":
    "border border-white/80 text-white hover:bg-white hover:text-monte active:scale-[0.98] backdrop-blur-sm",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs tracking-wide",
  md: "px-6 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-sm tracking-wide",
};

export function PillButton({
  children,
  variant = "solid-dark",
  size = "md",
  href,
  onClick,
  className,
  ariaLabel,
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-monte focus-visible:ring-offset-2",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </button>
  );
}
