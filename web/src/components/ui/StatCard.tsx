import { cn } from "@/lib/cn";

type Props = {
  label: string;
  value: string;
  suffix?: string;
  prefix?: string;
  hint?: string;
  delta?: { value: string; direction: "up" | "down" | "neutral" };
  variant?: "light" | "elevated";
  className?: string;
};

export function StatCard({
  label,
  value,
  suffix,
  prefix,
  hint,
  delta,
  variant = "light",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between gap-6",
        "rounded-2xl border p-6 md:p-7",
        "transition-all duration-300 ease-out",
        variant === "light"
          ? "bg-white border-monte/10 hover:border-monte/20"
          : "bg-hueso-light border-monte/8 hover:border-monte/15",
        "hover:-translate-y-[2px] hover:shadow-[0_8px_30px_-12px_rgba(14,14,14,0.12)]",
        className
      )}
    >
      {/* Label superior */}
      <div className="flex items-start justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-niebla">
          {label}
        </p>
        {delta && (
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-2 py-0.5",
              "text-[10px] font-semibold uppercase tracking-wider",
              delta.direction === "down" &&
                "bg-rojo-atratus/8 text-rojo-atratus",
              delta.direction === "up" && "bg-seagreen/12 text-seagreen",
              delta.direction === "neutral" && "bg-monte/5 text-carbon"
            )}
          >
            {delta.direction === "down" && "↓"}
            {delta.direction === "up" && "↑"}
            {delta.value}
          </span>
        )}
      </div>

      {/* Número protagonista */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-baseline gap-1.5 tabular">
          {prefix && (
            <span className="text-xl font-medium text-carbon">{prefix}</span>
          )}
          <span
            className="display text-monte tabular"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
            }}
          >
            {value}
          </span>
          {suffix && (
            <span className="text-base font-medium text-carbon">{suffix}</span>
          )}
        </div>
        {hint && (
          <p className="text-xs text-niebla leading-snug">{hint}</p>
        )}
      </div>
    </div>
  );
}
