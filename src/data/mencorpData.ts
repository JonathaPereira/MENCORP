export type ProjectStatus =
  | 'Disponível'
  | 'Em evolução'
  | 'Em desenvolvimento'
  | 'Em planejamento';

export interface MediaAsset {
  src: string;
  alt: string;
  label: string;
  kind: 'real' | 'concept';
  caption: string;
}

export interface ConfigurableLink {
  id: string;
  label: string;
  url: string | null; // null or empty means configurable / pending definition
  configKey: string;
  description: string;
  badge: string;
}

export interface PlatformItem {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  description: string;
  highlights: string[];
  status: ProjectStatus;
  theme: {
    accentHex: string;
    secondaryHex: string;
    badgeBg: string;
    badgeText: string;
    borderGlow: string;
    gradientBg: string;
  };
  media: MediaAsset[];
  primaryAction: {
    label: string;
    url: string | null;
    configKey: string;
  };
  repositoryUrl: string | null;
  ecosystemRole: string;
  techHighlights: string[];
}

export interface OriginalGameItem {
  id: 'cinzas-do-abismo' | 'atalaia' | 'nexus';
  title: string;
  subtitle: string;
  genreBadge: string;
  description: string;
  highlights: string[];
  status: ProjectStatus;
  visualIdentity: {
    themeName: string;
    fontClass: string;
    primaryColor: string;
    secondaryColor: string;
    cardBgGradient: string;
    borderStyle: string;
    glowStyle: string;
    badgeStyle: string;
    buttonStyle: string;
    signatureMotif: string;
  };
  media: MediaAsset[];
  mechanicsPreview: {
    label: string;
    value: string;
    detail: string;
  }[];
  primaryAction: {
    label: string;
    url: string | null;
    configKey: string;
  };
  repositoryUrl: string | null;
}

export interface IncorporatedGameItem {
  id: string;
  title: string;
  category: 'Incorporado ao Ecossistema' | 'Adaptação Digital no Trono' | 'Slot Configurável';
  originNote: string;
  description: string;
  coverImage?: string;
  tags: string[];
  hostPlatform: string;
  isTemplateSlot?: boolean;
}

export interface TimelineMilestone {
  id: string;
  period: string;
  isPeriodConfigurable?: boolean;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  visualAsset: string;
  assetKind: 'real' | 'concept';
  accentColor: 'violet' | 'gold' | 'cyan' | 'rose';
}

export interface EcosystemDomain {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  connectedProjects: string[];
  accentColor: string;
  coordinates: { x: number; y: number };
}

export interface RoadmapInitiative {
  id: string;
  title: string;
  area: string;
  status: ProjectStatus;
  description: string;
  focusPoints: string[];
}

/**
 * CONFIGURAÇÃO CENTRALIZADA DE LINKS DO ECOSSISTEMA MENCORP
 * Endereços reais já publicados estão preenchidos; canais futuros permanecem
 * preparados e configuráveis sem apontar para links fictícios.
 */
export const MENCORP_CONFIG = {
  brand: {
    name: 'MeNCorp',
    heroHeadline: 'Mais que projetos. Uma corporação de ideias.',
    heroDescription:
      'O MeNCorp nasceu da paixão por tecnologia, jogos e criatividade. Uma jornada construída através de ideias, experiências e projetos que transformam imaginação em realidade. Criamos, desenvolvemos, conectamos e evoluímos.',
    aboutHeadline: 'Uma ideia. Muitos universos.',
    futureHeadline: 'Estamos apenas começando.',
    futureDescription:
      'O MeNCorp continua evoluindo. Novos jogos, novas plataformas, novas ideias e experiências estão sendo construídas. Cada projeto representa mais um passo de uma jornada que está longe de terminar.',
    communityHeadline: 'Faça parte dessa jornada.',
    communityDescription:
      'Conheça nossos projetos, descubra nossos universos e acompanhe tudo o que estamos construindo.',
    footerClosing: 'MeNCorp — Criando. Conectando. Evoluindo.',
    logoAsset: '/assets/brand/men-logo.webp',
  },
  links: {
    githubOrg: 'https://github.com/JonathaPereira',
    mencorpRepo: 'https://github.com/JonathaPereira/MENCORP',
    menChatLive: 'https://men-chat.vercel.app',
    menChatRepo: 'https://github.com/JonathaPereira/MeN-CHAT',
    menTronoRepo: 'https://github.com/JonathaPereira/A-LEI-DO-TRONO-SERVER',
    menTronoDownloads: 'https://github.com/JonathaPereira/MN-Trono-Downloads',
    atalaiaLive: 'https://atalaia-mn.surge.sh',
    nexusRepo: 'https://github.com/JonathaPereira/PROJETO-NEXUS',
    // Campos configuráveis para canais comunitários e institucionais (sem URLs fictícias)
    discordInvite: null as string | null,
    youtubeChannel: null as string | null,
    instagramOrX: null as string | null,
    contactEmail: null as string | null,
  },
};

