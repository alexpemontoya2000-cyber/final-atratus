import { roles, type RoleId } from "@/lib/roles";
import { cn } from "@/lib/cn";

type Props = {
  role: RoleId;
  variant?: "light" | "dark";
  className?: string;
};

export function RoleBadge({ role, variant = "light", className }: Props) {
  const r = roles[role];
  const colorVar = variant === "dark" ? r.colorOnDark : r.color;

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full px-3 py-1.5",
        variant === "light"
          ? "bg-monte/[0.04] border border-monte/10"
          : "bg-white/10 border border-white/20 backdrop-blur-md",
        className
      )}
    >
      <span
        className="h-1.5 w-1.5 rounded-full animate-pulse-dot"
        style={{ background: colorVar }}
        aria-hidden
      />
      <span
        className={cn(
          "text-[10px] font-semibold uppercase tracking-[0.14em]",
          variant === "light" ? "text-monte" : "text-white"
        )}
      >
        {r.rolNumber} · {r.title}
      </span>
    </div>
  );
}
