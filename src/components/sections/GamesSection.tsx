import React, { useState } from 'react';
import {
  CheckCircle2,
  ExternalLink,
  Eye,
  Flame,
  Gamepad2,
  Gem,
  Grid,
  PlusCircle,
  ShieldAlert,
  Sparkles,
  Swords,
} from 'lucide-react';
import {
  INCORPORATED_GAMES_DATA,
  ORIGINAL_GAMES_DATA,
  type OriginalGameItem,
} from '../../data/mencorpData';
import { Reveal } from '../animations/Reveal';
import type { InspectableItem } from '../modals/ProjectModal';

interface GamesSectionProps {
  onInspect: (item: InspectableItem) => void;
}

const OriginalGameShowcase: React.FC<{
  game: OriginalGameItem;
  index: number;
  onInspect: (item: InspectableItem) => void;
}> = ({ game, index, onInspect }) => {
  const [activeMediaIdx, setActiveMediaIdx] = useState(0);
  const currentMedia = game.media[activeMediaIdx] || game.media[0];
  const isReversed = index % 2 === 1;

  const ThemeIcon =
    game.id === 'cinzas-do-abismo'
      ? Flame
      : game.id === 'atalaia'
      ? ShieldAlert
      : Gem;

  return (
    <article
      id={`game-card-${game.id}`}
      className={`group relative rounded-[28px] overflow-hidden border transition-all duration-500 ${game.visualIdentity.cardBgGradient} ${game.visualIdentity.borderStyle} ${game.visualIdentity.glowStyle}`}
    >
      {/* Bespoke Thematic Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-3.5 border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <ThemeIcon
            className="w-4 h-4"
            style={{ color: game.visualIdentity.primaryColor }}
          />
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-200">
            {game.genreBadge}
          </span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span className="hidden sm:inline text-[11px] font-mono text-zinc-400">
            Identidade Visual: {game.visualIdentity.themeName}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`px-3 py-0.5 rounded-md text-[11px] font-mono uppercase tracking-wider border ${game.visualIdentity.badgeStyle}`}
          >
            {game.status}
          </span>
        </div>
      </div>

      {/* Main Content Layout */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch ${
          isReversed ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Visual Stage Column (7 cols) */}
        <div
          className={`lg:col-span-7 relative flex flex-col justify-between bg-obsidian-950/90 border-b lg:border-b-0 ${
            isReversed
              ? 'lg:order-2 lg:border-l border-white/10'
              : 'lg:order-1 lg:border-r border-white/10'
          }`}
        >
          {/* Main Selected Artwork / Gameplay Capture */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
            <img
              src={currentMedia.src}
              alt={currentMedia.alt}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* Media Type Badge (Real vs Concept Art transparency) */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span
                className={`px-3 py-1 rounded-lg text-[11px] font-mono uppercase tracking-wider backdrop-blur-md border ${
                  currentMedia.kind === 'real'
                    ? 'bg-emerald-950/85 text-emerald-300 border-emerald-400/40'
                    : 'bg-violet-950/85 text-violet-200 border-violet-400/40'
                }`}
              >
                {currentMedia.label}
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-4">
              <p className="text-xs text-zinc-200 bg-black/65 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 max-w-xl">
                {currentMedia.caption}
              </p>
            </div>
          </div>

          {/* Interactive Media Gallery Strip */}
          <div className="p-4 bg-black/50 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {game.media.map((m, mIdx) => {
                const isSelected = mIdx === activeMediaIdx;
                return (
                  <button
                    key={m.src}
                    type="button"
                    onClick={() => setActiveMediaIdx(mIdx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                      isSelected
                        ? 'bg-white/15 text-white border-white/40 shadow-sm'
                        : 'bg-white/[0.03] text-zinc-400 border-white/5 hover:text-zinc-200 hover:bg-white/[0.07]'
                    }`}
                  >
                    {m.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => onInspect({ type: 'game', item: game })}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Tela Cheia</span>
            </button>
          </div>
        </div>

        {/* Game Details & Thematic Identity Column (5 cols) */}
        <div
          className={`lg:col-span-5 p-6 sm:p-8 lg:p-9 flex flex-col justify-between ${
            isReversed ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div>
            {/* Distinct Typography per Game Universe */}
            <div className="mb-4">
              <span
                className="text-xs font-mono uppercase tracking-widest block mb-1.5"
                style={{ color: game.visualIdentity.primaryColor }}
              >
                TÍTULO ORIGINAL MENCORP GAMES
              </span>
              <h3
                className={`${game.visualIdentity.fontClass} font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight`}
              >
                {game.title}
              </h3>
              <p className="text-sm sm:text-base font-medium text-zinc-200 mt-1.5">
                {game.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
              {game.description}
            </p>

            {/* Game Highlights List */}
            <div className="mb-6">
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                Elementos Essenciais do Universo
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {game.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/35 border border-white/10 text-xs sm:text-sm text-zinc-200"
                  >
                    <CheckCircle2
                      className="w-4 h-4 shrink-0"
                      style={{ color: game.visualIdentity.primaryColor }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Game-Specific Mechanics Telemetry Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-2.5 mb-7">
              {game.mechanicsPreview.map((mech) => (
                <div
                  key={mech.label}
                  className="p-3 rounded-xl bg-black/45 border border-white/10"
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                    {mech.label}
                  </span>
                  <strong className="text-xs sm:text-sm font-display text-white block mt-0.5">
                    {mech.value}
                  </strong>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                    {mech.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2.5">
              {game.primaryAction.url && (
                <a
                  id={`game-cta-${game.id}`}
                  href={game.primaryAction.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${game.visualIdentity.buttonStyle}`}
                >
                  <span>{game.primaryAction.label}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {game.secondaryAction && (
                <a
                  href={game.secondaryAction.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl text-xs font-mono text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/30 transition-all"
                >
                  <span>{game.secondaryAction.label}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              id={`game-inspect-${game.id}`}
              type="button"
              onClick={() => onInspect({ type: 'game', item: game })}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-mono uppercase tracking-wider text-zinc-200 bg-white/[0.05] hover:bg-white/[0.12] border border-white/15 transition-all"
            >
              <Eye className="w-4 h-4" />
              <span>Galeria</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export const GamesSection: React.FC<GamesSectionProps> = ({ onInspect }) => {
  return (
    <section
      id="games"
      aria-labelledby="games-heading"
      className="relative py-24 sm:py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 mb-4">
                <Gamepad2 className="w-4 h-4 text-violet-400" />
                <span className="text-xs font-mono uppercase tracking-[0.24em] text-violet-300">
                  04 · MENCORP GAMES / NOSSO UNIVERSO DE JOGOS
                </span>
              </div>
              <h2
                id="games-heading"
                className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.08]"
              >
                Mundos originais construídos com personalidade e direção própria.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <p className="text-sm sm:text-base text-zinc-300 max-w-md leading-relaxed">
              Cada título original do <strong className="text-white">MeNCorp Games</strong>{' '}
              possui estética, atmosfera e sistemas exclusivos — da sobrevivência
              abissal à defesa estratégica e ao combate tático por turnos.
            </p>
          </Reveal>
        </div>

        {/* Part 1: Original Titles Developed by MeNCorp */}
        <div className="mb-8 flex items-center justify-between">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-violet-500/10 border border-violet-500/30">
            <Swords className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-violet-200">
              Títulos Originais Desenvolvidos pelo MeNCorp
            </span>
          </div>
        </div>

        <div className="space-y-12 mb-24">
          {ORIGINAL_GAMES_DATA.map((game, index) => (
            <Reveal key={game.id} delay={index * 0.1}>
              <OriginalGameShowcase
                game={game}
                index={index}
                onInspect={onInspect}
              />
            </Reveal>
          ))}
        </div>

        {/* Part 2: Clearly Separated Section for Published, Distributed, or Incorporated Games */}
        <div className="pt-16 border-t border-white/10">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-400/30 mb-4">
                  <Grid className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300">
                    Catálogo Distribuído &amp; Incorporado ao Ecossistema
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                  Jogos Incorporados, Publicados e Adaptações no MN Trono
                </h3>
              </div>
              <p className="text-sm text-zinc-400 max-w-xl leading-relaxed">
                Separados claramente das criações autorais do{' '}
                <strong className="text-zinc-200">MeNCorp Games</strong>, esta área
                reúne adaptações digitais integradas aos salões multiplayer do{' '}
                <strong className="text-amber-300">MN Trono</strong> e mantém
                estrutura modular pronta para a inclusão de novos títulos.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INCORPORATED_GAMES_DATA.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.06}>
                <article
                  className={`h-full rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                    item.isTemplateSlot
                      ? 'border border-dashed border-violet-500/35 bg-violet-950/10 hover:bg-violet-950/20 p-6'
                      : 'glass-panel hover:border-amber-400/40'
                  }`}
                >
                  {item.isTemplateSlot ? (
                    <div className="flex flex-col justify-between h-full">
                      <div>
                        <div className="w-11 h-11 rounded-xl bg-violet-500/15 border border-violet-400/30 flex items-center justify-center text-violet-300 mb-4">
                          <PlusCircle className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-violet-300 block mb-1">
                          {item.category}
                        </span>
                        <h4 className="font-display font-bold text-lg text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                        <span>INCORPORATED_GAMES_DATA</span>
                        <span className="text-amber-300 flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> Pronto para expansão
                        </span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        {item.coverImage && (
                          <div className="relative h-40 w-full overflow-hidden bg-obsidian-950 border-b border-white/10">
                            <img
                              src={item.coverImage}
                              alt={item.title}
                              loading="lazy"
                              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b16] via-transparent to-transparent" />
                            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-black/75 text-amber-300 border border-amber-400/30 backdrop-blur-md">
                              {item.category}
                            </span>
                          </div>
                        )}
                        <div className="p-5">
                          <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                            {item.originNote}
                          </span>
                          <h4 className="font-display font-bold text-lg text-white mb-2">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="px-5 pb-5 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded text-[10px] font-mono text-zinc-300 bg-white/5"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        {item.playUrl ? (
                          <a
                            href={item.playUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono text-amber-300 hover:text-amber-200 transition-colors"
                          >
                            <span>Abrir no {item.hostPlatform}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="text-[10px] font-mono text-violet-300">
                            {item.hostPlatform}
                          </span>
                        )}
                      </div>
                    </>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
