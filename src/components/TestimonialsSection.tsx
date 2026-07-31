"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "David Thompson",
    role: "Investment Banker",
    property: "Purchased Property: The Grand Haven",
    quote: "KPN Roofing Shed made the entire construction process seamless. The team was professional, and they built me the perfect modern warehouse. Highly recommended!",
    rating: 4.9,
    bgImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200"
  },
  {
    name: "Sarah Jenkins",
    role: "Dairy Farm Owner",
    property: "Agricultural Shed Setup",
    quote: "The ventilation and structural integrity of the farm shed they built for us is unmatched. Our livestock is healthier, and the construction was finished ahead of schedule.",
    rating: 5.0,
    bgImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2000",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200"
  },
  {
    name: "Rajesh Kumar",
    role: "Factory Manager",
    property: "Industrial Factory Complex",
    quote: "We needed a massive 50,000 sq.ft factory shed with heavy load-bearing capacities. KPN delivered flawlessly using premium Apollo steel.",
    rating: 4.8,
    bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200"
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" className="bg-[#0a0a0f] py-12 md:py-24 min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10">
        
        {/* Top Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 gap-8">
          <h2 className="text-white text-[clamp(40px,5vw,60px)] font-serif leading-[1.1] max-w-[600px] tracking-tight">
            Discover Insights, Trends, And Inspiration.
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-[400px] leading-relaxed font-medium">
            Explore our latest projects and industrial setups. We have the perfect structural solution for you.
          </p>
        </div>

        {/* Main Testimonial Card Overlay */}
        <div className="relative w-full rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl h-[550px] md:h-[600px]">
          
          {/* Background Images */}
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                idx === activeIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
              }`}
            >
              <Image
                src={t.bgImage}
                alt="Background project"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
          
          {/* Subtle Gradient for text readability on left */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />

          {/* Left Side: Counter */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 flex flex-col gap-2 z-10">
            <span className="text-white font-bold tracking-widest text-sm">
              {activeIndex + 1}/{testimonials.length}
            </span>
            <div className="w-16 h-[3px] bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-500 ease-out" 
                style={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Right Side: Floating Review Card */}
          <div className="absolute bottom-0 right-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:right-10 w-full md:w-[500px] lg:w-[550px] bg-white rounded-t-[2rem] md:rounded-[2rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-20 transition-all duration-500 ease-in-out">
            
            {/* Top: Profile & Logo */}
            <div className="flex justify-between items-center mb-6 md:mb-8">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden">
                  <Image
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[#1e2229] font-bold text-base md:text-lg leading-tight">{activeTestimonial.name}</h4>
                  <p className="text-slate-500 text-xs md:text-sm font-medium">{activeTestimonial.role}</p>
                </div>
              </div>
              
              {/* Logo Fake Placeholder */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#6a2bfa] flex items-center justify-center">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full border-2 border-white" />
                </div>
                <span className="font-extrabold text-[#1e2229] tracking-tight hidden sm:block">Spherule</span>
              </div>
            </div>

            {/* Middle: Content */}
            <div className="mb-8 md:mb-10 min-h-[140px]">
              <h3 className="font-extrabold text-[#1e2229] text-lg md:text-xl mb-3">{activeTestimonial.property}</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                &quot;{activeTestimonial.quote}&quot;
              </p>
            </div>

            {/* Bottom: Rating & Navigation */}
            <div className="flex justify-between items-center">
              
              {/* Stars */}
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex text-[#ffb800]">
                  <Star size={16} fill="currentColor" stroke="none" />
                  <Star size={16} fill="currentColor" stroke="none" />
                  <Star size={16} fill="currentColor" stroke="none" />
                  <Star size={16} fill="currentColor" stroke="none" />
                  <Star size={16} fill="currentColor" stroke="none" />
                </div>
                <span className="font-bold text-[#1e2229]">{activeTestimonial.rating.toFixed(1)}</span>
              </div>

              {/* Navigation */}
              <div className="flex gap-2 md:gap-3">
                <button 
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center bg-white hover:bg-slate-50 transition-colors cursor-pointer text-slate-700"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1e2229] hover:bg-black transition-colors cursor-pointer text-white"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
