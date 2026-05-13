# Design Reference — Atratus Visual System

> Sistema visual observado directamente de `atratuscolombia.com` (6 capturas oficiales compartidas por Alex el 2026-05-13). Esto es la **biblia visual** del pitch deck. Cuando duda, se vuelve aquí.

---

## 1 · Identidad de marca observada

### Logo lockup
- **Wordmark:** `ATRATUS` — sans-serif **display extra bold**, letras anchas, tracking ajustado, color negro puro `#0E0E0E`.
- **Subtítulo bajo el wordmark:** `IMPLEMENTOS PARA EL MONTE` — sans-serif regular, mayúsculas pequeñas, tracking amplio, mismo negro, ~25% del tamaño del wordmark.
- Lockup centrado en el header, sobre fondo hueso.

### Tagline observada en el hero (no en el About)
- `ROPA PARA LA AVENTURA` — **NO** "Ropa para el Monte" como yo había asumido. Corregir.
- Otras secciones usan claims cortos: "Para toda ocasión" (Hombre), "Comodidad ante todo" (Mujer), "Tu capa térmica clave para enfrentar el frío de la montaña" (Polar).

### Microcopy de CTAs (todos observados)
- `VER LOS PRODUCTOS` (mayúsculas, hero principal)
- `Descúbrelo aquí` (sentence case, secundario)
- `COMPRAR` (mayúsculas, en cards de actividades)
- `Ver más` (sentence case, gender splits)
- Badge: `NUEVO PRODUCTO` (mayúsculas pequeñas, en pill con outline blanco)

---

## 2 · Paleta de colores confirmada (de pantalla)

| Rol | Nombre Atratus | HEX confirmado de las capturas | Uso real visto |
|---|---|---|---|
| Fondo principal | Hueso | ~`#EFEBE3` / `#F2EFE9` | Background de toda la web (no es blanco puro) |
| Texto principal | Negro Monte | `#0E0E0E` | Wordmark, títulos, cuerpo |
| Producto / cards | Blanco puro | `#FFFFFF` | Studio shots, fondo de cards de producto |
| Verde Atratus oscuro | (chaqueta verde) | ~`#1F3D2E` | Chaqueta Espeletia verde militar, sesgo de marca |
| Azul Deep Blue | (chaqueta polar) | ~`#1B2A41` | Polar de Páramo Deep Blue |
| Verde Seagreen | (chaqueta seagreen) | ~`#5C8A7B` | Variantes Seagreen |
| Rojo Atratus | (chaqueta roja) | ~`#A6362B` | Turismo de Naturaleza, Espeletia roja |
| Beige natural | (camisa beige) | ~`#C8B294` | Camisa hombre, neutro cálido |
| Verde militar pantalón | | ~`#4A4D2E` | Pantalón verde Rupornis |
| WhatsApp green | (botón flotante) | `#25D366` (WhatsApp oficial) | Botón flotante esquina inferior derecha |

> **Decisión:** la paleta del pitch deck usará Hueso como bg primario, Negro Monte para tipografía, y los tonos de prenda como acentos contextuales (sin abusar). El Verde Atratus oscuro es el acento más "marca" — para CTAs primarios y badges de rol del Estratega.

---

## 3 · Tipografía observada

- **Display / Títulos hero:** sans-serif **extra bold, casi black weight**, muy ancha, tracking ajustado, mayúsculas. Ejemplo: `ROPA PARA LA AVENTURA`, `POLAR DE PÁRAMO`, `HOMBRE`, `MUJER`. Estilo cercano a *Archivo Black* / *Inter Black* / *Space Grotesk Bold*. Letras con personalidad — no es Helvetica.
- **Sub-display / Section headers:** sans-serif **bold**, mayúscula+minúscula, ejemplo: `Actividades outdoor`, `Los favoritos`. Más cercano a *Inter Bold* / *Manrope Bold*.
- **Cuerpo:** sans-serif **regular**, ejemplo: "Tu capa térmica clave para enfrentar el frío de la montaña." Cuerpo cómodo, line-height generoso.
- **Card titles:** sans-serif **bold pequeño** (~14–16px), ejemplo: `Pantalón Rupornis Mujer`.
- **Precios:** sans-serif **regular** del mismo tamaño que card title — sin destacar con color.
- **Stamps / micro-copy:** sans-serif **regular, mayúsculas pequeñas, tracking amplio** — `IMPLEMENTOS PARA EL MONTE`, `NUEVO PRODUCTO`.

