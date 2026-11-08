import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CheckCircle2,
  ExternalLink,
  Eye,
  Sparkles,
  X,
} from 'lucide-react';
import type { OriginalGameItem, PlatformItem } from '../../data/mencorpData';

export type InspectableItem =
  | { type: 'platform'; item: PlatformItem }
  | { type: 'game'; item: OriginalGameItem };

interface ProjectModalProps {
  selected: InspectableItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  selected,
  onClose,
}) => {
  const [mediaSelection, setMediaSelection] = useState<{
    itemId: string;
    idx: number;
  }>({ itemId: '', idx: 0 });

  const currentItemId = selected ? selected.item.id : '';
  const mediaIdx =
    mediaSelection.itemId === currentItemId ? mediaSelection.idx : 0;

  useEffect(() => {
    if (!selected) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selected, onClose]);

  return (
    <AnimatePresence>
      {selected && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Detalhes do projeto MeNCorp"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-4xl rounded-3xl bg-[#0b0b16] border border-violet-500/35 shadow-[0_25px_90px_-15px_rgba(0,0,0,0.95)] overflow-hidden my-8"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0f0f1e]">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-violet-200">
                  {selected.type === 'platform'
                    ? 'PLATAFORMA DIGITAL MENCORP'
                    : `MENCORP GAMES · ${selected.item.genreBadge}`}
                </span>
              </div>
              <button
                id="modal-close-btn"
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Fechar janela de detalhes"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto">
              {/* Visual Showcase Gallery */}
              {(() => {
                const mediaList = selected.item.media;
                const activeMedia = mediaList[mediaIdx] || mediaList[0];

                return (
                  <div className="mb-8">
                    <div className="relative rounded-2xl overflow-hidden bg-obsidian-950 border border-white/10 aspect-video">
                      <img
                        src={activeMedia.src}
                        alt={activeMedia.alt}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider backdrop-blur-md border ${
                            activeMedia.kind === 'real'
                              ? 'bg-emerald-950/80 text-emerald-300 border-emerald-400/40'
                              : 'bg-violet-950/80 text-violet-200 border-violet-400/40'
                          }`}
                        >
                          {activeMedia.label}
                        </span>
                      </div>
                      <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                        <p className="text-xs sm:text-sm text-zinc-200">
                          {activeMedia.caption}
                        </p>
                      </div>
                    </div>

                    {mediaList.length > 1 && (
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {mediaList.map((m, idx) => (
                          <button
                            key={m.src}
                            type="button"
                            onClick={() =>
                              setMediaSelection({ itemId: currentItemId, idx })
                            }
                            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                              idx === mediaIdx
                                ? 'bg-violet-600/25 text-white border-violet-400/50'
                                : 'bg-white/[0.03] text-zinc-400 border-white/10 hover:text-white'
                            }`}
                          >
                            <Eye className="w-3.5 h-3.5 text-amber-400" />
                            <span>{m.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Title & Description */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                    {selected.type === 'platform'
                      ? selected.item.name
                      : selected.item.title}
                  </h3>
                  <p className="text-sm text-violet-300 mt-1">
                    {selected.item.subtitle}
                  </p>
                </div>
                <span className="px-3.5 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider bg-violet-500/15 text-violet-200 border border-violet-400/30">
                  Status: {selected.item.status}
                </span>
              </div>

              <p className="text-base text-zinc-300 leading-relaxed mb-6">
                {selected.item.description}
              </p>

              {/* Highlights Grid */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                  Destaques e Pilares do Projeto
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selected.item.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="text-sm text-zinc-200">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra Metadata for Platform or Game */}
              {selected.type === 'platform' ? (
                <div className="p-4 rounded-2xl bg-violet-950/25 border border-violet-500/20 mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-300 block mb-1">
                    Papel no Ecossistema MeNCorp
                  </span>
                  <p className="text-sm text-zinc-300">
                    {selected.item.ecosystemRole}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  {selected.item.mechanicsPreview.map((mech) => (
                    <div
                      key={mech.label}
                      className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10"
                    >
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                        {mech.label}
                      </span>
                      <strong className="text-sm font-display text-white block mt-1">
                        {mech.value}
                      </strong>
                      <p className="text-xs text-zinc-400 mt-1">{mech.detail}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-3">
                  {selected.item.primaryAction.url ? (
                    <a
                      href={selected.item.primaryAction.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all shadow-lg"
                    >
                      <span>{selected.item.primaryAction.label}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-amber-200 bg-amber-500/10 border border-amber-400/30">
                      Link configurável em {selected.item.primaryAction.configKey}
                    </span>
                  )}

                  {selected.item.secondaryAction && (
                    <a
                      href={selected.item.secondaryAction.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-mono uppercase tracking-wider text-zinc-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      <span>{selected.item.secondaryAction.label}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white"
                >
                  Fechar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
