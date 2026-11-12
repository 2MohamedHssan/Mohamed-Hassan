'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles,
  Terminal,
  Cpu,
  Layers,
  Code2,
  Database,
  Wrench,
  Activity,
  CheckCircle2,
  Zap,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ==================== REAL TECH SVG BRAND ICONS ====================
function ReactIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="#61DAFB">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function NextIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none">
      <mask id="next-mask-cyber" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#next-mask-cyber)">
        <circle cx="90" cy="90" r="90" fill="black" stroke="white" strokeWidth="6" />
        <path d="M149.508 157.438L69.1555 54H54V125.969H66.6025V69.8329L139.789 164.717C143.255 162.484 146.505 160.046 149.508 157.438Z" fill="white" />
        <rect x="115" y="54" width="12" height="72" fill="white" />
      </g>
    </svg>
  );
}

function TypeScriptIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#3178C6" d="M0 0h128v128H0z" />
      <path fill="#FFF" d="m66.6 86.8c-.8 6.4-3.5 11.2-8.1 14.4-4.6 3.2-10.7 4.8-18.3 4.8-7.9 0-14.3-1.6-19.2-4.9-4.9-3.2-7.8-8.1-8.7-14.6l12.8-2.1c.6 3.8 2.2 6.7 4.8 8.6 2.6 1.9 6.1 2.9 10.4 2.9 4 0 7.1-.8 9.2-2.5 2.1-1.7 3.2-4.2 3.2-7.5 0-2.4-.8-4.4-2.5-6-1.7-1.6-4.5-3.1-8.5-4.5l-6.8-2.4c-6.1-2.1-10.6-4.8-13.5-8.1-2.9-3.3-4.3-7.5-4.3-12.7 0-5.8 2.1-10.5 6.4-14.1 4.3-3.6 10-5.4 17.2-5.4 7.2 0 13 1.6 17.4 4.8 4.4 3.2 7 7.7 7.7 13.5l-12.4 1.8c-.5-3.2-1.9-5.6-4.1-7.2-2.2-1.6-5.2-2.4-8.9-2.4-3.6 0-6.4.7-8.4 2.2s-3 3.6-3 6.3c0 2.2.7 4 2.2 5.4 1.5 1.4 4.1 2.7 7.8 3.9l6.7 2.3c6.3 2.2 11 5 13.9 8.3 3.1 3.2 4.6 7.6 4.6 13.1zm53.4-37.1h-16.7v55.3h-13.6v-55.3h-16.7v-10.9h47z" />
    </svg>
  );
}

function JavaScriptIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 630 630">
      <rect width="630" height="630" fill="#f7df1e" />
      <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.4-38.1-25.4-17.3 0-28.3 10.6-28.3 25 0 17.8 11 24.5 36.4 35.5l14.8 6.34c50.3 21.6 79.5 43.6 79.5 93.1 0 53.3-41.9 82.5-98.1 82.5-54.99 0-90.5-26.2-105.7-58.4zm-209.98 5.5c8.9 15.2 16.5 28 35.1 28 18.2 0 29.6-7.2 29.6-35.1v-194.24h57.1v195.5c0 57.1-33.8 83.3-83.3 83.3-44.8 0-71.5-23.7-84.6-52.9z" />
    </svg>
  );
}

function HTML5Icon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#E44D26" d="M19.3 115.7L8.4 0h111.2l-10.9 115.7-44.7 12.3z" />
      <path fill="#F16529" d="M64 117.2V10.6h46.2l-9.1 96.5z" />
      <path fill="#EBEBEB" d="M64 48.9H44.6l-1.3-15h20.7V20.2H28.4l4.1 43.7H64zm0 37.8l-.2.1-15.3-4.1-1-11.2H33.8l1.9 21.9 28.3 7.8.2-.1z" />
      <path fill="#FFF" d="M63.9 48.9V33.9h20.7l-1.9 21.9H64v15H48.5l.7 7.7 14.8 4 14.8-4 1.7-18.7h13.7l-3.3 36.6-26.9 7.5v-13.8z" />
    </svg>
  );
}

