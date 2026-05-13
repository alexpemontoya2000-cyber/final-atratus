# Context Engineering — Trabajo Final Atratus

> Documento maestro de contexto. Todo lo que el modelo necesita saber para trabajar este proyecto sin reinventar nada en cada sesión. Cada vez que pidamos algo, primero releemos este archivo, luego ejecutamos. Por secciones — nunca todo a la vez.

---

## 0 · Cómo usar este archivo

Reglas duras, para el modelo y para mí:

1. **Una sección por vez.** No anticiparse. Si el pedido es "haz la sección de objetivos", solo eso.
2. **No inventar datos.** Precios, productos, métricas, copys: si no están en este archivo o en los trabajos previos, se pregunta. Cero alucinación.
3. **Coherencia visual obligatoria.** Cualquier slide/sección/mockup usa la paleta, tipografía y tono definidos abajo. Si rompe el sistema, no se entrega.
4. **Concreto > completo.** Mejor 8 secciones perfectas que 20 con relleno. Si una sección no convence al consejo de Atratus, no va.
5. **Imágenes reales de Atratus.** No stock, no IA generativa para producto. Desde `/imagenes/productos/` descargadas de la CDN oficial.

---

## 1 · Qué es este proyecto

**Entrega final** de la asignatura *Negocios Digitales* — peso 30% — fecha 16/05/2026.
**Docente:** Santiago Herrera.
**Estudiante:** Alex Pérez Montoya (Equipo Atratus).
**Institución:** Esumer.

### Formato: WEB tipo pitch deck (elevator pitch al consejo de Atratus)

No es una presentación de PowerPoint. **Es una página web navegable** que simula una pitch deck — como un mini-sitio donde el consejo de Atratus (Toña, Mate y un eventual inversionista) abre el link, navega por secciones, y al terminar **no tiene de otra que aprobar la propuesta**.

- **Stack confirmado:** Next.js 14 App Router + Tailwind + TypeScript (alineado con Branex global, ver `~/.claude/CLAUDE.md`).
- **Despliegue:** Vercel — **reusando el repo existente** que sirve a `https://atratus.vercel.app/`.
- **Diseño:** Replica el sistema visual de **atratuscolombia.com** — pero elevado a nivel pitch deck enterprise con imágenes reales de los productos.
- **T5 anterior** (artículo SEO + landing) se preserva dentro del mismo sitio en una **pestaña/sección pequeña** desplegable. No es la cara principal.

### Audiencia del pitch: el consejo de Atratus
- **Toña** (cofundadora, ecóloga) — decisora de marca y voz.
- **Mate** (cofundador, biólogo) — decisor de producto y operación.
- Eventual inversionista colombiano de retail / outdoor.

### Objetivo del pitch
Conseguir luz verde y presupuesto para ejecutar el Plan Estratégico Digital 2026–2027 que el equipo construyó a lo largo del semestre. La meta no es "presentar bonito": es que al cerrar la última sección, el consejo diga **"empezamos el lunes"**.

### Equipo presentador — 4 roles tipo Shark Tank
La presentación se sustenta entre 4 personas. Cada una asume un rol y presenta las secciones de su dominio como experto/a en esa área. La web pitch deck refleja esta división — cada sección tiene marcada qué silla habla. Sección 13 abajo detalla cada rol.

### Voz: skill `voz-viva` ACTIVADA para todo copy
Todo guion, copy, frase de impacto, párrafo narrativo y texto de slide se escribe activando la skill **voz-viva** (`~/.claude/commands/`). Define los 6 modos (cronista, manifiesto, pedagógico-analítico, plan operativo, comercial-cierre, institucional formal), bisagras propias y patrones prohibidos. Sin voz-viva la presentación cae en patrones genéricos de IA — y este pitch tiene que sonar humano para que el consejo se conmueva, no que se aburra.

---

## 2 · La marca Atratus (verificado en web oficial)

- **Nombre:** Atratus — Implementos para el Monte
- **Web:** https://www.atratuscolombia.com/ · Catálogo: `/collections/all`
- **Tagline observada en el hero de su web:** **"ROPA PARA LA AVENTURA"** (no "Ropa para el Monte" como yo había asumido — eso es subtítulo/about).
- **Subtítulo del logo:** *"IMPLEMENTOS PARA EL MONTE"*.
- **Otros claims observados:** "Telas 100% Colombianas" · "Inspirados en los Ecosistemas Colombianos" · "Para toda ocasión" (Hombre) · "Comodidad ante todo" (Mujer).
- **Fundadores:** Toña (ecóloga) y Mate (biólogo) — científicos colombianos con trayectoria pública
- **Modelo:** D2C (Direct-to-Consumer) — venta directa sin intermediarios
- **Comunidad:** 78.000 seguidores orgánicos en Instagram
- **Base de clientes:** 5.000 históricos
- **Diferenciador:** Ropa técnica diseñada en Colombia para el monte colombiano. No importada. No adaptada.
- **Envío gratis:** órdenes ≥ $350.000 COP
- **Categorías:** Chaquetas · Pantalones · Camisas · Camibusos · Polares de páramo · Accesorios (cuellitos, bolsos)
- **Ticket actual (corregido):** ~$200.000 COP (rango precios reales $159K–$215K · 1 prenda/carrito) · **Objetivo:** ~$310.000 COP (cascada upsell + cross-sell)
- **Valor por cliente actual:** ~$220.000 COP · **Objetivo:** ~$434.000 COP
- **Frecuencia actual:** 1.1 compras/año · **Objetivo:** 1.25–1.4 x/año
- **Churn:** 70% · **Objetivo:** 55%
- **Margen bruto estimado:** 50–60%

