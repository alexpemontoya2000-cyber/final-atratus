import { RoleBadge } from "@/components/ui/RoleBadge";
import { PillButton } from "@/components/ui/PillButton";
import { roles } from "@/lib/roles";

/* ============================================================
   §5 CRONOGRAMA + EL PEDIDO · CMO/Estratega
   Comercial-cierre + Manifiesto · 1:30 min
   SCQA: Implementación
   ============================================================ */

type GanttCell = {
  estado: "off" | "setup" | "activo" | "escala";
  texto?: string;
};

type Iniciativa = {
  nombre: string;
  fase1: GanttCell; // mes 1-2
  fase2: GanttCell; // mes 3-6
  fase3: GanttCell; // mes 7-12
};

const iniciativas: Iniciativa[] = [
  {
    nombre: "Pauta · BOFU + MOFU + TOFU",
    fase1: { estado: "activo", texto: "Campañas activas" },
    fase2: { estado: "activo", texto: "Optimización" },
    fase3: { estado: "escala", texto: "Fase 2 escalada · ROAS 4.83x" },
  },
  {
    nombre: "CRM + email + cascada upsell",
    fase1: { estado: "setup", texto: "Configuración" },
    fase2: { estado: "activo", texto: "Flujos + cascada en marcha" },
    fase3: { estado: "escala", texto: "Expansión y referidos" },
  },
  {
    nombre: "SEO + Blog (Topic Cluster)",
    fase1: { estado: "activo", texto: "Artículo pilar publicado" },
    fase2: { estado: "activo", texto: "3 artículos cluster" },
    fase3: { estado: "escala", texto: "Dominio de la categoría" },
  },
  {
    nombre: "Dashboard Looker · medición",
    fase1: { estado: "setup", texto: "Configuración" },
    fase2: { estado: "activo", texto: "Revisión mensual" },
    fase3: { estado: "activo", texto: "Revisión mensual" },
  },
];

const estadoBg: Record<GanttCell["estado"], string> = {
  off: "transparent",
  setup: "rgba(166, 54, 43, 0.10)",
  activo: "rgba(31, 61, 46, 0.10)",
  escala: "rgba(92, 138, 123, 0.18)",
};
const estadoColor: Record<GanttCell["estado"], string> = {
  off: "var(--color-niebla)",
  setup: "var(--color-rojo-atratus)",
  activo: "var(--color-atratus-verde)",
  escala: "var(--color-seagreen)",
};

const rolesData = [
  {
    ...roles.estratega,
    queEsSuyo: "Dirección + presupuesto + DOFA/CAME",
  },
  {
    ...roles.contenidos,
    queEsSuyo: "Reels Toña/Mate · Newsletter · Comunidad IG",
  },
  {
    ...roles.growth,
    queEsSuyo: "3 campañas pauta · ROAS · A/B",
  },
  {
    ...roles.revops,
    queEsSuyo: "Cascada upsell · Lead scoring · Dashboard",
  },
];

// CTA WhatsApp — número del equipo Atratus
const WA_LINK =
  "https://wa.me/573147446649?text=Hola%20Toña%20y%20Mate%20—%20vengo%20de%20la%20propuesta%20Atratus%202026.%20Listos%20para%20arrancar.";

