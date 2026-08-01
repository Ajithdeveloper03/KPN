"use client";
import { openQuoteModal } from "@/components/QuoteModal";
import React from "react";
import Image from "next/image";

export default function CTASection() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-[1400px] w-full mx-auto px-6">
        <div className="bg-[#ee0000] rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center min-h-[420px] shadow-2xl">

          {/* Concentric Circles Background (Right Side) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none z-0">
            <div className="w-[600px] h-[600px] rounded-full border-[40px] border-[#f22020] opacity-80 flex items-center justify-center">
              <div className="w-[450px] h-[450px] rounded-full border-[40px] border-[#f22020] opacity-80 flex items-center justify-center">
                <div className="w-[300px] h-[300px] rounded-full bg-[#f22020] opacity-80" />
              </div>
            </div>
          </div>

          {/* Left Content (Text & Buttons) */}
          <div className="relative z-10 p-10 md:p-16 md:w-[60%] flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 font-heading tracking-tight">
              Get in Touch with Our Roofing Experts Today
            </h2>
            <p className="text-white/90 text-base md:text-lg leading-relaxed mb-10 max-w-[500px]">
              Ready to protect your home with a strong, reliable roof? Whether you&apos;re in need of a complete roof replacement.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => openQuoteModal()}
                className="bg-white text-[#ee0000] font-bold text-sm px-8 py-3.5 rounded transition-all duration-300 hover:bg-gray-100"
              >
                START YOUR JOURNEY
              </button>
              <button
                onClick={() => openQuoteModal()}
                className="bg-transparent text-white border border-white font-bold text-sm px-8 py-3.5 rounded transition-all duration-300 hover:bg-white/10"
              >
                CONTACT US
              </button>
            </div>
          </div>

          {/* Floating Image (Right side) */}
          <div className="absolute right-[-10%] bottom-[-10%] w-[50%] h-[120%] opacity-20 hidden md:block mix-blend-overlay pointer-events-none">
            <Image
              src="/kpnroofingshed/images/morning-bg.png"
              alt="CTA Background Texture"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center [clip-path:polygon(20%_0%,100%_0%,100%_100%,0%_100%)]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
