"use client";

import { useRef, useState, useEffect } from "react";

/* ============================================================
   CheckoutDemoModal — demo interactivo de la cascada de upsell
   Abre un modal con un checkout simulado de Atratus.
   El cliente entra con la chaqueta. Se le ofrece cuellito.
   Si acepta, se le ofrece camibuso. Total sube hasta +78%.
   ============================================================ */

const BASE_AOV = 210000;
const CUELLITO_PRICE = 29900;
const CUELLITO_BASE = 39900;
const CAMIBUSO_PRICE = 169000;
const CAMIBUSO_BASE = 199000;

function formatCOP(value: number): string {
  return `$${value.toLocaleString("es-CO")}`;
}

export function CheckoutDemoModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [cuellito, setCuellito] = useState(false);
  const [camibuso, setCamibuso] = useState(false);

  const total = BASE_AOV + (cuellito ? CUELLITO_PRICE : 0) + (camibuso ? CAMIBUSO_PRICE : 0);
  const delta = total - BASE_AOV;
  const percent = Math.round((delta / BASE_AOV) * 100);

  const open = () => {
    setCuellito(false);
    setCamibuso(false);
    dialogRef.current?.showModal();
  };
  const close = () => {
    dialogRef.current?.close();
  };

  // Cerrar con tecla Escape ya está nativo en <dialog>. Pero también queremos cerrar al clickear backdrop.
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
      {/* Botón disparador */}
      <div className="flex flex-col items-start gap-3">
        <button
          type="button"
          onClick={open}
          className="group inline-flex items-center gap-3 rounded-full bg-monte text-white px-7 py-3.5 text-base font-semibold tracking-tight transition-all duration-300 hover:bg-monte/90 hover:shadow-[0_18px_40px_-18px_rgba(14,14,14,0.45)] hover:-translate-y-[1px]"
          aria-haspopup="dialog"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-seagreen opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-seagreen" />
          </span>
          Pop up
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
            ↗
          </span>
        </button>
        <p className="text-sm text-niebla font-medium">
          Cascada en checkout, ejemplo real.
        </p>
      </div>

      {/* Modal */}
      <dialog
        ref={dialogRef}
        className="
          fixed inset-0 m-auto w-[min(560px,calc(100vw-2rem))] max-h-[min(90vh,720px)]
          rounded-2xl border border-monte/10 bg-white p-0 shadow-[0_40px_80px_-20px_rgba(14,14,14,0.35)]
          backdrop:bg-monte/60 backdrop:backdrop-blur-sm
          open:animate-fade-in
        "
        aria-labelledby="checkout-demo-title"
      >
        {/* Header del modal */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-monte/8">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rojo-atratus opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rojo-atratus" />
            </span>
            <p
              id="checkout-demo-title"
              className="font-mono text-[11px] uppercase tracking-[0.22em] text-niebla font-semibold"
            >
              Checkout · atratus.co
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

        {/* Contenido */}
        <div className="px-6 py-5 space-y-4 overflow-y-auto">
          {/* Item base — chaqueta ya en carrito */}
          <article className="flex items-center gap-4 rounded-xl border border-monte/10 bg-hueso-light/50 p-4">
            <div
              className="h-14 w-14 rounded-lg bg-monte/85 shrink-0 flex items-center justify-center text-white font-mono text-[10px] uppercase tracking-[0.18em] text-center leading-tight"
              aria-hidden
            >
              Chaq.
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-monte">
                Chaqueta impermeable Atratus
              </p>
              <p className="text-xs text-niebla mt-0.5">
                En tu carrito · talla M
              </p>
            </div>
            <p className="font-mono font-semibold text-monte tabular text-sm shrink-0">
              {formatCOP(BASE_AOV)}
            </p>
          </article>

          {/* Sugerencia 1 — Cuellito */}
          <article
            className={`relative rounded-xl border p-4 transition-all duration-500 ${
              cuellito
                ? "border-seagreen/40 bg-seagreen/8"
                : "border-monte/12 bg-white"
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className="h-14 w-14 rounded-lg bg-seagreen/85 shrink-0 flex items-center justify-center text-white font-mono text-[10px] uppercase tracking-[0.18em]"
                aria-hidden
              >
                Cuel.
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-[0.18em] text-seagreen font-semibold mb-1">
                  Sugerido justo antes de pagar
                </p>
                <p className="text-sm font-semibold text-monte">
                  Cuellito técnico Atratus
                </p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-xs text-niebla line-through">
                    {formatCOP(CUELLITO_BASE)}
                  </span>
                  <span className="font-mono font-semibold text-seagreen tabular text-sm">
                    {formatCOP(CUELLITO_PRICE)}
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setCuellito(true)}
                disabled={cuellito}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-all ${
                  cuellito
                    ? "bg-seagreen text-white cursor-default"
                    : "bg-monte text-white hover:bg-monte/90"
                }`}
              >
                {cuellito ? "Agregado ✓" : "+ Agregar"}
              </button>
            </div>
          </article>

          {/* Sugerencia 2 — Camibuso (aparece solo si cuellito agregado) */}
          {cuellito && (
            <article
              className={`relative rounded-xl border p-4 transition-all duration-500 animate-fade-in-up ${
                camibuso
                  ? "border-seagreen/40 bg-seagreen/8"
                  : "border-monte/12 bg-white"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="h-14 w-14 rounded-lg bg-deep-blue/85 shrink-0 flex items-center justify-center text-white font-mono text-[10px] uppercase tracking-[0.18em]"
                  aria-hidden
                >
                  Cam.
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-deep-blue font-semibold mb-1">
                    Aprovecha el envío único
                  </p>
                  <p className="text-sm font-semibold text-monte">
                    Camibuso técnico Atratus
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-xs text-niebla line-through">
                      {formatCOP(CAMIBUSO_BASE)}
                    </span>
                    <span className="font-mono font-semibold text-deep-blue tabular text-sm">
                      {formatCOP(CAMIBUSO_PRICE)}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-deep-blue font-semibold ml-1">
                      −15%
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setCamibuso(true)}
                  disabled={camibuso}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-all ${
                    camibuso
                      ? "bg-seagreen text-white cursor-default"
                      : "bg-monte text-white hover:bg-monte/90"
                  }`}
                >
                  {camibuso ? "Agregado ✓" : "+ Agregar"}
                </button>
              </div>
            </article>
          )}
        </div>

        {/* Footer — total dinámico */}
        <footer className="px-6 py-5 border-t border-monte/8 bg-hueso-light/60">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-[10px] uppercase tracking-[0.22em] text-niebla font-semibold">
              Total carrito
            </p>
            <p
              className="font-mono font-semibold text-monte tabular"
              style={{ fontSize: "clamp(1.5rem, 3vw, 1.85rem)", letterSpacing: "-0.02em" }}
            >
              {formatCOP(total)}
            </p>
          </div>
          {delta > 0 && (
            <p className="mt-2 text-xs text-seagreen font-semibold leading-snug animate-fade-in">
              Ticket subió +{percent}% · sin traer un cliente nuevo
            </p>
          )}
          {camibuso && (
            <p className="mt-1 text-[11px] text-niebla italic leading-snug animate-fade-in">
              El descuento se paga solo: son dos envíos menos que Atratus iba a hacer.
            </p>
          )}
        </footer>
      </dialog>
    </>
  );
}