### Audiencia (3 segmentos del plan)
| Segmento | Perfil | Qué busca |
|---|---|---|
| Aviturista | 28–55 años, ciudad (Bogotá/Medellín/Cali/Manizales/Bucaramanga/Pereira), fines de semana en campo, eventualmente hasta 60+ si es veterano | Ropa que no espante las aves, colores neutros, telas silenciosas, bolsillos para libreta |
| Senderista | 28–45 años, salidas regulares al monte, 1–4 años de experiencia | Técnica + comodidad + precio justo + clima tropical húmedo |
| Biólogo / Guía | Profesional de campo, uso diario | Durabilidad + credibilidad de marca + precio sin sobrecosto europeo |

### El "deseo de fondo" común
Ser el **caminante serio que ya no improvisa**. Ya hicieron Chingaza, intentaron Cocuy, vieron mochileros. Saben que su ropa improvisada no aguanta. Pero todavía no saben por dónde empezar a invertir en equipo serio.

---

## 3 · Lo que el equipo ya construyó (T1–T7 + KPIs + Escalabilidad)

Esto es el insumo del pitch. Cada trabajo del semestre alimenta una sección.

### T1 · Diagnóstico digital (Clase 1 → 07/02/2026)
Estado actual de Atratus. Sin sistema de ventas estructurado. Sin CRM. Sin automatización. Comunidad orgánica fuerte, infraestructura digital debilísima.

### T2 · Modelo de negocio digital (Clase 2 → 14/02/2026)
**Modelo:** D2C B2C online. Monetización: venta directa, sin intermediarios. Catálogo $25.000–$215.000 COP. Frecuencia objetivo: 3–5x/año por cliente activo. Mercado: Colombia con potencial LATAM (Ecuador, Perú, Costa Rica).

### T3 · Buyer Persona, ZMOT y Customer Journey (Clase 3 → 21/02/2026)
3 buyer personas (aviturista, senderista, biólogo/guía). ZMOT en Instagram + Google. Customer journey: descubrimiento (Reels) → consideración (blog + IG) → decisión (ficha producto) → compra (Shopify) → experiencia → fidelización (email) → promoción (UGC).

### T4 · Plataforma e infraestructura (Clase 5 → 07/03/2026)
**Plataforma elegida:** Shopify ($29 USD/mes). Justificación: integración nativa con Instagram/Facebook Shopping, checkout optimizado, escalabilidad sin migración, ecosistema 8.000+ apps.
**Pasarela principal:** Wompi (Bancolombia, 2.9% + $900 COP) — respaldo PayU LATAM (3.49%) para expansión regional.
**5 riesgos identificados:** dependencia de Shopify, vulnerabilidades de pago, velocidad en picos virales, falta de backups, abandono móvil 70%.

### T5 · SEO y contenidos (Clase 6 → 14/03/2026)
**Keyword pilar:** "chaqueta impermeable" → 4.400 búsquedas/mes en Colombia · SD 11 (baja) · CPC $849 COP.
**Hallazgo crítico:** el público objetivo NO busca "ropa para senderismo" (16/100 interés). Busca el producto por lo que es: chaqueta impermeable mujer (1.900), hombre (1.600), para lluvia (210), botas de senderismo (720), pantalones de senderismo (260).
**Volumen total:** >12.000 búsquedas mensuales en el cluster.
**Blue Ocean:** "ropa para avistamiento de aves" — sin competencia, Colombia #1 mundial en aves con 1.950 especies.
**Topic Cluster propuesto:** 1) Pilar "chaqueta impermeable", 2) Blog "qué es senderismo", 3) Landing aviturismo, 4) Guía compra chaqueta, 5) Storytelling de los fundadores.
**Despliegue actual:** https://atratus.vercel.app/ (artículo SEO + landing publicados).

### T6 · Pauta y Performance Marketing (Clase 7 → 28/03/2026)
**Presupuesto:** $6.000.000 COP en 2 meses (abril–mayo 2026). **ROAS blended esperado:** 3.65x.
| Campaña | Inversión | Meta ingresos | ROAS |
|---|---|---|---|
| BOFU · Chaqueta · Lluvias (Google Search) | $3.000.000 (50%) | $12.000.000 | 4.0x |
| MOFU · Aviturismo · Global Big Day (Meta Ads) | $1.800.000 (30%) | $5.400.000 | 3.0x |
| TOFU · Storytelling fundadores (Meta Reels) | $1.200.000 (20%) | $4.500.000 | 3.75x |
| **TOTAL** | **$6.000.000** | **$21.900.000** | **3.65x** |

CAC máximo aceptable BOFU: $25.000. CPC referencial: ≤$900.
**Plan Fase 2** (mes 3+): $2.000.000/mes con ROAS esperado 5.5x sobre audiencias custom construidas en Fase 1 (12K visitantes, 80K viewers 75%+, 1.500 leads, 800 carritos abandonados).

### T7 · Estrategia de redes sociales (Clase 8 → 04/04/2026)
**3 pilares:** Educación Outdoor (43%) · Marca + Comunidad (28%) · Producto + Conversión (29%). Balance 60% marca / 40% conversión.
**Parrilla:** 7 publicaciones/semana (Lun–Dom).
**Hashtag:** `#MiMonteAtratus` para UGC. Meta: ≥15 piezas UGC republicables/mes.
**Influencers:** 2 micro-influencers (10K–50K seguidores) al mes · $200K–$800K COP cada uno · presupuesto $1.000.000/mes.
**Metas semestrales:** 78K → 90K seguidores · engagement ≥4.5% · $8M COP/mes en ventas atribuibles · +500 leads/mes.

