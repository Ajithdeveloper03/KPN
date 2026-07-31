"use client";

import React from "react";
import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Who You Deal With",
    kpnTitle: "Directly with KPN",
    kpnSub: "No middlemen or brokers",
    marketTitle: "Dealers & Brokers",
    marketSub: "Multiple parties involved",
  },
  {
    feature: "Structural Design",
    kpnTitle: "In-house Engineers",
    kpnSub: "Custom designs for your site",
    marketTitle: "Outsourced",
    marketSub: "Generic structural templates",
  },
  {
    feature: "Installation Team",
    kpnTitle: "KPN's Own Crew",
    kpnSub: "Full accountability end-to-end",
    marketTitle: "Subcontractors",
    marketSub: "Different crew per phase",
  },
  {
    feature: "Pricing",
    kpnTitle: "Transparent & Itemized",
    kpnSub: "Zero hidden charges",
    marketTitle: "Vague Estimates",
    marketSub: "Hidden costs emerge later",
  },
  {
    feature: "After-Sales",
    kpnTitle: "10-Year Guarantee",
    kpnSub: "3-year flooring warranty",
    marketTitle: "Varies Wildly",
    marketSub: "Little to no formal support",
  },
];

export default function ComparisonSection() {
  return (
    <section id="comparison" className="bg-[#f0f2f5] py-24">
      <div className="max-w-[1400px] w-full mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e2229] tracking-tight font-heading">
            Why KPN Stands Out
          </h2>
        </div>

        {/* The Comparison Table Container */}
        <div className="relative mt-20 max-w-[900px] mx-auto">

          {/* Main Dark Background Box */}
          <div className="bg-[#424250] rounded-3xl w-full py-8 md:py-12 relative shadow-2xl">

            {/* The Highlighted Orange Pillar for KPN (Absolute) */}
            {/* Exactly matches the 40% middle column */}
            <div className="absolute top-[-20px] bottom-[-20px] left-[25%] w-[40%] bg-gradient-to-b from-[#ff8c42] to-[#e64a19] rounded-2xl shadow-[0_10px_30px_rgba(230,74,25,0.4)] z-0 pointer-events-none" />

            <div className="relative z-10 w-full">

              {/* Header Row */}
              <div className="grid grid-cols-[25%_40%_35%] items-center mb-6">
                <div className="text-transparent px-4">Feature</div>
                <div className="text-center px-2">
                  <h3 className="text-white text-xl md:text-3xl font-bold font-heading">KPN Roofing</h3>
                </div>
                <div className="text-center px-2">
                  <h3 className="text-white/90 text-lg md:text-xl font-bold font-heading">Other Brands</h3>
                </div>
              </div>

              {/* Data Rows */}
              <div className="flex flex-col">
                {comparisonData.map((row, idx) => (
                  <div
                    key={idx}
                    className={`grid grid-cols-[25%_40%_35%] items-center py-6 ${idx !== comparisonData.length - 1 ? "border-b border-white/10" : ""
                      }`}
                  >

                    {/* Column 1: Feature Label */}
                    <div className="text-white/80 font-semibold text-sm md:text-lg px-4 md:px-6 text-right leading-snug">
                      {row.feature}
                    </div>

                    {/* Column 2: KPN (Highlighted) */}
                    <div className="flex items-center gap-3 md:gap-4 px-2 md:px-8">
                      <div className="shrink-0 flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-white text-white">
                        <Check size={18} strokeWidth={3} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white font-bold text-sm md:text-xl leading-snug mb-1">
                          {row.kpnTitle}
                        </span>
                        <span className="text-white/90 text-xs md:text-sm font-medium leading-snug">
                          {row.kpnSub}
                        </span>
                      </div>
                    </div>

                    {/* Column 3: Other Brands */}
                    <div className="flex items-center gap-3 md:gap-4 px-2 md:px-8 opacity-80">
                      <div className="shrink-0 flex items-center justify-center w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-white/50 text-white">
                        <X size={18} strokeWidth={2} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white font-semibold text-sm md:text-lg leading-snug mb-1">
                          {row.marketTitle}
                        </span>
                        <span className="text-white/60 text-xs md:text-sm leading-snug">
                          {row.marketSub}
                        </span>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
