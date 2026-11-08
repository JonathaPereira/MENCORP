import React from 'react';

interface MeNCorpLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

/**
 * Apresentação tipográfica oficial elegante para o nome MeNCorp,
 * preservando a assinatura visual dos dois pixels ascendentes da família MeN
 * sem descaracterizar a identidade existente.
 */
export const MeNCorpLogo: React.FC<MeNCorpLogoProps> = ({
  size = 'md',
  showTagline = false,
  className = '',
}) => {
  const sizeClasses = {
    sm: {
      mark: 'w-8 h-8 rounded-lg',
      text: 'text-lg',
      corp: 'text-xs',
      sub: 'text-[10px]',
    },
    md: {
      mark: 'w-10 h-10 rounded-xl',
      text: 'text-xl sm:text-2xl',
      corp: 'text-xs sm:text-sm',
      sub: 'text-[10px]',
    },
    lg: {
      mark: 'w-12 h-12 rounded-2xl',
      text: 'text-2xl sm:text-3xl',
      corp: 'text-sm sm:text-base',
      sub: 'text-xs',
    },
  }[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* Monograma tipográfico com os dois pixels característicos da identidade MeN */}
      <div
        className={`relative flex items-center justify-center ${sizeClasses.mark} bg-gradient-to-br from-violet-950/90 via-[#0d0b18] to-obsidian-950 border border-violet-500/35 shadow-[0_0_25px_-5px_rgba(139,92,246,0.45)] group-hover:border-amber-400/50 transition-all duration-300 overflow-hidden`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 via-transparent to-amber-400/15 opacity-80 group-hover:opacity-100 transition-opacity" />
        <span className="relative font-display font-bold tracking-tighter text-white text-base sm:text-lg leading-none">
          M
        </span>
        {/* Assinatura de pixels duplos inspirada no logotipo MeN original */}
        <span className="absolute top-1.5 right-1.5 flex flex-col items-end">
          <span className="w-1 h-1 rounded-[1px] bg-amber-400 block translate-x-[1px]" />
          <span className="w-1 h-1 rounded-[1px] bg-violet-400 block -translate-x-[2px]" />
        </span>
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline tracking-tight leading-none">
          <span
            className={`font-display font-bold text-white tracking-tight ${sizeClasses.text}`}
          >
            MeN
          </span>
          <span
            className={`font-display font-semibold uppercase tracking-[0.22em] text-violet-300 group-hover:text-amber-300 transition-colors ml-1 ${sizeClasses.corp}`}
          >
            CORP
          </span>
          <span
            className="ml-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_10px_#f59e0b]"
            aria-hidden="true"
          />
        </div>
        {showTagline && (
          <span
            className={`font-mono uppercase tracking-[0.24em] text-zinc-400 mt-1 ${sizeClasses.sub}`}
          >
            Creative &amp; Tech Ecosystem
          </span>
        )}
      </div>
    </div>
  );
};
