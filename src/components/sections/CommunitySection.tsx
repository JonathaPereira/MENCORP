import React, { useState } from 'react';
import {
  Crown,
  ExternalLink,
  Flame,
  Gamepad2,
  Layers,
  Mail,
  MessageCircle,
  PlaySquare,
  Settings2,
  Share2,
} from 'lucide-react';
import { COMMUNITY_CHANNELS, MENCORP_CONFIG } from '../../data/mencorpData';
import { Reveal } from '../animations/Reveal';

const CHANNEL_ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  'mn-trono': Crown,
  discord: MessageCircle,
  youtube: PlaySquare,
  contact: Mail,
};

export const CommunitySection: React.FC = () => {
  const [showConfigGuide, setShowConfigGuide] = useState(false);

  return (
    <section
      id="comunidade"
      aria-labelledby="community-heading"
      className="relative py-24 sm:py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Heroic Banner */}
        <Reveal>
          <div className="relative rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16 border border-violet-500/35 bg-gradient-to-br from-violet-950/50 via-[#0b0a18] to-amber-950/20 shadow-[0_25px_90px_-20px_rgba(124,58,237,0.35)] mb-12">
            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2.5 mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-xs font-mono uppercase tracking-[0.24em] text-amber-300">
                  08 · COMUNIDADE E CONTATO
                </span>
              </div>

              <h2
                id="community-heading"
                className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.08] mb-5"
              >
                {MENCORP_CONFIG.brand.communityHeadline}
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-zinc-200 leading-relaxed mb-8">
                {MENCORP_CONFIG.brand.communityDescription}
              </p>

              {/* Direct Project & Game Pages Access Strip */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-violet-300 block mb-3.5">
                  Acesso Direto aos Sites e Jogos Publicados
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    id="community-link-trono"
                    href={MENCORP_CONFIG.links.mnTronoMaster}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg transition-all"
                  >
                    <Crown className="w-4 h-4" />
                    <span>MN Trono (App &amp; Jogos)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    id="community-link-cinzas"
                    href={MENCORP_CONFIG.links.cinzasLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 shadow-lg transition-all"
                  >
                    <Flame className="w-4 h-4" />
                    <span>Jogar Cinzas do Abismo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    id="community-link-atalaia"
                    href={MENCORP_CONFIG.links.atalaiaLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-sky-400 to-cyan-400 hover:from-sky-300 hover:to-cyan-300 shadow-lg transition-all"
                  >
                    <Gamepad2 className="w-4 h-4" />
                    <span>Jogar Atalaia</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    id="community-link-nexus"
                    href={MENCORP_CONFIG.links.nexusLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 shadow-lg transition-all"
                  >
                    <Gamepad2 className="w-4 h-4 text-amber-300" />
                    <span>Jogar Nexus</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    id="community-link-menchat"
                    href={MENCORP_CONFIG.links.menChatLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-medium text-zinc-100 bg-white/10 hover:bg-white/15 border border-white/15 transition-all"
                  >
                    <Layers className="w-4 h-4 text-violet-300" />
                    <span>Abrir MenChat</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Community Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMUNITY_CHANNELS.map((channel, idx) => {
            const Icon = CHANNEL_ICON_MAP[channel.id] || Share2;
            const isConfigured = Boolean(channel.url);

            return (
              <Reveal key={channel.id} delay={idx * 0.07}>
                <div className="h-full rounded-2xl glass-panel p-6 flex flex-col justify-between border border-white/10 hover:border-violet-400/40 transition-all">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-violet-500/15 border border-violet-400/30 flex items-center justify-center text-violet-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-white/5 text-zinc-300 border border-white/10">
                        {channel.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-white mb-2">
                      {channel.label}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                      {channel.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    {isConfigured && channel.url ? (
                      <a
                        id={`channel-btn-${channel.id}`}
                        href={channel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-violet-600/25 hover:bg-violet-600/40 border border-violet-400/40 transition-all"
                      >
                        <span>Acessar Agora</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        id={`channel-config-btn-${channel.id}`}
                        type="button"
                        onClick={() => setShowConfigGuide((prev) => !prev)}
                        className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[11px] font-mono text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/30 transition-all"
                      >
                        <span>Espaço Configurável</span>
                        <Settings2 className="w-3.5 h-3.5 text-amber-300" />
                      </button>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Optional Toggleable Configuration Helper */}
        {showConfigGuide && (
          <div className="mt-6 p-5 rounded-2xl bg-[#0c0b18] border border-amber-400/35 text-xs text-zinc-300">
            <div className="flex items-center justify-between mb-2">
              <strong className="font-mono uppercase tracking-wider text-amber-300">
                Configuração Rápida de Canais Adicionais
              </strong>
              <button
                type="button"
                onClick={() => setShowConfigGuide(false)}
                className="text-zinc-400 hover:text-white"
              >
                Ocultar
              </button>
            </div>
            <p className="leading-relaxed">
              Para ativar os botões de <strong>Discord</strong>,{' '}
              <strong>YouTube</strong> ou <strong>E-mail de Contato</strong>,
              basta preencher os campos correspondentes em{' '}
              <code className="text-violet-300 font-mono">
                src/data/mencorpData.ts
              </code>{' '}
              dentro de <code className="text-amber-300 font-mono">MENCORP_CONFIG.links</code>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
