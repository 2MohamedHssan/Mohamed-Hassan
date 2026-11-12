'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#000000] text-white border-t border-amber-500/20 py-12 px-6 md:px-14 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Identity */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 relative">
            <Image
              src="/logo.png"
              alt="Mohamed Hassan Logo"
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
          <div>
            <span className="font-black text-sm tracking-wider text-white">MOHAMED HASSAN</span>
            <span className="block text-[10px] font-mono text-amber-400">
              Front-End Developer
            </span>
          </div>
        </div>

        {/* Copyright & Architecture Note */}
        <div className="text-center md:text-left text-xs font-mono text-zinc-500">
          <p>© 2026 Mohamed Hassan. All rights reserved.</p>
          <p className="text-[10px] text-zinc-600 mt-0.5">
            Crafted in Black, Gold & White • Next.js 16 • React 19 • GSAP
          </p>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-amber-500/10 border border-white/10 hover:border-amber-400/50 text-xs font-mono text-zinc-300 hover:text-amber-300 transition-all cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
        </button>
      </div>
    </footer>
  );
}
