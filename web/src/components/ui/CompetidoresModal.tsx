"use client";

import { useRef, useState, useEffect } from "react";

/* ============================================================
   CompetidoresModal — la cancha competitiva en un pop-up
   Toggle "Solo marca" / "Marca + Sistema digital".
   Por defecto todos parecen grandes. Al activar sistema,
   se revela que Atratus tiene la mitad del sistema digital
   prendido. Patrón gemelo de CheckoutDemoModal.
   ============================================================ */

type Estado = "si" | "parcial" | "no";

type Marca = {
  id: string;
  nombre: string;
  origen: string;
  ig: string;
  highlighted?: boolean;
  tienda: Estado;
  comunidad: Estado;
  email: Estado;
  contenidoSitio: Estado;
};

const marcas: Marca[] = [
  {
    id: "cotopaxi",
    nombre: "Cotopaxi",
    origen: "USA · B Corp",
    ig: "553K seguidores",
    tienda: "si",
    comunidad: "si",
    email: "si",
    contenidoSitio: "si",
  },
  {
    id: "tnf",
    nombre: "The North Face",
    origen: "USA · presente en Colombia",
    ig: "global",
    tienda: "si",
    comunidad: "si",
    email: "si",
    contenidoSitio: "si",
  },
  {
    id: "randes",
    nombre: "Rutas Andes",
    origen: "Colombia · senderismo directo",
    ig: "comunidad menor",
    tienda: "si",
    comunidad: "parcial",
    email: "parcial",
    contenidoSitio: "no",
  },
  {
    id: "atratus",
    nombre: "Atratus",
    origen: "Antioquia · outdoor científico",
    ig: "81K · 777 posts",
    highlighted: true,
    tienda: "si",
    comunidad: "si",
    email: "parcial",
    contenidoSitio: "no",
  },
];

const checks: { key: keyof Pick<Marca, "tienda" | "comunidad" | "email" | "contenidoSitio">; label: string; sub: string }[] = [
  { key: "tienda", label: "Tienda online", sub: "e-commerce propio" },
  { key: "comunidad", label: "Comunidad orgánica", sub: "IG activo con seguidores reales" },
  { key: "email", label: "Email automatizado", sub: "flujos, no solo formulario" },
  { key: "contenidoSitio", label: "Contenido en sitio", sub: "blog o lead magnet propio" },
];

function Dot({ estado }: { estado: Estado }) {
  const color =
    estado === "si"
      ? "var(--color-atratus-verde)"
      : estado === "parcial"
      ? "var(--color-rojo-atratus)"
      : "transparent";
  const ring = estado === "no" ? "1.5px solid var(--color-niebla)" : "none";
  return (
    <span
      className="inline-flex h-2.5 w-2.5 rounded-full shrink-0"
      style={{
        background: color,
        border: ring,
        opacity: estado === "parcial" ? 0.85 : 1,
      }}
      aria-hidden
    />
  );
}

function labelEstado(estado: Estado): string {
  if (estado === "si") return "Sí";
  if (estado === "parcial") return "Parcial";
  return "No";
}

