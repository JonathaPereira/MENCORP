import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

interface Star {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
  glow: boolean;
  layer: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  alpha: number;
  active: boolean;
}

const STAR_COLORS = [
  '#ffffff',
  '#f8fafc',
  '#ddd6fe', // soft lilac
  '#c4b5fd', // cosmic violet
  '#a78bfa', // deep violet
  '#fde68a', // stardust gold
  '#bae6fd', // astral blue
];

export const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const starCount = Math.min(220, Math.max(110, Math.floor((width * height) / 9000)));
    const stars: Star[] = Array.from({ length: starCount }, (_, i) => {
      const layer = (i % 3) + 1; // 1 = far, 2 = mid, 3 = near
      const speedFactor = layer * 0.14;
      const angle = -Math.PI / 5; // gentle diagonal cosmic drift
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius:
          layer === 3
            ? Math.random() * 1.4 + 1.1
            : layer === 2
            ? Math.random() * 1.0 + 0.6
            : Math.random() * 0.7 + 0.3,
        vx: Math.cos(angle) * speedFactor + (Math.random() - 0.5) * 0.08,
        vy: Math.sin(angle) * speedFactor - Math.random() * 0.12,
        alpha: Math.random() * 0.65 + 0.25,
        twinkleSpeed: Math.random() * 0.025 + 0.008,
        twinklePhase: Math.random() * Math.PI * 2,
        color: STAR_COLORS[i % STAR_COLORS.length],
        glow: layer === 3 && i % 4 === 0,
        layer,
      };
    });

    const shootingStar: ShootingStar = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      length: 90,
      alpha: 0,
      active: false,
    };

    let mouseOffsetX = 0;
    let mouseOffsetY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / width - 0.5) * 28;
      targetMouseY = (e.clientY / height - 0.5) * 28;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    const spawnShootingStar = () => {
      shootingStar.x = Math.random() * width * 0.8 + width * 0.1;
      shootingStar.y = Math.random() * height * 0.4;
      shootingStar.vx = -(Math.random() * 6 + 7);
      shootingStar.vy = Math.random() * 4 + 3.5;
      shootingStar.length = Math.random() * 70 + 60;
      shootingStar.alpha = 1;
      shootingStar.active = true;
    };

    const renderFrame = () => {
      ctx.clearRect(0, 0, width, height);

      mouseOffsetX += (targetMouseX - mouseOffsetX) * 0.04;
      mouseOffsetY += (targetMouseY - mouseOffsetY) * 0.04;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        if (!prefersReducedMotion) {
          s.x += s.vx;
          s.y += s.vy;
          s.twinklePhase += s.twinkleSpeed;

          // Wrap around screen edges seamlessly
          if (s.x < -10) s.x = width + 10;
          if (s.x > width + 10) s.x = -10;
          if (s.y < -10) s.y = height + 10;
          if (s.y > height + 10) s.y = -10;
        }

        const twinkle =
          0.35 + 0.65 * (0.5 + 0.5 * Math.sin(s.twinklePhase));
        const currentAlpha = Math.min(1, s.alpha * twinkle);

        const drawX =
          (s.x + mouseOffsetX * (s.layer * 0.45) + width) % width;
        const drawY =
          (s.y + mouseOffsetY * (s.layer * 0.45) + height) % height;

        ctx.save();
        ctx.globalAlpha = currentAlpha;
        ctx.fillStyle = s.color;

        if (s.glow) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = s.color;
        }

        ctx.beginPath();
        ctx.arc(drawX, drawY, s.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw subtle 4-point star flare on brightest cosmic stars
        if (s.glow && currentAlpha > 0.65) {
          ctx.strokeStyle = s.color;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(drawX - s.radius * 3.2, drawY);
          ctx.lineTo(drawX + s.radius * 3.2, drawY);
          ctx.moveTo(drawX, drawY - s.radius * 3.2);
          ctx.lineTo(drawX, drawY + s.radius * 3.2);
          ctx.stroke();
        }

        ctx.restore();
      }

      // Handle occasional shooting star across the cosmos
      if (!prefersReducedMotion) {
        if (!shootingStar.active && Math.random() < 0.0035) {
          spawnShootingStar();
        }

        if (shootingStar.active) {
          shootingStar.x += shootingStar.vx;
          shootingStar.y += shootingStar.vy;
          shootingStar.alpha -= 0.018;

          if (
            shootingStar.alpha <= 0 ||
            shootingStar.x < -100 ||
            shootingStar.y > height + 100
          ) {
            shootingStar.active = false;
          } else {
            ctx.save();
            const tailX =
              shootingStar.x -
              (shootingStar.vx / 10) * shootingStar.length;
            const tailY =
              shootingStar.y -
              (shootingStar.vy / 10) * shootingStar.length;

            const grad = ctx.createLinearGradient(
              shootingStar.x,
              shootingStar.y,
              tailX,
              tailY
            );
            grad.addColorStop(0, `rgba(253, 230, 138, ${shootingStar.alpha})`);
            grad.addColorStop(
              0.4,
              `rgba(167, 139, 250, ${shootingStar.alpha * 0.6})`
            );
            grad.addColorStop(1, 'rgba(139, 92, 246, 0)');

            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            ctx.moveTo(shootingStar.x, shootingStar.y);
            ctx.lineTo(tailX, tailY);
            ctx.stroke();
            ctx.restore();
          }
        }

        animationFrameId = window.requestAnimationFrame(renderFrame);
      }
    };

    renderFrame();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Deep Cosmic Void Base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 15%, #110b29 0%, #070612 48%, #040409 100%)',
        }}
      />

      {/* Cosmic Nebulae Clouds */}
      <div className="absolute -top-40 -left-32 w-[44rem] h-[44rem] rounded-full bg-violet-700/15 blur-[150px] animate-pulse-slow" />
      <div className="absolute top-[25%] -right-40 w-[40rem] h-[40rem] rounded-full bg-indigo-700/12 blur-[150px]" />
      <div className="absolute bottom-[-10rem] left-[18%] w-[42rem] h-[30rem] rounded-full bg-fuchsia-800/10 blur-[160px]" />
      <div className="absolute top-[60%] left-[55%] w-[28rem] h-[28rem] rounded-full bg-amber-500/[0.06] blur-[140px]" />

      {/* Animated Moving Starfield Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-95"
      />

      {/* Subtle Cosmic Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at center, transparent 55%, rgba(4, 4, 9, 0.65) 100%)',
        }}
      />
    </div>
  );
};
