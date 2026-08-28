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
import { PortfolioProject } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [contactSubject, setContactSubject] = useState<string>('');

  // Smooth scroll with header offset
  const handleNavigate = useCallback((sectionId: string) => {
    if (selectedProject) {
      setSelectedProject(null);
    }

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const headerOffset = 75;
      const currentScroll = window.scrollY ?? window.pageYOffset ?? document.documentElement.scrollTop;
      const elementPosition = targetElement.getBoundingClientRect().top + currentScroll;
      const offsetPosition = Math.max(0, elementPosition - headerOffset);
      
      try {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      } catch {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }

      window.history.replaceState(null, '', `#${sectionId}`);
      setActiveSection(sectionId);
    }
  }, [selectedProject]);

  // Handle service or project discussion
  const handleDiscussService = useCallback((serviceTitle: string) => {
    setContactSubject(serviceTitle);
    handleNavigate('contact');
  }, [handleNavigate]);

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = ['home', 'skills', 'services', 'portfolio', 'software', 'about', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = (window.scrollY ?? window.pageYOffset ?? document.documentElement.scrollTop) + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#ededed] relative overflow-x-hidden selection:bg-[#c89b3c] selection:text-black">
      {/* Navigation */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content */}
      <main>
        {/* 1. Hero */}
        <Hero onNavigate={handleNavigate} />

        {/* 2. Skills */}
        <Skills />

        {/* 3. Services */}
        <Services onSelectService={handleDiscussService} />

        {/* 4. Portfolio */}
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Software Stack */}
        <Software />

        {/* 6. Download CV Section */}
        <CVSection />

        {/* 7. About */}
        <About />

        {/* 8. Contact Section */}
        <Contact initialSubject={contactSubject} />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Quick Contacts */}
      <FloatingContacts />

      {/* Lightweight Services Assistant Helper */}
      <Assistant onSelectTopic={handleDiscussService} />

      {/* Project Detail Modal & Lightbox */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactAboutProject={(projectTitle) => handleDiscussService(`Project: ${projectTitle}`)}
      />
    </div>
  );
}
