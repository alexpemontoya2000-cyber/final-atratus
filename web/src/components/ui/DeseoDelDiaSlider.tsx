"use client";

import { useState } from "react";

/* ============================================================
   DeseoDelDiaSlider · §2 Audiencia
   Slider de 4 paradas (5 AM · 11 AM · 2 PM · 6 PM) que muestra
   cómo una misma prenda responde a las cuatro condiciones de
   un día en el monte colombiano. Comunica "una sola prenda,
   seis horas" sin párrafos largos.
   ============================================================ */

type Stop = {
  hora: string;
  titulo: string;
  detalle: string;
  bg: string;
  accent: string;
};

const stops: Stop[] = [
  {
    hora: "5:00 AM",
    titulo: "Abriga sin peso.",
    detalle:
      "Niebla densa antes del amanecer. La subida calienta el cuerpo; la prenda saca la humedad de adentro sin perder el calor.",
    bg: "rgba(27, 42, 65, 0.07)",
    accent: "var(--color-deep-blue)",
  },
  {
    hora: "11:00 AM",
    titulo: "Respira hacia afuera.",
    detalle:
      "Sol del trópico pegando. Sale el sudor antes de que aparezca el bochorno. La tela no se pega a la piel.",
    bg: "rgba(212, 165, 64, 0.10)",
    accent: "var(--color-beige-natural)",
  },
  {
    hora: "2:00 PM",
    titulo: "La lluvia rueda.",
    detalle:
      "Aguacero corto de los Andes. No se cala. A los cinco minutos del sol que vuelve, ya está seca de nuevo.",
    bg: "rgba(92, 138, 123, 0.10)",
    accent: "var(--color-seagreen)",
  },
  {
    hora: "6:00 PM",
    titulo: "Cierra y abriga.",
    detalle:
      "Niebla del descenso con viento frío. Vuelve a ser la chaqueta del amanecer — sin haberse sacado de encima.",
    bg: "rgba(31, 61, 46, 0.08)",
    accent: "var(--color-atratus-verde)",
  },
];

export function DeseoDelDiaSlider() {
  const [idx, setIdx] = useState(0);
  const active = stops[idx];
  const trackLeftPct = 100 / (stops.length * 2);
  const trackWidthPct = (idx / (stops.length - 1)) * (100 - trackLeftPct * 2);

  return (
    <div className="rounded-2xl border border-monte/12 bg-hueso-light p-6 md:p-9 lg:p-10">
      <div className="flex items-baseline justify-between gap-6 mb-9 md:mb-10 flex-wrap">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-niebla">
          El deseo de fondo · una sola prenda · seis horas en el monte
        </p>
        <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-monte/45">
          Movete entre las cuatro paradas
        </p>
      </div>

      {/* Slider track + paradas */}
      <div
        className="relative"
        role="group"
        aria-label="Cuatro paradas del día en el monte"
      >
        <div
          className="absolute top-2 h-px bg-monte/15"
          style={{ left: `${trackLeftPct}%`, right: `${trackLeftPct}%` }}
          aria-hidden
        />
        <div
          className="absolute top-2 h-px transition-all duration-500 ease-out"
          style={{
            left: `${trackLeftPct}%`,
            width: `${trackWidthPct}%`,
            background: active.accent,
          }}
          aria-hidden
        />
        <div
          className="relative grid"
          style={{ gridTemplateColumns: `repeat(${stops.length}, 1fr)` }}
        >
          {stops.map((s, i) => {
            const isActive = i === idx;
            return (
              <button
                key={s.hora}
                type="button"
                onClick={() => setIdx(i)}
                aria-pressed={isActive}
                aria-label={`Parada ${s.hora}`}
                className="group flex flex-col items-center gap-4 pt-0 pb-2 cursor-pointer"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ease-out ${
                    isActive
                      ? "h-4 w-4 shadow-[0_0_0_6px_rgba(14,14,14,0.05)]"
                      : "h-2 w-2 group-hover:scale-150"
                  }`}
                  style={{
                    background: isActive ? s.accent : "var(--color-monte)",
                    opacity: isActive ? 1 : 0.28,
                    marginTop: isActive ? "0" : "4px",
                  }}
                  aria-hidden
                />
                <span
                  className={`font-mono text-[11px] tabular tracking-wider transition-all duration-300 ${
                    isActive
                      ? "text-monte font-semibold"
                      : "text-monte/40 group-hover:text-monte/70"
                  }`}
                >
                  {s.hora}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Panel info — cambia con la parada (transición de color + crossfade del texto) */}
      <div
        className="mt-8 md:mt-10 rounded-xl p-6 md:p-8 transition-colors duration-500 ease-out"
        style={{ background: active.bg }}
      >
        <div className="relative grid">
          {stops.map((s, i) => (
            <div
              key={s.hora}
              className="col-start-1 row-start-1 transition-opacity duration-300 ease-out"
              aria-hidden={i !== idx}
              style={{
                opacity: i === idx ? 1 : 0,
                pointerEvents: i === idx ? "auto" : "none",
              }}
            >
              <p
                className="display text-monte"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                  textWrap: "balance",
                }}
              >
                {s.titulo}
              </p>
              <p className="mt-4 text-base md:text-lg text-carbon leading-relaxed max-w-2xl">
                {s.detalle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Cierre fijo — "sin bochorno" (frase defendida del usuario) */}
      <p className="mt-7 md:mt-8 text-sm md:text-base text-carbon leading-relaxed max-w-3xl">
        Cuatro paradas, una sola prenda.{" "}
        <span className="text-atratus-verde font-semibold">
          Y sobre todo sin bochorno — el bochorno es lo peor que les puede pasar
          caminando seis horas.
        </span>
      </p>
    </div>
  );
}