function CSS3Icon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#1572B6" d="M19.3 115.7L8.4 0h111.2l-10.9 115.7-44.7 12.3z" />
      <path fill="#33A9DC" d="M64 117.2V10.6h46.2l-9.1 96.5z" />
      <path fill="#EBEBEB" d="M64 48.9H44.6l-1.3-15h20.7V20.2H28.4l4.1 43.7H64zm0 37.8l-.2.1-15.3-4.1-1-11.2H33.8l1.9 21.9 28.3 7.8.2-.1z" />
      <path fill="#FFF" d="M63.9 63.9h19.3l-1.8 20.4-17.5 4.7V103l28.3-7.8 4.2-46.3H63.9zm0-29.9h37.1l1.3-13.8H63.9z" />
    </svg>
  );
}

function ThreeJSIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="white">
      <path d="M64 8L16 35.7v56.6L64 120l48-27.7V35.7L64 8zm0 14.8l35.1 20.3L64 63.4 28.9 43.1 64 22.8zM24 49.3l36 20.8v41.6L24 90.9V49.3zm44 62.4V70.1l36-20.8v41.6l-36 20.8z" />
    </svg>
  );
}

function TailwindIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#38BDF8">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

function ViteIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="url(#vite-grad-lane)" d="M125.7 17.5L66.7 122.9c-1.1 2-4.1 2-5.3 0L2.3 17.5c-1.3-2.3.6-5.1 3.2-4.7l58 9.7c.3.1.7.1 1 0l58-9.7c2.6-.4 4.5 2.4 3.2 4.7z" />
      <path fill="#FFD62E" d="M64 25.4L44.8 62.9h15.4l-7.7 25.6 23.1-33.3H60.2L64 25.4z" />
      <defs>
        <linearGradient id="vite-grad-lane" x1="6.8" y1="10.8" x2="114.7" y2="124.9" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function BootstrapIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="#7952B3">
      <rect width="128" height="128" rx="28" fill="#7952B3" />
      <path fill="#FFF" d="M42 35h26.4c12.2 0 19.3 6.1 19.3 15.3 0 6.6-4.2 11.9-10.7 13.5v.4c7.9 1.4 13.2 7.3 13.2 14.8 0 10.6-8.2 17-21.8 17H42V35zm14.3 11.6v15.3h10.9c5.2 0 8.3-2.6 8.3-7.6 0-5.1-3.1-7.7-8.3-7.7H56.3zm0 26.6v16.7h12.4c5.7 0 9.2-2.9 9.2-8.3 0-5.4-3.5-8.4-9.2-8.4H56.3z" />
    </svg>
  );
}

function ReduxIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="#764ABC">
      <path d="M88.5 45.4C82.8 35.7 72.8 30 64 30c-4.4 0-8.6 1.4-12.3 4-2.8 2-5.1 4.7-6.9 7.8-7.9 14-4.8 32 7.1 42.4 8.7 7.7 21 9.9 31.7 5.7 2.7-1 5.2-2.4 7.4-4.1 6.8-5.4 10.9-13.6 11.2-22.3.4-9.3-3.9-18.4-11.7-24.1z" />
      <circle cx="64" cy="64" r="8" fill="#764ABC" />
    </svg>
  );
}

function NodeIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="#5FA04E">
      <path d="M64 8.7L12.4 38.5v59.6L64 128l51.6-29.8V38.5L64 8.7zm38.8 82.3L64 113.3 25.2 91V43.8L64 21.4l38.8 22.4v47.2z" />
      <path d="M64 36.8L38.4 51.6v29.6L64 96l25.6-14.8V51.6L64 36.8z" />
    </svg>
  );
}

function SupabaseIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 109 113" fill="none">
      <path d="M65.4801 109.804C62.7001 113.279 57.0601 111.459 56.8801 107.039L54.7901 55.4389H99.4101C107.57 55.4389 112.16 64.8189 107.03 71.2189L65.4801 109.804Z" fill="#3ECF8E" />
      <path d="M43.5199 3.19598C46.2999 -0.279024 51.9399 1.54098 52.1199 5.96098L54.2099 57.561H9.58988C1.42988 57.561 -3.16012 48.181 1.96988 41.781L43.5199 3.19598Z" fill="#3ECF8E" />
    </svg>
  );
}

function StrapiIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="#4945FF">
      <path d="M22 22h42v42H22V22zm0 42h42v42H22V64zm42 0h42v42H64V64zm0-42l42 42H64V22z" />
    </svg>
  );
}

function MongoIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="#47A248">
      <path d="M64 2c-3.2 0-27.4 28.5-27.4 67 0 29.8 17.4 51.5 25.4 57 1.2.8 2.8.8 4 0 8-5.5 25.4-27.2 25.4-57 0-38.5-24.2-67-27.4-67z" />
    </svg>
  );
}

function GraphQLIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="#E10098">
      <path d="M50 12l32.9 19v38L50 88 17.1 69V31L50 12zm0 6.9L22.1 34.5v31L50 81.1l27.9-15.6v-31L50 18.9z" />
      <circle cx="50" cy="12" r="7" />
      <circle cx="82.9" cy="31" r="7" />
      <circle cx="82.9" cy="69" r="7" />
      <circle cx="50" cy="88" r="7" />
      <circle cx="17.1" cy="69" r="7" />
      <circle cx="17.1" cy="31" r="7" />
    </svg>
  );
}

function MySQLIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="#4479A1">
      <path d="M64 12c-28.7 0-52 23.3-52 52s23.3 52 52 52 52-23.3 52-52-23.3-52-52-52zm-6 26c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm24 50c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-36 0H34v-8h12v8zm36-24H34v-8h48v8z" />
    </svg>
  );
}

function PHPIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <ellipse cx="64" cy="64" rx="58" ry="36" fill="#777BB4" />
      <text x="64" y="76" fill="white" fontSize="34" fontWeight="bold" fontFamily="monospace" textAnchor="middle">PHP</text>
    </svg>
  );
}

function GSAPIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="#0AE448">
      <path d="M50 5L15 25v50l35 20 35-20V25L50 5zm20 60l-20 12-20-12V35l20-12 20 12v30z" />
      <circle cx="50" cy="50" r="10" fill="#0AE448" />
    </svg>
  );
}

function GitIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="#F05032">
      <path d="M125.7 57.6L70.4 2.3c-3-3-8-3-11 0L48.1 13.6l14.7 14.7c3.2-1.1 7-.3 9.5 2.2 2.5 2.5 3.3 6.3 2.2 9.5l14.2 14.2c3.2-1.1 7-.3 9.5 2.2 3.6 3.6 3.6 9.4 0 13s-9.4 3.6-13 0c-2.7-2.7-3.4-6.7-2-9.9L60 45.3v34.4c.8.4 1.6 1 2.3 1.7 3.6 3.6 3.6 9.4 0 13s-9.4 3.6-13 0c-3.6-3.6-3.6-9.4 0-13 .9-.9 2-1.6 3.2-2V44.7c-1.2-.4-2.3-1.1-3.2-2-2.7-2.7-3.4-6.8-2-10L32.8 17.9 2.3 48.4c-3 3-3 8 0 11l55.3 55.3c3 3 8 3 11 0l57.1-57.1c3-3 3-8 0-11z" />
    </svg>
  );
}

function GitHubIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="white">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function JestIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="#C21325">
      <path d="M64 4C30.9 4 4 30.9 4 64s26.9 60 60 60 60-26.9 60-60S97.1 4 64 4zm-4 96l-28-28 8.5-8.5 19.5 19.5 39.5-39.5 8.5 8.5L60 100z" />
    </svg>
  );
}

function ZodIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <rect width="128" height="128" rx="28" fill="#3068B7" />
      <path fill="#FFF" d="M32 38h64v14L54 84h42v14H32V84l42-32H32V38z" />
    </svg>
  );
}

