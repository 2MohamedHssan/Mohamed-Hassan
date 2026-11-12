'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ==================== REAL TECH SVG BRAND ICONS ====================
function ReactIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="#F59E0B">
      <circle cx="0" cy="0" r="2.05" fill="#F59E0B" />
      <g stroke="#F59E0B" strokeWidth="1" fill="none">
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
      <mask id="next-mask-gold" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: 'alpha' }}>
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#next-mask-gold)">
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
      <path fill="#F59E0B" d="M0 0h128v128H0z" />
      <path fill="#000" d="m66.6 86.8c-.8 6.4-3.5 11.2-8.1 14.4-4.6 3.2-10.7 4.8-18.3 4.8-7.9 0-14.3-1.6-19.2-4.9-4.9-3.2-7.8-8.1-8.7-14.6l12.8-2.1c.6 3.8 2.2 6.7 4.8 8.6 2.6 1.9 6.1 2.9 10.4 2.9 4 0 7.1-.8 9.2-2.5 2.1-1.7 3.2-4.2 3.2-7.5 0-2.4-.8-4.4-2.5-6-1.7-1.6-4.5-3.1-8.5-4.5l-6.8-2.4c-6.1-2.1-10.6-4.8-13.5-8.1-2.9-3.3-4.3-7.5-4.3-12.7 0-5.8 2.1-10.5 6.4-14.1 4.3-3.6 10-5.4 17.2-5.4 7.2 0 13 1.6 17.4 4.8 4.4 3.2 7 7.7 7.7 13.5l-12.4 1.8c-.5-3.2-1.9-5.6-4.1-7.2-2.2-1.6-5.2-2.4-8.9-2.4-3.6 0-6.4.7-8.4 2.2s-3 3.6-3 6.3c0 2.2.7 4 2.2 5.4 1.5 1.4 4.1 2.7 7.8 3.9l6.7 2.3c6.3 2.2 11 5 13.9 8.3 3.1 3.2 4.6 7.6 4.6 13.1zm53.4-37.1h-16.7v55.3h-13.6v-55.3h-16.7v-10.9h47z" />
    </svg>
  );
}

function JavaScriptIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 630 630">
      <rect width="630" height="630" fill="#F59E0B" />
      <path fill="#000" d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.4-38.1-25.4-17.3 0-28.3 10.6-28.3 25 0 17.8 11 24.5 36.4 35.5l14.8 6.34c50.3 21.6 79.5 43.6 79.5 93.1 0 53.3-41.9 82.5-98.1 82.5-54.99 0-90.5-26.2-105.7-58.4zm-209.98 5.5c8.9 15.2 16.5 28 35.1 28 18.2 0 29.6-7.2 29.6-35.1v-194.24h57.1v195.5c0 57.1-33.8 83.3-83.3 83.3-44.8 0-71.5-23.7-84.6-52.9z" />
    </svg>
  );
}

function HTML5Icon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#D97706" d="M19.3 115.7L8.4 0h111.2l-10.9 115.7-44.7 12.3z" />
      <path fill="#F59E0B" d="M64 117.2V10.6h46.2l-9.1 96.5z" />
      <path fill="#050505" d="M64 48.9H44.6l-1.3-15h20.7V20.2H28.4l4.1 43.7H64zm0 37.8l-.2.1-15.3-4.1-1-11.2H33.8l1.9 21.9 28.3 7.8.2-.1z" />
      <path fill="#FFF" d="M63.9 48.9V33.9h20.7l-1.9 21.9H64v15H48.5l.7 7.7 14.8 4 14.8-4 1.7-18.7h13.7l-3.3 36.6-26.9 7.5v-13.8z" />
    </svg>
  );
}

