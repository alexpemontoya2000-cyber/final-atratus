import { RoleBadge } from "@/components/ui/RoleBadge";
import { StatCard } from "@/components/ui/StatCard";

/* ============================================================
   §1 DIAGNÓSTICO · CMO/Estratega · Manifiesto + Comercial-cierre
   SCQA: Situation + Complication · 2:00 min
   3 bloques: A) El 70%  B) DOFA + CAME  C) 5 Objetivos SMART
   ============================================================ */

// — Bloque B · DOFA + CAME (datos del docx Plan FINAL Atratus)
const dofa = [
  {
    label: "Fortalezas",
    came: "Mantener",
    color: "var(--color-atratus-verde)",
    bg: "rgba(31, 61, 46, 0.05)",
    items: [
      "Producto técnico hecho en Colombia",
      "Fundadores con credenciales científicas",
      "78.000 seguidores orgánicos en Instagram",
      "Identidad de marca propia y diferenciada",
    ],
    como: "Cómo se mantiene: contenido con los fundadores al frente. La marca no busca otra voz.",
  },
  {
    label: "Oportunidades",
    came: "Tomar",
    color: "var(--color-seagreen)",
    bg: "rgba(92, 138, 123, 0.06)",
    items: [
      "Categoría 'aviturismo' sin competencia real",
      "Temporada de lluvias — demanda estacional",
      "Global Big Day · evento mundial en mayo",
      "SEO sin rival en 'chaqueta impermeable'",
    ],
    como: "Cómo se toman: campañas por temporada + lead magnet propio + email.",
  },
  {
    label: "Debilidades",
    came: "Arreglar",
    color: "var(--color-rojo-atratus)",
    bg: "rgba(166, 54, 43, 0.05)",
    items: [
      "Sin sistema de ventas digital estructurado",
      "Sin automatización ni CRM activo",
      "Churn del 70% — 7 de 10 no vuelven",
      "Un producto por carrito — ticket bajo",
    ],
    como: "Cómo se arregla: CRM + cascada upsell + email automático post-compra.",
  },
  {
    label: "Amenazas",
    came: "Esquivar",
    color: "var(--color-deep-blue)",
    bg: "rgba(27, 42, 65, 0.05)",
    items: [
      "Marcas internacionales (North Face, Decathlon)",
      "Costos de pauta en aumento constante",
      "Dependencia del algoritmo de Instagram",
      "Imitadores sin la historia real detrás",
    ],
    como: "Cómo se esquivan: diferenciación por origen + email propio + SEO.",
  },
];

// — Bloque C · 5 Objetivos SMART (auditados con AOV $200K real)
const objetivos = [
  {
    n: "01",
    objetivo: "Subir el ticket promedio",
    meta: "$310K COP",
    plazo: "6 meses",
    kpi: "AOV",
    accion: "Cascada upsell en checkout",
  },
  {
    n: "02",
    objetivo: "Bajar el churn",
    meta: "55%",
    plazo: "12 meses",
    kpi: "Churn %",
    accion: "CRM + email retención",
  },
  {
    n: "03",
    objetivo: "ROAS en BOFU lluvias",
    meta: "≥ 5.5x",
    plazo: "Mes 1–2",
    kpi: "ROAS",
    accion: "Google Search + PMax",
  },
  {
    n: "04",
    objetivo: "Capturar leads nuevos",
    meta: "1.500 leads",
    plazo: "2 meses",
    kpi: "Leads",
    accion: "Cuaderno de Campo (lead magnet)",
  },
  {
    n: "05",
    objetivo: "Subir frecuencia de compra",
    meta: "1.4 x/año",
    plazo: "12 meses",
    kpi: "Freq.",
    accion: "Email automático D14 + win-back",
  },
];

