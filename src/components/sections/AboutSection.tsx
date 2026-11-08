import React from 'react';
import {
  Cpu,
  Gamepad2,
  Globe2,
  Layers,
  MessageSquareShare,
  Sparkles,
} from 'lucide-react';
import { ABOUT_PILLARS, MENCORP_CONFIG } from '../../data/mencorpData';
import { Reveal } from '../animations/Reveal';

const ICON_MAP = {
  Gamepad2,
  Layers,
  MessageSquareShare,
  Globe2,
  Cpu,
  Sparkles,
} as const;

export const AboutSection: React.FC = () => {
  return (
    <section
      id="quem-somos"
      aria-labelledby="about-heading"
      className="relative py-24 sm:py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Institutional Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                <span className="text-xs font-mono uppercase tracking-[0.24em] text-violet-300">
                  02 · QUEM SOMOS &amp; FILOSOFIA
                </span>
              </div>
              <h2
                id="about-heading"
                className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]"
              >
                {MENCORP_CONFIG.brand.aboutHeadline}
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                O <strong className="text-white font-semibold">MeNCorp</strong> reúne
                diferentes iniciativas criativas e tecnológicas sob uma mesma visão:
                transformar anos de experimentação, aprendizado e engenharia em
                universos próprios, plataformas funcionais e experiências que
                conectam pessoas.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Core Pillars Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ABOUT_PILLARS.map((pillar, index) => {
            const IconComponent = ICON_MAP[pillar.iconName];
            const isGold = pillar.accent === 'gold';

            return (
              <Reveal key={pillar.id} delay={index * 0.07}>
                <article
                  className={`group relative h-full rounded-2xl p-6 sm:p-7 transition-all duration-300 glass-panel hover:-translate-y-1 ${
                    isGold
                      ? 'hover:border-amber-400/40'
                      : 'hover:border-violet-400/45'
                  }`}
                >
                  {/* Subtle top corner index */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors duration-300 ${
                        isGold
                          ? 'bg-amber-500/10 border-amber-400/30 text-amber-300 group-hover:bg-amber-500/20'
                          : 'bg-violet-500/15 border-violet-400/30 text-violet-300 group-hover:bg-violet-500/25'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-violet-100 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Bottom subtle luminous bar */}
                  <div
                    className={`mt-6 h-[2px] w-12 group-hover:w-full transition-all duration-500 rounded-full ${
                      isGold
                        ? 'bg-gradient-to-r from-amber-400/70 to-transparent'
                        : 'bg-gradient-to-r from-violet-400/70 to-transparent'
                    }`}
                  />
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Institutional Essence Callout Banner */}
        <Reveal delay={0.25}>
          <div className="mt-12 rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-r from-violet-950/40 via-[#0e0c1d] to-amber-950/20 border border-violet-500/25 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-300 block mb-2">
                IDENTIDADE &amp; PROPÓSITO
              </span>
              <p className="font-display text-lg sm:text-xl text-zinc-100 leading-snug">
                Cada projeto do ecossistema MeNCorp nasce com identidade própria —
                combinando direção artística dedicada, arquitetura de software
                moderna e evolução contínua guiada pela experiência real de uso.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <span className="px-3.5 py-2 rounded-xl text-xs font-mono text-violet-200 bg-violet-500/15 border border-violet-400/30">
                GRANDEZA
              </span>
              <span className="px-3.5 py-2 rounded-xl text-xs font-mono text-purple-200 bg-purple-500/15 border border-purple-400/30">
                CRIATIVIDADE
              </span>
              <span className="px-3.5 py-2 rounded-xl text-xs font-mono text-amber-200 bg-amber-500/15 border border-amber-400/30">
                EVOLUÇÃO
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
