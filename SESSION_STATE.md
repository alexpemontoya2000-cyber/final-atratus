# Session State — Trabajo Final Atratus

> Archivo de handoff entre sesiones. Cuando retomes, lee primero este archivo, luego `context_engineering.md`, `design_reference.md` y `README.md`.

**Última sesión:** 2026-05-15 (sesión 2 · noche).
**Estado:** ✅ Pitch en producción con **5 dinámicos interactivos vivos** (§1 switch · §2 slider · §3 tabs + header overlay + switch · §4 switch + email viewer · §4 modal pasarela con imágenes reales) + header nav arreglado con dots de color de rol. Último commit en main: `6c49af4`. Vercel auto-deploy disparado.

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
- **Producción:** https://final-atratus.vercel.app/
- **Vercel:** auto-deploy en cada `git push origin main` · Root Directory = `web/` · Framework = Next.js
- **Stack:** Next.js 16 (Turbopack default) · React 19 · Tailwind 4 (CSS-first con `@theme`) · TypeScript estricto · pnpm
- **Git config local:** user.name = "Alex Pérez Montoya" · user.email = "alexpemontoya2000@gmail.com"

---

## 🎙️ Arquitectura narrativa SCQA (8:30 min oral · 4 voces · ~9:00 con transiciones)

| § | Sección | Marco SCQA | Rol | Tiempo | Componente |
|---|---|---|---|---|---|
| 0 | Hero · *The Money's in the List* | Tesis | CMO | 0:30 | `Hero.tsx` |
| 1 | Diagnóstico · DOFA+CAME+SMART | Situation + Complication | CMO | 1:30 | `Diagnostico.tsx` |
| 2 | Audiencia · 3 buyer personas | Question | Contenidos | 1:30 | `Audiencia.tsx` |
| 3 | Motor Adquisición · SEO+Pauta | Answer (atraer) | Growth | 1:30 | `Motor.tsx` |
| 4 | Sistema Retención · stack+auto+reactivación+1 palanca | Answer (retener) | RevOps | 2:00 | `Retencion.tsx` |
| 5 | Cronograma + Pedido | Implementación | CMO | 1:00 | `Pedido.tsx` |
| 6 | Cierre | Comercial-cierre | CMO | 0:30 | `Cierre.tsx` |

**Buyer personas (§2):** María (Aviturista), Daniel (Senderista), Sara (Bióloga).
**Motor (§3) ROAS por etapa:** TOFU 1.2× · MOFU 2.5× · BOFU 5.5× · F1 blended 3.74× · F2 blended 4.83×.
**Retención (§4):** reactivación email año 1 = $150M COP · ROI 6.150%. Bloque D Escalabilidad recortado a **una sola palanca** (Cascada Upsell +78% AOV) — referidos y email D14 se mencionan como tácticas en el cronograma del Pedido, no como sección propia.
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
- `Pitch_Atratus_Guion_Oral_Pulpito_v2.docx` — guion oral palabra-por-palabra para los 4 roles (versión 2026-05-14 con tiempos recortados)

---

## 🎨 Pase de pulido visual · 2026-05-14 (sesión tarde-noche)

