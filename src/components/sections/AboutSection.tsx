import React from 'react';
import {
  Cpu,
  Gamepad2,
  Globe2,
  Layers,
  MessageSquareShare,
  Sparkles,
  Users,
  Wand2,
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
  const { biography } = MENCORP_CONFIG.brand;

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
                  02 · QUEM SOMOS &amp; NOSSA ORIGEM
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
                transformar amizade, experimentação e engenharia em universos
                próprios, plataformas de comunicação e experiências multiplayer.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Official Biography Showcase Card */}
        <Reveal delay={0.12}>
          <div className="mb-16 rounded-3xl p-6 sm:p-10 lg:p-12 glass-panel border border-violet-500/30 shadow-[0_20px_70px_-15px_rgba(124,58,237,0.3)] relative overflow-hidden">
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-amber-500/10 blur-[90px] pointer-events-none"
              aria-hidden="true"
            />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Narrative Text */}
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-[11px] font-mono uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-400/30">
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>{biography.badge}</span>
                </span>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-snug">
                  {biography.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                  {biography.paragraph1}
                </p>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {biography.paragraph2}
                </p>
              </div>

              {/* Right Protagonists & Foundation Pillars */}
              <div className="lg:col-span-5 space-y-3.5">
                {biography.keyPeople.map((person, idx) => (
                  <div
                    key={person.name}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                      idx === 0
                        ? 'bg-amber-500/10 border-amber-400/35'
                        : idx === 1
                        ? 'bg-violet-500/12 border-violet-400/35'
                        : 'bg-sky-500/10 border-sky-400/30'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <strong className="font-display font-bold text-base sm:text-lg text-white">
                        {person.name}
                      </strong>
                      <Users className="w-4 h-4 text-amber-300 shrink-0" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-wider text-violet-200 block mb-1.5">
                      {person.role}
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {person.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Core Pillars Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ABOUT_PILLARS.map((pillar, index) => {
            const IconComponent = ICON_MAP[pillar.iconName];
            const isGold = pillar.accent === 'gold';

            return (
              <Reveal key={pillar.id} delay={index * 0.06}>
                <article
                  className={`group relative h-full rounded-2xl p-6 sm:p-7 transition-all duration-300 glass-panel hover:-translate-y-1 ${
                    isGold
                      ? 'hover:border-amber-400/40'
                      : 'hover:border-violet-400/45'
                  }`}
                >
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
      </div>
    </section>
  );
};
