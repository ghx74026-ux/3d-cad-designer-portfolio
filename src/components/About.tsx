import React from 'react';
import { User, Briefcase, MapPin, Clock, Mail, CheckCircle2, Award, Compass, DraftingCompass, Cpu } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const About: React.FC = () => {
  const infoCards = [
    { label: 'Name', value: siteConfig.name, icon: User },
    { label: 'Profession', value: siteConfig.profession, icon: Briefcase },
    { label: 'Location', value: siteConfig.location, icon: MapPin },
    { label: 'Experience', value: siteConfig.experience, icon: Clock },
    { label: 'Email', value: siteConfig.email, icon: Mail },
    { label: 'Availability', value: siteConfig.availability, icon: CheckCircle2 },
  ];

  const focusPoints = [
    {
      title: "Precision 2D Drafting",
      desc: "Architectural floorplans, elevations, and millimeter-accurate joinery manufacturing drawings in AutoCAD."
    },
    {
      title: "Realistic 3D Visualization",
      desc: "High-end 3D models with studio lighting, realistic materials, and textured scenes in 3ds Max and KeyShot."
    },
    {
      title: "CAM & CNC Manufacturing",
      desc: "Direct conversion into machine-ready reliefs, vector nested panels in CorelDRAW and ArtCAM."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0e0f11] border-t border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#c89b3c] text-xs font-mono tracking-widest uppercase">
            Designer Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-0.5 bg-[#c89b3c] mx-auto rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Narrative Bio */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-white leading-snug">
              Transforming concepts into accurate 2D drawings, realistic 3D renderings & production-ready CAD files.
            </h3>
            
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
              {siteConfig.aboutText}
            </p>

            <div className="pt-4 space-y-4">
              {focusPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-[#c89b3c] mt-2 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-white font-display">{item.title}</h4>
                    <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Structured Information Cards */}
          <div className="lg:col-span-6">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/40 space-y-6">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <span className="font-display font-bold text-lg text-white">Professional Information</span>
                <span className="text-xs font-mono text-zinc-400 bg-zinc-800/80 px-2.5 py-1 rounded-md">Verified Specs</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {infoCards.map((card, index) => {
                  const Icon = card.icon;
                  const isEmail = card.label === 'Email';
                  const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=${encodeURIComponent(
                    'AutoCAD & 3D Design Project Inquiry'
                  )}`;

                  return (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/60 hover:border-zinc-700/80 transition-colors flex items-start gap-3.5"
                    >
                      <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#c89b3c] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-mono text-zinc-400 block">{card.label}</span>
                        {isEmail ? (
                          <a
                            href={emailUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-[#c89b3c] hover:underline mt-0.5 block truncate"
                            title={`Send message to ${card.value}`}
                          >
                            {card.value}
                          </a>
                        ) : (
                          <span className="text-sm font-medium text-zinc-200 mt-0.5 block truncate" title={card.value}>
                            {card.value}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Working Principles */}
              <div className="pt-2">
                <div className="p-4 rounded-xl bg-[#c89b3c]/5 border border-[#c89b3c]/20 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#c89b3c]/10 text-[#c89b3c] flex items-center justify-center shrink-0">
                    <Compass className="w-4 h-4" />
                  </div>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed">
                    Committed to <strong className="text-white font-medium">precision tolerances</strong>, strict manufacturing feasibility, and clear client presentation at every phase.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
