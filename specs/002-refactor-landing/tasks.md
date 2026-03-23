# Tasks — Refatoração TratoCão "Petshop Wonderland"

## Fase 1: Fundação & Design System

- [x] Atualizar `index.html` com metatags OG, theme-color, skip-to-content link, preconnects
- [x] Atualizar `tailwind.config.js` com novas cores (accent-mint, accent-lavender, surface-glass)
- [x] Atualizar `src/index.css` com utilitários: focus ring, prefers-reduced-motion, scroll-padding

## Fase 2: Componentes UI Base

- [x] Criar `src/components/ui/AnimatedCounter.tsx` (useSpring + useInView)
- [x] Criar `src/components/ui/Accordion.tsx` (AnimatePresence + ARIA)
- [x] Criar `src/components/ui/ScrollIndicator.tsx` (ChevronDown animado)
- [x] Criar `src/components/ui/TestimonialCard.tsx` (avatar + rating + texto)
- [x] Refatorar `src/components/ui/Button.tsx` (focus visible, min-height 48px)
- [x] Refatorar `src/components/ui/BentoCard.tsx` (hover scale spring, focus ring)

## Fase 3: Navbar (Novo Componente)

- [x] Criar `src/components/sections/Navbar.tsx`
- [x] Implementar sticky + glass blur + scroll shrink
- [x] Implementar links âncora com smooth scroll
- [x] Implementar hamburger menu mobile com AnimatePresence
- [x] CTA "🐾 Agendar" linked ao WhatsApp

## Fase 4: Hero Section (Refatorar)

- [x] Gerar imagem de hero com `generate_image` (pets felizes, estética petshop)
- [x] Implementar animação staggered (spring physics)
- [x] Adicionar contadores animados inline (avaliações, especialidades)
- [x] Adicionar `ScrollIndicator` abaixo dos CTAs
- [x] Ajustar `id="inicio"` e acessibilidade (tabIndex, outline)

## Fase 5: Services Bento Box (Refatorar)

- [x] Adicionar hover effects com Framer Motion (scale + shadow)
- [x] Fazer tags de especialidades interativas (hover color change)
- [x] Implementar animações whileInView staggered nos cards
- [x] Corrigir typo "Cuidade" → "Cuidado"

## Fase 6: Sobre Nós / Equipe (Nova Seção)

- [x] Criar `src/components/sections/AboutSection.tsx`
- [x] Layout split: narrativa à esquerda, métricas animadas à direita
- [x] AnimatedCounters: anos, pets atendidos, especialidades
- [x] Background branco para contraste com surface-base
- [x] `id="sobre"`

## Fase 7: Testimonials (Refatorar)

- [x] Adicionar mais 3 depoimentos (total 6)
- [x] Implementar hover lift effect nos cards
- [x] Melhorar avatar com cores variadas por índice
- [x] Considerar carrossel auto-play ou manter grid interativo

## Fase 8: FAQ Accordion (Nova Seção)

- [x] Criar `src/components/sections/FAQSection.tsx`
- [x] Inserir 6-8 perguntas reais (vacinas, castração, emergências, pagamento, etc.)
- [x] Integrar componente Accordion com animações e ARIA
- [x] `id="faq"`

## Fase 9: Location Section (Refatorar)

- [x] Adicionar botão "Copiar Endereço" com feedback visual (Copy → Check)
- [x] Melhorar aria-labels no iframe do mapa
- [x] Refinar tipografia e ícones para consistência com design system

## Fase 10: Footer (Novo Componente)

- [x] Criar `src/components/sections/Footer.tsx`
- [x] 3 colunas: Logo & About | Links Rápidos | Contato & Horários
- [x] Links âncora espelhando navbar
- [x] Crédito "Built with ❤️"

## Fase 11: Integração Final & App.tsx

- [ ] Atualizar `App.tsx` com Navbar + novas seções na ordem correta
- [ ] Implementar React.lazy + Suspense para seções abaixo do fold
- [ ] Remover footer inline do App.tsx (migrar para componente)
- [ ] Validar loading="lazy" em imagens e iframe

## Fase 12: Acessibilidade & Performance

- [ ] Validar focus visible em todos os elementos interativos
- [ ] Validar prefers-reduced-motion em todas as animações
- [ ] Rodar `npm run build` e validar zero erros
- [ ] Commit semântico: `feat: refactor landing page with petshop wonderland theme`
