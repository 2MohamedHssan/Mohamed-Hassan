'use client';

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function ScrollHero() {
  const section = useRef(null);
  const img = useRef(null);
  const text = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: true,
        },
      });

      tl.to(img.current, {
        scale: 2.5,
      })
        .to(img.current, {
          x: 400,
          scale: 1.3,
        })
        .from(text.current, {
          opacity: 0,
          x: -100,
        });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={section} className="h-screen bg-black relative overflow-hidden">

      <div className="absolute inset-0 flex items-center justify-center">
        <img
          ref={img}
          src="/mohamed.JPG"
          className="w-75 h-112.5 object-cover rounded-3xl"
        />
      </div>

      <div ref={text} className="absolute left-20 top-1/2 -translate-y-1/2 text-white">
        <h1 className="text-6xl font-bold">Frontend Developer</h1>
        <p className="text-gray-400 mt-4">
          Building cinematic web experiences
        </p>
      </div>

    </section>
  );
}