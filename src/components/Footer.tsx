import React from 'react';
import { Compass, Mail, Instagram, ArrowUp, MessageCircle, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
interface FooterProps { onNavigate: (sectionId: string) => void; }
export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const handleLinkClick = (e: React.MouseEvent, id: string) => { e.preventDefault(); onNavigate(id); };
  const getInstagramUrl = () => siteConfig.instagram.url && siteConfig.instagram.url !== '[YOUR INSTAGRAM URL]' ? siteConfig.instagram.url : `https://instagram.com/${siteConfig.instagram.username.replace('@', '')}`;
  const getWhatsappUrl = () => `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${siteConfig.name}, I saw your portfolio and would like to discuss a design project.`)}`;
  return (
    <footer className="bg-[#08090a] border-t border-zinc-800 text-zinc-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          <div className="md:col-span-5 space-y-4"><div className="flex items-center gap-2.5"><div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#c89b3c]"><Compass className="w-4 h-4" /></div><span className="font-display font-bold text-lg text-white">{siteConfig.name}</span></div><p className="text-xs font-mono text-[#c89b3c] tracking-wider uppercase">AutoCAD • 3D Modeling • Interior • Furniture • CAD/CAM</p><p className="text-xs text-zinc-400 max-w-sm leading-relaxed">Precision-focused design support from concept and CAD documentation to 3D visualization and manufacturing-ready workflows.</p></div>
          <div className="md:col-span-3 space-y-3"><h4 className="text-xs font-mono uppercase tracking-widest text-zinc-200">Explore</h4><ul className="space-y-2 text-xs">{[['home','Home'],['portfolio','Selected Work'],['services','Services'],['process','Design Process'],['quote','Get a Design Quote'],['about','About Me'],['contact','Contact Me']].map(([id,label]) => <li key={id}><a href={`#${id}`} onClick={(e) => handleLinkClick(e,id)} className="hover:text-white transition-colors">{label}</a></li>)}</ul></div>
          <div className="md:col-span-4 space-y-3"><h4 className="text-xs font-mono uppercase tracking-widest text-zinc-200">Start a Project</h4><p className="text-xs leading-relaxed">Have a furniture, product, interior or CAD requirement? Send the brief and start a conversation.</p><a href="#quote" onClick={(e) => handleLinkClick(e,'quote')} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#c89b3c] text-black text-xs font-bold hover:bg-[#d8ab4c] transition-colors">Get a Design Quote <ArrowUpRight className="w-3.5 h-3.5" /></a><div className="space-y-2.5 text-xs pt-2"><a href={getWhatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors"><MessageCircle className="w-4 h-4" /> WhatsApp</a><a href={getInstagramUrl()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-pink-400 transition-colors"><Instagram className="w-4 h-4" /> Instagram</a><a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:text-red-400 transition-colors"><Mail className="w-4 h-4" /> {siteConfig.email}</a></div></div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono"><p>© {currentYear} {siteConfig.name}. All Rights Reserved.</p><button type="button" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} className="flex items-center gap-1.5 hover:text-white transition-colors"><span>Back to top</span><ArrowUp className="w-3.5 h-3.5" /></button></div>
      </div>
    </footer>
  );
};