export const ABOUT_PILLARS = [
  {
    id: 'original-games',
    title: 'Desenvolvimento de jogos originais',
    description:
      'Criação autoral de universos, sistemas de combate, direção de arte e mecânicas profundas pensadas desde o primeiro protótipo.',
    iconName: 'Gamepad2',
    accent: 'violet',
  },
  {
    id: 'digital-platforms',
    title: 'Plataformas digitais',
    description:
      'Ecossistemas web, desktop e mobile construídos com arquitetura moderna para sustentar experiências interativas e catálogos integrados.',
    iconName: 'Layers',
    accent: 'gold',
  },
  {
    id: 'communities-comm',
    title: 'Comunidades e comunicação',
    description:
      'Ambientes dedicados para aproximar pessoas através de conversas, salas de voz, vídeo, compartilhamento de tela e convivência digital.',
    iconName: 'MessageSquareShare',
    accent: 'violet',
  },
  {
    id: 'multiplayer-online',
    title: 'Jogos multiplayer e experiências online',
    description:
      'Infraestrutura de salas em tempo real, sincronização de partidas, disputas estratégicas e interação direta entre jogadores.',
    iconName: 'Globe2',
    accent: 'gold',
  },
  {
    id: 'interactive-solutions',
    title: 'Desenvolvimento de soluções interativas',
    description:
      'Interfaces ricas, sistemas reativos e ferramentas sob medida que unem engenharia de software e design de experiência.',
    iconName: 'Cpu',
    accent: 'violet',
  },
  {
    id: 'publishing-curation',
    title: 'Publicação e divulgação de projetos',
    description:
      'Estruturação, distribuição multiplataforma e integração de novos títulos e experiências dentro do ecossistema MeNCorp.',
    iconName: 'Sparkles',
    accent: 'gold',
  },
] as const;

export const PLATFORMS_DATA: PlatformItem[] = [
  {
    id: 'men-trono',
    name: 'MEN TRONO',
    subtitle: 'Plataforma Digital · A Lei do Trono & A Corte',
    tagline: 'Estratégia, política, alianças e disputas pelo poder em ambiente digital.',
    description:
      'Uma experiência que combina estratégia, política, alianças e disputas pelo poder. O Men Trono leva o universo de A Lei do Trono para o ambiente digital, permitindo que jogadores participem de partidas e vivenciem uma experiência estratégica multiplayer.',
    highlights: [
      'Jogo de tabuleiro online',
      'Experiência multiplayer',
      'Estratégia e interação entre jogadores',
      'Desenvolvimento de uma experiência digital própria',
    ],
    status: 'Em evolução',
    theme: {
      accentHex: '#f59e0b',
      secondaryHex: '#8b5cf6',
      badgeBg: 'bg-amber-500/15 border-amber-500/35',
      badgeText: 'text-amber-300',
      borderGlow: 'hover:border-amber-500/50',
      gradientBg: 'from-amber-500/15 via-violet-900/15 to-transparent',
    },
    media: [
      {
        src: '/assets/real/throne-cover.webp',
        alt: 'Arte Oficial A Lei do Trono — Men Trono',
        label: 'Arte Oficial do Projeto',
        kind: 'real',
        caption: 'Identidade visual oficial da Corte e de A Lei do Trono no ecossistema MeNCorp.',
      },
      {
        src: '/assets/concept/men-trono-concept.webp',
        alt: 'Arte Conceitual da Mesa Estratégica Digital Men Trono',
        label: 'Arte Conceitual',
        kind: 'concept',
        caption:
          'Representação conceitual da mesa tática de territórios, decretos e alianças políticas de A Lei do Trono.',
      },
    ],
    primaryAction: {
      label: 'Acessar Repositório & Releases',
      url: MENCORP_CONFIG.links.menTronoDownloads,
      configKey: 'links.menTronoDownloads',
    },
    repositoryUrl: MENCORP_CONFIG.links.menTronoRepo,
    ecosystemRole:
      'Atua como o salão estratégico e hub central de jogos e convivência (Web, Desktop Electron e preparação Android), integrando partidas e catálogo.',
    techHighlights: [
      'Salas multiplayer em tempo real',
      'Hub integrado A Corte (Web & Desktop)',
      'Sistema de leis, territórios e decretos',
      'Catálogo conectado aos títulos MeNCorp',
    ],
  },
  {
    id: 'menchat',
    name: 'MENCHAT',
    subtitle: 'Plataforma de Comunicação & Comunidade',
    tagline: 'Conversas, chamadas, áudio, vídeo e experiências sociais em um ambiente integrado.',
    description:
      'Uma plataforma de comunicação e comunidade desenvolvida para conectar pessoas. O MenChat reúne conversas, chamadas, comunicação por áudio e vídeo e experiências sociais em um ambiente integrado.',
    highlights: [
      'Chat e comunicação',
      'Salas e comunidades',
      'Chamadas de áudio e vídeo',
      'Compartilhamento de tela',
      'Integração com experiências de jogos',
    ],
    status: 'Disponível',
    theme: {
      accentHex: '#a855f7',
      secondaryHex: '#c084fc',
      badgeBg: 'bg-violet-500/15 border-violet-500/35',
      badgeText: 'text-violet-300',
      borderGlow: 'hover:border-violet-500/50',
      gradientBg: 'from-violet-600/20 via-fuchsia-900/10 to-transparent',
    },
    media: [
      {
        src: '/assets/concept/menchat-concept.webp',
        alt: 'Arte Conceitual da Interface de Comunidade e Voz do MenChat',
        label: 'Arte Conceitual da Plataforma',
        kind: 'concept',
        caption:
          'Projeção conceitual dos painéis de comunicação por voz, salas comunitárias e integração com transmissões de jogos.',
      },
    ],
    primaryAction: {
      label: 'Acessar MenChat Online',
      url: MENCORP_CONFIG.links.menChatLive,
      configKey: 'links.menChatLive',
    },
    repositoryUrl: MENCORP_CONFIG.links.menChatRepo,
    ecosystemRole:
      'Conecta amigos, grupos e comunidades com acesso seguro, suporte a mídia rica, chamadas e integração com a rotina dos jogadores.',
    techHighlights: [
      'Web Responsiva & PWA instalável',
      'Conversas privadas, grupos e salas',
      'Áudio, vídeo, mídia e compartilhamento',
      'Acesso por convite e identidade própria',
    ],
  },
];