**Stack tipográfico propuesto para el pitch:**
```css
--font-display: 'Archivo Black', 'Inter', sans-serif; /* hero titles */
--font-heading: 'Inter', 'Manrope', sans-serif;       /* section headers, weight 700 */
--font-body: 'Inter', sans-serif;                      /* weight 400-500 */
```

---

## 4 · Componentes UI observados

### 4.1 · Header / Nav
- Fila 1: Logo centrado-izquierda · Search bar (pill rounded, fondo gris muy claro) centrada · Account icon + Cart icon a la derecha.
- Fila 2 (centrada bajo el logo): `Novedades · Mujer ▼ · Hombre ▼ · Tienda ▼ · Accesorios · Sale · Nosotros ▼`.
- Línea separadora muy fina entre filas.
- Fondo: hueso. Texto: negro.

### 4.2 · Botones / CTAs
Cuatro variantes detectadas, todas en forma de **pill (border-radius muy alto, casi 9999px)**:
1. **Outline blanco sobre foto** — texto blanco, borde blanco fino, sin fondo. Ej: `(VER LOS PRODUCTOS)` en el hero.
2. **Solid blanco sobre foto** — fondo blanco sólido, texto negro, sin borde. Ej: `Descúbrelo aquí`.
3. **Solid blanco sobre hueso** — igual al anterior pero sobre bg claro. Ej: `Ver más` en gender splits.
4. **Solid blanco pequeño sobre card** — pill compacto. Ej: `COMPRAR` en cards de actividades.

> Padding interior: `px-6 py-2.5` aprox · texto `text-sm font-medium`.

### 4.3 · Cards de actividad (grid de 5)
- Photo con `object-cover` rellenando.
- `border-radius: ~24px` (rounded-2xl/3xl en Tailwind).
- Texto en bottom-left con color blanco sobre el degradado oscuro de la foto.
- Botón `COMPRAR` debajo del título, alineado a la izquierda.
- Cards no tienen border ni shadow — solo la photo redondeada.

### 4.4 · Cards de producto (grid de 4)
- Fondo blanco puro (contrasta con el hueso de la sección).
- Photo cuadrada (1:1 aspect ratio).
- Sin redondeo en la card (rectangular dura), o redondeo muy sutil.
- Título y precio debajo en regular weight, alineados a la izquierda.
- Si hay rating, aparece en estrellas pequeñas.

### 4.5 · Hero full-bleed con overlay
- Photo lifestyle ocupa toda la pantalla (100vh o cerca).
- Overlay degradado sutil en la zona del texto (más oscuro abajo-izquierda).
- Texto display gigante en blanco, bottom-left con padding generoso (~80–120px del borde).
- CTA tipo pill debajo del título.

### 4.6 · Hero split (producto + lifestyle)
- Layout 60/40 o 50/50: lifestyle a la izquierda, studio shot del producto sobre fondo blanco a la derecha.
- Sobre el lado studio: header chico con nombre del producto (`PANTALÓN RUPORNIS`) y tabs de features (`Ultra rápido secado | Fresco y liviano | Tela Antifluido`).
- Círculos pequeños con los colores disponibles (swatches).
- Sobre el lado lifestyle: botón pill bottom-left tipo `DECÚBRELO AQUÍ`.

### 4.7 · Gender split (Hombre / Mujer)
- 50/50 dos fotos full-height puestas lado a lado.
- Cada mitad: título display gigante (`HOMBRE`, `MUJER`) bottom-left + subtítulo + botón `Ver más`.

### 4.8 · Badge "NUEVO PRODUCTO"
- Pill outline blanco fino sobre fondo de foto.
- Texto blanco mayúsculas pequeñas, tracking amplio.
- Encima del título display.

