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
  url: string | null;
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
  secondaryAction?: {
    label: string;
    url: string;
  };
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
  secondaryAction?: {
    label: string;
    url: string;
  };
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
  playUrl?: string;
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
 * Direcionando diretamente para as páginas dos jogos e plataformas publicadas.
 */
export const MENCORP_CONFIG = {
  brand: {
    name: 'MeNCorp',
    heroHeadline: 'Mais que projetos. Uma corporação de ideias.',
    heroDescription:
      'O MeNCorp nasceu da paixão por tecnologia, jogos e criatividade. Uma jornada construída através de ideias, experiências e projetos que transformam imaginação em realidade. Criamos, desenvolvemos, conectamos e evoluímos.',
    aboutHeadline: 'Uma ideia. Muitos universos.',
    biography: {
      badge: 'A VERDADEIRA HISTÓRIA · DE MEMES E NERDS A MENCORP',
      title: 'Como um card game entre amigos escalou para um ecossistema inteiro.',
      paragraph1:
        'Tudo começou em um dia qualquer, quando o criador Jonatha Pereira decidiu desenvolver um card game autoral chamado "A Lei do Trono" e criar um ambiente web para testá-lo online. No entanto, as coisas foram escalando rapidamente: da necessidade de criar um chat de voz P2P para explicar as regras do jogo durante os testes, nasceu um projeto super completo de comunicação, com vários jogos integrados e compartilhamento de tela.',
      paragraph2:
        'O site crescia a todo vapor, mas ainda de forma desordenada e em meio a uma bagunça estrutural. Foi então que um dos membros do MeNCorp, Felipe Pimentel, decidiu liderar uma profunda refatoração de código e reformular seu design por completo. Desde esse marco, toda a equipe primordial dos Memes e Nerds passou a testar ativamente cada função e sugerir mudanças que moldaram o ecossistema atual.',
      keyPeople: [
        {
          name: 'Jonatha Pereira',
          role: 'Criador & Idealizador',
          detail:
            'Criou "A Lei do Trono", o ambiente web inicial, o chat de voz P2P e a expansão para múltiplos jogos.',
        },
        {
          name: 'Felipe Pimentel',
          role: 'Refatoração & Direção de Design',
          detail:
            'Reestruturou a arquitetura de código e transformou o design inteiro da plataforma.',
        },
        {
          name: 'Equipe Primordial Memes e Nerds',
          role: 'Testes, Ideias & Evolução',
          detail:
            'Núcleo fundador que testa, valida e sugere melhorias contínuas em cada projeto.',
        },
      ],
    },
    futureHeadline: 'Estamos apenas começando.',
    futureDescription:
      'O MeNCorp continua evoluindo. Novos jogos, novas plataformas, novas ideias e experiências estão sendo construídas. Cada projeto representa mais um passo de uma jornada que está longe de terminar.',
    communityHeadline: 'Faça parte dessa jornada.',
    communityDescription:
      'Conheça nossos projetos, descubra nossos universos e acompanhe tudo o que estamos construindo.',
    footerClosing: 'MeNCorp — Criando. Conectando. Evoluindo.',
    logoAsset: 'assets/brand/men-logo.webp',
  },
  links: {
    // Link Master do MN Trono (App de comunicação + Hub central dos jogos)
    mnTronoMaster: 'https://a-lei-do-trono.surge.sh',
    // Links diretos das páginas dos jogos e plataformas
    cinzasLive: 'https://a-lei-do-trono.surge.sh/roguelite/index.html',
    atalaiaLive: 'https://atalaia-mn.surge.sh',
    nexusLive: 'https://semchakra10.itch.io/nexus-mn',
    menChatLive: 'https://men-chat.vercel.app',
    // Campos configuráveis para canais comunitários e institucionais
    discordInvite: null as string | null,
    youtubeChannel: null as string | null,
    socialChannel: 'https://a-lei-do-trono.surge.sh',
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
      'Ambientes dedicados para aproximar pessoas através de conversas, salas de voz P2P, vídeo, compartilhamento de tela e convivência digital.',
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
    name: 'MN TRONO',
    subtitle: 'App de Comunicação & Hub Master de Jogos · A Lei do Trono',
    tagline: 'Comunicação por voz P2P, compartilhamento de tela, estratégia e múltiplos jogos integrados.',
    description:
      'Uma experiência que combina estratégia, política, alianças, disputas pelo poder e comunicação em tempo real. O MN Trono é o nosso app de comunicação e hub master que leva o universo de A Lei do Trono e diversos outros jogos para o ambiente digital, unindo chat de voz P2P, compartilhamento de tela e partidas multiplayer.',
    highlights: [
      'App de comunicação com voz P2P e compartilhamento de tela',
      'Jogo de tabuleiro e card game online (A Lei do Trono)',
      'Experiência multiplayer com vários jogos no catálogo',
      'Estratégia, alianças e interação direta entre jogadores',
    ],
    status: 'Disponível',
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
        src: 'assets/real/throne-cover.webp',
        alt: 'Arte Oficial A Lei do Trono — MN Trono',
        label: 'Arte Oficial do Projeto',
        kind: 'real',
        caption: 'Identidade visual oficial da Corte e de A Lei do Trono no MN Trono.',
      },
      {
        src: 'assets/concept/men-trono-concept.webp',
        alt: 'Arte Conceitual da Mesa Estratégica Digital MN Trono',
        label: 'Arte Conceitual',
        kind: 'concept',
        caption:
          'Representação conceitual da mesa tática de territórios, decretos e alianças políticas de A Lei do Trono.',
      },
    ],
    primaryAction: {
      label: 'Acessar MN Trono & Jogos',
      url: MENCORP_CONFIG.links.mnTronoMaster,
      configKey: 'links.mnTronoMaster',
    },
    ecosystemRole:
      'Atua como o aplicativo central de comunicação (voz P2P, canais e tela compartilhada) e salão master onde os jogos do ecossistema se encontram.',
    techHighlights: [
      'Chat de voz P2P & Compartilhamento de tela',
      'Hub Master (a-lei-do-trono.surge.sh)',
      'Partidas estratégicas em tempo real',
      'Catálogo integrado de jogos MeNCorp',
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
        src: 'assets/concept/menchat-concept.webp',
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
    secondaryAction: {
      label: 'Abrir MN Trono',
      url: MENCORP_CONFIG.links.mnTronoMaster,
    },
    ecosystemRole:
      'Conecta amigos, grupos e comunidades com acesso rápido, suporte a mídia rica, chamadas e integração com o dia a dia dos membros.',
    techHighlights: [
      'Web Responsiva & PWA instalável',
      'Conversas privadas, grupos e salas',
      'Áudio, vídeo, mídia e compartilhamento',
      'Identidade própria Memes e Nerds',
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
    status: 'Disponível',
    visualIdentity: {
      themeName: 'Abismo Rubro & Cinzas',
      fontClass: 'font-epic',
      primaryColor: '#f97316',
      secondaryColor: '#dc2626',
      cardBgGradient:
        'bg-gradient-to-br from-[#17090c]/95 via-[#0d0814]/95 to-[#07060b]/95',
      borderStyle: 'border-orange-500/30 hover:border-orange-400/60',
      glowStyle: 'shadow-[0_0_55px_-12px_rgba(234,88,12,0.32)]',
      badgeStyle: 'bg-orange-500/15 text-orange-300 border-orange-500/35',
      buttonStyle:
        'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white shadow-lg shadow-orange-950/60',
      signatureMotif: 'Brasas abissais, aço forjado e fendas sombrias',
    },
    media: [
      {
        src: 'assets/real/cinzas-cover.webp',
        alt: 'Arte Oficial de Catálogo — Cinzas do Abismo',
        label: 'Arte Oficial do Jogo',
        kind: 'real',
        caption: 'Arte oficial de catálogo de Cinzas do Abismo presente no ecossistema MeNCorp.',
      },
      {
        src: 'assets/real/cinzas-forge.webp',
        alt: 'Cenário Oficial — A Forja em Cinzas do Abismo',
        label: 'Ambiente do Jogo · Forja',
        kind: 'real',
        caption: 'Cenário original de Cinzas do Abismo: forja ancestral e evolução de arsenal.',
      },
      {
        src: 'assets/real/cinzas-ruins.webp',
        alt: 'Cenário Oficial — Ruínas Abissais em Cinzas do Abismo',
        label: 'Ambiente do Jogo · Ruínas',
        kind: 'real',
        caption: 'Exploração de ruínas hostis e terrenos com efeitos dinâmicos.',
      },
      {
        src: 'assets/concept/cinzas-concept.webp',
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
        detail: '15 capítulos com guardiões e modo sobrevivência de ondas contínuas',
      },
      {
        label: 'Domínio Elemental',
        value: 'Fogo · Gelo · Raio · Veneno',
        detail: 'Combinações táticas de 36 cartas, relíquias e modificadores de arma',
      },
      {
        label: 'Progressão',
        value: 'Builds Evolutivas',
        detail: 'Aprimoramento contínuo do personagem e equipamentos a cada etapa',
      },
    ],
    primaryAction: {
      label: 'Jogar Cinzas do Abismo',
      url: MENCORP_CONFIG.links.cinzasLive,
      configKey: 'links.cinzasLive',
    },
    secondaryAction: {
      label: 'Abrir no MN Trono',
      url: MENCORP_CONFIG.links.mnTronoMaster,
    },
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
      primaryColor: '#38bdf8',
      secondaryColor: '#f59e0b',
      cardBgGradient:
        'bg-gradient-to-br from-[#071521]/95 via-[#0b0e1d]/95 to-[#06060b]/95',
      borderStyle: 'border-sky-400/35 hover:border-amber-400/60',
      glowStyle: 'shadow-[0_0_55px_-12px_rgba(56,189,248,0.3)]',
      badgeStyle: 'bg-sky-500/15 text-sky-300 border-sky-400/35',
      buttonStyle:
        'bg-gradient-to-r from-sky-500 via-cyan-500 to-amber-500 hover:from-sky-400 hover:to-amber-400 text-slate-950 font-semibold shadow-lg shadow-sky-950/60',
      signatureMotif: 'Geometria cristalina, feixes de defesa e fortificações douradas',
    },
    media: [
      {
        src: 'assets/real/atalaia-gameplay.webp',
        alt: 'Captura Real de Gameplay — Atalaia: Guardiões do Cristal',
        label: 'Captura Real de Gameplay',
        kind: 'real',
        caption:
          'Interface tática real de Atalaia: defesa do Núcleo de Cristal, telemetria de DPS em tempo real e doutrinas de torretas.',
      },
      {
        src: 'assets/concept/atalaia-concept.webp',
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
      label: 'Jogar Atalaia Agora',
      url: MENCORP_CONFIG.links.atalaiaLive,
      configKey: 'links.atalaiaLive',
    },
    secondaryAction: {
      label: 'Abrir no MN Trono',
      url: MENCORP_CONFIG.links.mnTronoMaster,
    },
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
    status: 'Em evolução',
    visualIdentity: {
      themeName: 'Sanctum Astral & Ecos do Crepúsculo',
      fontClass: 'font-display',
      primaryColor: '#c084fc',
      secondaryColor: '#06b6d4',
      cardBgGradient:
        'bg-gradient-to-br from-[#130b24]/95 via-[#091322]/95 to-[#06060b]/95',
      borderStyle: 'border-purple-400/35 hover:border-cyan-400/60',
      glowStyle: 'shadow-[0_0_55px_-12px_rgba(192,132,252,0.34)]',
      badgeStyle: 'bg-purple-500/15 text-purple-200 border-purple-400/35',
      buttonStyle:
        'bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white shadow-lg shadow-violet-950/60',
      signatureMotif: 'Matrizes táticas do Sanctum, afinidades astrais e oficina de gemas',
    },
    media: [
      {
        src: 'assets/real/nexus-cover.webp',
        alt: 'Arte Oficial — NEXUS: Ecos do Crepúsculo',
        label: 'Arte Oficial do Jogo',
        kind: 'real',
        caption: 'Arte oficial de NEXUS — Ecos do Crepúsculo apresentando Vesper e a arquitetura do Sanctum.',
      },
      {
        src: 'assets/real/nexus-online.webp',
        alt: 'Captura Real de Combate Tático 2D — NEXUS',
        label: 'Captura Real de Combate',
        kind: 'real',
        caption: 'Combate estratégico em turnos com gestão de vida, energia, escudo e sinergias entre heróis.',
      },
      {
        src: 'assets/real/nexus-lobby.webp',
        alt: 'Captura Real da Arena e Oficina de Gemas — NEXUS',
        label: 'Captura Real · Formação & Gemas',
        kind: 'real',
        caption: 'Preparação de trio tático com 20 personagens ativos, classes e engastes de gemas.',
      },
      {
        src: 'assets/real/nexus-arena.webp',
        alt: 'Cenário Oficial da Arena Astral — NEXUS',
        label: 'Cenário Oficial · Sanctum',
        kind: 'real',
        caption: 'Arena do Eclipse no universo próprio de NEXUS.',
      },
      {
        src: 'assets/concept/nexus-concept.webp',
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
        detail: '20 personagens ativos com sinergia entre tanques, dano, suporte e controle',
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
      label: 'Jogar Nexus Online',
      url: MENCORP_CONFIG.links.nexusLive,
      configKey: 'links.nexusLive',
    },
    secondaryAction: {
      label: 'Abrir no MN Trono',
      url: MENCORP_CONFIG.links.mnTronoMaster,
    },
  },
];

export const INCORPORATED_GAMES_DATA: IncorporatedGameItem[] = [
  {
    id: 'splendor-trono',
    title: 'Splendor · Adaptação Digital no Trono',
    category: 'Adaptação Digital no Trono',
    originNote: 'Clássico de estratégia incorporado ao catálogo multiplayer do MN Trono',
    description:
      'Experiência digitalizada e integrada aos salões do MN Trono para partidas rápidas de estratégia econômica e coleção de gemas com voz P2P integrada.',
    coverImage: 'assets/real/splendor-cover.webp',
    tags: ['Tabuleiro Digital', 'Multiplayer', 'Salão MN Trono'],
    hostPlatform: 'MN Trono',
    playUrl: MENCORP_CONFIG.links.mnTronoMaster,
  },
  {
    id: 'azul-trono',
    title: 'Azul · Adaptação Digital no Trono',
    category: 'Adaptação Digital no Trono',
    originNote: 'Clássico abstrato incorporado ao catálogo multiplayer do MN Trono',
    description:
      'Implementação digital interativa integrada à plataforma MN Trono, com suporte a salas online, regras automatizadas e placar sincronizado.',
    coverImage: 'assets/real/azul-cover.webp',
    tags: ['Estratégia Abstrata', 'Multiplayer', 'Salão MN Trono'],
    hostPlatform: 'MN Trono',
    playUrl: MENCORP_CONFIG.links.mnTronoMaster,
  },
  {
    id: 'ticket-to-ride-trono',
    title: 'Ticket to Ride · Adaptação Digital no Trono',
    category: 'Adaptação Digital no Trono',
    originNote: 'Jogo de rotas ferroviárias incorporado ao salão digital do MN Trono',
    description:
      'Versão digital conectada ao ecossistema MN Trono para disputas estratégicas de rotas e objetivos em partidas com amigos.',
    coverImage: 'assets/real/ticket-to-ride-cover.webp',
    tags: ['Rotas & Estratégia', 'Multiplayer', 'Salão MN Trono'],
    hostPlatform: 'MN Trono',
    playUrl: MENCORP_CONFIG.links.mnTronoMaster,
  },
  {
    id: 'love-letter-similo-trono',
    title: 'Love Letter & Similo · Salão Casual',
    category: 'Adaptação Digital no Trono',
    originNote: 'Experiências de dedução e cartas incorporadas ao MN Trono',
    description:
      'Partidas ágeis de dedução social e cooperação incorporadas diretamente à infraestrutura de salas e chamadas de voz do ecossistema.',
    coverImage: 'assets/real/love-letter-cover.webp',
    tags: ['Dedução & Cartas', 'Partidas Rápidas', 'Salão MN Trono'],
    hostPlatform: 'MN Trono',
    playUrl: MENCORP_CONFIG.links.mnTronoMaster,
  },
  {
    id: 'future-publishing-slot',
    title: 'Novo Título Publicado / Incorporado',
    category: 'Slot Configurável',
    originNote: 'Estrutura modular preparada para expansão do catálogo',
    description:
      'Espaço reservado na arquitetura de dados do MeNCorp para futura publicação, distribuição ou incorporação de novos jogos e experiências.',
    tags: ['Arquitetura Extensível', 'Publicação MeNCorp', 'Configurável'],
    hostPlatform: 'Ecossistema MeNCorp',
    isTemplateSlot: true,
  },
];

export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    id: 'genesis-lei-do-trono',
    period: 'Marco I · A Faísca Criativa',
    isPeriodConfigurable: true,
    title: 'Jonatha Pereira e a Criação de "A Lei do Trono"',
    category: 'Início da Jornada',
    description:
      'Em um dia qualquer, Jonatha Pereira decidiu criar um card game autoral chamado "A Lei do Trono" e desenvolveu um ambiente web próprio para conseguir testá-lo online com os amigos.',
    highlights: [
      'Concepção original do card game estratégico A Lei do Trono',
      'Primeira versão do ambiente web para testes de partidas online',
      'Ponto de partida de todo o ecossistema MeNCorp',
    ],
    visualAsset: 'assets/real/throne-cover.webp',
    assetKind: 'real',
    accentColor: 'gold',
  },
  {
    id: 'escala-voz-p2p',
    period: 'Marco II · A Escala da Plataforma',
    isPeriodConfigurable: true,
    title: 'Do Chat de Voz P2P ao Hub Completo de Jogos',
    category: 'Comunicação & Multiplayer',
    description:
      'Para explicar as regras do card game durante as partidas, surgiu a ideia de criar um chat de voz P2P integrado. A iniciativa escalou rapidamente para uma plataforma completa com compartilhamento de tela e múltiplos jogos.',
    highlights: [
      'Implementação de chat de voz P2P direto no navegador',
      'Compartilhamento de tela e salas de convivência em tempo real',
      'Expansão do catálogo para abrigar diversos jogos multiplayer',
    ],
    visualAsset: 'assets/concept/men-trono-concept.webp',
    assetKind: 'concept',
    accentColor: 'violet',
  },
  {
    id: 'refatoracao-felipe-pimentel',
    period: 'Marco III · A Grande Virada Arquitetural',
    isPeriodConfigurable: true,
    title: 'Felipe Pimentel: Refatoração de Código e Novo Design',
    category: 'Engenharia & Identidade Visual',
    description:
      'Com o crescimento acelerado, o site havia se tornado uma bagunça estrutural. Foi aí que Felipe Pimentel, membro do MeNCorp, assumiu uma refatoração profunda do código e reformulou seu design inteiro.',
    highlights: [
      'Reestruturação completa da base de código e arquitetura',
      'Redesign visual sofisticado e organização da interface',
      'Fundação técnica sólida para suportar o crescimento do projeto',
    ],
    visualAsset: 'assets/concept/menchat-concept.webp',
    assetKind: 'concept',
    accentColor: 'cyan',
  },
  {
    id: 'equipe-memes-e-nerds',
    period: 'Marco IV · A Força da Comunidade Fundadora',
    isPeriodConfigurable: true,
    title: 'A Equipe Primordial dos Memes e Nerds (MeN)',
    category: 'Cultura, Testes & Evolução',
    description:
      'A partir da nova estrutura, toda a equipe primordial dos Memes e Nerds passou a testar intensamente as funcionalidades, sugerindo mudanças, ajustes de regras e novos recursos.',
    highlights: [
      'Ciclos constantes de testes reais em grupo',
      'Sugestões diretas da equipe primordial Memes e Nerds',
      'Consolidação do MN Trono e nascimento do MenChat',
    ],
    visualAsset: 'assets/real/nexus-lobby.webp',
    assetKind: 'real',
    accentColor: 'violet',
  },
  {
    id: 'universo-mencorp-games',
    period: 'Presente & Futuro · O Ecossistema MeNCorp',
    isPeriodConfigurable: false,
    title: 'Cinzas do Abismo, Atalaia, Nexus e a Expansão Contínua',
    category: 'MeNCorp Games & Futuro',
    description:
      'Hoje, o MeNCorp reúne o MN Trono, o MenChat e três grandes universos autorais de jogos — Cinzas do Abismo, Atalaia: Guardiões do Cristal e Nexus — em evolução constante.',
    highlights: [
      'Três títulos originais com identidades visuais e mecânicas próprias',
      'Acesso integrado através do link master a-lei-do-trono.surge.sh',
      'Novas experiências e projetos em contínuo desenvolvimento',
    ],
    visualAsset: 'assets/real/nexus-online.webp',
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
    connectedProjects: ['MN Trono (Link Master)', 'A Lei do Trono Online', 'Hub de Catálogo'],
    accentColor: '#f59e0b',
    coordinates: { x: 18, y: 24 },
  },
  {
    id: 'community-comm',
    title: 'Comunidade e Comunicação',
    shortTitle: 'Comunicação',
    subtitle: 'Conexão Humana em Tempo Real',
    description:
      'Integra jogadores e a equipe Memes e Nerds através de voz P2P, compartilhamento de tela, MenChat e salas sociais.',
    connectedProjects: ['Voz P2P & Tela no MN Trono', 'MenChat', 'Comunidade Memes e Nerds'],
    accentColor: '#a855f7',
    coordinates: { x: 82, y: 24 },
  },
  {
    id: 'game-development',
    title: 'Desenvolvimento de Jogos',
    shortTitle: 'MeNCorp Games',
    subtitle: 'Criação Autoral de Universos',
    description:
      'Núcleo criativo dedicado ao design, engenharia e direção artística dos títulos originais desenvolvidos pelo MeNCorp.',
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
      'Distribuição e adaptação de experiências e jogos de tabuleiro digitais incorporados aos salões multiplayer do MN Trono.',
    connectedProjects: [
      'Splendor & Azul no Trono',
      'Ticket to Ride, Love Letter & Similo',
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
    id: 'mn-trono-master',
    title: 'MN Trono · App de Comunicação & Hub de Jogos',
    area: 'Plataforma Master & Voz P2P',
    status: 'Disponível',
    description:
      'Nosso aplicativo principal de comunicação por voz P2P, compartilhamento de tela e salão multiplayer com A Lei do Trono e catálogo completo.',
    focusPoints: [
      'Acesso direto em a-lei-do-trono.surge.sh',
      'Chat de voz P2P e compartilhamento de tela integrados',
      'Salões multiplayer com múltiplos jogos ativos',
    ],
  },
  {
    id: 'atalaia-web-release',
    title: 'Atalaia: Guardiões do Cristal · Edição Web & Trono',
    area: 'MeNCorp Games',
    status: 'Disponível',
    description:
      'Defesa estratégica do Cristal com seis doutrinas de torretas, análise de dano em tempo real e acesso direto no navegador.',
    focusPoints: [
      'Versão web jogável em atalaia-mn.surge.sh',
      'Sistema de doutrinas e ondas de chefes',
      'Integração nativa ao ecossistema MN Trono',
    ],
  },
  {
    id: 'menchat-platform',
    title: 'MenChat · Experiência Web & Mobile PWA',
    area: 'Plataforma de Comunicação',
    status: 'Disponível',
    description:
      'Comunicação privada e comunitária com salas, mídia rica, voz e instalação direta em dispositivos móveis e desktop.',
    focusPoints: [
      'Acesso publicado em men-chat.vercel.app',
      'Suporte a grupos, mídia e chamadas',
      'Aprimoramento contínuo de notificações e performance',
    ],
  },
  {
    id: 'cinzas-do-abismo-evolution',
    title: 'Cinzas do Abismo · Expedição & Horda Sem Fim',
    area: 'MeNCorp Games',
    status: 'Em evolução',
    description:
      'Ação e sobrevivência roguelite jogável diretamente no ecossistema, com ampliação contínua de capítulos, cartas elementais e chefes.',
    focusPoints: [
      'Demo jogável disponível no ecossistema MN Trono',
      'Combinações de armas e 4 elementos (Fogo, Gelo, Raio, Veneno)',
      'Progressão persistente de campanha e recordes de horda',
    ],
  },
  {
    id: 'nexus-tactical-rpg',
    title: 'Nexus · Campanha Tática & Arena PvP Online',
    area: 'MeNCorp Games',
    status: 'Em desenvolvimento',
    description:
      'RPG tático em turnos com elenco de 20 heróis, cinco afinidades, oficina de gemas e batalhas online.',
    focusPoints: [
      'Página jogável publicada e integrada ao Trono',
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
      'Planejamento de novas propriedades intelectuais, recursos sociais integrados e ampliação da frente de publicação junto à equipe Memes e Nerds.',
    focusPoints: [
      'Concepção de novos protótipos e experiências interativas',
      'Ferramentas unificadas para a comunidade MeNCorp',
      'Abertura estruturada para novos títulos no ecossistema',
    ],
  },
];

export const COMMUNITY_CHANNELS: ConfigurableLink[] = [
  {
    id: 'mn-trono',
    label: 'MN Trono · App de Comunicação',
    url: MENCORP_CONFIG.links.mnTronoMaster,
    configKey: 'MENCORP_CONFIG.links.mnTronoMaster',
    description:
      'Nosso ponto de encontro oficial: entre nas salas de voz P2P, compartilhe tela e jogue com a comunidade Memes e Nerds.',
    badge: 'App Oficial & Jogos',
  },
  {
    id: 'discord',
    label: 'Discord Oficial',
    url: MENCORP_CONFIG.links.discordInvite,
    configKey: 'MENCORP_CONFIG.links.discordInvite',
    description:
      'Espaço complementar para avisos, organização de partidas, testes de novas versões e conversa com a comunidade.',
    badge: 'Comunidade',
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
    id: 'contact',
    label: 'Contato Institucional',
    url: MENCORP_CONFIG.links.contactEmail,
    configKey: 'MENCORP_CONFIG.links.contactEmail',
    description:
      'Canal direto para parcerias criativas, sugestões de novos recursos ou assuntos institucionais do MeNCorp.',
    badge: 'Canal Direto',
  },
];
