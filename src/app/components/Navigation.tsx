"use client";
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Scroll animation refs
  const navContainerRef = useRef<HTMLDivElement>(null);
  const navTitleRef = useRef<HTMLDivElement>(null);
  const [titleText, setTitleText] = useState('Navigation');
  const [isMouseScrolling, setIsMouseScrolling] = useState(false);

  // Navigation items
  const navItems = [
    { id: 'hero', label: 'Home', desc: '' },
    { id: 'about', label: 'About', desc: 'Get to know about me' },
    { id: 'projects', label: 'Projects', desc: 'See my current, past, and upcoming works' },
    { id: 'skills', label: 'Skills', desc: 'My technical skills and expertise' },
    { id: 'contact', label: 'Contact', desc: 'Get in touch with me' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  const scrollText = (text: string) => {
    if (!navContainerRef.current || !navTitleRef.current) return;

    // Check if the text is already the same
    if (text === titleText) return;

    // Initial animation for nav title
    const titleEl = navTitleRef.current;
    
    gsap.set(titleEl, { x: 0 });

    if (text === '') {
      // Pop out effect
      gsap.fromTo(titleEl,
        { opacity: 1, x: 0 },
        { opacity: 0, x: -80, duration: 0.15, ease: "power3.out" }
      ).then(() => {setTitleText('')});
    } else {
      setTitleText(text);
      // Pop in effect
      gsap.fromTo(titleEl,
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" }
      );
    }
  };

  useEffect(() => {
    if (!navContainerRef.current || !navTitleRef.current) return;

    if (activeSection !== "hero") {
      gsap.to(buttonRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(buttonRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
        pointerEvents: "none",
      });
    }

    let isScrolling: NodeJS.Timeout;

    // Scroll detection   
    window.addEventListener("scroll", () => {
      setIsMouseScrolling(true);

      // Clear timeout if still scrolling
      clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(() => { setIsMouseScrolling(false) }, 200); // ms after last scroll event
    });

    // Reset title when active section not hero and mouse not scrolling through content
    if (activeSection !== "hero" && isMouseScrolling) {
      scrollText('')
    }

  }
  ), [activeSection];

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div ref={navContainerRef} className="overflow-hidden max-w-full">
              <div ref={navTitleRef} className="whitespace-nowrap text-2xl font-semibold text-blue-400 font-['Inter']">
                {titleText}
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    onMouseEnter={() => scrollText(item.desc)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors font-['Inter'] ${activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-blue-200 hover:bg-blue-800/50 hover:text-white'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-800/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/90">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors font-['Inter'] ${activeSection === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-blue-200 hover:bg-blue-800/50 hover:text-white'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Scroll to Top Button */}
      <button
        ref={buttonRef}
        onClick={() => scrollToSection("hero")}
        className="z-999 fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        style={{ opacity: 0, transform: "translateY(50px)" }}
      >
        ↑
      </button>
    </>
  );
}