export const ORIGINAL_GAMES_DATA: OriginalGameItem[] = [
  {
    id: 'cinzas-do-abismo',
    title: 'CINZAS DO ABISMO',
    subtitle: 'Um universo de sobrevivência, combate e evolução.',
    genreBadge: 'AÇÃO · SOBREVIVÊNCIA · ROGUELITE',
    description:
      'Enfrente um mundo hostil, explore ambientes perigosos, domine diferentes armas e lute para sobreviver. Uma experiência de ação e sobrevivência construída em torno de progressão, desafios e evolução constante.',
    highlights: [
      'Combate e sobrevivência',
      'Arsenal de armas',
      'Ambientes e fases elaboradas',
      'Progressão contínua',
      'Evolução do personagem e dos equipamentos',
    ],
    status: 'Em evolução',
    visualIdentity: {
      themeName: 'Abismo Rubro & Cinzas',
      fontClass: 'font-epic',
      primaryColor: '#f97316', // Ember Orange / Crimson
      secondaryColor: '#dc2626',
      cardBgGradient:
        'bg-gradient-to-br from-[#17090c] via-[#0d0814] to-[#07060b]',
      borderStyle: 'border-orange-500/30 hover:border-orange-400/60',
      glowStyle: 'shadow-[0_0_55px_-12px_rgba(234,88,12,0.32)]',
      badgeStyle: 'bg-orange-500/15 text-orange-300 border-orange-500/35',
      buttonStyle:
        'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white shadow-lg shadow-orange-950/60',
      signatureMotif: 'Brasas abissais, aço forjado e fendas sombrias',
    },
    media: [
      {
        src: '/assets/real/cinzas-cover.webp',
        alt: 'Arte Oficial de Catálogo — Cinzas do Abismo',
        label: 'Arte Oficial do Jogo',
        kind: 'real',
        caption: 'Arte oficial de catálogo de Cinzas do Abismo presente no ecossistema MeNCorp.',
      },
      {
        src: '/assets/real/cinzas-forge.webp',
        alt: 'Cenário Oficial — A Forja em Cinzas do Abismo',
        label: 'Ambiente do Jogo · Forja',
        kind: 'real',
        caption: 'Cenário original de Cinzas do Abismo: forja ancestral e evolução de arsenal.',
      },
      {
        src: '/assets/real/cinzas-ruins.webp',
        alt: 'Cenário Oficial — Ruínas Abissais em Cinzas do Abismo',
        label: 'Ambiente do Jogo · Ruínas',
        kind: 'real',
        caption: 'Exploração de ruínas hostis e terrenos com efeitos dinâmicos.',
      },
      {
        src: '/assets/concept/cinzas-concept.webp',
        alt: 'Arte Conceitual — O Andarilho diante do Abismo',
        label: 'Arte Conceitual',
        kind: 'concept',
        caption: 'Ilustração conceitual destacando o contraste entre lâmina ígnea, armas e o abismo.',
      },
    ],
    mechanicsPreview: [
      {
        label: 'Modos de Jornada',
        value: 'Expedição & Horda',
        detail: 'Capítulos com guardiões e modo sobrevivência de ondas contínuas',
      },
      {
        label: 'Domínio Elemental',
        value: 'Fogo · Gelo · Raio · Veneno',
        detail: 'Combinações táticas de cartas, relíquias e modificadores de arma',
      },
      {
        label: 'Progressão',
        value: 'Builds Evolutivas',
        detail: 'Aprimoramento contínuo do personagem e equipamentos a cada etapa',
      },
    ],
    primaryAction: {
      label: 'Ver Projeto no Ecossistema',
      url: MENCORP_CONFIG.links.menTronoRepo,
      configKey: 'links.menTronoRepo',
    },
    repositoryUrl: MENCORP_CONFIG.links.menTronoRepo,
  },
  {
    id: 'atalaia',
    title: 'ATALAIA: GUARDIÕES DO CRISTAL',
    subtitle: 'Um jogo de defesa estratégica com progressão e evolução.',
    genreBadge: 'TOWER DEFENSE · ESTRATÉGIA ARCANA',
    description:
      'Defenda o Cristal contra ondas de criaturas, construa estratégias, posicione suas torres e desenvolva combinações de habilidades para sobreviver aos desafios de um mundo ameaçado.',
    highlights: [
      'Tower Defense',
      'Torres e habilidades',
      'Evolução e modificadores',
      'Mapas e inimigos variados',
      'Progressão contínua',
    ],
    status: 'Disponível',
    visualIdentity: {
      themeName: 'Cristal Arcano & Bastião Dourado',
      fontClass: 'font-epic',
      primaryColor: '#38bdf8', // Arcane Crystal Cyan
      secondaryColor: '#f59e0b', // Bastion Gold
      cardBgGradient:
        'bg-gradient-to-br from-[#071521] via-[#0b0e1d] to-[#06060b]',
      borderStyle: 'border-sky-400/35 hover:border-amber-400/60',
      glowStyle: 'shadow-[0_0_55px_-12px_rgba(56,189,248,0.3)]',
      badgeStyle: 'bg-sky-500/15 text-sky-300 border-sky-400/35',
      buttonStyle:
        'bg-gradient-to-r from-sky-500 via-cyan-500 to-amber-500 hover:from-sky-400 hover:to-amber-400 text-slate-950 font-semibold shadow-lg shadow-sky-950/60',
      signatureMotif: 'Geometria cristalina, feixes de defesa e fortificações douradas',
    },
    media: [
      {
        src: '/assets/real/atalaia-gameplay.webp',
        alt: 'Captura Real de Gameplay — Atalaia: Guardiões do Cristal',
        label: 'Captura Real de Gameplay',
        kind: 'real',
        caption:
          'Interface tática real de Atalaia: defesa do Núcleo de Cristal, telemetria de DPS em tempo real e doutrinas de torretas.',
      },
      {
        src: '/assets/concept/atalaia-concept.webp',
        alt: 'Arte Conceitual — O Bastião de Atalaia e o Cristal Central',
        label: 'Arte Conceitual',
        kind: 'concept',
        caption:
          'Arte conceitual cinematográfica retratando a cidadela de Atalaia defendendo o Cristal contra hordas sombrias.',
      },
    ],
    mechanicsPreview: [
      {
        label: 'Arsenal Defensivo',
        value: '6 Torretas Especializadas',
        detail: 'Balista, Morteiro, Chamas, Tesla, Glacial e Alquimista',
      },
      {
        label: 'Sistema de Doutrinas',
        value: 'Evolução & Sinergias',
        detail: 'Derrote chefes para fortalecer categorias inteiras de defesa',
      },
      {
        label: 'Telemetria Tática',
        value: 'Análise em Tempo Real',
        detail: 'Monitoramento detalhado de dano efetivo e eficiência por onda',
      },
    ],
    primaryAction: {
      label: 'Jogar Atalaia na Web',
      url: MENCORP_CONFIG.links.atalaiaLive,
      configKey: 'links.atalaiaLive',
    },
    repositoryUrl: MENCORP_CONFIG.links.menTronoRepo,
  },
  {
    id: 'nexus',
    title: 'NEXUS',
    subtitle: 'Um RPG tático ambientado em um universo de diferentes forças e classes.',
    genreBadge: 'RPG TÁTICO · COMBATE ESTRATÉGICO',
    description:
      'Monte sua equipe, desenvolva suas estratégias e explore um universo onde diferentes poderes, classes e habilidades determinam o rumo de cada batalha.',
    highlights: [
      'RPG tático',
      'Classes e personagens',
      'Combate estratégico',
      'Progressão e evolução',
      'Universo próprio',
    ],
    status: 'Em desenvolvimento',
    visualIdentity: {
      themeName: 'Sanctum Astral & Ecos do Crepúsculo',
      fontClass: 'font-display',
      primaryColor: '#c084fc', // Twilight Violet
      secondaryColor: '#06b6d4', // Sanctum Cyan
      cardBgGradient:
        'bg-gradient-to-br from-[#130b24] via-[#091322] to-[#06060b]',
      borderStyle: 'border-purple-400/35 hover:border-cyan-400/60',
      glowStyle: 'shadow-[0_0_55px_-12px_rgba(192,132,252,0.34)]',
      badgeStyle: 'bg-purple-500/15 text-purple-200 border-purple-400/35',
      buttonStyle:
        'bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white shadow-lg shadow-violet-950/60',
      signatureMotif: 'Matrizes táticas do Sanctum, afinidades astrais e oficina de gemas',
    },
    media: [
      {
        src: '/assets/real/nexus-cover.webp',
        alt: 'Arte Oficial — NEXUS: Ecos do Crepúsculo',
        label: 'Arte Oficial do Jogo',
        kind: 'real',
        caption: 'Arte oficial de NEXUS — Ecos do Crepúsculo apresentando Vesper e a arquitetura do Sanctum.',
      },
      {
        src: '/assets/real/nexus-online.webp',
        alt: 'Captura Real de Combate Tático 2D — NEXUS',
        label: 'Captura Real de Combate',
        kind: 'real',
        caption: 'Combate estratégico em turnos com gestão de vida, energia, escudo e sinergias entre heróis.',
      },
      {
        src: '/assets/real/nexus-lobby.webp',
        alt: 'Captura Real da Arena e Oficina de Gemas — NEXUS',
        label: 'Captura Real · Formação & Gemas',
        kind: 'real',
        caption: 'Preparação de trio tático com 20 personagens ativos, classes e engastes de gemas.',
      },
      {
        src: '/assets/real/nexus-arena.webp',
        alt: 'Cenário Oficial da Arena Astral — NEXUS',
        label: 'Cenário Oficial · Sanctum',
        kind: 'real',
        caption: 'Arena do Eclipse no universo próprio de NEXUS.',
      },
      {
        src: '/assets/concept/nexus-concept.webp',
        alt: 'Arte Conceitual de Formação Tática — NEXUS',
        label: 'Arte Conceitual',
        kind: 'concept',
        caption: 'Arte conceitual ilustrando a convergência de classes e poderes em formação tática.',
      },
    ],
    mechanicsPreview: [
      {
        label: 'Formação & Elenco',
        value: 'Equipes Táticas & Classes',
        detail: 'Sinergia entre tanques, causadores de dano, suporte e controle',
      },
      {
        label: 'Customização',
        value: 'Oficina de Gemas & Afinidades',
        detail: 'Engastes estratégicos para moldar atributos, energia e velocidade',
      },
      {
        label: 'Modos de Batalha',
        value: 'Campanha & Arena PvP',
        detail: 'Capítulos narrativos e confrontos táticos online por código de sala',
      },
    ],
    primaryAction: {
      label: 'Explorar Projeto Nexus',
      url: MENCORP_CONFIG.links.nexusRepo,
      configKey: 'links.nexusRepo',
    },
    repositoryUrl: MENCORP_CONFIG.links.nexusRepo,
  },
];

