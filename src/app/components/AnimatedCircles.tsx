import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTheme } from 'next-themes';

export default function AnimatedCircles() {
  const leftCirclesRef = useRef<HTMLDivElement>(null);
  const rightCirclesRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!leftCirclesRef.current || !rightCirclesRef.current) return;

    const leftCircles = leftCirclesRef.current.children;
    const rightCircles = rightCirclesRef.current.children;

    // Animate left side circles
    Array.from(leftCircles).forEach((circle, index) => {
      gsap.set(circle, { y: window.innerHeight + 300 });
      gsap.to(circle, {
        y: -200,
        duration: 8 + index * 2,
        repeat: -1,
        ease: 'none',
        delay: index * 1.5
      });
    });

    // Animate right side circles
    Array.from(rightCircles).forEach((circle, index) => {
      gsap.set(circle, { y: window.innerHeight + 300 });
      gsap.to(circle, {
        y: -200,
        duration: 10 + index * 1.5,
        repeat: -1,
        ease: 'none',
        delay: index * 2
      });
    });

  }, []);

  return (
    <>
      {/* Left side circles */}
      <div ref={leftCirclesRef} className="fixed left-0 top-0 w-32 h-full pointer-events-none" style={{ zIndex: 1 }}>
        {theme === 'dark' ? (
          <>
            <div className="absolute left-4 w-16 h-16 bg-blue-500/20 rounded-full border-2 border-blue-400/40 blur-xs" />
            <div className="absolute left-8 w-12 h-12 bg-blue-600/30 rounded-full border border-blue-300/50 blur-xs" />
            <div className="absolute left-2 w-20 h-20 bg-blue-400/15 rounded-full border-2 border-blue-500/30 blur-xs" />
            <div className="absolute left-3 w-16 h-16 bg-blue-400/30 rounded-full border-2 border-blue-500/35 blur-xs" />
            <div className="absolute left-6 w-8 h-8 bg-blue-700/40 rounded-full blur-xs" />
            <div className="absolute left-12 w-24 h-24 bg-blue-300/10 rounded-full border border-blue-400/20 blur-xs" />
          </>
        ) : (
          <>
            <div className="absolute left-4 w-16 h-16 bg-cyan-500/25 rounded-full border-2 border-cyan-400/40 blur-xs" />
            <div className="absolute left-8 w-12 h-12 bg-cyan-600/20 rounded-full border border-cyan-300/50 blur-xs" />
            <div className="absolute left-2 w-20 h-20 bg-cyan-400/25 rounded-full border-2 border-cyan-500/35 blur-xs" />
            <div className="absolute left-3 w-16 h-16 bg-cyan-400/40 rounded-full border-2 border-cyan-500/40 blur-xs" />
            <div className="absolute left-6 w-8 h-8 bg-cyan-700/30 rounded-full blur-xs" />
            <div className="absolute left-12 w-24 h-24 bg-cyan-300/15 rounded-full border border-cyan-400/25 blur-xs" />
          </>
        )}
      </div>

      {/* Right side circles */}
      <div ref={rightCirclesRef} className="fixed right-0 top-0 w-32 h-full pointer-events-none" style={{ zIndex: 1 }}>
        {theme === 'dark' ? (
          <>
            <div className="absolute right-4 w-18 h-18 bg-blue-500/25 rounded-full border-2 border-blue-400/40 blur-xs" />
            <div className="absolute right-8 w-14 h-14 bg-blue-600/20 rounded-full border border-blue-300/50 blur-xs" />
            <div className="absolute right-2 w-16 h-16 bg-blue-400/15 rounded-full border-2 border-blue-500/35 blur-xs" />
            <div className="absolute right-3 w-16 h-16 bg-blue-400/30 rounded-full border-2 border-blue-500/35 blur-xs" />
            <div className="absolute right-6 w-10 h-10 bg-blue-700/30 rounded-full blur-xs" />
            <div className="absolute right-10 w-22 h-22 bg-blue-300/12 rounded-full border border-blue-400/25 blur-xs" />
          </>
        ) : (
          <>
            <div className="absolute right-4 w-18 h-18 bg-cyan-500/30 rounded-full border-2 border-cyan-400/40 blur-xs" />
            <div className="absolute right-8 w-14 h-14 bg-cyan-600/25 rounded-full border border-cyan-300/50 blur-xs" />
            <div className="absolute right-2 w-16 h-16 bg-cyan-400/25 rounded-full border-2 border-cyan-500/35 blur-xs" />
            <div className="absolute right-3 w-16 h-16 bg-cyan-400/40 rounded-full border-2 border-cyan-500/40 blur-xs" />
            <div className="absolute right-6 w-10 h-10 bg-cyan-700/20 rounded-full blur-xs" />
            <div className="absolute right-10 w-22 h-22 bg-cyan-300/20 rounded-full border border-cyan-400/30 blur-xs" />
          </>
        )}
      </div>
    </>
  );
}