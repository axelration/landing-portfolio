"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ScrollingText({ text }: {text?: string}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(!ref.current) return;

        const el = ref.current;
        const textWidth = el.scrollWidth; // total width of the text
        const containerWidth = el.parentElement?.offsetWidth || window.innerWidth; // width of the container

        // Pixels per second
        const speed = 200;
        const duration = (textWidth + containerWidth) / speed;

        // Restart animation when text changes
        gsap.killTweensOf(el);
        gsap.fromTo(
            el,
            { x: containerWidth },
            { x: -textWidth, 
              duration, 
              ease: "linear", 
              repeat: -1, 
            }
        );
    }, [text]);

    return (
        <div className="w-full h-24 bg-black overflow-hidden flex items-center border-y-2 border-red-600 pointer-events-none z-0">
            <div 
                ref={ref}
                className="whitespace-nowrap text-[3rem] uppercase font-bold text-red-600 opacity-20"
            >
                {text} — {text} — {text} — {text} — {text}
            </div>
        </div>
    );
}
