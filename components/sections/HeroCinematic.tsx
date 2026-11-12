'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import FluidSimulation, {
  FluidSimulationHandle,
} from '@/components/ui/FluidSimulation';
import { Mail, Phone, Copy, Check } from 'lucide-react';

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

export default function HeroCinematic() {
  const masterPinRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const shakeWrapperRef = useRef<HTMLDivElement | null>(null);
  const fluidRef = useRef<FluidSimulationHandle | null>(null);

  // Hero Title Elements
  const heroTitleRef = useRef<HTMLDivElement | null>(null);
  const mohamedWordRef = useRef<HTMLSpanElement | null>(null);
  const hassanWordRef = useRef<HTMLSpanElement | null>(null);
  const moltenMohamedRef = useRef<HTMLSpanElement | null>(null);
  const moltenHassanRef = useRef<HTMLSpanElement | null>(null);
  const scrollPromptRef = useRef<HTMLDivElement | null>(null);

  // About Stage Elements
  const aboutStageRef = useRef<HTMLDivElement | null>(null);
  const photoCardRef = useRef<HTMLDivElement | null>(null);
  const aboutTextRef = useRef<HTMLDivElement | null>(null);

  // Impact FX Layers (Localized right at the collision seam)
  const seamFlashRef = useRef<HTMLDivElement | null>(null);
  const shockwaveRef = useRef<HTMLDivElement | null>(null);
  const weldSeamRef = useRef<HTMLDivElement | null>(null);
  const flareRef = useRef<HTMLDivElement | null>(null);
  const glintRef = useRef<HTMLDivElement | null>(null);
  const ambientFlashRef = useRef<HTMLDivElement | null>(null);
  const sparksCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const curtainRef = useRef<HTMLDivElement | null>(null);

  // State
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = 'mohamed.web.contactme@gmail.com';
  const phone = '01013026172';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // ==================== FAST 60/120FPS GOLDEN WELDING SPARKS ====================
  const triggerSparks = useCallback((count = 80) => {
    const canvas = sparksCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = canvas.clientWidth);
    const height = (canvas.height = canvas.clientHeight);
    const centerX = width * 0.5;
    const centerY = height * 0.5;

    interface SparkParticle {
      x: number;
      y: number;
      prevX: number;
      prevY: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
      life: number;
      decay: number;
    }

    const sparkColors = ['#ffffff', '#fffbeb', '#fef08a', '#facc15', '#f59e0b', '#d97706'];
    const sparks: SparkParticle[] = [];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 26 + 6;
      sparks.push({
        x: centerX + (Math.random() - 0.5) * 40,
        y: centerY + (Math.random() - 0.5) * 20,
        prevX: centerX,
        prevY: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - Math.random() * 8,
        color: sparkColors[i % sparkColors.length],
        size: Math.random() * 2.5 + 1.2,
        life: 1.0,
        decay: Math.random() * 0.025 + 0.015,
      });
    }

    let frameId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      let activeCount = 0;

      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i];
        if (s.life <= 0) continue;
        activeCount++;
        s.prevX = s.x;
        s.prevY = s.y;
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.48; // Gravity
        s.vx *= 0.98;
        s.vy *= 0.98;
        s.life -= s.decay;

        ctx.beginPath();
        ctx.moveTo(s.prevX, s.prevY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = s.color;
        ctx.lineWidth = s.size;
        ctx.lineCap = 'round';
        ctx.globalAlpha = Math.max(0, s.life);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      if (activeCount > 0) {
        frameId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    };
    render();
  }, []);

  // ==================== MANUAL FORGE RE-STRIKE ON CLICK ====================
  const handleForgeReStrike = () => {
    triggerSparks(85);
    fluidRef.current?.burst(0.5, 0.5, 9);

    // Screen Shake
    if (shakeWrapperRef.current) {
      gsap.timeline()
        .to(shakeWrapperRef.current, { x: -16, y: 12, rotate: -0.7, duration: 0.035 })
        .to(shakeWrapperRef.current, { x: 14, y: -10, rotate: 0.6, duration: 0.035 })
        .to(shakeWrapperRef.current, { x: -10, y: 8, rotate: -0.4, duration: 0.04 })
        .to(shakeWrapperRef.current, { x: 0, y: 0, rotate: 0, duration: 0.08 });
    }

    // Physical Recoil
    if (mohamedWordRef.current && hassanWordRef.current) {
      gsap.timeline()
        .to(mohamedWordRef.current, { x: -14, duration: 0.06, ease: 'power2.out' })
        .to(mohamedWordRef.current, { x: 0, duration: 0.2, ease: 'elastic.out(1, 0.5)' });
      gsap.timeline()
        .to(hassanWordRef.current, { x: 14, duration: 0.06, ease: 'power2.out' })
        .to(hassanWordRef.current, { x: 0, duration: 0.2, ease: 'elastic.out(1, 0.5)' });
    }

    // Seam Flash & Shockwave
    if (seamFlashRef.current) {
      gsap.fromTo(
        seamFlashRef.current,
        { scale: 0.3, opacity: 1 },
        { scale: 2.5, opacity: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
    if (shockwaveRef.current) {
      gsap.fromTo(
        shockwaveRef.current,
        { scale: 0.2, opacity: 1 },
        { scale: 5.0, opacity: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
    if (weldSeamRef.current) {
      gsap.fromTo(
        weldSeamRef.current,
        { scaleY: 0, opacity: 1 },
        { scaleY: 1.2, opacity: 1, duration: 0.08 }
      );
      gsap.to(weldSeamRef.current, {
        opacity: 0.35,
        scaleY: 0.65,
        duration: 1.5,
        delay: 0.08,
        ease: 'power2.out',
      });
    }

    if (ambientFlashRef.current) {
      gsap.fromTo(
        ambientFlashRef.current,
        { opacity: 0.35 },
        { opacity: 0, duration: 0.35, ease: 'power2.out' }
      );
    }

    if (flareRef.current) {
      gsap.fromTo(
        flareRef.current,
        { scaleX: 0, opacity: 0.95 },
        { scaleX: 2.5, opacity: 0, duration: 0.45, ease: 'power2.out' }
      );
    }

    // Searing Molten Heat Reignites & Cools
    if (moltenMohamedRef.current && moltenHassanRef.current) {
      gsap.fromTo(
        [moltenMohamedRef.current, moltenHassanRef.current],
        { opacity: 1 },
        { opacity: 0, duration: 2.0, ease: 'power2.out' }
      );
    }

    // Specular Glint Sweep
    if (glintRef.current) {
      gsap.fromTo(
        glintRef.current,
        { x: '-150%' },
        { x: '250%', duration: 1.0, ease: 'power2.inOut', delay: 0.15 }
      );
    }
  };

  // ==================== GSAP MASTER CHOREOGRAPHY ====================
  useEffect(() => {
    const master = masterPinRef.current;
    if (!master) return;

    const ctx = gsap.context(() => {
      // 1. VIOLENT 3D IRON WELDING COLLISION INTRO
      const introTl = gsap.timeline({
        defaults: { ease: 'power4.out' },
      });

      // Initial 3D Spatial Positions
      if (mohamedWordRef.current && hassanWordRef.current) {
        gsap.set(mohamedWordRef.current, {
          x: -420,
          y: -40,
          z: -260,
          rotateX: 18,
          rotateY: 28,
          rotateZ: -5,
          opacity: 0,
        });

        gsap.set(hassanWordRef.current, {
          x: 420,
          y: 40,
          z: -260,
          rotateX: -18,
          rotateY: -28,
          rotateZ: 5,
          opacity: 0,
        });
      }

      if (curtainRef.current) {
        introTl.to(curtainRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
        });
      }

      // ACCELERATING IMPACT COLLISION (Slam together into center)
      if (mohamedWordRef.current && hassanWordRef.current) {
        introTl.to(
          [mohamedWordRef.current, hassanWordRef.current],
          {
            x: 0,
            y: 0,
            z: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.in',
          },
          '+=0.05'
        );

        // THE EXACT INSTANT OF IMPACT (Labeled 'impact')
        introTl.addLabel('impact');

        // A. Call Sparks and Fluid shockwave at the exact instant of impact
        introTl.call(() => {
          triggerSparks(90);
          fluidRef.current?.burst(0.5, 0.5, 9);
        }, [], 'impact');

        // B. Violent camera earthquake shake at impact
        if (shakeWrapperRef.current) {
          introTl
            .to(shakeWrapperRef.current, { x: -16, y: 12, rotate: -0.7, duration: 0.035, ease: 'none' }, 'impact')
            .to(shakeWrapperRef.current, { x: 14, y: -10, rotate: 0.6, duration: 0.035, ease: 'none' })
            .to(shakeWrapperRef.current, { x: -10, y: 8, rotate: -0.4, duration: 0.04, ease: 'none' })
            .to(shakeWrapperRef.current, { x: 7, y: -5, rotate: 0.25, duration: 0.04, ease: 'none' })
            .to(shakeWrapperRef.current, { x: -3, y: 3, rotate: -0.1, duration: 0.05, ease: 'none' })
            .to(shakeWrapperRef.current, { x: 0, y: 0, rotate: 0, duration: 0.08, ease: 'power2.out' });
        }

        // C. Physical metal impact recoil bounce on the letters
        introTl
          .to(mohamedWordRef.current, { x: -14, duration: 0.05, ease: 'power2.out' }, 'impact')
          .to(mohamedWordRef.current, { x: 0, duration: 0.22, ease: 'elastic.out(1, 0.45)' }, 'impact+=0.05');

        introTl
          .to(hassanWordRef.current, { x: 14, duration: 0.05, ease: 'power2.out' }, 'impact')
          .to(hassanWordRef.current, { x: 0, duration: 0.22, ease: 'elastic.out(1, 0.45)' }, 'impact+=0.05');

        // D. LOCALIZED SEAM ARC FLASH (Right at the center collision seam)
        if (seamFlashRef.current) {
          introTl.fromTo(
            seamFlashRef.current,
            { scale: 0.3, opacity: 1 },
            { scale: 2.6, opacity: 0, duration: 0.4, ease: 'power2.out' },
            'impact'
          );
        }

        // E. EXPANDING SHOCKWAVE RING
        if (shockwaveRef.current) {
          introTl.fromTo(
            shockwaveRef.current,
            { scale: 0.2, opacity: 1 },
            { scale: 5.2, opacity: 0, duration: 0.5, ease: 'power2.out' },
            'impact'
          );
        }

        // F. VERTICAL MOLTEN WELD SEAM (Sparks line between the two words)
        if (weldSeamRef.current) {
          introTl
            .fromTo(
              weldSeamRef.current,
              { scaleY: 0, opacity: 1 },
              { scaleY: 1.2, opacity: 1, duration: 0.07, ease: 'power1.out' },
              'impact'
            )
            .to(weldSeamRef.current, {
              opacity: 0.35,
              scaleY: 0.65,
              duration: 1.6,
              ease: 'power2.out',
            });
        }

        // G. ANAMORPHIC HORIZONTAL LENS FLARE BEAM
        if (flareRef.current) {
          introTl.fromTo(
            flareRef.current,
            { scaleX: 0, opacity: 0.95 },
            { scaleX: 2.4, opacity: 0, duration: 0.45, ease: 'power2.out' },
            'impact'
          );
        }

        // H. SUBTLE AMBIENT FLASH (Soft room glow, letters remain 100% visible)
        if (ambientFlashRef.current) {
          introTl.fromTo(
            ambientFlashRef.current,
            { opacity: 0.35 },
            { opacity: 0, duration: 0.35, ease: 'power2.out' },
            'impact'
          );
        }

        // I. SEARING MOLTEN IRON LAYER IGNITES AT IMPACT & SLOWLY COOLS TO FORGED STEEL
        if (moltenMohamedRef.current && moltenHassanRef.current) {
          introTl.fromTo(
            [moltenMohamedRef.current, moltenHassanRef.current],
            { opacity: 1 },
            { opacity: 0, duration: 2.2, ease: 'power2.out' },
            'impact'
          );
        }

        // J. SPECULAR METALLIC GLINT SWEEP
        if (glintRef.current) {
          introTl.fromTo(
            glintRef.current,
            { x: '-150%' },
            { x: '250%', duration: 1.1, ease: 'power2.inOut' },
            'impact+=0.25'
          );
        }
      }

      // 2. SCROLL CHOREOGRAPHY (GSAP PINNED TIMELINE)
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

      // Calculate exact center offset for dead-center photo emergence
      let initialOffsetX = 0;
      let initialOffsetY = 0;
      if (photoCardRef.current) {
        const rect = photoCardRef.current.getBoundingClientRect();
        initialOffsetX = window.innerWidth / 2 - (rect.left + rect.width / 2);
        initialOffsetY = window.innerHeight / 2 - (rect.top + rect.height / 2);
      }

      const scrubTl = gsap.timeline({
        scrollTrigger: {
          trigger: master,
          start: 'top top',
          end: '+=250%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          refreshPriority: 10,
          invalidateOnRefresh: true,
        },
      });

      // Step A: The Hero Name splits open horizontally on scroll
      scrubTl
        .to(
          mohamedWordRef.current,
          {
            xPercent: isDesktop ? -130 : -90,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.inOut',
          },
          0
        )
        .to(
          hassanWordRef.current,
          {
            xPercent: isDesktop ? 130 : 90,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.inOut',
          },
          0
        )
        .to(
          scrollPromptRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.25,
            ease: 'power1.out',
          },
          0
        );

      // Step B: Photo emerges in the DEAD CENTER of the screen
      scrubTl.fromTo(
        photoCardRef.current,
        {
          x: isDesktop ? initialOffsetX : 0,
          y: isDesktop ? 0 : initialOffsetY,
          scale: 0.65,
          opacity: 0,
        },
        {
          x: isDesktop ? initialOffsetX : 0,
          y: isDesktop ? 0 : initialOffsetY,
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: 'power2.out',
        },
        0.25
      );

      // Step C: Photo glides smoothly from CENTER to its natural side position
      scrubTl.to(
        photoCardRef.current,
        {
          x: 0,
          y: 0,
          duration: 0.55,
          ease: 'power2.inOut',
        },
        0.75
      );

      // Step D: Clean About Me text emerges on the other side
      scrubTl.fromTo(
        aboutTextRef.current,
        {
          x: isDesktop ? 40 : 0,
          y: isDesktop ? 0 : 30,
          opacity: 0,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
        },
        0.85
      );

      // Step E: Reading window before unpin
      scrubTl.to({}, { duration: 0.45 }, 1.35);
    }, master);

    return () => ctx.revert();
  }, [triggerSparks]);

  return (
    <div
      ref={masterPinRef}
      className="relative w-full bg-[#000000] text-white overflow-hidden select-none"
    >
      {/* Target Anchor for #about navbar link */}
      <div id="about" className="absolute top-[35%] pointer-events-none" />

      {/* Pinned Screen Viewport */}
      <div
        ref={viewportRef}
        className="relative w-full h-screen overflow-hidden flex items-center justify-center"
      >
        {/* Black Curtain */}
        <div
          ref={curtainRef}
          className="absolute inset-0 z-50 bg-[#000000] pointer-events-none"
        />

        {/* WebGL Fluid Simulation */}
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <FluidSimulation
            ref={fluidRef}
            splatRadius={0.35}
            curl={30}
            densityDissipation={0.98}
            velocityDissipation={0.2}
            pressure={0.8}
            bloom={true}
            sunrays={true}
            shading={true}
            colorful={true}
            immediate={true}
            initialSplatCount={3}
            auto={false}
            interval={0}
          />
        </div>

        {/* Deep Vignette */}
        <div className="absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.5)_60%,rgba(0,0,0,0.96)_100%)]" />

        {/* Gold Ambient Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/10 rounded-full blur-[180px] pointer-events-none" />

        {/* Soft Ambient Room Glow Flash (Does NOT blind or cover letters) */}
        <div
          ref={ambientFlashRef}
          className="absolute inset-0 z-15 bg-gradient-to-r from-amber-200/20 via-white/30 to-amber-200/20 pointer-events-none mix-blend-screen opacity-0"
        />

        {/* Anamorphic Horizontal Lens Flare Beam */}
        <div
          ref={flareRef}
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-35 pointer-events-none flex items-center justify-center opacity-0 scale-x-0"
        >
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-amber-200 via-white to-transparent shadow-[0_0_35px_#f59e0b]" />
        </div>

        {/* Welding Sparks Particle Canvas */}
        <canvas
          ref={sparksCanvasRef}
          className="absolute inset-0 z-30 pointer-events-none w-full h-full"
        />

        {/* ============================================================== */}
        {/* SHAKE WRAPPER: Receives violent impact earthquake shockwave   */}
        {/* ============================================================== */}
        <div
          ref={shakeWrapperRef}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
        >
          {/* HERO TITLE LAYER: Forged Steel + Molten Fusion */}
          <div
            ref={heroTitleRef}
            onClick={handleForgeReStrike}
            title="Click to re-strike the steel forge"
            style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
            className="relative px-4 text-center cursor-pointer pointer-events-auto"
          >
            {/* LOCALIZED IMPACT ARC FLASH (Right at the center seam) */}
            <div
              ref={seamFlashRef}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-radial from-white via-amber-300/80 to-transparent blur-md pointer-events-none opacity-0 mix-blend-screen z-40"
            />

            {/* EXPANDING SHOCKWAVE RING */}
            <div
              ref={shockwaveRef}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-amber-300 pointer-events-none opacity-0 scale-50 z-40"
            />

            {/* VERTICAL WELDING SEAM BEAD */}
            <div
              ref={weldSeamRef}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[3px] h-32 bg-gradient-to-b from-transparent via-white via-amber-300 to-transparent shadow-[0_0_25px_#f59e0b] opacity-0 pointer-events-none z-35"
            />

            <h1 className="relative text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tight leading-none flex flex-wrap justify-center items-center gap-x-6 md:gap-x-12">
              {/* ================= WORD 1: MOHAMED ================= */}
              <span
                ref={mohamedWordRef}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative inline-block"
              >
                {/* Cold Forged Steel Base */}
                <span className="inline-block bg-gradient-to-b from-white via-[#cbd5e1] via-[#94a3b8] via-[#475569] to-[#0f172a] bg-clip-text text-transparent drop-shadow-[0_2px_1px_rgba(255,255,255,0.7)] drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]">
                  MOHAMED
                </span>

                {/* Searing Molten Magma Layer (Cools on impact) */}
                <span
                  ref={moltenMohamedRef}
                  aria-hidden="true"
                  className="absolute inset-0 inline-block bg-gradient-to-b from-white via-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent pointer-events-none opacity-0 drop-shadow-[0_0_25px_rgba(245,158,11,0.8)]"
                >
                  MOHAMED
                </span>
              </span>

              {/* ================= WORD 2: HASSAN ================= */}
              <span
                ref={hassanWordRef}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative inline-block"
              >
                {/* Cold Forged Steel Base */}
                <span className="inline-block bg-linear-to-b from-white via-[#cbd5e1] via-[#94a3b8] via-[#475569] to-[#0f172a] bg-clip-text text-transparent drop-shadow-[0_2px_1px_rgba(255,255,255,0.7)] drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]">
                  HASSAN
                </span>

                {/* Searing Molten Magma Layer */}
                <span
                  ref={moltenHassanRef}
                  aria-hidden="true"
                  className="absolute inset-0 inline-block bg-gradient-to-b from-white via-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent pointer-events-none opacity-0 drop-shadow-[0_0_25px_rgba(245,158,11,0.8)]"
                >
                  HASSAN
                </span>
              </span>

              {/* Specular Chrome Glint Sweep */}
              <div
                ref={glintRef}
                className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen opacity-70"
              >
                <div className="w-32 h-full bg-linear-to-r from-transparent via-white/90 to-transparent skew-x-[-30deg]" />
              </div>
            </h1>
          </div>

          {/* Bottom Scroll Prompt */}
          <div
            ref={scrollPromptRef}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
          >
            <div className="w-5 h-8 rounded-full border border-amber-400/40 flex items-start justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-amber-400 animate-bounce" />
            </div>
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-amber-300">
              SCROLL
            </span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* ABOUT STAGE LAYER (ZERO OVERLAP: CLEAN FLEX CONTAINER)         */}
        {/* ============================================================== */}
        <div
          ref={aboutStageRef}
          className="relative z-25 w-full max-w-5xl px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 pointer-events-none"
        >
          {/* PHOTO CARD (CLEAR, UNOBSTRUCTED, LUXURY BORDER) */}
          <div
            ref={photoCardRef}
            className="w-60 sm:w-70 md:w-[320px] aspect-4/5 rounded-2xl p-2 bg-linear-to-b from-amber-500/20 via-white/5 to-transparent border border-amber-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] opacity-0 shrink-0 pointer-events-auto"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#050505]">
              <Image
                src="/mohamed.JPG"
                alt="Mohamed Hassan"
                fill
                sizes="(max-width: 768px) 280px, 320px"
                priority
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* ABOUT TEXT CONTENT (CLEAN, MINIMAL, IMPACTFUL) */}
          <div
            ref={aboutTextRef}
            className="w-full max-w-115 flex flex-col justify-center opacity-0 pointer-events-auto"
          >
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-amber-400 mb-2">
              ABOUT ME
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              MOHAMED HASSAN
            </h2>

            <p className="text-sm font-mono text-amber-300 mt-1">
              Front-End Developer
            </p>

            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mt-4">
              Front-End Developer specialized in building high-performance, responsive web applications using React, Next.js, and TypeScript. Focused on clean code, seamless user experiences, and modern visual design.
            </p>

            {/* Quick Details Badges */}
            <div className="flex flex-wrap gap-2.5 mt-5">
              <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-amber-500/20 text-xs font-mono text-zinc-300">
                B.Sc. Computer Science
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-amber-500/20 text-xs font-mono text-zinc-300">
                Egypt • Available Worldwide
              </span>
            </div>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-3 mt-6 pt-5 border-t border-amber-500/20">
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-xs font-mono text-amber-300 transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate max-w-[180px]">{email}</span>
                {copiedEmail ? <Check className="w-3 h-3 text-amber-400" /> : <Copy className="w-3 h-3 text-zinc-400" />}
              </button>

              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>{phone}</span>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-zinc-300 hover:text-amber-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
