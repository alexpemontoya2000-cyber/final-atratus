import Image from "next/image";
import { PillButton } from "@/components/ui/PillButton";
import { RoleBadge } from "@/components/ui/RoleBadge";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] w-full flex-col justify-end overflow-hidden"
    >
      {/* Foto full-bleed — Toña y Mate fundadores en el bosque de niebla colombiano */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/atratus/marca/hero-fundadores.png"
          alt="Toña y Mate, fundadores de Atratus, en el bosque de niebla colombiano"
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-[center_center] animate-slow-zoom"
        />
      </div>

      {/* Overlay degradado — más oscuro a la izquierda (donde va el texto), preserva la luz dorada del fondo */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-monte/85 via-monte/45 to-monte/5"
        aria-hidden
      />
      {/* Capa inferior para legibilidad del texto y stamps */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-monte/70 via-monte/15 to-transparent"
        aria-hidden
      />

      {/* Contenido — bottom-left con generous padding (estilo Atratus) */}
      <div className="relative px-6 md:px-12 lg:px-20 2xl:px-32 pb-16 md:pb-20 lg:pb-24 pt-36">
        <div className="mx-auto max-w-[1480px] 2xl:max-w-[1720px]">
          {/* Role badge */}
          <div className="animate-fade-in-up delay-100">
            <RoleBadge role="estratega" variant="dark" />
          </div>

          {/* Stamp — eyebrow */}
          <div className="mt-7 mb-4 flex items-center gap-3 animate-fade-in-up delay-200">
            <span className="h-px w-12 bg-white/40" aria-hidden />
            <span className="text-[11px] uppercase tracking-[0.28em] text-white/80 font-medium">
              Plan Estratégico Digital · 2026 — 2027
            </span>
          </div>

          {/* Headline — display gigante */}
          <h1
            className="display text-white animate-fade-in-up delay-300"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 8rem)",
              lineHeight: 0.92,
            }}
          >
            THE MONEY&apos;S
            <br />
            <span style={{ color: "var(--color-beige-natural)" }}>
              IN THE LIST.
            </span>
          </h1>

          {/* Traducción / sub-display editorial */}
          <p
            className="mt-5 text-white/65 italic animate-fade-in-up delay-300"
            style={{
              fontSize: "clamp(1.05rem, 1.8vw, 1.5rem)",
              letterSpacing: "-0.01em",
            }}
          >
            — el dinero está en la lista.
          </p>

          {/* Subtítulo — modo manifiesto · voz Alex · anáfora pretérita + bisagra */}
          <p className="mt-8 max-w-2xl text-base md:text-lg lg:text-xl text-white/85 leading-relaxed animate-fade-in-up delay-400">
            Hicieron la marca. Construyeron la comunidad. Trajeron los clientes.
            Lo que falta es el sistema que conecta las tres y los hace volver.
            Eso es lo que les vamos a mostrar.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 animate-fade-in-up delay-500">
            <PillButton href="#diagnostico" variant="solid-dark" size="lg">
              Ver la propuesta
              <span aria-hidden className="text-xs">↓</span>
            </PillButton>
            <PillButton
              href="https://atratus.vercel.app/"
              variant="outline-dark"
              size="lg"
              ariaLabel="Ver el primer artículo SEO publicado"
            >
              Ver el primer artículo en vivo
            </PillButton>
          </div>

          {/* Footer stamps — credibilidad concreta */}
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.2em] text-white/55 animate-fade-in-up delay-700">
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white/55" aria-hidden />
              4 voces · 1 plan
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white/55" aria-hidden />
              11 minutos
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white/55" aria-hidden />
              7 partes
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white/55" aria-hidden />
              $6M COP · ROAS 3.74x → 4.83x
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator — micro detalle */}
      <div className="pointer-events-none absolute bottom-6 right-6 md:right-12 lg:right-20 hidden md:flex flex-col items-center gap-3 animate-fade-in delay-1000">
        <span className="text-[10px] uppercase tracking-[0.28em] text-white/60 [writing-mode:vertical-rl] rotate-180">
          Scroll
        </span>
        <span className="block h-12 w-px bg-gradient-to-b from-white/60 to-transparent" aria-hidden />
      </div>
    </section>
  );
}