### T8 · Automatización y CRM — Sistema de Conversión (Clase 9 → 18/04/2026)
**Funnel TOFU/MOFU/BOFU** ejecutado en Mailchimp o Brevo + Shopify + Meta Pixel.
**Lead Magnet:** *Cuaderno de Campo Atratus* — PDF de 18 páginas con regla de tres capas, checklist mochila, calendario de temporadas Colombia 2026, glosario del monte. Lo escriben Toña y Mate.
**Secuencia 3 emails** (T+0, T+3, T+6): Bienvenida → Educación (historia del Cocuy + regla de tres capas) → Conversión (15% off + envío gratis 72h).
**Lead Scoring:** 14 acciones puntuadas. Umbral de venta: 60 pts → pasa a contacto humano por WhatsApp (Toña o Mate).
**Bifurcación post-T+6:** comprador → flujo ascensión · carrito abandonado → email "Te quedó algo en el morral" + 24h · nunca llegó → compás de 3 semanas con contenido nuevo.

### T9 · KPIs y Analítica — Reactivación One-Hit Wonders (Clase 10 → 25/04/2026)
**Diagnóstico:** 70% de los 5.000 clientes nunca volvieron. Compraron una vez, se llevaron su chaqueta, desaparecieron.
**Hipótesis:** si el 15% de la base (750 personas) hace una segunda compra al año vía email, sin invertir en pauta:
- Ingreso adicional anual: **$255.000.000 COP**
- Costo operativo: $2.400.000 COP (12 envíos al año × 5.000 contactos × $40/contacto)
- **Utilidad neta: $252.600.000 COP · ROI: 10.500%**
- LTV pasa de $534.000 → **$1.145.000 COP** (se duplica)
**Segmentación por recencia:** 4 flujos (Post-venta 0–30d · Reactivación 31–180d · Win-back 181–365d · Última carta +365d).
**Dashboard:** Looker Studio + Mailchimp/Brevo + GA4 + Shopify. 3 pestañas: Salud base · Performance email · North Star (clientes que pasaron de 1 a 2+ compras en los últimos 12 meses).

### T10 · Escalabilidad y Optimización (Clase 11 → 02/05/2026)
**3 acciones concretas:**
1. **Cascada de upsell en checkout** — cuellito ($29.900 con dto) + camibuso (-15%) → ticket pasa de $340K a $472K–$505K (+39% a +48%).
2. **Programa de referidos dual** — 10% off para amigo, 15% off para original. CAC referido: $34.000 (comparable a $27.400 de pauta) sin ampliar presupuesto.
3. **Email automático post-compra D14** con cross-sell personalizado (chaqueta → pantalón, etc.). 10% off, 72h. Costo $40/envío.
**Proyección:** $1.870M → $2.500M+ COP anuales con el mismo equipo, mismo catálogo, mismo presupuesto de pauta.

### T11 · Plan Estratégico Digital — Clase 12 (insumo final)
DOFA+CAME consolidado. Objetivos SMART. Cronograma 12 meses. Roles del equipo (Estratega Digital/CMO · Director Contenidos · Head of Growth · Director RevOps).

---

## 4 · Marco teórico aplicable (de las 11 clases)

Conceptos que el modelo puede invocar libremente porque ya están en el background académico:

- **Clase 1:** Negocio digital vs tradicional · errores comunes (digitalización ≠ estrategia · marketing digital ≠ redes) · tendencias (IA, cloud, IoT 5G, plataformas, freemium).
- **Clase 2:** Modelos B2B/B2C/C2C/D2C/B2G · monetización (Enterprise, Suscripción, SaaS, Transaccional, Marketplace, Ecommerce, Datos, Hardware, Freemium, DaaS, IA-as-a-Service) · Modelo Canvas · modelo ≠ canal.
- **Clase 3:** Buyer persona (decisor, prescriptor, influenciador) · Mapa de empatía · ZMOT · Customer Journey 7 etapas · Omnicanalidad.
- **Clase 4 (UX/UI):** UX impacta conversión/bounce/LTV · CTAs, jerarquía visual, responsive · checkout simplificado · herramientas (Hotjar, Figma, GA4, Maze).
- **Clase 5:** Shopify vs Woo vs Tiendanube vs Magento vs Wix · dominio + hosting + SSL + pasarelas + logística + seguridad y backups.
- **Clase 6 (SEO):** Crawl/Index/Serve · SEO on-page + off-page · auditoría · Topic Clusters · Head/Middle/Long tail · contenido por embudo (TOFU/MOFU/BOFU).
- **Clase 7 (Pauta):** Google Ads vs Meta Ads · ciclo PECA (Presentación-Evaluación-Conversión-Ascensión) · 7 maletas · sesgos psicológicos (autoridad, escasez real, prueba social, micro-compromiso, reciprocidad, empatía) · "Ads son acelerador, no salvavidas".
- **Clase 8:** Pilares de contenido (Valor/Autoridad/Conexión/Conversión) · Influencer marketing (Nano/Micro/Macro/Mega) · UGC (4x más clics que tradicional) · community management.
- **Clase 9:** Marketing automation · Lead nurturing · CRM (HubSpot, Mailchimp, Brevo, ActiveCampaign) · email marketing 6 tipos · métricas (apertura >15%, CTR >2%) · lead scoring.
- **Clase 10:** **Modelo DIKW** (Dato → Información → Conocimiento → Sabiduría) · métricas tácticas vs de negocio · dashboards · 6 KPIs (CAC, CPA, CTR, LTV, ROI, ROAS).
- **Clase 11:** Escalar ≠ vender más · sistema de crecimiento · cuellos de botella · CAC < LTV obligatorio · CRO · más ticket promedio · más recompra · "Escalar sin datos es apostar".
- **Clase 12:** DOFA + CAME · estructura de un Plan Estratégico Digital.

---

## 5 · Sistema de diseño Atratus (resumen ejecutivo)

> **Biblia visual completa:** `design_reference.md` (misma carpeta). Construida a partir de 6 capturas reales de la home compartidas por Alex. Aquí solo va el resumen — al codear o diseñar, abrir `design_reference.md`.

