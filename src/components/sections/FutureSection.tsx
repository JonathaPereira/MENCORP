import React, { useState } from 'react';
import {
  CheckCircle2,
  Compass,
  Flame,
  Hammer,
  Rocket,
  Sparkles,
} from 'lucide-react';
import {
  MENCORP_CONFIG,
  ROADMAP_INITIATIVES,
  type ProjectStatus,
} from '../../data/mencorpData';
import { Reveal } from '../animations/Reveal';

const STATUS_CONFIG: Record<
  ProjectStatus,
  {
    badgeClass: string;
    dotClass: string;
    icon: React.FC<{ className?: string }>;
  }
> = {
  Disponível: {
    badgeClass: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/35',
    dotClass: 'bg-emerald-400 shadow-[0_0_8px_#34d399]',
    icon: CheckCircle2,
  },
  'Em evolução': {
    badgeClass: 'bg-amber-500/15 text-amber-300 border-amber-400/35',
    dotClass: 'bg-amber-400 shadow-[0_0_8px_#fbbf24]',
    icon: Flame,
  },
  'Em desenvolvimento': {
    badgeClass: 'bg-violet-500/15 text-violet-200 border-violet-400/35',
    dotClass: 'bg-violet-400 shadow-[0_0_8px_#a78bfa]',
    icon: Hammer,
  },
  'Em planejamento': {
    badgeClass: 'bg-sky-500/15 text-sky-300 border-sky-400/35',
    dotClass: 'bg-sky-400 shadow-[0_0_8px_#38bdf8]',
    icon: Compass,
  },
};

const ALL_STATUSES: ('Todos' | ProjectStatus)[] = [
  'Todos',
  'Disponível',
  'Em evolução',
  'Em desenvolvimento',
  'Em planejamento',
];

export const FutureSection: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<'Todos' | ProjectStatus>(
    'Todos'
  );

  const filteredItems =
    selectedStatus === 'Todos'
      ? ROADMAP_INITIATIVES
      : ROADMAP_INITIATIVES.filter((item) => item.status === selectedStatus);

  return (
    <section
      id="futuro"
      aria-labelledby="future-heading"
      className="relative py-24 sm:py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 mb-4">
                <Rocket className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono uppercase tracking-[0.24em] text-amber-300">
                  07 · O QUE VEM PELA FRENTE
                </span>
              </div>
              <h2
                id="future-heading"
                className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.1]"
              >
                {MENCORP_CONFIG.brand.futureHeadline}
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                {MENCORP_CONFIG.brand.futureDescription}
              </p>
            </Reveal>
          </div>
        </div>

        {/* Status Indicator Legend & Interactive Filter Bar */}
        <Reveal delay={0.15}>
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/10 mb-10">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span>Indicadores de Status do Ecossistema:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {ALL_STATUSES.map((status) => {
                const isSelected = selectedStatus === status;
                return (
                  <button
                    key={status}
                    id={`future-filter-${status.toLowerCase().replace(/\s+/g, '-')}`}
                    type="button"
                    onClick={() => setSelectedStatus(status)}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                      isSelected
                        ? 'bg-violet-600/25 text-white border-violet-400/50 shadow-sm'
                        : 'bg-white/[0.03] text-zinc-400 border-white/10 hover:text-zinc-200'
                    }`}
                  >
                    {status !== 'Todos' && (
                      <span
                        className={`w-2 h-2 rounded-full ${STATUS_CONFIG[status].dotClass}`}
                      />
                    )}
                    <span>{status}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Initiatives Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const st = STATUS_CONFIG[item.status];
            const StatusIcon = st.icon;

            return (
              <Reveal key={item.id} delay={idx * 0.06}>
                <article className="h-full rounded-2xl glass-panel p-6 sm:p-7 flex flex-col justify-between hover:border-violet-400/40 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                        {item.area}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono border ${st.badgeClass}`}
                      >
                        <StatusIcon className="w-3.5 h-3.5" />
                        <span>{item.status}</span>
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-2.5">
                      Frentes Atuais
                    </span>
                    <ul className="space-y-1.5">
                      {item.focusPoints.map((fp) => (
                        <li
                          key={fp}
                          className="flex items-start gap-2 text-xs text-zinc-300"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${st.dotClass}`}
                          />
                          <span>{fp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
