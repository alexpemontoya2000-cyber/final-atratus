import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  number: string;
  segment: string;
  age: string;
  image: string;
  imageAlt: string;
  busca: string[];
  hook: string;
  signature: string;
  productHint: string;
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

export function PersonaCard({
  number,
  segment,
  age,
  image,
  imageAlt,
  busca,
  hook,
  signature,
  productHint,
  accentColor = "verde",
  className,
}: Props) {
  const accent = accentMap[accentColor];

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "bg-monte transition-all duration-500 ease-out",
        "hover:-translate-y-[3px] hover:shadow-[0_20px_60px_-20px_rgba(14,14,14,0.5)]",
        "flex flex-col h-full min-h-[640px] md:min-h-[680px]",
        className
      )}
    >
      {/* Foto top — el rostro del segmento */}
      <div className="relative h-[280px] md:h-[320px] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          quality={88}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Gradiente para legibilidad del badge */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-monte/35 via-transparent to-monte/45"
          aria-hidden
        />
        {/* Número Rol en esquina */}
        <div className="absolute top-5 left-5 flex items-center gap-2.5">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: accent }}
            aria-hidden
          />
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
            {number}
          </span>
        </div>
      </div>

      {/* Línea acento */}
      <div
        className="h-[3px] w-full"
        style={{ background: accent }}
        aria-hidden
      />

      {/* Contenido inferior */}
      <div className="flex flex-col flex-1 p-6 md:p-7 gap-5">
        {/* Segmento + edad */}
        <header>
          <h3
            className="display text-white"
            style={{
              fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
              lineHeight: 1,
              letterSpacing: "-0.025em",
            }}
          >
            {segment}
          </h3>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/55 font-medium">
            {age}
          </p>
        </header>

        {/* Qué busca */}
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55 mb-2.5">
            Qué busca
          </p>
          <ul className="space-y-1.5">
            {busca.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-white/85 leading-relaxed"
              >
                <span
                  className="mt-2 h-1 w-1 flex-shrink-0 rounded-full"
                  style={{ background: accent }}
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Hook / cita representativa */}
        <blockquote
          className="mt-auto pt-5 border-t border-white/12"
        >
          <p className="text-sm md:text-[15px] italic text-white/85 leading-relaxed">
            “{hook}”
          </p>
          <footer className="mt-3 flex items-center justify-between gap-3">
            <span className="text-[10px] uppercase tracking-[0.18em] text-white/45">
              {signature}
            </span>
            <span
              className="text-[10px] uppercase tracking-[0.18em] font-semibold"
              style={{ color: accent }}
            >
              {productHint}
            </span>
          </footer>
        </blockquote>
      </div>
    </article>
  );
}
