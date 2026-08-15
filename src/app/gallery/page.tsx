"use client";

import React, { useState } from "react";
import Image from "next/image";


import PageHero from "@/components/PageHero";

// Expanded gallery data incorporating the latest high-quality assets
const galleryItems = [
  { id: 101, title: 'Cricket Turf Shed Construction', category: 'Sports Turf', img: '/images/services/cricket-banner-image.png', height: 'h-96' },
  { id: 102, title: 'Cricket Turf Framework', category: 'Sports Turf', img: '/images/services/cricket-image-1.png', height: 'h-72' },
  { id: 103, title: 'Cricket Turf Pitch Planning', category: 'Sports Turf', img: '/images/services/cricket-image-2.png', height: 'h-80' },
  { id: 104, title: 'Cricket Turf Structure', category: 'Sports Turf', img: '/images/services/cricket-image-3.png', height: 'h-[28rem]' },
  { id: 105, title: 'Cricket Turf Construction Phase', category: 'Sports Turf', img: '/images/services/cricket-image-4.png', height: 'h-96' },
  { id: 106, title: 'Cricket Turf Finished Design', category: 'Sports Turf', img: '/images/services/cricket-image-5.png', height: 'h-72' },
  { id: 107, title: 'Car Parking Shed Timeline', category: 'Home Roofing Sheds', img: '/images/services/how-long-does-a-carparking.png', height: 'h-80' },
  { id: 108, title: 'Badminton Court Construction Time', category: 'Sports Turf', img: '/images/services/how-long-does-badminton.png', height: 'h-96' },
  { id: 109, title: 'Badminton Court Approvals', category: 'Sports Turf', img: '/images/services/permits-and-approvals-badminton.png', height: 'h-[28rem]' },
  { id: 110, title: 'Car Parking Shed Permits', category: 'Home Roofing Sheds', img: '/images/services/permits-and-approval-for-carparking.png', height: 'h-72' },
  { id: 111, title: 'Single vs Multi Bay Car Parking', category: 'Home Roofing Sheds', img: '/images/services/single-bay-vs-multi-bay-sheds-carparking.png', height: 'h-80' },

  // Industrial
  { id: 1, title: "Modern Industrial Warehouse", category: "Industrial Shed", img: "/images/services/industrial-banner-image.png", height: "h-96" },
  { id: 2, title: "Large Manufacturing Plant", category: "Industrial Shed", img: "/images/services/factory-banner-image.png", height: "h-[28rem]" },
  { id: 3, title: "Garment Manufacturing Unit", category: "Industrial Shed", img: "/images/services/garment-image-banner.png", height: "h-80" },
  { id: 4, title: "Logistics Center", category: "Industrial Shed", img: "/images/services/warehouse-banner-image.png", height: "h-72" },
  { id: 5, title: "Automobile Factory", category: "Industrial Shed", img: "/images/services/industrial-image-01.png", height: "h-[28rem]" },
  { id: 6, title: "Steel Plant Warehouse", category: "Industrial Shed", img: "/images/services/factory-image-2.png", height: "h-96" },
  { id: 7, title: "Assembly Line Shed", category: "Industrial Shed", img: "/images/services/garment-image-05.png", height: "h-72" },
  { id: 8, title: "Commercial Storage", category: "Industrial Shed", img: "/images/services/warehouse-04.png", height: "h-96" },

  // Agriculture & Animal Husbandry
  { id: 9, title: "Agricultural Storage Shed", category: "Agriculture & Animal Husbandry", img: "/images/services/agriculture-and-animal-husbenday-bannar-image.png", height: "h-64" },
  { id: 10, title: "Poultry Farm Shed", category: "Agriculture & Animal Husbandry", img: "/images/services/poultry-banner-image.png", height: "h-72" },
  { id: 11, title: "Grain Storage Facility", category: "Agriculture & Animal Husbandry", img: "/images/services/agriculture01.png", height: "h-80" },
  { id: 12, title: "Dairy Farm Structure", category: "Agriculture & Animal Husbandry", img: "/images/services/dairy-banner-image.png", height: "h-96" },
  { id: 13, title: "Livestock Shade Structure", category: "Agriculture & Animal Husbandry", img: "/images/services/animal-final-image.png", height: "h-72" },
  { id: 14, title: "Modern Green House", category: "Agriculture & Animal Husbandry", img: "/images/services/goat-banner-image.png", height: "h-80" },
  { id: 15, title: "Farm Equipment Shed", category: "Agriculture & Animal Husbandry", img: "/images/services/dairy-image-5.png", height: "h-80" },

  // Home Roofing Sheds
  { id: 16, title: "Custom Home Garage", category: "Home Roofing Sheds", img: "/images/services/car-parking-banner-image.png", height: "h-80" },
  { id: 17, title: "Residential Workshop", category: "Home Roofing Sheds", img: "/images/services/home-roofing-shed-banner-image.png", height: "h-96" },
  { id: 18, title: "Garden Studio Shed", category: "Home Roofing Sheds", img: "/images/services/terrace-shed-banner-image.png", height: "h-72" },
  { id: 19, title: "Luxury Carport", category: "Home Roofing Sheds", img: "/images/services/home-roofing-shed-la-3-section-1-image.png", height: "h-64" },
  { id: 20, title: "Urban Backyard Shed", category: "Home Roofing Sheds", img: "/images/services/how-long-does-do-a-terrace-shed-take.png", height: "h-[28rem]" },
  { id: 21, title: "Patio Cover", category: "Home Roofing Sheds", img: "/images/services/extend-your-usable-outdoor-space-with-kpn-terrace.png", height: "h-64" },

  // Sports Turf
  { id: 22, title: "Professional Badminton Court", category: "Sports Turf", img: "/images/services/badminton-court-banner-image.png", height: "h-[28rem]" },
  { id: 23, title: "Cricket Turf Shelter", category: "Sports Turf", img: "/images/services/sports-turf-main-banner.png", height: "h-96" },
  { id: 24, title: "Weatherproof Multi-Sport", category: "Sports Turf", img: "/images/services/weatherproof-all-season-court-roofing-with-kpn-1.png", height: "h-72" },
  { id: 25, title: "Indoor Sports Complex", category: "Sports Turf", img: "/images/services/sports-turf-1-section-1-image.png", height: "h-80" }
];

const categories = ["All", "Agriculture & Animal Husbandry", "Industrial Shed", "Home Roofing Sheds", "Sports Turf"];

function getInterleavedItems(items: typeof galleryItems) {
  const grouped = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof galleryItems>);

  const interleaved: typeof galleryItems = [];
  let index = 0;
  let added = true;
  while (added) {
    added = false;
    for (const category of categories.slice(1)) {
      if (grouped[category] && grouped[category][index]) {
        interleaved.push(grouped[category][index]);
        added = true;
      }
    }
    index++;
  }
  return interleaved;
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredItems = activeCategory === "All" 
    ? getInterleavedItems(galleryItems)
    : galleryItems.filter(item => item.category === activeCategory);

  const visibleItems = filteredItems.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(8); // Reset visible count when changing category
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      <PageHero 
        title="Our Inspirations" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" }
        ]} 
        bgImage="/images/services/warehouse-banner-image.png"
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
