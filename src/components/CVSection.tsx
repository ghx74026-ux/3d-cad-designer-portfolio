import React, { useState } from 'react';
import { FileText, Download, Eye, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { generateAndDownloadCV } from '../utils/generateCV';
import { CVModal } from './CVModal';

export const CVSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    try {
      generateAndDownloadCV();
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (err) {
      console.error('Error generating PDF:', err);
    }
  };

  const handleView = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="cv-section" className="py-20 bg-[#0c0d0e] border-t border-zinc-800/80 relative overflow-hidden">
        {/* Blueprint decorative lines */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 p-8 sm:p-12 shadow-2xl overflow-hidden">
            
            {/* Subtle Ambient Gold Gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#c89b3c]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left: Icon & Text */}
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700 text-[#c89b3c] text-xs font-mono tracking-widest uppercase">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Curriculum Vitae</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white tracking-tight">
                  Download My Professional CV & Portfolio Sheet
                </h2>

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                  Review my full academic background, technical AutoCAD drafting standards, 2D/3D modeling skills, project management, and fabrication experience.
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-zinc-300 font-mono">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> AutoCAD 2D/3D
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Project Management
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Technical Documentation
                  </span>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
                {/* View in Browser */}
                <button
                  type="button"
                  id="view-cv-btn"
                  onClick={handleView}
                  className="w-full py-3.5 px-5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs sm:text-sm border border-zinc-700 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-md"
                >
                  <Eye className="w-4 h-4 text-zinc-300" />
                  <span>View CV in Browser</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </button>

                {/* Download PDF File */}
                <button
                  type="button"
                  id="download-cv-btn"
                  onClick={handleDownload}
                  className="w-full py-3.5 px-5 rounded-xl bg-[#c89b3c] hover:bg-[#d8ab4c] text-black font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 shadow-lg shadow-[#c89b3c]/20"
                >
                  <Download className="w-4 h-4" />
                  <span>{downloadSuccess ? 'PDF Downloaded!' : 'Download CV (PDF)'}</span>
                </button>

                <span className="text-[11px] font-mono text-zinc-400 text-center block mt-1">
                  Format: PDF • Official Verified Resume
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CV Modal for Browser Preview */}
      <CVModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
