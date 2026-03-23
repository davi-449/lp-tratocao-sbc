# Design System — TratoCão "Petshop Wonderland"

## 1. Filosofia de Design

- **Conceito:** "Petshop Wonderland" — a LP deve parecer uma loja de petshop premium: temática, colorida, organizada por categorias, com elementos visuais lúdicos mas profissionais.
- **Tom:** Acolhedor, alegre, confiável. Nada de frieza clínica.
- **Formas:** Extremely rounded (24px–40px). Cards "puffy" com sombras suaves e coloridas.
- **Animações:** Spring/bouncy (Framer Motion), micro-animações em hover, scroll-triggered reveals.

## 2. Tipografia

| Função | Fonte | Peso | Tracking |
|---|---|---|---|
| Display (Títulos) | Outfit | 700-900 (Bold/Black) | -0.02em (tight) |
| Body (Corpo) | Nunito | 400-700 | Normal |
| Mono (Tags/badges) | System mono | 500 | 0.1em |

- **Base font-size:** 16px (padrão, público jovem-adulto)
- **Títulos H1:** 48px–80px (clamp responsivo)
- **Títulos H2:** 36px–56px
- **Body text:** 16px–18px, `leading-relaxed`

## 3. Paleta de Cores

### Core (já definidas no tailwind.config.js)
| Token | Hex | Uso |
|---|---|---|
| `surface-base` | `#FFFBEB` | Background principal (amber-50 cremoso) |
| `surface-raw` | `#FEF3C7` | Backgrounds alternativos |
| `surface-elevated` | `#FFFFFF` | Cards, overlays |
| `primary` | `#F59E0B` | CTAs, destaques, botões |
| `primary-dim` | `#D97706` | Hover/active do primary |
| `accent-rose` | `#FB7185` | Corações, saúde, carinho |
| `accent-sky` | `#38BDF8` | Diagnósticos, exames |
| `text-primary` | `#1E293B` | Texto principal (slate-800) |
| `text-secondary` | `#64748B` | Texto de apoio (slate-500) |
| `text-muted` | `#94A3B8` | Texto terciário |
| `whatsapp` | `#25D366` | Botão WhatsApp |

### Novas adições (via tailwind.config.js > extend)
| Token | Hex | Uso |
|---|---|---|
| `accent-mint` | `#34D399` | Sucesso, badges "Aberto", confirmação de cópia |
| `accent-lavender` | `#A78BFA` | Especialidades premium, onco, neuro |
| `surface-glass` | `rgba(255,255,255,0.8)` | Navbar glass effect |

## 4. Layout

### 4.1 Navbar
- **Position:** Sticky top, z-50
- **Background:** `surface-glass` com `backdrop-blur-xl`
- **Altura:** 72px → 56px (shrink on scroll)
- **Border:** `border-b border-amber-200/40`
- **CTA:** Pill button amber "🐾 Agendar"

### 4.2 Hero
- **Layout:** Centered, 100dvh
- **Background:** Gradiente amber-50 → white + imagem de pet
- **Animação:** Staggered entrance (badge → h1 → p → CTAs → counters), spring physics
- **Counters:** Inline row com AnimatedCounter

### 4.3 Services Bento Box
- **Grid:** 12-col assimétrico (8+4, 5+7)
- **Cards:** `rounded-[2.5rem]`, puffy shadow, hover scale(1.03) com spring
- **Color coding:** Amber (geral), Rose (cirurgia), Sky (diagnósticos)

### 4.4 Sobre Nós (NOVO)
- **Layout:** Split 50/50 (texto + imagem/métricas)
- **Background:** `surface-elevated` (branco) para contraste com surface-base
- **Counters:** AnimatedCounter com useInView trigger

### 4.5 Testimonials
- **Layout:** Carrossel horizontal ou grid 3-col com hover lift
- **Cards:** `rounded-[2.5rem]`, paw emoji como avatar decorator
- **Stars:** SVG amber-500 fill

### 4.6 FAQ
- **Layout:** Single column centered (max-w-4xl)
- **Accordion:** `puffy-glass` cards, ChevronDown animated rotate
- **Open state:** AnimatePresence height animation

### 4.7 Location
- **Layout:** Map background (60% opacity) + glass overlay card
- **Badge:** Aberto/Fechado dinâmico
- **Interação:** Botão "Copiar Endereço" com estado copy→check

### 4.8 Footer
- **Layout:** 3-col grid (Logo | Nav | Contato)
- **Background:** `surface-base` com border-t amber
- **Accent:** Paw prints sutis

## 5. Componentes UI (Novos)

| Componente | Arquivo | Função |
|---|---|---|
| Navbar | `sections/Navbar.tsx` | Navegação sticky com glass blur |
| AnimatedCounter | `ui/AnimatedCounter.tsx` | Contador numérico animado (useSpring + useInView) |
| Accordion | `ui/Accordion.tsx` | FAQ com AnimatePresence |
| ScrollIndicator | `ui/ScrollIndicator.tsx` | Seta animada "rolar para baixo" |
| TestimonialCard | `ui/TestimonialCard.tsx` | Card de depoimento com avatar e rating |

## 6. Acessibilidade

- Skip-to-content link (primeiro elemento do body)
- Focus visible ring (`ring-2 ring-primary ring-offset-2`) em todos os interativos
- `aria-expanded` no Accordion e menu mobile
- `aria-label` em botões de ícone, iframe do mapa
- `prefers-reduced-motion: reduce` → desabilitar animações spring
- `tabIndex` management no modal mobile
- Contraste mínimo WCAG AA em todas as combinações texto/fundo

## 7. Performance

- `React.lazy` + `Suspense` para seções abaixo do fold (About, FAQ, Location, Footer)
- `loading="lazy"` em imagens e iframe
- Preconnect para Google Fonts no `index.html`
- Build com Vite tree-shaking
