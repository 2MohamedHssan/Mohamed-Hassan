'use client';

import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

export interface FluidSimulationHandle {
  splat: (x?: number, y?: number) => void;
  burst: (x?: number, y?: number, count?: number) => void;
}

export interface FluidSimulationProps {
  className?: string;
  splatRadius?: number;
  curl?: number;
  densityDissipation?: number;
  velocityDissipation?: number;
  pressure?: number;
  bloom?: boolean;
  sunrays?: boolean;
  shading?: boolean;
  colorful?: boolean;
  immediate?: boolean;
  initialSplatCount?: number;
  auto?: boolean;
  interval?: number;
}

const FluidSimulation = forwardRef<FluidSimulationHandle, FluidSimulationProps>(({
  className = '',
  splatRadius = 0.38,
  curl = 32,
  densityDissipation = 0.98,
  velocityDissipation = 0.2,
  pressure = 0.8,
  bloom = true,
  sunrays = true,
  shading = true,
  colorful = true,
  immediate = true,
  initialSplatCount = 5,
  auto = false,
  interval = 0,
}, ref) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Expose imperative triggers with real offsetX and offsetY
  useImperativeHandle(ref, () => ({
    splat: (x, y) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const targetX = x !== undefined ? x * canvas.clientWidth : canvas.clientWidth * 0.5;
      const targetY = y !== undefined ? y * canvas.clientHeight : canvas.clientHeight * 0.5;

      const evt = new MouseEvent('mousedown', {
        clientX: rect.left + targetX,
        clientY: rect.top + targetY,
        bubbles: false,
      });
      Object.defineProperty(evt, 'offsetX', { value: targetX, configurable: true });
      Object.defineProperty(evt, 'offsetY', { value: targetY, configurable: true });
      canvas.dispatchEvent(evt);
    },
    burst: (x, y, count = 12) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const targetX = x !== undefined ? x * canvas.clientWidth : canvas.clientWidth * 0.5;
      const targetY = y !== undefined ? y * canvas.clientHeight : canvas.clientHeight * 0.5;

      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          const offsetX = targetX + (Math.random() - 0.5) * 120;
          const offsetY = targetY + (Math.random() - 0.5) * 120;
          const downEvt = new MouseEvent('mousedown', {
            clientX: rect.left + offsetX,
            clientY: rect.top + offsetY,
            bubbles: false,
          });
          Object.defineProperty(downEvt, 'offsetX', { value: offsetX, configurable: true });
          Object.defineProperty(downEvt, 'offsetY', { value: offsetY, configurable: true });
          canvas.dispatchEvent(downEvt);

          const moveEvt = new MouseEvent('mousemove', {
            clientX: rect.left + offsetX + (Math.random() - 0.5) * 40,
            clientY: rect.top + offsetY + (Math.random() - 0.5) * 40,
            bubbles: false,
          });
          Object.defineProperty(moveEvt, 'offsetX', { value: offsetX + 10, configurable: true });
          Object.defineProperty(moveEvt, 'offsetY', { value: offsetY + 10, configurable: true });
          canvas.dispatchEvent(moveEvt);
        }, i * 35);
      }
    },
  }));

  useEffect(() => {
    let isMounted = true;
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Load webgl-fluid dynamically to ensure safe Next.js client-side execution
    async function initFluid() {
      try {
        const module = await import('webgl-fluid');
        const WebGLFluid = module.default;

        if (!isMounted || !canvasRef.current) return;

        WebGLFluid(canvasRef.current, {
          IMMEDIATE: immediate,
          TRIGGER: 'hover',
          AUTO: false,
          INTERVAL: 0,
          SIM_RESOLUTION: 128,
          DYE_RESOLUTION: 1024,
          CAPTURE_RESOLUTION: 512,
          DENSITY_DISSIPATION: densityDissipation,
          VELOCITY_DISSIPATION: velocityDissipation,
          PRESSURE: pressure,
          PRESSURE_ITERATIONS: 20,
          CURL: curl,
          SPLAT_RADIUS: splatRadius,
          SPLAT_FORCE: 7500,
          SPLAT_COUNT: initialSplatCount,
          SHADING: shading,
          COLORFUL: colorful,
          COLOR_UPDATE_SPEED: 12,
          PAUSED: false,
          BACK_COLOR: { r: 0, g: 0, b: 0 },
          TRANSPARENT: false,
          BLOOM: bloom,
          BLOOM_ITERATIONS: 8,
          BLOOM_RESOLUTION: 256,
          BLOOM_INTENSITY: 0.9,
          BLOOM_THRESHOLD: 0.55,
          BLOOM_SOFT_KNEE: 0.7,
          SUNRAYS: sunrays,
          SUNRAYS_RESOLUTION: 196,
          SUNRAYS_WEIGHT: 1.0,
        });

        // Forward mouse events from non-canvas elements to canvas with valid offsetX and offsetY
        const handleGlobalMouseMove = (e: MouseEvent) => {
          const c = canvasRef.current;
          if (!c || e.target === c) return; // Native event is already handled directly by canvas
          const rect = c.getBoundingClientRect();
          if (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
          ) {
            const offsetX = e.clientX - rect.left;
            const offsetY = e.clientY - rect.top;

            const syntheticEvt = new MouseEvent('mousemove', {
              bubbles: false,
              cancelable: true,
              clientX: e.clientX,
              clientY: e.clientY,
            });
            Object.defineProperty(syntheticEvt, 'offsetX', { value: offsetX, configurable: true });
            Object.defineProperty(syntheticEvt, 'offsetY', { value: offsetY, configurable: true });
            c.dispatchEvent(syntheticEvt);
          }
        };

        const handleGlobalMouseDown = (e: MouseEvent) => {
          const c = canvasRef.current;
          if (!c || e.target === c) return; // Native event handled directly
          const rect = c.getBoundingClientRect();
          if (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
          ) {
            const offsetX = e.clientX - rect.left;
            const offsetY = e.clientY - rect.top;

            const syntheticEvt = new MouseEvent('mousedown', {
              bubbles: false,
              cancelable: true,
              clientX: e.clientX,
              clientY: e.clientY,
            });
            Object.defineProperty(syntheticEvt, 'offsetX', { value: offsetX, configurable: true });
            Object.defineProperty(syntheticEvt, 'offsetY', { value: offsetY, configurable: true });
            c.dispatchEvent(syntheticEvt);
          }
        };

        window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
        window.addEventListener('mousedown', handleGlobalMouseDown, { passive: true });

        return () => {
          window.removeEventListener('mousemove', handleGlobalMouseMove);
          window.removeEventListener('mousedown', handleGlobalMouseDown);
        };
      } catch (err) {
        console.error('Failed to initialize webgl-fluid:', err);
      }
    }

    initFluid();

    return () => {
      isMounted = false;
    };
  }, [
    splatRadius,
    curl,
    densityDissipation,
    velocityDissipation,
    pressure,
    bloom,
    sunrays,
    shading,
    colorful,
    auto,
    interval,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto touch-none select-none ${className}`}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  );
});

FluidSimulation.displayName = 'FluidSimulation';

export default FluidSimulation;
