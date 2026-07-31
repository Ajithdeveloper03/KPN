"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight, ArrowUp } from "lucide-react";

interface HeroSectionProps {
  heroMode?: string;
  setHeroMode?: (mode: string) => void;
  setIsModalOpen: (val: boolean) => void;
}

const slides = [
  {
    badge: "PROFESSIONAL ROOFING FOR SAFER, STRONGER HOMES",
    title: "Top-Quality Roofing Services For Homes And Businesses.",
    desc: "Whether you need a quick repair or a full roof replacement, our expert team is here to deliver reliable results, affordable pricing.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000",
  },
  {
    badge: "PRECISION ENGINEERING & FABRICATION",
    title: "Built to Withstand the Toughest Conditions.",
    desc: "We utilize premium Apollo steel and advanced structural designs to ensure your factory shed lasts for decades.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000",
  },
  {
    badge: "CUSTOM AGRICULTURAL SHEDS",
    title: "Optimized Spaces for Farms & Livestock.",
    desc: "From poultry to dairy, our custom-built farm sheds are designed for perfect ventilation, hygiene, and efficiency.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2000",
  }
];

export default function HeroSection({
  setIsModalOpen,
}: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Simple animation on slide change
  useEffect(() => {
    const animateSlide = async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" }
        );
      }
    };
    animateSlide();
  }, [activeIndex]);

  const slide = slides[activeIndex];

  return (
    <section className="relative w-full h-full min-h-[100dvh] flex items-center bg-[#030712] overflow-hidden">
      
      {/* Background Images */}
      {slides.map((s, idx) => (
        <div 
          key={idx}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            idx === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt="Roofing construction background"
            fill
            sizes="100vw"
            priority={idx === 0}
            className="object-cover object-center"
          />
        </div>
      ))}
      
      {/* Heavy dark gradient overlay from left to right */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-black/40 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 pt-20 flex justify-between items-center">
        
        {/* Left Content */}
        <div className="max-w-[750px]" ref={contentRef}>
          
          {/* Top Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M3 3v18h18" />
                <path d="M7 16l4-4 4 4 6-6" />
              </svg>
            </div>
            <span className="text-white font-bold text-xs md:text-sm tracking-widest uppercase opacity-90">
              {slide.badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[clamp(40px,6vw,72px)] font-bold text-white leading-[1.1] mb-8 font-heading">
            {slide.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-200 font-medium leading-relaxed mb-10 max-w-[650px]">
            {slide.desc}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap gap-4 items-center">
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-3 bg-[#1f61f9] hover:bg-[#1550d6] text-white font-bold text-sm tracking-wider px-8 py-4 rounded-full transition-all duration-300"
            >
              REQUEST FREE ESTIMATE
              <div className="bg-white rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={16} className="text-[#1f61f9]" strokeWidth={3} />
              </div>
            </button>
            
            <a
              href="#contact"
              className="group flex items-center gap-3 bg-transparent border border-white/30 hover:border-white text-white font-bold text-sm tracking-wider px-8 py-4 rounded-full transition-all duration-300 no-underline"
            >
              CONTACT US
              <div className="bg-white rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={16} className="text-[#0a0a0f]" strokeWidth={3} />
              </div>
            </a>

          </div>
        </div>

        {/* Right Content: Slider Controls */}
        <div className="hidden lg:flex flex-col gap-4 pr-10">
          <button 
            onClick={prevSlide}
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer border-none shadow-lg"
          >
            <ChevronLeft size={24} className="text-slate-900" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer border-none shadow-lg"
          >
            <ChevronRight size={24} className="text-slate-900" />
          </button>
        </div>

      </div>

      {/* Mobile controls (visible only on small screens) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex lg:hidden gap-4 z-20">
        <button onClick={prevSlide} className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
          <ChevronLeft size={20} />
        </button>
        <button onClick={nextSlide} className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
          <ChevronRight size={20} />
        </button>
      </div>

    </section>
  );
}