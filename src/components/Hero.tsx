import React from 'react';
import { ArrowRight, Download, Mail, Instagram, MessageCircle, Compass, Eye, Cpu, ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { generateAndDownloadCV } from '../utils/generateCV';
import heroInteriorBg from '../assets/images/hero_luxury_interior_1786861236727.jpg';
import { SoftwareOrbit } from './SoftwareOrbit';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleCvDownload = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    generateAndDownloadCV();
  };

  const handleWhatsappClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const rawNum = siteConfig.whatsapp.replace(/[^0-9]/g, '');
    const phone = rawNum.length > 0 ? rawNum : '918955110742';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      `Hello ${siteConfig.name}, I saw your portfolio and would like to discuss an AutoCAD / 3D design project.`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=${encodeURIComponent(
      'AutoCAD & 3D Design Project Inquiry'
    )}&body=${encodeURIComponent(
      `Hello ${siteConfig.name},\n\nI would like to discuss an AutoCAD / 3D design project with you.`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleInstagramClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = siteConfig.instagram.url && siteConfig.instagram.url !== "[YOUR INSTAGRAM URL]"
      ? siteConfig.instagram.url
      : siteConfig.instagram.username && siteConfig.instagram.username !== "[YOUR INSTAGRAM ID]"
        ? `https://instagram.com/${siteConfig.instagram.username.replace('@', '')}`
        : "https://instagram.com";
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 lg:py-0 flex items-center justify-center overflow-hidden bg-[#0c0d0e]"
    >
      {/* Luxury Architectural Interior Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src={heroInteriorBg}
          alt="Architectural Interior"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-105 scale-105"
        />
        {/* Layered cinematic dark gradient overlays for pristine text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d0e] via-[#0c0d0e]/90 to-[#0c0d0e]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-transparent to-[#0c0d0e]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0d0e]/80 via-transparent to-[#0c0d0e]" />
        
        {/* Warm ambient interior light glow */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/80 border border-zinc-800/90 text-zinc-300 text-xs font-mono tracking-wide backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{siteConfig.availability}</span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.15]">
                Hi, I'm <span className="text-[#c89b3c]">{siteConfig.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-300 tracking-tight font-display">
                {siteConfig.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-zinc-300/90 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              {siteConfig.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              {/* View My Work */}
              <button
                type="button"
                id="hero-view-work-btn"
                onClick={() => onNavigate('portfolio')}
                className="px-6 py-3 rounded-xl bg-[#c89b3c] hover:bg-[#d8ab4c] text-black font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-[#c89b3c]/20 hover:shadow-[#c89b3c]/35 active:scale-95 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Contact Me */}
              <button
                type="button"
                id="hero-contact-btn"
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white font-medium text-sm border border-zinc-700/80 backdrop-blur-md transition-all duration-200 flex items-center gap-2 hover:border-zinc-500 active:scale-95 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>Contact Me</span>
              </button>

              {/* Download CV */}
              <button
                type="button"
                id="hero-cv-btn"
                onClick={handleCvDownload}
                className="px-5 py-3 rounded-xl bg-zinc-900/70 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-sm border border-zinc-800/90 backdrop-blur-md transition-all duration-200 flex items-center gap-2 cursor-pointer"
                title="Download CV (PDF)"
              >
                <Download className="w-4 h-4 text-[#c89b3c]" />
                <span>Download CV</span>
              </button>

              {/* WhatsApp Direct Chat */}
              <button
                type="button"
                id="hero-whatsapp-btn"
                onClick={handleWhatsappClick}
                className="p-3 rounded-xl bg-zinc-900/80 hover:bg-emerald-950/80 text-emerald-400 hover:text-emerald-300 border border-zinc-800 hover:border-emerald-500/50 backdrop-blur-md transition-all duration-200 flex items-center justify-center cursor-pointer shadow-md"
                title="Chat on WhatsApp (+91 8955110742)"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </button>

              {/* Instagram Profile */}
              <button
                type="button"
                id="hero-instagram-btn"
                onClick={handleInstagramClick}
                className="p-3 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-pink-400 hover:text-pink-300 border border-zinc-800 hover:border-pink-500/40 backdrop-blur-md transition-all duration-200 flex items-center justify-center cursor-pointer shadow-md"
                title={`Open Instagram (${siteConfig.instagram.username})`}
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
              </button>

              {/* Direct Gmail Compose */}
              <button
                type="button"
                id="hero-email-btn"
                onClick={handleEmailClick}
                className="p-3 rounded-xl bg-zinc-900/80 hover:bg-red-950/80 text-red-400 hover:text-red-300 border border-zinc-800 hover:border-red-500/50 backdrop-blur-md transition-all duration-200 flex items-center justify-center cursor-pointer shadow-md"
                title={`Send message on Gmail (${siteConfig.email})`}
                aria-label="Send message on Gmail"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Metrics / Focus Badges */}
            <div className="pt-4 border-t border-zinc-800/80 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center justify-center text-[#c89b3c] shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-zinc-200 font-display font-bold text-sm sm:text-base leading-tight">AutoCAD 2D</div>
                  <div className="text-zinc-400 text-[11px] font-mono">Precision Drafting</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center justify-center text-amber-400 shrink-0">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-zinc-200 font-display font-bold text-sm sm:text-base leading-tight">3D & Render</div>
                  <div className="text-zinc-400 text-[11px] font-mono">Photoreal Stills</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-center justify-center text-cyan-400 shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-zinc-200 font-display font-bold text-sm sm:text-base leading-tight">CAD/CAM</div>
                  <div className="text-zinc-400 text-[11px] font-mono">CNC Ready</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Software Orbit & CAD Hub Presentation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <SoftwareOrbit />
          </div>

        </div>
      </div>

      {/* Animated Scroll Down Indicator Button */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          type="button"
          id="hero-scroll-down-indicator"
          onClick={() => onNavigate('skills')}
          className="flex flex-col items-center gap-1 text-zinc-400 hover:text-[#c89b3c] transition-colors cursor-pointer group p-2 bg-zinc-900/50 hover:bg-zinc-900/80 backdrop-blur-md rounded-full border border-zinc-800/80 hover:border-[#c89b3c]/40 shadow-lg"
          aria-label="Scroll to Skills section"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase px-1">Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#c89b3c]" />
        </button>
      </div>
    </section>
  );
};
