"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, X, Building2, HardHat, FileText, Wrench, ShieldCheck, ArrowRight } from "lucide-react";

export default function ComparisonSection() {
  const [activeTab, setActiveTab] = useState(0);

  const comparisonData = [
    { 
      label: "Who You Deal With", 
      icon: Building2,
      image: "/kpnroofingshed/images/image1.png",
      kpn: "Directly with KPN", 
      kpnDesc: "Enjoy clear communication, direct accountability, and absolutely no middleman margins.",
      other: "Often through a dealer/broker",
      otherDesc: "You might face miscommunication, delayed responses, and hidden broker fees."
    },
    { 
      label: "Structural Design", 
      icon: FileText,
      image: "/kpnroofingshed/images/image2.png",
      kpn: "In-house engineers", 
      kpnDesc: "Our qualified engineers create custom designs tailored to your specific load and wind requirements.",
      other: "Frequently outsourced",
      otherDesc: "Generic templates are often used, which may not suit your exact location or needs."
    },
    { 
      label: "Installation Team", 
      icon: HardHat,
      image: "/kpnroofingshed/images/service-bg.png",
      kpn: "KPN's own crew", 
      kpnDesc: "Trained professionals who know our products inside out ensure a flawless installation.",
      other: "Subcontracted labour",
      otherDesc: "Inexperienced daily-wage workers often lead to poor finishing and delays."
    },
    { 
      label: "Pricing & Quotes", 
      icon: Check,
      image: "/kpnroofingshed/images/morning-bg.png",
      kpn: "Itemized, transparent quote", 
      kpnDesc: "You see exactly what you pay for. No hidden fees or sudden mid-project price hikes.",
      other: "Varies by contractor",
      otherDesc: "Vague estimates usually result in unexpected extra costs as the project progresses."
    },
    { 
      label: "After-Sales Support", 
      icon: ShieldCheck,
      image: "/kpnroofingshed/images/night-bg.png",
      kpn: "Warranty-backed repair", 
      kpnDesc: "We provide comprehensive warranties and are always just a call away for maintenance.",
      other: "Varies by provider",
      otherDesc: "Once the payment is cleared, getting them back for repairs is often a struggle."
    }
  ];

  const activeData = comparisonData[activeTab];

  return (
    <section id="comparison" className="relative bg-[#f8f9fa] py-12 md:py-16 overflow-hidden">
      <div className="max-w-[1300px] w-full mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20" data-reveal="stagger">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full font-bold text-sm tracking-wide mb-4 border bg-orange-100 text-orange-600 border-orange-200">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            Comparison
          </div>
          <h2 className="text-[clamp(32px,4vw,44px)] font-bold text-[#1e2229] tracking-tight font-heading leading-snug">
            Why KPN Roofing is the <span className="text-orange-600">Smart Choice</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12" data-reveal="stagger">
          
          {/* Left Side - Vertical Tabs */}
          <div className="w-full lg:w-[380px] flex flex-col gap-3 shrink-0">
            {comparisonData.map((item, idx) => {
              const isActive = activeTab === idx;
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-4 w-full p-5 rounded-2xl transition-all duration-300 text-left border ${
                    isActive 
                      ? "bg-orange-600 text-white border-orange-600 shadow-[0_10px_30px_rgba(234,88,12,0.3)] scale-105 z-10" 
                      : "bg-white text-slate-600 border-slate-100 shadow-sm hover:bg-slate-50 hover:border-slate-200 hover:text-slate-900"
                  }`}
                >
                  <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center transition-colors ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-400"
                  }`}>
                    <Icon size={22} strokeWidth={2.5} />
                  </div>
                  <span className={`font-bold text-lg ${isActive ? "text-white" : ""}`}>
                    {item.label}
                  </span>
                  {isActive && (
                    <ArrowRight className="ml-auto opacity-70" size={20} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Side - Content & Image Display */}
          <div className="flex-1 flex flex-col relative min-h-[500px]">
            {/* Image Container */}
            <div className="relative w-full h-[300px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl mb-6 lg:mb-0 bg-slate-200">
              <Image 
                src={activeData.image} 
                alt={activeData.label}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
              <div className="absolute top-8 left-8 text-white">
                <h3 className="text-3xl font-black drop-shadow-md">{activeData.label}</h3>
              </div>
            </div>

            {/* Comparison Cards (Overlapping on Desktop) */}
            <div className="lg:absolute lg:-bottom-12 lg:left-8 lg:right-8 flex flex-col sm:flex-row gap-4">
              
              {/* KPN Card */}
              <div className="flex-1 bg-white rounded-2xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.1)] border-t-4 border-orange-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 text-orange-500 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={64} />
                </div>
                <div className="flex items-center gap-3 mb-3 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <Check size={18} strokeWidth={4} />
                  </div>
                  <span className="font-extrabold text-[#1e2229] text-xl">KPN Roofing</span>
                </div>
                <h4 className="font-bold text-orange-600 text-lg mb-2 relative z-10">{activeData.kpn}</h4>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">{activeData.kpnDesc}</p>
              </div>

              {/* Competitors Card */}
              <div className="flex-1 bg-slate-100 rounded-2xl p-6 shadow-sm border-t-4 border-slate-300 relative overflow-hidden">
                <div className="flex items-center gap-3 mb-3 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
                    <X size={18} strokeWidth={4} />
                  </div>
                  <span className="font-bold text-slate-500 text-xl">Local Contractors</span>
                </div>
                <h4 className="font-bold text-slate-700 text-lg mb-2 relative z-10">{activeData.other}</h4>
                <p className="text-slate-400 text-sm leading-relaxed relative z-10">{activeData.otherDesc}</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
