"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Foreground cutout assets that slide while background stays fixed
const slides = [
  {
    id: 1,
    frontImage: "/kpnroofingshed/images/roofing2.png",
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
    frontImage: "/kpnroofingshed/images/roofing3.png",
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
  const [isAnimating, setIsAnimating] = useState(false);
  const pathRef = useRef<SVGPathElement>(null);
  const frontImageRef = useRef<HTMLDivElement>(null);
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

  const changeSlide = async (nextIdx: number) => {
    if (isAnimating || nextIdx === currentSlide) return;
    setIsAnimating(true);

    const gsapModule = await import("gsap");
    const gsap = gsapModule.default;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
      },
    });

    tl.to(frontImageRef.current, {
      x: -150,
      opacity: 0,
      scale: 0.9,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setCurrentSlide(nextIdx);
      },
    })
      .set(frontImageRef.current, { x: 150, opacity: 0, scale: 1.05 })
      .to(frontImageRef.current, {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
  };

  const handleNext = () => {
    const nextIdx = (currentSlide + 1) % slides.length;
    changeSlide(nextIdx);
  };

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

      {/* Side Vertical Texts */}




      {/* 2. Huge Background Text (Category Title) */}
      <div className="absolute top-[10%] md:top-[12%] w-full flex justify-center z-10 pointer-events-none px-4">
        <h1
          key={currentSlide}
          className="text-[clamp(60px,12vw,220px)] font-black text-white tracking-tighter leading-none whitespace-nowrap drop-shadow-xl animate-fade-in-up"
        >
          {slides[currentSlide].title}
        </h1>
      </div>

      {/* 3. Center Front Image Runner */}
      <div className="absolute top-[45%] md:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[65%] max-w-[900px] aspect-[16/9] z-20 pointer-events-none transition-transform duration-700">
        <div ref={frontImageRef} className="relative w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <Image
            src={slides[currentSlide].frontImage}
            alt="Roofing Structure Runner"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* 4. Curved Path and Interactive Nodes */}
      <div className="absolute bottom-0 left-0 w-full h-[60vh] z-30 pointer-events-none">

        {/* The SVG Track (Perspective 3D Curve) */}
        {/* Adjusted to mimic the exact way the reference line hangs */}
        <svg
          className="w-full h-full absolute inset-0"
          viewBox="0 0 1200 420"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            d="M 0 120 Q 300 480 600 380 T 1200 20"
            stroke="#16131980"
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
                className={`w-4 h-4 rounded-full border-[3px] transition-all duration-300 z-0 ${currentSlide === idx ? "opacity-0" : "bg-white border-[#16131980] group-hover:scale-125"
                  }`}
              />

              {/* Labels for inactive nodes - hidden on xs, visible on sm+ */}
              <div className={`absolute top-6 hidden sm:flex flex-col items-center whitespace-nowrap transition-opacity duration-300 ${currentSlide === idx ? "opacity-0" : "opacity-100"}`}>
                <span className="text-[10px] sm:text-[12px] font-bold tracking-wide text-slate-800">
                  {slides[idx].title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* The Traveling Active Node */}
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
                {/* Inner Icon Detail (resembling a lantern/beacon) */}
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-1 h-1.5 bg-white rounded-sm" />
                  <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  <div className="w-3 h-0.5 bg-white rounded-sm mt-0.5" />
                </div>
              </div>

              {/* Active Node Text below - hidden on xs, visible on sm+ */}
              <div className="absolute top-[68px] sm:top-[80px] hidden sm:flex flex-col items-center whitespace-nowrap">
                <span className="text-[12px] sm:text-[15px] font-bold tracking-wide text-slate-900 drop-shadow-md">
                  {slides[currentSlide].title}
                </span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Floating Action Button - Performs as Navigation */}
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