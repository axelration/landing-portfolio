"use client";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const iconRef = useRef(null);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);

  // Animation on theme change
  useEffect(() => {
    if (!mounted) return;

    gsap.fromTo(
      iconRef.current,
      { rotate: 0, scale: 0.8, opacity: 0 },
      { rotate: 360, scale: 1, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
  }, [theme, mounted]);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="
        p-2 rounded-full 
        bg-gray-200 hover:bg-gray-300
        dark:bg-gray-800 dark:hover:bg-gray-700
        transition-colors duration-300"
    >
      <span ref={iconRef} className="block w-6 h-6 text-yellow-500 dark:text-yellow-300">
        {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="5" />
      <g stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="1" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
        <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
      </g>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
    </svg>
  );
}