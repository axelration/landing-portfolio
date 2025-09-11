"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import ScrollingText from "./ScrollingText";

export default function Menu() {
    const [scrollText, setScrollText] = useState("Welcome to My Portfolio");

    useEffect(() => {
        gsap.to(".menu-item", {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.5,
            ease: "back.out(1.7)",
            delay: 0.5,
        });
    }, []);

    const menuItems = [
        { name: "About Me", path: "/about", text: "Learn About My Journey" },
        { name: "Projects", path: "/projects", text: "Explore My Work" },
        { name: "Skills", path: "/skills", text: "Discover My Expertise & Abilities" },
        { name: "Contact", path: "/contact", text: "Get In Touch and Forms Connection" },
    ];

    return (
        <div className="relative z-10 flex flex-col items-center gap-12 mb-16">
            {/* Menu */}
            <nav className="flex flex-col items-center gap-6 text-3xl uppercase">
                {menuItems.map((item, i) => (
                    <Link
                        key={i}
                        href={item.path}
                        className="menu-item relative opacity-0 translate-y-20 hover:text-red-600 transition-all"
                        onMouseEnter={() => setScrollText(item.text)}
                        // onMouseLeave={() => setScrollText("Welcome to My Portfolio")}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            {/* Scrolling Text */}
            <ScrollingText text={scrollText} />
        </div>
    );
}
