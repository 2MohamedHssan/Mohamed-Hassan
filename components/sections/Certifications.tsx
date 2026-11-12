'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Award, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Certifications() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const images = [
    { title: 'Full-Stack MERN Stack Engineering', subtitle: 'Advanced Architecture & APIs', url: '/mohamedFullstak.png' },
    { title: 'IT & Infrastructure Systems', subtitle: 'Hardware, Networks & Security', url: '/IT.jpg' },
    { title: 'Advanced Visual Design & Photoshop', subtitle: 'UI/UX Visual Composition & Assets', url: '/photoshop.jpg' },
    { title: 'Web Standards & Modern Frontend', subtitle: 'Responsive Engineering & Semantic Web', url: '/web.jpg' },
    { title: 'React Design Patterns & Architecture', subtitle: 'Scalable Component Architecture', url: '/React_Design_patterns.png' },
    { title: 'React Essential Training & State Flow', subtitle: 'Hooks, Lifecycle & Performance', url: '/React Essential Training.png' },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const slider = sliderRef.current;
    if (!section || !slider) return;

    const ctx = gsap.context(() => {
      gsap.to(slider, {
        x: () => -(slider.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${Math.max(slider.scrollWidth - window.innerWidth, 1200)}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          refreshPriority: 1,
          invalidateOnRefresh: true,
        },
      });

      // Synchronize measurements after layout stabilizes
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);

      return () => clearTimeout(timer);
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#000000] text-white border-t border-amber-500/20 select-none"
    >
      {/* Top Section Header HUD */}
      <div className="absolute top-8 left-6 md:left-14 z-20 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 font-mono text-xs tracking-[0.2em] uppercase mb-2 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>03 // VERIFIED CREDENTIALS</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
          CERTIFIED{' '}
          <span className="bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            EXPERTISE
          </span>
        </h2>
      </div>

      {/* Top-Right Indicator */}
      <div className="absolute top-8 right-6 md:right-14 z-20 pointer-events-none hidden sm:flex items-center gap-2 text-xs font-mono text-amber-300/80 bg-black/60 px-3.5 py-1.5 rounded-full border border-amber-500/20 backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        <span>SCROLL HORIZONTALLY TO EXPLORE</span>
      </div>

      {/* Horizontal Slider Track */}
      <div
        ref={sliderRef}
        className="flex h-full w-max items-center"
      >
        {images.map(({ title, subtitle, url }, idx) => (
          <div
            key={url}
            className="certificate-card relative w-[85vw] sm:w-[75vw] lg:w-[65vw] max-w-[900px] h-screen flex items-center justify-center shrink-0 px-4 md:px-10"
          >
            <div className="relative w-full aspect-[16/10] max-h-[70vh] rounded-3xl p-3 bg-gradient-to-b from-amber-500/20 via-white/5 to-transparent border border-amber-500/30 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(245,158,11,0.1)] group">
              {/* Inner Card Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#050505]">
                <Image
                  src={url}
                  alt={title}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 900px"
                  fill
                  className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                />

                {/* Gold Corner Accents */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-amber-400 pointer-events-none" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-amber-400 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-amber-400 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-amber-400 pointer-events-none" />

                {/* Number Badge */}
                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-amber-400/40 text-amber-300 font-mono text-[10px] tracking-widest">
                    <ShieldCheck className="w-3 h-3 text-amber-400" />
                    CERT_0{idx + 1}
                  </span>
                </div>

                {/* Caption Bar */}
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <div className="p-3 sm:p-4 rounded-xl bg-black/90 backdrop-blur-xl border border-amber-500/30 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                        {title}
                      </h4>
                      <p className="text-[11px] font-mono text-zinc-400">
                        {subtitle}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-[10px] uppercase font-bold shrink-0">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
