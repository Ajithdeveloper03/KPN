"use client";
import React from "react";
import Image from "next/image";

export default function AreasWeServeSection({ setIsModalOpen }: { setIsModalOpen: (val: boolean) => void }) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1400px] w-full mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block px-5 py-1.5 rounded-full bg-[rgba(0,163,224,0.1)] text-[#00a3e0] border border-[rgba(0,163,224,0.3)] font-bold text-sm">
            Geographic Coverage
          </span>
          <h2 className="text-[clamp(36px,5vw,52px)] font-extrabold text-[#1e2229] tracking-tight mt-4 mb-4">
            Areas We Serve Across India
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            KPN Roofing Shed delivers projects across Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, Telangana, Maharashtra, and pan-India — bringing the same in-house engineering, materials, and installation standard to every state we work in.
          </p>
        </div>

        <div className="grid grid-cols-[1.2fr_1fr] gap-16 items-center">
          <div className="relative h-[380px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <Image
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200"
              alt="KPN Roofing Shed pan-India delivery areas — steel shed construction across India"
              style={{ objectFit: "cover" }}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,75,135,0.6)] to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="font-extrabold text-2xl">Pan-India</div>
              <div className="text-white/80 font-medium">Project delivery & installation</div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-3">
              {["Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh", "Telangana", "Maharashtra", "Pan-India Delivery"].map((r) => (
                <span
                  key={r}
                  className="px-6 py-3 rounded-full bg-gradient-to-br from-slate-50 to-slate-200 border border-slate-300 font-bold text-[#1e2229] text-sm hover:border-[#004b87] hover:text-[#004b87] transition-colors duration-200"
                >
                  {r}
                </span>
              ))}
            </div>
            <p className="mt-8 text-slate-500 leading-relaxed font-medium">
              From Tamil Nadu to Maharashtra — our in-house engineers and installation crew travel to your site. Same quality, same accountability, every state.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-7 bg-[#f95c19] hover:bg-[#e04c10] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-[0_10px_25px_rgba(249,92,25,0.3)]"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
