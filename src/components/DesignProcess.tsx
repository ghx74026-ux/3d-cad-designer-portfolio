import React from 'react';
import { ArrowRight, Box, CheckCircle2, FileText, Hammer, Palette, Ruler, Sparkles } from 'lucide-react';

const steps = [
  { number: '01', title: 'Concept', text: 'Understand the idea, reference images, dimensions and project goals.', icon: Sparkles },
  { number: '02', title: '2D CAD', text: 'Create accurate plans, elevations, sections and production drawings.', icon: Ruler },
  { number: '03', title: '3D Modeling', text: 'Build detailed furniture, product or interior models ready for review.', icon: Box },
  { number: '04', title: 'Material & Finish', text: 'Define marble, wood, metal, fabric, colour and construction details.', icon: Palette },
  { number: '05', title: 'Technical Docs', text: 'Prepare dimensions, assembly details, specifications and deliverables.', icon: FileText },
  { number: '06', title: 'Manufacturing', text: 'Finalize CNC-ready and production-focused files for execution.', icon: Hammer },
];

export const DesignProcess: React.FC = () => (
  <section id="process" className="py-24 bg-[#0e0f11] border-y border-zinc-800/70 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
        <div className="section-kicker mx-auto">My Workflow</div>
        <h2 className="section-title">From Idea to Production-Ready Design</h2>
        <p className="section-copy mx-auto">
          A clear design workflow that connects creative concepts with accurate CAD documentation and manufacturing requirements.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="luxury-card group p-6 relative overflow-hidden">
              <div className="flex items-start justify-between mb-7">
                <div className="w-11 h-11 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[#c89b3c] group-hover:bg-[#c89b3c] group-hover:text-black transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-zinc-600">{step.number}</span>
              </div>
              <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-[#c89b3c] transition-colors">{step.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{step.text}</p>
              {index < steps.length - 1 && <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 w-8 h-8 text-zinc-700 bg-[#0e0f11] rounded-full" />}
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-mono text-zinc-400">
        {['Accurate Dimensions', 'Production Drawings', 'Assembly Details', 'CNC-Ready Workflow'].map((item) => (
          <span key={item} className="inline-flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#c89b3c]" /> {item}
          </span>
        ))}
      </div>
    </div>
  </section>
);
