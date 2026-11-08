import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Compass,
  ExternalLink,
  Gamepad2,
  Layers,
  Menu,
  Sparkles,
  X,
} from 'lucide-react';
import { MeNCorpLogo } from '../brand/MeNCorpLogo';
import { MENCORP_CONFIG } from '../../data/mencorpData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const NAV_ITEMS = [
  { id: 'quem-somos', label: 'Quem Somos' },
  { id: 'plataformas', label: 'Plataformas' },
  { id: 'games', label: 'Games' },
  { id: 'historia', label: 'História' },
  { id: 'ecossistema', label: 'Ecossistema' },
  { id: 'futuro', label: 'Futuro' },
  { id: 'comunidade', label: 'Comunidade' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickHubOpen, setQuickHubOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 28);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    setQuickHubOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2.5' : 'py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
            isScrolled
              ? 'bg-[#090913]/85 backdrop-blur-xl border border-violet-500/25 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.85)]'
              : 'bg-[#090913]/45 backdrop-blur-md border border-white/10'
          }`}
        >
          {/* Brand Logo */}
          <button
            id="nav-logo-btn"
            type="button"
            onClick={() => handleNavClick('inicio')}
            className="text-left focus:outline-none"
            aria-label="MeNCorp — Voltar ao início"
          >
            <MeNCorpLogo size="sm" />
          </button>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`relative whitespace-nowrap px-3 py-2 rounded-xl text-xs xl:text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-xl bg-violet-500/15 border border-violet-400/30 -z-10"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Quick Ecosystem Hub + CTA */}
          <div className="hidden md:flex items-center gap-2.5 relative">
            <button
              id="nav-quick-hub-btn"
              type="button"
              onClick={() => setQuickHubOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider text-violet-200 bg-violet-950/50 hover:bg-violet-900/60 border border-violet-500/30 transition-all"
              aria-expanded={quickHubOpen}
            >
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Acesso Rápido</span>
            </button>

            <button
              id="nav-explore-btn"
              type="button"
              onClick={() => handleNavClick('games')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 border border-violet-400/30 shadow-[0_0_24px_-6px_rgba(139,92,246,0.65)] transition-all"
            >
              <Gamepad2 className="w-4 h-4 text-amber-300" />
              <span>Universo Games</span>
            </button>

            {/* Quick Access Popover */}
            <AnimatePresence>
              {quickHubOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-14 w-80 rounded-2xl glass-panel p-4 shadow-2xl z-50 border border-violet-500/30"
                >
                  <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10">
                    <span className="text-xs font-mono uppercase tracking-wider text-violet-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      Links Diretos MeNCorp
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuickHubOpen(false)}
                      className="text-zinc-400 hover:text-white p-1"
                      aria-label="Fechar menu rápido"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-2 text-left">
                    <a
                      href={MENCORP_CONFIG.links.menChatLive}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-violet-500/15 border border-white/5 hover:border-violet-500/30 transition-all group"
                    >
                      <div>
                        <p className="text-xs font-semibold text-white group-hover:text-violet-200">
                          MenChat (Aplicação Web)
                        </p>
                        <p className="text-[11px] text-zinc-400">
                          Comunicação e comunidade online
                        </p>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-violet-300" />
                    </a>

                    <a
                      href={MENCORP_CONFIG.links.atalaiaLive}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-sky-500/15 border border-white/5 hover:border-sky-500/30 transition-all group"
                    >
                      <div>
                        <p className="text-xs font-semibold text-white group-hover:text-sky-200">
                          Atalaia: Guardiões do Cristal
                        </p>
                        <p className="text-[11px] text-zinc-400">
                          Versão web jogável publicada
                        </p>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-sky-300" />
                    </a>

                    <a
                      href={MENCORP_CONFIG.links.menTronoRepo || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-amber-500/15 border border-white/5 hover:border-amber-500/30 transition-all group"
                    >
                      <div>
                        <p className="text-xs font-semibold text-white group-hover:text-amber-200">
                          Men Trono · A Lei do Trono
                        </p>
                        <p className="text-[11px] text-zinc-400">
                          Plataforma estratégica &amp; A Corte
                        </p>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-300" />
                    </a>

                    <a
                      href={MENCORP_CONFIG.links.nexusRepo || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-purple-500/15 border border-white/5 hover:border-purple-500/30 transition-all group"
                    >
                      <div>
                        <p className="text-xs font-semibold text-white group-hover:text-purple-200">
                          Nexus · Ecos do Crepúsculo
                        </p>
                        <p className="text-[11px] text-zinc-400">
                          RPG tático &amp; Arena PvP
                        </p>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-purple-300" />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            id="nav-mobile-toggle"
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center p-2.5 rounded-xl text-zinc-200 bg-white/5 hover:bg-violet-500/20 border border-white/10 focus:outline-none"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="lg:hidden mt-2 rounded-2xl bg-[#0a0a16]/95 backdrop-blur-2xl border border-violet-500/30 p-4 shadow-2xl"
            >
              <div className="grid grid-cols-1 gap-1.5">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`mobile-nav-${item.id}`}
                      type="button"
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-left text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-violet-600/20 text-white border border-violet-500/40'
                          : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => handleNavClick('plataformas')}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-violet-200 bg-violet-950/60 border border-violet-500/30"
                >
                  <Layers className="w-4 h-4 text-violet-400" />
                  <span>Ver Plataformas</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleNavClick('games')}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600"
                >
                  <Gamepad2 className="w-4 h-4 text-amber-300" />
                  <span>Explorar Jogos</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
