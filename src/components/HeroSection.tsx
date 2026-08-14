"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Foreground cutout assets that slide while background stays fixed
const slides = [
  {
    id: 1,
    frontImage: "/images/roofing.png",
    title: "Industrial",
    color: "#062088", // KPN Blue
    pathPercent: 0.15,
    label: "Assemble 10",
  },
  {
    id: 2,
    frontImage: "/images/roofing2.png",
    title: "Agricultural",
    color: "#ffe600", // KPN Yellow
    pathPercent: 0.45,
    label: "Refuelling 125",
  },
  {
    id: 3,
    frontImage: "/images/roofing3.png",
    title: "Home Roofing",
    
    color: "#ee0000", // KPN Red
    pathPercent: 0.65,
    label: "Station 80",
  },
  {
    id: 4,
    frontImage: "/images/roofing5.png",
    title: "Sports Turf",
    color: "#00a3e0", // KPN Cyan
    pathPercent: 0.85,
    label: "Shelter 144",
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);
  const [nodePositions, setNodePositions] = useState<{ x: number; y: number }[]>([]);

  const [isNightMode, setIsNightMode] = useState(false);

  useEffect(() => {
    const handleTheme = (e: any) => setIsNightMode(e.detail === "night");
    window.addEventListener("themeChange", handleTheme);
    return () => window.removeEventListener("themeChange", handleTheme);
  }, []);

  useEffect(() => {
    if (!pathRef.current) return;

    const updatePositions = () => {
      const totalLength = pathRef.current!.getTotalLength();
      const positions = slides.map((slide) => {
        const point = pathRef.current!.getPointAtLength(totalLength * slide.pathPercent);
        return { x: point.x, y: point.y };
      });
      setNodePositions(positions);
    };

    setTimeout(updatePositions, 50);

    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  const changeSlide = (nextIdx: number) => {
    if (isAnimating || nextIdx === currentSlide) return;
    setIsAnimating(true);
    setPrevSlide(currentSlide);
    setCurrentSlide(nextIdx);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  const handlePrev = () => {
    const nextIdx = (currentSlide - 1 + slides.length) % slides.length;
    changeSlide(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentSlide + 1) % slides.length;
    changeSlide(nextIdx);
  };

  // Use a ref to keep handleNext stable and avoid stale closures in the interval
  const handleNextRef = useRef(handleNext);
  handleNextRef.current = handleNext;

  // Auto-slide effect — only depends on isAnimating to avoid rapid interval recreation
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        handleNextRef.current();
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [isAnimating]);

  return (
    <section id="home" className={`relative min-h-[80dvh] md:min-h-[100dvh] w-full overflow-hidden flex flex-col font-sans select-none transition-colors duration-700 ${isNightMode ? 'bg-slate-900' : 'bg-slate-200'}`}>

      {/* 1. Static Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={isNightMode ? "/images/night-bg.png" : "/images/hero-bg.png"}
          alt="KPN Hero Background"
          fill
          className="object-cover opacity-80 transition-opacity duration-1000"
          priority
        />
        {/* Soft fog overlay to blend the bottom */}
        <div className={`absolute inset-0 transition-colors duration-700 ${isNightMode ? 'bg-gradient-to-t from-black/90 via-black/50 to-transparent' : 'bg-gradient-to-t from-white/90 via-white/30 to-transparent'}`} />
      </div>

      {/* 2. Huge Background Text (Category Title) */}
      <div className="absolute top-32 md:top-[12%] w-full flex justify-center z-10 pointer-events-none px-4">
        <h1
          key={currentSlide}
          className="text-[clamp(50px,15vw,220px)] md:text-[clamp(60px,12vw,220px)] font-black text-white tracking-tighter leading-none whitespace-nowrap drop-shadow-xl animate-fade-in-up"
        >
          {slides[currentSlide].title}
        </h1>
      </div>

      {/* 3. Center Front Image Runner - Anchored directly to the bottom */}
      <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[100%] md:w-[70%] max-w-[950px] h-[60vh] md:h-[65vh] z-20 pointer-events-none">
        {slides.map((slide, idx) => {
          let transformClass = "translate-x-[100vw] opacity-0"; // default hidden on right
          if (idx === currentSlide) {
            transformClass = "translate-x-0 opacity-100 z-20";
          } else if (idx === prevSlide) {
            transformClass = "-translate-x-[100vw] opacity-0 z-10";
          }

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-in-out ${transformClass}`}
            >
              <Image
                src={slide.frontImage}
                alt={slide.title}
                fill
                className="object-contain md:object-cover object-bottom scale-[2.2] sm:scale-[1.8] md:scale-[1.45] origin-bottom"
              />
            </div>
          );
        })}
      </div>

      {/* 3.5 Foreground white gradient (above images z-20, below path z-30) */}
      <div className={`hidden md:block absolute bottom-0 left-0 w-full h-[40%] z-[25] pointer-events-none transition-colors duration-700 ${isNightMode ? 'bg-gradient-to-t from-black via-black/90 to-transparent' : 'bg-gradient-to-t from-white via-white to-transparent'}`} />

      {/* Side overlays (left and right) with smooth vertical masking - Hidden on mobile */}
      <div
        className={`hidden md:block absolute inset-y-0 left-0 w-[15%] md:w-[20%] z-[25] pointer-events-none transition-colors duration-700 ${isNightMode ? 'bg-gradient-to-r from-black via-black/80 to-transparent' : 'bg-gradient-to-r from-white via-white/80 to-transparent'}`}
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 20%, black 35%, black 80%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 20%, black 35%, black 80%, transparent 100%)'
        }}
      />
      <div
        className={`hidden md:block absolute inset-y-0 right-0 w-[15%] md:w-[20%] z-[25] pointer-events-none transition-colors duration-700 ${isNightMode ? 'bg-gradient-to-l from-black via-black/60 to-transparent' : 'bg-gradient-to-l from-white via-white/60 to-transparent'}`}
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 20%, black 35%, black 80%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 20%, black 35%, black 80%, transparent 100%)'
        }}
      />

      {/* 4. Curved Path and Interactive Nodes (Desktop Only) */}
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-[60vh] z-30 pointer-events-none">

        {/* The SVG Track — Deep S-Curve for dramatic perspective effect */}
        <svg
          className="w-full h-full absolute inset-0 transition-colors duration-700"
          viewBox="0 0 1200 380"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            d="M 0 40 Q 300 400 600 300 T 1200 60"
            stroke={slides[currentSlide].color}
            style={{ transition: 'stroke 0.7s ease' }}
            strokeWidth="7.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Static Node Markers (Clickable dots on path) */}
        <div className="absolute inset-0 pointer-events-auto">
          {nodePositions.map((pos, idx) => (
            <div
              key={`static-${idx}`}
              onClick={() => changeSlide(idx)}
              className="absolute flex flex-col items-center cursor-pointer group -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${(pos.x / 1200) * 100}%`, top: `${(pos.y / 380) * 100}%` }}
            >
              {/* Fixed dot on path */}
              <div
                className={`w-5 h-5 rounded-full border-[4.5px] transition-all duration-300 z-0 ${currentSlide === idx ? "opacity-0" : "bg-white group-hover:scale-125"}`}
                style={{ borderColor: slides[currentSlide].color }}
              />
              <div className={`absolute top-8 hidden sm:flex flex-col items-center whitespace-nowrap transition-opacity duration-300 ${currentSlide === idx ? "opacity-0" : "opacity-100"}`}>
                <span className={`text-[14px] sm:text-[18px] font-black tracking-wide drop-shadow-md transition-colors ${isNightMode ? 'text-white' : 'text-black'}`}>
                  {slides[idx].title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {nodePositions.length > 0 && (
          <div
            className="absolute z-40 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] -translate-x-1/2 -translate-y-[28px] pointer-events-none"
            style={{
              left: `${(nodePositions[currentSlide].x / 1200) * 100}%`,
              top: `${(nodePositions[currentSlide].y / 380) * 100}%`
            }}
          >
            <div className="relative flex flex-col items-center justify-center">
              {/* Pulse effect */}
              <span
                className="absolute w-12 h-12 sm:w-20 sm:h-20 rounded-full animate-ping opacity-40"
                style={{ backgroundColor: slides[currentSlide].color }}
              />

              {/* Solid Circle */}
              <div
                className="w-10 h-10 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] z-10 transition-colors duration-500"
                style={{ backgroundColor: slides[currentSlide].color }}
              >
                {/* Inner Icon Detail */}
                <div className="flex flex-col items-center gap-0.5 scale-75 sm:scale-100">
                  <div className="w-1 h-1.5 bg-white rounded-sm" />
                  <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  <div className="w-3 h-0.5 bg-white rounded-sm mt-0.5" />
                </div>
              </div>

              {/* Active Node Text below */}
              <div className="absolute top-[60px] sm:top-[90px] hidden sm:flex flex-col items-center whitespace-nowrap">
                <span className={`text-[16px] sm:text-[22px] font-black tracking-wide drop-shadow-md transition-colors ${isNightMode ? 'text-white' : 'text-black'}`}>
                  {slides[currentSlide].title}
                </span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Mobile Dotted Navigation */}
      <div className="md:hidden absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-40 pointer-events-auto">
        {slides.map((slide, idx) => (
          <button
            key={`dot-${idx}`}
            onClick={() => changeSlide(idx)}
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 border-2 ${currentSlide === idx ? 'scale-125 border-white shadow-lg' : 'bg-transparent border-white/60 hover:border-white'}`}
            style={{ backgroundColor: currentSlide === idx ? slides[currentSlide].color : undefined }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>


      {/* Floating Action Button (Desktop Only) */}
      <div className="hidden md:flex absolute bottom-10 right-10 z-40 pointer-events-auto">
        <button
          onClick={handleNext}
          disabled={isAnimating}
          aria-label="Next Slide"
          className="w-14 h-14 bg-[#ffcc00] border-none rounded-[1rem] flex items-center justify-center cursor-pointer shadow-xl hover:scale-110 active:scale-95 transition-transform"
        >
          <ArrowRight size={22} className="text-slate-900 scale-100" />
        </button>
      </div>

    </section>
  );
}