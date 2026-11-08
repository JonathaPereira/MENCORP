/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        epic: ['"Cinzel"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        obsidian: {
          950: '#050509',
          900: '#090912',
          800: '#10101e',
          700: '#18182c',
        },
        mencorp: {
          purple: '#7c3aed',
          violet: '#8b5cf6',
          lilac: '#c084fc',
          gold: '#f59e0b',
          goldLight: '#fde68a',
        },
      },
      backgroundImage: {
        'radial-violet': 'radial-gradient(circle at center, rgba(139, 92, 246, 0.16) 0%, rgba(6, 6, 11, 0) 70%)',
        'radial-gold': 'radial-gradient(circle at center, rgba(245, 158, 11, 0.12) 0%, rgba(6, 6, 11, 0) 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'shimmer': 'shimmer 3.5s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
