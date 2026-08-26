"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X, ZoomIn, ZoomOut } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const handleClose = () => {
    setSelectedImage(null);
    setZoom(1);
  };

  return (
    <section id="about-us" className="relative overflow-hidden bg-slate-50 py-4 md:py-6">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white" />
      </div>

      {/* Desktop Exact Placement Layout */}
      <div className="hidden lg:block relative w-full max-w-[1600px] mx-auto min-h-[700px] xl:min-h-[800px] z-10">
        <div onClick={() => setSelectedImage("/images/factory.webp")} data-reveal="image" className="absolute left-[1%] top-[45%] w-[15%] aspect-[3/4] rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden shiny-hover hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
          <Image src="/images/factory.webp" fill sizes="250px" alt="About 1" className="object-cover" />
        </div>
        <div onClick={() => setSelectedImage("/images/goat1.webp")} data-reveal="image" className="absolute left-[17.5%] top-[10%] w-[15%] aspect-[4/5] rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden shiny-hover hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
          <Image src="/images/goat1.webp" fill sizes="250px" alt="About 2" className="object-cover" />
        </div>
        <div onClick={() => setSelectedImage("/images/terrace.webp")} data-reveal="image" className="absolute left-[34%] top-[3%] w-[15%] aspect-square rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden shiny-hover hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
          <Image src="/images/terrace.webp" fill sizes="250px" alt="About 3" className="object-cover" />
        </div>
        <div onClick={() => setSelectedImage("/images/animal1.webp")} data-reveal="image" className="absolute right-[34%] top-[3%] w-[15%] aspect-square rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden shiny-hover hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
          <Image src="/images/animal1.webp" fill sizes="250px" alt="About 4" className="object-cover" />
        </div>
        <div onClick={() => setSelectedImage("/images/goat3.webp")} data-reveal="image" className="absolute right-[17.5%] top-[10%] w-[15%] aspect-[4/5] rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden shiny-hover hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
          <Image src="/images/goat3.webp" fill sizes="250px" alt="About 5" className="object-cover" />
        </div>
        <div onClick={() => setSelectedImage("/images/mate1.webp")} data-reveal="image" className="absolute right-[1%] top-[45%] w-[15%] aspect-[3/4] rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden shiny-hover hover:-translate-y-2 transition-transform duration-500 cursor-pointer">
          <Image src="/images/mate1.webp" fill sizes="250px" alt="About 6" className="object-cover" />
        </div>

        {/* Central Text Content */}
        <div className="absolute left-1/2 top-[45%] -translate-x-1/2 flex flex-col items-center text-center w-full max-w-[900px] px-2" data-reveal="stagger">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f0f2fa] border border-[#d1d7ee] text-[#062088] font-bold text-sm md:text-base mb-4 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#062088]"></span>
            About KPN Roofing
          </div>

          <div className="mb-5 flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl xl:text-4xl text-start  font-extrabold text-[#1e2229] leading-[1.3] tracking-tight" data-reveal="text">
              India&apos;s Trusted Roofing Shed Construction Company for <span className="text-[#062088]">Industrial, Agricultural & Home Projects</span>
            </h1>
            <p className="text-base md:text-md text-slate-600 text-justify font-medium leading-relaxed max-w-[750px] mx-auto" data-reveal="text">
              KPN Roofing Shed designs and builds steel roofing sheds for industrial, agricultural, home, and recreational projects across India, using Apollo-brand steel and an in-house, Coimbatore-manufactured flooring line backed by a <strong className="text-[#1e2229] font-bold">10-year guarantee</strong>.
            </p>
          </div>

          <Link href="/about-us" className="inline-flex bg-[#062088] hover:bg-[#041662] text-white font-bold py-3 pl-8 pr-3 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(6,32,136,0.2)] items-center gap-3 group text-lg">
            More About Us
            <div className="bg-white text-[#062088] w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile / Tablet Layout */}
      <div className="lg:hidden relative w-full flex flex-col items-start z-10 px-6 mt-4">
        <div className="flex flex-col items-start md:items-center text-left md:text-center w-full max-w-[850px] mb-12" data-reveal="stagger">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f0f2fa] border border-[#d1d7ee] text-[#062088] font-bold text-sm md:text-base mb-6 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#062088]"></span>
            About KPN Roofing
          </div>

          <div className="mb-8 flex flex-col gap-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e2229] leading-[1.3] tracking-tight text-left md:text-center" data-reveal="text">
              India&apos;s Trusted Roofing Shed Construction Company for <span className="text-[#062088]">Industrial, Agricultural & Home Projects</span>
            </h2>
            <p className="text-sm sm:text-base text-justify md:text-center text-slate-600 font-medium leading-relaxed" data-reveal="text">
              KPN Roofing Shed designs and builds steel roofing sheds for industrial, agricultural, home, and recreational projects across India, using Apollo-brand steel and an in-house, Coimbatore-manufactured flooring line backed by a <strong className="text-[#1e2229] font-bold">10-year guarantee</strong>.
            </p>
          </div>

          <Link href="/about-us" className="inline-flex self-start md:self-center bg-[#062088] hover:bg-[#041662] text-white font-bold py-3 pl-8 pr-3 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(6,32,136,0.2)] items-center gap-3 group text-lg">
            More About Us
            <div className="bg-white text-[#062088] w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </div>
          </Link>
        </div>

        {/* Mobile Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full" data-reveal="stagger">
          {[
            "/images/services/factory1.webp",
            "/images/services/poultry.webp",
            "/images/services/cricket-image-1.webp",
            "/images/animal1.webp",
            "/images/goat1.webp",
            "/images/factory.webp"
          ].map((src, idx) => (
            <div key={idx} onClick={() => setSelectedImage(src)} data-reveal="image" className="relative aspect-square rounded-2xl overflow-hidden shiny-hover cursor-pointer">
              <Image src={src} sizes="(max-width: 768px) 50vw, 33vw" alt={`About KPN ${idx}`} fill className="object-cover transition-transform duration-700 hover:scale-110" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={handleClose}
        >
          <button 
            className="absolute top-4 right-4 text-white z-[60] bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); handleClose(); }}
          >
            <X size={24} />
          </button>
          
          <div className="absolute bottom-6 flex gap-4 z-[60]">
            <button 
              className="text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); setZoom(z => Math.max(0.5, z - 0.25)); }}
            >
              <ZoomOut size={24} />
            </button>
            <button 
              className="text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); setZoom(z => Math.min(3, z + 0.25)); }}
            >
              <ZoomIn size={24} />
            </button>
          </div>

          <div 
            className="relative w-full h-full flex items-center justify-center overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s ease-out' }} 
              className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            >
              <img 
                src={selectedImage} 
                alt="Zoomed" 
                className="max-w-full max-h-[90vh] object-contain rounded-xl select-none" 
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}