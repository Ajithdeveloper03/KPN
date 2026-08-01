"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about-us" className="relative py-12 md:py-16 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white" />
      </div>

      {/* Desktop Exact Placement Layout */}
      <div className="hidden lg:block relative w-full max-w-[1600px] mx-auto min-h-[700px] xl:min-h-[800px] z-10">
        
        {/* Img 1: Far Left (Lowest) */}
        <div data-reveal="image" className="absolute left-[1%] top-[45%] w-[15%] aspect-[3/4] rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-500">
          <Image src="/kpnroofingshed/images/image1.png" fill sizes="250px" alt="About 1" className="object-cover" />
        </div>

        {/* Img 2: Mid Left (Higher, Taller) */}
        <div data-reveal="image" className="absolute left-[17.5%] top-[10%] w-[15%] aspect-[4/5] rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-500">
          <Image src="/kpnroofingshed/images/image2.png" fill sizes="250px" alt="About 2" className="object-cover" />
        </div>

        {/* Img 3: Center Left (Highest) */}
        <div data-reveal="image" className="absolute left-[34%] top-[3%] w-[15%] aspect-square rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-500">
          <Image src="/kpnroofingshed/images/morning-bg.png" fill sizes="250px" alt="About 3" className="object-cover" />
        </div>

        {/* Img 4: Center Right (Highest) */}
        <div data-reveal="image" className="absolute right-[34%] top-[3%] w-[15%] aspect-square rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden shadow-2xl hover:-translate-y-2 transition-transform duration-500">
          <Image src="/kpnroofingshed/images/night-bg.png" fill sizes="250px" alt="About 4" className="object-cover" />
        </div>

        {/* Img 5: Mid Right (Higher, Taller) */}
        <div data-reveal="image" className="absolute right-[17.5%] top-[10%] w-[15%] aspect-[4/5] rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden shadow-xl hover:-translate-y-2 transition-transform duration-500">
          <Image src="/kpnroofingshed/images/service-bg.png" fill sizes="250px" alt="About 5" className="object-cover" />
        </div>

        {/* Img 6: Far Right (Lowest) */}
        <div data-reveal="image" className="absolute right-[1%] top-[45%] w-[15%] aspect-[3/4] rounded-[2rem] xl:rounded-[2.5rem] overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-500">
          <Image src="/kpnroofingshed/images/image1.png" fill sizes="250px" alt="About 6" className="object-cover" />
        </div>

        {/* Central Text Content */}
        <div className="absolute left-1/2 top-[45%] -translate-x-1/2 flex flex-col items-center text-center w-full max-w-[850px] px-6" data-reveal="stagger">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f0f2fa] border border-[#d1d7ee] text-[#062088] font-bold text-sm md:text-base mb-8 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#062088]"></span>
            About KPN Roofing
          </div>

          <div className="mb-10 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl xl:text-4xl font-extrabold text-[#1e2229] leading-[1.3] tracking-tight" data-reveal="text">
              India's Trusted Roofing Shed Construction Company for <span className="text-[#062088]">Industrial, Agricultural & Home Projects</span>
            </h2>
            <p className="text-base md:text-md text-slate-600 font-medium leading-relaxed max-w-[750px] mx-auto" data-reveal="text">
              KPN Roofing Shed designs and builds steel roofing sheds for industrial, agricultural, home, and recreational projects across India, using Apollo-brand steel and an in-house, Coimbatore-manufactured flooring line backed by a <strong className="text-[#1e2229] font-bold">10-year guarantee</strong>.
            </p>
          </div>

          <button className="bg-[#062088] hover:bg-[#041662] text-white font-bold py-3 pl-8 pr-3 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(6,32,136,0.2)] flex items-center gap-3 group text-lg">
            More About Us
            <div className="bg-white text-[#062088] w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Layout */}
      <div className="lg:hidden relative w-full flex flex-col items-center z-10 px-6">
        
        {/* Central Text Content for Mobile */}
        <div className="flex flex-col items-center text-center w-full max-w-[850px] mb-12" data-reveal="stagger">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#f0f2fa] border border-[#d1d7ee] text-[#062088] font-bold text-sm md:text-base mb-6 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#062088]"></span>
            About KPN Roofing
          </div>

          <div className="mb-8 flex flex-col gap-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1e2229] leading-[1.3] tracking-tight" data-reveal="text">
              India's Trusted Roofing Shed Construction Company for <span className="text-[#062088]">Industrial, Agricultural & Home Projects</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed" data-reveal="text">
              KPN Roofing Shed designs and builds steel roofing sheds for industrial, agricultural, home, and recreational projects across India, using Apollo-brand steel and an in-house, Coimbatore-manufactured flooring line backed by a <strong className="text-[#1e2229] font-bold">10-year guarantee</strong>.
            </p>
          </div>

          <button className="bg-[#062088] hover:bg-[#041662] text-white font-bold py-3 pl-8 pr-3 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(6,32,136,0.2)] flex items-center gap-3 group text-lg">
            More About Us
            <div className="bg-white text-[#062088] w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <ArrowUpRight size={20} strokeWidth={2.5} />
            </div>
          </button>
        </div>

        {/* Mobile Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full" data-reveal="stagger">
          {[
            "/kpnroofingshed/images/image1.png",
            "/kpnroofingshed/images/image2.png",
            "/kpnroofingshed/images/morning-bg.png",
            "/kpnroofingshed/images/night-bg.png",
            "/kpnroofingshed/images/service-bg.png",
            "/kpnroofingshed/images/image1.png"
          ].map((src, idx) => (
            <div key={idx} data-reveal="image" className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 transition-transform">
              <Image src={src} sizes="(max-width: 768px) 50vw, 33vw" alt={`About KPN ${idx}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
