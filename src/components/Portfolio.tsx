import React, { useState, useMemo } from 'react';
import { Layers, ArrowUpRight, Eye, Sparkles, Filter, Check } from 'lucide-react';
import { portfolioProjects } from '../data/portfolio';
import { PortfolioProject } from '../types';

interface PortfolioProps {
  onSelectProject: (project: PortfolioProject) => void;
}

const CATEGORIES = [
  'All',
  'Furniture',
  'Interior',
  '3D Modeling',
  'ArtCAM',
  'CNC',
  'CorelDRAW'
] as const;

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return portfolioProjects;
    return portfolioProjects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0e0f11] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#c89b3c] text-xs font-mono tracking-widest uppercase">
            Portfolio Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Selected Work
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            A selection of my 2D, 3D, interior, furniture and CAD/CAM projects engineered for precision, aesthetic balance, and manufacturing.
          </p>
          <div className="w-12 h-0.5 bg-[#c89b3c] mx-auto rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar px-2">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = cat === 'All' 
              ? portfolioProjects.length 
              : portfolioProjects.filter(p => p.category === cat).length;

            return (
              <button
                key={cat}
                type="button"
                id={`portfolio-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#c89b3c] text-black font-semibold shadow-md shadow-[#c89b3c]/20'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-black/20 text-black' : 'bg-zinc-800 text-zinc-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid: 3 cols (desktop), 2 cols (tablet), 1 col (mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const hasImgError = imgErrors[project.id];

            return (
              <div
                key={project.id}
                id={`portfolio-card-${project.id}`}
                className="group bg-zinc-900/70 rounded-2xl border border-zinc-800/90 overflow-hidden hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div
                  className="relative aspect-16/10 w-full overflow-hidden bg-zinc-950 cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  {!hasImgError ? (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(project.id)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* Fallback CAD graphic */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center cad-grid-bg bg-zinc-950">
                      <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#c89b3c] mb-2">
                        <Layers className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono text-zinc-400">{project.category} CAD Blueprint</span>
                    </div>
                  )}

                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-black/20 opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Category Pill Top Left */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-black/70 backdrop-blur-md text-[#c89b3c] border border-white/10 shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Year Top Right */}
                  {project.year && (
                    <div className="absolute top-3.5 right-3.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/60 backdrop-blur-md text-zinc-400 border border-zinc-800">
                        {project.year}
                      </span>
                    </div>
                  )}

                  {/* Quick View Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <div className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs flex items-center gap-1.5 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Explore Project</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Software tags */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-2.5">
                      {project.software.map((sw, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-[10px] font-mono text-zinc-400"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-lg font-bold font-display text-white group-hover:text-[#c89b3c] transition-colors cursor-pointer leading-snug"
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-3 border-t border-zinc-800/70 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-zinc-400">
                      {project.services ? `${project.services.length} Services` : 'Specifications Ready'}
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#c89b3c] hover:text-[#d8ab4c] transition-colors cursor-pointer group/btn"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty state safeguard */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-zinc-900/40 rounded-2xl border border-zinc-800">
            <p className="text-zinc-400 text-sm">No projects found in this category.</p>
            <button
              type="button"
              onClick={() => setSelectedCategory('All')}
              className="mt-3 px-4 py-2 rounded-lg bg-zinc-800 text-white text-xs font-medium hover:bg-zinc-700"
            >
              Reset Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
