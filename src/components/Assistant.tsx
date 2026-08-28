import React, { useState } from 'react';
import { Sparkles, MessageSquare, X, ArrowRight, CheckCircle2, ChevronRight, Send, Compass } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface AssistantProps {
  onSelectTopic: (topic: string) => void;
}

interface Message {
  sender: 'bot' | 'user';
  text: string;
  actionText?: string;
  actionTopic?: string;
}

const QUICK_OPTIONS = [
  { label: 'AutoCAD Services', topic: 'AutoCAD 2D Drawing', reply: 'I deliver millimeter-accurate AutoCAD 2D drawings, architectural floor plans, elevations, wall cross-sections, and shop manufacturing drawings in DWG and PDF.' },
  { label: '3D Modeling & Rendering', topic: '3D Modeling', reply: 'I build high-precision 3D polygon and parametric models for furniture, products, and interiors with realistic lighting and texturing in 3ds Max and KeyShot.' },
  { label: 'Interior Design', topic: 'Interior Designing', reply: 'I design residential and commercial interior spaces, zoning layouts, lighting plans, and photorealistic 3D visualization stills for presentations.' },
  { label: 'Furniture Design & Assembly', topic: 'Furniture Designing', reply: 'I engineer custom furniture, ergonomic specifications, exploded KD assembly drawings, hardware fittings, and production cut lists.' },
  { label: 'CNC / CAD-CAM (ArtCAM)', topic: 'CAD/CAM & CNC Design', reply: 'I create 3D bas-relief sculptures, jali partition vectors, and toolpath-optimized G-code files ready for CNC router and laser machinery.' },
  { label: 'Contact & Hire Me', topic: 'General Enquiry', reply: 'You can contact me directly via Email, WhatsApp, Phone, or by submitting the contact form on this page.' },
];

export const Assistant: React.FC<AssistantProps> = ({ onSelectTopic }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: `Hello! I'm the design assistant for ${siteConfig.name}. How can I assist you with AutoCAD, 3D modeling, or manufacturing CAD today?`,
    },
  ]);

  const handleOptionClick = (opt: typeof QUICK_OPTIONS[0]) => {
    // Add user question
    const userMsg: Message = { sender: 'user', text: opt.label };
    const botReply: Message = {
      sender: 'bot',
      text: opt.reply,
      actionText: `Discuss ${opt.topic}`,
      actionTopic: opt.topic,
    };

    setMessages((prev) => [...prev, userMsg, botReply]);
  };

  const handleAction = (topic: string) => {
    setIsOpen(false);
    onSelectTopic(topic);
  };

  return (
    <>
      {/* Floating Trigger Button on bottom left */}
      <div className="fixed bottom-6 left-6 z-30 select-none">
        {!isOpen && (
          <button
            type="button"
            id="open-service-assistant-btn"
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Ask about design services"
          >
            <div className="w-6 h-6 rounded-full bg-[#c89b3c]/20 text-[#c89b3c] flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-semibold">Ask About Services</span>
          </button>
        )}
      </div>

      {/* Assistant Modal Window */}
      {isOpen && (
        <div
          id="service-assistant-modal"
          className="fixed bottom-6 left-6 z-50 w-[92vw] max-w-sm sm:max-w-md bg-[#0e0f11] border border-zinc-800 rounded-2xl shadow-2xl shadow-black flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#c89b3c]/20 text-[#c89b3c] flex items-center justify-center">
                <Compass className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white font-display">
                  Portfolio Service Guide
                </h4>
                <p className="text-[10px] text-zinc-400 font-mono">
                  Instant Answers & Scope
                </p>
              </div>
            </div>

            <button
              type="button"
              id="close-service-assistant-btn"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Conversation Body */}
          <div className="p-4 space-y-3 max-h-72 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#c89b3c] text-black font-medium rounded-tr-none'
                      : 'bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-tl-none font-light'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Optional Action Button */}
                {msg.actionText && msg.actionTopic && (
                  <button
                    type="button"
                    onClick={() => handleAction(msg.actionTopic!)}
                    className="mt-2 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-[#c89b3c] text-zinc-200 hover:text-black text-[11px] font-semibold flex items-center gap-1 transition-colors border border-zinc-700 cursor-pointer"
                  >
                    <span>{msg.actionText}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Quick Options Selector */}
          <div className="p-3 bg-zinc-950/90 border-t border-zinc-800 space-y-1.5">
            <div className="text-[10px] font-mono text-zinc-400 px-1">
              Select a service topic to learn more:
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {QUICK_OPTIONS.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleOptionClick(opt)}
                  className="p-2 text-left rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white text-[11px] font-medium border border-zinc-800/80 transition-colors flex items-center justify-between truncate cursor-pointer"
                >
                  <span className="truncate">{opt.label}</span>
                  <ChevronRight className="w-3 h-3 text-zinc-400 shrink-0 ml-1" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
