"use client";
import { openQuoteModal } from "@/components/QuoteModal";
import React from "react";
import Image from "next/image";

export default function CTASection() {
  return (
    <section id="contact" className="bg-[#e2e8f0] py-4 md:py-6">
      <div className="max-w-[1400px] w-full mx-auto px-6">
        <div className="bg-gradient-to-br from-[#19191c] to-[#0a0a0f] border border-white/5 rounded-[2.5rem] relative overflow-hidden flex flex-col md:flex-row items-center min-h-[460px] shadow-2xl">

          {/* Left Content (Text & Buttons) */}
          <div className="relative z-10 p-10 md:p-14 lg:p-20 md:w-[55%] flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5 font-heading tracking-tight drop-shadow-sm">
              Planning a shed for your farm, factory, or home?
            </h2>
            <p className="text-white/95 text-base md:text-lg leading-relaxed mb-10 max-w-[500px] font-medium drop-shadow-sm">
              Talk to India&apos;s award-winning roofing shed contractors &mdash; get a free site visit and a transparent quote within 24 hours.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <button id="ctasection-button-8" onClick={() => openQuoteModal()}
                className="bg-white text-[#19191c] font-bold text-sm md:text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-gray-200 hover:scale-105 shadow-xl"
              >
                Get Free Quote
              </button>
              <a id="ctasection-a-9" href="https://wa.me/919788770786"
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-white font-bold text-sm md:text-base px-8 py-3.5 rounded-full transition-all duration-300 hover:bg-[#20bd5a] hover:scale-105 shadow-xl no-underline"
              >
                Chat on WhatsApp
              </a>
              <a id="ctasection-a-10" href="tel:+919788770786"
                className="bg-transparent text-white border-2 border-white font-bold text-sm md:text-base px-8 py-3 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 no-underline"
              >
                Call Now
              </a>
            </div>

            <p className="text-white/80 text-xs md:text-sm font-medium tracking-wide">
              * 50% advance to start &mdash; no hidden costs. Projects completed in as little as 6 days.
            </p>
          </div>

          {/* Right Image (Clear and visible) */}
          <div className="relative w-full md:w-[45%] h-[300px] md:h-[500px] md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 overflow-hidden shadow-[-20px_0_50px_rgba(0,0,0,0.15)] md:rounded-l-[4rem]">
            <Image
              src="/images/services/factory5.webp"
              alt="Garment factory shed interior with rows of sewing workstations"
              fill
              className="object-cover object-center transition-transform duration-1000 hover:scale-110"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
