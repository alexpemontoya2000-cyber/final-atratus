import Image from "next/image";
import { cn } from "@/lib/cn";

type Props = {
  number: string;
  unit?: string;
  title: string;
  description: string;
  source?: string;
  image: string;
  imageAlt: string;
  accentColor?: "verde" | "azul" | "seagreen" | "rojo" | "beige";
  className?: string;
};

const accentMap: Record<NonNullable<Props["accentColor"]>, string> = {
  verde: "var(--color-atratus-verde)",
  azul: "var(--color-deep-blue)",
  seagreen: "var(--color-seagreen)",
  rojo: "var(--color-rojo-atratus)",
  beige: "var(--color-beige-natural)",
};

export function OpportunityCard({
  number,
  unit,
  title,
  description,
  source,
  image,
  imageAlt,
  accentColor = "verde",
  className,
}: Props) {
  const accent = accentMap[accentColor];

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "bg-monte transition-all duration-500 ease-out",
        "hover:-translate-y-[3px] hover:shadow-[0_20px_60px_-20px_rgba(14,14,14,0.4)]",
        "h-[460px] md:h-[520px] flex flex-col",
        className
      )}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={imageAlt}
          fill
          quality={85}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Overlay para legibilidad */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-monte/95 via-monte/55 to-monte/15"
          aria-hidden
        />
      </div>

      {/* Línea superior del color de acento */}
      <div
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ background: accent }}
        aria-hidden
      />

      {/* Contenido */}
      <div className="relative flex flex-col justify-end h-full p-6 md:p-7">
        {/* Número protagonista */}
        <div className="mb-2">
          <div className="flex items-baseline gap-1.5 tabular">
            <span
              className="display text-white"
              style={{
                fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.04em",
              }}
            >
              {number}
            </span>
            {unit && (
              <span className="text-sm md:text-base font-medium text-white/80">
                {unit}
              </span>
            )}
          </div>
        </div>

        {/* Título */}
        <h3
          className="text-white text-lg md:text-xl font-semibold leading-tight tracking-tight mb-2.5"
          style={{ textWrap: "balance" }}
        >
          {title}
        </h3>

        {/* Descripción */}
        <p className="text-sm text-white/75 leading-relaxed mb-4">
          {description}
        </p>

        {/* Fuente */}
        {source && (
          <div className="flex items-center gap-2 pt-3 border-t border-white/15">
            <span
              className="h-1 w-1 rounded-full"
              style={{ background: accent }}
              aria-hidden
            />
            <span className="text-[10px] uppercase tracking-[0.18em] text-white/55 font-medium">
              {source}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