/**
 * JOGOS PUBLICADOS, DISTRIBUÍDOS OU INCORPORADOS AO ECOSSISTEMA
 * Separados claramente dos títulos autorais originais desenvolvidos pelo MeNCorp.
 * Estrutura extensível preparada para fácil adição de novos jogos.
 */
export const INCORPORATED_GAMES_DATA: IncorporatedGameItem[] = [
  {
    id: 'splendor-trono',
    title: 'Splendor · Adaptação Digital Integrada',
    category: 'Adaptação Digital no Trono',
    originNote: 'Clássico de tabuleiro incorporado ao catálogo multiplayer de A Corte',
    description:
      'Experiência digitalizada e integrada aos salões de A Corte / Men Trono para partidas rápidas de estratégia econômica e coleção de gemas entre membros da comunidade.',
    coverImage: '/assets/real/splendor-cover.webp',
    tags: ['Tabuleiro Digital', 'Multiplayer', 'Catálogo A Corte'],
    hostPlatform: 'Men Trono / A Corte',
  },
  {
    id: 'azul-trono',
    title: 'Azul · Adaptação Digital Integrada',
    category: 'Adaptação Digital no Trono',
    originNote: 'Clássico abstrato incorporado ao catálogo multiplayer de A Corte',
    description:
      'Implementação digital interativa integrada à plataforma Men Trono, com suporte a salas online, regras automatizadas e placar sincronizado.',
    coverImage: '/assets/real/azul-cover.webp',
    tags: ['Estratégia Abstrata', 'Multiplayer', 'Catálogo A Corte'],
    hostPlatform: 'Men Trono / A Corte',
  },
  {
    id: 'ticket-to-ride-trono',
    title: 'Ticket to Ride · Adaptação Digital Integrada',
    category: 'Adaptação Digital no Trono',
    originNote: 'Jogo de rotas ferroviárias incorporado ao salão digital de A Corte',
    description:
      'Versão digital conectada ao ecossistema Men Trono para disputas estratégicas de rotas e objetivos em partidas com amigos.',
    coverImage: '/assets/real/ticket-to-ride-cover.webp',
    tags: ['Rotas & Estratégia', 'Multiplayer', 'Catálogo A Corte'],
    hostPlatform: 'Men Trono / A Corte',
  },
  {
    id: 'love-letter-similo-trono',
    title: 'Love Letter & Similo · Salão Casual',
    category: 'Adaptação Digital no Trono',
    originNote: 'Experiências de dedução e cartas incorporadas ao ambiente A Corte',
    description:
      'Partidas ágeis de dedução social e cooperação incorporadas diretamente à infraestrutura de salas e chamadas do ecossistema.',
    coverImage: '/assets/real/love-letter-cover.webp',
    tags: ['Dedução & Cartas', 'Partidas Rápidas', 'Catálogo A Corte'],
    hostPlatform: 'Men Trono / A Corte',
  },
  {
    id: 'future-publishing-slot',
    title: 'Novo Título Publicado / Incorporado',
    category: 'Slot Configurável',
    originNote: 'Estrutura modular preparada para expansão do catálogo',
    description:
      'Espaço reservado na arquitetura de dados do MeNCorp para futura publicação, distribuição ou incorporação de novos jogos parceiros e experiências ao ecossistema.',
    tags: ['Arquitetura Extensível', 'Publicação MeNCorp', 'Configurável'],
    hostPlatform: 'Ecossistema MeNCorp',
    isTemplateSlot: true,
  },
];

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    id: 'genesis',
    period: 'Fase I · A Gênese Criativa',
    isPeriodConfigurable: true,
    title: 'O Nascimento de uma Visão Tecnológica e Criativa',
    category: 'Fundação & Experimentação',
    description:
      'O ponto de partida da trajetória MeNCorp: anos de estudo, experimentação, prototipagem e aprendizado contínuo unindo paixão por jogos, engenharia de software e criação de mundos próprios.',
    highlights: [
      'Primeiros protótipos e experimentos interativos',
      'Construção da base técnica e artística autoral',
      'Definição da filosofia criativa da marca',
    ],
    visualAsset: '/assets/real/throne-cover.webp',
    assetKind: 'real',
    accentColor: 'violet',
  },
  {
    id: 'lei-do-trono',
    period: 'Fase II · Universo Estratégico',
    isPeriodConfigurable: true,
    title: 'A Lei do Trono & O Surgimento do Men Trono',
    category: 'Plataforma Digital & Multiplayer',
    description:
      'Transição do universo estratégico de A Lei do Trono para o ambiente digital. Criação de uma plataforma capaz de sustentar partidas multiplayer, intriga política, alianças e um salão completo de experiências.',
    highlights: [
      'Digitalização das mecânicas de estratégia e política',
      'Arquitetura cliente-servidor com WebSockets em tempo real',
      'Expansão para aplicação Desktop (Electron) e Web',
    ],
    visualAsset: '/assets/concept/men-trono-concept.webp',
    assetKind: 'concept',
    accentColor: 'gold',
  },
  {
    id: 'menchat-community',
    period: 'Fase III · Conexão e Comunidade',
    isPeriodConfigurable: true,
    title: 'MenChat e a Infraestrutura de Comunicação',
    category: 'Comunidade & Social',
    description:
      'Desenvolvimento de uma solução própria de comunicação para aproximar amigos e jogadores. O MenChat consolida conversas, salas, chamadas de áudio/vídeo e compartilhamento em uma experiência integrada.',
    highlights: [
      'Comunicação privada e em grupo com identidade própria',
      'Suporte a voz, vídeo, mídia e PWA mobile/desktop',
      'Integração direta com a vivência da comunidade gamer',
    ],
    visualAsset: '/assets/concept/menchat-concept.webp',
    assetKind: 'concept',
    accentColor: 'violet',
  },
  {
    id: 'mencorp-games-expansion',
    period: 'Fase IV · O Universo Autoral MeNCorp Games',
    isPeriodConfigurable: true,
    title: 'Cinzas do Abismo, Atalaia e Nexus',
    category: 'Desenvolvimento de Jogos Originais',
    description:
      'Consolidação do braço de desenvolvimento de jogos originais com três universos distintos: a ação e sobrevivência de Cinzas do Abismo, a defesa estratégica de Atalaia: Guardiões do Cristal e o combate tático de Nexus.',
    highlights: [
      'Três jogos originais com identidades visuais e mecânicas únicas',
      'Integração dos títulos ao catálogo do ecossistema',
      'Evolução constante de sistemas de progressão e PvP online',
    ],
    visualAsset: '/assets/real/nexus-online.webp',
    assetKind: 'real',
    accentColor: 'cyan',
  },
  {
    id: 'mencorp-ecosystem-today',
    period: 'Presente & Futuro · Ecossistema Unificado',
    isPeriodConfigurable: false,
    title: 'Consolidação da Marca Institucional MeNCorp',
    category: 'Corporação de Ideias',
    description:
      'Unificação das plataformas, jogos originais, títulos incorporados e canais de comunidade sob o guarda-chuva oficial do MeNCorp — estruturando o caminho para novos lançamentos e experiências.',
    highlights: [
      'Ecossistema interconectado de produtos e jogos',
      'Identidade institucional consolidada',
      'Arquitetura pronta para os próximos capítulos da jornada',
    ],
    visualAsset: '/assets/real/atalaia-gameplay.webp',
    assetKind: 'real',
    accentColor: 'gold',
  },
];

