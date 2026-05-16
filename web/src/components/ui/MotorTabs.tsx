"use client";

import { useState, type ReactNode } from "react";

/* ============================================================
   MotorTabs · §3 Motor de Adquisición
   Dos botones grandes (SEO · Publicidad). Solo el contenido del
   activo se renderiza al 100% — el otro queda en opacity 0,
   pointer-events none. Transición 300ms para coherencia con los
   demás dinámicos del pitch.
   ============================================================ */

type MotorTabsProps = {
  seoContent: ReactNode;
  pautaContent: ReactNode;
  className?: string;
};

export function MotorTabs({
  seoContent,
  pautaContent,
  className = "",
}: MotorTabsProps) {
  const [active, setActive] = useState<"seo" | "pauta">("seo");
  const isSeo = active === "seo";

  return (
    <div className={className}>
      {/* Dos botones grandes lado a lado */}
      <div
        role="tablist"
        aria-label="Frentes del motor de adquisición"
        className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-10 md:mb-14"
      >
        <button
          type="button"
          role="tab"
          onClick={() => setActive("seo")}
          aria-selected={isSeo}
          aria-controls="motor-panel-seo"
          id="motor-tab-seo"
          className={`group relative overflow-hidden rounded-2xl border p-7 md:p-9 lg:p-11 text-left transition-all duration-300 ease-out cursor-pointer ${
            isSeo
              ? "border-monte bg-monte text-white shadow-[0_18px_50px_-22px_rgba(14,14,14,0.35)]"
              : "border-monte/15 bg-white text-monte hover:border-monte/40 hover:-translate-y-[2px] hover:shadow-[0_14px_38px_-20px_rgba(14,14,14,0.18)]"
          }`}
        >
          <div className="flex items-center gap-2.5 mb-4">
            <span
              className={`h-1.5 w-1.5 rounded-full transition-all ${
                isSeo ? "animate-pulse-dot bg-white" : "bg-monte/40"
              }`}
              aria-hidden
            />
            <span
              className={`text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.24em] ${
                isSeo ? "text-white/70" : "text-niebla"
              }`}
            >
              Frente 1 · El que trabaja gratis
            </span>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <h3
              className="display"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              SEO
            </h3>
            <span
              className={`text-2xl md:text-3xl leading-none transition-transform duration-300 ${
                isSeo ? "rotate-45" : "rotate-0 opacity-40"
              }`}
              aria-hidden
            >
              +
            </span>
          </div>
          <p
            className={`mt-3 text-xs md:text-sm leading-snug ${
              isSeo ? "text-white/65" : "text-niebla"
            }`}
          >
            24/7 · sin costo por click
          </p>
        </button>

        <button
          type="button"
          role="tab"
          onClick={() => setActive("pauta")}
          aria-selected={!isSeo}
          aria-controls="motor-panel-pauta"
          id="motor-tab-pauta"
          className={`group relative overflow-hidden rounded-2xl border p-7 md:p-9 lg:p-11 text-left transition-all duration-300 ease-out cursor-pointer ${
            !isSeo
              ? "border-monte bg-monte text-white shadow-[0_18px_50px_-22px_rgba(14,14,14,0.35)]"
              : "border-monte/15 bg-white text-monte hover:border-monte/40 hover:-translate-y-[2px] hover:shadow-[0_14px_38px_-20px_rgba(14,14,14,0.18)]"
          }`}
        >
          <div className="flex items-center gap-2.5 mb-4">
            <span
              className={`h-1.5 w-1.5 rounded-full transition-all ${
                !isSeo ? "animate-pulse-dot" : ""
              }`}
              style={{
                background: !isSeo
                  ? "var(--color-deep-blue)"
                  : "rgba(14,14,14,0.4)",
              }}
              aria-hidden
            />
            <span
              className={`text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.24em] ${
                !isSeo ? "text-white/70" : "text-niebla"
              }`}
            >
              Frente 2 · El que acelera
            </span>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <h3
              className="display"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              Publicidad
            </h3>
            <span
              className={`text-2xl md:text-3xl leading-none transition-transform duration-300 ${
                !isSeo ? "rotate-45" : "rotate-0 opacity-40"
              }`}
              aria-hidden
            >
              +
            </span>
          </div>
          <p
            className={`mt-3 text-xs md:text-sm leading-snug ${
              !isSeo ? "text-white/65" : "text-niebla"
            }`}
          >
            Google + Meta · 3 campañas
          </p>
        </button>
      </div>

      {/* Paneles apilados — crossfade 300ms */}
      <div className="relative grid">
        <div
          id="motor-panel-seo"
          role="tabpanel"
          aria-labelledby="motor-tab-seo"
          className="col-start-1 row-start-1 transition-opacity duration-300 ease-out"
          aria-hidden={!isSeo}
          style={{
            opacity: isSeo ? 1 : 0,
            pointerEvents: isSeo ? "auto" : "none",
          }}
        >
          {seoContent}
        </div>
        <div
          id="motor-panel-pauta"
          role="tabpanel"
          aria-labelledby="motor-tab-pauta"
          className="col-start-1 row-start-1 transition-opacity duration-300 ease-out"
          aria-hidden={isSeo}
          style={{
            opacity: isSeo ? 0 : 1,
            pointerEvents: isSeo ? "none" : "auto",
          }}
        >
          {pautaContent}
        </div>
      </div>
    </div>
  );
}
