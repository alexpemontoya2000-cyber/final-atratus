import Image from "next/image";
import Link from "next/link";
import { roles } from "@/lib/roles";

const navItems = [
  { href: "#diagnostico", label: "Diagnóstico", role: roles.estratega },
  { href: "#audiencia", label: "Audiencia", role: roles.contenidos },
  { href: "#adquisicion", label: "Motor", role: roles.growth },
  { href: "#retencion", label: "Retención", role: roles.revops },
  { href: "#pedido", label: "Pedido", role: roles.estratega },
];

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="px-6 md:px-10 lg:px-14 pt-5">
        <div
          className="
            mx-auto max-w-[1480px] 2xl:max-w-[1720px]
            flex items-center justify-between gap-6
            rounded-full
            bg-hueso/85 backdrop-blur-xl
            border border-monte/10
            px-5 py-2.5 md:px-6 md:py-3
            shadow-[0_1px_0_0_rgba(255,255,255,0.4)_inset,0_8px_30px_-12px_rgba(14,14,14,0.12)]
          "
        >
          {/* Logo wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 transition-opacity hover:opacity-80"
            aria-label="Atratus — Implementos para el Monte"
          >
            <Image
              src="/atratus/marca/logo-atratus.png"
              alt="Atratus"
              width={140}
              height={37}
              priority
              className="h-7 md:h-8 w-auto"
            />
          </Link>

          {/* Nav central — secciones del pitch con dot del rol */}
          <nav
            className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-monte/70"
            aria-label="Secciones del pitch"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group inline-flex items-center gap-2 hover:text-monte transition-colors"
                aria-label={`${item.label} — ${item.role.title}`}
                title={`${item.role.rolNumber} · ${item.role.title}`}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:scale-150"
                  style={{ background: item.role.color }}
                  aria-hidden
                />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Stamp — meta de la presentación */}
          <div className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-monte/55">
            <span className="h-1 w-1 rounded-full bg-atratus-verde" aria-hidden />
            <span className="hidden lg:inline">Pitch Estratégico</span>
            <span className="text-monte/40">·</span>
            <span>2026</span>
          </div>
        </div>
      </div>
    </header>
  );
}
