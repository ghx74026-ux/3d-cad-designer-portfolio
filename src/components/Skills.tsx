import React from 'react';
import { Layers, Box, PenTool, Cpu, Check, ShieldCheck } from 'lucide-react';
import { skillCategories } from '../data/skills';
import { SkillLevel } from '../types';

export const Skills: React.FC = () => {
  const getLevelBadgeClass = (level: SkillLevel) => {
    switch (level) {
      case 'Advanced':
        return 'bg-[#c89b3c]/15 text-[#e5b34e] border-[#c89b3c]/40';
      case 'Professional':
        return 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
      case 'Intermediate':
        return 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30';
      case 'Working Knowledge':
        return 'bg-zinc-800 text-zinc-300 border-zinc-700';
      default:
        return 'bg-zinc-800 text-zinc-400 border-zinc-700';
    }
  };

  const getCategoryIcon = (title: string) => {
    if (title.includes('CAD')) return Layers;
    if (title.includes('Interior') || title.includes('Furniture')) return Box;
    if (title.includes('Graphic')) return PenTool;
    return Cpu;
  };

  return (
    <section id="skills" className="py-24 bg-[#0c0d0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#c89b3c] text-xs font-mono tracking-widest uppercase">
            Technical Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Design & Technical Skills
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Comprehensive skill matrix structured across drafting, 3D visualization, spatial design, and CNC manufacturing.
          </p>
          <div className="w-12 h-0.5 bg-[#c89b3c] mx-auto rounded-full" />
        </div>

        {/* Categories Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = getCategoryIcon(category.title);
            return (
              <div
                key={idx}
                className="bg-zinc-900/70 border border-zinc-800/90 rounded-2xl p-6 sm:p-7 hover:border-zinc-700/80 transition-all duration-300 shadow-xl shadow-black/20 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 pb-4 border-b border-zinc-800 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[#c89b3c]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-display text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5 font-light">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skill Items in Category */}
                  <div className="space-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60 flex items-center justify-between gap-3 hover:bg-zinc-950 transition-colors"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-zinc-100">{skill.name}</span>
                          </div>
                          {skill.description && (
                            <p className="text-[11px] text-zinc-400 mt-0.5 truncate" title={skill.description}>
                              {skill.description}
                            </p>
                          )}
                        </div>

                        {/* Editable Proficiency Level Badge (no fake percentage bars) */}
                        <span
                          className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium border shrink-0 ${getLevelBadgeClass(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>{category.skills.length} Specialized Competencies</span>
                  <span className="text-[#c89b3c]/80 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Production Ready
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
