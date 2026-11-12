'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FolderGit2,
  ExternalLink,
  Code2,
  Box,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  category: string;
  client: string;
  year: string;
  role: string;
  description: string;
  architecture: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: 'diva-3d',
    title: 'DIVA Interactive 3D Real Estate',
    category: 'Spatial WebGL & Architecture',
    client: 'KV Studio',
    year: '2025 - 2026',
    role: 'Lead Front-End Architect',
    description:
      'High-performance interactive 3D architectural platform featuring photorealistic virtual tours, real-time floor plan visualization, and procedural camera transitions in Next.js.',
    architecture: [
      'Custom Three.js & WebGL shaders optimized for 60/120 FPS on all devices',
      'Memory-conscious asset streaming reducing initial load payload by 65%',
      'Interactive spatial waypoints synced with dynamic pricing and unit metadata',
    ],
    metrics: [
      { label: 'Frame Rate', value: '60 FPS Steady' },
      { label: 'Bundle Reduction', value: '-65% Load' },
      { label: 'Tech Core', value: 'Three.js / Next.js' },
    ],
    tags: ['Next.js 16', 'Three.js', 'WebGL', 'TypeScript', 'Tailwind CSS', 'GSAP'],
  },
  {
    id: 'uni-and-do',
    title: 'Uni & Do High-Concurrency System',
    category: 'Distributed Real-Time Platform',
    client: 'Uni & Do Operations',
    year: '2025',
    role: 'Front-End & Real-Time Engineer',
    description:
      'Decoupled enterprise operations system managing high-frequency task distribution, live WebSocket queues, and reactive state management across enterprise teams.',
    architecture: [
      'Decoupled WebSocket microservices architecture slashing server RAM load',
      'Zero-latency optimistic UI updates with automatic offline reconciliation',
      'Role-tailored live operations boards supporting simultaneous concurrent updates',
    ],
    metrics: [
      { label: 'Server RAM Load', value: '-40% Memory' },
      { label: 'Sync Latency', value: '< 45ms' },
      { label: 'Throughput', value: 'High Concurrency' },
    ],
    tags: ['React 19', 'TypeScript', 'WebSockets', 'Express', 'Redis', 'Tailwind CSS'],
  },
  {
    id: 'tech-yard',
    title: 'Tech-Yard Hub Enterprise Management',
    category: 'RBAC Systems & Document Automation',
    client: 'Tech-Yard Hub',
    year: '2024 - 2025',
    role: 'Lead Front-End Architect',
    description:
      'Mission-critical enterprise administration dashboard featuring multi-tier Role-Based Access Control (RBAC), automated Excel & Word document compilation, and GSAP micro-interactions.',
    architecture: [
      'Strict multi-role authorization guards (Super-Admin, Manager, Operator)',
      'Client-side streaming report generators generating formatted Excel & Word files in seconds',
      'Virtual table rendering managing 10,000+ data rows with 0 layout shift',
    ],
    metrics: [
      { label: 'Table Virtualization', value: '10K+ Rows' },
      { label: 'Export Speed', value: '< 1.2s Excel' },
      { label: 'Access Control', value: 'Strict RBAC' },
    ],
    tags: ['Next.js', 'TypeScript', 'GSAP', 'Tailwind CSS', 'Zod', 'REST APIs'],
  },
  {
    id: 'speech-ai',
    title: 'Speech Therapy AI Learning Platform',
    category: 'EdTech & Audio Intelligence',
    client: 'Educational Healthcare',
    year: '2025',
    role: 'Front-End & Audio UI Engineer',
    description:
      'Interactive phonetics and speech analysis platform for children, combining Web Audio API visualizers with AI pronunciation feedback and therapist progress dashboards.',
    architecture: [
      'Real-time frequency audio visualizers built with Web Audio API canvas engine',
      'Gamified phonetics learning paths with engaging visual reinforcement',
      'Clinician dashboard tracking phoneme accuracy curves and patient recovery metrics',
    ],
    metrics: [
      { label: 'Audio Latency', value: 'Zero Buffer' },
      { label: 'Accuracy Tracking', value: 'Real-Time' },
      { label: 'Patient Reach', value: 'Multi-Clinic' },
    ],
    tags: ['React', 'Web Audio API', 'TypeScript', 'Tailwind CSS', 'AI Telemetry'],
  },
  {
    id: 'seen-ousketch',
    title: 'SEEN & Ousketch Video Ecosystem',
    category: 'Video Streaming & Mobile Apps',
    client: 'SEEN EdTech',
    year: '2024 - 2025',
    role: 'Full-Lifecycle Mobile & Web Engineer',
    description:
      'Seamless cross-platform educational network featuring video streaming, appointment booking for workshops, and unified state synchronization across web and React Native mobile apps.',
    architecture: [
      'Synchronized state flow between web portal (Next.js) and mobile application (React Native Expo)',
      'Low-latency adaptive video player with timestamped bookmarks and interactive notes',
      'Integrated real-time calendar reservations and automated notification triggers',
    ],
    metrics: [
      { label: 'Platforms', value: 'Web & Mobile' },
      { label: 'State Sync', value: 'Universal' },
      { label: 'Video Buffering', value: '< 200ms' },
    ],
    tags: ['React Native (Expo)', 'Next.js', 'Tailwind CSS', 'TypeScript', 'REST APIs'],
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project>(PROJECTS[0]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-reveal',
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
      id="projects"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#000000] text-white py-28 md:py-36 px-6 md:px-14 lg:px-24 overflow-hidden select-none border-t border-amber-500/20"
    >
      {/* Ambient Gold Halo */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-amber-500/15">
          <div>
            <div className="project-reveal inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 font-mono text-xs tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
              <FolderGit2 className="w-3.5 h-3.5 text-amber-400" />
              <span>03 // PRODUCTION CASE STUDIES</span>
            </div>
            <h2 className="project-reveal text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-white">
              ENGINEERED{' '}
              <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                PROJECTS
              </span>
            </h2>
          </div>

          <div className="project-reveal flex items-center gap-4 text-xs font-mono text-zinc-400">
            <div className="px-4 py-2.5 rounded-2xl bg-white/[0.03] border border-amber-500/20">
              <span className="text-zinc-500 block text-[10px]">TOTAL SHOWCASED</span>
              <span className="text-amber-300 font-bold text-sm">5 ENTERPRISE APPS</span>
            </div>
            <div className="px-4 py-2.5 rounded-2xl bg-white/[0.03] border border-amber-500/20">
              <span className="text-zinc-500 block text-[10px]">CODE QUALITY</span>
              <span className="text-white font-bold text-sm">STRICT TYPESCRIPT</span>
            </div>
          </div>
        </div>

        {/* ================= PROJECTS GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT COLUMN: PROJECT CARDS LIST (7 COLS) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {PROJECTS.map((project, idx) => {
              const isSelected = selectedProject.id === project.id;
              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`project-reveal relative rounded-3xl p-6 sm:p-8 bg-[#080808]/90 border transition-all duration-300 cursor-pointer group shadow-xl ${
                    isSelected
                      ? 'border-amber-400/80 shadow-[0_0_35px_rgba(245,158,11,0.25)] bg-[#0d0d0d]'
                      : 'border-amber-500/20 hover:border-amber-400/50 hover:bg-[#0a0a0a]'
                  }`}
                >
                  {/* Subtle Corner Brackets for active card */}
                  {isSelected && (
                    <>
                      <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-amber-400 pointer-events-none" />
                      <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-amber-400 pointer-events-none" />
                      <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-amber-400 pointer-events-none" />
                      <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-amber-400 pointer-events-none" />
                    </>
                  )}

                  {/* Header Row: Number + Client & Year */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-black text-amber-400 tracking-wider">
                        // 0{idx + 1}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 font-mono text-[10px] tracking-wide uppercase">
                        {project.client}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-zinc-400">{project.year}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-amber-200 transition-colors mb-2 flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isSelected ? 'text-amber-400 translate-x-0.5 -translate-y-0.5' : 'text-zinc-500 group-hover:text-white'
                      }`}
                    />
                  </h3>

                  <div className="text-xs font-mono text-amber-400/90 mb-3">{project.role}</div>

                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: ARCHITECTURAL TELEMETRY INSPECTOR (5 COLS STICKY) */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-3xl p-6 sm:p-8 bg-[#080808]/95 border border-amber-500/30 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-amber-400 pointer-events-none" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-amber-400 pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-amber-400 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-amber-400 pointer-events-none" />

              {/* Status Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-amber-500/20">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 font-mono text-[10px] tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  ARCHITECTURAL INSPECTOR
                </span>
                <span className="font-mono text-xs text-zinc-400">{selectedProject.year}</span>
              </div>

              {/* Selected Title */}
              <h4 className="text-2xl font-black tracking-tight text-white mb-1">
                {selectedProject.title}
              </h4>
              <p className="text-xs font-mono text-amber-400 mb-6">
                {selectedProject.category} • {selectedProject.client}
              </p>

              {/* Key Metrics Strip */}
              <div className="grid grid-cols-3 gap-2.5 mb-6">
                {selectedProject.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3 rounded-2xl bg-white/[0.03] border border-amber-500/20 text-center"
                  >
                    <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                      {m.label}
                    </div>
                    <div className="text-xs sm:text-sm font-black font-mono text-amber-300">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Engineering Blueprint Pillars */}
              <div className="mb-6">
                <div className="text-xs font-mono text-zinc-400 tracking-wider uppercase mb-3 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5 text-amber-400" />
                  <span>ENGINEERING HIGHLIGHTS:</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {selectedProject.architecture.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed font-light"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Role & Verification Badge */}
              <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-white">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Verified Production Code</span>
                </span>
                <span className="text-amber-300 font-bold">100% Client Delivered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

