# Session State — Trabajo Final Atratus

> Archivo de handoff entre sesiones. Cuando retomes, lee primero este archivo, luego `context_engineering.md` y `design_reference.md`.

**Última sesión:** 2026-05-13 (tarde-noche — pausa antes de codear §4 Retención).
**Estado:** 4 de 7 secciones SCQA codeadas y vivas en localhost:3000. §4 tiene el copy listo (ver `_pending_copy_retencion.md`) — solo falta construir el componente.
**Siguiente paso al retomar:** construir `web/src/components/sections/Retencion.tsx` con el copy ya aprobado del archivo `_pending_copy_retencion.md`. NO regenerar copy, está aprobado.

---

## 🎯 NORTE ACTUAL (post-refactor SCQA · 2026-05-13)

Pasamos de 13 secciones (pedagógicas) a **7 secciones (narrativas SCQA)**.

**Razones del refactor:**
- 13 secciones repetían datos (78K, 70%, $6M COP en 2-3 secciones cada uno).
- 13 cierres "manifesto" acumulados → pierde fuerza.
- 4 roles desbalanceados — CMO con 5, los otros con 1.
- Faltaba estructura SCQA (Situation-Complication-Question-Answer).
- Pedía la Clase 12: DOFA+CAME · Objetivos SMART · Audiencia · Canales · Métricas · Presupuesto · Roles · Cronograma. Lo cubrimos todo, pero condensado.

### Mapeo nuevo SCQA + Clase 12 + 4 roles

| # | Sección | Marco SCQA | Rol | Tiempo | Cubre de Clase 12 |
|---|---|---|---|---|---|
| **0** | **Apertura** | Tesis | **CMO** | 0:30 | Quiénes somos / qué proponemos |
| **1** | **Diagnóstico** (DOFA + CAME + Objetivos SMART) | Situation + Complication | **CMO** | 2:00 | DOFA · CAME · Objetivos SMART |
| **2** | **Audiencia + Propuesta de Valor** | Question | **Contenidos** | 1:30 | Segmentación · Propuesta · Buyer personas |
| **3** | **Motor de Adquisición** (SEO + Pauta consolidados) | Answer parte 1: atraer | **Growth** | 2:00 | Canales · Estrategias · Presupuesto pauta |
| **4** | **Sistema de Retención** (stack + auto + reactivación + escalabilidad) | Answer parte 2: retener y monetizar | **RevOps** | 2:30 | Métricas · KPIs · Roles operativos |
| **5** | **Cronograma + Pedido** | Implementación | **CMO** | 1:30 | Cronograma 12 meses · Presupuesto total · Roles · El sí |
| **6** | **Cierre** | Comercial-cierre | **CMO** | 0:30 | Frase final + foto fundadores |

**Total: 10:30 min · holgura 30 seg.** Tiempo por rol: CMO 4:30 · Contenidos 1:30 · Growth 2:00 · RevOps 2:30.

### Reglas duras del refactor
- **Cada dato aparece UNA vez en todo el pitch.** Si "78K" sale en §2, no sale en §0.
- **Cada rol tiene UNA sección suya** (excepto CMO que orquesta).
- **Sin manifestos cierre repetidos** — solo §1 cierra fuerte; los demás transicionan limpio.
- **Voz-viva ACTIVADA antes de cada copy.** Sin skill → no se reescribe.

### Plan de migración (orden estricto)

1. ✅ **Hero** reescrito con voz-viva (CMO · manifiesto+comercial-cierre).
2. ✅ **§1 Diagnóstico** construido (fusionó Problema + Oportunidad, DOFA+CAME + 5 SMART). Archivo: `Diagnostico.tsx`.
3. ✅ **§2 Audiencia** refactorizada con voz-viva (cronista). Bug numérico § 3 → § 2 corregido.
4. ✅ **§3 Motor de Adquisición** construido (fusionó SEO + Pauta como dos frentes). Archivo: `Motor.tsx`.
5. ✅ **§4 Retención** construido. `Retencion.tsx` con 4 bloques (Stack · Maquinaria Cuaderno de Campo · Reactivación $150M · 3 acciones Escalabilidad) + bisagra. Voz-viva aplicada. Cifras auditadas con AOV $200K.
6. ⏳ **§5 Cronograma + Pedido** (CMO · 1:30) — Gantt 12 meses + presupuesto consolidado + 4 roles + el sí concreto.
7. ⏳ **§6 Cierre** (CMO · 0:30) — frase final + foto Toña y Mate + CTA WhatsApp aprobación.

