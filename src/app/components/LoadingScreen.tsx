"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
    const ref = useRef<HTMLDivElement>(null);
    const orb1Ref = useRef<HTMLDivElement>(null);
    const orb2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Mouse move effect
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth - 0.5) * 100; // -50 to 50
            const y = (e.clientY / innerHeight - 0.5) * 100;

            // Animate orbs toward mouse position
            gsap.to(orb1Ref.current, {
                x: x * 0.5,
                y: y * 0.5,
                duration: 1.2,
                ease: "power3.out",
            });
            gsap.to(orb2Ref.current, {
                x: x * -0.3,
                y: y * -0.3,
                duration: 1.5,
                ease: "power3.out",
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Wait for full page load (all assets)
        const handleLoad = () => {
            // Add 0.5s delay before starting animation
            setTimeout(() => {
                gsap.to(el, {
                    duration: 0.5,
                    y: "-100%",
                    ease: "power4.inOut",
                })
                    .then(() => {
                        el.style.display = "none";
                        window.removeEventListener("mousemove", handleMouseMove);
                        window.removeEventListener("load", handleLoad);
                        console.log("Cleanup loading screen listeners");
                    });
            }, 2000);
        };

        // If already loaded (e.g., from cache), trigger immediately
        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("load", handleLoad);
            console.log("Cleanup loading screen listeners");
        };

    }, []);

    return (
        <div
            ref={ref}
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center text-white text-3xl z-[9999] overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #0a1a2f, #102a44)",
                position: "fixed",
            }}
        >
            {/* Soft blurred light animation */}
            <div className="absolute inset-0 overflow-hidden">
                <div ref={orb1Ref} className="absolute w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl animate-lightMove1"></div>
                <div ref={orb2Ref} className="absolute w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-3xl animate-lightMove2"></div>
            </div>

            <span className="animate-pulse relative z-10">Loading...</span>

        </div>
    );
}