export const ECOSYSTEM_DOMAINS: EcosystemDomain[] = [
  {
    id: 'digital-platforms',
    title: 'Plataformas Digitais',
    shortTitle: 'Plataformas',
    subtitle: 'Infraestrutura & Ambientes',
    description:
      'Sustenta o acesso unificado às aplicações web, desktop e mobile, conectando contas, salas multiplayer, atualizações e catálogos.',
    connectedProjects: ['Men Trono', 'A Corte (Web & Desktop)', 'Hub de Catálogo'],
    accentColor: '#f59e0b',
    coordinates: { x: 18, y: 24 },
  },
  {
    id: 'community-comm',
    title: 'Comunidade e Comunicação',
    shortTitle: 'Comunicação',
    subtitle: 'Conexão Humana em Tempo Real',
    description:
      'Integra jogadores e membros através de chat, chamadas de áudio e vídeo, compartilhamento de tela e salas sociais.',
    connectedProjects: ['MenChat', 'Salas de Voz & Vídeo', 'Canais da Comunidade'],
    accentColor: '#a855f7',
    coordinates: { x: 82, y: 24 },
  },
  {
    id: 'game-development',
    title: 'Desenvolvimento de Jogos',
    shortTitle: 'MeNCorp Games',
    subtitle: 'Criação Autoral de Universos',
    description:
      'Núcleo criativo dedicado ao design, engenharia e direção artística dos títulos originais desenvolvidos internamente.',
    connectedProjects: [
      'Cinzas do Abismo',
      'Atalaia: Guardiões do Cristal',
      'Nexus: Ecos do Crepúsculo',
    ],
    accentColor: '#38bdf8',
    coordinates: { x: 14, y: 74 },
  },
  {
    id: 'game-publishing',
    title: 'Publicação de Jogos',
    shortTitle: 'Publicação & Catálogo',
    subtitle: 'Curadoria e Incorporação',
    description:
      'Distribuição e adaptação de experiências e jogos de tabuleiro digitais incorporados aos salões multiplayer do ecossistema.',
    connectedProjects: [
      'Catálogo Integrado A Corte',
      'Adaptações Digitais Multiplayer',
      'Distribuição Web & Desktop',
    ],
    accentColor: '#ec4899',
    coordinates: { x: 86, y: 74 },
  },
  {
    id: 'new-experiences',
    title: 'Novos Projetos e Experiências',
    shortTitle: 'Inovação & Futuro',
    subtitle: 'Laboratório Contínuo',
    description:
      'Frente permanente de pesquisa, prototipagem de novas mecânicas, expansão mobile e criação de futuras propriedades intelectuais.',
    connectedProjects: [
      'Expansão Mobile Android',
      'Novos Universos Interativos',
      'Sistemas Multiplayer Avançados',
    ],
    accentColor: '#10b981',
    coordinates: { x: 50, y: 88 },
  },
];