// ==================== SKILL DATA MODEL ====================
interface SkillData {
  id: string;
  name: string;
  tagline: string;
  projectContext: string;
  level: string;
  color: string;
  glow: string;
  icon: React.ComponentType<{ className?: string }>;
}

const FRONTEND_STACK: SkillData[] = [
  {
    id: 'react',
    name: 'React 19',
    tagline: 'Concurrent rendering, custom hooks & high-order state machines',
    projectContext: 'KV Studio & Enterprise Dashboards',
    level: 'Core Mastery',
    color: '#61DAFB',
    glow: 'rgba(97, 218, 251, 0.5)',
    icon: ReactIcon,
  },
  {
    id: 'nextjs',
    name: 'Next.js 16',
    tagline: 'App Router, Server Components (RSC), Turbopack & Edge SSR',
    projectContext: 'Production Web Architectures',
    level: 'Production Core',
    color: '#ffffff',
    glow: 'rgba(255, 255, 255, 0.45)',
    icon: NextIcon,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    tagline: 'Strict type contracts, generics, AST guards & zero-any discipline',
    projectContext: 'Full Enterprise Codebase',
    level: 'Strict 100%',
    color: '#3178C6',
    glow: 'rgba(49, 120, 198, 0.5)',
    icon: TypeScriptIcon,
  },
  {
    id: 'javascript',
    name: 'JavaScript (ESNext)',
    tagline: 'Event loop mechanics, asynchronous streams & Web APIs',
    projectContext: 'Foundation Engine',
    level: 'Deep Core',
    color: '#F7DF1E',
    glow: 'rgba(247, 223, 30, 0.5)',
    icon: JavaScriptIcon,
  },
  {
    id: 'threejs',
    name: 'Three.js & WebGL',
    tagline: '3D spatial scenes, virtual tours, custom geometry & fluid shaders',
    projectContext: 'KV Studio Real Estate Immersion',
    level: '3D Spatial Immersion',
    color: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.5)',
    icon: ThreeJSIcon,
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS v4',
    tagline: 'Zero-runtime utility CSS, custom tokens & responsive designs',
    projectContext: 'High-Velocity Styling Systems',
    level: 'Architectural Style',
    color: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.5)',
    icon: TailwindIcon,
  },
  {
    id: 'react-query',
    name: 'React Query',
    tagline: 'Server-state sync, optimistic mutations & smart cache invalidation',
    projectContext: 'Dynamic Real-Time Dashboards',
    level: 'Server State Sync',
    color: '#FF4154',
    glow: 'rgba(255, 65, 84, 0.5)',
    icon: ReactIcon,
  },
  {
    id: 'redux',
    name: 'Redux Toolkit',
    tagline: 'Predictable normalized state slices & persistent store sync',
    projectContext: 'Complex Multi-Role Systems',
    level: 'Global State',
    color: '#764ABC',
    glow: 'rgba(118, 74, 188, 0.5)',
    icon: ReduxIcon,
  },
  {
    id: 'html5',
    name: 'HTML5 Semantic',
    tagline: 'WAI-ARIA accessibility, structural microdata & native canvas APIs',
    projectContext: 'Accessible Standards & SEO',
    level: 'Native Standard',
    color: '#E44D26',
    glow: 'rgba(228, 77, 38, 0.5)',
    icon: HTML5Icon,
  },
  {
    id: 'css3',
    name: 'CSS3 Keyframes',
    tagline: 'Hardware-accelerated 3D transforms, container queries & subgrid',
    projectContext: 'Ultra-Fluid Layouts',
    level: 'Hardware Accel',
    color: '#1572B6',
    glow: 'rgba(21, 114, 182, 0.5)',
    icon: CSS3Icon,
  },
  {
    id: 'vite',
    name: 'Vite',
    tagline: 'Instant HMR development server, Rollup tree-shaking & code splitting',
    projectContext: 'Lightning-Fast Dev Pipelines',
    level: 'Next-Gen Tooling',
    color: '#BD34FE',
    glow: 'rgba(189, 52, 254, 0.5)',
    icon: ViteIcon,
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    tagline: 'Responsive grid systems & rapid enterprise dashboard prototypes',
    projectContext: 'Enterprise Admin Backends',
    level: 'Rapid Prototyping',
    color: '#7952B3',
    glow: 'rgba(121, 82, 179, 0.5)',
    icon: BootstrapIcon,
  },
];

