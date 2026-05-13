import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Diagnostico } from "@/components/sections/Diagnostico";
import { Audiencia } from "@/components/sections/Audiencia";
import { Motor } from "@/components/sections/Motor";
import { Retencion } from "@/components/sections/Retencion";
import { Pedido } from "@/components/sections/Pedido";
import { Cierre } from "@/components/sections/Cierre";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Diagnostico />
        <Audiencia />
        <Motor />
        <Retencion />
        <Pedido />
        <Cierre />
      </main>
    </>
  );
}
