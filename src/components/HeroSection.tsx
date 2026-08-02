"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Foreground cutout assets that slide while background stays fixed
const slides = [
  {
    id: 1,
    frontImage: "/kpnroofingshed/images/roofing.png",
    title: "Industrial",
    color: "#062088", // KPN Blue
    pathPercent: 0.15,
    label: "Assemble 10",
  },
  {
    id: 2,
    frontImage: "/kpnroofingshed/images/roofing.png",
    title: "Agricultural",
    color: "#ee0000", // KPN Red
    pathPercent: 0.45,
    label: "Refuelling 125",
  },
  {
    id: 3,
    frontImage: "/kpnroofingshed/images/roofing.png",
    title: "Home Roofing",
    color: "#ffe600", // KPN Yellow
    pathPercent: 0.65,
    label: "Station 80",
  },
  {
    id: 4,
    frontImage: "/kpnroofingshed/images/roofing.png",
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

  const handleNext = () => {
    const nextIdx = (currentSlide + 1) % slides.length;
    changeSlide(nextIdx);
  };

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, isAnimating]);

  return (
    <section id="home" className="relative min-h-[100dvh] w-full overflow-hidden bg-slate-200 flex flex-col font-sans select-none">

      {/* 1. Static Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/kpnroofingshed/images/hero-bg.png"
          alt="KPN Hero Background"
          fill
          className="object-cover opacity-80"
          priority
        />
        {/* Soft fog overlay to blend the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent" />
      </div>

      {/* 2. Huge Background Text (Category Title) */}
      <div className="absolute top-[10%] md:top-[12%] w-full flex justify-center z-10 pointer-events-none px-4">
        <h1
          key={currentSlide}
          className="text-[clamp(60px,12vw,220px)] font-black text-white tracking-tighter leading-none whitespace-nowrap drop-shadow-xl animate-fade-in-up"
        >
          {slides[currentSlide].title}
        </h1>
      </div>

      {/* 3. Center Front Image Runner - Anchored directly to the bottom */}
      <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] max-w-[950px] h-[55vh] md:h-[55vh] z-20 pointer-events-none">
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
                className="object-cover object-bottom scale-[1.3] md:scale-[1.45] origin-bottom"
              />
            </div>
          );
        })}
      </div>

      {/* 3.5 Foreground white gradient (above images z-20, below path z-30) */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-white via-white to-transparent z-[25] pointer-events-none" />
      
      {/* Side overlays (left and right) with smooth vertical masking */}
      <div 
        className="absolute inset-y-0 left-0 w-[15%] md:w-[20%] bg-gradient-to-r from-white via-white/80 to-transparent z-[25] pointer-events-none"
        style={{ 
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 20%, black 35%, black 80%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 20%, black 35%, black 80%, transparent 100%)'
        }}
      />
      <div 
        className="absolute inset-y-0 right-0 w-[15%] md:w-[20%] bg-gradient-to-l from-white via-white/60 to-transparent z-[25] pointer-events-none"
        style={{ 
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 20%, black 35%, black 80%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 20%, black 35%, black 80%, transparent 100%)'
        }}
      />

      {/* 4. Curved Path and Interactive Nodes */}
      <div className="absolute bottom-0 left-0 w-full h-[60vh] z-30 pointer-events-none">

        {/* The SVG Track (Perspective 3D Curve) */}
        <svg
          className="w-full h-full absolute inset-0 transition-colors duration-700"
          viewBox="0 0 1200 420"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            d="M 0 120 Q 300 480 600 380 T 1200 20"
            stroke={slides[currentSlide].color}
            style={{ transition: 'stroke 0.7s ease' }}
            strokeWidth="7.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Static Node Markers (Clickable dots on path) */}
        <div className="absolute inset-0 pointer-events-auto">
          {nodePositions.map((pos, idx) => (
            <div
              key={`static-${idx}`}
              onClick={() => changeSlide(idx)}
              className="absolute flex flex-col items-center cursor-pointer group -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${(pos.x / 1200) * 100}%`, top: `${(pos.y / 420) * 100}%` }}
            >
              {/* Fixed dot on path */}
              <div
                className={`w-5 h-5 rounded-full border-[4.5px] transition-all duration-300 z-0 ${currentSlide === idx ? "opacity-0" : "bg-white group-hover:scale-125"}`}
                style={{ borderColor: slides[currentSlide].color }}
              />
              <div className={`absolute top-8 hidden sm:flex flex-col items-center whitespace-nowrap transition-opacity duration-300 ${currentSlide === idx ? "opacity-0" : "opacity-100"}`}>
                <span className="text-[14px] sm:text-[18px] font-black tracking-wide text-black drop-shadow-md">
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
              top: `${(nodePositions[currentSlide].y / 420) * 100}%`
            }}
          >
            <div className="relative flex flex-col items-center justify-center">
              {/* Pulse effect */}
              <span
                className="absolute w-20 h-20 rounded-full animate-ping opacity-40"
                style={{ backgroundColor: slides[currentSlide].color }}
              />

              {/* Solid Circle */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] z-10 transition-colors duration-500"
                style={{ backgroundColor: slides[currentSlide].color }}
              >
                {/* Inner Icon Detail */}
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-1 h-1.5 bg-white rounded-sm" />
                  <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  <div className="w-3 h-0.5 bg-white rounded-sm mt-0.5" />
                </div>
              </div>

              {/* Active Node Text below */}
              <div className="absolute top-[75px] sm:top-[90px] hidden sm:flex flex-col items-center whitespace-nowrap">
                <span className="text-[18px] sm:text-[22px] font-black tracking-wide text-black drop-shadow-md">
                  {slides[currentSlide].title}
                </span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Floating Action Button */}
      <div className="absolute bottom-10 right-10 z-40 pointer-events-auto">
        <button
          onClick={handleNext}
          disabled={isAnimating}
          aria-label="Next Slide"
          className="w-14 h-14 bg-[#ffcc00] border-none rounded-[1rem] flex items-center justify-center cursor-pointer shadow-xl hover:scale-110 active:scale-95 transition-transform"
        >
          <ArrowRight size={22} className="text-slate-900" />
        </button>
      </div>

    </section>
  );
}