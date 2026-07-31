"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const statsCards = [
  {
    title: "INDUSTRIAL",
    color: "#8b5cf6", // Purple
    desc: "Heavy-duty factory sheds designed for massive load-bearing capacities and optimal workflows.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600"
  },
  {
    title: "AGRICULTURAL",
    color: "#f59e0b", // Orange/Yellow
    desc: "Well-ventilated, hygienic animal sheds and storage facilities tailored for modern farming.",
    img: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=600"
  },
  {
    title: "COMMERCIAL",
    color: "#06b6d4", // Cyan
    desc: "Recreational sports turfs and commercial warehouses built for aesthetics and durability.",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600"
  }
];

export default function StatsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Automatic slider effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % statsCards.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="stats" className="bg-[#f2f4f8] py-24 min-h-[100dvh] flex flex-col justify-center">
      <div className="max-w-[1400px] w-full mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-[35%] flex flex-col items-start text-center lg:text-left">
            <h2 className="text-[clamp(40px,5vw,56px)] font-bold text-[#1e2229] font-heading leading-[1.1] mb-6">
              KPN at a glance
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-[500px]">
              Get the best construction experience that's built on the three pillars of Quality, Speed, and Reliability.
            </p>
            <a 
              href="#services"
              className="bg-[#9c3ce7] hover:bg-[#8629cc] text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-[#9c3ce7]/30 transition-all duration-300 mx-auto lg:mx-0"
            >
              Learn More
            </a>
          </div>

          {/* Right Content: Automatic Slider Container */}
          <div className="w-full lg:w-[65%] bg-white rounded-[2rem] p-4 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden">
            
            {/* Carousel Track */}
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {statsCards.map((card, idx) => (
                <div key={idx} className="min-w-full flex flex-col sm:flex-row items-center gap-8 px-4">
                  
                  {/* Left: Image with vibrant circle graphic style from screenshot */}
                  <div className="w-full sm:w-1/2 relative flex justify-center">
                    {/* Decorative colored rings */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-[16px] border-t-transparent border-l-transparent -rotate-45" style={{ borderColor: card.color, borderTopColor: "transparent", borderLeftColor: "transparent" }}></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-[16px] border-b-transparent border-r-transparent -rotate-45 opacity-30" style={{ borderColor: card.color, borderBottomColor: "transparent", borderRightColor: "transparent" }}></div>
                    
                    {/* Inner Image */}
                    <div className="relative w-48 h-48 rounded-full overflow-hidden z-10 shadow-2xl">
                      <Image
                        src={card.img}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Right: Text */}
                  <div className="w-full sm:w-1/2 text-center sm:text-left flex flex-col justify-center min-h-[250px]">
                    <h3 
                      className="text-2xl font-black tracking-widest uppercase mb-4"
                      style={{ color: card.color }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-slate-500 font-medium leading-relaxed text-base md:text-lg">
                      {card.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {statsCards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "bg-[#9c3ce7] w-8" : "bg-slate-200"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
