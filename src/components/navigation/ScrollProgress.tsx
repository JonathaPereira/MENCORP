import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const NAV_DOTS = [
  { id: 'inicio', label: 'Início' },
  { id: 'quem-somos', label: 'Quem Somos' },
  { id: 'plataformas', label: 'Plataformas' },
  { id: 'games', label: 'MeNCorp Games' },
  { id: 'historia', label: 'Nossa História' },
  { id: 'ecossistema', label: 'Ecossistema' },
  { id: 'futuro', label: 'Futuro' },
  { id: 'comunidade', label: 'Comunidade' },
];

export const ScrollProgress: React.FC<ScrollProgressProps> = ({
  activeSection,
  onNavigate,
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Top horizontal scroll progress bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-zinc-900/50 pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-violet-600 via-purple-400 to-amber-400 shadow-[0_0_12px_rgba(168,85,247,0.8)]"
          style={{ scaleX }}
        />
      </div>

      {/* Desktop vertical section progress indicator */}
      <aside
        aria-label="Progresso de navegação das seções"
        className="hidden xl:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3"
      >
        {NAV_DOTS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              id={`side-nav-${item.id}`}
              type="button"
              onClick={() => onNavigate(item.id)}
              className="group flex items-center gap-2.5 py-0.5 focus:outline-none"
              aria-label={`Ir para seção ${item.label}`}
              aria-current={isActive ? 'true' : undefined}
            >
              <span
                className={`text-[11px] font-mono tracking-wider uppercase transition-all duration-300 px-2 py-0.5 rounded ${
                  isActive
                    ? 'opacity-100 text-violet-200 bg-violet-950/70 border border-violet-500/30 translate-x-0'
                    : 'opacity-0 group-hover:opacity-100 text-zinc-400 translate-x-2 group-hover:translate-x-0'
                }`}
              >
                {item.label}
              </span>
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-2.5 h-6 bg-gradient-to-b from-violet-400 to-amber-400 shadow-[0_0_10px_rgba(168,85,247,0.7)]'
                    : 'w-1.5 h-1.5 bg-zinc-600 group-hover:bg-violet-400'
                }`}
              />
            </button>
          );
        })}
      </aside>
    </>
  );
};
