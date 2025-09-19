import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function RippleEffect() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Ripple animation timeline
    const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 2,
        // scrollTrigger: {
        //     trigger: "#ripple-section",
        //     start: "top 100%", // play when section is 100% into view
        //     end: "bottom 0%",
        //     toggleActions: "play none none reverse",
        //     // play on enter, reverse on leave back
        // }
    });

    function rippleAnim(target: string) {
        return gsap.fromTo(
            target,
            { scale: 0, opacity: 0.8 },
            {
                scale: 2,
                opacity: 0,
                duration: 1,
                ease: "power2.out",
                onComplete: () => { gsap.set(target, { scale: 0, opacity: 0.6 }) }
            }
        );
    }

    tl.add(rippleAnim(".ripple-tl"))
        .add(rippleAnim(".ripple-br"))
        .add(rippleAnim(".ripple-center"));

    return (
        <div id="ripple-section" className="relative w-full h-96 flex items-center justify-center overflow-hidden">
            {/* Ripple circles */}
            <div className="ripple ripple-tl absolute top-10 left-10 w-24 h-24 bg-blue-400/30 rounded-full pointer-events-none"></div>
            <div className="ripple ripple-br absolute bottom-10 right-10 w-24 h-24 bg-purple-400/30 rounded-full pointer-events-none"></div>
            <div className="ripple ripple-center absolute top-1/2 left-1/2 w-32 h-32 bg-pink-400/30 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
    );
}