export function Diagnostico() {
  return (
    <section
      id="diagnostico"
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
              <RoleBadge role="estratega" variant="light" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-niebla">
                § 1 · Diagnóstico
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
              Atratus camina bien.
              <br />
              <span className="text-rojo-atratus">Pero camina en círculos.</span>
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-carbon leading-relaxed max-w-2xl">
              Esto es lo que dicen los números.
            </p>
          </div>

          {/* SVG animado — caminando en círculos */}
          <div className="col-span-12 lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-square">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                aria-label="Sendero circular: representación del problema — el negocio camina pero vuelve al mismo punto"
                role="img"
              >
                {/* Sendero base — círculo punteado tenue */}
                <circle
                  cx="200"
                  cy="200"
                  r="150"
                  fill="none"
                  stroke="var(--color-monte)"
                  strokeOpacity="0.14"
                  strokeWidth="1.5"
                  strokeDasharray="3 7"
                />

                {/* 16 pisadas como ticks radiales */}
                {Array.from({ length: 16 }).map((_, i) => (
                  <line
                    key={i}
                    x1="200"
                    y1="42"
                    x2="200"
                    y2="58"
                    stroke="var(--color-monte)"
                    strokeOpacity="0.22"
                    strokeWidth="2"
                    strokeLinecap="round"
                    transform={`rotate(${i * 22.5} 200 200)`}
                  />
                ))}

                {/* Caminante — punto rojo + halo, rota 360 en loop */}
                <g className="animate-walk-loop">
                  <circle
                    cx="200"
                    cy="50"
                    r="14"
                    fill="var(--color-rojo-atratus)"
                    opacity="0.18"
                  />
                  <circle
                    cx="200"
                    cy="50"
                    r="6"
                    fill="var(--color-rojo-atratus)"
                  />
                </g>

                {/* Texto central — refuerzo conceptual */}
                <text
                  x="200"
                  y="188"
                  textAnchor="middle"
                  fill="var(--color-monte)"
                  opacity="0.55"
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "11px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Misma vuelta
                </text>
                <text
                  x="200"
                  y="215"
                  textAnchor="middle"
                  fill="var(--color-rojo-atratus)"
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "11px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  año tras año
                </text>
              </svg>
            </div>
          </div>
        </header>

        {/* ============== BLOQUE A · EL 70% ============== */}
        <div className="mt-14 md:mt-20 grid grid-cols-12 gap-x-8 gap-y-10 items-end">
          <div className="col-span-12 lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rojo-atratus mb-4">
              El número que duele
            </p>
            <h3
              className="display text-monte tabular"
              style={{
                fontSize: "clamp(6rem, 18vw, 20rem)",
                lineHeight: 0.85,
                letterSpacing: "-0.05em",
              }}
            >
              70<span className="text-rojo-atratus">%</span>
            </h3>
            <p
              className="display text-monte mt-2"
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              no vuelve.
            </p>

            {/* Cita Bluecore — el sector confirma */}
            <div className="mt-6 flex items-start gap-2.5 max-w-xl">
              <span
                className="h-1.5 w-1.5 rounded-full bg-atratus-verde mt-2 shrink-0"
                aria-hidden
              />
              <p className="text-[11px] uppercase tracking-[0.16em] text-niebla leading-relaxed">
                Y no es solo Atratus.{" "}
                <span className="text-monte font-semibold normal-case tracking-normal">
                  El sector outdoor a nivel global recompra apenas 21,2 %
                </span>{" "}
                <span className="text-monte/60 normal-case tracking-normal">
                  — Bluecore Customer Growth Benchmarks 2024, sobre 100+ retailers.
                </span>
              </p>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:pb-4">
            <p className="text-lg md:text-xl text-monte leading-relaxed font-medium">
              De cada diez personas que entran a Atratus, siete no regresan.
            </p>
            <p className="mt-5 text-base md:text-lg text-carbon leading-relaxed">
              Cinco mil clientes históricos. Setenta y ocho mil personas en
              Instagram.{" "}
              <span className="text-niebla">
                Y la mayoría de los que compran solo lo hacen una vez. La pauta
                trae gente nueva, pero sin sistema atrás está reemplazando a la
                que se fue.
              </span>
            </p>
          </div>
        </div>

        {/* Línea separadora */}
        <div className="mt-16 md:mt-20 mb-12 md:mb-14 h-px bg-monte/10" />

        {/* Stats grid */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-niebla mb-6">
            Lo que muestran los números
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            <StatCard
              label="Churn rate"
              value="70"
              suffix="%"
              hint="7 de cada 10 clientes no regresan"
              delta={{ value: "Crítico", direction: "down" }}
            />
            <StatCard
              label="Frecuencia de compra"
              value="1.1"
              suffix="x/año"
              hint="Compra única en la mayoría de los casos"
              delta={{ value: "Baja", direction: "down" }}
            />
            <StatCard
              label="Ticket promedio"
              value="200"
              prefix="~$"
              suffix="K COP"
              hint="Una prenda por carrito (ej. una chaqueta)"
              delta={{ value: "Estancado", direction: "neutral" }}
            />
            <StatCard
              label="Valor por cliente"
              value="220"
              prefix="~$"
              suffix="K COP"
              hint="Lo que Atratus le saca a un cliente en TODA su relación"
              delta={{ value: "Sub-óptimo", direction: "down" }}
            />
          </div>
          <p className="mt-5 text-xs text-niebla leading-relaxed max-w-3xl">
            <span className="font-semibold text-monte normal-case">
              Cómo se lee:
            </span>{" "}
            ticket promedio estimado a partir de los precios reales del catálogo
            ($159K–$215K por prenda) y una unidad por carrito. Valor por cliente
            = ticket × frecuencia (1.1) — porque la mayoría compra una sola vez
            y desaparece, no se acumula recompra a lo largo del tiempo.
          </p>
        </div>

        {/* ============== BLOQUE B · DOFA + CAME ============== */}
        <div className="mt-24 md:mt-32">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-niebla mb-6">
            Cómo está el terreno
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {dofa.map((cuad) => (
              <article
                key={cuad.label}
                className="relative rounded-2xl border border-monte/10 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-[2px] hover:border-monte/20 hover:shadow-[0_14px_40px_-18px_rgba(14,14,14,0.16)]"
              >
                <div
                  className="h-[3px] w-full"
                  style={{ background: cuad.color }}
                  aria-hidden
                />
                <div className="p-6 md:p-7" style={{ background: cuad.bg }}>
                  <div className="flex items-baseline gap-3 mb-1">
                    <span
                      className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                      style={{ color: cuad.color }}
                    >
                      {cuad.label}
                    </span>
                    <span className="text-monte/30">→</span>
                    <span
                      className="font-mono text-xs uppercase tracking-[0.18em]"
                      style={{ color: cuad.color }}
                    >
                      {cuad.came}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <ul className="space-y-2.5">
                    {cuad.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-2.5 text-sm text-monte leading-relaxed"
                      >
                        <span
                          className="mt-2 h-1 w-1 flex-shrink-0 rounded-full"
                          style={{ background: cuad.color }}
                          aria-hidden
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <p
                    className="mt-5 pt-5 border-t border-monte/8 text-xs text-niebla leading-relaxed italic"
                  >
                    {cuad.como}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ============== BLOQUE C · 5 OBJETIVOS SMART ============== */}
        <div className="mt-24 md:mt-32">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-niebla mb-4">
            Lo que vamos a mover en 12 meses
          </p>
          <h3
            className="display text-monte max-w-3xl"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              textWrap: "balance",
            }}
          >
            Cinco metas, todas medibles, todas con fecha.{" "}
            <span className="text-monte/55">
              Si las cinco se mueven, el negocio cambia de forma.
            </span>
          </h3>

          {/* Tabla de objetivos */}
          <div className="mt-10 rounded-2xl border border-monte/10 bg-white overflow-hidden">
            {/* Header */}
            <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 border-b border-monte/8 bg-hueso-light">
              <div className="col-span-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-niebla">
                #
              </div>
              <div className="col-span-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-niebla">
                Objetivo
              </div>
              <div className="col-span-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-niebla">
                Meta
              </div>
              <div className="col-span-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-niebla">
                Plazo
              </div>
              <div className="col-span-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-niebla">
                KPI
              </div>
              <div className="col-span-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-niebla">
                Acción principal
              </div>
            </div>

            {/* Rows */}
            {objetivos.map((o, idx) => (
              <div
                key={o.n}
                className={`grid grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-2 px-6 py-5 ${
                  idx !== objetivos.length - 1 ? "border-b border-monte/8" : ""
                } items-center`}
              >
                <div className="col-span-2 lg:col-span-1 font-mono text-xs text-niebla tabular">
                  {o.n}
                </div>
                <div className="col-span-2 lg:col-span-4">
                  <p className="text-sm font-semibold text-monte leading-snug">
                    {o.objetivo}
                  </p>
                </div>
                <div className="col-span-1 lg:col-span-2">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-niebla lg:hidden mb-0.5">
                    Meta
                  </p>
                  <p className="font-mono font-semibold text-monte tabular text-sm">
                    {o.meta}
                  </p>
                </div>
                <div className="col-span-1 lg:col-span-1">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-niebla lg:hidden mb-0.5">
                    Plazo
                  </p>
                  <p className="text-sm text-carbon">{o.plazo}</p>
                </div>
                <div className="col-span-1 lg:col-span-1">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-niebla lg:hidden mb-0.5">
                    KPI
                  </p>
                  <p className="font-mono text-xs text-monte/70">{o.kpi}</p>
                </div>
                <div className="col-span-2 lg:col-span-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-niebla lg:hidden mb-0.5">
                    Acción
                  </p>
                  <p className="text-sm text-carbon leading-snug">{o.accion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
