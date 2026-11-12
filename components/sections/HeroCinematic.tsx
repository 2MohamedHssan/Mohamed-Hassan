'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FluidSimulation, {
  FluidSimulationHandle,
} from '@/components/ui/FluidSimulation';

gsap.registerPlugin(ScrollTrigger);

export default function HeroCinematic() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shakeWrapperRef = useRef<HTMLDivElement | null>(null);
  const fluidRef = useRef<FluidSimulationHandle | null>(null);
  const titleWrapperRef = useRef<HTMLDivElement | null>(null);
  const curtainRef = useRef<HTMLDivElement | null>(null);

  // FX Layers
  const flashRef = useRef<HTMLDivElement | null>(null);
  const flareRef = useRef<HTMLDivElement | null>(null);
  const shockwaveRef = useRef<HTMLDivElement | null>(null);
  const sparksCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const glintRef = useRef<HTMLDivElement | null>(null);

  // Name definitions
  const firstName = 'MOHAMED';
  const lastName = 'HASSAN';

  // ==================== ULTRA-FAST 60FPS SPARKS ENGINE (NO SHADOWBLUR) ====================
  const triggerSparks = useCallback((count = 45) => {
    const canvas = sparksCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = canvas.clientWidth);
    const height = (canvas.height = canvas.clientHeight);
    const centerX = width * 0.5;
    const centerY = height * 0.5;

    interface Spark {
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

    const sparkColors = ['#ffffff', '#fff7ed', '#fef08a', '#fb923c', '#f97316', '#dc2626'];
    const sparks: Spark[] = [];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 24 + 6;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed - (Math.random() * 10);

      sparks.push({
        x: centerX + (Math.random() - 0.5) * 80,
        y: centerY + (Math.random() - 0.5) * 30,
        prevX: centerX,
        prevY: centerY,
        vx,
        vy,
        color: sparkColors[i % sparkColors.length],
        size: Math.random() * 2 + 1,
        life: 1.0,
        decay: Math.random() * 0.03 + 0.018,
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
        s.vy += 0.5; // Gravity
        s.vx *= 0.98; // Drag
        s.vy *= 0.98;
        s.life -= s.decay;

        // Zero shadowBlur = 100% GPU fast paths
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

  // ==================== MANUAL RE-STRIKE ON CLICK ====================
  const handleCollisionReplay = () => {
    triggerSparks(35);
    fluidRef.current?.splat(0.5, 0.5);

    if (flashRef.current) {
      gsap.fromTo(
        flashRef.current,
        { opacity: 0.75 },
        { opacity: 0, duration: 0.25, ease: 'power2.out' }
      );
    }

    if (shockwaveRef.current) {
      gsap.fromTo(
        shockwaveRef.current,
        { scale: 0.2, opacity: 0.8 },
        { scale: 2.8, opacity: 0, duration: 0.45, ease: 'power2.out' }
      );
    }

    if (shakeWrapperRef.current) {
      const shakeTl = gsap.timeline();
      shakeTl
        .to(shakeWrapperRef.current, { x: -10, y: 7, duration: 0.03 })
        .to(shakeWrapperRef.current, { x: 8, y: -6, duration: 0.03 })
        .to(shakeWrapperRef.current, { x: -4, y: 3, duration: 0.03 })
        .to(shakeWrapperRef.current, { x: 0, y: 0, duration: 0.05 });
    }

    const moltenElements = containerRef.current?.querySelectorAll('.char-molten');
    if (moltenElements && moltenElements.length > 0) {
      gsap.fromTo(
        moltenElements,
        { opacity: 0.85 },
        { opacity: 0, duration: 1.2, ease: 'power2.out' }
      );
    }

    if (glintRef.current) {
      gsap.fromTo(
        glintRef.current,
        { x: '-150%' },
        { x: '250%', duration: 0.8, ease: 'power2.inOut' }
      );
    }
  };

  // ==================== 3D EXPLOSIVE CONVERGENCE & IMPACT (ZERO LAG) ====================
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      const chars = container.querySelectorAll<HTMLElement>('.steel-char');
      const moltenChars = container.querySelectorAll<HTMLElement>('.char-molten');

      // 1. Initial 3D Spatial Trajectories (Pure transform3d, ZERO heavy CSS filters)
      chars.forEach((char, idx) => {
        const isFirstName = idx < firstName.length;
        const angle = isFirstName
          ? -Math.PI * 0.75 + (idx / firstName.length) * 0.6
          : Math.PI * 0.25 + ((idx - firstName.length) / lastName.length) * 0.6;

        const distance = 350 + (idx % 3) * 80;
        const startX = Math.cos(angle) * distance;
        const startY = Math.sin(angle) * distance * 0.6;
        const startZ = -400 - (idx % 3) * 120;
        const rotX = (Math.random() - 0.5) * 60;
        const rotY = (Math.random() - 0.5) * 80;
        const rotZ = (Math.random() - 0.5) * 30;

        gsap.set(char, {
          x: startX,
          y: startY,
          z: startZ,
          rotationX: rotX,
          rotationY: rotY,
          rotationZ: rotZ,
          scale: 1.6,
          opacity: 0,
        });
      });

      if (moltenChars.length > 0) {
        gsap.set(moltenChars, { opacity: 0 });
      }

      if (flashRef.current) gsap.set(flashRef.current, { opacity: 0 });
      if (flareRef.current) gsap.set(flareRef.current, { scaleX: 0, opacity: 0 });
      if (shockwaveRef.current) gsap.set(shockwaveRef.current, { scale: 0, opacity: 0 });
      if (glintRef.current) gsap.set(glintRef.current, { x: '-150%' });

      // 2. Black Curtain lifts fast
      if (curtainRef.current) {
        tl.to(curtainRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: 'power2.inOut',
        });
      }

      // 3. HYPER-VELOCITY CONVERGENCE ("اتحد" - GPU accelerated)
      tl.to(
        chars,
        {
          x: 0,
          y: 0,
          z: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power4.in',
          stagger: 0.012,
        },
        '+=0.05'
      );

      // 4. THE EXPLOSIVE COLLISION MOMENT
      tl.add(() => {
        // A. Lightweight 45 sparks (zero blur overhead)
        triggerSparks(45);

        // B. Fluid shockwave (single impulse)
        fluidRef.current?.splat(0.5, 0.5);

        // C. Clean 4-frame Screen Shake
        if (shakeWrapperRef.current) {
          const shakeTl = gsap.timeline();
          shakeTl
            .to(shakeWrapperRef.current, { x: -12, y: 8, duration: 0.03 })
            .to(shakeWrapperRef.current, { x: 10, y: -7, duration: 0.03 })
            .to(shakeWrapperRef.current, { x: -5, y: 4, duration: 0.035 })
            .to(shakeWrapperRef.current, { x: 0, y: 0, duration: 0.06 });
        }

        // D. Elastic Impact Rebound
        if (titleWrapperRef.current) {
          gsap.fromTo(
            titleWrapperRef.current,
            { scale: 1.15 },
            { scale: 1, duration: 0.6, ease: 'back.out(2)' }
          );
        }
      });

      // E. Shockwave Ring Expands
      if (shockwaveRef.current) {
        tl.to(
          shockwaveRef.current,
          {
            scale: 3,
            opacity: 0.8,
            duration: 0.08,
            ease: 'power2.out',
          },
          '<'
        ).to(shockwaveRef.current, {
          opacity: 0,
          duration: 0.45,
          ease: 'power2.out',
        });
      }

      // F. Arc Strobe Flash
      if (flashRef.current) {
        tl.to(
          flashRef.current,
          {
            opacity: 0.9,
            duration: 0.03,
            ease: 'power1.in',
          },
          '<'
        )
          .to(flashRef.current, {
            opacity: 0.2,
            duration: 0.04,
          })
          .to(flashRef.current, {
            opacity: 0.8,
            duration: 0.03,
          })
          .to(flashRef.current, {
            opacity: 0,
            duration: 0.45,
            ease: 'power2.out',
          });
      }

      // G. Horizontal Anamorphic Flare
      if (flareRef.current) {
        tl.to(
          flareRef.current,
          {
            scaleX: 1.8,
            opacity: 1,
            duration: 0.1,
            ease: 'power2.out',
          },
          '<'
        ).to(flareRef.current, {
          scaleX: 2.6,
          opacity: 0,
          duration: 0.4,
          ease: 'power2.in',
        });
      }

      // H. Molten Heat Ignition & Solidification
      if (moltenChars.length > 0) {
        tl.to(
          moltenChars,
          {
            opacity: 1,
            duration: 0.04,
          },
          '<'
        ).to(
          moltenChars,
          {
            opacity: 0,
            duration: 1.8,
            ease: 'power2.out',
          },
          '+=0.1'
        );
      }

      // I. Specular Chrome Glint Sweep
      if (glintRef.current) {
        tl.to(
          glintRef.current,
          {
            x: '250%',
            duration: 1.0,
            ease: 'power2.inOut',
          },
          '-=1.0'
        );
      }

      // 5. Smooth 3D Mouse Parallax
      const qx = titleWrapperRef.current
        ? gsap.quickTo(titleWrapperRef.current, 'x', { duration: 0.5, ease: 'power2.out' })
        : null;
      const qy = titleWrapperRef.current
        ? gsap.quickTo(titleWrapperRef.current, 'y', { duration: 0.5, ease: 'power2.out' })
        : null;

      const onMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const xNorm = (e.clientX / innerWidth - 0.5) * 2;
        const yNorm = (e.clientY / innerHeight - 0.5) * 2;

        if (qx && qy) {
          qx(xNorm * 20);
          qy(yNorm * 14);
        }

        if (titleWrapperRef.current) {
          gsap.to(titleWrapperRef.current, {
            rotationY: xNorm * 8,
            rotationX: -yNorm * 8,
            duration: 0.5,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        }
      };

      window.addEventListener('mousemove', onMouseMove);

      // 6. ScrollTrigger Parallax Out
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          if (titleWrapperRef.current) {
            gsap.set(titleWrapperRef.current, {
              scale: 1 - progress * 0.2,
              y: progress * 180,
              opacity: 1 - progress * 1.5,
            });
          }
        },
      });

      return () => {
        window.removeEventListener('mousemove', onMouseMove);
      };
    }, container);

    return () => ctx.revert();
  }, [triggerSparks]);

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
          splatRadius={0.38}
          curl={30}
          densityDissipation={0.98}
          velocityDissipation={0.2}
          pressure={0.8}
          bloom={true}
          sunrays={true}
          shading={true}
          colorful={true}
          immediate={true}
          initialSplatCount={4}
          auto={false}
          interval={0}
        />
      </div>

      {/* 3. Deep Ambient Vignette */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,8,0.45)_55%,rgba(3,3,5,0.95)_100%)]" />

      {/* 4. BLINDING ARC FLASH OVERLAY */}
      <div
        ref={flashRef}
        className="absolute inset-0 z-40 bg-gradient-to-r from-sky-100 via-white to-amber-100 pointer-events-none mix-blend-screen opacity-0"
      />

      {/* 5. CIRCULAR IMPACT SHOCKWAVE RING */}
      <div
        ref={shockwaveRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-35 pointer-events-none w-56 h-56 rounded-full border border-orange-400/90 shadow-[0_0_40px_rgba(255,140,0,0.6)] opacity-0"
      />

      {/* 6. ANAMORPHIC HORIZONTAL LENS FLARE */}
      <div
        ref={flareRef}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-35 pointer-events-none flex items-center justify-center opacity-0 scale-x-0"
      >
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-300 via-white to-transparent shadow-[0_0_30px_#38bdf8]" />
      </div>

      {/* 7. WELDING SPARKS PARTICLE CANVAS */}
      <canvas
        ref={sparksCanvasRef}
        className="absolute inset-0 z-30 pointer-events-none w-full h-full"
      />

      {/* 8. SHAKE WRAPPER */}
      <div
        ref={shakeWrapperRef}
        className="relative z-20 w-full h-full flex flex-col items-center justify-center pointer-events-none"
      >
        {/* 3D Perspective Title Carrier */}
        <div
          ref={titleWrapperRef}
          style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          onClick={handleCollisionReplay}
          className="relative px-4 text-center cursor-pointer pointer-events-auto"
        >
          {/* Main Title: PURE NAME ONLY ("MOHAMED HASSAN") */}
          <h1 className="relative text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-black tracking-tight leading-[0.88] flex flex-wrap justify-center items-center gap-x-6 md:gap-x-12 gap-y-2">
            {/* FIRST NAME: MOHAMED */}
            <span className="inline-flex">
              {firstName.split('').map((char, i) => (
                <span
                  key={`fn-${i}`}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="steel-char relative inline-block"
                >
                  {/* Heavy Cold Brushed Titanium Steel Base */}
                  <span className="inline-block bg-gradient-to-b from-white via-[#cbd5e1] via-[#94a3b8] via-[#475569] to-[#0f172a] bg-clip-text text-transparent drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
                    {char}
                  </span>

                  {/* Searing Molten Lava Welding Layer */}
                  <span
                    aria-hidden="true"
                    className="char-molten absolute inset-0 inline-block bg-gradient-to-b from-white via-[#fde047] via-[#f97316] to-[#dc2626] bg-clip-text text-transparent pointer-events-none opacity-0 drop-shadow-[0_0_20px_#f97316]"
                  >
                    {char}
                  </span>
                </span>
              ))}
            </span>

            {/* LAST NAME: HASSAN */}
            <span className="inline-flex">
              {lastName.split('').map((char, i) => (
                <span
                  key={`ln-${i}`}
                  style={{ transformStyle: 'preserve-3d' }}
                  className="steel-char relative inline-block"
                >
                  {/* Heavy Cold Brushed Titanium Steel Base */}
                  <span className="inline-block bg-gradient-to-b from-white via-[#cbd5e1] via-[#94a3b8] via-[#475569] to-[#0f172a] bg-clip-text text-transparent drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]">
                    {char}
                  </span>

                  {/* Searing Molten Lava Welding Layer */}
                  <span
                    aria-hidden="true"
                    className="char-molten absolute inset-0 inline-block bg-gradient-to-b from-white via-[#fde047] via-[#f97316] to-[#dc2626] bg-clip-text text-transparent pointer-events-none opacity-0 drop-shadow-[0_0_20px_#f97316]"
                  >
                    {char}
                  </span>
                </span>
              ))}
            </span>

            {/* Specular Chrome Glint Sweep */}
            <div
              ref={glintRef}
              className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-color-dodge opacity-70"
            >
              <div className="w-28 h-full bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-[-30deg]" />
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
}