export function Pedido() {
  return (
    <section
      id="pedido"
      className="relative bg-hueso-light py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 2xl:px-32 scroll-mt-24"
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-monte/12 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-[1480px] 2xl:max-w-[1720px]">
        {/* ============== CABECERA ============== */}
        <header className="flex flex-col gap-7 max-w-4xl">
          <div className="flex flex-wrap items-center gap-4">
            <RoleBadge role="estratega" variant="light" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-niebla">
              § 5 · Cronograma + El Pedido
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
            Hasta aquí fue mostrar.
            <br />
            <span className="text-atratus-verde">Lo que sigue es decidir.</span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-carbon leading-relaxed max-w-3xl">
            Doce meses por delante. Seis iniciativas que arrancan a distintas
            velocidades. Un equipo de cuatro voces alineado al mismo plan. Y un
            retorno proyectado de{" "}
            <span className="font-semibold text-monte">
              9 a 1 sobre lo que se invierte
            </span>
            .
          </p>
        </header>

        {/* ============== BLOQUE A · CRONOGRAMA ============== */}
        <div className="mt-16 md:mt-24">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="h-1.5 w-1.5 rounded-full bg-atratus-verde"
              aria-hidden
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-atratus-verde">
              A · CRONOGRAMA
            </span>
          </div>

          {/* Gantt table */}
          <div className="rounded-2xl border border-monte/10 bg-white overflow-hidden">
            {/* Header */}
            <div className="hidden lg:grid grid-cols-12 gap-3 px-6 py-4 border-b border-monte/8 bg-hueso-light">
              <div className="col-span-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-niebla">
                Iniciativa
              </div>
              <div className="col-span-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-niebla">
                Mes 1–2 · Arranque
              </div>
              <div className="col-span-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-niebla">
                Mes 3–6 · Optimización
              </div>
              <div className="col-span-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-niebla">
                Mes 7–12 · Escala
              </div>
            </div>

            {/* Rows */}
            {iniciativas.map((it, idx) => (
              <div
                key={it.nombre}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-y-2 lg:gap-x-3 px-6 py-4 ${
                  idx !== iniciativas.length - 1
                    ? "border-b border-monte/8"
                    : ""
                } items-center`}
              >
                <div className="col-span-1 lg:col-span-3">
                  <p className="text-sm font-semibold text-monte leading-snug">
                    {it.nombre}
                  </p>
                </div>
                {[it.fase1, it.fase2, it.fase3].map((celda, i) => (
                  <div key={i} className="col-span-1 lg:col-span-3">
                    {celda.estado === "off" ? (
                      <div className="flex items-center gap-2 px-3 py-2">
                        <span className="font-mono text-xs text-monte/30">—</span>
                        <span className="text-xs text-monte/40 italic">
                          aún no
                        </span>
                      </div>
                    ) : (
                      <div
                        className="rounded-lg px-3 py-2 flex items-center gap-2.5"
                        style={{ background: estadoBg[celda.estado] }}
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full shrink-0"
                          style={{ background: estadoColor[celda.estado] }}
                          aria-hidden
                        />
                        <span
                          className="text-xs font-medium leading-snug"
                          style={{ color: estadoColor[celda.estado] }}
                        >
                          {celda.texto}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm text-carbon max-w-3xl leading-relaxed">
            No todo arranca el mismo lunes.{" "}
            <span className="text-monte">
              Lo que necesita base se monta en los primeros dos meses. Lo que
              necesita audiencia espera a que la audiencia exista.
            </span>
          </p>
        </div>

        {/* ============== BLOQUE B · PRESUPUESTO ============== */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="h-1.5 w-1.5 rounded-full bg-atratus-verde"
              aria-hidden
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-atratus-verde">
              B · INVERSIÓN vs RETORNO
            </span>
          </div>

          {/* Split inversión vs retorno */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
            {/* Inversión */}
            <div className="rounded-2xl border border-monte/10 bg-white p-7 md:p-9">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-niebla mb-4">
                Inversión año 1
              </p>
              <p
                className="display text-monte tabular flex items-baseline gap-2"
                style={{
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.04em",
                }}
              >
                $31
                <span
                  className="text-monte/55"
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    lineHeight: 1,
                  }}
                >
                  M COP
                </span>
              </p>
              <p className="mt-2 text-sm text-carbon">Plata que entra al sistema</p>

              <ul className="mt-7 space-y-3 pt-5 border-t border-monte/8">
                {[
                  {
                    label: "Pauta (Fase 1 + Fase 2)",
                    valor: "~$26 M",
                    nota: "$6M dos meses + $2M/mes desde mes 3",
                  },
                  {
                    label: "Email + CRM operativo",
                    valor: "~$2,4 M",
                    nota: "12 envíos × 5.000 contactos × $40",
                  },
                  {
                    label: "Stack tools (Shopify + Brevo)",
                    valor: "~$2,6 M",
                    nota: "~$54 USD/mes × 12 meses",
                  },
                ].map((l) => (
                  <li
                    key={l.label}
                    className="flex items-start justify-between gap-3"
                  >
                    <div className="flex-1">
                      <p className="text-sm text-monte font-medium">
                        {l.label}
                      </p>
                      <p className="text-xs text-niebla">{l.nota}</p>
                    </div>
                    <span className="font-mono text-sm font-semibold text-monte tabular shrink-0">
                      {l.valor}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Retorno */}
            <div className="rounded-2xl bg-monte text-white p-7 md:p-9 relative overflow-hidden">
              <div
                className="absolute inset-x-0 top-0 h-[3px] bg-atratus-verde"
                aria-hidden
              />
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-atratus-verde mb-4">
                Retorno proyectado año 1
              </p>
              <p
                className="display text-white tabular flex items-baseline gap-2"
                style={{
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.04em",
                }}
              >
                $283
                <span
                  className="text-white/55"
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    lineHeight: 1,
                  }}
                >
                  M COP
                </span>
              </p>
              <p className="mt-2 text-sm text-white/65">
                Plata que devuelve el sistema
              </p>

              <ul className="mt-7 space-y-3 pt-5 border-t border-white/12">
                {[
                  {
                    label: "Pauta directa (Fase 1)",
                    valor: "~$22 M",
                    nota: "ROAS blended 3.74x · BOFU 5.5x · MOFU 2.5x · TOFU 1.2x",
                  },
                  {
                    label: "Pauta directa (Fase 2)",
                    valor: "~$96.5 M",
                    nota: "ROAS 4.83x sobre $20M",
                  },
                  {
                    label: "Reactivación email (5K base)",
                    valor: "~$150 M",
                    nota: "15% recompra · CAC $0",
                  },
                ].map((l) => (
                  <li
                    key={l.label}
                    className="flex items-start justify-between gap-3"
                  >
                    <div className="flex-1">
                      <p className="text-sm text-white font-medium">
                        {l.label}
                      </p>
                      <p className="text-xs text-white/55">{l.nota}</p>
                    </div>
                    <span
                      className="font-mono text-sm font-semibold tabular shrink-0"
                      style={{ color: "#9fc7b9" }}
                    >
                      {l.valor}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Fórmula */}
          <div className="mt-8 text-center">
            <p
              className="display text-monte"
              style={{
                fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                textWrap: "balance",
              }}
            >
              Por cada peso que entra,{" "}
              <span className="text-atratus-verde">devuelve nueve con diez.</span>
            </p>
          </div>

          <p className="mt-6 text-xs text-niebla max-w-3xl mx-auto text-center leading-relaxed">
            Proyección con AOV $200K y los ROAS auditados de cada campaña. No es
            promesa, es escenario base. Si los supuestos se mueven, el modelo se
            recalcula en vivo desde el dashboard.
          </p>
        </div>

        {/* ============== BLOQUE C · 4 ROLES ============== */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="h-1.5 w-1.5 rounded-full bg-atratus-verde"
              aria-hidden
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-atratus-verde">
              C · EQUIPO
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
            Cuatro personas. Un solo plan.{" "}
            <span className="text-monte/55">Cero contrataciones nuevas.</span>
          </h3>

          <div className="mt-10 rounded-2xl border border-monte/10 bg-white overflow-hidden">
            {/* Header tabla */}
            <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-4 border-b border-monte/8 bg-hueso-light">
              <div className="col-span-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-niebla">
                Rol
              </div>
              <div className="col-span-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-niebla">
                Persona
              </div>
              <div className="col-span-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-niebla">
                Qué es suyo
              </div>
            </div>

            {rolesData.map((r, idx, arr) => (
              <div
                key={r.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-x-4 gap-y-2 px-6 py-4 ${
                  idx !== arr.length - 1 ? "border-b border-monte/8" : ""
                } items-center`}
              >
                <div className="lg:col-span-3 flex items-center gap-2.5">
                  <span
                    className="h-1.5 w-1.5 rounded-full shrink-0"
                    style={{ background: r.color }}
                    aria-hidden
                  />
                  <div>
                    <p
                      className="text-[10px] font-semibold uppercase tracking-[0.22em] leading-tight"
                      style={{ color: r.color }}
                    >
                      {r.rolNumber}
                    </p>
                    <p className="text-sm font-semibold text-monte leading-snug">
                      {r.title}
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-sm text-monte">{r.subtitle}</p>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-sm text-carbon leading-snug">
                    {r.queEsSuyo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============== BLOQUE D · EL PEDIDO ============== */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="h-1.5 w-1.5 rounded-full bg-atratus-verde"
              aria-hidden
            />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-atratus-verde">
              D · EL PEDIDO
            </span>
          </div>

          <div className="rounded-2xl bg-monte text-white p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <div
              className="absolute inset-x-0 top-0 h-[3px] bg-atratus-verde"
              aria-hidden
            />

            <div className="grid grid-cols-12 gap-x-8 gap-y-8 items-center">
              <div className="col-span-12 lg:col-span-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-atratus-verde mb-5">
                  La pregunta sin rodeos
                </p>
                <h3
                  className="display text-white"
                  style={{
                    fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
                    lineHeight: 0.98,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Esto es lo que pedimos.
                  <br />
                  <span style={{ color: "#7fb88f" }}>
                    El sí, esta semana.
                  </span>
                </h3>
                <p className="mt-6 max-w-xl text-base md:text-lg text-white/75 leading-relaxed">
                  La temporada de lluvias arranca en abril. Lo que aprueben hoy,
                  arranca en mayo y deja audiencias armadas para octubre.
                  Decidir el otro mes significa esperar a octubre del próximo año.
                </p>
              </div>

              <div className="col-span-12 lg:col-span-5 flex flex-col items-start lg:items-end gap-4">
                <PillButton
                  href={WA_LINK}
                  variant="solid-dark"
                  size="lg"
                  ariaLabel="Aprobar la propuesta y abrir WhatsApp con el equipo"
                >
                  Aprobar y arrancar
                  <span aria-hidden>↗</span>
                </PillButton>
                <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-white/45">
                  Abre WhatsApp con el equipo
                </p>
              </div>
            </div>

            <p className="mt-10 pt-6 border-t border-white/12 text-xs text-white/55 leading-relaxed max-w-3xl">
              Al hacer click se abre WhatsApp con el equipo. Sin contrato
              vinculante en este botón — solo el siguiente paso para alinear
              cronograma exacto y arrancar.
            </p>
          </div>
        </div>

        {/* ============== MANIFESTO-CIERRE · BISAGRA A §6 ============== */}
        <div className="mt-24 md:mt-32 max-w-4xl">
          <div className="grid grid-cols-12 gap-x-8 items-start">
            <div className="col-span-12 lg:col-span-2 hidden lg:block">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-atratus-verde">
                Y eso es todo
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
                Lo que sigue ya no es plan.{" "}
                <span className="text-atratus-verde">Es decisión.</span>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
