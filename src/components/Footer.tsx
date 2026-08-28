import React from 'react';
import { Compass, Mail, Phone, Instagram, ArrowUp, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getInstagramUrl = () => {
    if (siteConfig.instagram.url && siteConfig.instagram.url !== '[YOUR INSTAGRAM URL]') {
      return siteConfig.instagram.url;
    }
    if (siteConfig.instagram.username && siteConfig.instagram.username !== '[YOUR INSTAGRAM ID]') {
      return `https://instagram.com/${siteConfig.instagram.username.replace('@', '')}`;
    }
    return 'https://instagram.com';
  };

  const getCleanWhatsappUrl = () => {
    const rawNum = siteConfig.whatsapp.replace(/[^0-9]/g, '');
    const phone = rawNum.length > 0 ? rawNum : '918955110742';
    return `https://wa.me/${phone}?text=${encodeURIComponent(
      `Hello ${siteConfig.name}, I saw your portfolio and would like to connect.`
    )}`;
  };

  return (
    <footer className="bg-[#08090a] border-t border-zinc-800 text-zinc-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Brand & Specialty */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#c89b3c]">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                {siteConfig.name}
              </span>
            </div>
            
            <p className="text-xs font-mono text-[#c89b3c] tracking-wider uppercase">
              AutoCAD • 3D Modeling • Interior • Furniture • CAD/CAM
            </p>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed font-light">
              Delivering high precision architectural drafts, realistic 3D renderings, bespoke furniture engineering, and CNC toolpath solutions.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, 'home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => handleLinkClick(e, 'skills')}
                  className="hover:text-white transition-colors"
                >
                  Technical Skills
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleLinkClick(e, 'portfolio')}
                  className="hover:text-white transition-colors"
                >
                  Portfolio / Selected Work
                </a>
              </li>
              <li>
                <a
                  href="#software"
                  onClick={(e) => handleLinkClick(e, 'software')}
                  className="hover:text-white transition-colors"
                >
                  Software Stack
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, 'about')}
                  className="hover:text-white transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, 'contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Social Channels & Contacts */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-200">
              Connect Directly
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={getInstagramUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-zinc-400 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram: {siteConfig.instagram.username}</span>
              </a>

              <a
                href={getCleanWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-zinc-400 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {siteConfig.whatsapp}</span>
              </a>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=${encodeURIComponent(
                  'AutoCAD & 3D Design Project Inquiry'
                )}&body=${encodeURIComponent(
                  `Hello ${siteConfig.name},\n\nI would like to discuss an AutoCAD / 3D design project with you.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-zinc-400 hover:text-red-400 transition-colors"
                title={`Compose Email to ${siteConfig.email}`}
              >
                <Mail className="w-4 h-4" />
                <span>Gmail: {siteConfig.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <p>
            © {currentYear} {siteConfig.name}. All Rights Reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
