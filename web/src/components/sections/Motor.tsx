import Image from "next/image";
import { RoleBadge } from "@/components/ui/RoleBadge";

/* ============================================================
   §3 MOTOR DE ADQUISICIÓN · Head of Growth · Plan-operativo + Pedagógico
   SCQA: Answer parte 1 ("cómo atraemos") · 2:00 min
   FUSIÓN: SEO + Pauta unidos como "dos frentes" de un mismo motor.
   ============================================================ */

type ClusterItem = {
  label: string;
  title: string;
  keyword: string;
  volume: string;
  funnel: "TOFU" | "MOFU" | "BOFU";
  role: string;
};

const clusters: ClusterItem[] = [
  {
    label: "Blog",
    title: "Qué es senderismo + qué llevar al monte",
    keyword: "qué es senderismo",
    volume: "1.300/mes · SD 29",
    funnel: "TOFU",
    role: "Atrae tráfico nuevo. Enlaza al pilar.",
  },
  {
    label: "Landing",
    title: "Ropa para avistamiento de aves",
    keyword: "ropa avistamiento aves",
    volume: "Mar abierto · 0 competencia",
    funnel: "MOFU",
    role: "Categoría sin rival en e-commerce colombiano.",
  },
  {
    label: "Guía",
    title: "Cómo elegir tu chaqueta impermeable",
    keyword: "chaqueta impermeable mujer / hombre",
    volume: "1.900 + 1.600/mes",
    funnel: "MOFU",
    role: "Cubre las variantes de la keyword pilar.",
  },
];

const funnelColor: Record<ClusterItem["funnel"], string> = {
  TOFU: "var(--color-beige-natural)",
  MOFU: "var(--color-seagreen)",
  BOFU: "var(--color-rojo-atratus)",
};

type Campaign = {
  fase: "BOFU" | "MOFU" | "TOFU";
  numero: string;
  titulo: string;
  gatillo: string;
  plataforma: string;
  imagen: string;
  imagenAlt: string;
  descripcion: string;
  inversion: string;
  porcentaje: string;
  ingresosMeta: string;
  roas: string;
  sesgos: string[];
  ctaUnit: string;
};

const campaigns: Campaign[] = [
  {
    fase: "BOFU",
    numero: "Campaña 01",
    titulo: "Chaqueta · Temporada de lluvias",
    gatillo: "Audiencia CALIENTE · ya busca el producto",
    plataforma: "Google Search + PMax · Meta retargeting",
    imagen: "/atratus/marca/actividad-turismo-naturaleza.jpg",
    imagenAlt: "Chaqueta impermeable Atratus bajo lluvia en montaña colombiana",
    descripcion:
      "Quien busca 'chaqueta impermeable' en abril ya decidió que la necesita. No hay que convencerlo, hay que ponerse delante.",
    inversion: "$3.000.000",
    porcentaje: "50% del presupuesto",
    ingresosMeta: "$16.500.000",
    roas: "5.5x",
    sesgos: ["Autoridad científica", "Escasez real (la lluvia)", "Prueba social UGC"],
    ctaUnit: "Donde se cosecha · CAC máx $25.000 COP",
  },
  {
    fase: "MOFU",
    numero: "Campaña 02",
    titulo: "Aviturismo · Global Big Day",
    gatillo: "Audiencia TIBIA · necesita educación",
    plataforma: "Meta Ads · IG + Facebook · Lookalike 3%",
    imagen: "/atratus/marca/gallito-de-roca.png",
    imagenAlt: "Gallito de roca andino — ave emblemática colombiana",
    descripcion:
      "Atratus crea categoría con la ropa que no espanta las aves. Lead magnet gratuito + secuencia email + retargeting al kit completo.",
    inversion: "$1.800.000",
    porcentaje: "30% del presupuesto",
    ingresosMeta: "$4.500.000",
    roas: "2.5x",
    sesgos: ["Reciprocidad (guía gratis)", "Empatía narrativa", "Autoridad (#1 mundial)"],
    ctaUnit: "Donde se riega · 675 leads · CPL ≤ $2.700",
  },
  {
    fase: "TOFU",
    numero: "Campaña 03",
    titulo: "Storytelling · Toña y Mate",
    gatillo: "Audiencia FRÍA · siembra, no cosecha",
    plataforma: "Meta Ads · Reels 9:16 · 30–45s",
    imagen: "/atratus/marca/hero-fundadores.png",
    imagenAlt: "Toña y Mate, fundadores de Atratus, en el bosque colombiano",
    descripcion:
      "Tres mini-documentales. No vende, construye el pool. La Fase 2 cosecha esta audiencia con ROAS 4.83x — ese es el valor real del TOFU.",
    inversion: "$1.200.000",
    porcentaje: "20% del presupuesto",
    ingresosMeta: "$1.440.000",
    roas: "1.2x",
    sesgos: ["Empatía humana", "Autoridad (biólogos)", "Reciprocidad (mini-doc gratis)"],
    ctaUnit: "Donde se siembra · 1.500 leads · 80K viewers 75%+",
  },
];