Alex pasó **10 capturas con inconformidades** para refinar la página. Hechas 7 de 10. Quedan pendientes 3 que cuando retomemos él va a pasar (capturas #8, #9, #10 — la #5 fue otra bisagra ya cubierta en este mismo pase).

**Cambios aplicados en esta sesión:**

1. **§1 Diagnóstico — header rediseñado.** Copy puntual: "Antes de proponer nada..." → **"Esto es lo que dicen los números."** Header convertido en grid 2-col. A la derecha: SVG animado `caminando en círculos` — sendero punteado, 16 pisadas radiales, caminante rojo con halo que rota 360° en loop infinito (14s). Centro: `MISMA VUELTA / AÑO TRAS AÑO` en mono. Keyframe `walkLoop` añadido a `globals.css`.

2. **Bisagras eliminadas de §1, §3, §4 y §5.** Los bloques "La bisagra · ..." al final de cada sección desaparecen de la pantalla. **Las frases siguen vivas en el guion oral como transiciones entre voces** (Estratega → Contenidos, etc.) — no se rompe el handoff.

3. **§2 Audiencia — headline + deseo de fondo reescritos** con voz cronista (Hugo). Headline: **"Sus clientes cargan binoculares en la mochila. Tienen botas debajo de la cama. *Y madrugan todos los sábados.*"** (última frase en verde). Párrafo descriptivo eliminado. Deseo de fondo expandido con regla de tres + cierre punzante: **"sin bochorno — el bochorno es lo peor que les puede pasar caminando seis horas."**

4. **§3 Motor — headline tipográfico reemplazado por imagen cinemática.** Generada por Alex con DALL-E. Pantalla dividida 50/50: bosque andino al amanecer (SEO trabaja gratis) + cascada del páramo (pauta acelera). Guardada en `web/public/atratus/marca/motor-dos-frentes.png`. Aspect 2.36:1 con línea divisoria sutil al centro. Debajo: 2 labels mínimas (`EL QUE TRABAJA GRATIS / EL QUE ACELERA`).

5. **§4 Retención — header rediseñado.** Headline largo "La plata no está afuera. Está dormida..." → solo **"El dinero / está en la lista."** ("está en la lista." en seagreen). Todo el párrafo "El stack ya existe..." eliminado. Grid 2-col: a la derecha SVG sobre/carta flotante seagreen con respiración (sube 14px, baja en loop 4.5s) + sombra realista debajo que se contrae al subir y se expande al bajar (filter `feGaussianBlur`). Punto rojo en el centro del sobre simula sello sin abrir. Keyframes `floatLetter` y `floatShadow` añadidos.

6. **§4 Retención Bloque B Maquinaria — bloque de correos rediseñado.** Párrafo del cuaderno comprimido. Los 3 correos pasan de filas con texto largo a **3 botones expandibles** (`<details>` HTML nativo, sin JS extra, funciona en server component). Estado cerrado: solo `T+0 · Bienvenida · +`. Símbolo `+` rota 45° a `×` al abrir. Detalle (asunto del correo + objetivo) se despliega al click. Eyebrow: `LO IDEAL: TRES CORREOS EN LA PRIMERA SEMANA`.

7. **§4 Retención Bloque D Escalabilidad — pop-up demo checkout.** Card grande "Cascada en el checkout · Justo antes de pagar..." eliminada. Reemplazada por un solo botón **"Pop up"** (negro monte, redondo, punto verde pulsando) con explicación debajo de 5 palabras exactas: *"Cascada en checkout, ejemplo real."* Al click abre un modal interactivo (`<dialog>` HTML nativo + `useState`):
   - Chaqueta ya en carrito ($210.000)
   - Sugerencia 1: Cuellito ($29.900, antes $39.900) → click "Agregar" → se agrega
   - Sugerencia 2 (aparece solo si cuellito agregado): Camibuso ($169.000, antes $199.000) → "Agregar"
   - **Total dinámico** sube en vivo + cálculo del % de incremento del ticket
   - Cierre con Esc, click en backdrop cierra, accesible (aria-haspopup, aria-labelledby)
   - Componente nuevo: `web/src/components/ui/CheckoutDemoModal.tsx`

**Pendientes para retomar:**
- Captura #8 (Alex la va a pasar)
- Captura #9 (Alex la va a pasar)
- Captura #10 (Alex la va a pasar)
- Validación visual en `pnpm dev` o en producción tras push
- Posible ajuste de §5 Pedido / §6 Cierre si caen en las 3 capturas pendientes

---

## ✂️ Pase de recorte · 2026-05-14 (sesión mañana)

Auditado contra `12. Clase 09.05.2026/Clase 12_ Diseño del plan estratégico digital.pptx` — los 9 elementos del plan (slide 6) y los 6 pasos (slide 7) siguen cubiertos. Cambios aplicados:

- **§1 Diagnóstico:** quitado bloque "Lo que el dato no muestra" (foto cliente alejándose) + headline largo de DOFA.
- **§3 Motor:** quitado CTA pilar duplicado ("Esto no es propuesta. Ya está publicado") + strip "Lo que el motor deja atrás" (6 stats) + 1 cluster satélite (Storytelling).
- **§4 Retención:** Stack 3 LayerCards → tabla compacta · strip 4 stats eliminado · Escalabilidad 3 acciones → 1 (Cascada Upsell). Bloque B Maquinaria intacto.
- **§5 Pedido:** Gantt 6 → 4 iniciativas (CRM+cascada fusionado; Dashboard fusionado en SEO/medición) · Bloque C "4 voces" comprimido a tabla (NO eliminado — lo pide el .pptx slide 6 punto 9).
- **Eyebrows largos** ("Bloque A · Las tres capas que sostienen el sistema") → cortos ("A · STACK").
- **Guion oral v2:** tiempos actualizados, copy de bloques borrados eliminado, agregado Q&A "¿Y los OKR?" en sección Estratega, "once minutos" → "ocho minutos" en apertura.

Total ahorrado: ~3:00 min de oral. Backup del docx anterior: `Pitch_Atratus_Guion_Oral_Pulpito_v2.bak.docx`.

---

## 🧩 Pase de dinámicas pop-up · 2026-05-15

Sesión de auditoría completa de la presentación + arranque del **nuevo bloque D Competidores** en §1.

### Contexto del pase

Alex pidió optimizar §5 sin perder elementos críticos. Cruce con la Clase 12 confirmó que **el único requisito faltante en toda la web era "Análisis de competidores"** (slide 6 punto 3). El resto de elementos del plan estratégico ya estaban repartidos en §1 (DOFA+CAME+SMART), §2 (audiencia), §3 (estrategias+canales), §4 (retención), §5 (presupuesto+cronograma+equipo).

Alex enfatizó el patrón del **`CheckoutDemoModal`** como la dinámica visual a replicar: "algo tan simple, explicado con dinámica, se vuelve fácil al instante". Este es ahora el **patrón de referencia** del proyecto — pop-up con botón ping + `<dialog>` nativo + footer dinámico que cambia con la interacción.

### Datos verificados de competidores (mayo 2026)

| Marca | IG | E-com | Email auto | Comunidad | Origen |
|---|---|---|---|---|---|
| Cotopaxi | 553K · `@cotopaxi` | ✓ propio | ✓ activo | global | USA · B Corp · $150M/año |
| The North Face | global | ✓ propio CO | ✓ activo | global | USA · presente en CO |
| Rutas Andes (`randes.co`) | menor | ✓ propio | parcial | parcial | Colombia · senderismo |
| **Atratus** | **81K · 777 posts · `@atratus__`** | ✓ Shopify | parcial (solo formulario) | ✓ | Antioquia · Envigado |

**Sobre Atratus específicamente** (verificado en `atratuscolombia.com`):
- Tienda online: **sí, sobre Shopify**
- Newsletter: **sí tiene formulario** ("Únete a nuestra comunidad" en footer), sin automatización confirmada
- Pop-up bienvenida: **no tiene**
- Blog en sitio: **no tiene**
- Único canal social linkeado desde el sitio: IG `@atratus__`

### Componente creado

**`web/src/components/ui/CompetidoresModal.tsx`** — gemelo del `CheckoutDemoModal`:

- Botón disparador negro con ping animado **verde** (gemelo del rojo del checkout)
- `<dialog>` nativo, cierre con Esc + click en backdrop, accesible (`aria-haspopup`, `aria-labelledby`)
- Toggle **"Solo marca" / "Marca + Sistema digital"** que revela 4 columnas de checks con `animate-fade-in-up` staggered
- 4 dimensiones del sistema digital: **Tienda online · Comunidad orgánica · Email automatizado · Contenido en sitio**
- Atratus highlighted con `border-atratus-verde/40` + eyebrow "Acá estás vos"
- Estados: ✓ verde (atratus-verde), parcial rojo (rojo-atratus), no (círculo outline niebla)
- Footer dinámico cambia según modo
- Sin tecnicismos, voz Alex

### Bloque D insertado en §1 Diagnóstico

Después del bloque C (5 SMART), antes del cierre de la sección:

```
Eyebrow: LA CANCHA DE AFUERA
Headline: "Atratus no está sola en el monte.
          Pero nadie pelea outdoor antioqueño con sistema digital prendido."
Intro:    "Tres marcas y Atratus, lado a lado. Mirá primero solo la marca.
          Después prendé el sistema digital — ahí se ve la ventana."
[Botón ping verde] Pop up · La cancha completa ↗
```

### Insight estratégico del modal (footer en modo "sistema")

**Headline footer:** *"Atratus ya tiene los dos activos más difíciles de construir: marca con identidad propia y 81K personas que la siguen."*
**Sub-footer:** *"Lo que falta — email automatizado y contenido propio en el sitio — se construye en meses, no en años. Es el engranaje del medio que conecta la audiencia con la tienda."*

Reformulado tras feedback de Alex: la primera versión decía *"Atratus tiene la mitad del sistema prendido. Le falta..."* — Alex (con razón) señaló que decir *"no tiene contenido propio"* es injusto cuando hay 81K y 777 posts. Se separó **contenido en redes** (que sí tiene) de **contenido en sitio web** (blog/lead magnet, lo que sí le falta).

### Auditoría completa de dinámicas pop-up (backlog priorizado)

Detrás del CheckoutDemoModal ya en producción + el CompetidoresModal de hoy, el resto del pitch tiene **5 oportunidades** identificadas. Orden de prioridad (impacto / costo):

1. **§1 Bloque A · Calculadora del churn** — slider 0%→100% de churn que muestra en vivo cuánto dinero se va por la puerta. Convierte la estadística "70%" en pérdida visualizada.
2. **§5 optimización completa** — Gantt animado on-scroll + count-up en cifras grandes ($31M → $283M → 9.13×) + Bloque B recalculadora + compactar densidad (4 sub-bloques apilados → estructura más respirada).
3. **§4 Cascada de emails 365 días** — línea de tiempo D1 → D7 → D14 → D30 → D90. Click en día → mockup mini del email que llega.
4. **§3 Simulador de pauta** — sliders para inversión total + % de mix BOFU/MOFU/TOFU. Calcula ROAS blended + retorno esperado en vivo. Blinda contra preguntas financieras del consejo.
5. **§5 Pop-up confirmación pre-WhatsApp** — al click en "Aprobar y arrancar", primer modal con "esto pasa al aprobar hoy: 1) campaña mañana 2) leads semana 2 3) cierre Excel mes 1" + botón final que abre WhatsApp.

**Optativos del banco (si los pide):**
- §1 Bloque B Flip cards DOFA/CAME
- §2 "Un día con Atratus" por persona
- §6 Cierre con contador on-scroll (12 meses · ROI 9.13× · $283M)

### Reglas para esta línea de trabajo (no negociables)

1. **Cero datos sin verificar**. Alex pifió mi primer borrador donde puse Atratus "sin e-commerce" y "10K seguidores" — la realidad es Shopify activo y **81K seguidores con 777 posts**. Toda cifra de competidor o de Atratus se verifica antes de codear.
2. **Localhost primero, push después**. Alex revisa visualmente en `pnpm dev` antes de cualquier `git push`. NO subir a Vercel sin su OK.
3. **Voz-viva en todos los copy del modal**. Headlines, footers y eyebrows pasan por el modo correspondiente al rol que presenta el bloque.
4. **El patrón CheckoutDemoModal es el estándar**. Botón con ping animado + `<dialog>` nativo + footer dinámico que cambia con la interacción. No inventar componentes nuevos cuando este patrón sirva.

### Estado al cerrar sesión 2026-05-15

- ✅ `CompetidoresModal.tsx` creado y enchufado en `Diagnostico.tsx`
- ✅ Verificado visualmente en `http://localhost:3000/#diagnostico` (3 screenshots tomados con Playwright)
- ✅ Toggle funciona, footer dinámico cambia, Atratus highlighted
- ⏸️ **NO se hizo `git push`** — Alex pidió guardar todo para retomar y revisar después
- ⏸️ Dev server cerrado limpiamente al cerrar sesión

### Cómo retomar este pase

```bash
cd "/Users/alexperezmontoya/Desktop/1. Negocios Electrónicos/13. Trabajo Final Atratus/web"
pnpm dev
# → abrir http://localhost:3000/#diagnostico
# → scroll hasta el final del Diagnóstico, después de la tabla SMART
# → click en "Pop up · La cancha completa"
# → probar toggle Solo marca / Marca + Sistema digital
```

Si Alex aprueba el bloque tal como está, hacer commit con mensaje sugerido:
```
feat(diagnostico): add competitor pop-up modal in §1 block D

- New CompetidoresModal component (CheckoutDemoModal pattern twin)
- Toggle "Solo marca" / "Marca + Sistema digital"
- 4 brands (Cotopaxi, TNF, Rutas Andes, Atratus) × 4 digital system dimensions
- Closes Clase 12 requirement: competitor analysis
- Verified data: Atratus 81K IG, Shopify store, 777 posts
```

Si Alex pide ajustes, anotar y aplicar antes del commit. Próximo bloque del backlog tras este: **calculadora del churn en §1 Bloque A**.

---

## 🧩 Pase de dinámicos interactivos + header nav · 2026-05-15 (sesión 2 · noche)

Sesión de transformar bloques estáticos en dinámicos sin perder requisitos de la clase 12. Commits: `41e3753` (5 dinámicos) + `6c49af4` (header fix).

### 1) Componente reutilizable · `BeforeAfterToggle.tsx`

Switch binario Sin/Con con dos botones pill, transición de opacidad 300ms y grid apilado (dos paneles en el mismo cell). Usado en:

- **§1 Diagnóstico · bloque del 70%**
  - Sin sistema: 70% no vuelve · Freq 1.1× · AOV $200K · LTV $220K (Hoja 02 línea base)
  - Con sistema: 55% / 1.4× / $310K / **$385K** LTV (Metas SMART del Plan estratégico, consistente con §4)
  - Importante: el LTV es $385K (no $434K que es matemáticamente AOV × freq) — cuadra con lo que dice §4 Retención
- **§3 Motor · strip ROAS** (dentro del tab Publicidad)
  - Sin (Pauta artesanal): $6M · ? · ? · 0 pool. **Cero cifras inventadas** — el lado Sin habla del costo de no medir (sin pixel, sin UTM)
  - Con (Motor integrado): $6M · $22.4M · 3.74× · 92K pool (Hojas 05/06/09/10 del Excel)
- **§4 Retención · big number** (bloque C Reactivación)
  - Sin (Lista dormida): $0 · N/A · N/A · LTV $220K (estado actual real)
  - Con (Lista activada): $150M · 6.150% ROI · 250× ROAS · LTV $385K (Hoja 07 del Excel)

### 2) Componente nuevo · `DeseoDelDiaSlider.tsx` — §2 Audiencia

Reemplaza el párrafo estático "Buscan una sola prenda…" por un slider de 4 paradas del día con voz cronista:
- 5:00 AM — Abriga sin peso (niebla densa antes del amanecer) · accent deep-blue
- 11:00 AM — Respira hacia afuera (sol del trópico pegando) · accent beige natural
- 2:00 PM — La lluvia rueda (aguacero corto de los Andes) · accent seagreen
- 6:00 PM — Cierra y abriga (niebla del descenso, viento frío) · accent verde Atratus

Track horizontal con punto activo agrandado + halo. Panel inferior con título display + detalle + cierre fijo del "sin bochorno" en verde Atratus (frase defendida por el usuario).

### 3) Componente nuevo · `MotorTabs.tsx` — §3 Motor

Dos botones grandes lado a lado: **SEO** (Frente 1 · El que trabaja gratis) y **Publicidad** (Frente 2 · El que acelera). Solo se renderiza el panel del activo (transición 300ms). Reduce visualmente §3 a la mitad y respeta el ritmo SCQA — Growth abre la pestaña que está presentando. Default: SEO.

Contenido preservado intacto en los paneles (keyword pilar 4.400, competidores, artículo pilar, 3 clusters satélite, mar abierto en SEO; switch sin/con + 3 campañas BOFU/MOFU/TOFU con sesgos en Publicidad).

### 4) Header de §3 Motor — imagen con texto overlay

La imagen `motor-dos-frentes.png` (bosque amaneciendo + cascada) era un bloque estético sin contenido. Ahora **es el lienzo del concepto**: el texto del SEO va sobre el bosque (esquina inf izq, "SEO orgánico. · 24/7 sin costo por click") y el de la Pauta sobre la cascada (esquina inf der, "Pauta digital. · Google + Meta · 3 campañas"). Gradients `from-monte/85 via-monte/45 to-transparent` en los bordes para legibilidad sin tapar la imagen al centro. Línea divisoria sutil mantenida.

### 5) Componente nuevo · `MaquinariaPreview.tsx` — §4 Bloque B Maquinaria

Reemplaza la card estática del Cuaderno de Campo + 3 `<details>` + bloque de lead scoring (60 puntos · UMBRAL, **eliminado**) por un visor dinámico:
- Panel izquierdo (col-span-5, aspect 3/4): por default muestra el **Cuaderno de Campo**; al clicar un botón cambia al **correo real** con header tipo cliente de email (avatar circular con iniciales + remitente + dirección + hora + asunto destacado) y cuerpo redactado voz Alex.
- Lado derecho (col-span-7): párrafo intro + 3 botones controlados (no details) — toggle on/off al clic.
- Los 3 correos redactados:
  - T+0 Bienvenida (Toña Velásquez · "Aquí está tu Cuaderno de Campo" · con adjunto PDF simulado)
  - T+3 Educación (Mateo Restrepo · "El error que casi nos cuesta una semana en el Cocuy" · con la regla de las tres capas numerada)
  - T+6 Conversión (Toña y Mate · "Las lluvias arrancan en 12 días" · con oferta 15% off + CTA "Ver la chaqueta →")

### 6) `CheckoutDemoModal.tsx` — pasarela real

Modal del Bloque D Escalabilidad refactorizado a look Shopify + Wompi:
- Header tipo navegador: 3 dots macOS + barra URL con candado verde y `atratus.co/checkout`
- Productos con **imágenes reales** 80×80 px:
  - Chaqueta: `chaqueta-espeletia-negro.png`
  - Cuellito: `chaqueta-espeletia-seagreen.png` (placeholder — no hay imagen específica de cuellito en `/web/public/atratus/productos/`. Si Alex la añade ahí como `cuellito-tecnico.png`, cambiar la línea correspondiente)
  - Camibuso: `camibuso-pantera-hombre.png`
- Cada producto con badge circular de cantidad (aparece al agregar) + pill de descuento en color del producto
- Footer pasarela: Subtotal + Envío (Gratis en seagreen) + línea + Total grande + mensaje dinámico "Ticket subió +X%" + **botón `🔒 Pagar $X · Wompi`** full-width + footer "Pago seguro · PSE · Nequi · Daviplata · Tarjeta"

### 7) Header global · nav arreglado

Los anchors estaban rotos (`#problema`, `#oportunidad`, `#pauta`, `#reactivacion` no existen). La nav no movía la pantalla.

Reemplazo: 5 items con `href` al ID real de cada sección + **dot de color del rol** que la presenta:

| Sección | href | Dot · rol |
|---|---|---|
| Diagnóstico | `#diagnostico` | verde Atratus · ROL 01 Estratega |
| Audiencia | `#audiencia` | beige natural · ROL 02 Contenidos |
| Motor | `#adquisicion` | deep blue · ROL 03 Growth |
| Retención | `#retencion` | seagreen · ROL 04 RevOps |
| Pedido | `#pedido` | verde Atratus · ROL 01 Estratega |

`scroll-smooth` añadido al `<html>` en `layout.tsx`. El dot escala 1.5× al hover. `title`/`aria-label` exponen el rol completo (ej: "ROL 03 · Head of Growth").

### Reglas que se reafirmaron en esta sesión

- **Cifras del lado Sin = estado real auditado** (Hoja 02 Línea base actual). Nunca inventar.
- **Cifras del lado Con = metas SMART del Plan estratégico** (no del Excel; el Excel audita cálculos de flujos como ingresos/ROI, no metas individuales como churn 55% o AOV $310K). Etiquetadas como "Meta SMART · Plan Estratégico" en los hints para que el consejo entienda que son objetivos.
- **Cero cifras inventadas en §3 Sin**: cuando no hay dato real (pauta artesanal sin pixel), el lado Sin muestra "?" en lugar de número fabricado.
- **Cierre limpio**: §6 no lleva switch porque el manifiesto pierde fuerza si compite con un toggle.

### Componentes nuevos creados (5)

- `web/src/components/ui/BeforeAfterToggle.tsx`
- `web/src/components/ui/DeseoDelDiaSlider.tsx`
- `web/src/components/ui/MotorTabs.tsx`
- `web/src/components/ui/MaquinariaPreview.tsx`
- `web/src/components/ui/CompetidoresModal.tsx` (era untracked de la sesión 1; entró en este push)

Todos client components con `"use client"`, useState, transiciones 300ms para coherencia.