### 5.1 Paleta confirmada (observada de pantalla)
| Rol | HEX | Uso |
|---|---|---|
| Hueso (fondo principal) | `~#EFEBE3 / #F2EFE9` | Toda la web — **no es blanco puro** |
| Negro Monte | `#0E0E0E` | Logo, tipografía, títulos |
| Blanco puro | `#FFFFFF` | Solo cards de producto |
| Verde Atratus oscuro | `~#1F3D2E` | Acento marca, CTAs primarios, badge Estratega |
| Deep Blue | `~#1B2A41` | Polar de Páramo, badge Head of Growth |
| Seagreen | `~#5C8A7B` | Variantes verdes, badge RevOps |
| Rojo Atratus | `~#A6362B` | Espeletia roja, urgencia / KPIs hero |
| Beige natural | `~#C8B294` | Neutro cálido secundario |

### 5.2 Tipografía
- **Display:** sans-serif **black/extra-bold**, mayúsculas, tracking ajustado (estilo *Archivo Black* / *Inter Black*). Ej: `ROPA PARA LA AVENTURA`.
- **Headings:** sans-serif **bold** sentence case. Ej: `Los favoritos`.
- **Body:** sans-serif **regular** (estilo *Inter Regular*).
- **Stamps:** mayúsculas pequeñas, tracking amplio. Ej: `IMPLEMENTOS PARA EL MONTE`, `NUEVO PRODUCTO`.

### 5.3 Reglas duras anti-genérico
- **Fondo principal SIEMPRE hueso, nunca blanco puro.** Blanco solo en product cards.
- **Texto alineado a la izquierda.** Atratus no centra párrafos largos.
- **Botones pill** (border-radius alto). 4 variantes (ver `design_reference.md` §4.2).
- **Sin shadows, sin gradientes pastel, sin íconos genéricos** (Lucide/Heroicons solo si imitan los que Atratus usa: cart, account, WhatsApp flotante).
- **Cards de actividad** redondeadas 24px con foto cover · **cards de producto** rectangulares duras, fondo blanco sobre hueso.
- **Fotografía lifestyle real colombiana** — no stock, no IA generativa para producto.

### 5.4 Tono de voz
- Directo, técnico, orgulloso del origen.
- Hablar **como Toña y Mate hablarían** — credibilidad científica, sin marketing inflado.
- Nunca usar adjetivos vacíos ("increíble", "único", "mejor").
- Cuando se cite una métrica, decir el cálculo en la misma frase (ej: "ROI 10.500% — cada peso vuelve 105").
- **Skill `voz-viva` activada** para todo copy/guion (ver §13).

---

## 6 · Estructura de la web pitch deck (con time budget)

12 secciones navegables, una por scroll/anchor. Layout vertical estilo Atratus. La columna "Presenta" indica el rol del equipo (ver §13) que habla en esa sección — la web visualiza el nombre del presentador en el header de cada bloque.

**Budget total: 10–12 min hablados + transiciones.** La columna `min` es el tiempo de habla aproximado por sección. Sumas: 11:00 min sin transiciones, 12:00 min con 1 min de transiciones/silencios. Si alguna sección se va de tiempo, se acorta el copy — no se sacrifica otra sección.

| # | Sección | min | Contenido | Presenta | Función pitch |
|---|---|---|---|---|---|
| 0 | Hero | 0:20 | "Atratus 2026 — Del Monte a la Costumbre" + foto fundadores + CTA "Ver la propuesta" | Estratega (CMO) | Romper el hielo. |
| 1 | El Problema | 0:50 | 70% churn · 1.1 compras/año · sin sistema · ticket bajo | Estratega (CMO) | Que el consejo asienta sin discusión. |
| 2 | La Oportunidad | 0:50 | 12K búsquedas/mes · Global Big Day · 78K orgánicos · margen 50–60% | Estratega (CMO) | Mostrar el océano azul. |
| 3 | Quiénes son sus clientes | 0:50 | 3 segmentos + propuesta de valor + por qué los 78K existen | Director de Contenidos | Mostrar que entendemos a la comunidad. |
| 4 | El Sistema Propuesto | 0:40 | Stack Shopify + Wompi + Mailchimp/Brevo + Meta Pixel + GA4 + Looker | Director de RevOps | Que vean que la infraestructura ya está pensada. |
| 5 | SEO — Topic Cluster | 0:50 | Pilar "chaqueta impermeable" 4.400/mes + Blue Ocean aviturismo · link al live atratus.vercel.app | Head of Growth | Demostrar el activo orgánico que reduce CAC. |
| 6 | Pauta — 3 campañas | 1:30 | BOFU lluvias + MOFU Big Day + TOFU storytelling = ROAS 3.65x · $6M COP | Head of Growth | Plan táctico con números. |
| 7 | Redes — Sistema de contenido | 0:50 | 3 pilares + 7 posts/semana + UGC #MiMonteAtratus + 2 micro-influencers/mes | Director de Contenidos | Que vean que el feed deja de improvisar. |
| 8 | Automatización — Lead Magnet + 3 emails + Lead Scoring | 1:00 | Cuaderno de Campo · T+0/T+3/T+6 · 60 pts → WhatsApp | Director de RevOps | La maquinaria que corre sola. |
| 9 | Reactivación Email — el 70% que no vuelve | 1:00 | $255M COP/año adicionales · CAC $0 · LTV se duplica · ROI 10.500% | Director de RevOps | El momento "no pueden decir que no". |
| 10 | Escalabilidad — 3 acciones | 1:00 | Upsell checkout · Referidos · Email D14 → $1.870M → $2.500M+ | RevOps + Growth | Visión 12 meses. |
| 11 | El Pedido | 0:50 | $6M COP pauta + $2.4M COP email + 4 roles + cronograma | Estratega (CMO) | El "sí" concreto. Qué firmamos hoy. |
| 12 | Cierre | 0:30 | "Atratus deja de ser marca que vende ropa y pasa a ser marca que tiene clientes" | Estratega (CMO) | Frase final + foto Toña y Mate. |
| | **TOTAL** | **11:00** | | | |

