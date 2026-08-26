"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

const statsCards = [
  {
    title: "13+ Years",
    desc: "Experience in shed and roofing construction.",
    color: "#062088", // Blue
    img: "/images/services/factory4.webp"
  },
  {
    title: "1000+ Projects",
    desc: "Successfully completed across India.",
    color: "#ee0000",
    img: "/images/services/factory6.webp"
  },
  {
    title: "All Services",
    desc: "Industrial, agricultural, home, turf & badminton sheds.",
    color: "#ffe600",
    img: "/images/services/factory7.webp"
  },
  {
    title: "upto ₹599/sq.ft",
    desc: "High-quality goat farm sheds tailored to your needs.",
    color: "#062088",
    img: "/images/goat2.webp"
  },
  {
    title: "Min. Size",
    desc: "1440 sq.ft in Tamil Nadu, 2400 sq.ft in other states.",
    color: "#ee0000",
    img: "/images/services/factory5.webp"
  },
  {
    title: "Fast Timeline",
    desc: "6 days for 1440 sq.ft, 1 month for 2400 sq.ft.",
    color: "#ffe600",
    img: "/images/services/factory8.webp"
  },
  {
    title: "10-Yr Warranty",
    desc: "10-year guarantee, 3-year replacement on flooring.",
    color: "#062088",
    img: "/images/terrace.webp"
  },
  {
    title: "50% Advance",
    desc: "Remainder in installments as materials arrive.",
    color: "#ee0000",
    img: "/images/services/factory3.webp"
  },
  {
    title: "Award Winning",
    desc: "Best Entrepreneur Award by Tamilan Channel.",
    color: "#ffe600",
    img: "/images/animal2.webp"
  }
];

export default function StatsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Automatic slider effect using native scroll
  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current && !isDragging) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        // If we reached the end, scroll back to start
        if (scrollLeft + clientWidth >= scrollWidth - 20) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll by exactly one card width
          const cardWidth = scrollRef.current.children[0].clientWidth;
          scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [isDragging]);

  return (
    <section id="stats" className="relative flex flex-col justify-center overflow-hidden py-4 md:py-6">
      {/* Fixed Background Image with light overlay */}
      <div className="absolute inset-0 z-0" style={{ backgroundImage: 'url(/images/services/cricket-image-1.webp)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-gray-100" />
      </div>

      {/* Hide Webkit Scrollbar globally for this section */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div className="max-w-[1400px] w-full mx-auto px-6 relative z-10">

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left Content */}
          <div className="w-full lg:w-[30%] flex flex-col items-center lg:items-start text-center lg:text-left" data-reveal="stagger">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e2229] leading-[1.2] tracking-tight mb-6">
              KPN Roofing Shed At A Glance
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed mb-8">
              Get the best construction experience built on the three pillars of Quality, Durability and Timely Delivery.
            </p>
            <a
              href="#services"
              className="bg-[#062088] hover:bg-[#8640c8] text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-[0_10px_20px_rgba(155,81,224,0.3)]"
            >
              Learn More
            </a>
          </div>

          {/* Right Content: Seamless Slider Container */}
          <div className="w-full lg:w-[72%] bg-white rounded-[2rem] shadow-[0_15px_50px_rgba(0,0,0,0.06)] overflow-hidden relative" data-reveal="stagger">

            {/* Slider Track */}
            <div
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              className={`flex overflow-x-auto hide-scroll ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'}`}
            >

              {statsCards.map((card, idx) => (
                <div
                  key={idx}
                  className={`snap-start shrink-0 w-full sm:w-[50%] lg:w-[33.333%] p-8 md:p-10 flex flex-col items-center text-center group ${idx !== statsCards.length - 1 ? 'border-r border-slate-100' : ''}`}
                >

                  {/* Image Graphic */}
                  <div className="relative w-40 h-40 mb-8 mt-2">
                    {/* Decorative colored rings */}
                    <div
                      className="absolute inset-0 rounded-full border-[6px] border-t-transparent border-l-transparent -rotate-45 group-hover:rotate-45 transition-transform duration-700"
                      style={{ borderColor: card.color, borderTopColor: "transparent", borderLeftColor: "transparent" }}
                    />
                    <div
                      className="absolute inset-[-10px] rounded-full border-[4px] border-b-transparent border-r-transparent -rotate-45 opacity-30 group-hover:-rotate-90 transition-transform duration-1000"
                      style={{ borderColor: card.color, borderBottomColor: "transparent", borderRightColor: "transparent" }}
                    />

                    {/* Inner Image */}
                    <div className="absolute inset-2 rounded-full overflow-hidden shadow-xl bg-white p-1">
                      <div className="shiny-hover relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={card.img}
                          alt={card.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3
                    className="text-xl font-black uppercase tracking-wide mb-3"
                    style={{ color: card.color }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed text-sm">
                    {card.desc}
                  </p>

                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center lg:text-right w-full">
          <p className="text-slate-500 text-sm font-medium">
            
          </p>
        </div>

      </div>
    </section>
  );
}
