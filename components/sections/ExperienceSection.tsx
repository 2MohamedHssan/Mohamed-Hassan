'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Layers,
  Terminal,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  achievements: string[];
  techStack: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'KV Studio',
    role: 'Lead Front-End Architect',
    period: '2025 - 2026',
    location: 'Remote / Global',
    type: 'Full-Time Production',
    summary:
      'Engineered interactive 3D spatial web applications, virtual tours, and next-generation real estate visualizers utilizing Three.js, Next.js App Router, and custom WebGL shaders.',
    achievements: [
      'Pioneered 3D spatial floor-plan visualizers maintaining a rock-solid 60 FPS across desktop and mobile devices.',
      'Reduced WebGL memory footprint by 45% through aggressive texture atlasing and procedural LOD algorithms.',
      'Constructed modular Next.js design systems ensuring instant client branding onboarding.',
    ],
    techStack: ['Next.js 16', 'Three.js', 'WebGL', 'TypeScript', 'Tailwind CSS', 'GSAP'],
  },
  {
    company: 'Uni & Do',
    role: 'Front-End & Distributed Systems Engineer',
    period: '2025',
    location: 'Remote',
    type: 'Contract / Enterprise',
    summary:
      'Architected high-throughput operational dashboards and real-time WebSocket communication layers to orchestrate multi-tenant enterprise logistics.',
    achievements: [
      'Decoupled monolithic state mechanisms into resilient WebSocket microservices, slashing server RAM overhead by 40%.',
      'Designed optimistic mutations with automated conflict resolution, guaranteeing sub-45ms perceived user latency.',
      'Shipped comprehensive real-time notification pipes and live collaboration kanbans.',
    ],
    techStack: ['React 19', 'TypeScript', 'WebSockets', 'Express', 'Redis', 'Tailwind CSS'],
  },
  {
    company: 'Tech-Yard Hub',
    role: 'Lead Front-End Architect',
    period: '2024 - 2025',
    location: 'Enterprise System',
    type: 'Core Platform',
    summary:
      'Built multi-tiered administrative platforms featuring strict Role-Based Access Control (RBAC), client-side automated document generators, and data grid virtualization.',
    achievements: [
      'Authored automated report generation engines producing native Excel and Word documents on the client within 1.2 seconds.',
      'Implemented hierarchical RBAC permission matrices with zero security leakage and route guards.',
      'Built smooth GSAP micro-interactions that boosted user task completion speed by 28%.',
    ],
    techStack: ['Next.js', 'TypeScript', 'GSAP', 'Tailwind CSS', 'Zod', 'REST APIs'],
  },
  {
    company: 'Freelance & Open Source Engineer',
    role: 'Front-End Developer',
    period: '2023 - Present',
    location: 'Worldwide',
    type: 'Independent Practice',
    summary:
      'Delivered bespoke, award-caliber digital platforms for international startups and creative agencies with extreme focus on sub-second speed and unforgettable aesthetics.',
    achievements: [
      'Crafted 15+ production-grade web applications utilizing modern React, Next.js, and Headless CMS architectures.',
      'Maintained 100% client satisfaction score across enterprise contracts and freelance milestones.',
      'Standardized clean, type-safe codebases equipped with E2E automation and zero-downtime CI/CD.',
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Figma'],
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.exp-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
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
      id="experience"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#000000] text-white py-28 md:py-36 px-6 md:px-14 lg:px-24 overflow-hidden select-none border-t border-amber-500/20"
    >
      {/* Background Gold Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-amber-500/15">
          <div>
            <div className="exp-reveal inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 font-mono text-xs tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
              <Briefcase className="w-3.5 h-3.5 text-amber-400" />
              <span>05 // CAREER TRAJECTORY</span>
            </div>
            <h2 className="exp-reveal text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-white">
              ENGINEERING{' '}
              <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                EXPERIENCE
              </span>
            </h2>
          </div>

          <div className="exp-reveal flex items-center gap-4 text-xs font-mono text-zinc-400">
            <div className="px-4 py-2.5 rounded-2xl bg-white/[0.03] border border-amber-500/20">
              <span className="text-zinc-500 block text-[10px]">TOTAL CAREER</span>
              <span className="text-amber-300 font-bold text-sm">PROVEN TRACK RECORD</span>
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-white/[0.03] border border-amber-500/20">
              <span className="text-zinc-500 block text-[10px]">DELIVERY RATE</span>
              <span className="text-white font-bold text-sm">100% TIMELY SHIP</span>
            </div>
          </div>
        </div>

        {/* ================= TIMELINE LIST ================= */}
        <div className="relative border-l border-amber-500/30 ml-4 md:ml-10 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.company}
              className="exp-reveal relative pl-8 md:pl-12 group"
            >
              {/* Timeline Gold Pin Node */}
              <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-[#050505] border-2 border-amber-400 flex items-center justify-center shadow-[0_0_15px_#f59e0b] group-hover:scale-125 transition-transform duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-300" />
              </div>

              {/* Card Container */}
              <div className="rounded-3xl p-6 sm:p-8 bg-[#080808]/90 border border-amber-500/20 hover:border-amber-400/50 backdrop-blur-xl transition-all duration-300 shadow-xl group-hover:bg-[#0c0c0c]">
                {/* Top Meta Line */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 font-mono text-xs font-bold tracking-wide">
                      {exp.company}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{exp.location}</span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-amber-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                    <span className="text-zinc-500">•</span>
                    <span className="text-zinc-400">{exp.type}</span>
                  </div>
                </div>

                {/* Role Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-3">
                  {exp.role}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                  {exp.summary}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2.5 mb-6">
                  {exp.achievements.map((ach, aIdx) => (
                    <div
                      key={aIdx}
                      className="flex items-start gap-2.5 text-xs text-zinc-300 font-light leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