const BACKEND_STACK: SkillData[] = [
  {
    id: 'nodejs',
    name: 'Node.js',
    tagline: 'High-concurrency microservices, event-driven pipelines & streams',
    projectContext: 'Uni & Do Real-Time Microservice',
    level: 'Runtime Engine',
    color: '#5FA04E',
    glow: 'rgba(95, 160, 78, 0.5)',
    icon: NodeIcon,
  },
  {
    id: 'express',
    name: 'Express.js',
    tagline: 'Decoupled REST microservices, custom middleware & RAM optimization',
    projectContext: 'Reduced Strapi RAM & WebSocket Fix',
    level: 'High-Performance API',
    color: '#ffffff',
    glow: 'rgba(255, 255, 255, 0.4)',
    icon: NodeIcon,
  },
  {
    id: 'supabase',
    name: 'Supabase',
    tagline: 'Serverless PostgreSQL, Row-Level Security & real-time DB listeners',
    projectContext: 'Real-Time Edge Applications',
    level: 'Serverless Cloud',
    color: '#3ECF8E',
    glow: 'rgba(62, 207, 142, 0.5)',
    icon: SupabaseIcon,
  },
  {
    id: 'strapi',
    name: 'Strapi CMS',
    tagline: 'Role-based access controls, dynamic content models & lifecycle hooks',
    projectContext: 'Uni & Do Company Operations',
    level: 'Enterprise CMS',
    color: '#4945FF',
    glow: 'rgba(73, 69, 255, 0.5)',
    icon: StrapiIcon,
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    tagline: 'Document aggregation pipelines, dynamic schemas & indexed queries',
    projectContext: 'Scalable Product Catalogs',
    level: 'NoSQL Architecture',
    color: '#47A248',
    glow: 'rgba(71, 162, 72, 0.5)',
    icon: MongoIcon,
  },
  {
    id: 'mysql',
    name: 'MySQL',
    tagline: 'Relational schema modeling, multi-table joins & ACID transactions',
    projectContext: 'Structured Financial & Orders DB',
    level: 'Relational Integrity',
    color: '#4479A1',
    glow: 'rgba(68, 121, 161, 0.5)',
    icon: MySQLIcon,
  },
  {
    id: 'php',
    name: 'PHP',
    tagline: 'Server-side processing, CMS endpoints & backend script execution',
    projectContext: 'Content Platforms & APIs',
    level: 'Server-Side Web',
    color: '#777BB4',
    glow: 'rgba(119, 123, 180, 0.5)',
    icon: PHPIcon,
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    tagline: 'Strongly-typed schemas, exact resolvers & zero over-fetching',
    projectContext: 'Composable Front-End Queries',
    level: 'Typed Data Graph',
    color: '#E10098',
    glow: 'rgba(225, 0, 152, 0.5)',
    icon: GraphQLIcon,
  },
];

