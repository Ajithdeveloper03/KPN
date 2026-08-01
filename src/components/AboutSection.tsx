"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about-us" className="relative pt-24 pb-12 overflow-hidden">
      {/* Roofing background — image2 with very light overlay */}
      <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url(/kpnroofingshed/images/image2.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-[#fcfdfd]/94" />
      </div>
      <div className="max-w-[1400px] w-full mx-auto relative flex flex-col items-center justify-center z-10">
        
        {/* Arch Image Gallery (Desktop) */}
        <div className="hidden lg:flex justify-center items-start gap-5 xl:gap-8 w-full px-6 pt-12 pb-4 relative z-10" data-reveal="stagger">
          
          {/* Img 1: Far Left (Lowest) */}
          <div className="relative w-[15%] aspect-square rounded-[2rem] overflow-hidden shadow-lg mt-32 hover:-translate-y-2 transition-transform duration-500">
            <Image src="/kpnroofingshed/images/image1.png" fill sizes="250px" alt="About 1" className="object-cover" />
          </div>

          {/* Img 2: Mid Left (Higher) */}
          <div className="relative w-[16%] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl mt-12 hover:-translate-y-2 transition-transform duration-500">
            <Image src="/kpnroofingshed/images/image2.png" fill sizes="250px" alt="About 2" className="object-cover" />
          </div>

          {/* Img 3: Center Left (Highest) */}
          <div className="relative w-[15%] aspect-square rounded-[2rem] overflow-hidden shadow-2xl mt-0 hover:-translate-y-2 transition-transform duration-500">
            <Image src="/kpnroofingshed/images/morning-bg.png" fill sizes="250px" alt="About 3" className="object-cover" />
          </div>

          {/* Img 4: Center Right (Highest) */}
          <div className="relative w-[16%] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl mt-0 hover:-translate-y-2 transition-transform duration-500">
            <Image src="/kpnroofingshed/images/night-bg.png" fill sizes="250px" alt="About 4" className="object-cover" />
          </div>

          {/* Img 5: Mid Right (Higher) */}
          <div className="relative w-[15%] aspect-square rounded-[2rem] overflow-hidden shadow-xl mt-12 hover:-translate-y-2 transition-transform duration-500">
            <Image src="/kpnroofingshed/images/service-bg.png" fill sizes="250px" alt="About 5" className="object-cover" />
          </div>

          {/* Img 6: Far Right (Lowest) */}
          <div className="relative w-[15%] aspect-square rounded-[2rem] overflow-hidden shadow-lg mt-32 hover:-translate-y-2 transition-transform duration-500">
            <Image src="/kpnroofingshed/images/image1.png" fill sizes="250px" alt="About 6" className="object-cover" />
          </div>

        </div>

        {/* Central Text Content */}
        <div className="relative z-20 flex flex-col items-center text-center max-w-[850px] mx-auto mt-12 lg:mt-[-40px] px-6" data-reveal="stagger">
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f2f9ec] border border-[#d3eabf] text-[#5b8738] font-semibold text-sm md:text-base mb-8 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#82b85a]"></span>
            About KPN Roofing
          </div>

          <div className="overflow-hidden mb-10">
            <h2 className="text-4xl font-bold text-[#1e2229] leading-[1.4] tracking-medium" data-reveal="text">
              At KPN Roofing Shed, we believe that strength and durability begin at the source. Our manufacturing is built on the values of transparency, precision, and excellence.
            </h2>
          </div>

          <button className="bg-[#82b85a] hover:bg-[#6c9c48] text-white font-bold py-2.5 pl-6 pr-2.5 rounded-full transition-all duration-300 shadow-xl flex items-center gap-3 group">
            More About Us
            <div className="bg-white text-[#1e2229] w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </div>
          </button>
        </div>

        {/* Mobile Image Grid (Hidden on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-16 w-full px-6 lg:hidden" data-reveal="stagger">
          {[
            "/kpnroofingshed/images/image1.png",
            "/kpnroofingshed/images/image2.png",
            "/kpnroofingshed/images/morning-bg.png",
            "/kpnroofingshed/images/night-bg.png",
            "/kpnroofingshed/images/service-bg.png",
            "/kpnroofingshed/images/image1.png"
          ].map((src, idx) => (
            <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image src={src} sizes="(max-width: 768px) 50vw, 33vw" alt={`About KPN ${idx}`} fill className="object-cover" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