function CSS3Icon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#B45309" d="M19.3 115.7L8.4 0h111.2l-10.9 115.7-44.7 12.3z" />
      <path fill="#F59E0B" d="M64 117.2V10.6h46.2l-9.1 96.5z" />
      <path fill="#050505" d="M64 48.9H44.6l-1.3-15h20.7V20.2H28.4l4.1 43.7H64zm0 37.8l-.2.1-15.3-4.1-1-11.2H33.8l1.9 21.9 28.3 7.8.2-.1z" />
      <path fill="#FFF" d="M63.9 63.9h19.3l-1.8 20.4-17.5 4.7V103l28.3-7.8 4.2-46.3H63.9zm0-29.9h37.1l1.3-13.8H63.9z" />
    </svg>
  );
}

function ThreeJSIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="#F59E0B">
      <path d="M64 8L16 35.7v56.6L64 120l48-27.7V35.7L64 8zm0 14.8l35.1 20.3L64 63.4 28.9 43.1 64 22.8zM24 49.3l36 20.8v41.6L24 90.9V49.3zm44 62.4V70.1l36-20.8v41.6l-36 20.8z" />
    </svg>
  );
}

function TailwindIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#F59E0B">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
    </svg>
  );
}

function ViteIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <path fill="#F59E0B" d="M125.7 17.5L66.7 122.9c-1.1 2-4.1 2-5.3 0L2.3 17.5c-1.3-2.3.6-5.1 3.2-4.7l58 9.7c.3.1.7.1 1 0l58-9.7c2.6-.4 4.5 2.4 3.2 4.7z" />
      <path fill="#FFFFFF" d="M64 25.4L44.8 62.9h15.4l-7.7 25.6 23.1-33.3H60.2L64 25.4z" />
    </svg>
  );
}

function BootstrapIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="#F59E0B">
      <rect width="128" height="128" rx="28" fill="#18181b" stroke="#F59E0B" strokeWidth="6" />
      <path fill="#F59E0B" d="M42 35h26.4c12.2 0 19.3 6.1 19.3 15.3 0 6.6-4.2 11.9-10.7 13.5v.4c7.9 1.4 13.2 7.3 13.2 14.8 0 10.6-8.2 17-21.8 17H42V35zm14.3 11.6v15.3h10.9c5.2 0 8.3-2.6 8.3-7.6 0-5.1-3.1-7.7-8.3-7.7H56.3zm0 26.6v16.7h12.4c5.7 0 9.2-2.9 9.2-8.3 0-5.4-3.5-8.4-9.2-8.4H56.3z" />
    </svg>
  );
}

function ReduxIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="#F59E0B">
      <path d="M88.5 45.4C82.8 35.7 72.8 30 64 30c-4.4 0-8.6 1.4-12.3 4-2.8 2-5.1 4.7-6.9 7.8-7.9 14-4.8 32 7.1 42.4 8.7 7.7 21 9.9 31.7 5.7 2.7-1 5.2-2.4 7.4-4.1 6.8-5.4 10.9-13.6 11.2-22.3.4-9.3-3.9-18.4-11.7-24.1z" />
      <circle cx="64" cy="64" r="8" fill="#FFF" />
    </svg>
  );
}

function NodeIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="#F59E0B">
      <path d="M64 8.7L12.4 38.5v59.6L64 128l51.6-29.8V38.5L64 8.7zm38.8 82.3L64 113.3 25.2 91V43.8L64 21.4l38.8 22.4v47.2z" />
      <path d="M64 36.8L38.4 51.6v29.6L64 96l25.6-14.8V51.6L64 36.8z" />
    </svg>
  );
}

function SupabaseIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 109 113" fill="none">
      <path d="M65.4801 109.804C62.7001 113.279 57.0601 111.459 56.8801 107.039L54.7901 55.4389H99.4101C107.57 55.4389 112.16 64.8189 107.03 71.2189L65.4801 109.804Z" fill="#F59E0B" />
      <path d="M43.5199 3.19598C46.2999 -0.279024 51.9399 1.54098 52.1199 5.96098L54.2099 57.561H9.58988C1.42988 57.561 -3.16012 48.181 1.96988 41.781L43.5199 3.19598Z" fill="#FDE68A" />
    </svg>
  );
}

function StrapiIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="#F59E0B">
      <path d="M22 22h42v42H22V22zm0 42h42v42H22V64zm42 0h42v42H64V64zm0-42l42 42H64V22z" />
    </svg>
  );
}

function MongoIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="#F59E0B">
      <path d="M64 2c-3.2 0-27.4 28.5-27.4 67 0 29.8 17.4 51.5 25.4 57 1.2.8 2.8.8 4 0 8-5.5 25.4-27.2 25.4-57 0-38.5-24.2-67-27.4-67z" />
    </svg>
  );
}

function GraphQLIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="#F59E0B">
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
    <svg className={className} viewBox="0 0 128 128" fill="#F59E0B">
      <path d="M64 12c-28.7 0-52 23.3-52 52s23.3 52 52 52 52-23.3 52-52-23.3-52-52-52zm-6 26c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm24 50c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm-36 0H34v-8h12v8zm36-24H34v-8h48v8z" />
    </svg>
  );
}

function PHPIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <ellipse cx="64" cy="64" rx="58" ry="36" fill="#18181b" stroke="#F59E0B" strokeWidth="4" />
      <text x="64" y="76" fill="#F59E0B" fontSize="32" fontWeight="bold" fontFamily="monospace" textAnchor="middle">PHP</text>
    </svg>
  );
}

function GSAPIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="#F59E0B">
      <path d="M50 5L15 25v50l35 20 35-20V25L50 5zm20 60l-20 12-20-12V35l20-12 20 12v30z" />
      <circle cx="50" cy="50" r="10" fill="#FFF" />
    </svg>
  );
}

function GitIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="#F59E0B">
      <path d="M125.7 57.6L70.4 2.3c-3-3-8-3-11 0L48.1 13.6l14.7 14.7c3.2-1.1 7-.3 9.5 2.2 2.5 2.5 3.3 6.3 2.2 9.5l14.2 14.2c3.2-1.1 7-.3 9.5 2.2 3.6 3.6 3.6 9.4 0 13s-9.4 3.6-13 0c-2.7-2.7-3.4-6.7-2-9.9L60 45.3v34.4c.8.4 1.6 1 2.3 1.7 3.6 3.6 3.6 9.4 0 13s-9.4 3.6-13 0c-3.6-3.6-3.6-9.4 0-13 .9-.9 2-1.6 3.2-2V44.7c-1.2-.4-2.3-1.1-3.2-2-2.7-2.7-3.4-6.8-2-10L32.8 17.9 2.3 48.4c-3 3-3 8 0 11l55.3 55.3c3 3 8 3 11 0l57.1-57.1c3-3 3-8 0-11z" />
    </svg>
  );
}

function GitHubIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="#FFFFFF">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function JestIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="#F59E0B">
      <path d="M64 4C30.9 4 4 30.9 4 64s26.9 60 60 60 60-26.9 60-60S97.1 4 64 4zm-4 96l-28-28 8.5-8.5 19.5 19.5 39.5-39.5 8.5 8.5L60 100z" />
    </svg>
  );
}

function ZodIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128">
      <rect width="128" height="128" rx="28" fill="#18181b" stroke="#F59E0B" strokeWidth="6" />
      <path fill="#F59E0B" d="M32 38h64v14L54 84h42v14H32V84l42-32H32V38z" />
    </svg>
  );
}

