import React, { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  isGold: boolean;
}

const PARTICLES: Particle[] = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  x: (i * 37 + 13) % 96 + 2,
  y: (i * 53 + 7) % 94 + 3,
  size: (i % 3) + 1.5,
  duration: 10 + (i % 7) * 2.5,
  delay: (i % 5) * 1.4,
  isGold: i % 5 === 0,
}));

export const AmbientBackground: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 50, y: 25 });

  useEffect(() => {
    if (prefersReducedMotion) return;

    let rafId: number | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        const x = Math.round((e.clientX / window.innerWidth) * 100);
        const y = Math.round((e.clientY / window.innerHeight) * 100);
        setMousePos({ x, y });
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId !== null) window.cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Base deep obsidian & subtle atmospheric illumination */}
      <div className="absolute inset-0 bg-[#06060b]" />

      {/* Interactive subtle spotlight following cursor on desktop */}
      {!prefersReducedMotion && (
        <div
          className="hidden lg:block absolute inset-0 transition-opacity duration-700"
          style={{
            background: `radial-gradient(750px circle at ${mousePos.x}% ${mousePos.y}%, rgba(139, 92, 246, 0.07), transparent 65%)`,
          }}
        />
      )}

      {/* Ambient deep violet & royal gold nebulae */}
      <div className="absolute -top-48 -left-40 w-[38rem] h-[38rem] rounded-full bg-violet-700/12 blur-[130px] animate-pulse-slow" />
      <div className="absolute top-[28%] -right-48 w-[34rem] h-[34rem] rounded-full bg-purple-800/10 blur-[140px]" />
      <div className="absolute bottom-[-12rem] left-[20%] w-[36rem] h-[28rem] rounded-full bg-amber-500/5 blur-[140px]" />

      {/* Subtle architectural perspective lines */}
      <div className="absolute inset-0 surface-noise opacity-50" />

      {/* Discreet luminous particles */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0">
          {PARTICLES.map((p) => (
            <span
              key={p.id}
              className={`absolute rounded-full ${
                p.isGold
                  ? 'bg-amber-300/40 shadow-[0_0_8px_rgba(245,158,11,0.5)]'
                  : 'bg-violet-300/35 shadow-[0_0_8px_rgba(167,139,250,0.45)]'
              }`}
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animation: `floatSlow ${p.duration}s ease-in-out ${p.delay}s infinite`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
