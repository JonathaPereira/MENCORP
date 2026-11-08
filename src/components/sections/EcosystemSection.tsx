import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  Gamepad2,
  GitBranch,
  Layers,
  MessageSquare,
  Network,
  Sparkles,
} from 'lucide-react';
import { ECOSYSTEM_DOMAINS } from '../../data/mencorpData';
import { Reveal } from '../animations/Reveal';
import { MeNCorpLogo } from '../brand/MeNCorpLogo';

const DOMAIN_ICONS = [Layers, MessageSquare, Gamepad2, GitBranch, Sparkles];

export const EcosystemSection: React.FC = () => {
  const [activeDomainId, setActiveDomainId] = useState<string>(
    ECOSYSTEM_DOMAINS[0].id
  );

  const activeDomain =
    ECOSYSTEM_DOMAINS.find((d) => d.id === activeDomainId) ||
    ECOSYSTEM_DOMAINS[0];

  return (
    <section
      id="ecossistema"
      aria-labelledby="ecosystem-heading"
      className="relative py-24 sm:py-32 border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 mb-4">
              <Network className="w-4 h-4 text-violet-400" />
              <span className="text-xs font-mono uppercase tracking-[0.24em] text-violet-300">
                06 · NOSSO ECOSSISTEMA CONECTADO
              </span>
            </div>
            <h2
              id="ecosystem-heading"
              className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1] mb-5"
            >
              O MeNCorp como núcleo central de múltiplas experiências.
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Plataformas, canais de comunicação, jogos originais, títulos
              incorporados e novos experimentos não existem de forma isolada —
              eles convergem em uma arquitetura pensada para evoluir em conjunto.
            </p>
          </Reveal>
        </div>

        {/* Interactive Ecosystem Map + Detail Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left/Center: Interactive Visual Node Network (7 cols) */}
          <Reveal className="lg:col-span-7">
            {/* Mobile-Dedicated Connected Hub Layout (< sm) */}
            <div className="sm:hidden rounded-3xl glass-panel p-5 border border-violet-500/25">
              <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#0b0918] border border-violet-400/50 shadow-[0_0_35px_-5px_rgba(139,92,246,0.45)] mb-4">
                <MeNCorpLogo size="sm" />
                <span className="mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-widest bg-amber-500/15 text-amber-300 border border-amber-400/30">
                  NÚCLEO CENTRAL CONECTADO
                </span>
              </div>

              <div className="relative pl-5 space-y-2.5 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-violet-500 before:via-amber-400 before:to-emerald-400">
                {ECOSYSTEM_DOMAINS.map((domain, index) => {
                  const Icon = DOMAIN_ICONS[index % DOMAIN_ICONS.length] || Cpu;
                  const isSelected = domain.id === activeDomainId;
                  return (
                    <button
                      key={domain.id}
                      type="button"
                      onClick={() => setActiveDomainId(domain.id)}
                      className={`relative w-full flex items-center justify-between p-3 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? 'bg-[#131026] border-amber-400/60 text-white shadow-md'
                          : 'bg-[#0b0b16]/90 border-white/10 text-zinc-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: `${domain.accentColor}22`,
                            color: domain.accentColor,
                          }}
                        >
                          <Icon className="w-4 h-4" />
                        </span>
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                            Eixo 0{index + 1}
                          </span>
                          <span className="text-sm font-display font-semibold block">
                            {domain.title}
                          </span>
                        </div>
                      </div>
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: domain.accentColor }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tablet & Desktop 2D Orbital Network Diagram (sm+) */}
            <div className="hidden sm:flex relative rounded-3xl glass-panel p-6 sm:p-8 border border-violet-500/25 overflow-hidden min-h-[500px] items-center justify-center">
              {/* Background Subtle Orbital Rings */}
              <div
                className="absolute w-[340px] h-[340px] rounded-full border border-violet-500/15 pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute w-[450px] h-[450px] rounded-full border border-dashed border-amber-400/15 pointer-events-none"
                aria-hidden="true"
              />

              {/* Animated SVG Luminous Connections from Center (50,50) to each Domain Node */}
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none"
                aria-hidden="true"
              >
                {ECOSYSTEM_DOMAINS.map((domain) => {
                  const isCurrent = domain.id === activeDomainId;
                  return (
                    <g key={domain.id}>
                      <line
                        x1="50"
                        y1="48"
                        x2={domain.coordinates.x}
                        y2={domain.coordinates.y}
                        stroke={
                          isCurrent
                            ? domain.accentColor
                            : 'rgba(139, 92, 246, 0.24)'
                        }
                        strokeWidth={isCurrent ? '0.75' : '0.35'}
                        strokeDasharray={isCurrent ? 'none' : '1.5 1.5'}
                      />
                      {isCurrent && (
                        <motion.circle
                          r="1.3"
                          fill={domain.accentColor}
                          initial={{ cx: 50, cy: 48 }}
                          animate={{
                            cx: [50, domain.coordinates.x, 50],
                            cy: [48, domain.coordinates.y, 48],
                          }}
                          transition={{
                            duration: 3.2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Central Nucleus: MeNCorp Core */}
              <div className="relative z-20 flex flex-col items-center justify-center p-5 sm:p-6 rounded-3xl bg-[#0b0918]/95 border-2 border-violet-400/50 shadow-[0_0_60px_-5px_rgba(139,92,246,0.55)]">
                <MeNCorpLogo size="sm" />
                <span className="mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-widest bg-amber-500/15 text-amber-300 border border-amber-400/30">
                  NÚCLEO CENTRAL
                </span>
              </div>

              {/* Surrounding Interactive Domain Nodes */}
              {ECOSYSTEM_DOMAINS.map((domain, index) => {
                const Icon = DOMAIN_ICONS[index % DOMAIN_ICONS.length] || Cpu;
                const isSelected = domain.id === activeDomainId;

                return (
                  <button
                    key={domain.id}
                    id={`ecosystem-node-${domain.id}`}
                    type="button"
                    onClick={() => setActiveDomainId(domain.id)}
                    onMouseEnter={() => setActiveDomainId(domain.id)}
                    style={{
                      left: `${domain.coordinates.x}%`,
                      top: `${domain.coordinates.y}%`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl border text-left transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#131026] border-amber-400/70 text-white scale-105 shadow-[0_0_30px_-5px_rgba(245,158,11,0.4)]'
                        : 'bg-[#0b0b16]/90 border-white/15 text-zinc-300 hover:border-violet-400/50 hover:text-white'
                    }`}
                    aria-pressed={isSelected}
                  >
                    <span
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: `${domain.accentColor}22`,
                        color: domain.accentColor,
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <div className="pr-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block leading-none mb-0.5">
                        0{index + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-display font-semibold whitespace-nowrap block leading-tight">
                        {domain.shortTitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Right Column: Active Ecosystem Node Deep-Dive Panel (5 cols) */}
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="rounded-3xl glass-panel p-6 sm:p-8 border border-white/10">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span
                  className="px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider border"
                  style={{
                    backgroundColor: `${activeDomain.accentColor}18`,
                    borderColor: `${activeDomain.accentColor}55`,
                    color: activeDomain.accentColor,
                  }}
                >
                  {activeDomain.subtitle}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  Conexão Ativa
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                {activeDomain.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                {activeDomain.description}
              </p>

              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                  Iniciativas &amp; Projetos Conectados a este Eixo
                </span>
                <div className="space-y-2.5">
                  {activeDomain.connectedProjects.map((proj) => (
                    <div
                      key={proj}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/10"
                    >
                      <span className="text-sm font-medium text-white">
                        {proj}
                      </span>
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: activeDomain.accentColor }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Domain Quick Switcher Pills for Mobile & Accessibility */}
              <div className="pt-5 border-t border-white/10">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2.5">
                  Alternar Eixo do Ecossistema:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {ECOSYSTEM_DOMAINS.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setActiveDomainId(d.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        d.id === activeDomainId
                          ? 'bg-violet-600 text-white'
                          : 'bg-white/5 text-zinc-400 hover:text-white'
                      }`}
                    >
                      {d.shortTitle}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
