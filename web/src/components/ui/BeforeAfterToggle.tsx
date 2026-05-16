"use client";

import { useState, type ReactNode } from "react";

/* ============================================================
   BeforeAfterToggle · patrón Sin / Con para el pitch Atratus
   Switch binario que vive arriba del bloque. Cambia el contenido
   sin saltos: dos capas apiladas en el mismo grid cell con
   transición de opacidad de 300ms.
   ============================================================ */

type BeforeAfterToggleProps = {
  before: ReactNode;
  after: ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
  ariaGroupLabel?: string;
  className?: string;
};

export function BeforeAfterToggle({
  before,
  after,
  beforeLabel = "Sin sistema",
  afterLabel = "Con sistema",
  ariaGroupLabel,
  className = "",
}: BeforeAfterToggleProps) {
  const [active, setActive] = useState<"before" | "after">("before");
  const isBefore = active === "before";

  return (
    <div className={className}>
      <div className="flex justify-end mb-8 md:mb-10">
        <div
          role="group"
          aria-label={ariaGroupLabel ?? `${beforeLabel} versus ${afterLabel}`}
          className="inline-flex items-center p-1 rounded-full bg-monte/[0.05] border border-monte/12 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setActive("before")}
            aria-pressed={isBefore}
            className={`px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] rounded-full transition-all duration-300 ease-out ${
              isBefore
                ? "bg-monte text-hueso shadow-[0_2px_8px_-2px_rgba(14,14,14,0.25)]"
                : "text-monte/55 hover:text-monte"
            }`}
          >
            {beforeLabel}
          </button>
          <button
            type="button"
            onClick={() => setActive("after")}
            aria-pressed={!isBefore}
            className={`px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] rounded-full transition-all duration-300 ease-out ${
              !isBefore
                ? "bg-atratus-verde text-hueso shadow-[0_2px_8px_-2px_rgba(31,61,46,0.35)]"
                : "text-monte/55 hover:text-monte"
            }`}
          >
            {afterLabel}
          </button>
        </div>
      </div>

      <div className="relative grid">
        <div
          className="col-start-1 row-start-1 transition-opacity duration-300 ease-out"
          aria-hidden={!isBefore}
          style={{
            opacity: isBefore ? 1 : 0,
            pointerEvents: isBefore ? "auto" : "none",
          }}
        >
          {before}
        </div>
        <div
          className="col-start-1 row-start-1 transition-opacity duration-300 ease-out"
          aria-hidden={isBefore}
          style={{
            opacity: isBefore ? 0 : 1,
            pointerEvents: isBefore ? "none" : "auto",
          }}
        >
          {after}
        </div>
      </div>
    </div>
  );
}