export const ROADMAP_INITIATIVES: RoadmapInitiative[] = [
  {
    id: 'menchat-platform',
    title: 'MenChat · Experiência Web & Mobile PWA',
    area: 'Plataforma de Comunicação',
    status: 'Disponível',
    description:
      'Comunicação privada e comunitária com salas, mídia rica, voz e instalação direta em dispositivos móveis e desktop.',
    focusPoints: [
      'Acesso web publicado e funcional',
      'Suporte a grupos, mídia e chamadas',
      'Aprimoramento contínuo de notificações e performance',
    ],
  },
  {
    id: 'atalaia-web-release',
    title: 'Atalaia: Guardiões do Cristal · Edição Web & Catálogo',
    area: 'MeNCorp Games',
    status: 'Disponível',
    description:
      'Defesa estratégica do Cristal com seis doutrinas de torretas, análise de dano em tempo real e integração direta com A Corte.',
    focusPoints: [
      'Versão web jogável publicada',
      'Sistema de doutrinas e ondas de chefes',
      'Integração nativa ao ecossistema Men Trono',
    ],
  },
  {
    id: 'men-trono-ecosystem',
    title: 'Men Trono & A Corte · Expansão Multiplataforma',
    area: 'Plataforma Digital & Multiplayer',
    status: 'Em evolução',
    description:
      'Aprimoramento contínuo da plataforma estratégica de A Lei do Trono, unificando comunicação, salões de jogos e experiência mobile.',
    focusPoints: [
      'Evolução das partidas estratégicas multiplayer',
      'Integração entre Desktop (Electron), Web e Android',
      'Expansão do catálogo de experiências conectadas',
    ],
  },
  {
    id: 'cinzas-do-abismo-evolution',
    title: 'Cinzas do Abismo · Expansão de Regiões e Cartas',
    area: 'MeNCorp Games',
    status: 'Em evolução',
    description:
      'Ampliação dos capítulos de expedição, novas sinergias elementais, equipamentos e desafios do modo Horda sem fim.',
    focusPoints: [
      'Novas combinações de armas e cartas elementais',
      'Refinamento de combate, chefes e terrenos dinâmicos',
      'Progressão persistente de campanha e recordes',
    ],
  },
  {
    id: 'nexus-tactical-rpg',
    title: 'Nexus · Campanha Tática & Arena PvP Online',
    area: 'MeNCorp Games',
    status: 'Em desenvolvimento',
    description:
      'Desenvolvimento do RPG tático em turnos com elenco de 20 heróis, cinco afinidades, oficina de gemas e batalhas online autoritativas.',
    focusPoints: [
      'Balanceamento de classes, habilidades e sinergias de trio',
      'Infraestrutura de salas PvP online em tempo real',
      'Expansão dos capítulos e missões no universo do Sanctum',
    ],
  },
  {
    id: 'next-gen-experiences',
    title: 'Novos Universos, Ferramentas & Publicações MeNCorp',
    area: 'Inovação & Ecossistema',
    status: 'Em planejamento',
    description:
      'Planejamento de novas propriedades intelectuais, recursos sociais integrados e ampliação da frente de publicação de projetos.',
    focusPoints: [
      'Concepção de novos protótipos e experiências interativas',
      'Ferramentas unificadas para a comunidade MeNCorp',
      'Abertura estruturada para novos títulos no ecossistema',
    ],
  },
];

