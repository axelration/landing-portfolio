"use client";
import { useEffect, useState } from "react";
import BackgroundEffect from "@/app/components/BackgroundEffect";
import LoadingScreen from "@/app/components/LoadingScreen"
import Navigation from "@/app/components/Navigation";
import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import SkillsSection from "@/app/components/SkillsSection";
import ContactSection from "@/app/components/ContactSection";
import AnimatedCircles from "@/app/components/AnimatedCircles";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Load Inter font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Script for smooth scrolling
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/smooth-scroll/16.1.3/smooth-scroll.polyfills.min.js';
    script.async = true;
    document.body.appendChild(script);

    // GSAP Plugins
    const gsapScrollTriggerScript = document.createElement('script');
    gsapScrollTriggerScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js';
    gsapScrollTriggerScript.async = true;
    document.body.appendChild(gsapScrollTriggerScript);

    const gsapScrollSmootherScript = document.createElement('script');
    gsapScrollSmootherScript.src = 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollSmoother.min.js';
    gsapScrollSmootherScript.async = true;
    document.body.appendChild(gsapScrollSmootherScript);

    // Intersection Observer for active section tracking
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      document.head.removeChild(link);
      document.body.removeChild(script);
      document.body.removeChild(gsapScrollTriggerScript);
      document.body.removeChild(gsapScrollSmootherScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-x-hidden">
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Animated Background Grid */}
      <BackgroundEffect />

      {/* Animated Circles */}
      <AnimatedCircles />

      {/* Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Main Content */}
      <main className="relative z-10 smooth-wrapper">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 bottom-12 text-center text-blue-300 border-t border-blue-500/20">
        <p className="font-['Inter']" style={{ fontWeight: 300 }}>
          © 2025 Axelration.site All rights reserved.
        </p>
      </footer>
    </div>
  );
}