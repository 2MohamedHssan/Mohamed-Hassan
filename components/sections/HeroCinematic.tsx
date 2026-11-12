'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
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
  const sparksCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const weldSeamRef = useRef<HTMLDivElement | null>(null);
  const glintRef = useRef<HTMLDivElement | null>(null);

  // Words & Molten Layers
  const mohamedRef = useRef<HTMLSpanElement | null>(null);
  const hassanRef = useRef<HTMLSpanElement | null>(null);
  const moltenMohamedRef = useRef<HTMLSpanElement | null>(null);
  const moltenHassanRef = useRef<HTMLSpanElement | null>(null);

  const [welded, setWelded] = useState(false);

  // ==================== WELDING SPARKS PARTICLE ENGINE ====================
  const triggerSparks = useCallback((intensity = 140) => {
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

    const sparkColors = [
      '#ffffff',
      '#fff7ed',
      '#fef08a',
      '#facc15',
      '#fb923c',
      '#f97316',
      '#ea580c',
      '#dc2626',
    ];

    const sparks: Spark[] = [];

    for (let i = 0; i < intensity; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 28 + 6;
      const upwardBias = Math.random() * 10;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed - upwardBias;

      sparks.push({
        x: centerX + (Math.random() - 0.5) * 60,
        y: centerY + (Math.random() - 0.5) * 40,
        prevX: centerX,
        prevY: centerY,
        vx,
        vy,
        color: sparkColors[Math.floor(Math.random() * sparkColors.length)],
        size: Math.random() * 2.5 + 1.2,
        life: 1.0,
        decay: Math.random() * 0.022 + 0.012,
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
        s.vy += 0.48; // Strong gravity
        s.vx *= 0.982; // Air friction
        s.vy *= 0.982;
        s.life -= s.decay;

        // Glowing streak drawing
        ctx.beginPath();
        ctx.moveTo(s.prevX, s.prevY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = s.color;
        ctx.lineWidth = s.size;
        ctx.lineCap = 'round';
        ctx.globalAlpha = Math.max(0, s.life);
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 10;
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      if (activeCount > 0) {
        frameId = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    };

    render();
  }, []);

  // ==================== MANUAL FORGE RE-STRIKE (ON CLICK) ====================
  const handleForgeReStrike = () => {
    // 1. Sparks
    triggerSparks(90);

    // 2. Fluid Burst
    fluidRef.current?.burst(0.5, 0.5, 6);

    // 3. Screen shake & arc flash
    if (shakeWrapperRef.current && flashRef.current) {
      gsap.fromTo(
        flashRef.current,
        { opacity: 0.8 },
        { opacity: 0, duration: 0.4, ease: 'power2.out' }
      );

      const st = gsap.timeline();
      st.to(shakeWrapperRef.current, { x: -8, y: 6, rotate: -0.4, duration: 0.03 })
        .to(shakeWrapperRef.current, { x: 7, y: -5, rotate: 0.3, duration: 0.03 })
        .to(shakeWrapperRef.current, { x: -4, y: 3, rotate: -0.2, duration: 0.03 })
        .to(shakeWrapperRef.current, { x: 0, y: 0, rotate: 0, duration: 0.05 });
    }

    // 4. Brief molten reignition & cool
    if (moltenMohamedRef.current && moltenHassanRef.current) {
      gsap.fromTo(
        [moltenMohamedRef.current, moltenHassanRef.current],
        { opacity: 0.85 },
        { opacity: 0, duration: 1.4, ease: 'power2.out' }
      );
    }

    // 5. Specular metallic glint wipe
    if (glintRef.current) {
      gsap.fromTo(
        glintRef.current,
        { x: '-150%' },
        { x: '250%', duration: 0.9, ease: 'power2.inOut' }
      );
    }
  };

  // ==================== CINEMATIC INTRO SEQUENCE (WELDING IMPACT) ====================
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
      });

      // 0. Setup Initial Positions (Approaching from deep 3D space)
      if (mohamedRef.current && hassanRef.current) {
        gsap.set(mohamedRef.current, {
          x: -360,
          y: -70,
          z: -350,
          rotateX: 25,
          rotateY: 35,
          rotateZ: -7,
          opacity: 0,
          filter: 'blur(16px)',
        });

        gsap.set(hassanRef.current, {
          x: 360,
          y: 70,
          z: -350,
          rotateX: -25,
          rotateY: -35,
          rotateZ: 7,
          opacity: 0,
          filter: 'blur(16px)',
        });
      }

      if (flashRef.current) gsap.set(flashRef.current, { opacity: 0 });
      if (flareRef.current) gsap.set(flareRef.current, { scaleX: 0, opacity: 0 });
      if (weldSeamRef.current) gsap.set(weldSeamRef.current, { opacity: 0, scaleY: 0 });
      if (glintRef.current) gsap.set(glintRef.current, { x: '-150%' });
      if (moltenMohamedRef.current && moltenHassanRef.current) {
        gsap.set([moltenMohamedRef.current, moltenHassanRef.current], { opacity: 0 });
      }

      // 1. Black Curtain Lifts
      if (curtainRef.current) {
        tl.to(curtainRef.current, {
          opacity: 0,
          duration: 0.7,
          ease: 'power2.inOut',
        });
      }

      // 2. High-Velocity Convergence ("اتحد" - The two massive steel plates collide)
      if (mohamedRef.current && hassanRef.current) {
        tl.to(
          [mohamedRef.current, hassanRef.current],
          {
            x: 0,
            y: 0,
            z: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: 0.95,
            ease: 'power4.in', // Accelerating collision!
          },
          '+=0.1'
        );
      }

      // 3. THE COLLISION MOMENT: WELDING ARC, SHOCKWAVE, BLINDING LIGHT & SPARKS!
      tl.add(() => {
        // A. Trigger 140 glowing sparks
        triggerSparks(150);

        // B. Trigger WebGL fluid shockwave in background
        fluidRef.current?.burst(0.5, 0.5, 10);

        // C. Heavy Screen Shake (Camera earthquake recoil)
        if (shakeWrapperRef.current) {
          const shakeTl = gsap.timeline();
          shakeTl
            .to(shakeWrapperRef.current, { x: -16, y: 12, rotate: -0.7, duration: 0.035 })
            .to(shakeWrapperRef.current, { x: 14, y: -10, rotate: 0.6, duration: 0.035 })
            .to(shakeWrapperRef.current, { x: -10, y: 8, rotate: -0.4, duration: 0.04 })
            .to(shakeWrapperRef.current, { x: 7, y: -5, rotate: 0.25, duration: 0.04 })
            .to(shakeWrapperRef.current, { x: -3, y: 3, rotate: -0.1, duration: 0.05 })
            .to(shakeWrapperRef.current, { x: 0, y: 0, rotate: 0, duration: 0.08, ease: 'power2.out' });
        }

        setWelded(true);
      });

      // D. High-Voltage Arc Flash Strobe (Double electric flash)
      if (flashRef.current) {
        tl.to(
          flashRef.current,
          {
            opacity: 1,
            duration: 0.04,
            ease: 'power1.in',
          },
          '<'
        )
          .to(flashRef.current, {
            opacity: 0.25,
            duration: 0.04,
          })
          .to(flashRef.current, {
            opacity: 0.9, // Second arc flash
            duration: 0.04,
          })
          .to(flashRef.current, {
            opacity: 0,
            duration: 0.65,
            ease: 'power3.out',
          });
      }

      // E. Anamorphic Horizontal Lens Flare Beam
      if (flareRef.current) {
        tl.to(
          flareRef.current,
          {
            scaleX: 1.6,
            opacity: 1,
            duration: 0.15,
            ease: 'power2.out',
          },
          '<'
        ).to(flareRef.current, {
          scaleX: 2.4,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.in',
        });
      }

      // F. Molten Magma Heat Ignition & Gradual Cooling ("اتلحم من حديد")
      if (moltenMohamedRef.current && moltenHassanRef.current && weldSeamRef.current) {
        // Instant magma heat at impact
        tl.to(
          [moltenMohamedRef.current, moltenHassanRef.current],
          {
            opacity: 1,
            duration: 0.05,
          },
          '<'
        )
          .to(
            weldSeamRef.current,
            {
              opacity: 1,
              scaleY: 1,
              duration: 0.08,
            },
            '<'
          )
          // Heat dissipates over 2.4s as molten iron cools into solid cold steel!
          .to(
            [moltenMohamedRef.current, moltenHassanRef.current],
            {
              opacity: 0,
              duration: 2.4,
              ease: 'power2.out',
            },
            '+=0.15'
          )
          // Seam settles into subtle permanent hot ember pulse
          .to(
            weldSeamRef.current,
            {
              opacity: 0.45,
              duration: 1.8,
              ease: 'power2.out',
            },
            '<'
          );
      }

      // G. Specular Metallic Chrome Glint Sweep (Reveals the cold, sharp brushed steel)
      if (glintRef.current) {
        tl.to(
          glintRef.current,
          {
            x: '250%',
            duration: 1.3,
            ease: 'power2.inOut',
          },
          '-=1.2'
        );
      }

      // 4. Mouse 3D Parallax & Tilt
      const qx = titleWrapperRef.current
        ? gsap.quickTo(titleWrapperRef.current, 'x', { duration: 0.7, ease: 'power3.out' })
        : null;
      const qy = titleWrapperRef.current
        ? gsap.quickTo(titleWrapperRef.current, 'y', { duration: 0.7, ease: 'power3.out' })
        : null;
      const qRotY = titleWrapperRef.current
        ? gsap.quickTo(titleWrapperRef.current, 'rotateY', { duration: 0.7, ease: 'power3.out' })
        : null;
      const qRotX = titleWrapperRef.current
        ? gsap.quickTo(titleWrapperRef.current, 'rotateX', { duration: 0.7, ease: 'power3.out' })
        : null;

      const onMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const xNorm = (e.clientX / innerWidth - 0.5) * 2;
        const yNorm = (e.clientY / innerHeight - 0.5) * 2;

        if (qx && qy && qRotY && qRotX) {
          qx(xNorm * 22);
          qy(yNorm * 16);
          qRotY(xNorm * 8);
          qRotX(-yNorm * 8);
        }
      };

      window.addEventListener('mousemove', onMouseMove);

      // 5. Scroll-Triggered Parallax / Fade Out
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          if (titleWrapperRef.current) {
            gsap.set(titleWrapperRef.current, {
              scale: 1 - progress * 0.22,
              y: progress * 200,
              opacity: 1 - progress * 1.5,
              filter: `blur(${progress * 16}px)`,
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
      {/* 1. Cinematic Black Curtain (Fades on start) */}
      <div
        ref={curtainRef}
        className="absolute inset-0 z-50 bg-[#020203] pointer-events-none"
      />

      {/* 2. Interactive WebGL Fluid Simulation (Underneath) */}
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
      <div className="absolute inset-0 z-1 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,8,0.45)_55%,rgba(3,3,5,0.94)_100%)]" />

      {/* 4. BLINDING ARC FLASH OVERLAY (The "ضجة" Light Strobe) */}
      <div
        ref={flashRef}
        className="absolute inset-0 z-40 bg-gradient-to-r from-sky-100 via-white to-amber-100 pointer-events-none mix-blend-screen opacity-0"
      />

      {/* 5. ANAMORPHIC HORIZONTAL LENS FLARE */}
      <div
        ref={flareRef}
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-35 pointer-events-none flex items-center justify-center opacity-0 scale-x-0"
      >
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-300 via-white to-transparent shadow-[0_0_50px_#38bdf8]" />
        <div className="absolute w-48 h-48 rounded-full bg-cyan-400/80 blur-3xl" />
        <div className="absolute w-24 h-24 rounded-full bg-white blur-xl" />
      </div>

      {/* 6. WELDING SPARKS PARTICLE CANVAS */}
      <canvas
        ref={sparksCanvasRef}
        className="absolute inset-0 z-30 pointer-events-none w-full h-full"
      />

      {/* 7. SHAKE WRAPPER (Receives the violent impact shockwave) */}
      <div
        ref={shakeWrapperRef}
        className="relative z-20 w-full h-full flex flex-col items-center justify-center pointer-events-none"
      >
        {/* 3D Perspective Title Carrier */}
        <div
          ref={titleWrapperRef}
          style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          onClick={handleForgeReStrike}
          title="Click to re-strike the steel forge"
          className="relative px-4 text-center cursor-pointer pointer-events-auto group"
        >
          {/* Main Title: Forged Steel + Molten Fusion */}
          <h1 className="relative text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-black tracking-tight leading-[0.88] flex flex-wrap justify-center items-center gap-x-5 md:gap-x-10 gap-y-2">
            {/* ================= WORD 1: MOHAMED ================= */}
            <span
              ref={mohamedRef}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative inline-block"
            >
              {/* Cold Forged Steel Base (Brushed Metallic Chrome) */}
              <span
                className="inline-block bg-gradient-to-b from-white via-[#cbd5e1] via-[#94a3b8] via-[#475569] to-[#0f172a] bg-clip-text text-transparent drop-shadow-[0_2px_1px_rgba(255,255,255,0.7)] drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]"
                style={{
                  filter:
                    'drop-shadow(0 1px 0 rgba(255,255,255,0.7)) drop-shadow(0 20px 45px rgba(0,0,0,0.95))',
                }}
              >
                MOHAMED
              </span>

              {/* Searing Molten Magma Layer (Cooling on impact) */}
              <span
                ref={moltenMohamedRef}
                aria-hidden="true"
                className="absolute inset-0 inline-block bg-gradient-to-b from-white via-[#fde047] via-[#f97316] to-[#dc2626] bg-clip-text text-transparent pointer-events-none opacity-0 transition-opacity duration-300"
                style={{
                  filter:
                    'drop-shadow(0 0 15px #ffffff) drop-shadow(0 0 35px #f59e0b) drop-shadow(0 0 70px #ea580c) drop-shadow(0 0 110px #b91c1c)',
                }}
              >
                MOHAMED
              </span>
            </span>

            {/* ================= WELD SEAM (The molten joint between words) ================= */}
          
            {/* ================= WORD 2: HASSAN ================= */}
            <span
              ref={hassanRef}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative inline-block"
            >
              {/* Cold Forged Steel Base */}
              <span
                className="inline-block bg-gradient-to-b from-white via-[#cbd5e1] via-[#94a3b8] via-[#475569] to-[#0f172a] bg-clip-text text-transparent drop-shadow-[0_2px_1px_rgba(255,255,255,0.7)] drop-shadow-[0_15px_35px_rgba(0,0,0,0.95)]"
                style={{
                  filter:
                    'drop-shadow(0 1px 0 rgba(255,255,255,0.7)) drop-shadow(0 20px 45px rgba(0,0,0,0.95))',
                }}
              >
                HASSAN
              </span>

              {/* Searing Molten Magma Layer */}
              <span
                ref={moltenHassanRef}
                aria-hidden="true"
                className="absolute inset-0 inline-block bg-gradient-to-b from-white via-[#fde047] via-[#f97316] to-[#dc2626] bg-clip-text text-transparent pointer-events-none opacity-0 transition-opacity duration-300"
                style={{
                  filter:
                    'drop-shadow(0 0 15px #ffffff) drop-shadow(0 0 35px #f59e0b) drop-shadow(0 0 70px #ea580c) drop-shadow(0 0 110px #b91c1c)',
                }}
              >
                HASSAN
              </span>
            </span>

            {/* Specular Chrome Glint Sweep (Slides across both words) */}
            <div
              ref={glintRef}
              className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-color-dodge opacity-75"
            >
              <div className="w-32 h-full bg-linear-to-r from-transparent via-white/80 to-transparent skew-x-[-30deg]" />
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
}
