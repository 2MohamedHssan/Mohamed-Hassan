'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FluidSimulation, {
  FluidSimulationHandle,
} from '@/components/ui/FluidSimulation';

gsap.registerPlugin(ScrollTrigger);

export default function HeroCinematic() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const fluidRef = useRef<FluidSimulationHandle | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const curtainRef = useRef<HTMLDivElement | null>(null);

  // GSAP Entrance & Parallax
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
      });

      const letters = container.querySelectorAll('.hero-char');

      // 1. Initial State (Null-Safe)
      if (letters.length > 0) {
        gsap.set(letters, {
          y: 120,
          opacity: 0,
          rotateX: -85,
          filter: 'blur(16px)',
          transformOrigin: '50% 100%',
        });
      }

      // 2. Cinematic Entrance Sequence
      if (curtainRef.current) {
        tl.to(curtainRef.current, {
          opacity: 0,
          duration: 0.9,
          ease: 'power2.inOut',
        });
      }

      if (letters.length > 0) {
        tl.to(
          letters,
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            filter: 'blur(0px)',
            stagger: 0.04,
            duration: 1.2,
          },
          '-=0.4'
        );
      }

      // 3. Mouse Parallax (3D Depth)
      const qxTitle = titleRef.current
        ? gsap.quickTo(titleRef.current, 'x', { duration: 0.8, ease: 'power3.out' })
        : null;
      const qyTitle = titleRef.current
        ? gsap.quickTo(titleRef.current, 'y', { duration: 0.8, ease: 'power3.out' })
        : null;

      const onMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const xNorm = (e.clientX / innerWidth - 0.5) * 2;
        const yNorm = (e.clientY / innerHeight - 0.5) * 2;

        if (qxTitle && qyTitle) {
          qxTitle(xNorm * 22);
          qyTitle(yNorm * 16);
        }
      };

      window.addEventListener('mousemove', onMouseMove);

      // 4. Scroll-Triggered Parallax / Fade Out
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          if (titleRef.current) {
            gsap.set(titleRef.current, {
              scale: 1 - progress * 0.2,
              y: progress * 180,
              opacity: 1 - progress * 1.5,
              filter: `blur(${progress * 14}px)`,
            });
          }
        },
      });

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      };
    }, container);

    return () => ctx.revert();
  }, []);

  const firstName = 'MOHAMED';
  const lastName = 'HASSAN';

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-[#050508] text-white overflow-hidden flex items-center justify-center select-none"
    >
      {/* 1. Cinematic Black Curtain */}
      <div
        ref={curtainRef}
        className="absolute inset-0 z-50 bg-[#020203] pointer-events-none"
      />

      {/* 2. Interactive WebGL Fluid Simulation */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <FluidSimulation
          ref={fluidRef}
          splatRadius={0.4}
          curl={35}
          densityDissipation={0.98}
          velocityDissipation={0.2}
          pressure={0.8}
          bloom={true}
          sunrays={true}
          shading={true}
          colorful={true}
          immediate={true}
          initialSplatCount={5}
          auto={false}
          interval={0}
        />
      </div>

      {/* 3. Deep Cinematic Ambient Vignette */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,8,0.45)_55%,rgba(3,3,5,0.92)_100%)]" />

      {/* 4. Center Name: MOHAMED HASSAN */}
      <div
        ref={titleRef}
        style={{ perspective: '1000px' }}
        className="relative z-20 pointer-events-none max-w-7xl px-4 text-center"
      >
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-black tracking-tight leading-[0.9] flex flex-wrap justify-center gap-x-6 md:gap-x-12 gap-y-2">
          {/* First Name */}
          <span className="inline-flex overflow-hidden">
            {firstName.split('').map((char, i) => (
              <span
                key={`fn-${i}`}
                className="hero-char inline-block bg-linear-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)]"
                style={{ textShadow: '0 0 50px rgba(255,255,255,0.15)' }}
              >
                {char}
              </span>
            ))}
          </span>

          {/* Last Name */}
          <span className="inline-flex overflow-hidden">
            {lastName.split('').map((char, i) => (
              <span
                key={`ln-${i}`}
                className="hero-char inline-block bg-linear-to-b from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)]"
                style={{ textShadow: '0 0 50px rgba(56,189,248,0.25)' }}
              >
                {char}
              </span>
            ))}
          </span>
        </h1>
      </div>
    </section>
  );
}