### 4.9 · Botón WhatsApp flotante
- Esquina inferior derecha.
- Verde `#25D366`.
- Redondo (border-radius full).
- Sombra sutil.
- **Decisión para el pitch:** lo conservamos — es marca registrada de su UX. Pero su link irá al WhatsApp del equipo para "agendar reunión post-pitch".

---

## 5 · Patrones de fotografía

Todas las fotos comparten un lenguaje visual coherente:

- **Locaciones reales colombianas** — bosque de niebla, río rocoso, páramo nevado, selva, montaña.
- **Modelos haciendo la actividad real** — no posando estático, no estudio (excepto product shots).
- **Iluminación natural difusa** — atmosférica, sin contraluces duros, ligeramente desaturada.
- **Composición editorial** — gente integrada al paisaje, no centrada como retrato.
- **Mix género balanceado** — mujer y hombre representados por igual.
- **Producto siempre visible y reconocible** — la prenda es protagonista pero contextual.

> **Decisión para el pitch:** las imágenes de los productos las descargamos directamente de la CDN Shopify de Atratus (`atratuscolombia.com/cdn/shop/files/...`). Para hero shots usamos la misma fotografía real de Toña y Mate en campo — si el equipo tiene fotos, las usamos; si no, le pedimos a Atratus permiso para usar 3–4 hero shots de su feed de Instagram.

---

## 6 · Estructura de secciones home (orden observado en Atratus)

1. **Header / Nav** (sticky)
2. **Hero full-bleed con tagline** — `ROPA PARA LA AVENTURA`
3. **Producto feature split** — lifestyle + studio + features tabs + color swatches
4. **Actividades outdoor (5 cards)** — Climas fríos · Senderismo · Turismo de Naturaleza · Avistamiento de aves · Climas cálidos
5. **Hero full-bleed nuevo producto** — `POLAR DE PÁRAMO`
6. **Grid de productos favoritos (4)** — `Los favoritos`
7. **Gender split** — Hombre / Mujer
8. *(seguirá: conservación, newsletter, footer — no compartido en estas capturas, infiero del WebFetch previo)*

---

## 7 · Mapeo: estructura Atratus → pitch deck

Cómo cada sección del pitch (§6 del context_engineering.md) se traduce visualmente al patrón Atratus que YA usan en su web. Cada paralelo es deliberado — para que el consejo sienta que el pitch les habla en su mismo idioma visual.

| # | Sección Pitch | Patrón visual Atratus que la inspira | Tratamiento |
|---|---|---|---|
| 0 | Hero | Hero full-bleed `ROPA PARA LA AVENTURA` | Foto de Toña y Mate en campo · overlay: `ATRATUS 2026 — DEL MONTE A LA COSTUMBRE` · CTA `Ver la propuesta` |
| 1 | El Problema | Sección flat hueso con stats | Bg hueso · stat gigante `70% no vuelve` · foto pequeña a la derecha |
| 2 | La Oportunidad | Actividades outdoor (cards) | 4 cards estilo Actividades: `12K búsquedas/mes` · `Global Big Day` · `78K orgánicos` · `Margen 50–60%` |
| 3 | Quiénes son sus clientes | Gender split + product cards | 3 columnas estilo Hombre/Mujer: Aviturista · Senderista · Biólogo · cada uno con foto + pull-quote |
| 4 | El Sistema Propuesto | Hero split producto + features tabs | Stack técnico en formato `Pantalón Rupornis`: tabs `Shopify · Wompi · Mailchimp · GA4 · Looker` + studio shot de un dashboard |
| 5 | SEO Topic Cluster | Hero full-bleed `POLAR DE PÁRAMO` | Foto de chaqueta impermeable + overlay `CHAQUETA IMPERMEABLE` + dato `4.400 búsquedas/mes` + link a atratus.vercel.app |
| 6 | Pauta — 3 campañas | Actividades outdoor (3 cards anchas) | 3 cards horizontales: BOFU Lluvias · MOFU Big Day · TOFU Storytelling — cada una con ROAS en pill |
| 7 | Redes | Grid Los favoritos (4 cols) | Mockup de 4 posts de IG estilo Atratus + 3 pilares como tabs |
| 8 | Automatización | Hero split (cuaderno + flujo) | Mockup del Cuaderno de Campo PDF a la derecha + flujo T+0/T+3/T+6 a la izquierda |
| 9 | Reactivación Email | Hero full-bleed con cifra | Foto editorial + número gigante `$255.000.000 COP / año` + subtítulo `ROI 10.500% · CAC $0` |
| 10 | Escalabilidad | Actividades outdoor (3 cards) | 3 cards: Upsell · Referidos · Email D14 — cada una con su delta financiero |
| 11 | El Pedido | Hero `POLAR DE PÁRAMO` | Badge `EL SÍ` + título `Aprobar y empezar el lunes` + CTA `Aprobar la propuesta` (que abre WhatsApp del equipo) |
| 12 | Cierre | Gender split (Toña + Mate) | Split de Toña a la izquierda · Mate a la derecha · frase de cierre: "Atratus deja de ser marca que vende ropa y pasa a ser marca que tiene clientes" |

