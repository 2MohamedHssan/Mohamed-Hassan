'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

export default function Certifications() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const images = [
    { title: 'MERN STACK', url: '/mohamedFullstak.png' },
    { title: 'IT', url: '/IT.jpg' },
    { title: 'photoshop', url: '/photoshop.jpg' },
    { title: 'Web', url: '/web.jpg' },
    { title: 'React Design Patterns', url: '/React_Design_patterns.png' },
    { title: 'React Essential Training', url: '/React Essential Training.png' },
  ];

useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const slider = sliderRef.current as HTMLDivElement | null;

    if (!slider) return;

    const totalScroll = slider.scrollWidth - window.innerWidth;
    console.log('window',window)

    gsap.to(slider, {
      x: () => -(slider.scrollWidth - window.innerWidth),

      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalScroll}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.refresh();
  }, sectionRef);

  return () => {
    ctx.revert();
  };
}, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      <div
        ref={sliderRef}
        className="flex h-full w-max"
      >
        {images.map(({ title, url }) => (
          <div
            key={url}
            className="certificate-card relative w-[80vw] h-screen flex items-center justify-center shrink-0"
          >
            <div className=" relative w-[90vw] max-w-200 aspect-7/5 overflow-hidden rounded-3xl">
              <Image
                src={url}
                alt={title}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}