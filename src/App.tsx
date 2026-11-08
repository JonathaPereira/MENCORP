import { useCallback, useEffect, useState } from 'react';
import { AmbientBackground } from './components/animations/AmbientBackground';
import { Navbar } from './components/navigation/Navbar';
import { ScrollProgress } from './components/navigation/ScrollProgress';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { PlatformsSection } from './components/sections/PlatformsSection';
import { GamesSection } from './components/sections/GamesSection';
import { TimelineSection } from './components/sections/TimelineSection';
import { EcosystemSection } from './components/sections/EcosystemSection';
import { FutureSection } from './components/sections/FutureSection';
import { CommunitySection } from './components/sections/CommunitySection';
import { Footer } from './components/sections/Footer';
import {
  ProjectModal,
  type InspectableItem,
} from './components/modals/ProjectModal';

const SECTION_IDS = [
  'inicio',
  'quem-somos',
  'plataformas',
  'games',
  'historia',
  'ecossistema',
  'futuro',
  'comunidade',
];

export function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [selectedItem, setSelectedItem] = useState<InspectableItem | null>(
    null
  );

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-32% 0px -48% 0px',
      threshold: 0,
    });

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    observers.push(observer);
    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleNavigate = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#06060b] text-zinc-100 selection:bg-violet-600/40 selection:text-white">
      {/* Global Ambient Lighting & Discreet Particles */}
      <AmbientBackground />

      {/* Page Scroll Progress & Quick Section Dots */}
      <ScrollProgress
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Sticky Modern Institutional Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Section 1: Hero / Apresentação */}
        <HeroSection onNavigate={handleNavigate} />

        {/* Section 2: Quem Somos */}
        <AboutSection />

        {/* Section 3: Nossos Produtos e Plataformas */}
        <PlatformsSection onInspect={setSelectedItem} />

        {/* Section 4: MeNCorp Games / Nosso Universo de Jogos */}
        <GamesSection onInspect={setSelectedItem} />

        {/* Section 5: Nossa História */}
        <TimelineSection />

        {/* Section 6: Nosso Ecossistema */}
        <EcosystemSection />

        {/* Section 7: O Que Vem Pela Frente */}
        <FutureSection />

        {/* Section 8: Comunidade e Contato */}
        <CommunitySection />
      </main>

      {/* Section 9: Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Detailed Project / Game Inspection Modal */}
      <ProjectModal
        selected={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}

export default App;
