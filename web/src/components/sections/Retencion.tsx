import { RoleBadge } from "@/components/ui/RoleBadge";
import { LayerCard } from "@/components/ui/LayerCard";

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

const accionesEscalabilidad = [
  {
    n: "01",
    titulo: "Cascada en el checkout",
    descripcion:
      "Justo antes de pagar, el carrito ofrece el cuellito técnico ($29.900 con dto). Si lo agrega, aparece el camibuso al 15% off. Tres prendas en un solo envío.",
    delta: "Ticket sube ~78%",
    sub: "de $210K a ~$375K",
    note: "El descuento se paga solo: dos envíos menos que la marca ya iba a hacer.",
    color: "var(--color-seagreen)",
  },
  {
    n: "02",
    titulo: "Referidos con dos beneficios",
    descripcion:
      "Cada cliente recibe un código para compartir. El amigo recibe 10% de descuento. Quien refirió recibe 15% en su próxima compra. Dos pájaros, un código.",
    delta: "CAC ~$50K",
    sub: "sin ampliar presupuesto de pauta",
    note: "Trae clientes nuevos y reactiva al original al mismo tiempo.",
    color: "var(--color-atratus-verde)",
  },
  {
    n: "03",
    titulo: "Correo automático a los 14 días",
    descripcion:
      "Catorce días después de cada compra, se dispara un correo con el producto complementario. Si compró chaqueta, se le ofrece el pantalón técnico. 10% off válido 72 horas.",
    delta: "Cross-sell automático",
    sub: "se configura una vez y corre solo",
    note: "Firmado por Toña o Mate, no por la marca.",
    color: "var(--color-deep-blue)",
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
        <header className="flex flex-col gap-7 max-w-4xl">
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
            La plata no está afuera.
            <br />
            <span className="text-seagreen">Está dormida en los que ya están.</span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-carbon leading-relaxed max-w-3xl">
            El stack ya existe. Los 5.000 clientes ya están en la base. El
            correo ya tiene quién lo escriba.{" "}
            <span className="font-semibold text-monte">
              Lo que falta es encender la maquinaria que despierta a los que ya
              están.
            </span>
          </p>
        </header>

        {/* ============== BLOQUE A · STACK ============== */}
        <div className="mt-16 md:mt-24">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="h-1.5 w-1.5 rounded-full bg-seagreen"
              aria-hidden
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-seagreen">
              Bloque A · Las tres capas que sostienen el sistema
            </span>
          </div>

          <p className="text-base md:text-lg text-carbon leading-relaxed max-w-3xl mb-10">
            Ninguna de las seis herramientas hay que inventarla. Ya están
            corriendo en miles de marcas D2C en LATAM.{" "}
            <span className="font-semibold text-monte">
              Lo que hace falta es conectarlas.
            </span>
          </p>

          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
            <LayerCard
              layerNumber="01"
              layerName="COMPRAR"
              layerSubtitle="El cliente entra, paga, recibe. La tienda sirve un solo objetivo: convertir sin fricción."
              tools={[
                {
                  name: "Shopify",
                  role: "Tienda + checkout + catálogo + inventario.",
                  cost: "$29 USD/mes",
                  note: "Integración nativa con Instagram Shopping.",
                },
                {
                  name: "Wompi",
                  role: "Pasarela local Bancolombia. Tarjetas, PSE, Nequi, Daviplata.",
                  cost: "2,9% + $900 / txn",
                  note: "Respaldo PayU para expansión LATAM.",
                },
              ]}
              status="Listo · 2 semanas de setup"
              accentColor="verde"
            />
            <LayerCard
              layerNumber="02"
              layerName="CONECTAR"
              layerSubtitle="El cliente vuelve, recompra, recomienda. Aquí vive el motor real de ingresos."
              tools={[
                {
                  name: "Mailchimp / Brevo",
                  role: "Email automatizado, CRM, lead scoring.",
                  cost: "$0–$25 USD/mes",
                  note: "Flujos de bienvenida, win-back, reactivación.",
                },
                {
                  name: "Meta Pixel + Audiences",
                  role: "Retargeting, lookalikes, atribución.",
                  cost: "Gratis (en Meta Ads)",
                  note: "Convierte visitantes en audiencias reactivables.",
                },
              ]}
              status="Listo · 1 semana de setup"
              accentColor="seagreen"
            />
            <LayerCard
              layerNumber="03"
              layerName="MEDIR"
              layerSubtitle="El equipo decide con datos. Una pantalla, una verdad, una reunión semanal corta."
              tools={[
                {
                  name: "Google Analytics 4",
                  role: "Tráfico, fuentes, comportamiento, embudo.",
                  cost: "Gratis",
                  note: "Conectado a Shopify por GTM.",
                },
                {
                  name: "Looker Studio",
                  role: "Dashboard · 3 pestañas: Salud · Email · North Star.",
                  cost: "Gratis",
                  note: "Une Mailchimp + GA4 + Shopify en una pantalla.",
                },
              ]}
              status="Listo · 3 días de setup"
              accentColor="azul"
            />
          </div>

          {/* Strip resumen del stack */}
          <div className="mt-10 rounded-2xl border border-monte/10 bg-white p-6 md:p-7">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { num: "6", label: "herramientas conectadas", sub: "una sola contraseña en mente" },
                { num: "~$54", unit: "USD/mes", label: "costo fijo del sistema", sub: "Shopify + Brevo · resto gratis" },
                { num: "~4", unit: "semanas", label: "hasta el sistema encendido", sub: "2 setup + 2 calibración" },
                { num: "0", label: "plataformas nuevas que aprender", sub: "todas son industria-estándar 2026" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="display text-monte tabular flex items-baseline gap-1"
                    style={{
                      fontSize: "clamp(1.75rem, 2.6vw, 2.5rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {s.num}
                    {s.unit && (
                      <span className="text-sm font-medium text-carbon">
                        {s.unit}
                      </span>
                    )}
                  </p>
                  <p className="mt-2 text-sm text-carbon leading-snug">
                    {s.label}
                    <span className="block text-niebla text-xs mt-0.5">
                      {s.sub}
                    </span>
                  </p>
                </div>
              ))}
            </div>
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
              Bloque B · La maquinaria que corre sola
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
                Un manual de 18 páginas que escriben Toña y Mate.{" "}
                <span className="text-monte">
                  La regla de las tres capas, el calendario de temporadas, qué
                  llevar al monte.
                </span>{" "}
                La gente no descarga un cupón.{" "}
                <span className="font-semibold text-seagreen">
                  Descarga un libro.
                </span>
              </p>

              {/* Los 3 emails — timeline horizontal */}
              <div className="mt-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-niebla mb-5">
                  Los tres correos que vienen después
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
                      asunto: "El error que casi nos cuesta una semana en el Cocuy",
                      objetivo:
                        "Historia real + regla de las tres capas. La marca demuestra que sabe.",
                    },
                    {
                      t: "T+6",
                      titulo: "Conversión",
                      asunto: "Las lluvias arrancan en 12 días (algo te queríamos ofrecer antes)",
                      objetivo:
                        "Oferta concreta: 15% off chaqueta + envío gratis, válido 72 horas.",
                    },
                  ].map((e) => (
                    <div
                      key={e.t}
                      className="grid grid-cols-12 gap-3 md:gap-4 items-baseline rounded-xl border border-monte/8 bg-white px-5 py-4 hover:border-monte/15 transition-colors"
                    >
                      <div className="col-span-2 lg:col-span-1">
                        <span className="font-mono text-base font-semibold text-seagreen tabular">
                          {e.t}
                        </span>
                      </div>
                      <div className="col-span-10 lg:col-span-3">
                        <p className="text-sm font-semibold text-monte">
                          {e.titulo}
                        </p>
                      </div>
                      <div className="col-span-12 lg:col-span-8">
                        <p className="text-sm text-monte/85 leading-snug italic">
                          “{e.asunto}”
                        </p>
                        <p className="mt-1 text-xs text-niebla leading-snug">
                          {e.objetivo}
                        </p>
                      </div>
                    </div>
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
              Bloque C · Donde está la plata
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
              Bloque D · Subir el ticket sin subir la pauta
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
            Tres maneras de que cada cliente deje más plata.
            <br />
            <span className="text-monte/55">
              Ninguna depende de traer gente nueva.
            </span>
          </h3>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
            {accionesEscalabilidad.map((a) => (
              <article
                key={a.n}
                className="relative flex flex-col rounded-2xl border border-monte/10 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-[2px] hover:border-monte/20 hover:shadow-[0_14px_40px_-18px_rgba(14,14,14,0.16)]"
              >
                <div
                  className="h-[3px] w-full"
                  style={{ background: a.color }}
                  aria-hidden
                />
                <div className="flex flex-col flex-1 p-6 md:p-7 gap-5">
                  <header>
                    <p
                      className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-2"
                      style={{ color: a.color }}
                    >
                      Acción {a.n}
                    </p>
                    <h4
                      className="display text-monte"
                      style={{
                        fontSize: "clamp(1.35rem, 1.8vw, 1.6rem)",
                        lineHeight: 1.05,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {a.titulo}
                    </h4>
                  </header>

                  <p className="text-sm text-carbon leading-relaxed">
                    {a.descripcion}
                  </p>

                  <div className="mt-auto pt-5 border-t border-monte/8">
                    <p
                      className="font-mono text-lg font-semibold tabular"
                      style={{ color: a.color }}
                    >
                      {a.delta}
                    </p>
                    <p className="text-xs text-niebla mt-1">{a.sub}</p>
                    <p className="mt-3 text-xs text-carbon italic leading-snug">
                      {a.note}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ============== MANIFESTO-CIERRE · BISAGRA A §5 ============== */}
        <div className="mt-24 md:mt-32 max-w-4xl">
          <div className="grid grid-cols-12 gap-x-8 items-start">
            <div className="col-span-12 lg:col-span-2 hidden lg:block">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-seagreen">
                La bisagra
              </span>
            </div>
            <blockquote className="col-span-12 lg:col-span-10">
              <p
                className="display text-monte"
                style={{
                  fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  textWrap: "balance",
                }}
              >
                Hasta aquí: el problema, la gente, el motor, el sistema.{" "}
                <span className="text-seagreen">
                  Lo que sigue son dos cosas concretas — cuándo arranca y qué
                  cuesta encenderlo.
                </span>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
