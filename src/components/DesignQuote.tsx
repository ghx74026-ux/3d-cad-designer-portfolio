import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, FileUp, Send } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const projectTypes = ['Furniture Design', 'AutoCAD / 2D Drawing', '3D Modeling & Rendering', 'Interior Design', 'CNC / ArtCAM', 'Other'];
const budgets = ['Under ₹10,000', '₹10,000 – ₹25,000', '₹25,000 – ₹50,000', '₹50,000+', 'Not decided'];

export const DesignQuote: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const [form, setForm] = useState({ name: '', email: '', projectType: projectTypes[0], budget: budgets[0], dimensions: '', message: '' });

  const update = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\nProject: ${form.projectType}\nBudget: ${form.budget}\nDimensions: ${form.dimensions}\n\nRequirement:\n${form.message}${fileName ? `\n\nReference file: ${fileName}` : ''}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`Design Quote — ${form.projectType}`)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="quote" className="py-24 bg-[#0c0d0e] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(200,155,60,0.08),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.03),transparent_30%)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <div className="section-kicker mx-auto">Start a Project</div>
          <h2 className="section-title">Get a Design Quote</h2>
          <p className="section-copy mx-auto">Share your project scope, dimensions and requirements. I’ll review the brief and discuss feasibility, timeline and deliverables.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 luxury-card p-7 sm:p-8">
            <span className="text-xs font-mono text-[#c89b3c] uppercase tracking-widest">What you can send</span>
            <h3 className="text-2xl font-bold font-display text-white mt-3 mb-6">Tell me what you need designed.</h3>
            <div className="space-y-4 text-sm text-zinc-400">
              {['Reference images or sketches', 'Overall dimensions and measurements', 'Material and finish preferences', 'Assembly or manufacturing requirements', 'Target timeline and budget'].map((item) => <div key={item} className="flex gap-3 items-start"><CheckCircle2 className="w-4 h-4 text-[#c89b3c] shrink-0 mt-0.5" /><span>{item}</span></div>)}
            </div>
            <div className="mt-8 p-4 rounded-xl bg-zinc-800/60 border border-zinc-700/70"><div className="text-xs text-zinc-500 font-mono">Typical deliverables</div><div className="text-sm text-white mt-2">2D drawings • 3D model • renders • assembly details • CNC-ready workflow</div></div>
          </div>

          <form onSubmit={submit} className="lg:col-span-3 luxury-card p-6 sm:p-8 space-y-5">
            {submitted && <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5" /> Your email app is ready with the quote request.</div>}
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block"><span className="field-label">Name</span><input required value={form.name} onChange={(e) => update('name', e.target.value)} className="quote-input" placeholder="Your name" /></label>
              <label className="block"><span className="field-label">Email</span><input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className="quote-input" placeholder="you@example.com" /></label>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block"><span className="field-label">Project type</span><select value={form.projectType} onChange={(e) => update('projectType', e.target.value)} className="quote-input">{projectTypes.map((x) => <option key={x}>{x}</option>)}</select></label>
              <label className="block"><span className="field-label">Budget</span><select value={form.budget} onChange={(e) => update('budget', e.target.value)} className="quote-input">{budgets.map((x) => <option key={x}>{x}</option>)}</select></label>
            </div>
            <label className="block"><span className="field-label">Dimensions</span><input value={form.dimensions} onChange={(e) => update('dimensions', e.target.value)} className="quote-input" placeholder="e.g. 1800 × 900 × 750 mm" /></label>
            <label className="block"><span className="field-label">Project requirement</span><textarea required rows={5} value={form.message} onChange={(e) => update('message', e.target.value)} className="quote-input resize-none" placeholder="Describe the product, furniture, interior or CAD work you need..." /></label>
            <label className="flex items-center gap-3 p-4 rounded-xl border border-dashed border-zinc-700 bg-zinc-900/50 cursor-pointer hover:border-[#c89b3c]/60 transition-colors"><FileUp className="w-5 h-5 text-[#c89b3c]" /><span className="text-sm text-zinc-300 flex-1">{fileName || 'Attach a reference image or drawing'}</span><input type="file" accept="image/*,.pdf,.dwg,.dxf" className="hidden" onChange={(e) => setFileName(e.target.files?.[0]?.name || '')} /></label>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#c89b3c] hover:bg-[#d8ab4c] text-black font-bold transition-all active:scale-[0.99]"><Send className="w-4 h-4" /> Send Quote Request <ArrowRight className="w-4 h-4" /></button>
            <p className="text-[11px] text-zinc-500 text-center">Submitting opens your email app. No payment is required.</p>
          </form>
        </div>
      </div>
    </section>
  );
};
