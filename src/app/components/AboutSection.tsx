"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import RippleEffect from "./RippleEffect";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current || !titleRef.current || !subtitleRef.current) return;
    
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
    <section id="about" ref={ref} className="smooth-content min-h-screen flex items-center justify-center relative px-4 py-20">
      <div className="max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 ref={titleRef} className="text-4xl md:text-5xl text-white mb-6 font-['Inter']" style={{ fontWeight: 300 }}>
              About Me
            </h2>
            <div ref={subtitleRef} className="space-y-6 text-blue-100 text-lg leading-relaxed font-['Inter']" style={{ fontWeight: 300 }}>
              <p>
                I'm a passionate creative developer with a love for crafting digital experiences
                that blend beautiful design with cutting-edge technology. My journey in the digital
                world spans over 5 years, during which I've had the privilege of working with
                diverse clients and projects.
              </p>
              <p>
                I specialize in creating immersive web applications, interactive interfaces,
                and digital solutions that not only look stunning but also provide exceptional
                user experiences. My approach combines technical expertise with creative vision
                to bring ideas to life.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, experimenting
                with emerging technologies, or enjoying the great outdoors with my camera.
              </p>
            </div>
          </div>

          <div ref={subtitleRef} className="relative">
            <RippleEffect />
            {/* <div className="w-full h-96 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg border border-blue-500/30 flex items-center justify-center"> */}
              {/* <div className="text-center">
                <div className="w-32 h-32 bg-blue-500/30 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-blue-400/50">
                  <div className="w-16 h-16 bg-blue-400/40 rounded-full"></div>
                </div>
                <p className="text-blue-200 font-['Inter']" style={{ fontWeight: 300 }}>Profile Image</p>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}