### Tiempo por presentador (Shark Tank)
- **Estratega (CMO):** 0:20 + 0:50 + 0:50 + 0:50 + 0:30 = **~3:20 min** (apertura y cierre)
- **Director de Contenidos:** 0:50 + 0:50 = **~1:40 min**
- **Head of Growth:** 0:50 + 1:30 = **~2:20 min**
- **Director de RevOps:** 0:40 + 1:00 + 1:00 + 1:00 = **~3:40 min** (sección §10 compartida con Growth)

Distribución equilibrada para Shark Tank: Estratega abre/cierra · RevOps lleva la carga de números · Growth presenta el motor · Contenidos da el alma.

### Flujo narrativo Shark Tank (orden de presentación)
1. **Estratega abre** (Hero · Problema · Oportunidad) — "esto es lo que está en juego".
2. **Contenidos toma la palabra** (Audiencia) — "esto es a quién le hablamos y por qué la comunidad ya existe".
3. **RevOps interviene** (Sistema) — "esta es la arquitectura técnica que sostiene todo".
4. **Growth presenta** (SEO + Pauta) — "este es el motor de adquisición".
5. **Contenidos vuelve** (Redes) — "este es el sistema que alimenta al motor".
6. **RevOps cierra el ciclo operativo** (Automatización · Reactivación · Escalabilidad) — "esto es cómo se monetiza sin gastar más".
7. **Estratega cierra** (El Pedido · Cierre) — "esto es lo que pedimos. ¿Empezamos el lunes?"

---

## 7 · Catálogo de productos — CURADO para el pitch

Los 16 productos del catálogo se filtraron por coherencia narrativa. **Solo los 11 que aparecen en alguna sección del pitch están descargados** en `/imagenes/productos/`. Los demás se omiten — no aportan al pitch y agregan ruido visual.

### Productos en el pitch (descargados ✅)

| Producto | Archivo | Precio | Aparece en |
|---|---|---|---|
| Chaqueta Espeletia · Negro Unisex ⭐ | `chaqueta-espeletia-negro.png` | $210.000 | §5 SEO · §6 BOFU · §8 Email 3 |
| Chaqueta Espeletia · Seagreen | `chaqueta-espeletia-seagreen.png` | $210.000 | §5 · §6 BOFU |
| Chaqueta Espeletia · Rojo | `chaqueta-espeletia-rojo.jpg` | $210.000 | §5 · §6 BOFU |
| Pantalón Rupornis Hombre | `pantalon-rupornis-hombre.png` | $210.000 | §3 Senderista · §10 Cross-sell |
| Pantalón Rupornis Mujer | `pantalon-rupornis-mujer.png` | $210.000 | §3 Senderista · §10 Cross-sell |
| Camisa Athene Verde Militar | `camisa-athene-verde-militar.png` | $215.000 | §3 Aviturista · §6 MOFU Big Day |
| Polar de Páramo Deep Blue | `polar-paramo-deepblue.jpg` | $199.900 | §3 Biólogo · §10 Variantes |
| Polar de Páramo All Black | `polar-paramo-allblack.jpg` | $199.900 | §10 Variantes |
| Camibuso Víbora verde Hombre | `camibuso-vibora-verde-hombre.png` | $159.000 | §10 Cascada upsell |
| Camibuso Víbora verde Mujer | `camibuso-vibora-verde-mujer.png` | $159.000 | §10 Cascada upsell |
| Camibuso Pantera Hombre | `camibuso-pantera-hombre.png` | $159.000 | §10 Variante upsell |

⭐ = producto estrella del pitch (Chaqueta Espeletia Negro — aparece en 3 secciones).

### Productos descartados (no aparecen)

| Producto | Razón de descarte |
|---|---|
| Camibuso Víbora café · H/M | Redundante con verde · no aporta a la narrativa |
| Camibuso Víbora amarilla · H/M | Idem · variantes que diluyen el foco |
| Camibuso Pantera · Mujer | Con la versión Hombre basta para el upsell |

### Hero / lifestyle / activity images (descargadas en `/imagenes/marca/`)
- **Heroes (desktop+mobile):** `hero-aventura-*` (Hero §0/§3) · `hero-rupornis-*` (§4 Sistema) · `hero-polar-paramo-*` (§11 El Pedido) · `hero-conservacion-*` (§12 Cierre — condor + páramo)
- **Actividades (Tier 2):** `actividad-climas-frios.png` · `actividad-senderismo.jpg` · `actividad-turismo-naturaleza.jpg` · `actividad-avistamiento-aves.jpg` · `actividad-climas-calidos.jpg` → para §2 Oportunidad y §6 Pauta como cards
- **Logo:** `logo-atratus.png`

---

## 7.5 · Fuentes verificadas (anti-data-falsa)

Cada cifra del pitch debe poder defenderse. Esta es la trazabilidad:

