# Design System - TratoCão ("Playful Care")

## 1. Core Aesthetics
- **Vibe:** "Playful Care" - fofo, seguro, higiênico mas alegre, quente.
- **Formas:** Extremely rounded. Nada de bordas retas (border-radius: 24px a 40px).
- **Sombras:** "Puffy shadows" - grandes, coloridas, suaves.
- **Animações:** "Bouncy" transitions, molas soltas, hover animado e responsivo.

## 2. Typography
- **Display Font:** `Outfit` (Modern, geometric, round and friendly sans-serif).
- **Body Font:** `Nunito` (Very rounded, highly readable, warm sans-serif).

## 3. Color Palette
- **Base (Background):** `Amber 50` (`#FFFBEB`) - um off-white cremoso, lembrando baunilha/leite, criando calor.
- **Surface (Cards):** Pura Brancura (`#FFFFFF`) para manter a sensação de clínica limpa ("ambiente limpo e organizado").
- **Primary Accent:** `Amber 500` (`#F59E0B`) para botões de destaque, focando em sol/calor/alegria.
- **Secondary Accent:** `Rose 400` (`#FB7185`) ou `Coral` para corações, carinho anatômico.
- **Tertiary Accent:** `Sky 400` (`#38BDF8`) para áreas médicas puras (raio-x, exames).
- **Text Primary:** `Slate 800` (`#1E293B`) - nada de preto puro, um cinza bem amigável.
- **Text Secondary:** `Slate 500` (`#64748B`).

## 4. Component Styles

### 4.1 "Bouncy Button"
- **Shape:** Pill (`rounded-full`).
- **Surface:** Solid Amber (`bg-amber-500`) with text white.
- **Shadow:** Thick, soft amber shadow (`shadow-amber-500/30`).
- **States:** Hover aumenta escala (scale 1.05) com animação spring.

### 4.2 "Puffy Bento Card"
- **Border:** Nenhuma, ou apenas contorno super fino branco.
- **Radius:** `rounded-[2.5rem]`.
- **Background:** White, mas pode ter um "gradient blob" suave vazando na borda.
- **Shadow:** Puffy drop shadow (`shadow-[0_10px_40px_rgba(0,0,0,0.04)]`).

### 4.3 Typography Utilities
- `.font-display`: `font-family: 'Outfit', sans-serif; tracking-tight`.
- `.font-body`: `font-family: 'Nunito', sans-serif; leading-relaxed`.

## 5. Assets Specifications
- **Hero Image:** Cachorros e gatos sorridentes e saudáveis brincando ou recebendo carinho de uma veterinária amigável em um ambiente bem iluminado, ensolarado e limpo.
- **Patterns:** Pegadas (paw prints) bem sutis (opacidade 2%) no fundo.
