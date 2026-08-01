"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Factory, Leaf, Home, Check } from "lucide-react";
import { openQuoteModal } from "@/components/QuoteModal";

const services = [
  {
    category: "Industrial Solutions",
    icon: Factory,
    title: "Industrial & Factory Shed Construction",
    desc: "Our industrial shed construction covers factories, warehouses, and godowns with heavy-gauge steel structures built for load-bearing equipment, racking, and vehicle movement. As factory shed contractors, we plan every structure around your production layout. Long spans and minimal columns give warehouse owners maximum usable floor space.",
    image: "/kpnroofingshed/images/image1.png",
    alt: "Industrial factory warehouse shed construction by KPN",
  },
  {
    category: "Agricultural Solutions",
    icon: Leaf,
    title: "Agricultural & Animal Shed Solutions",
    desc: "KPN is a trusted name in agricultural sheds and animal shed solutions — goat, dairy, cattle, and poultry structures engineered for ventilation, drainage, and animal comfort. Our modern farm sheds are customizable in size and layout, from small farm setups to large commercial operations.",
    image: "/kpnroofingshed/images/service-bg.png",
    alt: "Agricultural farm animal shed solution by KPN",
  },
  {
    category: "Home & Recreational",
    icon: Home,
    title: "Home & Recreational Sheds",
    desc: "Beyond farms and factories, we build terrace sheds, car parking shades, and other home shed structures — along with turf grounds and badminton court sheds, built with the same weatherproof roofing standards used across our industrial and farm projects.",
    image: "/kpnroofingshed/images/night-bg.png",
    alt: "Home terrace parking shades and sports turf roofing sheds by KPN",
  }
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];

  return (
    <section id="services" className="bg-[#19191c] text-white py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Image
          src="/kpnroofingshed/images/service-bg.png"
          alt="Services Background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#19191c]/80" />
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16" data-reveal="stagger">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#fecbc3] text-[#ee0000] font-bold text-sm tracking-wide mb-4 border border-[#00a3e0]/20">
            <span className="w-2 h-2 rounded-full bg-[#ee0000]"></span>
           Services
          </div>
          <h2 className="text-[clamp(40px,5vw,56px)] font-extrabold font-heading tracking-tight" data-reveal="text">
            Shed Construction
          </h2>
        </div>

        {/* Tabs Section */}
        <div className="relative mb-20 border-b-2 border-white/10" data-reveal="stagger">
          <div className="flex flex-col sm:flex-row items-center justify-between sm:gap-16 w-full max-w-[900px] mx-auto">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              const Icon = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex items-center gap-3 pb-6 pt-2 px-2 md:px-8 transition-all duration-300 font-bold text-base md:text-md border-b-2 -mb-[2px] w-full sm:w-auto justify-center
                    ${isActive ? "text-[#ee0000] border-[#ee0000]" : "text-slate-300 hover:text-white border-transparent"}`}
                >
                  <Icon size={22} className={isActive ? "text-[#ee0000]" : "text-slate-400"} />
                  {service.category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-stretch">

          {/* Left: Text Content */}
          <div data-reveal="stagger" className="flex flex-col items-start text-left max-w-[600px]">
            <h3 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold mb-2 font-heading leading-tight tracking-tight">{activeService.title}</h3>
            <p className="text-slate-300 leading-[1.8] mb-10 text-base md:text-lg">
              {activeService.desc}
            </p>

            

            <button
              onClick={openQuoteModal}
              className="bg-[#ee0000] hover:bg-[#cc0000] text-white font-bold py-4 px-10 rounded-full transition-colors duration-300 shadow-[0_8px_25px_rgba(238,0,0,0.3)] text-base md:text-lg"
            >
              Request a Quote
            </button>
          </div>

          {/* Right: Clean Image */}
          <div className="relative h-full min-h-[400px] w-full" data-reveal="image">
            <div className="relative  z-10 w-full h-full shadow-2xl overflow-hidden rounded-md">
              <Image
                src={activeService.image}
                alt={activeService.alt}
                fill
                className="object-cover rounded-3xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
