'use client';
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ShowcaseSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2500",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.fromTo(
        imageRef.current,
        {
          // scale: 0,
          x: 0,
        },
        {
          scale: 2.5,
          duration: 2,
          ease: "none",
        }
      )
        .to(
          imageRef.current,
          {
            scale: 1.4,
            x: "45vw",
            duration: 2,
            ease: "power2.out",
          },
          ">-0.2"
        )
        tl.fromTo(
          imageRef.current,
          {
            clipPath: "inset(20% 20% 20% 20% round 40px)",
          },
          {
            clipPath: "inset(0% 0% 0% 0% round 40px)",
            scale: 2.5,
            duration: 2,
          }
)
        .fromTo(
          contentRef.current,
          {
            opacity: 0,
            x: -100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1.5,
          },
          "-=1"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#1b1b1b] blur-[120px]" />

        <div ref={imageRef}
          className="relative w-150 h-150 overflow-hidden rounded-[40px] border border-white/10 backdrop-blur-xl">
          <img  src="/mohamed.JPG" alt="" className="w-150 h-150" />
        </div>
        <div>mohamed</div>
      </div>

      <div
        ref={contentRef}
        className="absolute left-24 top-1/2 -translate-y-1/2 max-w-xl"
      >
        <h2 className="text-6xl font-bold text-white mb-4">
          Mohamed Hassan
        </h2>
      </div>
    </section>
  );
}