---

## ✅ Qué está LISTO (pre-refactor · se conserva o se migra)

### Documentación maestra (3 archivos en raíz del proyecto)
- `context_engineering.md` — biblia estratégica (13 secciones)
- `design_reference.md` — biblia visual (10 secciones, paleta de pantalla, componentes)
- `SESSION_STATE.md` — este archivo

### Imágenes (29 assets en `/imagenes/`)
- `productos/` — 11 productos curados (los que aparecen en la narrativa)
- `marca/` — 14 lifestyle/hero/activity + logo Atratus (descargadas de CDN)
- `marca/` — **4 imágenes hiperrealistas generadas con IA** (Flux/Midjourney):
  - `hero-fundadores.png` — Toña y Mate en cloud forest dorado (Hero §0 + Cierre §12) ⭐
  - `paramo-cordillera.png` — Vista panorámica de los Andes con frailejones (§2 La Oportunidad)
  - `cliente-se-aleja.png` — Caminante perdiéndose en niebla (§1 El Problema, opcional)
  - `gallito-de-roca.png` — Ave Rupicola peruvianus en bosque (§6 MOFU Big Day)

### Web pitch deck — scaffold + Hero §0 (en `/web/`)
- **Stack:** Next.js 16 + Tailwind 4 (CSS-first config) + TypeScript + pnpm
- **Fonts:** Archivo Black (display) + Plus Jakarta Sans (body) + JetBrains Mono (data)
- **Carpeta:** `/web/` dentro del proyecto, dev server probado en `localhost:3000`
- **0 errores, 0 warnings** en última verificación

### Componentes ya construidos
| Archivo | Propósito |
|---|---|
| `web/src/lib/cn.ts` | Helper para concat de classNames |
| `web/src/lib/roles.ts` | 4 roles (estratega/contenidos/growth/revops) con colors y metadata |
| `web/src/components/ui/PillButton.tsx` | Botón pill con 4 variantes |
| `web/src/components/ui/RoleBadge.tsx` | Badge del rol presentador con dot animado |
| `web/src/components/Header.tsx` | Header sticky con logo + nav + stamp |
| `web/src/components/sections/Hero.tsx` | **Sección §0 completa** |
| `web/src/app/layout.tsx` | Root layout con fonts y metadata |
| `web/src/app/globals.css` | Design tokens Tailwind 4 + animaciones |
| `web/src/app/page.tsx` | Mount Hero + placeholder §1 |
| `web/next.config.ts` | Config con `images.qualities: [75, 85, 92]` |

### Decisiones críticas tomadas
1. **No dark mode** — Atratus es marca tierra/hueso. Fondo hueso (`#EFEBE3`), nunca blanco puro.
2. **No usar `hero-aventura-desktop.png`** — tenía texto "ROPA PARA LA AVENTURA" baked-in que chocaba con "DEL MONTE A LA COSTUMBRE". Usé `actividad-climas-frios.png` (mujer con polar Atratus, sin texto).
3. **Tailwind 4 CSS-first** — no hay `tailwind.config.ts`. Todo en `@theme` dentro de `globals.css`.
4. **Permisos liberales locked** — `.claude/settings.local.json` allowlistea Bash, Read, Edit, Write, WebFetch, MCPs. Bypass total requiere `Shift+Tab` UI manual.

---

## ⏳ Qué está PENDIENTE (en orden de prioridad)

