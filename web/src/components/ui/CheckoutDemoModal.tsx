"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

/* ============================================================
   CheckoutDemoModal — demo interactivo de la cascada de upsell
   Look de pasarela de pagos real (estilo Shopify · Wompi).
   Imágenes de producto reales del catálogo Atratus.
   El cliente entra con la chaqueta. Se le ofrece cuellito.
   Si acepta, se le ofrece camibuso. Total sube hasta +78%.
   ============================================================ */

const BASE_AOV = 210000;
const CUELLITO_PRICE = 29900;
const CUELLITO_BASE = 39900;
const CAMIBUSO_PRICE = 169000;
const CAMIBUSO_BASE = 199000;
const ENVIO = 0; // envío gratis para órdenes > $150K

function formatCOP(value: number): string {
  return `$${value.toLocaleString("es-CO")}`;
}

export function CheckoutDemoModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [cuellito, setCuellito] = useState(false);
  const [camibuso, setCamibuso] = useState(false);

  const subtotal =
    BASE_AOV + (cuellito ? CUELLITO_PRICE : 0) + (camibuso ? CAMIBUSO_PRICE : 0);
  const total = subtotal + ENVIO;
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
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          >
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
          fixed inset-0 m-auto w-[min(620px,calc(100vw-2rem))] max-h-[min(92vh,820px)]
          rounded-2xl border border-monte/10 bg-white p-0 shadow-[0_40px_80px_-20px_rgba(14,14,14,0.35)]
          backdrop:bg-monte/60 backdrop:backdrop-blur-sm
          open:animate-fade-in
        "
        aria-labelledby="checkout-demo-title"
      >
        {/* Header simulando barra del navegador del checkout */}
        <header className="flex items-center justify-between px-5 py-3.5 border-b border-monte/10 bg-hueso-light">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-rojo-atratus/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-monte/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-monte/20" />
            </div>
            <div className="flex items-center gap-1.5 rounded-md bg-white border border-monte/10 px-2.5 py-1">
              <svg
                className="h-3 w-3 text-seagreen"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <p
                id="checkout-demo-title"
                className="font-mono text-[11px] text-monte/75 tracking-tight"
              >
                atratus.co<span className="text-monte/40">/checkout</span>
              </p>
            </div>
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

        {/* Contenido — productos */}
        <div className="px-6 py-5 overflow-y-auto">
          <p className="text-[10px] uppercase tracking-[0.22em] text-niebla font-semibold mb-3">
            Tu pedido
          </p>

          {/* Item base — Chaqueta */}
          <article className="flex items-center gap-4 rounded-xl border border-monte/10 bg-white p-3.5">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-hueso-light">
              <Image
                src="/atratus/productos/chaqueta-espeletia-negro.png"
                alt="Chaqueta Espeletia Atratus en color negro"
                fill
                sizes="80px"
                className="object-cover"
              />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-monte text-white text-[10px] font-semibold flex items-center justify-center font-mono tabular shadow-sm">
                1
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-monte leading-tight">
                Chaqueta Espeletia
              </p>
              <p className="text-[11px] text-monte/55 mt-1">
                Color: Negro · Talla: M
              </p>
              <p className="text-[10px] uppercase tracking-[0.16em] text-monte/45 font-medium mt-1">
                En tu carrito
              </p>
            </div>
            <p className="font-mono font-semibold text-monte tabular text-sm shrink-0">
              {formatCOP(BASE_AOV)}
            </p>
          </article>

          {/* Sugerencia 1 — Cuellito */}
          <div className="mt-5">
            <div className="flex items-center gap-2 mb-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-seagreen animate-pulse-dot"
                aria-hidden
              />
              <p className="text-[10px] uppercase tracking-[0.22em] text-seagreen font-semibold">
                Justo antes de pagar · sugerido para ti
              </p>
            </div>
            <article
              className={`relative rounded-xl border p-3.5 transition-all duration-500 ${
                cuellito
                  ? "border-seagreen/45 bg-seagreen/[0.06]"
                  : "border-monte/12 bg-white"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-hueso-light">
                  <Image
                    src="/atratus/productos/chaqueta-espeletia-seagreen.png"
                    alt="Cuellito técnico Atratus en lana merino verde"
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                  />
                  {cuellito && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-seagreen text-white text-[10px] font-semibold flex items-center justify-center font-mono tabular shadow-sm animate-fade-in">
                      1
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-monte leading-tight">
                    Cuellito técnico
                  </p>
                  <p className="text-[11px] text-monte/55 mt-1">
                    Lana merino · talla única
                  </p>
                  <div className="mt-1.5 flex items-baseline gap-2 flex-wrap">
                    <span className="text-[11px] text-niebla line-through">
                      {formatCOP(CUELLITO_BASE)}
                    </span>
                    <span className="font-mono font-semibold text-seagreen tabular text-sm">
                      {formatCOP(CUELLITO_PRICE)}
                    </span>
                    <span className="text-[9px] font-semibold uppercase tracking-wider text-seagreen bg-seagreen/12 rounded-full px-1.5 py-0.5">
                      −25 %
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
                      : "bg-monte text-white hover:bg-monte/90 cursor-pointer"
                  }`}
                >
                  {cuellito ? "Agregado ✓" : "+ Agregar"}
                </button>
              </div>
            </article>
          </div>

          {/* Sugerencia 2 — Camibuso (aparece solo si cuellito agregado) */}
          {cuellito && (
            <div className="mt-5 animate-fade-in-up">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="h-1.5 w-1.5 rounded-full animate-pulse-dot"
                  style={{ background: "var(--color-deep-blue)" }}
                  aria-hidden
                />
                <p
                  className="text-[10px] uppercase tracking-[0.22em] font-semibold"
                  style={{ color: "var(--color-deep-blue)" }}
                >
                  Aprovecha el envío único
                </p>
              </div>
              <article
                className={`relative rounded-xl border p-3.5 transition-all duration-500 ${
                  camibuso
                    ? "border-deep-blue/45 bg-deep-blue/[0.06]"
                    : "border-monte/12 bg-white"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-hueso-light">
                    <Image
                      src="/atratus/productos/camibuso-pantera-hombre.png"
                      alt="Camibuso Pantera Atratus para hombre"
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                    {camibuso && (
                      <span
                        className="absolute -top-1 -right-1 h-5 w-5 rounded-full text-white text-[10px] font-semibold flex items-center justify-center font-mono tabular shadow-sm animate-fade-in"
                        style={{ background: "var(--color-deep-blue)" }}
                      >
                        1
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-monte leading-tight">
                      Camibuso Pantera
                    </p>
                    <p className="text-[11px] text-monte/55 mt-1">
                      Hombre · Talla M
                    </p>
                    <div className="mt-1.5 flex items-baseline gap-2 flex-wrap">
                      <span className="text-[11px] text-niebla line-through">
                        {formatCOP(CAMIBUSO_BASE)}
                      </span>
                      <span
                        className="font-mono font-semibold tabular text-sm"
                        style={{ color: "var(--color-deep-blue)" }}
                      >
                        {formatCOP(CAMIBUSO_PRICE)}
                      </span>
                      <span
                        className="text-[9px] font-semibold uppercase tracking-wider rounded-full px-1.5 py-0.5"
                        style={{
                          color: "var(--color-deep-blue)",
                          background: "rgba(27, 42, 65, 0.12)",
                        }}
                      >
                        −15 %
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setCamibuso(true)}
                    disabled={camibuso}
                    className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-all ${
                      camibuso
                        ? "text-white cursor-default"
                        : "bg-monte text-white hover:bg-monte/90 cursor-pointer"
                    }`}
                    style={camibuso ? { background: "var(--color-deep-blue)" } : undefined}
                  >
                    {camibuso ? "Agregado ✓" : "+ Agregar"}
                  </button>
                </div>
              </article>
            </div>
          )}
        </div>

        {/* Footer — resumen pasarela */}
        <footer className="px-6 py-5 border-t border-monte/10 bg-hueso-light/70">
          <div className="space-y-1.5 mb-4">
            <div className="flex items-baseline justify-between text-xs text-monte/65">
              <span>Subtotal</span>
              <span className="font-mono tabular">{formatCOP(subtotal)}</span>
            </div>
            <div className="flex items-baseline justify-between text-xs text-monte/65">
              <span>Envío</span>
              <span className="text-seagreen font-semibold uppercase tracking-wider text-[10px]">
                Gratis
              </span>
            </div>
            <div className="h-px bg-monte/10 my-2" aria-hidden />
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-monte font-semibold">
                Total
              </p>
              <p
                className="font-mono font-semibold text-monte tabular"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 1.85rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                {formatCOP(total)}
              </p>
            </div>
            {delta > 0 && (
              <p className="text-xs text-seagreen font-semibold leading-snug animate-fade-in">
                Ticket subió +{percent}% · sin traer un cliente nuevo
              </p>
            )}
            {camibuso && (
              <p className="text-[11px] text-niebla italic leading-snug animate-fade-in">
                El descuento se paga solo: dos envíos menos que Atratus iba a hacer.
              </p>
            )}
          </div>

          {/* Botón pagar — estilo Wompi */}
          <button
            type="button"
            className="w-full rounded-full bg-monte text-white px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 hover:bg-monte/90 hover:shadow-[0_14px_30px_-14px_rgba(14,14,14,0.45)] cursor-pointer flex items-center justify-center gap-2.5"
            onClick={(e) => e.preventDefault()}
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>Pagar {formatCOP(total)}</span>
            <span
              className="text-[10px] uppercase tracking-[0.18em] text-white/55 font-mono"
              aria-hidden
            >
              · Wompi
            </span>
          </button>
          <p className="mt-2.5 text-[10px] text-monte/45 text-center uppercase tracking-[0.16em] font-medium">
            Pago seguro · PSE · Nequi · Daviplata · Tarjeta
          </p>
        </footer>
      </dialog>
    </>
  );
}