const TOOLS_STACK: SkillData[] = [
  {
    id: 'gsap',
    name: 'GSAP Animation Platform',
    tagline: 'ScrollTrigger choreographies, magnetic mouse physics & 3D timelines',
    projectContext: 'Awwwards-Level Cinematic Motion',
    level: 'Cinematic Motion',
    color: '#0AE448',
    glow: 'rgba(10, 228, 72, 0.5)',
    icon: GSAPIcon,
  },
  {
    id: 'git',
    name: 'Git',
    tagline: 'Trunk-based branching, rebase strategies & atomic commit history',
    projectContext: 'Team Engineering Workflows',
    level: 'Version Control',
    color: '#F05032',
    glow: 'rgba(240, 80, 50, 0.5)',
    icon: GitIcon,
  },
  {
    id: 'github',
    name: 'GitHub CI/CD',
    tagline: 'Automated GitHub Actions, PR reviews & release distribution',
    projectContext: 'Automated Deployments',
    level: 'DevOps & Pipeline',
    color: '#ffffff',
    glow: 'rgba(255, 255, 255, 0.45)',
    icon: GitHubIcon,
  },
  {
    id: 'jest',
    name: 'Jest',
    tagline: 'Unit test suites, mock services & component snapshot tests',
    projectContext: 'Zero-Regression Testing',
    level: 'Unit Test Suite',
    color: '#C21325',
    glow: 'rgba(194, 19, 37, 0.5)',
    icon: JestIcon,
  },
  {
    id: 'playwright',
    name: 'Playwright',
    tagline: 'Cross-browser automated E2E tests & visual regression verification',
    projectContext: 'End-to-End QA Pipelines',
    level: 'E2E Automation',
    color: '#2EAD33',
    glow: 'rgba(46, 173, 51, 0.5)',
    icon: Terminal,
  },
  {
    id: 'zod',
    name: 'Zod & Clean Architecture',
    tagline: 'Runtime schema parsing, API response guards & SOLID design boundaries',
    projectContext: 'Enterprise Architectural Safety',
    level: 'Type Safety & SOLID',
    color: '#3068B7',
    glow: 'rgba(48, 104, 183, 0.5)',
    icon: ZodIcon,
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const hudRef = useRef<HTMLDivElement | null>(null);

  // Active inspected skill (defaults to React 19)
  const [activeSkill, setActiveSkill] = useState<SkillData>(FRONTEND_STACK[0]);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  // Entrance animations via GSAP
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        '.arsenal-reveal',
        { y: 50, opacity: 0, filter: 'blur(8px)' },
        {
          y: 0,
          opacity: 1,
          filter: 'blur(0px)',
          stagger: 0.1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
          },
        }
      );

      // Sectors staggered entrance
      gsap.fromTo(
        '.sector-card',
        { y: 60, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const ActiveIcon = activeSkill.icon;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#050508] text-white py-28 md:py-36 px-6 md:px-14 lg:px-24 overflow-hidden select-none border-t border-white/5"
    >
      {/* Dynamic Cyber Glow Aura from Active Skill */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[200px] pointer-events-none transition-all duration-700 opacity-25"
        style={{ background: activeSkill.color }}
      />

      {/* Cyber Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 pb-8 border-b border-white/5">
          <div>
            <div className="arsenal-reveal inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 font-mono text-xs tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>02 // ARCHITECTURAL ARSENAL</span>
            </div>
            <h2 className="arsenal-reveal text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-white">
              TECHNICAL{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.35)]">
                MASTERY
              </span>
            </h2>
          </div>

          <div className="arsenal-reveal flex items-center gap-4">
            <div className="px-4 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                STACK SIZE
              </div>
              <div className="text-xl font-black font-mono text-cyan-300">
                26 MODULES
              </div>
            </div>

            <div className="px-4 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                EXPERIENCE FOCUS
              </div>
              <div className="text-xl font-black font-mono text-emerald-400">
                100% PRODUCTION
              </div>
            </div>
          </div>
        </div>

        {/* ================= HOLOGRAPHIC TELEMETRY HUD MONITOR ================= */}
        <div
          ref={hudRef}
          className="arsenal-reveal relative w-full rounded-3xl p-6 md:p-8 bg-gradient-to-r from-[#0a0c14]/95 via-[#080910]/95 to-[#0b0c16]/95 border transition-all duration-500 backdrop-blur-2xl mb-16 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
          style={{
            borderColor: isHovering ? activeSkill.color : 'rgba(255, 255, 255, 0.12)',
            boxShadow: isHovering
              ? `0 0 50px ${activeSkill.glow}, 0 20px 60px rgba(0,0,0,0.8)`
              : '0 20px 60px rgba(0,0,0,0.8)',
          }}
        >
          {/* Subtle Cyber Corner Brackets */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan-400/60 pointer-events-none" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-cyan-400/60 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-cyan-400/60 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cyan-400/60 pointer-events-none" />

          {/* Holographic Laser Grid Scanner Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.03] to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left: Active Module Identifier & Large Logo */}
            <div className="flex items-center gap-5">
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center bg-white/[0.05] border border-white/15 shadow-2xl transition-all duration-500 shrink-0"
                style={{
                  boxShadow: `0 0 30px ${activeSkill.glow}`,
                  borderColor: activeSkill.color,
                }}
              >
                <ActiveIcon className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 font-mono text-[10px] tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    LIVE TELEMETRY // {activeSkill.level}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white flex items-center gap-3">
                  <span>{activeSkill.name}</span>
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 font-light mt-1 max-w-xl leading-relaxed">
                  {activeSkill.tagline}
                </p>
              </div>
            </div>

            {/* Right: Real-World Engineering Context Box */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10 w-full lg:w-auto">
              <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>PRODUCTION CONTEXT:</span>
              </div>
              <div
                className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 font-mono text-xs md:text-sm font-semibold tracking-wide text-white transition-colors duration-300"
                style={{ borderColor: activeSkill.color }}
              >
                {activeSkill.projectContext}
              </div>
            </div>
          </div>
        </div>

        {/* ================= THREE DISTINCT ARCHITECTURAL SECTORS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ================= SECTOR 01: FRONTEND & 3D IMMERSION ================= */}
          <div className="sector-card relative rounded-3xl p-7 bg-[#090a12]/80 border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-500 shadow-xl group">
            {/* Top Sector Indicator */}
            <div>
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-400/25 text-cyan-400">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 tracking-[0.2em] uppercase">
                      SECTOR 01
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      Frontend & 3D Spatial
                    </h4>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 font-mono text-[11px] font-bold">
                  {FRONTEND_STACK.length} Techs
                </span>
              </div>

              <p className="text-xs text-zinc-400 font-light mb-6 leading-relaxed">
                Client architectures, 3D WebGL scenes, reactive state machines, and pixel-perfect design systems.
              </p>

              {/* High-Tech Tactile Magnetic Capsules */}
              <div className="flex flex-wrap gap-2.5">
                {FRONTEND_STACK.map((item) => {
                  const Icon = item.icon;
                  const isSelected = activeSkill.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onMouseEnter={() => {
                        setActiveSkill(item);
                        setIsHovering(true);
                      }}
                      onMouseLeave={() => setIsHovering(false)}
                      onClick={() => setActiveSkill(item)}
                      className={`group/btn relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl border text-xs font-mono transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'bg-white/10 text-white font-bold scale-105 shadow-lg'
                          : 'bg-white/[0.03] text-zinc-300 border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.08] hover:text-white hover:scale-105'
                      }`}
                      style={{
                        borderColor: isSelected ? item.color : undefined,
                        boxShadow: isSelected ? `0 0 20px ${item.glow}` : undefined,
                      }}
                    >
                      <Icon className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover/btn:scale-115" />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sector Bottom Status */}
            <div className="pt-6 mt-8 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Next.js 16 • React 19 Core
              </span>
              <span className="text-cyan-400/80">SECTOR_01 // OK</span>
            </div>
          </div>

          {/* ================= SECTOR 02: BACKEND & DISTRIBUTED SYSTEMS ================= */}
          <div className="sector-card relative rounded-3xl p-7 bg-[#090a12]/80 border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-500 shadow-xl group">
            {/* Top Sector Indicator */}
            <div>
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-400/25 text-emerald-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 tracking-[0.2em] uppercase">
                      SECTOR 02
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      Backend & APIs
                    </h4>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 font-mono text-[11px] font-bold">
                  {BACKEND_STACK.length} Techs
                </span>
              </div>

              <p className="text-xs text-zinc-400 font-light mb-6 leading-relaxed">
                Decoupled microservices, real-time WebSocket pipelines, CMS platforms, and relational/document databases.
              </p>

              {/* High-Tech Tactile Magnetic Capsules */}
              <div className="flex flex-wrap gap-2.5">
                {BACKEND_STACK.map((item) => {
                  const Icon = item.icon;
                  const isSelected = activeSkill.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onMouseEnter={() => {
                        setActiveSkill(item);
                        setIsHovering(true);
                      }}
                      onMouseLeave={() => setIsHovering(false)}
                      onClick={() => setActiveSkill(item)}
                      className={`group/btn relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl border text-xs font-mono transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'bg-white/10 text-white font-bold scale-105 shadow-lg'
                          : 'bg-white/[0.03] text-zinc-300 border-white/10 hover:border-emerald-400/50 hover:bg-white/[0.08] hover:text-white hover:scale-105'
                      }`}
                      style={{
                        borderColor: isSelected ? item.color : undefined,
                        boxShadow: isSelected ? `0 0 20px ${item.glow}` : undefined,
                      }}
                    >
                      <Icon className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover/btn:scale-115" />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sector Bottom Status */}
            <div className="pt-6 mt-8 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Decoupled Microservices
              </span>
              <span className="text-emerald-400/80">SECTOR_02 // OK</span>
            </div>
          </div>

          {/* ================= SECTOR 03: ARCHITECTURE, MOTION & QA ================= */}
          <div className="sector-card relative rounded-3xl p-7 bg-[#090a12]/80 border border-white/10 backdrop-blur-xl flex flex-col justify-between hover:border-purple-500/40 transition-all duration-500 shadow-xl group">
            {/* Top Sector Indicator */}
            <div>
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-400/25 text-purple-400">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 tracking-[0.2em] uppercase">
                      SECTOR 03
                    </span>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      Motion, QA & Tools
                    </h4>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-purple-400/10 border border-purple-400/30 text-purple-300 font-mono text-[11px] font-bold">
                  {TOOLS_STACK.length} Techs
                </span>
              </div>

              <p className="text-xs text-zinc-400 font-light mb-6 leading-relaxed">
                Awwwards-level GSAP animation, cross-browser Playwright E2E automation, CI/CD, and strict contract typing.
              </p>

              {/* High-Tech Tactile Magnetic Capsules */}
              <div className="flex flex-wrap gap-2.5">
                {TOOLS_STACK.map((item) => {
                  const Icon = item.icon;
                  const isSelected = activeSkill.id === item.id;
                  return (
                    <button
                      key={item.id}
                      onMouseEnter={() => {
                        setActiveSkill(item);
                        setIsHovering(true);
                      }}
                      onMouseLeave={() => setIsHovering(false)}
                      onClick={() => setActiveSkill(item)}
                      className={`group/btn relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl border text-xs font-mono transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'bg-white/10 text-white font-bold scale-105 shadow-lg'
                          : 'bg-white/[0.03] text-zinc-300 border-white/10 hover:border-purple-400/50 hover:bg-white/[0.08] hover:text-white hover:scale-105'
                      }`}
                      style={{
                        borderColor: isSelected ? item.color : undefined,
                        boxShadow: isSelected ? `0 0 20px ${item.glow}` : undefined,
                      }}
                    >
                      <Icon className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover/btn:scale-115" />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sector Bottom Status */}
            <div className="pt-6 mt-8 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                GSAP • Playwright • Zod
              </span>
              <span className="text-purple-400/80">SECTOR_03 // OK</span>
            </div>
          </div>
        </div>

        {/* ================= INTERACTION HINT DOCK ================= */}
        <div className="arsenal-reveal mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-400 gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>INTERACTIVE ARSENAL: Hover over any capsule to scan live telemetry & production context</span>
          </div>

          <div className="flex items-center gap-4 text-zinc-500">
            <span>// ARCHITECTURE: FULL-STACK REACT & NEXT.JS</span>
            <span>// STATUS: ACTIVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
