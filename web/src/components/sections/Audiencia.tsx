import { RoleBadge } from "@/components/ui/RoleBadge";
import { PersonaCard } from "@/components/ui/PersonaCard";
import { DeseoDelDiaSlider } from "@/components/ui/DeseoDelDiaSlider";

export function Audiencia() {
  return (
    <section
      id="audiencia"
      className="relative bg-hueso py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 2xl:px-32 scroll-mt-24"
    >
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-monte/12 to-transparent"
        aria-hidden
      />

      <div className="mx-auto max-w-[1480px] 2xl:max-w-[1720px]">
        {/* Cabecera — cambio de presentador */}
        <header className="flex flex-col gap-7 max-w-4xl">
          <div className="flex flex-wrap items-center gap-4">
            <RoleBadge role="contenidos" variant="light" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-niebla">
              § 2 · Audiencia
            </span>
          </div>

          <h2
            className="display text-monte"
            style={{
              fontSize: "clamp(2rem, 5.2vw, 4.75rem)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            Sus clientes cargan binoculares en la mochila. Tienen botas debajo
            de la cama.{" "}
            <span className="text-atratus-verde">
              Y madrugan todos los sábados.
            </span>
          </h2>
        </header>

        {/* Frase de fondo — el deseo compartido (slider de 4 paradas) */}
        <div className="mt-12 md:mt-16 max-w-5xl">
          <DeseoDelDiaSlider />
        </div>

        {/* Grid de 3 personas */}
        <div className="mt-14 md:mt-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-niebla mb-6">
            Las tres personas detrás de cada compra
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <PersonaCard
              number="Persona 01"
              segment="El Aviturista"
              age="28–55 años · ciudad · fines de semana en campo"
              image="/atratus/marca/actividad-avistamiento-aves.jpg"
              imageAlt="Aviturista colombiana con cámara en bosque"
              busca={[
                "Ropa que no espante las aves — colores neutros, telas silenciosas",
                "Bolsillos para libreta de campo y binoculares",
                "Secado rápido para cruzar páramos antes del amanecer",
              ]}
              hook="Salgo a las 5 am al Chingaza. Lo último que necesito es una chaqueta que cruja cada vez que me muevo."
              signature="— María, 42, Bogotá"
              productHint="Camisa Athene · $215.000"
              accentColor="beige"
            />

            <PersonaCard
              number="Persona 02"
              segment="El Senderista"
              age="28–45 años · 1–4 años caminando el monte"
              image="/atratus/marca/actividad-senderismo.jpg"
              imageAlt="Senderista colombiano en bosque tropical"
              busca={[
                "Técnica real para clima tropical húmedo, no alpino europeo",
                "Comodidad para 6 horas de caminata sin dolor",
                "Precio justo — sin pagar la marca importada",
              ]}
              hook="Hice Cocuy con la ropa que tenía. Casi me cuesta. Quiero algo hecho para acá, no para los Alpes."
              signature="— Daniel, 33, Medellín"
              productHint="Pantalón Rupornis · $210.000"
              accentColor="verde"
            />

            <PersonaCard
              number="Persona 03"
              segment="El Biólogo / Guía"
              age="25–50 años · uso profesional diario"
              image="/atratus/marca/actividad-climas-frios.png"
              imageAlt="Bióloga colombiana con polar Atratus en niebla del páramo"
              busca={[
                "Durabilidad para uso de campo intensivo",
                "Credibilidad de marca frente a sus clientes",
                "Calidad sin sobrecosto europeo — el trabajo paga ropa, no logos",
              ]}
              hook="Camino el monte cuatro días a la semana. La ropa es herramienta, no moda. Tiene que aguantar."
              signature="— Sara, 29, guía Sierra Nevada"
              productHint="Polar Páramo · $199.900"
              accentColor="azul"
            />
          </div>
        </div>

        {/* Propuesta de valor consolidada */}
        <div className="mt-20 md:mt-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-atratus-verde mb-5">
            Propuesta de valor consolidada
          </p>
          <div className="grid grid-cols-12 gap-x-8">
            <blockquote className="col-span-12 lg:col-span-10">
              <p
                className="display text-monte"
                style={{
                  fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.025em",
                  textWrap: "balance",
                }}
              >
                Ropa técnica, diseñada por científicos colombianos, para el
                monte colombiano.{" "}
                <span className="text-monte/55">No importada. No adaptada.</span>{" "}
                <span className="text-atratus-verde">
                  Probada en las mismas trochas que camina quien la compra.
                </span>
              </p>
              <footer className="mt-6 text-[11px] uppercase tracking-[0.22em] text-niebla">
                — Esto es lo que los tres firman cuando hacen click en pagar.
                Cada uno por sus propias razones.
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
