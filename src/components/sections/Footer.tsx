import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { MENCORP_CONFIG } from '../../data/mencorpData';
import { MeNCorpLogo } from '../brand/MeNCorpLogo';

interface FooterProps {
  onNavigate: (id: string) => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {

  return (
    <footer
      aria-label="Rodapé institucional MeNCorp"
      className="relative bg-[#040408] border-t border-white/10 pt-16 pb-12 overflow-hidden"
    >
      {/* Subtle Top Luminous Divider */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand & Institutional Description (4 cols) */}
          <div className="lg:col-span-4">
            <MeNCorpLogo size="md" showTagline />
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed max-w-sm">
              Organização criativa e tecnológica que reúne projetos de
              desenvolvimento de jogos, plataformas digitais, comunidades,
              entretenimento e experiências interativas.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs font-mono text-zinc-300">
                {MENCORP_CONFIG.brand.footerClosing}
              </span>
            </div>
          </div>

          {/* Column 1: Navegação (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              {[
                { id: 'inicio', label: 'Início' },
                { id: 'quem-somos', label: 'Quem Somos' },
                { id: 'historia', label: 'Nossa História' },
                { id: 'ecossistema', label: 'Ecossistema' },
                { id: 'futuro', label: 'O Que Vem Pela Frente' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-violet-300 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Projetos & Plataformas (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              Projetos
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('plataformas')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Men Trono (A Lei do Trono)
                </button>
              </li>
              <li>
                <a
                  href={MENCORP_CONFIG.links.menChatLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-violet-300 transition-colors"
                >
                  <span>MenChat Web</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={MENCORP_CONFIG.links.menTronoDownloads}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-violet-300 transition-colors"
                >
                  <span>Men Trono Releases</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Jogos (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              Jogos
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('games')}
                  className="hover:text-orange-300 transition-colors text-left"
                >
                  Cinzas do Abismo
                </button>
              </li>
              <li>
                <a
                  href={MENCORP_CONFIG.links.atalaiaLive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-sky-300 transition-colors"
                >
                  <span>Atalaia: Guardiões do Cristal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={MENCORP_CONFIG.links.nexusRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-purple-300 transition-colors"
                >
                  <span>Nexus (RPG Tático)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('games')}
                  className="hover:text-zinc-200 transition-colors text-left"
                >
                  Catálogo Incorporado
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Comunidade, Contato & Redes Sociais (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-4">
              Comunidade &amp; Contato
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('comunidade')}
                  className="hover:text-violet-300 transition-colors text-left"
                >
                  Discord &amp; Canais
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('comunidade')}
                  className="hover:text-violet-300 transition-colors text-left"
                >
                  YouTube &amp; Redes Sociais
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('comunidade')}
                  className="hover:text-violet-300 transition-colors text-left"
                >
                  Contato Institucional
                </button>
              </li>
              <li>
                <a
                  href={MENCORP_CONFIG.links.githubOrg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <span>GitHub Oficial</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Closing Signature Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {CURRENT_YEAR} <strong className="text-zinc-300">MeNCorp</strong>.
            Todos os direitos reservados.
          </p>

          <p className="font-display font-semibold text-zinc-300 tracking-wide">
            {MENCORP_CONFIG.brand.footerClosing}
          </p>

          <button
            id="footer-back-to-top"
            type="button"
            onClick={() => onNavigate('inicio')}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono text-zinc-300 hover:text-white bg-white/5 hover:bg-violet-600/20 border border-white/10 transition-all"
            aria-label="Voltar ao topo da página"
          >
            <span>Topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
