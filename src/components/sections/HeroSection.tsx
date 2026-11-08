import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Compass,
  Gamepad2,
  History,
  Layers,
  MessageSquare,
  Shield,
  Sparkles,
  Swords,
} from 'lucide-react';
import { MENCORP_CONFIG } from '../../data/mencorpData';

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

const HERO_SHOWCASE_UNIVERSES = [
  {
    id: 'men-trono',
    tag: 'APP DE COMUNICAÇÃO & JOGOS',
    title: 'MN Trono · A Lei do Trono',
    subtitle: 'Chat de voz P2P, compartilhamento de tela, alianças e vários jogos online.',
    image: 'assets/real/throne-cover.webp',
    accent: 'from-amber-500/30 via-violet-900/30 to-obsidian-950',
    border: 'border-amber-400/40',
    badge: 'text-amber-300 bg-amber-500/15 border-amber-400/30',
    targetSection: 'plataformas',
    liveUrl: MENCORP_CONFIG.links.mnTronoMaster,
    icon: Shield,
  },
  {
    id: 'cinzas',
    tag: 'MENCORP GAMES · AÇÃO & SOBREVIVÊNCIA',
    title: 'Cinzas do Abismo',
    subtitle: 'Combate intenso, arsenal evolutivo e sobrevivência em um mundo hostil.',
    image: 'assets/real/cinzas-cover.webp',
    accent: 'from-orange-600/30 via-red-950/30 to-obsidian-950',
    border: 'border-orange-400/40',
    badge: 'text-orange-300 bg-orange-500/15 border-orange-400/30',
    targetSection: 'games',
    liveUrl: MENCORP_CONFIG.links.cinzasLive,
    icon: Swords,
  },
  {
    id: 'atalaia',
    tag: 'MENCORP GAMES · TOWER DEFENSE',
    title: 'Atalaia: Guardiões do Cristal',
    subtitle: 'Defesa estratégica do Cristal, doutrinas de torres e evolução contínua.',
    image: 'assets/real/atalaia-gameplay.webp',
    accent: 'from-sky-500/30 via-amber-900/20 to-obsidian-950',
    border: 'border-sky-400/40',
    badge: 'text-sky-300 bg-sky-500/15 border-sky-400/30',
    targetSection: 'games',
    liveUrl: MENCORP_CONFIG.links.atalaiaLive,
    icon: Sparkles,
  },
  {
    id: 'nexus',
    tag: 'MENCORP GAMES · RPG TÁTICO',
    title: 'NEXUS · Ecos do Crepúsculo',
    subtitle: 'Classes, sinergias de equipe, oficina de gemas e batalhas estratégicas.',
    image: 'assets/real/nexus-cover.webp',
    accent: 'from-purple-500/30 via-cyan-950/30 to-obsidian-950',
    border: 'border-purple-400/40',
    badge: 'text-purple-200 bg-purple-500/15 border-purple-400/30',
    targetSection: 'games',
    liveUrl: MENCORP_CONFIG.links.nexusLive,
    icon: Gamepad2,
  },
  {
    id: 'menchat',
    tag: 'COMUNIDADE & COMUNICAÇÃO',
    title: 'MenChat',
    subtitle: 'Conversas, salas, chamadas de áudio e vídeo integradas ao ecossistema.',
    image: 'assets/concept/menchat-concept.webp',
    accent: 'from-violet-600/30 via-fuchsia-950/30 to-obsidian-950',
    border: 'border-violet-400/40',
    badge: 'text-violet-200 bg-violet-500/15 border-violet-400/30',
    targetSection: 'plataformas',
    liveUrl: MENCORP_CONFIG.links.menChatLive,
    icon: MessageSquare,
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const prefersReducedMotion = useReducedMotion();
  const [activeUniverseIdx, setActiveUniverseIdx] = useState(0);
  const activeUniverse = HERO_SHOWCASE_UNIVERSES[activeUniverseIdx];

  const getEntryProps = (delaySec: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.6,
            delay: delaySec,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <section
      id="inicio"
      aria-label="Apresentação institucional MeNCorp"
      className="relative min-h-screen flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Cinematic architectural light beams */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[540px] opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.36) 0%, rgba(245, 158, 11, 0.08) 45%, transparent 75%)',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#06060b] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* Left Column: Institutional Manifesto & CTAs */}
          <div className="lg:col-span-7 text-left">
            {/* Institutional Eyebrow */}
            <motion.div
              {...getEntryProps(0.02)}
              className="inline-flex flex-wrap items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6"
            >
              <span className="px-3 py-1 rounded-md text-[11px] font-mono uppercase tracking-[0.22em] text-amber-300 bg-amber-500/10 border border-amber-400/25">
                MENCORP OFFICIAL
              </span>
              <span className="hidden sm:inline-block h-[1px] w-8 bg-gradient-to-r from-amber-400/50 to-violet-500/50" />
              <span className="text-[11px] sm:text-xs font-mono tracking-wider text-zinc-300 uppercase">
                Tecnologia · Jogos · Experiências
              </span>
            </motion.div>

            {/* Primary Hero H1 */}
            <motion.h1
              {...getEntryProps(0.08)}
              className="font-display font-bold text-3xl sm:text-5xl md:text-6xl xl:text-[4.1rem] tracking-tight text-white leading-[1.08] mb-5 sm:mb-6"
            >
              Mais que projetos.{' '}
              <span className="block mt-1 text-violet-200 text-glow-violet">
                Uma corporação de ideias.
              </span>
            </motion.h1>

            {/* Institutional Presentation Text */}
            <motion.p
              {...getEntryProps(0.14)}
              className="text-sm sm:text-lg md:text-xl text-zinc-200 leading-relaxed max-w-2xl mb-8 sm:mb-9 font-normal"
            >
              {MENCORP_CONFIG.brand.heroDescription}
            </motion.p>

            {/* Primary CTA Buttons */}
            <motion.div
              {...getEntryProps(0.2)}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10 sm:mb-12"
            >
              <button
                id="hero-cta-projects"
                type="button"
                onClick={() => onNavigate('plataformas')}
                className="group inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-violet-700 hover:from-violet-500 hover:to-purple-500 border border-violet-400/40 shadow-[0_0_35px_-6px_rgba(139,92,246,0.65)] transition-all duration-300"
              >
                <Compass className="w-5 h-5 text-amber-300 transition-transform duration-300 group-hover:rotate-12" />
                <span>Explore nossos projetos</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                id="hero-cta-history"
                type="button"
                onClick={() => onNavigate('historia')}
                className="group inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base font-semibold text-zinc-100 bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-amber-400/40 transition-all duration-300"
              >
                <History className="w-5 h-5 text-violet-400 group-hover:text-amber-300 transition-colors" />
                <span>Conheça nossa história</span>
              </button>
            </motion.div>

            {/* Ecosystem Pillars Strip */}
            <motion.div
              {...getEntryProps(0.26)}
              className="pt-6 sm:pt-7 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xl"
            >
              <div className="p-3 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-300 mb-1">
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  <span>Plataformas</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Men Trono &amp; MenChat integrados
                </p>
              </div>

              <div className="p-3 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-300 mb-1">
                  <Gamepad2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Jogos Autorais</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Cinzas, Atalaia &amp; Nexus
                </p>
              </div>

              <div className="p-3 sm:p-0 rounded-xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-0">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-violet-300 mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Ecossistema</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300">
                  Comunidade e evolução contínua
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Ecosystem Portal Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl p-1.5 bg-gradient-to-b from-violet-500/30 via-white/10 to-amber-500/20 shadow-[0_25px_80px_-15px_rgba(124,58,237,0.35)]">
              <div className="relative rounded-[22px] bg-[#090913] overflow-hidden border border-white/10">
                {/* Top Window Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0d0d1a]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300">
                      NÚCLEO DO ECOSSISTEMA MENCORP
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-violet-300">
                    0{activeUniverseIdx + 1} / 0{HERO_SHOWCASE_UNIVERSES.length}
                  </span>
                </div>

                {/* Main Visual Viewport */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian-950">
                  <img
                    key={activeUniverse.id}
                    src={activeUniverse.image}
                    alt={activeUniverse.title}
                    className="w-full h-full object-cover object-center transition-all duration-700 scale-[1.02] hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${activeUniverse.accent} opacity-75`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090913] via-[#090913]/35 to-transparent" />

                  {/* Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider border mb-2.5 ${activeUniverse.badge}`}
                    >
                      {activeUniverse.tag}
                    </span>
                    <h2 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight mb-1">
                      {activeUniverse.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 mb-4">
                      {activeUniverse.subtitle}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href={activeUniverse.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider bg-amber-400 text-slate-950 font-semibold hover:bg-amber-300 transition-colors"
                      >
                        <span>Abrir Página Oficial</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                      <button
                        type="button"
                        onClick={() => onNavigate(activeUniverse.targetSection)}
                        className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-violet-200 hover:text-white transition-colors"
                      >
                        <span>Ver na página</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Interactive Universe Switcher Tabs */}
                <div className="p-3 bg-[#0b0b16] border-t border-white/10 grid grid-cols-5 gap-1.5">
                  {HERO_SHOWCASE_UNIVERSES.map((u, idx) => {
                    const Icon = u.icon;
                    const isSelected = idx === activeUniverseIdx;
                    return (
                      <button
                        key={u.id}
                        id={`hero-universe-tab-${u.id}`}
                        type="button"
                        onClick={() => setActiveUniverseIdx(idx)}
                        className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl border text-center transition-all ${
                          isSelected
                            ? 'bg-violet-600/20 border-violet-400/50 text-white shadow-inner'
                            : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.05]'
                        }`}
                        aria-label={`Visualizar ${u.title}`}
                        aria-pressed={isSelected}
                      >
                        <Icon
                          className={`w-4 h-4 mb-1 ${
                            isSelected ? 'text-amber-300' : 'text-zinc-500'
                          }`}
                        />
                        <span className="text-[10px] font-medium truncate w-full px-1">
                          {u.title.split(':')[0].split('·')[0].trim()}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
