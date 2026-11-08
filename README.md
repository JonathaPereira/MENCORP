# MeNCorp — Landing Page Institucional Oficial

> **"Mais que projetos. Uma corporação de ideias."**

Página institucional oficial do **MeNCorp**, uma organização criativa e tecnológica que reúne desenvolvimento de jogos originais, plataformas digitais, comunidades, entretenimento e experiências interativas.

---

## Visão Geral e Arquitetura

O projeto foi construído com foco em direção artística cinematográfica, fluidez de animações, responsividade cuidadosa (desktop, tablet e mobile) e arquitetura modular extensível:

- **React 19 + TypeScript + Vite**
- **Tailwind CSS** (sistema de design customizado com paleta obsidiana/grafite, roxo/violeta/lilás e acentos pontuais em dourado, além de temas individuais para cada jogo)
- **Framer Motion** (animações de entrada progressiva, revelação no scroll, transições de abas, linha do tempo interativa, diagrama de ecossistema animado e suporte integral a `prefers-reduced-motion`)
- **Lucide Icons**

---

## Estrutura de Arquivos

```text
MENCORP/
├── public/
│   ├── favicon.svg                      # Monograma vetorial oficial MeNCorp
│   └── assets/
│       ├── brand/men-logo.webp          # Emblema original da família MeN otimizado
│       ├── real/                        # Capturas reais e capas oficiais dos projetos do ecossistema
│       └── concept/                     # Artes conceituais exclusivas de alta resolução (WebP)
├── src/
│   ├── data/
│   │   └── mencorpData.ts               # Fonte única de dados (links, plataformas, jogos, história, roadmap)
│   ├── components/
│   │   ├── animations/
│   │   │   ├── AmbientBackground.tsx    # Iluminação ambiente, spotlight reativo e partículas discretas
│   │   │   └── Reveal.tsx               # Animações progressivas no scroll com suporte a reduced-motion
│   │   ├── brand/
│   │   │   └── MeNCorpLogo.tsx          # Apresentação tipográfica elegante MeNCorp
│   │   ├── modals/
│   │   │   └── ProjectModal.tsx         # Modal interativo de inspeção de projetos, mecânicas e galerias
│   │   ├── navigation/
│   │   │   ├── Navbar.tsx               # Menu moderno fixo, hub de acesso rápido e gaveta mobile
│   │   │   └── ScrollProgress.tsx       # Barra superior de progresso e indicador lateral de seções
│   │   └── sections/
│   │       ├── HeroSection.tsx          # Seção 1 — Hero / Apresentação + Portal Interativo de Universos
│   │       ├── AboutSection.tsx         # Seção 2 — Quem Somos ("Uma ideia. Muitos universos.")
│   │       ├── PlatformsSection.tsx     # Seção 3 — Nossos Produtos e Plataformas (Men Trono & MenChat)
│   │       ├── GamesSection.tsx         # Seção 4 — MeNCorp Games (Cinzas, Atalaia, Nexus + Incorporados)
│   │       ├── TimelineSection.tsx      # Seção 5 — Nossa História (Linha do tempo interativa)
│   │       ├── EcosystemSection.tsx     # Seção 6 — Nosso Ecossistema (Núcleo central e conexões animadas)
│   │       ├── FutureSection.tsx        # Seção 7 — O Que Vem Pela Frente (Status configuráveis)
│   │       ├── CommunitySection.tsx     # Seção 8 — Comunidade e Contato
│   │       └── Footer.tsx               # Seção 9 — Rodapé Institucional
│   ├── App.tsx                          # Orquestração de seções, scroll-spy e modais
│   ├── index.css                        # Tokens globais, utilitários glassmorphic e acessibilidade
│   └── main.tsx                         # Ponto de entrada da aplicação
└── tailwind.config.js                   # Configuração de fontes, cores e animações
```

---

## Como Configurar Links, Novos Jogos ou Marcos Históricos

Toda a configuração de conteúdo e endereços está centralizada em [`src/data/mencorpData.ts`](src/data/mencorpData.ts):

1. **Links e Redes Sociais (`MENCORP_CONFIG.links`)**:
   - Links reais já ativos: `menChatLive` (`https://men-chat.vercel.app`), `atalaiaLive` (`https://atalaia-mn.surge.sh`), `menTronoRepo`, `menTronoDownloads`, `nexusRepo` e `githubOrg`.
   - Campos configuráveis (`discordInvite`, `youtubeChannel`, `instagramOrX`, `contactEmail`): basta substituir `null` pela URL oficial quando desejar ativar o botão correspondente na seção de Comunidade.
2. **Inclusão de Novos Jogos (`ORIGINAL_GAMES_DATA` e `INCORPORATED_GAMES_DATA`)**:
   - Adicione um novo objeto seguindo a interface tipada `OriginalGameItem` (para títulos autorais do MeNCorp) ou `IncorporatedGameItem` (para jogos publicados, distribuídos ou incorporados ao ecossistema).
3. **Atualização de Status e Roadmap (`ROADMAP_INITIATIVES`)**:
   - Utilize qualquer um dos indicadores padronizados: `'Disponível' | 'Em evolução' | 'Em desenvolvimento' | 'Em planejamento'`.

---

## Como Executar Localmente

Pré-requisitos: **Node.js 20+** (ou Node.js 24 LTS) e **npm**.

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento (http://localhost:5173)
npm run dev

# 3. Verificar tipagem e gerar build de produção (pasta dist/)
npm run build

# 4. Executar verificação de lint
npm run lint

# 5. Pré-visualizar o build de produção localmente
npm run preview
```

---

## Como Publicar (Deploy)

O projeto gera uma aplicação estática otimizada na pasta `dist/` através do comando `npm run build` e pode ser publicado diretamente em:

- **Vercel**: Conecte o repositório `JonathaPereira/MENCORP` (Framework Preset: `Vite`, Build Command: `npm run build`, Output Directory: `dist`).
- **Netlify / Cloudflare Pages / Render Static**: Configure o comando de build `npm run build` e o diretório de publicação `dist`.
- **GitHub Pages**: Publique o conteúdo gerado em `dist/`.

---

**MeNCorp — Criando. Conectando. Evoluindo.**
