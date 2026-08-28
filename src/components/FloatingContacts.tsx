import React from 'react';
import { Mail, Instagram, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FloatingContacts: React.FC = () => {
  const getCleanWhatsappUrl = () => {
    const rawNum = siteConfig.whatsapp.replace(/[^0-9]/g, '');
    const phone = rawNum.length > 0 ? rawNum : '918955110742';
    return `https://wa.me/${phone}?text=${encodeURIComponent(
      `Hello ${siteConfig.name}, I am interested in discussing an AutoCAD / 3D design project.`
    )}`;
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

  return (
    <aside
      id="floating-contacts"
      aria-label="Quick contact links"
      className="fixed bottom-6 right-6 z-30 flex flex-col gap-2.5 items-end select-none"
    >
      {/* WhatsApp Button */}
      <a
        href={getCleanWhatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-black/60 border border-emerald-400/30 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="hidden sm:block absolute right-14 bg-zinc-900 text-white text-xs font-medium px-2.5 py-1 rounded-md shadow-lg border border-zinc-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Instagram Button */}
      <a
        href={getInstagramUrl()}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-instagram-btn"
        className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-amber-600 via-pink-600 to-purple-600 text-white shadow-xl shadow-black/60 border border-pink-400/30 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="View Instagram Profile"
      >
        <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="hidden sm:block absolute right-14 bg-zinc-900 text-white text-xs font-medium px-2.5 py-1 rounded-md shadow-lg border border-zinc-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Instagram Profile
        </span>
      </a>

      {/* Email / Gmail Button */}
      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=${encodeURIComponent(
          'AutoCAD & 3D Design Project Inquiry'
        )}&body=${encodeURIComponent(
          `Hello ${siteConfig.name},\n\nI would like to discuss an AutoCAD / 3D design project with you.`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-email-btn"
        className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-red-600/90 hover:bg-red-500 text-white shadow-xl shadow-black/60 border border-red-400/40 transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="Compose message on Gmail"
        title="Send message on Gmail (irfan0412ali@gmail.com)"
      >
        <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="hidden sm:block absolute right-14 bg-zinc-900 text-white text-xs font-medium px-2.5 py-1 rounded-md shadow-lg border border-zinc-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Gmail: {siteConfig.email}
        </span>
      </a>
    </aside>
  );
};
