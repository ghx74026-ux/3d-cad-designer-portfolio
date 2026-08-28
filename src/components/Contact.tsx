import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Instagram, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  MessageCircle
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { ContactFormData } from '../types';

interface ContactProps {
  initialSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: initialSubject || '3D / AutoCAD Project Enquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Sync initial subject if passed from service/project button
  React.useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: `Enquiry: ${initialSubject}`,
      }));
    }
  }, [initialSubject]);

  const copyToClipboard = async (text: string, fieldKey: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldKey);
      setTimeout(() => setCopiedField(null), 2500);
    } catch {
      // Fallback
      setCopiedField(fieldKey);
      setTimeout(() => setCopiedField(null), 2500);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your project details or message';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Structured front-end handler ready for backend/Formspree/EmailJS
    console.log('[Contact Submission]', formData);
    setIsSubmitted(true);
  };

  const getGmailComposeUrl = () => {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}&su=${encodeURIComponent(
      'AutoCAD & 3D Design Project Inquiry'
    )}&body=${encodeURIComponent(
      `Hello ${siteConfig.name},\n\nI would like to discuss an AutoCAD / 3D design project with you.`
    )}`;
  };

  const getCleanWhatsappUrl = () => {
    const rawNum = siteConfig.whatsapp.replace(/[^0-9]/g, '');
    const phone = rawNum.length > 0 ? rawNum : '918955110742';
    return `https://wa.me/${phone}?text=${encodeURIComponent(
      `Hello ${siteConfig.name}, I am interested in discussing a design / CAD project.`
    )}`;
  };

  const getInstagramUrl = () => {
    if (siteConfig.instagram.url && siteConfig.instagram.url !== '[YOUR INSTAGRAM URL]') {
      return siteConfig.instagram.url;
    }
    if (siteConfig.instagram.username && siteConfig.instagram.username !== '[YOUR INSTAGRAM ID]') {
      return `https://instagram.com/${siteConfig.instagram.username.replace('@', '')}`;
    }
    return 'https://instagram.com';
  };

  return (
    <section id="contact" className="py-24 bg-[#0e0f11] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[#c89b3c] text-xs font-mono tracking-widest uppercase">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Have a project, design requirement or business enquiry? Feel free to contact me directly through any channel below.
          </p>
          <div className="w-12 h-0.5 bg-[#c89b3c] mx-auto rounded-full" />
        </div>

        {/* Top: 3 Social & Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Gmail / Email */}
          <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between hover:border-red-500/40 transition-colors shadow-lg">
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-zinc-400 block">Official Gmail</span>
              <span className="text-sm font-semibold text-white mt-1 block truncate" title={siteConfig.email}>
                {siteConfig.email}
              </span>
            </div>

            <div className="pt-5 mt-4 border-t border-zinc-800/80 flex items-center gap-2">
              <a
                href={getGmailComposeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>Compose on Gmail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard(siteConfig.email, 'email')}
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Copy Email Address"
                aria-label="Copy Email Address"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Card 2: Instagram */}
          <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between hover:border-pink-500/30 transition-colors shadow-lg">
            <div>
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center mb-4">
                <Instagram className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-zinc-400 block">Instagram Portfolio</span>
              <span className="text-sm font-semibold text-white mt-1 block truncate">
                {siteConfig.instagram.username}
              </span>
            </div>

            <div className="pt-5 mt-4 border-t border-zinc-800/80">
              <a
                href={getInstagramUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Open Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 3: WhatsApp Chat */}
          <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between hover:border-emerald-500/40 transition-colors shadow-lg">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-zinc-400 block">Instant WhatsApp</span>
              <span className="text-sm font-semibold text-white mt-1 block truncate">
                {siteConfig.whatsapp}
              </span>
            </div>

            <div className="pt-5 mt-4 border-t border-zinc-800/80 flex items-center gap-2">
              <a
                href={getCleanWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard(siteConfig.whatsapp, 'whatsapp')}
                className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Copy WhatsApp Number"
                aria-label="Copy WhatsApp Number"
              >
                {copiedField === 'whatsapp' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>

        {/* Main 2-Column Section: Direct Contact Details & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Details Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-display text-white">
                Direct Communication Channels
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                Feel free to connect via WhatsApp for rapid project queries, or send drawing files and specifications directly via email.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-3">
              {/* Phone */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-zinc-800 text-[#c89b3c] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block">Phone</span>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-xs sm:text-sm font-medium text-white hover:text-[#c89b3c] transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition-colors"
                >
                  Call Me
                </a>
              </div>

              {/* WhatsApp */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block">WhatsApp</span>
                    <span className="text-xs sm:text-sm font-medium text-white">
                      {siteConfig.whatsapp}
                    </span>
                  </div>
                </div>
                <a
                  href={getCleanWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-semibold transition-colors flex items-center gap-1"
                >
                  <span>Chat</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-800 text-[#c89b3c] flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 block">Location / Base</span>
                  <span className="text-xs sm:text-sm font-medium text-white">
                    {siteConfig.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Response Notice */}
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 text-xs text-zinc-400 leading-relaxed font-mono flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Standard response time: within 24 hours for all technical enquiries.</span>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-bold font-display text-white mb-2">
                Send Project Requirement
              </h3>
              <p className="text-xs text-zinc-400 mb-6 font-light">
                Fill out the project scope and specifications. I will review and respond with feasibility, turnaround, and deliverables.
              </p>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-display">
                    Thank you! Your message has been received.
                  </h4>
                  <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
                    I will review your project requirements and connect via email shortly. For urgent drawings, feel free to ping directly on WhatsApp.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '3D / AutoCAD Project Enquiry',
                        message: '',
                      });
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-zinc-800 text-xs font-semibold text-white hover:bg-zinc-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Your Name <span className="text-[#c89b3c]">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#c89b3c] transition-colors ${
                          errors.name ? 'border-red-500' : 'border-zinc-800 focus:border-[#c89b3c]'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Your Email <span className="text-[#c89b3c]">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#c89b3c] transition-colors ${
                          errors.email ? 'border-red-500' : 'border-zinc-800 focus:border-[#c89b3c]'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Phone & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Phone / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91..."
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#c89b3c] focus:ring-1 focus:ring-[#c89b3c] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Subject / Project Type
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. AutoCAD 2D Layout or 3D Model"
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-white text-sm focus:outline-none focus:border-[#c89b3c] focus:ring-1 focus:ring-[#c89b3c] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Message & Requirements <span className="text-[#c89b3c]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe project scope, dimensions, required software (e.g. AutoCAD/3ds Max/ArtCAM), and delivery timeline..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#c89b3c] transition-colors resize-none ${
                        errors.message ? 'border-red-500' : 'border-zinc-800 focus:border-[#c89b3c]'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-400 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    id="submit-contact-form-btn"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#c89b3c] hover:bg-[#d8ab4c] text-black font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c89b3c]/20 active:scale-98 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
