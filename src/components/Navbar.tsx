import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'software', label: 'Software' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0d0e]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
          id="navbar-brand-logo"
        >
          <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#c89b3c] group-hover:border-[#c89b3c]/50 transition-colors shadow-inner">
            <Compass className="w-5 h-5 transition-transform group-hover:rotate-45" />
          </div>
          <div>
            <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white block leading-tight group-hover:text-[#c89b3c] transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-[11px] font-mono text-zinc-400 tracking-wider uppercase block">
              3D & CAD Designer
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/80 rounded-full px-3 py-1.5 backdrop-blur-md" id="desktop-nav-menu">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                id={`nav-link-${link.id}`}
                className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-zinc-800 text-white shadow-sm border border-zinc-700/60'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/40'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Hire Me CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            id="navbar-hire-me-btn"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#c89b3c] hover:bg-[#d8ab4c] text-black transition-all shadow-md shadow-[#c89b3c]/10 hover:shadow-[#c89b3c]/25 active:scale-95"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#c89b3c] text-black"
          >
            Hire Me
          </a>
          <button
            type="button"
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-dropdown"
          className="md:hidden bg-[#0c0d0e]/95 border-b border-zinc-800 backdrop-blur-xl px-4 pt-3 pb-6 mt-2 transition-all shadow-2xl"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-zinc-800 text-[#c89b3c] font-semibold'
                      : 'text-zinc-300 hover:bg-zinc-800/60 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-2 border-t border-zinc-800">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
                className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#c89b3c] text-black hover:bg-[#d8ab4c] transition-colors"
              >
                <span>Let's Discuss a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
