import { cn } from "@/lib/cn";

type Tool = {
  name: string;
  role: string;
  cost?: string;
  note?: string;
};

type Props = {
  layerNumber: string;
  layerName: string;
  layerSubtitle: string;
  tools: Tool[];
  status: string;
  accentColor?: "verde" | "azul" | "seagreen" | "beige" | "rojo";
  className?: string;
};

const accentMap: Record<NonNullable<Props["accentColor"]>, string> = {
  verde: "var(--color-atratus-verde)",
  azul: "var(--color-deep-blue)",
  seagreen: "var(--color-seagreen)",
  beige: "var(--color-beige-natural)",
  rojo: "var(--color-rojo-atratus)",
};

export function LayerCard({
  layerNumber,
  layerName,
  layerSubtitle,
  tools,
  status,
  accentColor = "seagreen",
  className,
}: Props) {
  const accent = accentMap[accentColor];

  return (
    <article
      className={cn(
        "relative flex flex-col h-full overflow-hidden",
        "rounded-2xl border border-monte/10 bg-white",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-[2px] hover:shadow-[0_14px_40px_-18px_rgba(14,14,14,0.18)]",
        "hover:border-monte/20",
        className
      )}
    >
      {/* Línea superior acento */}
      <div
        className="h-[3px] w-full"
        style={{ background: accent }}
        aria-hidden
      />

      {/* Header capa */}
      <header className="px-6 md:px-7 pt-7 pb-5">
        <div className="flex items-baseline gap-3">
          <span
            className="text-xs font-mono font-medium uppercase tracking-[0.16em]"
            style={{ color: accent }}
          >
            CAPA {layerNumber}
          </span>
          <span
            className="h-px flex-1"
            style={{ background: `${accent}33` }}
            aria-hidden
          />
        </div>
        <h3
          className="display text-monte mt-3"
          style={{
            fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)",
            lineHeight: 1,
            letterSpacing: "-0.025em",
          }}
        >
          {layerName}
        </h3>
        <p className="mt-3 text-sm text-carbon leading-relaxed">
          {layerSubtitle}
        </p>
      </header>

      {/* Lista de herramientas */}
      <div className="px-6 md:px-7 py-5 border-t border-monte/8 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-niebla mb-4">
          Stack
        </p>
        <ul className="space-y-4">
          {tools.map((tool) => (
            <li key={tool.name} className="flex flex-col gap-1">
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <span className="text-base font-semibold text-monte tracking-tight">
                  {tool.name}
                </span>
                {tool.cost && (
                  <span className="font-mono text-xs text-monte/70 tabular">
                    {tool.cost}
                  </span>
                )}
              </div>
              <p className="text-sm text-carbon leading-snug">{tool.role}</p>
              {tool.note && (
                <p className="text-xs text-niebla leading-snug mt-0.5">
                  {tool.note}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer status */}
      <footer
        className="mt-auto px-6 md:px-7 py-4 border-t border-monte/8 flex items-center gap-2.5"
        style={{ background: `${accent}08` }}
      >
        <span
          className="h-1.5 w-1.5 rounded-full animate-pulse-dot"
          style={{ background: accent }}
          aria-hidden
        />
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-monte">
          {status}
        </span>
      </footer>
    </article>
  );
}
