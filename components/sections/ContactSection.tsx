'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  Sparkles,
  MapPin,
  Calendar,
  MessageSquare,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function GithubIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [sent, setSent] = useState(false);

  const email = 'mohamed.web.contactme@gmail.com';
  const phone = '01013026172';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#000000] text-white py-28 md:py-36 px-6 md:px-14 lg:px-24 overflow-hidden select-none border-t border-amber-500/20"
    >
      {/* Background Gold Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-full blur-[220px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-amber-500/15">
          <div>
            <div className="contact-reveal inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 font-mono text-xs tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>06 // INITIATE TRANSMISSION</span>
            </div>
            <h2 className="contact-reveal text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-white">
              LET&apos;S BUILD{' '}
              <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                SOMETHING ICONIC
              </span>
            </h2>
          </div>

          <div className="contact-reveal flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
            <span>AVAILABLE FOR WORLDWIDE CONTRACTS</span>
          </div>
        </div>

        {/* ================= CONTENT DUAL GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT: DIRECT CONTACT DOCK (5 COLS) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="contact-reveal space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Ready to elevate your digital flagship?
              </h3>
              <p className="text-sm text-zinc-300 font-light leading-relaxed">
                Whether you need high-end 3D WebGL immersion, bulletproof Next.js architecture, or real-time distributed dashboards, I am available to turn complex ideas into award-winning reality.
              </p>

              {/* Direct Action Capsules */}
              <div className="space-y-3 pt-2">
                {/* Email Pill */}
                <div className="p-4 rounded-2xl bg-[#080808] border border-amber-500/25 flex items-center justify-between gap-3 group hover:border-amber-400/60 transition-colors shadow-lg">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/25 text-amber-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-mono text-zinc-400 block uppercase">DIRECT INBOX</span>
                      <a
                        href={`mailto:${email}`}
                        className="text-xs sm:text-sm font-mono text-white group-hover:text-amber-300 transition-colors truncate block"
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    title="Copy Email"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Pill */}
                <div className="p-4 rounded-2xl bg-[#080808] border border-amber-500/25 flex items-center justify-between gap-3 group hover:border-amber-400/60 transition-colors shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/25 text-amber-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 block uppercase">PHONE / WHATSAPP</span>
                      <a
                        href={`tel:${phone}`}
                        className="text-xs sm:text-sm font-mono text-white group-hover:text-amber-300 transition-colors"
                      >
                        {phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyPhone}
                    title="Copy Phone"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Pill */}
                <div className="p-4 rounded-2xl bg-[#080808] border border-amber-500/25 flex items-center gap-3 shadow-lg">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-400/25 text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-400 block uppercase">LOCATION & TIMEZONE</span>
                    <span className="text-xs sm:text-sm font-mono text-white">Egypt (UTC+2) • Available Worldwide</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3 pt-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-white hover:border-amber-400/50 transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-amber-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-white hover:border-amber-400/50 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-amber-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Bottom Guarantee */}
            <div className="contact-reveal p-4 rounded-2xl bg-[#080808] border border-amber-500/20 flex items-center gap-3 text-xs font-mono text-zinc-400">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <span>Guaranteed response within 24 hours. Strict NDA & IP protection.</span>
            </div>
          </div>

          {/* RIGHT: LUXURY GOLD TRANSMISSION FORM (7 COLS) */}
          <div className="lg:col-span-7">
            <div className="contact-reveal relative rounded-3xl p-6 sm:p-10 bg-[#080808]/95 border border-amber-500/30 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
              {/* Corner brackets */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-amber-400 pointer-events-none" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-amber-400 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-amber-400 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-amber-400 pointer-events-none" />

              <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-2 flex items-center justify-between">
                <span>SEND DIRECT MESSAGE</span>
                <Sparkles className="w-5 h-5 text-amber-400" />
              </h4>
              <p className="text-xs font-mono text-zinc-400 mb-8">
                Fill in the details below to dispatch your inquiry directly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[11px] font-mono text-amber-300 block mb-2 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Vance"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 focus:border-amber-400 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors font-mono"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-amber-300 block mb-2 uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alexander@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 focus:border-amber-400 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-amber-300 block mb-2 uppercase tracking-wider">
                    Project Scope / Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Next.js 16 WebGL Flagship Platform"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 focus:border-amber-400 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-amber-300 block mb-2 uppercase tracking-wider">
                    Project Brief & Requirements
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell me about your product, timeline, and architectural requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 focus:border-amber-400 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors font-mono resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-black font-black font-mono text-xs uppercase tracking-[0.2em] hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer shadow-[0_10px_30px_rgba(245,158,11,0.35)]"
                >
                  <Send className="w-4 h-4" />
                  <span>DISPATCH TRANSMISSION</span>
                </button>

                {sent && (
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-400/40 text-amber-300 font-mono text-xs text-center flex items-center justify-center gap-2 animate-fade-in">
                    <Check className="w-4 h-4" />
                    <span>Message dispatched successfully! Mohamed will reply promptly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

