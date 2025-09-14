"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    )
      .fromTo(subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      );

  }, []);

  return (
    <section id="hero" ref={heroRef} className="smooth-content min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center z-10 max-w-4xl mx-auto">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-light text-white mb-4 font-['Inter']"
          style={{ fontWeight: 300 }}
        >
          Raxel K
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-blue-200 font-light font-['Inter'] tracking-wide"
          style={{ fontWeight: 300 }}
        >
          Creative Developer & Designer
        </p>
        <div className="mt-8 flex items-center justify-center space-x-4">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-300"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-700"></div>
        </div>
      </div>
    </section>
  );
}