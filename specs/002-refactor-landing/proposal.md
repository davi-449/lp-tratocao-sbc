# Proposta de Refatoração — TratoCão Clínica Veterinária

## 1. Visão Geral

**Projeto:** Refatoração da Landing Page — TratoCão Clínica Veterinária  
**Objetivo:** Evoluir a LP atual de um MVP funcional para uma experiência temática imersiva e interativa, inspirada na organização visual de lojas de petshop premium — coloridas, temáticas e altamente engajantes.  
**Novo Vibe Concept:** **"Petshop Wonderland"** — Uma evolução do "Playful Care" original, adicionando camadas de interatividade, micro-animações, seções narrativas e elementos temáticos que fazem a página parecer um passeio virtual pela clínica.

## 2. Dados do Negócio (Google Business)

- **Nome:** TratoCão Clínica Veterinária
- **Avaliação:** 4.8 / 198 avaliações
- **Endereço:** R. Santana, 286 — Paulicéia, São Bernardo do Campo - SP, 09688-040
- **Telefone:** (11) 98575-5354
- **Horário:** Seg-Sex (09:00 — 17:00), Sab-Dom (08:30 — 15:00)
- **Serviços:** Consultas, Vacinas, Castração, Cirurgia Geral, Ultrassom, Raio X, Exames de Sangue, Dermatologista, Oncologista, Ortopedista, Endocrinologista, Oftalmologista, Nutricionista, Nefrologista.

## 3. Diagnóstico da LP Atual (001-landing-page)

### O que já está bom ✅
- Design system "Playful Care" com cores quentes (amber/rose/sky)
- Tipografia amigável (Outfit + Nunito)
- Hero com social proof (4.8 Google)
- Services Bento Box bem estruturado
- Indicator dinâmico Aberto/Fechado na Location
- FloatingWhatsApp funcional

### O que precisa evoluir 🔧
- **Sem Navbar:** A página não tem navegação fixa — o usuário se perde
- **Hero genérica:** Falta uma imagem de impacto e animação de entrada mais chamativa
- **Sem FAQ:** Não há seção de dúvidas frequentes (essencial para clínica vet)
- **Footer mínimo:** Uma única linha de texto, sem links úteis ou informações de contato
- **Sem contadores animados:** Não exibe métricas de confiança de forma dinâmica
- **Sem seção "Sobre":** Falta uma narrativa sobre a clínica e equipe
- **Interatividade limitada:** Cards estáticos sem hover effects, sem carrossel de depoimentos
- **Acessibilidade básica:** Faltam skip-links, focus visible, aria-labels, prefers-reduced-motion
- **Performance:** Sem lazy loading, sem code splitting

## 4. Estrutura Proposta — Nova LP

### 4.1 Navbar Sticky (NOVO)
- Logo + links âncora (Início, Serviços, Sobre, FAQ, Localização)
- Badge "🐾 Agendar Consulta" como CTA no canto direito
- Hamburger menu animado para mobile  
- Efeito de encolhimento ao scroll (scrollY > 50)

### 4.2 Hero Section (REFATORAR)
- Background com gradiente suave + imagem de pet feliz gerada
- Animação de entrada staggered (badge → título → subtítulo → CTAs)
- Contadores animados inline: "4.8 ⭐ Google" | "198+ Avaliações" | "14+ Especialidades"
- ScrollIndicator animado para guiar o usuário

### 4.3 Services Bento Box (REFATORAR)
- Adicionar hover effects com scale + shadow transition nos cards
- Tags de especialidades como chips interativos com hover colorido
- Animação whileInView mais suave e staggered

### 4.4 Sobre Nós / Equipe (NOVO)
- Seção narrativa sobre a clínica com foto da fachada ou equipe
- Contadores animados: "X anos de cuidado", "Y pets atendidos", "Z especialidades"
- Tom emocional: "Mais que uma clínica, uma família para o seu pet"

### 4.5 Testimonials Carousel (REFATORAR)
- Transformar grid estático em carrossel animado (auto-play + swipe)
- Adicionar mais depoimentos (pelo menos 5-6)
- Avatar com iniciais coloridas e rating visual

### 4.6 FAQ Accordion (NOVO)
- 6-8 perguntas frequentes reais (vacinas, castração, emergências, pagamento)
- Accordion com animação suave (AnimatePresence do Framer Motion)
- ARIA completo (aria-expanded, role)

### 4.7 Location & Hours (REFATORAR)
- Botão "Copiar Endereço" com feedback visual (ícone Copy → Check)
- Mapa mais integrado com overlay de glass
- Ícones maiores e tipografia mais legível

### 4.8 Footer Completo (NOVO)
- 3 colunas: Logo + About | Links Rápidos | Contato & Horários
- Crédito "Built with ❤️"

### 4.9 WhatsApp Floating (REFATORAR)
- Adicionar tooltip "Fale Conosco!" ao hover
- Melhorar animação bounce

## 5. Requisitos Não-Funcionais

| Requisito | Meta |
|---|---|
| Performance (Lighthouse) | ≥ 90 |
| Acessibilidade (Lighthouse) | ≥ 95 |
| SEO (Lighthouse) | ≥ 95 |
| `prefers-reduced-motion` | Respeitar em todas as animações |
| Focus Visible | Em todos os elementos interativos |
| Skip-to-content | Link no topo do body |
| Lazy Loading | Seções abaixo do fold com React.lazy + Suspense |
| Build | Zero erros TypeScript + Vite production build |

## 6. Critérios de Aceite

1. Navbar sticky funcional com links âncora e menu mobile
2. Hero com animação staggered e contadores animados
3. Seção "Sobre Nós" com narrativa e métricas animadas
4. FAQ Accordion com pelo menos 6 perguntas e ARIA completo
5. Testimonials em carrossel (ou grid interativo com hover)
6. Footer 3 colunas com dados de contato completos
7. Botão "Copiar Endereço" na seção de localização
8. Build de produção sem erros
9. Commit semântico no Git
