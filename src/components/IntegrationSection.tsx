"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

// We'll use generic Lucide icons as placeholders for the floating apps
import { 
  Box, 
  MessageSquare, 
  Database, 
  Cloud, 
  Activity, 
  ShieldCheck, 
  Zap 
} from "lucide-react";

export default function IntegrationSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // SVG Paths for the converging lines
  // We'll create multiple Bezier curves that start from the edges and end at the center
  const generatePath = (startX: number, startY: number, endX: number, endY: number) => {
    // Control points to create smooth converging curves
    const cp1X = startX + (endX - startX) * 0.4;
    const cp1Y = startY;
    const cp2X = startX + (endX - startX) * 0.6;
    const cp2Y = endY;
    return `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
  };

  useEffect(() => {
    const initGSAP = async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      
      // Floating animation for icons
      gsap.to(".floating-icon", {
        y: -15,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          from: "random"
        }
      });
    };
    initGSAP();
  }, []);

  return (
    <section id="integration" className="bg-white py-12 md:py-24 min-h-[100dvh] flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10 flex flex-col items-center">
        
        {/* Header Content */}
        <div className="text-center max-w-[800px] mx-auto mb-16 md:mb-24 z-20">
          <h2 className="text-[#1e2229] text-[clamp(32px,5vw,56px)] font-bold leading-[1.1] tracking-tight font-heading mb-6">
            Create, inspect, and apply synthetic surveillance broadly.
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium">
            Start with a stunning homepage. Stay motivated without hurting your pocket.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 z-20 mb-20 md:mb-32">
          <button className="bg-[#ee0000] hover:bg-[#cc0000] text-white font-bold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-orange-500/20">
            Start for free
          </button>
          <a href="#contact" className="text-slate-500 text-sm font-medium hover:text-[#1e2229] transition-colors no-underline inline-flex items-center gap-1 group">
            Want to talk or get a live demo? <span className="font-bold text-[#1e2229]">Get in touch</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* Ecosystem Animation Area */}
        <div className="relative w-full h-[400px] flex items-center justify-center z-10">
          
          {/* Animated SVG Lines Background */}
          <div className="absolute inset-0 z-0 flex items-center justify-center overflow-visible pointer-events-none">
            <svg className="w-full h-full min-w-[1000px] opacity-40" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid slice">
              <style>
                {`
                  .animated-line {
                    stroke-dasharray: 10 10;
                    animation: dash 20s linear infinite reverse;
                  }
                  @keyframes dash {
                    to { stroke-dashoffset: 1000; }
                  }
                `}
              </style>
              
              {/* Left Side Lines converging to center (500, 200) */}
              <path className="animated-line" d={generatePath(0, 50, 500, 200)} fill="none" stroke="#ee0000" strokeWidth="1" />
              <path className="animated-line" d={generatePath(0, 150, 500, 200)} fill="none" stroke="#ee0000" strokeWidth="1.5" />
              <path className="animated-line" d={generatePath(0, 250, 500, 200)} fill="none" stroke="#ee0000" strokeWidth="1" />
              <path className="animated-line" d={generatePath(0, 350, 500, 200)} fill="none" stroke="#ee0000" strokeWidth="0.5" />
              
              {/* Right Side Lines converging to center (500, 200) */}
              <path className="animated-line" d={generatePath(1000, 50, 500, 200)} fill="none" stroke="#ee0000" strokeWidth="1" />
              <path className="animated-line" d={generatePath(1000, 150, 500, 200)} fill="none" stroke="#ee0000" strokeWidth="0.5" />
              <path className="animated-line" d={generatePath(1000, 250, 500, 200)} fill="none" stroke="#ee0000" strokeWidth="1.5" />
              <path className="animated-line" d={generatePath(1000, 350, 500, 200)} fill="none" stroke="#ee0000" strokeWidth="1" />
            </svg>
          </div>

          {/* Central Main Icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-20 h-20 bg-[#ee0000] rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(249,92,25,0.4)]">
              <Box size={40} className="text-white" strokeWidth={2} />
            </div>
          </div>

          {/* Floating Peripheral Icons */}
          
          {/* Top Left */}
          <div className="floating-icon absolute top-[10%] left-[15%] md:left-[25%] z-10">
            <div className="w-14 h-14 bg-[#ff3366] rounded-2xl flex items-center justify-center shadow-lg">
              <Activity size={24} className="text-white" />
            </div>
          </div>
          
          {/* Mid Left */}
          <div className="floating-icon absolute top-[45%] left-[5%] md:left-[15%] z-10">
            <div className="w-12 h-12 bg-[#ff1a1a] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-xl italic">C</span>
            </div>
          </div>

          {/* Bottom Left */}
          <div className="floating-icon absolute bottom-[15%] left-[12%] md:left-[22%] z-10">
            <div className="w-16 h-16 bg-[#1a1a2e] rounded-2xl flex items-center justify-center shadow-lg">
              <Zap size={28} className="text-[#ffcc00] fill-[#ffcc00]" />
            </div>
          </div>

          {/* Top Right */}
          <div className="floating-icon absolute top-[15%] right-[10%] md:right-[20%] z-10">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-slate-100">
              <Cloud size={24} className="text-[#00a3e0]" />
            </div>
          </div>

          {/* Mid Right */}
          <div className="floating-icon absolute top-[50%] right-[15%] md:right-[25%] z-10">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg border border-slate-100">
              <Database size={20} className="text-slate-800" />
            </div>
          </div>

          {/* Bottom Right */}
          <div className="floating-icon absolute bottom-[10%] right-[12%] md:right-[22%] z-10">
            <div className="w-16 h-16 bg-[#001f3f] rounded-2xl flex items-center justify-center shadow-lg">
              <ShieldCheck size={28} className="text-[#00e676]" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