// ==================== CLEAN DATA ARCHITECTURE ====================
interface SkillItem {
  name: string;
  role: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SkillCategory {
  number: string;
  title: string;
  skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    number: '01',
    title: 'Front-End Architecture',
    skills: [
      { name: 'Next.js 16', role: 'App Router & RSC', icon: NextIcon },
      { name: 'React 19', role: 'Concurrent & Hooks', icon: ReactIcon },
      { name: 'TypeScript', role: 'Strict Type Safety', icon: TypeScriptIcon },
      { name: 'JavaScript', role: 'ESNext & Async', icon: JavaScriptIcon },
      { name: 'Tailwind CSS', role: 'Modern Utility Styling', icon: TailwindIcon },
      { name: 'HTML5', role: 'Semantic Web & DOM', icon: HTML5Icon },
      { name: 'CSS3', role: 'Keyframes & Layouts', icon: CSS3Icon },
      { name: 'Vite', role: 'Fast Tooling & HMR', icon: ViteIcon },
      { name: 'Bootstrap', role: 'Responsive Grid', icon: BootstrapIcon },
    ],
  },
  {
    number: '02',
    title: '3D Spatial & Motion',
    skills: [
      { name: 'Three.js', role: '3D Scenes & Shaders', icon: ThreeJSIcon },
      { name: 'GSAP 3', role: 'ScrollTrigger & Motion', icon: GSAPIcon },
    ],
  },
  {
    number: '03',
    title: 'Backend & Cloud Services',
    skills: [
      { name: 'Node.js', role: 'Runtime Microservices', icon: NodeIcon },
      { name: 'Express.js', role: 'RESTful Endpoints', icon: NodeIcon },
      { name: 'Supabase', role: 'PostgreSQL & Real-Time', icon: SupabaseIcon },
      { name: 'Strapi CMS', role: 'Headless Content API', icon: StrapiIcon },
      { name: 'MongoDB', role: 'NoSQL Document Store', icon: MongoIcon },
      { name: 'MySQL', role: 'Relational Database', icon: MySQLIcon },
      { name: 'PHP', role: 'Server Scripting', icon: PHPIcon },
      { name: 'GraphQL', role: 'Typed API Queries', icon: GraphQLIcon },
    ],
  },
  {
    number: '04',
    title: 'State, QA & Dev Tools',
    skills: [
      { name: 'React Query', role: 'Server State Caching', icon: ReactIcon },
      { name: 'Redux Toolkit', role: 'Global Store Sync', icon: ReduxIcon },
      { name: 'Zod', role: 'Runtime Schema Validation', icon: ZodIcon },
      { name: 'Playwright', role: 'Automated E2E Testing', icon: Terminal },
      { name: 'Jest', role: 'Unit & Snapshot Tests', icon: JestIcon },
      { name: 'Git', role: 'Version Control', icon: GitIcon },
      { name: 'GitHub Actions', role: 'CI/CD Automation', icon: GitHubIcon },
    ],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-category-block',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            refreshPriority: 5,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#000000] text-white py-24 md:py-32 px-6 md:px-14 lg:px-20 overflow-hidden select-none border-t border-amber-500/20"
    >
      {/* Ambient Gold Halo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[200px] pointer-events-none opacity-15 bg-amber-500/20" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 font-mono text-xs tracking-[0.2em] uppercase mb-4 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>02 // TECHNICAL ARSENAL</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white">
            SKILLS &{' '}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              EXPERTISE
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 font-light mt-3 leading-relaxed">
            Core technologies and modern tools I leverage to engineer responsive, high-performance web applications.
          </p>
        </div>

        {/* ================= 4 CLEAN CATEGORIES ================= */}
        <div className="space-y-12">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.number} className="skill-category-block">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-amber-500/20">
                <span className="text-xs font-mono font-bold text-amber-400 tracking-widest">
                  {category.number} //
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {category.title}
                </h3>
                <span className="text-[11px] font-mono text-zinc-400 ml-auto bg-white/[0.04] border border-white/10 px-2.5 py-0.5 rounded-full">
                  {category.skills.length} Techs
                </span>
              </div>

              {/* Responsive Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="group relative p-4 rounded-2xl bg-[#08080a] hover:bg-[#0e0e14] border border-amber-500/20 hover:border-amber-400/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(245,158,11,0.15)] flex flex-col justify-between overflow-hidden cursor-default select-none"
                    >
                      {/* Ambient Corner Glow on Hover */}
                      <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-amber-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-black/60 border border-amber-500/20 group-hover:border-amber-400/50 flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-inner">
                          <Icon className="w-5 h-5 transition-transform duration-300" />
                        </div>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/30 group-hover:bg-amber-400 transition-colors" />
                      </div>

                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-amber-300 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-[11px] font-mono text-zinc-400 mt-0.5 truncate">
                          {skill.role}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
