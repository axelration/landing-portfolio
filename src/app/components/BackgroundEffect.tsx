"use client";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundEffect() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const shapes = containerRef.current?.querySelectorAll(".shape-parallax");
        if (!shapes) return;

        shapes.forEach((shape) => {
            const el = shape as HTMLElement;
            const depth = parseFloat(el.dataset.depth || "0.2"); // default slow
            gsap.to(el, {
                y: () => `+=${window.innerHeight * depth}`, // move relative to scroll
                ease: "none",
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true, // sync with scroll
                },
            });
        });


    }, []);

    return (
        <div ref={containerRef} 
        id="background-effect"
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            {/* Base Grid */}
            <svg
                className="absolute inset-0 w-full h-full"
            >
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path
                            d="M 40 0 L 0 0 0 40"
                            fill="none"
                            stroke={theme === "dark" ? "#3b82f6ff" : "#93c5fdff"}
                            strokeWidth="1"
                            opacity="0.08"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Shapes with different depths */}
            <div
                className={theme==='dark' 
                    ? "shape-parallax absolute top-[5%] left-[20%] w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl transition-colors duration-2000"
                    : "shape-parallax absolute top-[5%] left-[20%] w-[300px] h-[300px] bg-blue-300/25 rounded-full blur-3xl transition-colors duration-2000"
                }
                data-depth="4"
            ></div>
            <div
                className={theme==='dark'
                    ? "shape-parallax absolute top-[20%] left-[70%] w-[250px] h-[250px] bg-cyan-400/20 rounded-full blur-3xl transition-colors duration-2000"
                    : "shape-parallax absolute top-[20%] left-[70%] w-[250px] h-[250px] bg-cyan-300/25 rounded-full blur-3xl transition-colors duration-2000"
                }
                data-depth="2.5"
            ></div>
            <div
                className={theme==='dark'
                    ? "shape-parallax absolute top-[25%] left-[50%] w-[200px] h-[200px] bg-purple-500/15 rounded-full blur-3xl transition-colors duration-2000"
                    : "shape-parallax absolute top-[25%] left-[50%] w-[200px] h-[200px] bg-purple-300/20 rounded-full blur-3xl transition-colors duration-2000"
                }
                data-depth="3.5"
            ></div>
            <div
                className={theme==='dark'
                    ? "shape-parallax absolute top-[35%] left-[20%] w-[150px] h-[150px] bg-pink-400/20 rounded-full blur-2xl transition-colors duration-2000"
                    : "shape-parallax absolute top-[35%] left-[20%] w-[150px] h-[150px] bg-pink-300/25 rounded-full blur-2xl transition-colors duration-2000"
                }
                data-depth="4.0"
            ></div>
            <div
                className={theme==='dark'
                    ? "shape-parallax absolute top-[50%] left-[80%] w-[180px] h-[180px] bg-indigo-400/30 rounded-full blur-2xl transition-colors duration-2000"
                    : "shape-parallax absolute top-[50%] left-[80%] w-[180px] h-[180px] bg-indigo-300/35 rounded-full blur-2xl transition-colors duration-2000"
                }
                data-depth="3"
            ></div>

        </div>
    );
}
