import React from 'react';
import { X, Download, Printer, MapPin, Phone, Mail, CheckCircle2, Briefcase, GraduationCap, Globe, Award } from 'lucide-react';
import { defaultCVData, generateAndDownloadCV } from '../utils/generateCV';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const data = defaultCVData;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    generateAndDownloadCV(data);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-zinc-900 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#c89b3c]/20 border border-[#c89b3c]/40 flex items-center justify-center text-[#c89b3c] font-bold text-sm">
              CV
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm sm:text-base">Irfan Ali — Curriculum Vitae</h3>
              <p className="text-xs text-zinc-400 font-mono">AutoCAD & 3D Designer • Print & PDF Ready</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#c89b3c] hover:bg-[#d8ab4c] text-black font-semibold text-xs transition-colors cursor-pointer shadow"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-colors border border-zinc-700 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-zinc-900 selection:bg-[#c89b3c]/30">
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* CV Header */}
            <div className="border-b border-zinc-200 pb-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 font-display">
                    {data.name}
                  </h1>
                  <p className="text-[#a87c24] font-semibold text-sm sm:text-base mt-0.5 tracking-wide uppercase">
                    {data.title}
                  </p>
                </div>
              </div>

              {/* Contact Meta */}
              <div className="flex flex-wrap gap-y-2 gap-x-5 text-xs text-zinc-600 mt-3 font-medium">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#c89b3c]" /> {data.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#c89b3c]" /> {data.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#c89b3c]" /> {data.email}
                </span>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c89b3c]" />
                Summary
              </h2>
              <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed pl-4">
                {data.summary}
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c89b3c]" />
                Core Skills & Competencies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4">
                {data.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 text-xs text-zinc-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c89b3c] flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c89b3c]" />
                Professional Experience
              </h2>
              
              <div className="space-y-4 pl-4">
                {data.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-zinc-200 pl-4 relative space-y-1">
                    <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#c89b3c]" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                      <span className="font-bold text-zinc-950">{exp.role}</span>
                      <span className="text-[#a87c24] font-semibold text-xs font-mono">{exp.period}</span>
                    </div>
                    <p className="text-xs text-zinc-600 italic font-medium">
                      {exp.company}, {exp.location}
                    </p>
                    <ul className="mt-2 space-y-1 text-xs text-zinc-700 list-disc list-outside pl-3.5">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="leading-normal">{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Languages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-zinc-200">
              {/* Education */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#c89b3c]" />
                  Education and Training
                </h2>
                <div className="pl-6 space-y-1">
                  {data.education.map((edu, idx) => (
                    <div key={idx}>
                      <p className="font-bold text-xs text-zinc-950">{edu.institution}</p>
                      <p className="text-xs text-zinc-600">{edu.location} • {edu.status}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-[#c89b3c]" />
                  Languages
                </h2>
                <div className="pl-6 space-y-1 text-xs text-zinc-800">
                  {data.languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center justify-between pr-4">
                      <span className="font-medium text-zinc-900">{lang.language}</span>
                      <span className="text-zinc-600 font-mono text-[11px]">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
