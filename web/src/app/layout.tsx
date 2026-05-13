import type { Metadata } from "next";
import { Archivo_Black, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atratus 2026 — Plan Estratégico Digital",
  description:
    "Del Monte a la Costumbre. Plan estratégico digital 2026–2027 para Atratus Colombia. Propuesta de marketing de contenido para el consejo directivo.",
  openGraph: {
    title: "Atratus 2026 — Plan Estratégico Digital",
    description: "Del Monte a la Costumbre.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-CO"
      className={`${archivoBlack.variable} ${plusJakarta.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
