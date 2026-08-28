import React, { useState } from 'react';
import { Box, Sparkles, Layers } from 'lucide-react';

interface SoftwareItem {
  id: string;
  name: string;
  category: string;
  color: string;
  renderIcon: () => React.ReactNode;
}

export const softwareList: SoftwareItem[] = [
  {
    id: '3dsmax',
    name: '3ds Max',
    category: '3D Modeling & Render',
    color: '#06b6d4',
    renderIcon: () => (
      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#06b6d4] to-[#0e7490] border border-cyan-300/40 flex items-center justify-center shadow-lg shadow-cyan-950/60 group-hover:scale-110 transition-transform">
        <span className="font-extrabold text-white text-base sm:text-lg md:text-xl font-sans leading-none">3</span>
      </div>
    ),
  },
  {
    id: 'vray',
    name: 'V-Ray',
    category: 'Photorealistic Engine',
    color: '#3b82f6',
    renderIcon: () => (
      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] border border-blue-400/50 flex items-center justify-center shadow-lg shadow-blue-950/60 group-hover:scale-110 transition-transform">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8.5L12 18L18 8.5" />
          <path d="M12 18C15 13 18 10 18 6.5C18 4 16 3 13.5 3C10.5 3 9 5 9 7.5" />
        </svg>
      </div>
    ),
  },
  {
    id: 'corona',
    name: 'Corona',
    category: 'Architectural Rendering',
    color: '#f97316',
    renderIcon: () => (
      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#f97316] to-[#c2410c] border border-orange-400/50 flex items-center justify-center shadow-lg shadow-orange-950/60 group-hover:scale-110 transition-transform">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2.5V5M12 19V21.5M2.5 12H5M19 12H21.5M5.3 5.3L7.1 7.1M16.9 16.9L18.7 18.7M5.3 18.7L7.1 16.9M16.9 7.1L18.7 5.3" strokeLinecap="round" />
        </svg>
      </div>
    ),
  },
  {
    id: 'photoshop',
    name: 'Photoshop',
    category: 'Post-Production & Texture',
    color: '#38bdf8',
    renderIcon: () => (
      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-[#001e36] border-2 border-[#38bdf8] flex items-center justify-center shadow-lg shadow-sky-950/60 group-hover:scale-110 transition-transform">
        <span className="font-extrabold text-[#38bdf8] text-xs sm:text-sm md:text-base font-sans tracking-tight leading-none">Ps</span>
      </div>
    ),
  },
  {
    id: 'coreldraw',
    name: 'CorelDRAW',
    category: 'Vector & Laser/CNC Layout',
    color: '#22c55e',
    renderIcon: () => (
      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-b from-[#4ade80] to-[#16a34a] border border-emerald-300/60 flex items-center justify-center shadow-lg shadow-emerald-950/60 group-hover:scale-110 transition-transform">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C7.58 2 4 5.58 4 10C4 13.5 6.5 16.5 9.5 18V21C9.5 21.55 9.95 22 10.5 22H13.5C14.05 22 14.5 21.55 14.5 21V18C17.5 16.5 20 13.5 20 10C20 5.58 16.42 2 12 2ZM8 10C8 7.79 9.79 6 12 6C14.21 6 16 7.79 16 10C16 12 14.5 14 12 15C9.5 14 8 12 8 10Z" opacity="0.9" />
          <path d="M11 19H13V21H11V19Z" fill="#14532d" />
        </svg>
      </div>
    ),
  },
  {
    id: 'lumion',
    name: 'Lumion',
    category: 'Architectural Animation',
    color: '#60a5fa',
    renderIcon: () => (
      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#334155] border border-blue-400/40 flex items-center justify-center shadow-lg shadow-slate-950/60 group-hover:scale-110 transition-transform">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V10" />
          <path d="M12 14L8 10M12 12L16 8M12 16L6 12M12 10L17 5M12 18L18 14" />
          <circle cx="12" cy="6" r="2" fill="currentColor" fillOpacity="0.4" />
        </svg>
      </div>
    ),
  },
  {
    id: 'keyshot',
    name: 'KeyShot',
    category: 'Product & Material Render',
    color: '#38bdf8',
    renderIcon: () => (
      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#0284c7] to-[#0369a1] border border-sky-300/50 flex items-center justify-center shadow-lg shadow-sky-950/60 group-hover:scale-110 transition-transform">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="8" />
          <path d="M12 4L16 12L8 12Z" strokeLinejoin="round" fill="white" fillOpacity="0.3" />
          <circle cx="12" cy="12" r="3" fill="white" />
        </svg>
      </div>
    ),
  },
  {
    id: 'illustrator',
    name: 'Illustrator',
    category: 'Vector & Precision CAD Art',
    color: '#f59e0b',
    renderIcon: () => (
      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-[#261300] border-2 border-[#f59e0b] flex items-center justify-center shadow-lg shadow-amber-950/60 group-hover:scale-110 transition-transform">
        <span className="font-extrabold text-[#f59e0b] text-xs sm:text-sm md:text-base font-sans tracking-tight leading-none">Ai</span>
      </div>
    ),
  },
  {
    id: 'artcam',
    name: 'Autodesk ArtCAM',
    category: '3D Bas-Relief & CNC Carving',
    color: '#dc2626',
    renderIcon: () => (
      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#b91c1c] via-[#991b1b] to-[#7f1d1d] border border-red-400/40 flex items-center justify-center shadow-lg shadow-red-950/60 group-hover:scale-110 transition-transform">
        <span className="font-extrabold text-white text-base sm:text-lg md:text-xl font-display leading-none">A</span>
      </div>
    ),
  },
  {
    id: 'maya',
    name: 'Maya',
    category: '3D Animation & Topology',
    color: '#0d9488',
    renderIcon: () => (
      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#0d9488] via-[#0f766e] to-[#115e59] border border-teal-300/40 flex items-center justify-center shadow-lg shadow-teal-950/60 group-hover:scale-110 transition-transform">
        <span className="font-extrabold text-white text-base sm:text-lg md:text-xl font-display leading-none">M</span>
      </div>
    ),
  },
  {
    id: 'autocad',
    name: 'AutoCAD',
    category: '2D/3D Precision Drafting',
    color: '#ef4444',
    renderIcon: () => (
      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-[#ef4444] via-[#dc2626] to-[#991b1b] border border-red-400/50 flex items-center justify-center shadow-lg shadow-red-950/60 group-hover:scale-110 transition-transform">
        <span className="font-extrabold text-white text-base sm:text-lg md:text-xl font-display leading-none">A</span>
      </div>
    ),
  },
];

export const SoftwareOrbit: React.FC = () => {
  const [hoveredApp, setHoveredApp] = useState<string | null>(null);

  const total = softwareList.length;

  return (
    <div className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none">
      
      {/* Outer Orbit Guide Rings */}
      <div className="absolute inset-4 sm:inset-6 rounded-full border border-zinc-700/50 border-dashed animate-[spin_120s_linear_infinite] pointer-events-none" />
      <div className="absolute inset-10 sm:inset-12 rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute inset-20 sm:inset-24 rounded-full border border-zinc-800/80 pointer-events-none" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

      {/* Central Core Hub */}
      <div className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full bg-gradient-to-b from-zinc-900/95 via-zinc-950 to-[#0c0d0e] border border-zinc-700/80 shadow-2xl shadow-black flex flex-col items-center justify-center p-4 text-center backdrop-blur-md">
        
        {/* Subtle Radial Hub Glow */}
        <div className="absolute inset-0 rounded-full bg-[#c89b3c]/5 blur-xl pointer-events-none" />
        
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-zinc-900/90 border border-zinc-700/80 flex items-center justify-center text-[#c89b3c] mb-2 sm:mb-2.5 shadow-inner">
          <Box className="w-5 h-5 sm:w-6 sm:h-6 text-[#c89b3c]" />
        </div>
        
        <h3 className="font-display font-bold text-white text-xs sm:text-sm md:text-base tracking-tight leading-tight">
          3D / CAD Designer
        </h3>
        
        <p className="text-[10px] sm:text-[11px] text-zinc-400 mt-1 font-mono tracking-wider">
          2D • 3D • CNC • Interior
        </p>

        {hoveredApp && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-zinc-900/95 border border-zinc-700 text-[11px] font-mono text-[#c89b3c] whitespace-nowrap shadow-xl">
            {softwareList.find((s) => s.id === hoveredApp)?.category}
          </div>
        )}
      </div>

      {/* 11 Arranged Software Icons along the circular perimeter */}
      {softwareList.map((app, index) => {
        // Angle starting at top (-90 degrees) and moving clockwise
        const angleDeg = -90 + (360 / total) * index;
        const angleRad = (angleDeg * Math.PI) / 180;
        
        // Orbital radius percentage: 41% from center
        const radiusPercent = 41;
        const x = 50 + radiusPercent * Math.cos(angleRad);
        const y = 50 + radiusPercent * Math.sin(angleRad);

        const isHovered = hoveredApp === app.id;

        return (
          <div
            key={app.id}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            className="absolute z-20 flex flex-col items-center group cursor-pointer"
            onMouseEnter={() => setHoveredApp(app.id)}
            onMouseLeave={() => setHoveredApp(null)}
          >
            {/* Logo Badge */}
            <div className={`transition-all duration-300 ${isHovered ? 'scale-125 z-30 drop-shadow-[0_0_12px_rgba(200,155,60,0.6)]' : 'scale-100'}`}>
              {app.renderIcon()}
            </div>

            {/* Software Name Label */}
            <span
              className={`mt-1 text-[10px] sm:text-[11px] md:text-xs font-semibold whitespace-nowrap transition-colors duration-200 ${
                isHovered ? 'text-white font-bold drop-shadow' : 'text-zinc-300/90'
              }`}
            >
              {app.name}
            </span>
          </div>
        );
      })}

      {/* Floating Badge 1: Top-Left Visualization */}
      <div className="absolute top-1 -left-2 sm:top-2 sm:left-0 bg-zinc-900/95 border border-zinc-700/80 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl shadow-2xl flex items-center gap-2 sm:gap-2.5 z-20">
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
        <div>
          <div className="text-[10px] sm:text-[11px] font-mono text-zinc-400 leading-none">Visualization</div>
          <div className="text-xs font-bold text-zinc-200 mt-0.5 leading-tight">3ds Max & KeyShot</div>
        </div>
      </div>

      {/* Floating Badge 2: Bottom-Right Technical Precision */}
      <div className="absolute -bottom-2 right-2 sm:bottom-0 sm:right-4 bg-zinc-900/95 border border-zinc-700/80 backdrop-blur-md px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl shadow-2xl flex items-center gap-2 sm:gap-2.5 z-20">
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0">
          <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
        <div>
          <div className="text-[10px] sm:text-[11px] font-mono text-zinc-400 leading-none">Engineering Precision</div>
          <div className="text-xs font-bold text-zinc-200 mt-0.5 leading-tight">AutoCAD & CNC Ready</div>
        </div>
      </div>

    </div>
  );
};
