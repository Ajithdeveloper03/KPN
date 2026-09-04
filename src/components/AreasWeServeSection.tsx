"use client";
import { openQuoteModal } from "@/components/QuoteModal";
import React from "react";
import Image from "next/image";

export default function AreasWeServeSection() {
  return (
    <section className="bg-[#eef2f6] py-4 md:py-6">
      <div className="max-w-[1400px] w-full mx-auto px-6">
        <div className="text-center mb-14" data-reveal="stagger">
          <span className="inline-block px-5 py-1.5 rounded-full bg-[rgba(0,163,224,0.1)] text-[#00a3e0] border border-[rgba(0,163,224,0.3)] font-bold text-sm">
            Geographic Coverage
          </span>
          <div className="overflow-hidden mt-4 mb-4">
            <h2 className="text-[clamp(36px,5vw,52px)] font-extrabold text-[#1e2229] tracking-tight" data-reveal="text">
              Areas We Serve Across India
            </h2>
          </div>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            KPN Roofing Shed delivers projects across Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, Telangana, Maharashtra, and pan-India — bringing the same in-house engineering, materials, and installation standard to every state we work in.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-stretch">
          <div className="relative w-full h-[280px] sm:h-[350px] lg:h-full min-h-[350px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1" data-reveal="image">
            <Image
              src="/images/services/factory3.webp"
              alt="Interior of a warehouse shed with a truck parked for loading"
              style={{ objectFit: "cover" }}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,75,135,0.6)] to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="font-extrabold text-2xl">Pan-India</div>
              <div className="text-white/80 font-medium">Project delivery & installation</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex flex-wrap gap-3">
              {["Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh", "Telangana", "Maharashtra", "Uttar Pradesh", "Pan-India"].map((r) => (
                <span
                  key={r}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full border font-bold text-base md:text-lg transition-colors duration-200 ${
                    r === "Pan-India"
                      ? "bg-gradient-to-br from-[#062088] to-[#004b87] border-[#062088] text-white shadow-md hover:opacity-90"
                      : "bg-gradient-to-br from-slate-50 to-slate-200 border-slate-300 text-[#1e2229] hover:border-[#004b87] hover:text-[#004b87]"
                  }`}
                >
                  {r}
                </span>
              ))}
            </div>
            <p className="mt-8 text-slate-500 text-base leading-relaxed font-medium">
              From Tamil Nadu to Maharashtra — our in-house engineers and installation crew travel to your site. Same quality, same accountability, every state.
            </p>
            <button id="areasweservesection-button-6" onClick={() => openQuoteModal()}
              className="mt-7 bg-[#ee0000] hover:bg-[#cc0000] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-[0_10px_25px_rgba(249,92,25,0.3)]"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
