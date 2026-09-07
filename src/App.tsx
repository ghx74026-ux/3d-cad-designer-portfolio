import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Software } from './components/Software';
import { CVSection } from './components/CVSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingContacts } from './components/FloatingContacts';
import { Assistant } from './components/Assistant';
import { ProjectModal } from './components/ProjectModal';
import { DesignProcess } from './components/DesignProcess';
import { DesignQuote } from './components/DesignQuote';
import { PortfolioProject } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [contactSubject, setContactSubject] = useState<string>('');

  const handleNavigate = useCallback((sectionId: string) => {
    if (selectedProject) setSelectedProject(null);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const headerOffset = 75;
      const currentScroll = window.scrollY ?? window.pageYOffset ?? document.documentElement.scrollTop;
      const elementPosition = targetElement.getBoundingClientRect().top + currentScroll;
      const offsetPosition = Math.max(0, elementPosition - headerOffset);
      try { window.scrollTo({ top: offsetPosition, behavior: 'smooth' }); }
      catch { targetElement.scrollIntoView({ behavior: 'smooth' }); }
      window.history.replaceState(null, '', `#${sectionId}`);
      setActiveSection(sectionId);
    }
  }, [selectedProject]);

  const handleDiscussService = useCallback((serviceTitle: string) => {
    setContactSubject(serviceTitle);
    handleNavigate('contact');
  }, [handleNavigate]);

  useEffect(() => {
    const sectionIds = ['home', 'portfolio', 'services', 'process', 'skills', 'software', 'quote', 'about', 'contact'];
    const handleScroll = () => {
      const scrollPosition = (window.scrollY ?? window.pageYOffset ?? document.documentElement.scrollTop) + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#ededed] relative overflow-x-hidden selection:bg-[#c89b3c] selection:text-black">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      <main>
        <Hero onNavigate={handleNavigate} />
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />
        <Services onSelectService={handleDiscussService} />
        <DesignProcess />
        <Skills />
        <Software />
        <DesignQuote />
        <CVSection />
        <About />
        <Contact initialSubject={contactSubject} />
      </main>
      <Footer onNavigate={handleNavigate} />
      <FloatingContacts />
      <Assistant onSelectTopic={handleDiscussService} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} onContactAboutProject={(projectTitle) => handleDiscussService(`Project: ${projectTitle}`)} />
    </div>
  );
}
