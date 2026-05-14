# Pitch Atratus 2026 · Plan Estratégico Digital

Web pitch deck dirigida al consejo directivo de [Atratus Colombia](https://www.atratuscolombia.com/) para aprobar el plan estratégico digital 2026–2027.

**Equipo · 4 voces · Esumer · Negocios Digitales**
**Docente: Santiago Herrera**

---

## Stack técnico

- **Framework:** Next.js 16 (App Router) + TypeScript estricto
- **Estilos:** Tailwind 4 (CSS-first config en `globals.css`)
- **Fuentes:** Archivo Black (display) + Plus Jakarta Sans (body) + JetBrains Mono (data)
- **Imágenes:** `next/image` con CDN Shopify de Atratus + 4 generadas con IA (Flux 1.1 Pro)
- **Despliegue:** Vercel

## Estructura del repo

```
.
├── README.md
├── context_engineering.md        ← biblia estratégica del proyecto
├── design_reference.md           ← biblia visual (paleta, tipografía, componentes)
├── SESSION_STATE.md              ← handoff entre sesiones de trabajo
├── Atratus_Calculos_Auditados.xlsx   ← Excel con todas las cifras y fórmulas (12 hojas)
├── Pitch_Atratus_Guion_Oral_Pulpito.docx   ← Guion oral para los 4 roles
├── imagenes/                     ← assets fuente (productos + lifestyle)
└── web/                          ← aplicación Next.js (root del deploy en Vercel)
    ├── public/atratus/           ← imágenes optimizadas servidas por la app
    └── src/
        ├── app/                  ← layout + page + globals.css
        ├── components/
        │   ├── sections/         ← Hero · Diagnóstico · Audiencia · Motor · Retención · Pedido · Cierre
        │   └── ui/               ← PillButton · RoleBadge · StatCard · LayerCard · etc.
        └── lib/                  ← cn, roles
```

## Arquitectura narrativa (7 secciones SCQA)

| § | Sección | Rol presentador | Tiempo |
|---|---|---|---|
| 0 | Hero · *The Money's in the List* | Estratega (CMO) | 0:30 |
| 1 | Diagnóstico · DOFA+CAME+SMART | Estratega (CMO) | 2:00 |
| 2 | Audiencia · 3 buyer personas | Director Contenidos | 1:30 |
| 3 | Motor de Adquisición · SEO+Pauta | Head of Growth | 2:00 |
| 4 | Sistema de Retención · Stack + Auto + Reactivación + Escalabilidad | Director RevOps | 2:30 |
| 5 | Cronograma + Pedido | Estratega (CMO) | 1:30 |
| 6 | Cierre | Estratega (CMO) | 0:30 |
| | **TOTAL** | | **10:30** |

## Cómo correr local

```bash
cd web
pnpm install
pnpm dev
# → http://localhost:3000
```

## Despliegue

- **Producción:** despliegue automático en Vercel en cada `git push origin main`
- **Root directory en Vercel:** `web/` (no la raíz del repo)
- **Framework preset:** Next.js (auto-detectado)
- **Build command:** `pnpm build` (auto)
- **Install command:** `pnpm install` (auto)

## Cifras del pitch (auditadas)

| Métrica | Valor |
|---|---|
| Inversión año 1 | $31 M COP |
| Retorno proyectado año 1 | $283 M COP |
| ROI año 1 | 9,13× (conservador 7,1× · optimista 11,9×) |
| ROAS Fase 1 blended | 3,74× |
| ROAS Fase 2 blended | 4,83× |
| Reactivación email año 1 | $150 M COP · ROI 6.150% |

Todas las fórmulas en `Atratus_Calculos_Auditados.xlsx`.

## Voz

Todo el copy fue escrito usando la skill `voz-viva` — voz de Alex Pérez Montoya combinada con la oralidad multidisciplinaria de Diana Uribe. Cero patrones IA-genéricos.
