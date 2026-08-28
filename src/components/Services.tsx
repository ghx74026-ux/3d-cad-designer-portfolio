import React from 'react';
import { 
  FileSpreadsheet, 
  Box, 
  Home, 
  Armchair, 
  Wrench, 
  Eye, 
  Cpu, 
  PenTool, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { servicesList } from '../data/services';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet': return FileSpreadsheet;
      case 'Box': return Box;
      case 'Home': return Home;
      case 'Armchair': return Armchair;
      case 'Wrench': return Wrench;
      case 'Eye': return Eye;
      case 'Cpu': return Cpu;
      case 'PenTool': return PenTool;
      default: return Box;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0c0d0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#c89b3c] text-xs font-mono tracking-widest uppercase">
            Specialized Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Design & CAD Services
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            End-to-end design solutions spanning technical 2D blueprints, realistic 3D renderings, bespoke furniture engineering, and CNC toolpath fabrication.
          </p>
          <div className="w-12 h-0.5 bg-[#c89b3c] mx-auto rounded-full" />
        </div>

        {/* 8 Services Grid (4 cols on xl, 2 on md, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="group p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-[#c89b3c]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700/80 flex items-center justify-center text-[#c89b3c] group-hover:bg-[#c89b3c] group-hover:text-black transition-all duration-300 mb-5 shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1 mb-3">
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-[#c89b3c] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <div className="text-[11px] font-mono text-zinc-400">
                      {service.subtitle}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed font-light mb-4">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-1.5 mb-6">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-zinc-300">
                        <CheckCircle2 className="w-3 h-3 text-[#c89b3c] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Discuss Project Button */}
                <button
                  type="button"
                  id={`discuss-service-${service.id}`}
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-zinc-800/80 hover:bg-[#c89b3c] text-zinc-300 hover:text-black text-xs font-semibold border border-zinc-700/60 hover:border-[#c89b3c] transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                >
                  <span>Discuss Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
