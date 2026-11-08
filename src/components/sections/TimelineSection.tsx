import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, History, SlidersHorizontal } from 'lucide-react';
import { TIMELINE_DATA } from '../../data/mencorpData';
import { Reveal } from '../animations/Reveal';

export const TimelineSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <section
      id="historia"
      aria-labelledby="timeline-heading"
      className="relative py-24 sm:py-32 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 mb-4">
              <History className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono uppercase tracking-[0.24em] text-amber-300">
                05 · NOSSA HISTÓRIA &amp; TRAJETÓRIA
              </span>
            </div>
            <h2
              id="timeline-heading"
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1] mb-5"
            >
              Das primeiras ideias à construção de um ecossistema vivo.
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              O MeNCorp representa uma trajetória contínua de evolução: cada
              experimento, plataforma e universo criado abriu caminho para o
              próximo passo da jornada.
            </p>
          </Reveal>
        </div>

        {/* Horizontal Interactive Phase Selector Bar */}
        <Reveal delay={0.1}>
          <div
            role="tablist"
            aria-label="Fases da história do MeNCorp"
            className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar"
          >
            {TIMELINE_DATA.map((milestone, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <button
                  key={milestone.id}
                  id={`timeline-tab-${milestone.id}`}
                  role="tab"
                  aria-selected={isSelected}
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={`shrink-0 px-4 py-3 rounded-2xl text-left border transition-all duration-300 ${
                    isSelected
                      ? 'bg-gradient-to-r from-violet-600/25 to-amber-500/15 border-violet-400/50 text-white shadow-[0_0_25px_-8px_rgba(139,92,246,0.5)]'
                      : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.05]'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 block">
                    {milestone.period}
                  </span>
                  <span className="text-xs sm:text-sm font-display font-semibold block mt-0.5">
                    {milestone.title.split('&')[0].trim()}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Vertical Interactive Timeline with Luminous Spine */}
        <div className="relative">
          {/* Central/Left Vertical Luminous Line */}
          <div
            className="absolute left-4 lg:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-violet-500/60 via-amber-400/50 to-violet-500/20"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {TIMELINE_DATA.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isSelected = idx === selectedIdx;

              const accentMap = {
                violet: 'border-violet-400/45 text-violet-300 bg-violet-500/15',
                gold: 'border-amber-400/45 text-amber-300 bg-amber-500/15',
                cyan: 'border-sky-400/45 text-sky-300 bg-sky-500/15',
                rose: 'border-rose-400/45 text-rose-300 bg-rose-500/15',
              }[item.accentColor];

              return (
                <Reveal key={item.id} delay={idx * 0.08}>
                  <div
                    onClick={() => setSelectedIdx(idx)}
                    className={`relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center pl-11 lg:pl-0 cursor-pointer group`}
                  >
                    {/* Node Marker on the Spine */}
                    <div
                      className={`absolute left-4 lg:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10 ${
                        isSelected
                          ? 'bg-amber-400 border-white scale-125 shadow-[0_0_18px_#f59e0b]'
                          : 'bg-[#090913] border-violet-400 group-hover:scale-110'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>

                    {/* Text Card Side */}
                    <div
                      className={`lg:col-span-5 ${
                        isEven
                          ? 'lg:col-start-1 lg:text-right'
                          : 'lg:col-start-8 lg:order-2'
                      }`}
                    >
                      <motion.div
                        layout
                        className={`rounded-3xl p-6 sm:p-7 transition-all duration-300 glass-panel ${
                          isSelected
                            ? 'border-violet-400/50 shadow-[0_0_40px_-12px_rgba(139,92,246,0.35)]'
                            : 'hover:border-white/25'
                        }`}
                      >
                        <div
                          className={`flex flex-wrap items-center gap-2 mb-3 ${
                            isEven ? 'lg:justify-end' : 'justify-start'
                          }`}
                        >
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-mono uppercase tracking-wider border ${accentMap}`}
                          >
                            <Clock className="w-3 h-3" />
                            <span>{item.period}</span>
                          </span>
                          {item.isPeriodConfigurable && (
                            <span
                              title="Período configurável em src/data/mencorpData.ts"
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-white/5 border border-white/10"
                            >
                              <SlidersHorizontal className="w-2.5 h-2.5 text-amber-400" />
                              Configurável
                            </span>
                          )}
                        </div>

                        <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                          {item.category}
                        </span>
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                          {item.description}
                        </p>

                        <ul
                          className={`space-y-1.5 text-xs text-zinc-300 ${
                            isEven ? 'lg:items-end' : ''
                          }`}
                        >
                          {item.highlights.map((h) => (
                            <li
                              key={h}
                              className={`flex items-center gap-2 ${
                                isEven ? 'lg:flex-row-reverse' : ''
                              }`}
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    {/* Center Spacer (2 cols on lg) */}
                    <div className="hidden lg:block lg:col-span-2" />

                    {/* Visual Preview Card Side */}
                    <div
                      className={`lg:col-span-5 ${
                        isEven
                          ? 'lg:col-start-8'
                          : 'lg:col-start-1 lg:row-start-1'
                      }`}
                    >
                      <div
                        className={`relative rounded-2xl overflow-hidden border transition-all duration-500 aspect-[16/9] bg-obsidian-950 ${
                          isSelected
                            ? 'border-amber-400/50 shadow-[0_15px_45px_-12px_rgba(245,158,11,0.25)]'
                            : 'border-white/10 opacity-85 group-hover:opacity-100'
                        }`}
                      >
                        <img
                          src={item.visualAsset}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07070f] via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-black/75 text-zinc-200 border border-white/15 backdrop-blur-md">
                            Marco 0{idx + 1} · {item.category}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/70 text-zinc-300 border border-white/10">
                            {item.assetKind === 'real'
                              ? 'Acervo do Projeto'
                              : 'Arte Conceitual'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
