# Session State — Trabajo Final Atratus

> Archivo de handoff entre sesiones. Cuando retomes, lee primero este archivo, luego `context_engineering.md`, `design_reference.md` y `README.md`.

**Última sesión:** 2026-05-13.
**Estado:** ✅ **Pitch completo y desplegado en producción.** 7 de 7 secciones SCQA construidas, repo en GitHub, Vercel publicando automáticamente cada push.

---

## 🎯 Estado de cierre · 2026-05-13

| Bloque | Estado |
|---|---|
| Documentación maestra (context + design + this) | ✅ 100% |
| Imágenes curadas (29 assets + 4 generadas con IA) | ✅ 100% |
| Excel auditado `Atratus_Calculos_Auditados.xlsx` (12-13 hojas, fórmulas verificables) | ✅ 100% |
| Word `Pitch_Atratus_Guion_Oral_Pulpito.docx` (4 roles · pulpito + Q&A + frases prohibidas) | ✅ 100% |
| Scaffold web + design system (Next.js 16 + Tailwind 4 + voz-viva) | ✅ 100% |
| §0 Hero (CMO) — `Hero.tsx` | ✅ |
| §1 Diagnóstico DOFA+CAME+SMART (CMO) — `Diagnostico.tsx` | ✅ |
| §2 Audiencia · 3 buyer personas (Contenidos) — `Audiencia.tsx` | ✅ |
| §3 Motor Adquisición · SEO+Pauta (Growth) — `Motor.tsx` | ✅ |
| §4 Sistema Retención · 4 bloques (RevOps) — `Retencion.tsx` | ✅ |
| §5 Cronograma + Pedido (CMO) — `Pedido.tsx` | ✅ |
| §6 Cierre (CMO) — `Cierre.tsx` | ✅ |
| Repo GitHub `final-atratus` (public, main) | ✅ |
| Auto-deploy Vercel (Root Directory = `web`) | ✅ |

**Pitch deck completo · pre-presentación al consejo Atratus.**

---

## 🔗 Coordenadas del proyecto

- **Path local:** `/Users/alexperezmontoya/Desktop/1. Negocios Electrónicos/13. Trabajo Final Atratus/`
- **Repo:** https://github.com/alexpemontoya2000-cyber/final-atratus
- **Vercel:** auto-deploy en cada `git push origin main` · Root Directory = `web/` · Framework = Next.js
- **Stack:** Next.js 16 (Turbopack default) · React 19 · Tailwind 4 (CSS-first con `@theme`) · TypeScript estricto · pnpm
- **Git config local:** user.name = "Alex Pérez Montoya" · user.email = "alexpemontoya2000@gmail.com"

---

## 🎙️ Arquitectura narrativa SCQA (10:30 min · 4 voces)

| § | Sección | Marco SCQA | Rol | Tiempo | Componente |
|---|---|---|---|---|---|
| 0 | Hero · *The Money's in the List* | Tesis | CMO | 0:30 | `Hero.tsx` |
| 1 | Diagnóstico · DOFA+CAME+SMART | Situation + Complication | CMO | 2:00 | `Diagnostico.tsx` |
| 2 | Audiencia · 3 buyer personas | Question | Contenidos | 1:30 | `Audiencia.tsx` |
| 3 | Motor Adquisición · SEO+Pauta | Answer (atraer) | Growth | 2:00 | `Motor.tsx` |
| 4 | Sistema Retención · stack+auto+reactivación+escalabilidad | Answer (retener) | RevOps | 2:30 | `Retencion.tsx` |
| 5 | Cronograma + Pedido | Implementación | CMO | 1:30 | `Pedido.tsx` |
| 6 | Cierre | Comercial-cierre | CMO | 0:30 | `Cierre.tsx` |

**Buyer personas (§2):** María (Aviturista), Daniel (Senderista), Sara (Bióloga).
**Motor (§3) ROAS por etapa:** TOFU 1.2× · MOFU 2.5× · BOFU 5.5× · F1 blended 3.74× · F2 blended 4.83×.
**Retención (§4):** reactivación email año 1 = $150M COP · ROI 6.150%.
**Pedido (§5):** inversión $31M · retorno $283M · ROI 9.13× · CTA WhatsApp wa.me/573147446649.

**Frases ancla que NO cambian** (defendidas por el usuario):
- Hero: `THE MONEY'S IN THE LIST` (con traducción italic abajo: "— el dinero está en la lista.")
- Diagnóstico: `Atratus camina bien. Pero camina en círculos.`
- Cierre: `La marca ya está. La gente ya está. El sistema apenas se enciende.`

---

## 🧠 Reglas duras del proyecto (no negociables)

1. **Voz-viva activada antes de cualquier copy.** Cero patrones IA. Modo según rol:
   - CMO: manifiesto + comercial-cierre
   - Contenidos: cronista
   - Growth: plan-operativo + pedagógico
   - RevOps: plan-operativo + institucional
2. **Toda cifra con fórmula verificable.** ROAS objetivo = 1 / (% margen invertible). Cifras vigentes en `Atratus_Calculos_Auditados.xlsx` hoja "Validación calculadora".
3. **Responsive 2xl obligatorio** para llenar 1920px: `px-6 md:px-12 lg:px-20 2xl:px-32` + `mx-auto max-w-[1480px] 2xl:max-w-[1720px]`.
4. **Caps de tipografía display moderados:**
   - Hero headline: `clamp(2.5rem, 7vw, 8rem)` con `lineHeight: 0.92`
   - Section headlines: `clamp(2.5rem, 6.5vw, 6rem)`
5. **No dark mode** — Atratus es marca tierra/hueso. Fondo hueso `#EFEBE3`, nunca blanco puro.
6. **Tailwind 4 CSS-first** — todos los tokens en `@theme` dentro de `globals.css`. No hay `tailwind.config.ts`.
7. **Cada dato aparece UNA vez** en el pitch. Sin repetir 78K, 70%, AOV, etc. en varias secciones.
8. **El nested git en /web/ está eliminado** — el repo único vive en la raíz del proyecto. Si `create-next-app` se vuelve a correr, recordar `rm -rf web/.git`.

---

## 🚀 Cómo retomar el proyecto

```bash
cd "/Users/alexperezmontoya/Desktop/1. Negocios Electrónicos/13. Trabajo Final Atratus/web"
pnpm install   # solo si node_modules no está
pnpm dev       # → http://localhost:3000
```

**Para publicar un cambio:**
```bash
cd "/Users/alexperezmontoya/Desktop/1. Negocios Electrónicos/13. Trabajo Final Atratus"
git add .
git commit -m "..."
git push origin main
# Vercel publica solo en 2-3 min
```

**Para pulir copy:** invocar primero la skill `voz-viva` con el modo correspondiente al rol. NO improvisar tono.

**Para tocar cifras:** abrir `Atratus_Calculos_Auditados.xlsx`, ajustar la fórmula en la hoja correspondiente, propagar a la web. Nunca cambiar una cifra en `.tsx` sin actualizar el Excel.

---

## 📂 Documentos hermanos en la raíz

- `README.md` — overview público del repo
- `context_engineering.md` — biblia estratégica completa (13 secciones)
- `design_reference.md` — biblia visual (paleta, tipografía, componentes)
- `Atratus_Calculos_Auditados.xlsx` — todas las cifras con fórmulas
- `Pitch_Atratus_Guion_Oral_Pulpito.docx` — guion oral palabra-por-palabra para los 4 roles
