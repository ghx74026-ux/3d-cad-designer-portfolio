import React from 'react';
import { Layers, Box, PenTool, Cpu, Sparkles, CheckCircle, FolderGit2 } from 'lucide-react';
import { softwareTools } from '../data/skills';
import { SoftwareTool, SkillLevel } from '../types';

export const Software: React.FC = () => {
  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return Layers;
      case 'Box': return Box;
      case 'PenTool': return PenTool;
      case 'Cpu': return Cpu;
      case 'Sparkles': return Sparkles;
      default: return Layers;
    }
  };

  const getBadgeStyle = (level: SkillLevel) => {
    if (level === 'Advanced') return 'bg-[#c89b3c]/15 text-[#e5b34e] border-[#c89b3c]/40';
    if (level === 'Professional') return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
    return 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30';
  };

  return (
    <section id="software" className="py-24 bg-[#0e0f11] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#c89b3c] text-xs font-mono tracking-widest uppercase">
            Tooling & Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Software I Use
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Industry-standard digital applications utilized for drafting, complex polygonal modeling, photorealistic rendering, and CNC toolpath generation.
          </p>
          <div className="w-12 h-0.5 bg-[#c89b3c] mx-auto rounded-full" />
        </div>

        {/* Software Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {softwareTools.map((tool) => {
            const Icon = getToolIcon(tool.iconName);
            return (
              <div
                key={tool.id}
                className="group p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Level */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700/80 flex items-center justify-center text-[#c89b3c] group-hover:bg-[#c89b3c]/10 group-hover:border-[#c89b3c]/40 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border ${getBadgeStyle(
                        tool.level
                      )}`}
                    >
                      {tool.level}
                    </span>
                  </div>

                  {/* Software Name & Category Tag */}
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold font-display text-white group-hover:text-[#c89b3c] transition-colors">
                        {tool.name}
                      </h3>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                        {tool.tag}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                    {tool.description}
                  </p>
                </div>

                {/* Bottom Stats */}
                <div className="mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    Production Ready
                  </span>
                  {tool.projectCount && (
                    <span className="text-zinc-400">
                      {tool.projectCount}+ Completed Projects
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