export function Motor() {
  return (
    <section
      id="adquisicion"
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
            <RoleBadge role="growth" variant="light" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-niebla">
              § 3 · Motor de Adquisición
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
            Dos frentes abiertos.
            <br />
            <span className="text-monte/55">Uno trabaja gratis.</span>{" "}
            <span className="text-deep-blue">El otro acelera.</span>
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-carbon leading-relaxed max-w-3xl">
            El SEO atrae a los que ya están buscando, sin pagar un peso. La
            pauta empuja a los que todavía no saben que existen. Juntos, cada
            peso que entra después cuesta menos.
          </p>
        </header>

        {/* ============== FRENTE 1 · SEO ORGÁNICO ============== */}
        <div className="mt-16 md:mt-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-deep-blue" aria-hidden />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-deep-blue">
              Frente 1 · El que trabaja gratis
            </span>
          </div>

          {/* Big number + competencia hoy */}
          <div className="grid grid-cols-12 gap-x-8 gap-y-10 items-start">
            <div className="col-span-12 lg:col-span-7">
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-niebla mb-3">
                Keyword pilar &gt; &quot;chaqueta impermeable&quot;
              </div>
              <h3
                className="display text-monte tabular"
                style={{
                  fontSize: "clamp(5rem, 14vw, 15rem)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.05em",
                }}
              >
                4.400
              </h3>
              <p
                className="display text-monte mt-2"
                style={{
                  fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                búsquedas/mes en Colombia.
              </p>

              <p className="mt-5 max-w-xl text-sm md:text-base text-carbon leading-relaxed">
                Gente real tecleando esto en Google, sin que nadie les pagara la
                atención.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs uppercase tracking-[0.16em] font-medium">
                <span className="flex items-baseline gap-2">
                  <span
                    className="font-mono font-semibold tabular text-base text-deep-blue tracking-normal"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    11/100
                  </span>
                  <span className="text-niebla">dificultad SEO</span>
                </span>
                <span className="hidden md:inline text-monte/15">·</span>
                <span className="flex items-baseline gap-2">
                  <span
                    className="font-mono font-semibold tabular text-base text-monte tracking-normal"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    $849
                  </span>
                  <span className="text-niebla">CPC ref. COP</span>
                </span>
                <span className="hidden md:inline text-monte/15">·</span>
                <span className="flex items-baseline gap-2">
                  <span
                    className="font-mono font-semibold tabular text-base text-monte tracking-normal"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    Comercial
                  </span>
                  <span className="text-niebla">intención</span>
                </span>
              </div>

              <p className="mt-5 max-w-xl text-xs text-niebla">
                Cluster completo &gt; 12.000 búsquedas/mes (sumando mujer 1.900,
                hombre 1.600, lluvia 210, botas 720, pantalones 260). Fuente:
                Ubersuggest + Google Trends Colombia · T5.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl border border-monte/10 bg-white p-6 md:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-niebla mb-4">
                  Quién está pagando ese tráfico hoy
                </p>
                <ul className="space-y-2.5">
                  {[
                    { name: "THM", note: "marca generalista colombiana" },
                    {
                      name: "The North Face",
                      note: "importada · pensada para clima alpino",
                    },
                    {
                      name: "Decathlon",
                      note: "importada · clima europeo promedio",
                    },
                    {
                      name: "KOAJ · Columbia",
                      note: "marcas de oficina y de catálogo importado",
                    },
                  ].map((c) => (
                    <li key={c.name} className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-monte/30 tabular shrink-0">
                        —
                      </span>
                      <div>
                        <span className="text-sm font-semibold text-monte">
                          {c.name}
                        </span>{" "}
                        <span className="text-xs text-niebla">{c.note}</span>
                      </div>
                    </li>
                  ))}
                  <li className="flex items-baseline gap-3 pt-3 mt-3 border-t border-monte/8">
                    <span
                      className="h-2 w-2 rounded-full bg-rojo-atratus shrink-0 mt-1.5"
                      aria-hidden
                    />
                    <div>
                      <span className="text-sm font-semibold text-rojo-atratus">
                        Atratus
                      </span>{" "}
                      <span className="text-xs text-monte/70">
                        no aparece — siendo la única marca diseñada para el monte
                        colombiano.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pillar card */}
          <article className="relative mt-14 overflow-hidden rounded-2xl bg-monte text-white p-7 md:p-9 lg:p-10 border border-deep-blue/30">
            <div
              className="absolute inset-x-0 top-0 h-[3px] bg-deep-blue"
              aria-hidden
            />
            <div className="absolute right-7 top-7 hidden md:block">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1">
                <span
                  className="h-1.5 w-1.5 rounded-full animate-pulse-dot"
                  style={{ background: "var(--color-deep-blue)" }}
                  aria-hidden
                />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                  Artículo pilar
                </span>
              </span>
            </div>

            <p
              className="font-mono text-xs uppercase tracking-[0.22em] mb-3"
              style={{ color: "var(--color-deep-blue)" }}
            >
              KEYWORD &gt; CHAQUETA IMPERMEABLE
            </p>
            <h3
              className="display text-white"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
              }}
            >
              La guía honesta de la chaqueta impermeable colombiana.
            </h3>
            <p className="mt-5 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed">
              Landing pilar de 3.000+ palabras que ataca la keyword principal.
              Recibe el tráfico, lo educa, lo lleva al checkout. Diseñada para
              rankear top 3 en 6 meses.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs">
              <span className="flex items-baseline gap-2">
                <span className="font-mono font-semibold tabular text-base text-white">
                  4.400
                </span>
                <span className="text-white/55 uppercase tracking-wider">
                  búsquedas/mes
                </span>
              </span>
              <span className="text-white/15">·</span>
              <span className="flex items-baseline gap-2">
                <span className="font-mono font-semibold tabular text-base text-white">
                  MOFU
                </span>
                <span className="text-white/55 uppercase tracking-wider">
                  comercial
                </span>
              </span>
              <span className="text-white/15">·</span>
              <span className="flex items-baseline gap-2">
                <span className="font-mono font-semibold tabular text-base text-white">
                  Live
                </span>
                <span className="text-white/55 uppercase tracking-wider">
                  atratus.vercel.app
                </span>
              </span>
            </div>
          </article>

          {/* 3 clusters satélite */}
          <p className="mt-10 mb-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-niebla">
            Tres contenidos satélite que alimentan el pilar
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {clusters.map((c) => (
              <article
                key={c.title}
                className="group relative flex flex-col rounded-2xl border border-monte/10 bg-white p-5 md:p-6 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_14px_40px_-18px_rgba(14,14,14,0.18)] hover:border-monte/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-niebla">
                    {c.label}
                  </span>
                  <span
                    className="text-[10px] font-mono font-semibold tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      background: `${funnelColor[c.funnel]}1A`,
                      color: funnelColor[c.funnel],
                    }}
                  >
                    {c.funnel}
                  </span>
                </div>
                <h4 className="text-base font-semibold text-monte tracking-tight leading-snug mb-3">
                  {c.title}
                </h4>
                <div className="mt-auto pt-4 border-t border-monte/8">
                  <p className="font-mono text-xs text-monte/65 mb-1">
                    &quot;{c.keyword}&quot;
                  </p>
                  <p className="text-xs text-niebla mb-3">{c.volume}</p>
                  <p className="text-xs text-carbon leading-snug">{c.role}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Blue Ocean callout — Mar abierto */}
          <div className="mt-14">
            <div className="rounded-2xl overflow-hidden border border-monte/12 bg-deep-blue/5 grid grid-cols-12 gap-0">
              <div className="col-span-12 lg:col-span-7 p-7 md:p-9 lg:p-12">
                <div className="flex items-center gap-2.5 mb-5">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-deep-blue"
                    aria-hidden
                  />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-deep-blue">
                    Mar abierto
                  </span>
                </div>
                <h3
                  className="display text-monte"
                  style={{
                    fontSize: "clamp(1.6rem, 3.6vw, 2.5rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    textWrap: "balance",
                  }}
                >
                  Nadie en Colombia está vendiendo ropa pensada para{" "}
                  <span className="text-deep-blue">no espantar las aves.</span>
                </h3>
                <p className="mt-5 text-base md:text-lg text-carbon leading-relaxed max-w-xl">
                  Colombia es el país #1 del mundo en aves. Y la categoría
                  &quot;ropa para avistamiento&quot; ni siquiera existe en
                  e-commerce nacional. Atratus puede ser la primera en ocuparla.
                </p>
                <p className="mt-3 text-xs text-niebla">
                  Fuente: eBird Global Big Day · Cornell Lab of Ornithology.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-5 flex items-center justify-center p-7 md:p-9 bg-deep-blue/8">
                <div className="text-center">
                  <p
                    className="display text-deep-blue tabular"
                    style={{
                      fontSize: "clamp(3rem, 7vw, 6rem)",
                      lineHeight: 0.9,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    1.950+
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.22em] text-monte font-semibold">
                    especies de aves
                  </p>
                  <p className="mt-1 text-xs text-niebla">en Colombia · #1 mundial</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ============== FRENTE 2 · PAUTA ============== */}
        <div className="mt-24 md:mt-32">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-deep-blue" aria-hidden />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-deep-blue">
              Frente 2 · El que acelera
            </span>
          </div>

          <h3
            className="display text-monte max-w-4xl"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            Tres campañas.{" "}
            <span className="text-monte/55">
              Tres gatillos que el calendario ya pone.
            </span>
          </h3>

          {/* Strip negro con 4 stats */}
          <div className="mt-10">
            <div className="rounded-2xl bg-monte text-white p-7 md:p-9 lg:p-10 relative overflow-hidden">
              <div
                className="absolute inset-x-0 top-0 h-[3px] bg-deep-blue"
                aria-hidden
              />
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-8 lg:gap-x-12">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-3">
                    Presupuesto
                  </p>
                  <p
                    className="display text-white tabular"
                    style={{
                      fontSize: "clamp(1.75rem, 2.8vw, 2.5rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    $6 M
                    <span className="text-base font-medium text-white/60 ml-1">
                      COP
                    </span>
                  </p>
                  <p className="mt-2 text-xs text-white/55">
                    Total · 2 meses
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-3">
                    Ingresos directos F1
                  </p>
                  <p
                    className="display text-white tabular"
                    style={{
                      fontSize: "clamp(1.75rem, 2.8vw, 2.5rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    $22,4 M
                    <span className="text-base font-medium text-white/60 ml-1">
                      COP
                    </span>
                  </p>
                  <p className="mt-2 text-xs text-white/55">
                    Atribución directa · 2 meses
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-3">
                    ROAS Blended F1
                  </p>
                  <p
                    className="display tabular"
                    style={{
                      fontSize: "clamp(1.75rem, 2.8vw, 2.5rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      color: "#9fb8e0",
                    }}
                  >
                    3.74x
                  </p>
                  <p className="mt-2 text-xs text-white/55">
                    Sube a 4.83x en Fase 2 (mes 3+)
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50 mb-3">
                    Pool retargeting
                  </p>
                  <p
                    className="display text-white tabular"
                    style={{
                      fontSize: "clamp(1.75rem, 2.8vw, 2.5rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    92K
                  </p>
                  <p className="mt-2 text-xs text-white/55">
                    Audiencias custom al cerrar
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-niebla max-w-3xl leading-relaxed">
              ROAS realista por temperatura de audiencia · BOFU 5.5x · MOFU 2.5x · TOFU 1.2x.
              El TOFU no se mide por venta directa — se mide por el pool que deja construido para
              que Fase 2 lo cosechee con ROAS 4.83x. Proyección con AOV $200K COP. No es promesa,
              es escenario base auditable.
            </p>
          </div>

          {/* Las 3 campañas */}
          <div className="mt-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-niebla mb-6">
              Desglosemos las tres campañas
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
              {campaigns.map((c) => {
                const accent =
                  c.fase === "BOFU"
                    ? "var(--color-rojo-atratus)"
                    : c.fase === "MOFU"
                      ? "var(--color-deep-blue)"
                      : "var(--color-atratus-verde)";
                const accentBg =
                  c.fase === "BOFU"
                    ? "rgba(166, 54, 43, 0.08)"
                    : c.fase === "MOFU"
                      ? "rgba(27, 42, 65, 0.08)"
                      : "rgba(31, 61, 46, 0.08)";

                return (
                  <article
                    key={c.numero}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-monte/10 bg-white transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_20px_50px_-22px_rgba(14,14,14,0.22)] hover:border-monte/20"
                  >
                    <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                      <Image
                        src={c.imagen}
                        alt={c.imagenAlt}
                        fill
                        quality={85}
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-monte/55 via-monte/10 to-transparent"
                        aria-hidden
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 backdrop-blur-md"
                          style={{
                            background: accentBg,
                            border: `1px solid ${accent}66`,
                          }}
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full animate-pulse-dot"
                            style={{ background: accent }}
                            aria-hidden
                          />
                          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                            {c.fase} · {c.numero}
                          </span>
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 text-right">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-white/70 font-semibold mb-0.5">
                          ROAS objetivo
                        </p>
                        <p
                          className="display tabular text-white"
                          style={{
                            fontSize: "clamp(1.75rem, 2.4vw, 2.25rem)",
                            lineHeight: 1,
                            letterSpacing: "-0.03em",
                          }}
                        >
                          {c.roas}
                        </p>
                      </div>
                    </div>

                    <div
                      className="h-[3px] w-full"
                      style={{ background: accent }}
                      aria-hidden
                    />

                    <div className="flex flex-col flex-1 p-6 md:p-7 gap-5">
                      <header>
                        <p
                          className="text-[10px] font-semibold uppercase tracking-[0.22em] mb-2"
                          style={{ color: accent }}
                        >
                          {c.gatillo}
                        </p>
                        <h4
                          className="display text-monte"
                          style={{
                            fontSize: "clamp(1.2rem, 1.5vw, 1.4rem)",
                            lineHeight: 1.05,
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {c.titulo}
                        </h4>
                      </header>

                      <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-niebla">
                        <span
                          className="h-1 w-1 rounded-full"
                          style={{ background: accent }}
                          aria-hidden
                        />
                        {c.plataforma}
                      </div>

                      <p className="text-sm text-carbon leading-relaxed">
                        {c.descripcion}
                      </p>

                      <div className="mt-auto pt-5 border-t border-monte/8 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.18em] text-niebla font-semibold mb-1">
                            Inversión
                          </p>
                          <p
                            className="font-mono font-semibold text-monte tabular"
                            style={{ fontSize: "0.95rem" }}
                          >
                            {c.inversion}
                          </p>
                          <p className="text-[10px] text-niebla mt-0.5">
                            {c.porcentaje}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.18em] text-niebla font-semibold mb-1">
                            Meta ingresos
                          </p>
                          <p
                            className="font-mono font-semibold tabular"
                            style={{ fontSize: "0.95rem", color: accent }}
                          >
                            {c.ingresosMeta}
                          </p>
                          <p className="text-[10px] text-niebla mt-0.5">
                            {c.ctaUnit}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {c.sesgos.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] font-mono px-2 py-1 rounded-full bg-monte/[0.04] text-monte/70 border border-monte/8"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

        </div>

        {/* ============== MANIFESTO-CIERRE · bisagra a §4 ============== */}
        <div className="mt-20 md:mt-28 max-w-4xl">
          <div className="grid grid-cols-12 gap-x-8 items-start">
            <div className="col-span-12 lg:col-span-2 hidden lg:block">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-deep-blue">
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
                El motor trae gente. Pero la gente que viene se va igual de
                rápido si no hay sistema atrás.{" "}
                <span className="text-deep-blue">
                  Lo que sigue es ese sistema.
                </span>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
