"use client";

import { useState, type ReactNode } from "react";

/* ============================================================
   MaquinariaPreview · §4 Bloque B Maquinaria
   Panel izquierdo dinámico: por default muestra el Cuaderno de
   Campo (lead magnet). Al hacer clic en uno de los tres botones
   de correo, el panel cambia y simula el correo real con header
   (remitente, asunto, fecha) y cuerpo redactado. Click otra vez
   en el mismo botón vuelve al Cuaderno.
   ============================================================ */

type View = "cuaderno" | "bienvenida" | "educacion" | "conversion";

type EmailKey = Exclude<View, "cuaderno">;

const buttons: { view: EmailKey; badge: string; titulo: string }[] = [
  { view: "bienvenida", badge: "T+0", titulo: "Bienvenida" },
  { view: "educacion", badge: "T+3", titulo: "Educación" },
  { view: "conversion", badge: "T+6", titulo: "Conversión" },
];

type EmailData = {
  remitente: string;
  remitenteEmail: string;
  iniciales: string;
  rolFirma: string;
  asunto: string;
  hora: string;
  cuerpo: ReactNode;
};

const emailData: Record<EmailKey, EmailData> = {
  bienvenida: {
    remitente: "Toña Velásquez",
    remitenteEmail: "hola@atratus.co",
    iniciales: "TV",
    rolFirma: "Ecóloga · co-fundadora de Atratus",
    asunto: "Aquí está tu Cuaderno de Campo",
    hora: "5:42 AM · dos minutos después del registro",
    cuerpo: (
      <>
        <p>Hola,</p>
        <p>
          Esto te lo prometimos cuando dejaste tu correo. Te lo entregamos antes
          que cualquier otra cosa.
        </p>
        <div className="my-5 inline-flex items-center gap-3 rounded-lg border border-seagreen/30 bg-seagreen/[0.06] px-4 py-3">
          <svg
            className="h-7 w-7 text-seagreen shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="9" y1="13" x2="15" y2="13" />
            <line x1="9" y1="17" x2="15" y2="17" />
          </svg>
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-seagreen truncate">
              Cuaderno_de_Campo_Atratus.pdf
            </span>
            <span className="block text-[11px] text-monte/60">
              18 páginas · 4,2 MB
            </span>
          </span>
        </div>
        <p>
          Lo escribimos Mate y yo a lo largo de tres años caminando el monte.
          No es un catálogo. Son las reglas que aprendimos sufriendo en el
          Cocuy, en el Sumapaz, en Los Nevados.
        </p>
        <p>Si lo lees, ya nos hicimos amigos.</p>
      </>
    ),
  },
  educacion: {
    remitente: "Mateo Restrepo",
    remitenteEmail: "mate@atratus.co",
    iniciales: "MR",
    rolFirma: "Biólogo · co-fundador de Atratus",
    asunto: "El error que casi nos cuesta una semana en el Cocuy",
    hora: "7:15 PM · tres días después",
    cuerpo: (
      <>
        <p>Hola,</p>
        <p>
          Marzo de 2022. Día tres en el Cocuy. Yo creía que la mejor estrategia
          contra el frío era ponerme cuatro camisetas de algodón debajo de la
          chaqueta.
        </p>
        <p>A las ocho de la noche no podía mover los dedos.</p>
        <p>
          El algodón retiene la humedad. Cuando se moja con el sudor de la
          subida, se vuelve un trapo helado pegado al cuerpo. La chaqueta puede
          ser la mejor del mundo: no importa.
        </p>
        <p>
          Por eso existe la{" "}
          <strong className="text-monte">regla de las tres capas</strong>:
        </p>
        <ul className="my-4 space-y-2 list-none pl-0">
          <li className="flex gap-3">
            <span className="font-mono text-xs font-semibold text-seagreen shrink-0 mt-0.5 w-6">
              01
            </span>
            <span>
              <strong className="text-monte">Capa base</strong> · sintética o
              lana merino · saca la humedad
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-xs font-semibold text-seagreen shrink-0 mt-0.5 w-6">
              02
            </span>
            <span>
              <strong className="text-monte">Capa media</strong> · polar o pluma
              · atrapa el aire caliente
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-xs font-semibold text-seagreen shrink-0 mt-0.5 w-6">
              03
            </span>
            <span>
              <strong className="text-monte">Capa exterior</strong> · impermeable
              y cortavientos · barrera contra el clima
            </span>
          </li>
        </ul>
        <p>Una sola hace mal. Las tres hacen el cuerpo.</p>
      </>
    ),
  },
  conversion: {
    remitente: "Toña y Mate",
    remitenteEmail: "hola@atratus.co",
    iniciales: "TM",
    rolFirma: "Atratus · Envigado, Antioquia",
    asunto: "Las lluvias arrancan en 12 días",
    hora: "6:48 AM · seis días después",
    cuerpo: (
      <>
        <p>Hola,</p>
        <p>
          El IDEAM pronostica que la primera tormenta de la temporada cae el
          14 de abril sobre los Andes orientales.
        </p>
        <p>Si te agarra sin la prenda lista, ya sabes cómo termina.</p>
        <p>Te queríamos avisar antes que a nadie de la lista:</p>
        <div className="my-5 rounded-lg border border-rojo-atratus/25 bg-rojo-atratus/[0.06] px-4 py-3.5">
          <p className="text-sm font-semibold text-rojo-atratus leading-tight">
            15 % off en la Chaqueta Espeletia
          </p>
          <p className="text-[11px] text-monte/65 mt-1">
            Envío gratis · válido 72 horas
          </p>
        </div>
        <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-seagreen">
          Ver la chaqueta
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </p>
        <p>
          Es la única hecha con tela colombiana que aguanta el aguacero andino
          sin sonar a bolsa plástica.
        </p>
        <p className="text-[11px] text-monte/55 italic">
          Esta oferta vence el viernes a las 11:59 PM.
        </p>
      </>
    ),
  },
};

