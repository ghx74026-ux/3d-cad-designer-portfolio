import React, { useEffect, useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Download, 
  Mail, 
  Calendar, 
  Tag, 
  Layers, 
  CheckCircle2, 
  Maximize2,
  FileText,
  Building,
  Sliders
} from 'lucide-react';
import { PortfolioProject } from '../types';
import { ImageLightbox } from './ImageLightbox';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onContactAboutProject: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onContactAboutProject,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !lightboxOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, lightboxOpen]);

  if (!project) return null;

  const allImages = [
    project.coverImage,
    ...(project.images || []).filter((img) => img !== project.coverImage),
  ];

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div
        id="project-detail-modal"
        className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div
          className="relative w-full max-w-4xl bg-[#0e0f11] border border-zinc-800 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Modal Header Bar with Close */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0e0f11]/90 backdrop-blur-md border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-zinc-900 border border-zinc-800 text-[#c89b3c]">
                {project.category}
              </span>
              {project.year && (
                <span className="text-xs font-mono text-zinc-400">
                  • {project.year}
                </span>
              )}
            </div>

            <button
              type="button"
              id="close-project-modal-btn"
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Modal Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            
            {/* Hero Image Showcase */}
            <div
              className="relative aspect-16/9 w-full rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 group cursor-pointer"
              onClick={() => handleOpenLightbox(0)}
            >
              <img
                src={project.coverImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5 border border-white/10 opacity-90 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Enlarge (Click to view full)</span>
              </div>
            </div>

            {/* Title & Headline Specs */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                {project.title}
              </h2>
              
              {/* Software Tags */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs text-zinc-400 font-mono flex items-center gap-1 mr-1">
                  <Layers className="w-3.5 h-3.5" /> Software:
                </span>
                {project.software.map((sw, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 font-medium"
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[#c89b3c]">
                Project Overview
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Client (if explicitly available) */}
            {project.client && (
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3">
                <Building className="w-4 h-4 text-[#c89b3c]" />
                <div className="text-xs">
                  <span className="text-zinc-400">Client / Organization: </span>
                  <span className="text-zinc-200 font-medium">{project.client}</span>
                </div>
              </div>
            )}

            {/* Services Provided */}
            {project.services && project.services.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#c89b3c]">
                  Services & Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.services.map((srv, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-2.5 text-xs text-zinc-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#c89b3c] shrink-0" />
                      <span>{srv}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Specifications (if present) */}
            {project.specs && Object.keys(project.specs).length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#c89b3c] flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" /> Technical Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(project.specs).map(([key, val], idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80"
                    >
                      <span className="text-[11px] font-mono text-zinc-400 block">{key}</span>
                      <span className="text-xs font-medium text-zinc-200 mt-0.5 block">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Design Process */}
            {project.process && project.process.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#c89b3c]">
                  Execution Process
                </h3>
                <div className="space-y-3">
                  {project.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/60"
                    >
                      <div className="w-6 h-6 rounded-full bg-zinc-800 text-[#c89b3c] font-mono text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Image Gallery Grid (Thumbnails) */}
            {allImages.length > 1 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-[#c89b3c]">
                    Project Gallery
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">
                    {allImages.length} Images • Click to enlarge
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {allImages.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleOpenLightbox(idx)}
                      className="relative aspect-4/3 rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 cursor-pointer group"
                    >
                      <img
                        src={img}
                        alt={`${project.title} view ${idx + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Actions: Discuss Project & Downloads */}
            <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  id="project-modal-discuss-btn"
                  onClick={() => {
                    onClose();
                    onContactAboutProject(project.title);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#c89b3c] hover:bg-[#d8ab4c] text-black font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c89b3c]/20 active:scale-95 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Discuss This Project</span>
                </button>
              </div>

              {/* Optional PDF / Project Link */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                {project.pdf && (
                  <a
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-medium border border-zinc-800 transition-colors flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5 text-[#c89b3c]" />
                    <span>Project Specs PDF</span>
                  </a>
                )}
                {project.projectLink && (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-xs font-medium border border-zinc-800 transition-colors flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Live Showcase</span>
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Lightbox when activated */}
      {lightboxOpen && (
        <ImageLightbox
          images={allImages}
          initialIndex={lightboxIndex}
          title={project.title}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
};