| Cifra del pitch | Fuente | Notas |
|---|---|---|
| Precios de productos Atratus | **Verificados en vivo** en `atratuscolombia.com/collections/all` el 2026-05-13. Confirmados: Polar $199.900 · Pantalón Rupornis $210.000 · Chaqueta Espeletia $210.000 · Camibuso $159.000 · Camisa Athene $215.000 | Verdaderos. Atratus tiene 98 productos en total, usamos 11 en el pitch. |
| 78.000 seguidores Instagram | Atratus oficial — `@atratuscolombia` | Verificable en vivo. |
| Churn 70% / 1.1 compras/año / Ticket $340K / LTV $534K | **Caso de estudio académico (Clase 10 — Negocios Digitales, Esumer)**. Cifras dadas por el docente como base para el ejercicio. **NO** son auditoría oficial de Atratus. | Coherentes con benchmark del sector (ver siguiente). |
| Benchmark sector outdoor: 78.8% churn anual | **Bluecore Customer Growth Benchmarks Report 2024** — Sporting Goods & Outdoor: 21.2% repeat customer rate. Estudio sobre 100+ retailers. | Fuente citable al consejo. El 70% asumido para Atratus es CONSERVADOR vs el 78.8% del sector. |
| Repeat customer apparel 20.2% | **Bluecore 2024** | Refuerza el dato Atratus. |
| Active buyers gastan 69.2% más que new buyers | **Bluecore 2024** | Justifica la tesis "The Money's in the List". |
| 4.400 búsquedas/mes "chaqueta impermeable" Colombia · SD 11 | **Ubersuggest + Google Trends Colombia** (Trabajo SEO T5) | Documentado en Clase 6. |
| Colombia #1 mundial en aves con 1.950+ especies | **Cornell Lab of Ornithology** — eBird Global Big Day | Verificable. Atratus puede citarlo. |
| $6M COP presupuesto 2 meses · ROAS 3.65x blended | **Plan estratégico del equipo Atratus** (Clase 7) — escenario proyectado | Es escenario, no historial. Nombrarlo así. |
| ROI email 10.500% en reactivación | **Cálculo del equipo Atratus** (Clase 10) — escenario proyectado con CAC $0 vía base existente | Es escenario, no historial. |

### Regla de honestidad
- Cifras del caso académico → presentables al consejo como "estimación base del trabajo de campo del semestre".
- Cifras del sector (Bluecore, Shopify) → citables con fuente.
- Proyecciones del plan → presentarlas SIEMPRE como "proyectado" o "escenario", nunca como histórico verificado.
- Si el consejo pide auditoría de los datos Atratus específicos (churn real, LTV real), el equipo debe responder: "estos números son nuestra mejor estimación a partir del trabajo del semestre — para validar al peso necesitamos una hora con tu CRM".

---

## 8 · Números clave — AUDITADOS para coherencia con precios reales

> **Nota crítica:** los docs del semestre (Clases 10–11) usaban AOV $340K y LTV $534K, pero esas cifras son matemáticamente inconsistentes con los precios reales del catálogo ($159K–$215K por prenda) y con "una unidad por carrito". Las cifras de abajo son las **versiones corregidas y honestas** que se usan en el pitch.

| Métrica | Valor actual (corregido) | Proyectado | Cómo se calcula |
|---|---|---|---|
| Base de clientes | 5.000 | Mantener · activar churn | Estimación caso académico |
| Frecuencia compra | 1.1 x/año | 1.25–1.4 x/año | Caso académico |
| Churn rate | 70% | 55% | Validado vs Bluecore 78.8% sector outdoor |
| **AOV / ticket promedio** | **~$200.000 COP** | $310.000 COP | Precios reales: $159K–$215K · 1 prenda por carrito |
| **Valor por cliente (LTV simple)** | **~$220.000 COP** | $434.000 COP | AOV × Freq — lo que Atratus le saca en su ciclo de vida con la marca |
| CAC pauta | $27.400 COP | $27.400 COP (estable) | Cifras académicas, conservadoras |
| CPA email | — | $798 COP | Proyección plan |
| CTR email objetivo | — | 3.5%–4% | Benchmark Mailchimp/Brevo |
| ROI email | — | ~6.000%–10.000% | Recalcular en §9 con AOV $200K |
| ROAS win-back | — | 200x–426x | Recalcular en §9 con AOV $200K |
| ROAS pauta blended (2 meses) | — | 3.65x | Plan T7 — proyectado |
| Presupuesto pauta 2 meses | — | $6.000.000 COP | Plan T7 |
| Leads TOFU 2 meses | — | 1.500 | Plan T7 |
| Ingresos anuales (escenario) | ~$1.100M COP | ~$1.800M+ COP | 5.000 clientes × valor × frecuencia, recalculado |

> **Cifras antiguas (NO usar en el pitch):** AOV $340K · LTV $534K · ROI 10.500% · LTV proyectado $1.145K · Ingresos $1.870M → $2.500M+. Estas estaban infladas por la fórmula del docente. Las nuevas son consistentes con los precios reales y se pueden defender ante el consejo.

### Por qué LTV ≠ AOV / churn (en este caso)
La fórmula tradicional `LTV = AOV × Freq / Churn` asume que los clientes que NO se van siguen comprando perpetuamente con la misma frecuencia. Cuando el churn es 70% anual y la frecuencia es 1.1 (casi compra única), el cliente promedio compra ~1.1 veces y desaparece. Su valor real es:

```
LTV simplificado = AOV × Freq = $200K × 1.1 = ~$220K
```

Esto es lo honesto. La fórmula con división por churn da $534K, pero asume comportamiento de SaaS (suscripciones recurrentes), no ropa outdoor.

---

## 9 · Estructura de carpetas del proyecto

```
13. Trabajo Final Atratus/
├── context_engineering.md         ← este archivo
├── imagenes/
│   ├── productos/                 ← desde CDN Shopify Atratus
│   └── marca/                     ← logo, fotos de Toña y Mate, hero
├── web/                           ← se crea al empezar (Next.js o HTML estático)
│   ├── app/ o public/
│   ├── components/
│   └── styles/
└── assets/                        ← iconos, mockups, recursos auxiliares
```

---

## 10 · Flujo de trabajo por bloques

Cada sesión sigue este ciclo:

1. **Releer** este archivo (la sección relevante).
2. **Definir** qué sección/bloque se ataca (de la tabla §6).
3. **Producir** solo ese bloque, respetando paleta + tipografía + tono.
4. **Validar** contra: ¿está en los trabajos previos? ¿usa datos reales? ¿se ve como Atratus? ¿el consejo de Atratus lo aprobaría?
5. Si algo no cuadra, **preguntar** antes de inventar.