export const COMMUNITY_CHANNELS: ConfigurableLink[] = [
  {
    id: 'discord',
    label: 'Discord Oficial',
    url: MENCORP_CONFIG.links.discordInvite,
    configKey: 'MENCORP_CONFIG.links.discordInvite',
    description:
      'Ponto de encontro para jogadores, testes de novas versões, formação de partidas e conversa direta com a comunidade.',
    badge: 'Comunidade & Partidas',
  },
  {
    id: 'youtube',
    label: 'YouTube MeNCorp',
    url: MENCORP_CONFIG.links.youtubeChannel,
    configKey: 'MENCORP_CONFIG.links.youtubeChannel',
    description:
      'Trailers, diários de desenvolvimento, bastidores de criação dos jogos e demonstrações das plataformas.',
    badge: 'Vídeos & Devlogs',
  },
  {
    id: 'social',
    label: 'Redes Sociais & GitHub',
    url: MENCORP_CONFIG.links.githubOrg,
    configKey: 'MENCORP_CONFIG.links.githubOrg',
    description:
      'Acompanhe os repositórios oficiais, atualizações técnicas, releases públicas e novidades do ecossistema MeNCorp.',
    badge: 'Repositórios & Novidades',
  },
  {
    id: 'contact',
    label: 'Contato Institucional',
    url: MENCORP_CONFIG.links.contactEmail,
    configKey: 'MENCORP_CONFIG.links.contactEmail',
    description:
      'Canal direto para parcerias criativas, imprensa, feedback sobre projetos ou assuntos institucionais.',
    badge: 'Canal Direto',
  },
];
