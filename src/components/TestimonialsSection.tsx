"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Gokul G",
    role: "Industrial Client — Trichy",
    property: "Industrial & Home Shed Works",
    quote: "Excellent service from KPN Roofing Shed. They completed our Roofing Shed Construction in Trichy with strong materials and perfect finishing. Highly recommended for industrial and home shed works.",
    rating: 5.0,
    bgImage: "/images/image5.webp",
    avatar: "/images/image6.webp"
  },
  {
    name: "Latha Sethurajan",
    role: "Home Owner",
    property: "Terrace Roofing Shed",
    quote: "KPN Roofing Shed done terrace shed with excellent quality materials. Really valuable and worth every rupee. The workmanship was top-notch and completed on time.",
    rating: 5.0,
    bgImage: "/images/image7.webp",
    avatar: "/images/image8.webp"
  },
  {
    name: "Sasi Kumar",
    role: "Goat Farm Owner",
    property: "Farm Shed Flooring",
    quote: "I bought flooring for my goat shed from KPN — it is a really good product. Durable, easy to clean, and the farm animals are comfortable. Very satisfied with the purchase.",
    rating: 5.0,
    bgImage: "/images/image9.webp",
    avatar: "/images/image10.webp"
  },
  {
    name: "Vijay Vijay",
    role: "Residential Client",
    property: "Home Roofing Project",
    quote: "I recently bought a flooring product from KPN — it is good in quality and the service was very good. The team was responsive and the installation was smooth from start to finish.",
    rating: 5.0,
    bgImage: "/images/image11.webp",
    avatar: "/images/image12.webp"
  }
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((i) => (
        <Star
          key={i}
          size={16}
          className="text-[#ffe600]"
          fill={i <= Math.round(rating) ? "currentColor" : "none"}
          stroke={i <= Math.round(rating) ? "none" : "currentColor"}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const active = testimonials[activeIndex];

  return (
    <section id="testimonials" className="bg-[#0a0a0f] py-16 md:py-12 lg:py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 w-full">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-[#ee0000] font-bold tracking-widest uppercase text-sm mb-3 block">Client Reviews</span>
            <h2 className="text-white text-[clamp(34px,5vw,58px)] font-serif leading-[1.1] max-w-[550px] tracking-tight italic">
              What Our Clients Say.
            </h2>
          </div>
          <p className="text-slate-400 text-base max-w-[360px] leading-relaxed font-medium">
            Real feedback from real customers across Tamil Nadu who trusted KPN Roofing Shed.
          </p>
        </div>

        {/* Card */}
        <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl" style={{ minHeight: 520 }}>

          {/* Single Static Background Image */}
          <div className="absolute inset-0">
            <Image src="/images/image5.webp" alt="Testimonials Background" fill sizes="100vw" className="object-cover" />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 z-[1]" />

          {/* Floating Review Card */}
          <div className="absolute bottom-0 right-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-10 w-full md:w-[480px] lg:w-[520px] bg-white rounded-t-[2rem] md:rounded-[2rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] z-20">

            {/* Quote icon */}
            <div className="w-10 h-10 rounded-full bg-[#ee0000]/10 flex items-center justify-center mb-6">
              <Quote size={18} className="text-[#ee0000]" />
            </div>

            {/* Stars + score */}
            <div className="flex items-center gap-3 mb-5">
              <StarRating rating={active.rating} />
              <span className="font-extrabold text-[#1e2229] text-sm">{active.rating.toFixed(1)} / 5.0</span>
            </div>

            {/* Quote */}
            <p className="text-slate-700 font-medium leading-relaxed text-sm md:text-base mb-8" style={{ minHeight: 80 }}>
              &ldquo;{active.quote}&rdquo;
            </p>

            {/* Profile + Navigation */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-6">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="text-[#1e2229] font-bold text-sm leading-tight">{active.name.split(" ")[0]}</h3>
                  <p className="text-slate-400 text-xs font-medium">{active.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                {/* Progress indicator */}
                <div className="hidden sm:flex flex-col items-end gap-1.5 mr-2">
                  <span className="text-slate-400 font-bold tracking-widest text-[10px]">
                    {String(activeIndex + 1).padStart(2,'0')} / {String(testimonials.length).padStart(2,'0')}
                  </span>
                  <div className="flex gap-1">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`h-1 rounded-full transition-all duration-500 ${i === activeIndex ? "bg-[#ee0000] w-6" : "bg-slate-200 w-2"}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center bg-white hover:bg-slate-50 transition-colors text-slate-600"
                    aria-label="Previous"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-[#1e2229] hover:bg-black transition-colors text-white"
                    aria-label="Next"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
