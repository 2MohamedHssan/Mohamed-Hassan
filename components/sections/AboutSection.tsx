'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import {
  Sparkles,
  Cpu,
  Box,
  Mail,
  Phone,
  Copy,
  Check,
  GraduationCap,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Terminal,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = 'mohamed.web.contactme@gmail.com';
  const phone = '01013026172';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // 1. Entrance animation
      gsap.fromTo(
        '.gold-reveal',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
          },
        }
      );

      // 2. 3D card tilt
      if (card) {
        const onMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const xPercent = (x / rect.width - 0.5) * 2;
          const yPercent = (y / rect.height - 0.5) * 2;

          gsap.to(card, {
            rotationY: xPercent * 10,
            rotationX: -yPercent * 10,
            duration: 0.5,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        };

        const onMouseLeave = () => {
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.7,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        };

        card.addEventListener('mousemove', onMouseMove);
        card.addEventListener('mouseleave', onMouseLeave);
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#000000] text-white py-28 md:py-36 px-6 md:px-14 lg:px-24 overflow-hidden select-none border-t border-amber-500/20"
    >
      {/* Golden Horizon Light Bridge from Hero */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_20px_#f59e0b]" />

      {/* Warm Golden Ambient Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[200px] pointer-events-none" />

      {/* Cyber Luxury Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(245, 158, 11, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(245, 158, 11, 0.2) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* ================= SECTION HEADER ================= */}
        <div className="gold-reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-amber-500/15">
          <div>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 font-mono text-xs tracking-[0.25em] uppercase mb-4 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>01 // IDENTITY & ARCHITECTURE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-white">
              CRAFTED IN{' '}
              <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(245,158,11,0.35)]">
                GOLD & STEEL
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-amber-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Cairo, Egypt • Worldwide
            </span>
            <span className="text-zinc-700">//</span>
            <span className="text-white font-semibold">B.Sc. Computer Science</span>
          </div>
        </div>

        {/* ================= MAIN SHOWCASE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ================= LEFT: LUXURY GOLD-FRAMED PORTRAIT ================= */}
          <div className="gold-reveal lg:col-span-5 flex justify-center sticky top-28">
            <div
              ref={cardRef}
              style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-amber-500/20 via-white/5 to-transparent border border-amber-500/30 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] hover:border-amber-400/70 transition-all duration-500 group"
            >
              {/* Inner Frame */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#050505]">
                {/* Natural Color Photo (NO GRAYSCALE, NO BLUR) */}
                <Image
                  src="/mohamed.JPG"
                  alt="Mohamed Hassan"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority
                  className="object-cover object-top contrast-105 brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Subtle Luxury Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 pointer-events-none" />

                {/* Gold Corner Accents */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-amber-400 pointer-events-none" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-amber-400 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-amber-400 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-amber-400 pointer-events-none" />

                {/* Top Golden Status Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-400/40 text-amber-300 font-mono text-[11px] tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
                    AVAILABLE FOR WORK
                  </span>

                  <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white font-mono text-[10px]">
                    2026 ACTIVE
                  </span>
                </div>

                {/* Bottom Identity Plaque */}
                <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                  <div className="p-4 rounded-xl bg-black/85 backdrop-blur-xl border border-amber-500/30 shadow-2xl">
                    <h3 className="text-xl font-black tracking-tight text-white flex items-center justify-between">
                      <span>MOHAMED HASSAN</span>
                      <Sparkles className="w-4 h-4 text-amber-400" />
                    </h3>
                    <p className="text-xs font-mono text-amber-300 tracking-wide mt-0.5">
                      Front-End Developer
                    </p>
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-300 mt-2.5 pt-2 border-t border-white/10">
                      <span className="flex items-center gap-1 text-white">
                        <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                        B.Sc. Computer Science
                      </span>
                      <span className="text-amber-400/80">React • Next.js • 3D</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: ARCHITECTURAL MANIFESTO & 3 PILLARS ================= */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* The Manifesto */}
            <div className="gold-reveal mb-10">
              <span className="text-xs font-mono text-amber-400 tracking-[0.25em] uppercase block mb-3 font-semibold">
                // ARCHITECTURAL PHILOSOPHY
              </span>
              <p className="text-lg sm:text-2xl md:text-3xl font-light text-zinc-200 leading-relaxed">
                I engineer web experiences where{' '}
                <span className="text-white font-semibold underline decoration-amber-400/60 decoration-2">
                  aesthetic luxury
                </span>{' '}
                meets indestructible{' '}
                <span className="text-amber-300 font-semibold underline decoration-amber-400/60 decoration-2">
                  computer science architecture
                </span>
                . Grounded in a Bachelor&apos;s Degree in Computer Science, every interface I build is fast, scalable, and visually unforgettable.
              </p>
            </div>

            {/* The 3 Core Pillars (Strictly Black, Gold, and White) */}
            <div className="gold-reveal grid grid-cols-1 gap-4 mb-10">
              {/* Pillar 1 */}
              <div className="p-5 rounded-2xl bg-[#080808] border border-amber-500/20 hover:border-amber-400/60 transition-all duration-300 backdrop-blur-xl group">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 group-hover:scale-110 transition-transform">
                      <Box className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        Spatial & 3D WebGL Immersion
                      </h4>
                      <span className="text-[10px] font-mono tracking-wider uppercase text-amber-400 font-semibold">
                        KV STUDIO • THREE.JS • VIRTUAL TOURS
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-amber-400/80 px-2 py-0.5 rounded bg-amber-500/10">
                    01
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed pl-12">
                  Developing immersive property exploration features: interactive floor plans, 3D visualization, and virtual tours in Next.js and React.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-5 rounded-2xl bg-[#080808] border border-amber-500/20 hover:border-amber-400/60 transition-all duration-300 backdrop-blur-xl group">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 group-hover:scale-110 transition-transform">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        High-Concurrency Microservices
                      </h4>
                      <span className="text-[10px] font-mono tracking-wider uppercase text-amber-400 font-semibold">
                        UNI & DO • EXPRESS • REDUCED RAM LOAD
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-amber-400/80 px-2 py-0.5 rounded bg-amber-500/10">
                    02
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed pl-12">
                  Extracted real-time WebSocket logic into standalone Express microservices, decoupling it from Strapi CMS and drastically reducing server RAM load.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-5 rounded-2xl bg-[#080808] border border-amber-500/20 hover:border-amber-400/60 transition-all duration-300 backdrop-blur-xl group">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 group-hover:scale-110 transition-transform">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        Motion Physics & Role-Based Security
                      </h4>
                      <span className="text-[10px] font-mono tracking-wider uppercase text-amber-400 font-semibold">
                        TECH-YARD HUB • GSAP • STRICT TYPES
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-amber-400/80 px-2 py-0.5 rounded bg-amber-500/10">
                    03
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed pl-12">
                  Built admin dashboards with role-based access control, automated Excel/Word reporting, and fluid 120fps GSAP kinetic animations.
                </p>
              </div>
            </div>

            {/* Quick Interactive Connect Deck */}
            <div className="gold-reveal flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-amber-500/15">
              {/* 1-Click Copy Email */}
              <button
                onClick={copyEmail}
                className="flex items-center justify-between gap-3 px-5 py-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 hover:border-amber-400 text-xs font-mono text-amber-200 transition-all cursor-pointer shadow-lg group"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">{email}</span>
                </div>
                <div className="flex items-center gap-1 text-zinc-400 group-hover:text-amber-300 shrink-0">
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-amber-400" />
                      <span className="text-amber-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </div>
              </button>

              {/* Call */}
              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{phone}</span>
              </a>

              {/* Social Channels */}
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-300 hover:text-amber-400 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
