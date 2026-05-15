import { RoleBadge } from "@/components/ui/RoleBadge";
import { CheckoutDemoModal } from "@/components/ui/CheckoutDemoModal";

/* ============================================================
   §4 SISTEMA DE RETENCIÓN · Director de RevOps
   Plan-operativo + Institucional formal · 2:30 min
   SCQA: Answer parte 2 ("cómo retener y monetizar")
   4 bloques: A Stack · B Maquinaria · C Reactivación · D Escalabilidad
   ============================================================ */

const flujosRecencia = [
  {
    nombre: "Post-venta",
    rango: "0–30 días",
    objetivo: "Convertir la primera compra en relación",
    color: "var(--color-atratus-verde)",
  },
  {
    nombre: "Reactivación",
    rango: "31–180 días",
    objetivo: "Mantener la marca presente con valor",
    color: "var(--color-seagreen)",
  },
  {
    nombre: "Win-back",
    rango: "181–365 días",
    objetivo: "Recuperar antes de que cumpla el año",
    color: "var(--color-deep-blue)",
  },
  {
    nombre: "Última carta",
    rango: "+365 días",
    objetivo: "Reactivar o limpiar la lista",
    color: "var(--color-rojo-atratus)",
  },
];


export function Retencion() {
  return (
    <section
      id="retencion"
      className="relative bg-hueso py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 2xl:px-32 scroll-mt-24"
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-monte/12 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-[1480px] 2xl:max-w-[1720px]">
        {/* ============== CABECERA ============== */}
        <header className="grid grid-cols-12 gap-x-8 gap-y-10 items-center">
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-7">
            <div className="flex flex-wrap items-center gap-4">
              <RoleBadge role="revops" variant="light" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-niebla">
                § 4 · Sistema de Retención
              </span>
            </div>

            <h2
              className="display text-monte"
              style={{
                fontSize: "clamp(2.5rem, 6.5vw, 6rem)",
                lineHeight: 0.98,
                letterSpacing: "-0.03em",
              }}
            >
              El dinero
              <br />
              <span className="text-seagreen">está en la lista.</span>
            </h2>
          </div>

          {/* SVG animado — sobre flotante con sombra realista */}
          <div className="col-span-12 lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-square">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                aria-label="Carta flotante con sombra que respira — representa la lista de clientes dormidos esperando ser despertados"
                role="img"
              >
                {/* Definiciones */}
                <defs>
                  <filter id="letter-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
                    <feOffset dx="0" dy="3" result="offsetblur" />
                    <feComponentTransfer>
                      <feFuncA type="linear" slope="0.35" />
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="ground-shadow-blur" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="14" />
                  </filter>
                </defs>

                {/* Sombra realista en el suelo — animada */}
                <g className="animate-float-shadow" style={{ transformOrigin: "200px 310px" }}>
                  <ellipse
                    cx="200"
                    cy="310"
                    rx="110"
                    ry="14"
                    fill="var(--color-monte)"
                    filter="url(#ground-shadow-blur)"
                  />
                </g>

                {/* Sobre flotante — animado */}
                <g className="animate-float-letter" style={{ transformOrigin: "200px 180px" }}>
                  {/* Cuerpo del sobre */}
                  <rect
                    x="110"
                    y="140"
                    width="180"
                    height="120"
                    rx="6"
                    fill="var(--color-seagreen)"
                    filter="url(#letter-shadow)"
                  />
                  {/* Solapa (V invertida hacia abajo) */}
                  <path
                    d="M 110 146 L 200 215 L 290 146"
                    fill="none"
                    stroke="rgba(255,255,255,0.55)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {/* Líneas internas sugiriendo lista */}
                  <line x1="135" y1="232" x2="265" y2="232" stroke="rgba(255,255,255,0.28)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="135" y1="244" x2="240" y2="244" stroke="rgba(255,255,255,0.22)" strokeWidth="2" strokeLinecap="round" />
                  {/* Punto sellador sutil — marca de "no abierto aún" */}
                  <circle cx="200" cy="200" r="5" fill="var(--color-rojo-atratus)" opacity="0.75" />
                </g>
              </svg>
            </div>
          </div>
        </header>

        {/* ============== BLOQUE A · STACK ============== */}
        <div className="mt-16 md:mt-24">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="h-1.5 w-1.5 rounded-full bg-seagreen"
              aria-hidden
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-seagreen">
              A · STACK
            </span>
          </div>

          <p className="text-base md:text-lg text-carbon leading-relaxed max-w-3xl mb-10">
            Ninguna de las seis herramientas hay que inventarla. Ya están
            corriendo en miles de marcas D2C en LATAM.{" "}
            <span className="font-semibold text-monte">
              Lo que hace falta es conectarlas.
            </span>
          </p>

          <div className="rounded-2xl border border-monte/10 bg-white overflow-hidden">
            {/* Header tabla */}
            <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 border-b border-monte/8 bg-hueso-light">
              <div className="col-span-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-niebla">
                Capa
              </div>
              <div className="col-span-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-niebla">
                Herramientas
              </div>
              <div className="col-span-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-niebla">
                Setup · costo
              </div>
            </div>

            {[
              {
                n: "01",
                nombre: "COMPRAR",
                resumen: "El cliente entra, paga, recibe.",
                herramientas: "Shopify · Wompi (PSE, Nequi, Daviplata)",
                setup: "2 semanas · $29 USD/mes",
                color: "var(--color-atratus-verde)",
              },
              {
                n: "02",
                nombre: "CONECTAR",
                resumen: "El cliente vuelve, recompra, recomienda.",
                herramientas: "Mailchimp · Brevo · Meta Pixel + Audiences",
                setup: "1 semana · $0–$25 USD/mes",
                color: "var(--color-seagreen)",
              },
              {
                n: "03",
                nombre: "MEDIR",
                resumen: "El equipo decide con datos en una pantalla.",
                herramientas: "Google Analytics 4 · Looker Studio (3 pestañas)",
                setup: "3 días · gratis",
                color: "var(--color-deep-blue)",
              },
            ].map((capa, idx, arr) => (
              <div
                key={capa.n}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-x-4 gap-y-2 px-6 py-5 ${
                  idx !== arr.length - 1 ? "border-b border-monte/8" : ""
                } items-start`}
              >
                <div className="lg:col-span-3">
                  <div className="flex items-baseline gap-2">
                    <span
                      className="font-mono text-xs tabular"
                      style={{ color: capa.color }}
                    >
                      {capa.n}
                    </span>
                    <span
                      className="text-sm font-semibold uppercase tracking-[0.12em]"
                      style={{ color: capa.color }}
                    >
                      {capa.nombre}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-niebla leading-snug">
                    {capa.resumen}
                  </p>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-sm text-monte leading-snug">
                    {capa.herramientas}
                  </p>
                </div>
                <div className="lg:col-span-3">
                  <p className="font-mono text-xs text-carbon tabular">
                    {capa.setup}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============== BLOQUE B · MAQUINARIA AUTOMATIZADA ============== */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="h-1.5 w-1.5 rounded-full bg-seagreen"
              aria-hidden
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-seagreen">
              B · MAQUINARIA
            </span>
          </div>

          <h3
            className="display text-monte max-w-4xl"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            Tres correos. Una conversación.{" "}
            <span className="text-monte/55">Cero personas pendientes.</span>
          </h3>

          {/* Cuaderno de Campo */}
          <div className="mt-12 grid grid-cols-12 gap-x-8 gap-y-10 items-start">
            <div className="col-span-12 lg:col-span-5">
              <article className="relative aspect-[3/4] rounded-2xl bg-monte text-white overflow-hidden flex flex-col justify-between p-7 md:p-9 border border-seagreen/30">
                <div
                  className="absolute inset-x-0 top-0 h-[3px] bg-seagreen"
                  aria-hidden
                />
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-seagreen mb-3">
                    Lead Magnet
                  </p>
                  <h4
                    className="display text-white"
                    style={{
                      fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                      lineHeight: 1.02,
                      letterSpacing: "-0.025em",
                    }}
                  >
                    Cuaderno de Campo
                    <br />
                    <span className="text-seagreen">Atratus.</span>
                  </h4>
                </div>

                <ul className="space-y-2.5 my-7">
                  {[
                    "La regla de las tres capas",
                    "Calendario de temporadas Colombia",
                    "Checklist de mochila de un día",
                    "5 reglas del aviturista que no espanta aves",
                    "Glosario corto del monte",
                  ].map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2.5 text-sm text-white/85"
                    >
                      <span
                        className="mt-2 h-1 w-1 rounded-full bg-seagreen shrink-0"
                        aria-hidden
                      />
                      {it}
                    </li>
                  ))}
                </ul>

                <div className="pt-5 border-t border-white/12">
                  <p
                    className="font-mono text-3xl text-white tabular"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    18
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/55 font-semibold mt-1">
                    páginas · firmado por Toña y Mate
                  </p>
                </div>
              </article>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:pt-4">
              <p className="text-base md:text-lg text-carbon leading-relaxed">
                Manual de 18 páginas firmado por Toña y Mate.{" "}
                <span className="font-semibold text-seagreen">
                  La gente no descarga un cupón. Descarga un libro.
                </span>
              </p>

              {/* Los 3 emails — botones expandibles (details nativos, sin JS) */}
              <div className="mt-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-niebla mb-3">
                  Lo ideal: tres correos en la primera semana
                </p>
                <p className="text-sm text-carbon mb-5 leading-relaxed max-w-2xl">
                  Cada uno con un trabajo claro. Toca cualquier botón para ver
                  qué pasa adentro.
                </p>

                <div className="space-y-3">
                  {[
                    {
                      t: "T+0",
                      titulo: "Bienvenida",
                      asunto: "Aquí está tu Cuaderno de Campo",
                      objetivo:
                        "Entrega el cuaderno. Presenta a Toña y Mate. Sin venta.",
                    },
                    {
                      t: "T+3",
                      titulo: "Educación",
                      asunto:
                        "El error que casi nos cuesta una semana en el Cocuy",
                      objetivo:
                        "Historia real + regla de las tres capas. La marca demuestra que sabe.",
                    },
                    {
                      t: "T+6",
                      titulo: "Conversión",
                      asunto:
                        "Las lluvias arrancan en 12 días (algo te queríamos ofrecer antes)",
                      objetivo:
                        "Oferta concreta: 15% off chaqueta + envío gratis, válido 72 horas.",
                    },
                  ].map((e) => (
                    <details
                      key={e.t}
                      className="group rounded-xl border border-monte/10 bg-white overflow-hidden transition-colors hover:border-seagreen/35 [&::-webkit-details-marker]:hidden"
                    >
                      <summary className="cursor-pointer list-none px-5 py-4 flex items-center gap-4 select-none">
                        <span className="font-mono text-sm font-semibold text-seagreen tabular shrink-0 w-12">
                          {e.t}
                        </span>
                        <span className="flex-1 text-sm md:text-base font-semibold text-monte leading-tight">
                          {e.titulo}
                        </span>
                        <span
                          className="text-monte/40 text-lg leading-none font-light transition-transform duration-300 group-open:rotate-45 shrink-0"
                          aria-hidden
                        >
                          +
                        </span>
                      </summary>
                      <div className="px-5 pb-5 pt-0 border-t border-monte/8 bg-hueso-light/40">
                        <p className="text-sm italic text-monte/85 mt-3 mb-1.5">
                          “{e.asunto}”
                        </p>
                        <p className="text-xs text-niebla leading-snug">
                          {e.objetivo}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Lead Scoring */}
              <div className="mt-8 rounded-2xl border border-seagreen/25 bg-seagreen/5 p-6 md:p-7">
                <div className="flex items-baseline gap-3 mb-3">
                  <p className="font-mono text-3xl md:text-4xl font-semibold text-seagreen tabular">
                    60
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em] text-seagreen font-semibold">
                    puntos · umbral
                  </p>
                </div>
                <p className="text-sm md:text-base text-monte leading-relaxed">
                  Catorce acciones puntuadas. Cuando alguien llega a 60 puntos,
                  deja de hablar con el sistema y empieza a hablar con{" "}
                  <span className="font-semibold">Toña o Mate por WhatsApp</span>.{" "}
                  <span className="text-seagreen font-semibold">Sin guion.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ============== BLOQUE C · REACTIVACIÓN (la plata) ============== */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="h-1.5 w-1.5 rounded-full bg-rojo-atratus"
              aria-hidden
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rojo-atratus">
              C · REACTIVACIÓN
            </span>
          </div>

          <h3
            className="display text-monte max-w-4xl"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            Cinco mil personas ya compraron en Atratus.
            <br />
            <span className="text-monte/55">
              La mayoría no ha recibido un correo desde entonces.
            </span>
          </h3>

          {/* Big number $150M */}
          <div className="mt-12 grid grid-cols-12 gap-x-8 gap-y-8 items-end">
            <div className="col-span-12 lg:col-span-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-seagreen mb-4">
                Ingresos adicionales · año 1 · CAC $0
              </p>
              <h4
                className="display text-monte tabular flex items-start gap-3"
                style={{
                  fontSize: "clamp(4.5rem, 12vw, 14rem)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.05em",
                }}
              >
                $150
                <span
                  className="text-seagreen"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: 1 }}
                >
                  M COP
                </span>
              </h4>
              <p
                className="display text-monte mt-2"
                style={{
                  fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                al año, sin gastar un peso más en pauta.
              </p>

              <p className="mt-6 max-w-xl text-sm md:text-base text-carbon leading-relaxed">
                Quince de cada cien que ya compraron, vuelven a comprar una vez
                más en el año.{" "}
                <span className="font-mono text-monte font-semibold">
                  5.000 × 15% × $200K = $150M
                </span>
                .
              </p>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:pb-4">
              <div className="space-y-3">
                {[
                  {
                    metric: "ROI email",
                    value: "~6.150%",
                    sub: "cada peso invertido devuelve ~61",
                  },
                  {
                    metric: "ROAS win-back",
                    value: "~250x",
                    sub: "campaña a base inactiva > 6 meses",
                  },
                  {
                    metric: "LTV proyectado",
                    value: "$220K → $385K",
                    sub: "con frecuencia 1.4x y AOV $310K post-upsell",
                  },
                ].map((s) => (
                  <div
                    key={s.metric}
                    className="rounded-xl border border-monte/10 bg-white px-5 py-4"
                  >
                    <p className="text-[10px] uppercase tracking-[0.18em] text-niebla font-semibold mb-1">
                      {s.metric}
                    </p>
                    <p className="font-mono text-xl font-semibold text-seagreen tabular">
                      {s.value}
                    </p>
                    <p className="text-xs text-carbon mt-1 leading-snug">
                      {s.sub}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4 flujos por recencia */}
          <div className="mt-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-niebla mb-6">
              Cuatro flujos, según hace cuánto se fueron
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {flujosRecencia.map((f) => (
                <article
                  key={f.nombre}
                  className="rounded-2xl border border-monte/10 bg-white overflow-hidden"
                >
                  <div
                    className="h-[3px] w-full"
                    style={{ background: f.color }}
                    aria-hidden
                  />
                  <div className="p-5 md:p-6">
                    <p
                      className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-1"
                      style={{ color: f.color }}
                    >
                      Flujo
                    </p>
                    <h4 className="text-base font-semibold text-monte tracking-tight">
                      {f.nombre}
                    </h4>
                    <p
                      className="mt-2 font-mono text-xs tabular text-monte/70"
                    >
                      {f.rango}
                    </p>
                    <p className="mt-4 pt-4 border-t border-monte/8 text-xs text-carbon leading-snug">
                      {f.objetivo}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <p className="mt-5 text-xs text-niebla max-w-3xl leading-relaxed">
            Proyección con AOV $200K COP (precios reales del catálogo) y 15% de
            la base reactivada en 12 meses. Costo operativo email: ~$2.4M COP
            anuales (12 envíos × 5.000 contactos × $40 por envío).
          </p>
        </div>

        {/* ============== BLOQUE D · ESCALABILIDAD ============== */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="h-1.5 w-1.5 rounded-full bg-seagreen"
              aria-hidden
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-seagreen">
              D · ESCALABILIDAD
            </span>
          </div>

          <h3
            className="display text-monte max-w-4xl"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            Una sola palanca que cambia las cuentas.
            <br />
            <span className="text-monte/55">
              Y no depende de traer gente nueva.
            </span>
          </h3>

          <div className="mt-12">
            <CheckoutDemoModal />
          </div>
        </div>

      </div>
    </section>
  );
}
