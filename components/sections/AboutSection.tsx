'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import {
  Sparkles,
  Mail,
  Phone,
  Copy,
  Check,
  MapPin,
  ArrowUpRight,
  GraduationCap,
  Terminal,
  Zap,
  Code2,
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
  const textContainerRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
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
    const textContainer = textContainerRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // 1. Text Scramble & Word-by-Word ScrollTrigger Light-up
      if (textContainer) {
        const words = textContainer.querySelectorAll('.reveal-word');
        gsap.fromTo(
          words,
          {
            color: '#3f3f46', // muted zinc-700
            opacity: 0.35,
          },
          {
            color: '#ffffff', // pure radiant white
            opacity: 1,
            stagger: 0.04,
            ease: 'none',
            scrollTrigger: {
              trigger: textContainer,
              start: 'top 80%',
              end: 'bottom 45%',
              scrub: 0.7,
            },
          }
        );
      }

      // 2. 3D Holographic Card Mouse Interaction
      if (card) {
        const handleCardMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const xPercent = (x / rect.width - 0.5) * 2;
          const yPercent = (y / rect.height - 0.5) * 2;

          gsap.to(card, {
            rotateY: xPercent * 14,
            rotateX: -yPercent * 14,
            transformPerspective: 1000,
            duration: 0.5,
            ease: 'power2.out',
          });

          if (glowRef.current) {
            glowRef.current.style.opacity = '1';
            glowRef.current.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
          }
        };

        const handleCardMouseLeave = () => {
          gsap.to(card, {
            rotateY: 0,
            rotateX: 0,
            duration: 0.8,
            ease: 'power3.out',
          });
          if (glowRef.current) {
            glowRef.current.style.opacity = '0';
          }
        };

        card.addEventListener('mousemove', handleCardMouseMove);
        card.addEventListener('mouseleave', handleCardMouseLeave);
      }

      // 3. Section Entrance Animation
      gsap.fromTo(
        '.about-reveal-item',
        { y: 60, opacity: 0, filter: 'blur(10px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          stagger: 0.12,
          duration: 1.1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const storyParagraph = `I am a Front-End Developer and Creative Technologist driven by an obsession with pixel-perfect visual fidelity, modern architecture, and fluid 3D web experiences. Holding a Bachelor’s Degree in Computer Science, I bridge the gap between technical complexity and cinematic elegance. I craft production-ready applications that aren't just functional, but unforgettable to interact with.`;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050508] text-white py-28 md:py-36 px-6 md:px-14 lg:px-24 overflow-hidden flex flex-col justify-center select-none"
    >
      {/* Background Ambience & Lighting */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[650px] h-[650px] bg-indigo-500/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Cyber Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Overline Tag */}
        <div className="about-reveal-item flex items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 font-mono text-xs tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>01 // IDENTITY & PURPOSE</span>
          </div>
          <span className="h-px w-24 bg-gradient-to-r from-cyan-400/40 to-transparent hidden sm:block" />
        </div>

        {/* Cinematic 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: 3D Holographic Persona Card (5 cols) */}
          <div className="about-reveal-item lg:col-span-5 flex justify-center">
            <div
              ref={cardRef}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-[32px] p-2 bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/15 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] cursor-pointer group transition-shadow duration-500 hover:shadow-[0_25px_80px_rgba(6,182,212,0.25)] hover:border-cyan-400/50"
            >
              {/* Inner Card Frame */}
              <div className="relative w-full h-full rounded-[26px] overflow-hidden bg-[#090a0f]">
                {/* Photo */}
                <Image
                  src="/mohamed.JPG"
                  alt="Mohamed Hassan"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  priority
                  className="object-cover object-top filter grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Cyber Scanline Laser Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
                  <div className="w-full h-24 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-[scan_4s_linear_infinite]" />
                </div>

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-black/30 pointer-events-none" />

                {/* Holographic Cursor Spotlight */}
                <div
                  ref={glowRef}
                  className="absolute w-[300px] h-[300px] rounded-full bg-cyan-400/20 blur-[80px] pointer-events-none opacity-0 transition-opacity duration-300"
                />

                {/* Top Holographic Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-emerald-400 font-mono text-[11px] tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                    AVAILABLE FOR WORK
                  </span>

                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-zinc-400 font-mono text-[10px]">
                    2026 ACTIVE
                  </span>
                </div>

                {/* Bottom Card Identity Details */}
                <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                  <div className="p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-xl group-hover:border-cyan-400/30 transition-colors">
                    <h3 className="text-xl font-black tracking-tight text-white flex items-center gap-2">
                      <span>MOHAMED HASSAN</span>
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                    </h3>
                    <p className="text-xs font-mono text-cyan-300 tracking-wide mt-0.5">
                      Front-End Developer (React / Next.js / TS)
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 mt-2">
                      <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                      <span>B.Sc. in Computer Science</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Kinetic Philosophy & Interactive Core (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Giant Heading */}
            <div className="about-reveal-item mb-8">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] text-white">
                CRAFTING{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.35)]">
                  DIGITAL POETRY
                </span>
                <br />
                WITH PURE CODE.
              </h2>
            </div>

            {/* Locomotive-Style Text Scroll Illumination */}
            <div
              ref={textContainerRef}
              className="about-reveal-item text-lg sm:text-2xl md:text-3xl font-light leading-relaxed mb-10 select-none"
            >
              <p>
                {storyParagraph.split(' ').map((word, idx) => (
                  <span
                    key={idx}
                    className="reveal-word inline-block mr-2 transition-colors duration-200"
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>

            {/* 3 Futuristic Holographic Identity Pillars */}
            <div className="about-reveal-item grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/40 transition-colors duration-300 backdrop-blur-md">
                <span className="text-[10px] font-mono text-cyan-400 tracking-widest block uppercase mb-1">
                  01 // CORE FOCUS
                </span>
                <p className="text-xs sm:text-sm font-medium text-zinc-200">
                  React, Next.js, TypeScript & Three.js 3D
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-indigo-400/40 transition-colors duration-300 backdrop-blur-md">
                <span className="text-[10px] font-mono text-indigo-400 tracking-widest block uppercase mb-1">
                  02 // PHILOSOPHY
                </span>
                <p className="text-xs sm:text-sm font-medium text-zinc-200">
                  Clean Architecture Elevated by Cinematic Motion
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-400/40 transition-colors duration-300 backdrop-blur-md">
                <span className="text-[10px] font-mono text-emerald-400 tracking-widest block uppercase mb-1">
                  03 // LOCATION
                </span>
                <p className="text-xs sm:text-sm font-medium text-zinc-200 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Cairo, Egypt • Worldwide</span>
                </p>
              </div>
            </div>

            {/* Quick Interactive Connect Deck */}
            <div className="about-reveal-item flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 border-t border-white/10">
              {/* 1-Click Copy Email Pill */}
              <button
                onClick={copyEmail}
                className="flex items-center justify-between gap-3 px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-cyan-500/10 border border-white/15 hover:border-cyan-400/50 text-xs font-mono text-zinc-200 hover:text-cyan-300 transition-all duration-300 cursor-pointer shadow-lg group"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">{email}</span>
                </div>
                <div className="flex items-center gap-1 text-zinc-400 group-hover:text-cyan-300 shrink-0">
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </div>
              </button>

              {/* Call Pill */}
              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-xs font-mono text-zinc-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{phone}</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub Profile"
                  className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn Profile"
                  className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-zinc-300 hover:text-sky-400 transition-colors"
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