### Qué NO hacer
- Generar secciones de relleno para llegar a 20.
- Cambiar números del plan sin avisar.
- Usar imágenes de stock o IA para productos.
- Meter íconos genéricos tipo Flaticon.
- Escribir copys largos. 1–2 líneas por bloque visual.
- Reabrir debates ya cerrados en los trabajos previos (la plataforma es Shopify, la pasarela es Wompi, la keyword pilar es "chaqueta impermeable" — son hechos).

---

## 11 · Decisiones tomadas (locked)

- [x] **Stack:** **Next.js 14 App Router + Tailwind + TypeScript** — alineado con stack base Branex (ver `~/.claude/CLAUDE.md`). Deploy en **Vercel**.
- [x] **Repo:** **Reusar el repositorio existente** que sirve a `https://atratus.vercel.app/`. No se crea uno nuevo.
- [x] **Cómo conviven los entregables:**
  - **Pitch deck = la home y experiencia principal**. Construido desde cero, diseño nivel mundial, imágenes reales de productos.
  - **T5 (artículo SEO + landing previa)** se preserva pero pasa a una **pestaña/sección pequeña** dentro del nuevo sitio — un "tab chiquito" que se despliega al click. No estorba la narrativa del pitch.
- [x] **Diseño:** Replicar la estructura visual de **atratuscolombia.com** — paleta, tipografía, layout por secciones, fotografía lifestyle. **Antes de codear**, revisar las **imágenes de referencia que Alex va a compartir** de la web actual de Atratus para estructurar la pitch deck con su mismo lenguaje visual.
- [ ] **Paleta HEX exacta:** pendiente confirmar — los HEX propuestos en §5.1 son derivados de nombres de producto. Alex puede aprobarlos o pedir extracción del CSS real con Playwright.

## 11.b · Pendiente del usuario antes de codear

- ⏳ **Imágenes de referencia de la web de Atratus** — Alex va a compartir capturas de la web actual para definir bloque por bloque la estructura del pitch deck. Hasta no tenerlas, no se empieza a codear.

## 11.c · Cómo se apalanca el repo existente

Al revisar el repo (paso pendiente cuando Alex lo conecte localmente o nos dé acceso al git remote):
1. Mantener la ruta del artículo SEO y la landing T5 — solo moverla a `/seo-pillar` o similar, accesible desde un tab pequeño en el footer/menú.
2. La home pasa a ser el pitch deck nuevo.
3. Reutilizar componentes ya creados si caben en el sistema de diseño nuevo. Si no caben, se descartan sin culpa.
4. Mantener configuración de deploy en Vercel intacta.

---

## 13 · Los 4 Roles del Equipo Presentador

La presentación se sustenta entre 4 personas. Cada una asume un rol y se planta como experta de su área. La web reflejará el rol del presentador en cada bloque (badge en el header de cada sección). En el Shark Tank, el Estratega abre y cierra; los otros 3 atacan su dominio con precisión quirúrgica.

### ROL 01 — Estratega Digital (CMO · Chief Marketing Officer)
**Color de identidad en la web:** Verde Militar `#3A4A2B` (Seagreen como acento).

**El pitch interno:** ve el tablero completo. Decide qué canales se priorizan, cómo se distribuye el presupuesto y hacia dónde apunta el barco cada trimestre. Es la voz que abre y cierra en el Shark Tank.

**Qué es suyo:**
- Objetivos SMART y OKRs del plan.
- Distribución de presupuesto entre campañas ($6M COP entre BOFU/MOFU/TOFU).
- Análisis DOFA + CAME completo.
- Estrategia de canales y cronograma 12 meses.

**Secciones que presenta:** 0 Hero · 1 El Problema · 2 La Oportunidad · 11 El Pedido · 12 Cierre.

**La pregunta que responde sin dudar:** *"¿Cuál es el norte de Atratus en los próximos 12 meses?"*

---

### ROL 02 — Director de Contenidos (Community & Brand Storyteller)
**Color de identidad en la web:** Hueso `#F2EFE9` con acento Negro Monte (tono editorial / cuaderno de campo).

**El pitch interno:** convierte la estrategia en cosas que la gente quiere ver. Da alma a los números. Es quien explica por qué esos 78.000 seguidores existen y por qué no se pueden comprar con pauta.

**Qué es suyo:**
- Reels de Toña y Mate · storytelling TOFU.
- Newsletter "El Diario del Monte".
- Secuencia de 3 emails + copy de campañas.
- Comunidad Instagram + segmentación de audiencia (3 buyer personas).

**Secciones que presenta:** 3 Quiénes son sus clientes · 7 Redes — Sistema de contenido.

**La pregunta que responde:** *"¿Por qué esta marca tiene 78K seguidores reales?"* — este cuenta la historia.

---

### ROL 03 — Head of Growth (Performance & Paid Media)
**Color de identidad en la web:** Deep Blue `#1B2A41` (acento gráfico / dashboards).

**El pitch interno:** el que le habla al dinero. Maneja las tres campañas de pauta, mide el ROAS en tiempo real y decide cuándo escalar o pausar. Cuando preguntan por el retorno, este responde con un número.

**Qué es suyo:**
- Campaña BOFU — Google Search · Lluvias ($3M COP, ROAS 4.0x).
- Campaña MOFU — Meta · Global Big Day ($1.8M COP, ROAS 3.0x).
- Campaña TOFU — Reels · Storytelling ($1.2M COP, ROAS 3.75x).
- ROAS, CAC, CPC · optimización y A/B tests.
- Topic Cluster SEO (pilar "chaqueta impermeable" 4.400 búsquedas/mes).

**Secciones que presenta:** 5 SEO Topic Cluster · 6 Pauta 3 campañas · (asiste en 10 Escalabilidad).

**La pregunta que responde de memoria:** *"¿Qué retorno dio cada peso de pauta este mes?"*

---

### ROL 04 — Director de Revenue Ops (RevOps · CRM & Automatización)
**Color de identidad en la web:** Seagreen `#5C8A7B` con acento Verde Militar (sistema, ingeniería).

