import React, { useState } from 'react';
import {
  CheckCircle2,
  Crown,
  ExternalLink,
  Eye,
  Layers,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { PLATFORMS_DATA, type PlatformItem } from '../../data/mencorpData';
import { Reveal } from '../animations/Reveal';
import type { InspectableItem } from '../modals/ProjectModal';

interface PlatformsSectionProps {
  onInspect: (item: InspectableItem) => void;
}

const PlatformCard: React.FC<{
  platform: PlatformItem;
  onInspect: (item: InspectableItem) => void;
}> = ({ platform, onInspect }) => {
  const [activeMediaIdx, setActiveMediaIdx] = useState(0);
  const currentMedia = platform.media[activeMediaIdx] || platform.media[0];
  const isTrono = platform.id === 'men-trono';
  const Icon = isTrono ? Crown : MessageSquare;

  return (
    <article
      className={`group relative rounded-3xl overflow-hidden transition-all duration-500 border border-white/10 ${platform.theme.borderGlow} bg-[#0a0a14] flex flex-col h-full shadow-[0_20px_60px_-20px_rgba(0,0,0,0.85)]`}
    >
      {/* Ambient top gradient */}
      <div
        className={`absolute inset-x-0 top-0 h-44 bg-gradient-to-b ${platform.theme.gradientBg} pointer-events-none`}
      />

      {/* Visual Header with Smooth Zoom & Media Switcher */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian-950 border-b border-white/10">
        <img
          src={currentMedia.src}
          alt={currentMedia.alt}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/35 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider backdrop-blur-md border ${platform.theme.badgeBg} ${platform.theme.badgeText}`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{platform.status}</span>
          </span>

          <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-black/70 text-zinc-300 border border-white/15 backdrop-blur-md">
            {currentMedia.label}
          </span>
        </div>

        {/* Media Switcher Pills if multiple images exist */}
        {platform.media.length > 1 && (
          <div className="absolute bottom-3 right-4 flex items-center gap-1.5 z-10">
            {platform.media.map((m, i) => (
              <button
                key={m.src}
                type="button"
                onClick={() => setActiveMediaIdx(i)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono transition-all backdrop-blur-md border ${
                  i === activeMediaIdx
                    ? 'bg-amber-500/25 text-amber-200 border-amber-400/50'
                    : 'bg-black/65 text-zinc-400 border-white/10 hover:text-white'
                }`}
              >
                {m.kind === 'real' ? 'Arte Oficial' : 'Arte Conceitual'}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="relative p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              {platform.subtitle}
            </span>
          </div>

          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-3">
            {platform.name}
          </h3>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
            {platform.description}
          </p>

          {/* Key Highlights */}
          <div className="mb-6">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-3">
              Pilares da Plataforma
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {platform.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-xs sm:text-sm text-zinc-200 bg-white/[0.03] border border-white/5 rounded-xl p-2.5"
                >
                  <CheckCircle2
                    className={`w-4 h-4 shrink-0 mt-0.5 ${
                      isTrono ? 'text-amber-400' : 'text-violet-400'
                    }`}
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical / Ecosystem Role Strip */}
          <div className="flex flex-wrap gap-1.5 mb-7">
            {platform.techHighlights.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono text-zinc-400 bg-white/[0.03] border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          {platform.primaryAction.url ? (
            <a
              id={`platform-cta-${platform.id}`}
              href={platform.primaryAction.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isTrono
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-950/50'
                  : 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-lg shadow-violet-950/50'
              }`}
            >
              <span>{platform.primaryAction.label}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span className="text-xs font-mono text-amber-300">
              Endereço configurável ({platform.primaryAction.configKey})
            </span>
          )}

          <button
            id={`platform-inspect-${platform.id}`}
            type="button"
            onClick={() => onInspect({ type: 'platform', item: platform })}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 transition-all"
          >
            <Eye className="w-4 h-4 text-violet-400" />
            <span>Detalhes &amp; Artes</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export const PlatformsSection: React.FC<PlatformsSectionProps> = ({
  onInspect,
}) => {
  return (
    <section
      id="plataformas"
      aria-labelledby="platforms-heading"
      className="relative py-24 sm:py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 mb-4">
              <Layers className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono uppercase tracking-[0.24em] text-amber-300">
                03 · NOSSOS PRODUTOS E PLATAFORMAS
              </span>
            </div>
            <h2
              id="platforms-heading"
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1] mb-5"
            >
              Ambientes digitais próprios para jogar, conversar e interagir.
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Mais do que jogos isolados, o MeNCorp desenvolve plataformas que
              sustentam partidas estratégicas multiplayer, salas de convivência,
              chamadas em tempo real e comunidades conectadas.
            </p>
          </Reveal>
        </div>

        {/* Two Main Platforms Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PLATFORMS_DATA.map((platform, idx) => (
            <Reveal key={platform.id} delay={idx * 0.12}>
              <PlatformCard platform={platform} onInspect={onInspect} />
            </Reveal>
          ))}
        </div>

        {/* Configurable Endpoints Note */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center justify-between flex-wrap gap-4 px-5 py-4 rounded-2xl bg-white/[0.02] border border-white/10 text-xs text-zinc-400">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
              <span>
                Todos os endereços de acesso às plataformas e repositórios são
                centralizados em <code className="text-violet-300 font-mono">src/data/mencorpData.ts</code>,
                permitindo atualizar domínios ou lançamentos a qualquer momento.
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
