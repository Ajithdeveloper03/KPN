"use client";

import React, { useState } from "react";
import Image from "next/image";


import PageHero from "@/components/PageHero";

// Sample gallery data
const galleryItems = [
  { id: 1, title: "Modern Industrial Warehouse", category: "Industrial", img: "/kpnroofingshed/images/image1.jpeg", height: "h-96" },
  { id: 2, title: "Agricultural Storage Shed", category: "Agricultural", img: "/kpnroofingshed/images/image2.jpeg", height: "h-64" },
  { id: 3, title: "Custom Home Garage", category: "Home", img: "/kpnroofingshed/images/image3.jpeg", height: "h-80" },
  { id: 4, title: "Large Manufacturing Plant", category: "Industrial", img: "/kpnroofingshed/images/image4.jpeg", height: "h-[28rem]" },
  { id: 5, title: "Poultry Farm Shed", category: "Agricultural", img: "/kpnroofingshed/images/image5.jpeg", height: "h-72" },
  { id: 6, title: "Residential Workshop", category: "Home", img: "/kpnroofingshed/images/image6.jpeg", height: "h-96" },
  { id: 7, title: "Logistics Center", category: "Industrial", img: "/kpnroofingshed/images/image7.jpeg", height: "h-64" },
  { id: 8, title: "Grain Storage Facility", category: "Agricultural", img: "/kpnroofingshed/images/image8.jpeg", height: "h-80" },
  { id: 9, title: "Garden Studio Shed", category: "Home", img: "/kpnroofingshed/images/image9.jpeg", height: "h-72" },
  { id: 10, title: "Automobile Factory", category: "Industrial", img: "/kpnroofingshed/images/imag10.jpeg", height: "h-[28rem]" },
  { id: 11, title: "Dairy Farm Structure", category: "Agricultural", img: "/kpnroofingshed/images/image1.png", height: "h-96" },
  { id: 12, title: "Luxury Carport", category: "Home", img: "/kpnroofingshed/images/image2.png", height: "h-64" },
  { id: 13, title: "Livestock Shade Structure", category: "Agricultural", img: "/kpnroofingshed/images/roofing.png", height: "h-72" },
  { id: 14, title: "Urban Backyard Shed", category: "Home", img: "/kpnroofingshed/images/roofing2.png", height: "h-[28rem]" },
  { id: 15, title: "Steel Plant Warehouse", category: "Industrial", img: "/kpnroofingshed/images/roofing3.png", height: "h-96" },
  { id: 16, title: "Modern Green House", category: "Agricultural", img: "/kpnroofingshed/images/hero-bg.png", height: "h-80" },
  { id: 17, title: "Assembly Line Shed", category: "Industrial", img: "/kpnroofingshed/images/morning-bg.png", height: "h-72" },
  { id: 18, title: "Patio Cover", category: "Home", img: "/kpnroofingshed/images/night-bg.png", height: "h-64" },
  { id: 19, title: "Commercial Storage", category: "Industrial", img: "/kpnroofingshed/images/image1.jpeg", height: "h-96" },
  { id: 20, title: "Farm Equipment Shed", category: "Agricultural", img: "/kpnroofingshed/images/image2.jpeg", height: "h-80" },
];

const categories = ["All", "Industrial", "Agricultural", "Home"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredItems = galleryItems.filter(item => 
    activeCategory === "All" ? true : item.category === activeCategory
  );

  const visibleItems = filteredItems.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(6); // Reset visible count when changing category
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      <PageHero 
        title="Our Inspirations" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" }
        ]} 
      />
      
      <main className="max-w-[1400px] w-full mx-auto px-6 py-16 flex-grow">
        <div className="text-center mb-12  max-w-2xl mx-auto">
          <p className="text-lg text-slate-600 font-medium">
            Explore our extensive portfolio of premium roofing sheds, ranging from massive industrial complexes to bespoke residential structures.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 ">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-[#ee0000] text-white shadow-lg shadow-[#ee0000]/30 -translate-y-1" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {visibleItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`relative rounded-3xl overflow-hidden group break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${item.height}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[#00a3e0] text-xs font-bold uppercase tracking-[0.2em] mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.category}
                </span>
                <h3 className="text-white text-2xl font-bold leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredItems.length && (
          <div className="mt-20 text-center">
            <button 
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-10 py-4 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#ee0000] hover:shadow-[0_10px_30px_rgba(238,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Load More Projects
            </button>
          </div>
        )}
      </main>

      
    </div>
  );
}