**El pitch interno:** construye las máquinas que generan plata mientras el equipo duerme. Es el dueño del CRM, los flujos automáticos y los dashboards. Convierte las proyecciones en algo creíble para la junta.

**Qué es suyo:**
- Cascada upsell en checkout de Shopify (ticket $340K → $472K–$505K).
- Flujos de email · lead scoring 60 pts → contacto humano por WhatsApp.
- Programa de referidos + CRM segmentado por recencia (4 flujos).
- Dashboard Looker Studio · KPIs del negocio (LTV, CAC, ROI, North Star).
- Reactivación email del 70% que no vuelve → $255M COP/año adicionales.

**Secciones que presenta:** 4 El Sistema Propuesto · 8 Automatización · 9 Reactivación Email · 10 Escalabilidad.

**La pregunta que responde con sistema exacto:** *"¿Cómo entra esa plata sin más pauta?"*

---

### Cómo se traduce esto a la web
- Cada sección lleva un **header con el badge del rol** (color de identidad + nombre + título corto).
- Las **citas en cursiva** del recuadro de cada rol pueden aparecer como pull-quotes al inicio o cierre de su bloque.
- El **footer del sitio** lleva una tarjeta colectiva con los 4 roles + foto de cada miembro del equipo (Alex y compañeros).
- Cuando se escriban guiones de presentación oral, **se hablará desde la primera persona del rol** ("Como Head of Growth, lo primero que hice…").

### Cómo se invoca voz-viva en cada rol
La skill `voz-viva` define 6 modos de voz. Mapeo sugerido por rol (a validar al escribir):
| Rol | Modo dominante | Modo de soporte |
|---|---|---|
| Estratega (CMO) | Manifiesto · Comercial-cierre | Plan operativo |
| Director de Contenidos | Cronista | Pedagógico-analítico |
| Head of Growth | Plan operativo · Pedagógico-analítico | Comercial-cierre |
| Director de RevOps | Plan operativo | Institucional formal |

Al escribir cualquier copy/guion, **primero se invoca la skill voz-viva** y se le declara: rol + modo dominante + sección.

---

## 12 · Historial de cambios

| Fecha | Cambio | Quien |
|---|---|---|
| 2026-05-13 | Archivo creado. Contexto base + plan Clase 12 + catálogo + sistema de diseño propuesto. | Alex + Claude |
| 2026-05-13 | Revisión completa de las 11 clases anteriores. Consolidación de T1–T11 con métricas reales. Cambio de formato (de PPT a web pitch deck). Estructura de 12 secciones definida. Detectado repo previo en atratus.vercel.app. | Alex + Claude |
| 2026-05-13 | Decisiones locked: stack Next.js + Tailwind, reuso del repo Vercel existente, T5 viejo va a un tab pequeño, pitch deck es la home principal construida desde cero. Pendiente: imágenes de referencia de la web Atratus que Alex va a compartir antes de codear. | Alex + Claude |
| 2026-05-13 | Añadidos los 4 roles del equipo presentador (Estratega · Contenidos · Growth · RevOps) con asignación de secciones, color de identidad, citas de pitch y mapeo de modo voz-viva. | Alex + Claude |
| 2026-05-13 | Creado `design_reference.md` tras revisar 6 capturas reales de la home de Atratus. Paleta confirmada de pantalla, tipografía black/bold/regular, componentes UI, patrones de foto, mapeo pitch ↔ Atratus por sección, inventario de imágenes Tier 1/2/3. Tagline real corregida: "ROPA PARA LA AVENTURA". | Alex + Claude |
| 2026-05-13 | Catálogo curado a 11 productos (descartados 5 sin valor narrativo). Descargadas 11 imágenes de producto + 14 lifestyle/hero/activity assets desde CDN Shopify Atratus. Total 25 imágenes nombradas correctamente en `/imagenes/`. Time budget de 11:00 min hablados (+1 min transiciones) distribuido entre los 4 roles. | Alex + Claude |
| 2026-05-13 | Scaffold web pitch deck en `/web/` con Next.js 16 + Tailwind 4 + TS + pnpm. Design tokens en `globals.css` (paleta confirmada de pantalla, fonts Archivo Black + Plus Jakarta Sans + JetBrains Mono). Componentes base: PillButton (4 variantes), RoleBadge, Header sticky. **Sección §0 Hero completa** funcionando en `localhost:3000` con 0 errores: foto lifestyle (mujer con polar en niebla), headline display "DEL MONTE A LA COSTUMBRE", role badge animado, 2 CTAs pill, 4 stamps de credibilidad, animaciones staggered. Sesión pausada para retomar §1 El Problema. Ver `SESSION_STATE.md` para handoff. | Alex + Claude |
| 2026-05-13 | **§1 El Problema completa.** Construido `StatCard` reutilizable + sección `Problema.tsx` con typography-led approach (sin foto, la ausencia subraya el mensaje). Big number `70%` con `%` en rojo Atratus, relato lateral con voz de Alex, 4 StatCards (Churn/Frecuencia/Ticket/LTV con deltas), manifesto-quote final "Atratus tiene producto. Tiene comunidad. Lo que no tiene es sistema." Mobile y desktop ambos perfectos, 0 errores 0 warnings. | Alex + Claude |
| 2026-05-13 | **4 imágenes hiperrealistas generadas con IA** (prompts dados a Alex, generadas vía Flux/Midjourney): `hero-fundadores.png` (Toña y Mate en cloud forest dorado, 21:9), `paramo-cordillera.png` (Andes panorámica 21:9), `cliente-se-aleja.png` (caminante en niebla 4:5), `gallito-de-roca.png` (Rupicola peruvianus 4:3). Reemplazado el Hero §0 para usar `hero-fundadores.png` — salto cualitativo enorme: la foto comunica "dos científicos colombianos hicieron esto" sin decir una palabra. | Alex + Claude |