---

## 8 · Reglas duras del pitch (anti-genérico)

Para que no se sienta como un template:

- **Nunca usar fondo blanco puro como bg principal.** Siempre hueso. Blanco solo para product cards.
- **Nunca usar gradientes pastel o glow effects.** Atratus no los usa. Si necesitamos profundidad, es por foto.
- **Nunca usar íconos genéricos (Lucide, Heroicons) en sustitución de fotos.** Atratus no usa íconos en su home — usa fotos lifestyle y tipografía bold. Solo cabe ícono en el header (cart, account) y en el WhatsApp flotante.
- **Nunca usar shadows fuertes.** Las cards de Atratus no flotan. Si separan, lo hacen con bg color (hueso vs blanco), no con sombra.
- **Nunca centrar texto largo.** Atratus alinea casi todo a la izquierda. El título se acomoda bottom-left, no centrado.
- **Display titles SIEMPRE en mayúsculas y bold extra.** Es la firma tipográfica de la marca.
- **Sentence-case microcopy.** `Descúbrelo aquí`, `Ver más`. Nunca "DESCÚBRELO AQUÍ" excepto para CTA principal del hero.

---

## 9 · Inventario de imágenes que necesitamos

De los productos confirmados en `/collections/all` (§7 del context_engineering.md), priorizamos descargar:

### Tier 1 — Heroes del pitch (CRÍTICAS)
- Foto de **Toña y Mate juntos en campo** (Hero §0, Cierre §12) → pedir al equipo o tomar de su feed.
- Foto de **chaqueta impermeable bajo lluvia** (§5 SEO + §6 Pauta BOFU) → Chaqueta Espeletia desde CDN.
- Foto de **persona con binoculares en bosque** (§2 Oportunidad + §6 Pauta MOFU) → ver "Avistamiento de aves" en su grid.
- Foto **Polar de Páramo en montaña nevada** (§9 Reactivación si encaja, o §10) → ya está en la home.

### Tier 2 — Product cards (importantes)
- Las 16 imágenes de producto del catálogo (`/imagenes/productos/`).
- Mínimo: las 3 variantes de Chaqueta Espeletia + 2 Polares + Pantalón Rupornis (ambos géneros) + Camisa Athene.

### Tier 3 — Atmósfera (deseables)
- Foto de bosque húmedo (textura para fondos de cards de Actividades).
- Foto de páramo / cordillera.
- Foto de río rocoso.

> **Decisión:** descargamos Tier 1 + Tier 2 desde la CDN de Shopify de Atratus. Tier 3 se descarga si encontramos URL directa, o se omite y se compone con las que tengamos.

---

## 10 · Historial

| Fecha | Cambio | Quien |
|---|---|---|
| 2026-05-13 | Archivo creado tras revisar 6 capturas de la home de atratuscolombia.com compartidas por Alex. Sistema de diseño, componentes UI, paleta confirmada, patrones de foto, mapeo pitch ↔ Atratus, inventario de imágenes. | Alex + Claude |