### 1. Sección §1 — El Problema ✅ COMPLETADA
Construida con typography-led approach (sin foto — la ausencia subraya el mensaje). Contiene: role badge Estratega + eyebrow "§ 1 · Diagnóstico" + "El número que duele" + `70%` gigante con `%` en rojo Atratus + "no vuelve." + relato lateral + 4 StatCards (Churn / Frecuencia / Ticket / LTV) + manifesto-quote: "Atratus tiene producto. Tiene comunidad. Lo que no tiene es sistema." Componente reutilizable `StatCard` creado.

### 2. Sección §2 — La Oportunidad ✅ COMPLETADA
Construida con: cabecera + headline "El mercado ya quiere comprar lo que Atratus vende" + hero panorámico `paramo-cordillera.png` con overlay "Colombia es el país #1 del mundo en aves" + 4 OpportunityCards (12K búsquedas · 1.950 especies · 78K seguidores · 50-60% margen) con accent colors por palanca + pull-quote bisagra hacia siguiente sección. Componente reutilizable `OpportunityCard` creado.

### Mejora a §1 — Beat visual con `cliente-se-aleja.png` añadida
Sumada sección visual entre stats y manifesto: foto portrait + copy reflexivo "Cada cliente que no volvió tuvo un nombre, una mochila y una intención." Profundiza la sección sin saturarla.

### 3-12. Resto de secciones
Plan completo en `context_engineering.md` §6 con tiempo, presentador y patrón visual mapeado de Atratus.

### Pendientes técnicos generales
- [ ] Inicializar git en `/web/` y hacer primer commit
- [ ] Crear repo GitHub y conectar (cuando Alex lo decida)
- [ ] Deployar a Vercel (cuando esté la presentación completa)
- [ ] Decidir si el T5 viejo (`atratus.vercel.app` actual) va como ruta `/seo-pillar` o link externo
- [ ] Foto del equipo (los 4 presentadores) para footer — pendiente que Alex la consiga
- [ ] Activar skill `voz-viva` al escribir copy de cada sección (cronista para Contenidos, plan operativo para RevOps, etc.)

---

## 🚀 Cómo retomar la sesión

1. **Lee este archivo** (`SESSION_STATE.md`).
2. **Lee `context_engineering.md`** §6 para ver la tabla completa de secciones.
3. **Lee `design_reference.md`** §7 para ver el patrón visual de cada sección.
4. **Levanta dev server:**
   ```bash
   cd "/Users/alexperezmontoya/Desktop/1. Negocios Electrónicos/13. Trabajo Final Atratus/web"
   pnpm dev
   ```
5. **Abrir:** `http://localhost:3000` — debe verse el Hero §0 + placeholder §1.
6. **Siguiente paso:** construir `web/src/components/sections/Problema.tsx` y reemplazar el placeholder en `page.tsx`.

---

## 📊 Métricas del progreso

| Bloque | Status |
|---|---|
| Diagnóstico + Investigación | ✅ 100% |
| Documentación maestra | ✅ 100% |
| Imágenes curadas | ✅ 100% |
| Scaffold web + design system | ✅ 100% |
| Sección (nueva arquitectura SCQA) | Estado |
|---|---|
| §0 Hero (CMO) — `Hero.tsx` | ✅ 100% — voz-viva aplicada |
| §1 Diagnóstico (CMO · fusiona Problema+Oportunidad+SMART) — `Diagnostico.tsx` | ✅ 100% |
| §2 Audiencia (Contenidos) — `Audiencia.tsx` | ✅ 100% — voz-viva refactor |
| §3 Motor Adquisición (Growth · fusiona SEO+Pauta) — `Motor.tsx` | ✅ 100% |
| §4 Sistema de Retención (RevOps) — `Retencion.tsx` | ✅ 100% |
| §5 Cronograma + Pedido (CMO) — `Pedido.tsx` | ✅ 100% |
| §6 Cierre (CMO) — `Cierre.tsx` | ✅ 100% — pitch deck completa |
| Deploy Vercel | ⏳ 0% |
| Deploy Vercel | ⏳ 0% |

**Progreso global:** 1 de 13 secciones (Hero) + toda la infraestructura. Aproximadamente **35% del proyecto** completado (la infraestructura es la mitad del trabajo).
