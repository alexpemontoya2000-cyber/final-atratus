"use client";

import Image from "next/image";
import { roles } from "@/lib/roles";

/* ============================================================
   §6 CIERRE · CMO/Estratega · Manifiesto + Cronista
   0:30 min · Última frase del pitch
   ============================================================ */

const equipoRoles = [
  roles.estratega,
  roles.contenidos,
  roles.growth,
  roles.revops,
];

export function Cierre() {
  return (
    <section
      id="cierre"
      className="relative isolate flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-monte"
    >
      {/* Foto full-bleed — Toña y Mate (cierra el círculo del Hero) */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/atratus/marca/hero-fundadores.png"
          alt="Toña y Mate, fundadores de Atratus, en el bosque colombiano"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover animate-slow-zoom"
        />
      </div>

      {/* Overlay degradado — más oscuro abajo para legibilidad */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-monte/95 via-monte/55 to-monte/20"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-monte/60 via-transparent to-monte/10"
        aria-hidden
      />

      {/* Contenido — bottom-left con respiración */}
      <div className="relative px-6 md:px-12 lg:px-20 2xl:px-32 pb-16 md:pb-20 lg:pb-24 pt-32">
        <div className="mx-auto max-w-[1480px] 2xl:max-w-[1720px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-12 bg-white/40" aria-hidden />
            <span className="text-[11px] uppercase tracking-[0.28em] text-white/75 font-medium">
              Y eso es todo
            </span>
          </div>

          {/* Frase final manifesto */}
          <h2
            className="display text-white"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 7rem)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              textWrap: "balance",
            }}
          >
            La marca ya está.
            <br />
            La gente ya está.
            <br />
            <span style={{ color: "var(--color-beige-natural)" }}>
              El sistema apenas se enciende.
            </span>
          </h2>

          {/* Agradecimiento */}
          <p className="mt-12 max-w-2xl text-base md:text-lg lg:text-xl text-white/75 italic leading-relaxed">
            Gracias por dejarnos sentarnos a la mesa.
          </p>

          {/* Línea separadora */}
          <div className="mt-14 md:mt-20 h-px bg-white/15 max-w-3xl" />

          {/* Créditos equipo — 4 roles */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8 max-w-5xl">
            {equipoRoles.map((r) => (
              <div key={r.id} className="flex items-start gap-3">
                <span
                  className="h-1.5 w-1.5 rounded-full mt-1.5 shrink-0"
                  style={{ background: r.colorOnDark }}
                  aria-hidden
                />
                <div>
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-0.5"
                    style={{ color: r.colorOnDark }}
                  >
                    {r.rolNumber}
                  </p>
                  <p className="text-sm font-semibold text-white leading-tight">
                    {r.title}
                  </p>
                  <p className="mt-1 text-xs text-white/55 leading-snug">
                    {r.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stamp institucional */}
          <div className="mt-10 pt-6 border-t border-white/10 max-w-5xl flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/45 font-medium">
              Pitch Atratus 2026
            </span>
            <span className="text-white/15">·</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/45 font-medium">
              Equipo de 4 voces
            </span>
            <span className="text-white/15">·</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/45 font-medium">
              Esumer · Negocios Digitales
            </span>
            <span className="text-white/15">·</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-white/45 font-medium">
              Docente Santiago Herrera
            </span>
          </div>
        </div>
      </div>

      {/* Volver al principio — sutil esquina inferior derecha */}
      <button
        onClick={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className="absolute bottom-6 right-6 md:right-12 lg:right-20 hidden md:flex flex-col items-center gap-3 text-white/55 hover:text-white transition-colors"
        aria-label="Volver al principio del pitch"
      >
        <span className="block h-12 w-px bg-gradient-to-t from-white/55 to-transparent" aria-hidden />
        <span className="text-[10px] uppercase tracking-[0.28em] [writing-mode:vertical-rl]">
          Volver al principio
        </span>
      </button>
    </section>
  );
}
