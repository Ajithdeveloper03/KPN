"use client";
import React from 'react';
import Image from 'next/image';

const brands = [
  'arunachala.png',
  'birmingham_industries_logo.jpg',
  'chettinad.png',
  'karuna.png',
  'lee.avif',
  'MIT-8.png',
  'priyacement-logo-red.svg',
  'teximass.png'
];

export default function ClientLogos() {
  return (
    <section className="py-12 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-6 mb-8 text-center">
        <h3 className="text-xl md:text-2xl font-extrabold text-slate-800">Trusted by Leading Brands</h3>
      </div>
      
      <div className="relative w-full flex overflow-hidden group">
        <div className="flex whitespace-nowrap animate-marquee items-center" style={{ width: 'max-content' }}>
          {/* Duplicate the array 4 times to ensure seamless infinite scrolling */}
          {[...brands, ...brands, ...brands, ...brands].map((brand, idx) => (
            <div 
              key={idx} 
              className="mx-4 md:mx-6 w-36 h-24 md:w-44 md:h-28 bg-slate-50 flex items-center justify-center rounded-2xl p-4 shrink-0 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 hover:bg-white transition-all duration-300 cursor-pointer group/logo"
            >
              <Image 
                src={`/images/brands/${brand}`} 
                alt={`Client Logo ${idx}`} 
                width={140} 
                height={80} 
                className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover/logo:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
