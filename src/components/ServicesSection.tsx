"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Factory, Leaf, Home, Trophy, Check } from "lucide-react";
import { openQuoteModal } from "@/components/QuoteModal";

const services = [
  {
    category: "Industrial",
    icon: Factory,
    title: "Industrial & Factory Shed Construction",
    desc: "Our industrial shed construction covers factories, warehouses, and godowns with heavy-gauge steel structures built for load-bearing equipment, racking, and vehicle movement. As factory shed contractors, we plan every structure around your production layout. Long spans and minimal columns give warehouse owners maximum usable floor space.",
    image: "/images/factory.webp",
    alt: "Industrial factory warehouse shed construction by KPN",
  },
  {
    category: "Agricultural",
    icon: Leaf,
    title: "Agricultural & Animal Shed Solutions",
    desc: "KPN is a trusted name in agricultural sheds and animal shed solutions — goat, dairy, cattle, and poultry structures engineered for ventilation, drainage, and animal comfort. Our modern farm sheds are customizable in size and layout, from small farm setups to large commercial operations.",
    image: "/images/goat1.webp",
    alt: "Agricultural farm animal shed solution by KPN",
  },
  {
    category: "Home Roofing",
    icon: Home,
    title: "Home Roofing Sheds",
    desc: "Beyond farms and factories, we build terrace sheds, car parking shades, and other home shed structures. Our residential roofing sheds are built with the same durable, weatherproof roofing standards used across our large-scale industrial projects.",
    image: "/images/terrace.webp",
    alt: "Home terrace parking shades roofing sheds by KPN",
  },
  {
    category: "Sports Turf",
    icon: Trophy,
    title: "Sports Turf Shed Construction",
    desc: "We build all-season, weatherproof sports turf sheds including badminton courts and cricket turfs. Engineered with Apollo Brand Steel for wide, column-free spans, ensuring uninterrupted play and durable protection against harsh sun and monsoon rains.",
    image: "/images/services/sports-turf-main-banner.webp",
    alt: "Badminton court and cricket turf sports shed by KPN",
  }
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (isPaused || !isMobile) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused, isMobile]);

  const activeService = services[activeIndex];

  return (
    <section id="services" className="bg-[#19191c] text-white relative overflow-hidden py-4 md:py-6">
      {/* Background Image */}
      {/* <div className="absolute left-[3%] lg:left-[5%] top-[10%] w-[12%] lg:w-[15%] aspect-square rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl opacity-40 md:opacity-100 z-0 rotate-12 parallax-layer" data-speed="0.1">
        <Image src="/images/night-bg.webp" alt="Service Element 1" fill sizes="100vw" className="object-cover" />
      </div> */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Image
          src="/images/night-bg.webp"
          alt="Services Background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#19191c]/80" />
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16" data-reveal="stagger">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#fecbc3] text-[#ee0000] font-bold text-sm tracking-wide mb-4 border border-[#00a3e0]/20">
            <span className="w-2 h-2 rounded-full bg-[#ee0000]"></span>
           Services
          </div>
          <h2 className="text-[clamp(40px,5vw,56px)] font-extrabold font-heading tracking-tight" data-reveal="text">
            Shed Construction
          </h2>
        </div>

        {/* Tabs Section */}
        <div 
          className="relative mb-12 md:mb-20 md:border-b-2 md:border-white/10" 
          data-reveal="stagger"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-4 md:flex md:flex-nowrap md:justify-center items-center gap-0 md:gap-6 lg:gap-12 w-full max-w-[1100px] mx-auto">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              const Icon = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => { setActiveIndex(index); setIsPaused(true); }}
                  className={`relative w-full flex flex-col md:flex-row items-center gap-1 md:gap-2 py-2 px-1 md:pb-6 md:pt-2 md:px-4 lg:px-6 transition-all duration-300 font-bold text-[10px] sm:text-xs md:text-base md:border-b-2 md:-mb-[2px] justify-center flex-shrink-0 rounded-xl md:rounded-none
                    ${isActive 
                      ? "bg-[#ee0000]/20 text-[#ff4444] md:text-[#ee0000] md:bg-transparent border border-[#ee0000]/50 md:border-transparent md:border-b-[#ee0000]" 
                      : "bg-white/5 text-slate-300 hover:text-white border border-white/5 md:bg-transparent md:border-transparent"}`}
                >
                  <Icon size={14} className={`md:w-[18px] md:h-[18px] ${isActive ? "text-[#ff4444] md:text-[#ee0000]" : "text-slate-400"}`} />
                  <span className="text-center leading-tight">{service.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-stretch">

          {/* Left: Text Content */}
          <div data-reveal="stagger" className="flex flex-col items-start text-left max-w-[600px]">
            <h3 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold mb-2 font-heading leading-tight tracking-tight">{activeService.title}</h3>
            <p className="text-slate-300 leading-[1.8] mb-10 text-base md:text-lg">
              {activeService.desc}
            </p>

            

            <button
              onClick={openQuoteModal}
              className="bg-[#ee0000] hover:bg-[#cc0000] text-white font-bold py-4 px-10 rounded-full transition-colors duration-300 shadow-[0_8px_25px_rgba(238,0,0,0.3)] text-base md:text-lg"
            >
              Request a Quote
            </button>
          </div>

          {/* Right: Clean Image */}
          <div className="relative h-full min-h-[400px] w-full group" data-reveal="image">
            <div className="shiny-hover relative z-10 w-full h-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden rounded-3xl border-10 border-white/20 backdrop-blur-md transition-all duration-500 group-hover:border-white/40 group-hover:shadow-[0_20px_60px_rgba(255,255,255,0.1)]">
              <Image
                src={activeService.image}
                alt={activeService.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