export function CompetidoresModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [modo, setModo] = useState<"marca" | "sistema">("marca");

  const open = () => {
    setModo("marca");
    dialogRef.current?.showModal();
  };
  const close = () => {
    dialogRef.current?.close();
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClick = (e: MouseEvent) => {
      if (e.target === dialog) close();
    };
    dialog.addEventListener("click", handleClick);
    return () => dialog.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {/* Botón disparador — ping verde (gemelo del rojo del checkout) */}
      <div className="flex flex-col items-start gap-3">
        <button
          type="button"
          onClick={open}
          className="group inline-flex items-center gap-3 rounded-full bg-monte text-white px-7 py-3.5 text-base font-semibold tracking-tight transition-all duration-300 hover:bg-monte/90 hover:shadow-[0_18px_40px_-18px_rgba(14,14,14,0.45)] hover:-translate-y-[1px]"
          aria-haspopup="dialog"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-atratus-verde opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-atratus-verde" />
          </span>
          Pop up · La cancha completa
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
            ↗
          </span>
        </button>
        <p className="text-sm text-niebla font-medium">
          Quién juega outdoor en Colombia y qué tiene Atratus que no tienen.
        </p>
      </div>

      {/* Modal */}
      <dialog
        ref={dialogRef}
        className="
          fixed inset-0 m-auto w-[min(720px,calc(100vw-2rem))] max-h-[min(92vh,820px)]
          rounded-2xl border border-monte/10 bg-white p-0 shadow-[0_40px_80px_-20px_rgba(14,14,14,0.35)]
          backdrop:bg-monte/60 backdrop:backdrop-blur-sm
          open:animate-fade-in
        "
        aria-labelledby="competidores-title"
      >
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-monte/8">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-atratus-verde opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-atratus-verde" />
            </span>
            <p
              id="competidores-title"
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-niebla font-semibold"
            >
              La cancha · outdoor Colombia 2026
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            className="text-monte/40 hover:text-monte transition-colors text-xl leading-none w-8 h-8 rounded-full flex items-center justify-center hover:bg-monte/5"
            aria-label="Cerrar"
          >
            ×
          </button>
        </header>

        {/* Toggle */}
        <div className="px-6 pt-5 pb-4 border-b border-monte/8 bg-hueso-light/40">
          <p className="text-[10px] uppercase tracking-[0.22em] text-niebla font-semibold mb-3">
            Cambiá la mirada
          </p>
          <div
            role="tablist"
            aria-label="Cambiar vista de la cancha competitiva"
            className="inline-flex rounded-full border border-monte/12 bg-white p-1 gap-1"
          >
            <button
              type="button"
              role="tab"
              aria-selected={modo === "marca"}
              onClick={() => setModo("marca")}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] rounded-full transition-all ${
                modo === "marca"
                  ? "bg-monte text-white"
                  : "text-monte/55 hover:text-monte"
              }`}
            >
              Solo marca
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={modo === "sistema"}
              onClick={() => setModo("sistema")}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] rounded-full transition-all ${
                modo === "sistema"
                  ? "bg-monte text-white"
                  : "text-monte/55 hover:text-monte"
              }`}
            >
              Marca + Sistema digital
            </button>
          </div>
        </div>

        {/* Lista de marcas */}
        <div className="px-6 py-5 space-y-3 overflow-y-auto max-h-[58vh]">
          {marcas.map((m) => (
            <article
              key={m.id}
              className={`relative rounded-xl border p-4 transition-all duration-500 ${
                m.highlighted
                  ? "border-atratus-verde/40 bg-atratus-verde/5"
                  : "border-monte/10 bg-white"
              }`}
            >
              {/* Cabecera de marca */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {m.highlighted && (
                    <p className="text-[10px] uppercase tracking-[0.18em] text-atratus-verde font-semibold mb-1">
                      Acá estás vos
                    </p>
                  )}
                  <p className="text-base font-semibold text-monte leading-tight">
                    {m.nombre}
                  </p>
                  <p className="text-xs text-niebla mt-0.5">
                    {m.origen} · {m.ig}
                  </p>
                </div>
              </div>

              {/* Checks — solo aparecen en modo sistema */}
              {modo === "sistema" && (
                <div className="mt-4 pt-4 border-t border-monte/8 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3 animate-fade-in-up">
                  {checks.map((c) => (
                    <div key={c.key} className="flex items-start gap-2">
                      <span className="mt-1">
                        <Dot estado={m[c.key]} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.16em] text-niebla font-semibold leading-tight">
                          {c.label}
                        </p>
                        <p className="text-[11px] text-monte mt-0.5 leading-snug">
                          {labelEstado(m[c.key])}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Footer dinámico — cambia según el modo */}
        <footer className="px-6 py-5 border-t border-monte/8 bg-hueso-light/60">
          {modo === "marca" ? (
            <p className="text-sm text-monte leading-snug animate-fade-in">
              Cuatro marcas. Cuatro tamaños.{" "}
              <span className="text-niebla">
                Desde acá Atratus se ve chiquita al lado de Cotopaxi y The North Face.
                Pero esa no es la cancha que importa — prendé el sistema digital.
              </span>
            </p>
          ) : (
            <div className="animate-fade-in">
              <p className="text-sm text-monte leading-snug font-medium">
                Atratus ya tiene los dos activos más difíciles de construir:{" "}
                <span className="text-atratus-verde">
                  marca con identidad propia y 81K personas que la siguen.
                </span>
              </p>
              <p className="mt-2 text-[11px] text-niebla italic leading-snug">
                Lo que falta — email automatizado y contenido propio en el sitio —
                se construye en meses, no en años. Es el engranaje del medio que
                conecta la audiencia con la tienda.
              </p>
            </div>
          )}
        </footer>
      </dialog>
    </>
  );
}
