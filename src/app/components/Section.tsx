"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        gsap.from(ref.current, {
            scrollTrigger: { trigger: ref.current, start: "top 80%" },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });
    }, []);

    return (
        <section
            ref={ref}
            className="h-screen flex items-center justify-center border-t-4 border-red-600 text-2xl"
        >
            {children}
        </section>
    );
}