export function MaquinariaPreview() {
  const [active, setActive] = useState<View>("cuaderno");

  const toggle = (view: EmailKey) =>
    setActive((prev) => (prev === view ? "cuaderno" : view));

  const renderEmail = (v: EmailKey) => {
    const d = emailData[v];
    return (
      <article className="relative h-full rounded-2xl bg-white border border-monte/12 overflow-hidden flex flex-col shadow-[0_18px_50px_-22px_rgba(14,14,14,0.18)]">
        {/* Header del cliente de email */}
        <header className="px-5 py-4 border-b border-monte/8 bg-hueso-light/60">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-seagreen text-white text-[11px] font-semibold tracking-wider">
              {d.iniciales}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2 flex-wrap">
                <p className="text-sm font-semibold text-monte truncate">
                  {d.remitente}
                </p>
                <p className="text-[11px] text-monte/55 truncate">
                  &lt;{d.remitenteEmail}&gt;
                </p>
              </div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-monte/45 mt-0.5">
                {d.hora}
              </p>
            </div>
          </div>
          <h5 className="mt-3 text-sm md:text-base font-semibold text-monte leading-snug">
            {d.asunto}
          </h5>
        </header>
        {/* Cuerpo */}
        <div className="flex-1 overflow-y-auto px-5 py-5 text-[13px] md:text-sm text-carbon leading-relaxed [&>p]:mb-3.5 [&>p:last-child]:mb-0">
          {d.cuerpo}
          <div className="mt-6 pt-5 border-t border-monte/8">
            <p className="text-sm italic text-monte">—{d.remitente}</p>
            <p className="text-[11px] text-monte/55 mt-0.5">{d.rolFirma}</p>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="grid grid-cols-12 gap-x-8 gap-y-10 items-start">
      {/* Lado izquierdo · panel dinámico */}
      <div className="col-span-12 lg:col-span-5">
        <div className="relative aspect-[3/4] grid">
          {/* Cuaderno · default */}
          <div
            className="col-start-1 row-start-1 transition-opacity duration-300 ease-out"
            aria-hidden={active !== "cuaderno"}
            style={{
              opacity: active === "cuaderno" ? 1 : 0,
              pointerEvents: active === "cuaderno" ? "auto" : "none",
            }}
          >
            <article className="relative h-full rounded-2xl bg-monte text-white overflow-hidden flex flex-col justify-between p-7 md:p-9 border border-seagreen/30">
              <div
                className="absolute inset-x-0 top-0 h-[3px] bg-seagreen"
                aria-hidden
              />
              <div
                className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-black/40 to-transparent pointer-events-none"
                aria-hidden
              />
              <div className="relative">
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-seagreen mb-3">
                  Lead Magnet · PDF
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

              <ul className="space-y-2.5 my-7 relative">
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

              <div className="pt-5 border-t border-white/12 relative">
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

          {/* Vistas EMAIL */}
          {(["bienvenida", "educacion", "conversion"] as const).map((v) => {
            const isActive = active === v;
            return (
              <div
                key={v}
                className="col-start-1 row-start-1 transition-opacity duration-300 ease-out"
                aria-hidden={!isActive}
                style={{
                  opacity: isActive ? 1 : 0,
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                {renderEmail(v)}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lado derecho · botones de correo */}
      <div className="col-span-12 lg:col-span-7 lg:pt-4">
        <p className="text-base md:text-lg text-carbon leading-relaxed">
          Manual de 18 páginas firmado por Toña y Mate.{" "}
          <span className="font-semibold text-seagreen">
            La gente no descarga un cupón. Descarga un libro.
          </span>
        </p>

        <div className="mt-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-niebla mb-3">
            Lo ideal: tres correos en la primera semana
          </p>
          <p className="text-sm text-carbon mb-5 leading-relaxed max-w-2xl">
            Cada uno con un trabajo claro. Toca un botón para ver el correo real
            en el panel del lado — sale en lugar del Cuaderno.
          </p>

          <div className="space-y-3">
            {buttons.map((b) => {
              const isActive = active === b.view;
              return (
                <button
                  key={b.view}
                  type="button"
                  onClick={() => toggle(b.view)}
                  aria-pressed={isActive}
                  className={`group w-full rounded-xl border transition-all duration-300 text-left cursor-pointer flex items-center gap-4 px-5 py-4 ${
                    isActive
                      ? "border-seagreen bg-seagreen/[0.07] shadow-[0_10px_30px_-16px_rgba(92,138,123,0.4)]"
                      : "border-monte/10 bg-white hover:border-seagreen/40 hover:-translate-y-[1px]"
                  }`}
                >
                  <span
                    className={`font-mono text-sm font-semibold tabular shrink-0 w-12 transition-colors ${
                      isActive ? "text-seagreen" : "text-monte/70"
                    }`}
                  >
                    {b.badge}
                  </span>
                  <span className="flex-1 text-sm md:text-base font-semibold leading-tight text-monte">
                    {b.titulo}
                  </span>
                  <span
                    className={`text-[10px] font-semibold font-mono uppercase tracking-[0.18em] transition-all duration-300 ${
                      isActive ? "text-seagreen" : "text-monte/40"
                    }`}
                    aria-hidden
                  >
                    {isActive ? "Abierto" : "Ver →"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
