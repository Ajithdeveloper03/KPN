"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Factory, Leaf, Home, Check } from "lucide-react";

const services = [
  {
    category: "Industrial Solutions",
    icon: Factory,
    title: "Industrial & Factory Shed Construction",
    desc: "Our industrial shed construction covers factories, warehouses, and godowns with heavy-gauge steel structures built for load-bearing equipment, racking, and vehicle movement. As factory shed contractors, we plan every structure around your production layout. Long spans and minimal columns give warehouse owners maximum usable floor space.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200",
    alt: "Industrial factory warehouse shed construction by KPN",
  },
  {
    category: "Agricultural Solutions",
    icon: Leaf,
    title: "Agricultural & Animal Shed Solutions",
    desc: "KPN is a trusted name in agricultural sheds and animal shed solutions — goat, dairy, cattle, and poultry structures engineered for ventilation, drainage, and animal comfort. Our modern farm sheds are customizable in size and layout, from small farm setups to large commercial operations.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200",
    alt: "Agricultural farm animal shed solution by KPN",
  },
  {
    category: "Home & Recreational",
    icon: Home,
    title: "Home & Recreational Sheds",
    desc: "Beyond farms and factories, we build terrace sheds, car parking shades, and other home shed structures — along with turf grounds and badminton court sheds, built with the same weatherproof roofing standards used across our industrial and farm projects.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    alt: "Home terrace parking shades and sports turf roofing sheds by KPN",
  }
];

export default function ServicesSection({ onOpenModal }: { onOpenModal: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];

  return (
    <section id="services" className="bg-[#19191c] text-white py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-90">
        <Image
          src="/images/service-bg.png"
          alt="Services Background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#19191c]/80" />
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-[#f95c19] font-bold text-sm tracking-widest uppercase mb-2">
            SERVICES
          </div>
          <h2 className="text-3xl font-bold font-heading">
            Shed Construction
          </h2>
        </div>

        {/* Tabs Section */}
        <div className="relative mb-16 border-b-2 border-white/20">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-12 w-full max-w-[850px] mx-auto">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              const Icon = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative flex items-center gap-3 pb-5 pt-3 px-2 md:px-6 transition-all duration-300 font-bold text-sm md:text-base border-b-2 -mb-[2px] w-full sm:w-auto justify-center
                    ${isActive ? "text-[#f95c19] border-[#f95c19]" : "text-white/90 hover:text-white border-transparent"}`}
                >
                  <Icon size={20} className={isActive ? "text-[#f95c19]" : "text-slate-400"} />
                  {service.category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: Text Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-heading">{activeService.title}</h3>
            <p className="text-slate-400 leading-relaxed mb-8 text-[15px]">
              {activeService.desc}
            </p>

            <div className="h-px bg-white/10 w-full mb-8" />

            <div className="h-px bg-white/10 w-full mb-8" />

            <button
              onClick={onOpenModal}
              className="bg-[#f95c19] hover:bg-[#e04c10] text-white font-bold py-3.5 px-8 rounded-full transition-colors duration-300 shadow-[0_4px_14px_rgba(249,92,25,0.3)] text-sm"
            >
              Request a Quote
            </button>
          </div>

          {/* Right: Image with Orange Offset Box */}
          <div className="relative h-[400px] md:h-[480px] w-full pl-6 pb-6">
            {/* The Solid Orange Offset Block */}
            <div className="absolute top-6 left-10 right-0 bottom-0 bg-[#f95c19] z-0" />

            {/* The Main Image */}
            <div className="relative z-10 w-full h-full shadow-2xl">
              <Image
                src={activeService.image}
                alt={activeService.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
