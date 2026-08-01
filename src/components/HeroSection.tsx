"use client";
import { openQuoteModal } from "@/components/QuoteModal";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const backgroundImages = [
  "/kpnroofingshed/images/morning-bg.png",
  "/kpnroofingshed/images/night-bg.png",
  "/kpnroofingshed/images/service-bg.png"
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      
      {/* Background Slider */}
      {backgroundImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img}
            alt={`KPN Roofing Shed Background ${index + 1}`}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-black/20 z-10" />

      {/* Content Container */}
      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-20" data-reveal="stagger">
        
        <div className="max-w-[700px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#ffcc00] animate-pulse" />
            <span className="text-white text-sm font-black tracking-widest uppercase">PAN INDIA EXPERTISE</span>
          </div>

          {/* Heading (Smaller Size) */}
          <h1 
            className="text-white text-4xl font-bold leading-[1.1] tracking-tight font-heading drop-shadow-xl mb-4"
          >
            India&apos;s Trusted Roofing Shed Construction Company for Industrial, Agricultural & Home Projects
          </h1>

          {/* Paragraph */}
          <p className="text-white text-md md:text-md leading-relaxed max-w-[600px] mb-6 font-medium drop-shadow-lg">
            KPN Roofing Shed designs and builds steel roofing sheds for industrial, agricultural, home, and recreational projects across India, using Apollo-brand steel and an in-house, Coimbatore-manufactured flooring line backed by a 10-year guarantee.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button 
              onClick={() => openQuoteModal()}
              className="bg-[#ee0000] hover:bg-[#cc0000] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 group shadow-xl"
            >
              Get Free Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://wa.me/911234567890" 
              target="_blank"
              rel="noreferrer"
              className="bg-transparent border border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              Chat on WhatsApp
            </a>
          </div>

         
          

        </div>
      </div>
    </section>
  );
}