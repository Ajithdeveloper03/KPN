"use client";

import React, { useState } from "react";
import Image from "next/image";


import PageHero from "@/components/PageHero";

// Expanded gallery data incorporating the latest high-quality assets
const galleryItems = [
  // Priority: Animal, Goat, Poultry, Terrace
  { id: 9, title: "Agricultural Storage Shed", category: "Agriculture & Animal Husbandry", img: "/images/goat1.webp", height: "h-64" },
  { id: 10, title: "Poultry Farm Shed", category: "Agriculture & Animal Husbandry", img: "/images/services/poultry.webp", height: "h-72" },
  { id: 11, title: "Grain Storage Facility", category: "Agriculture & Animal Husbandry", img: "/images/animal1.webp", height: "h-80" },
  { id: 12, title: "Dairy Farm Structure", category: "Agriculture & Animal Husbandry", img: "/images/services/animal.webp", height: "h-96" },
  { id: 13, title: "Livestock Shade Structure", category: "Agriculture & Animal Husbandry", img: "/images/animal4.webp", height: "h-72" },
  { id: 14, title: "Modern Green House", category: "Agriculture & Animal Husbandry", img: "/images/goat4.webp", height: "h-80" },
  { id: 15, title: "Farm Equipment Shed", category: "Agriculture & Animal Husbandry", img: "/images/animal6.webp", height: "h-80" },
  { id: 17, title: "Residential Workshop", category: "Home Roofing Sheds", img: "/images/terrace (2).webp", height: "h-96" },
  { id: 18, title: "Garden Studio Shed", category: "Home Roofing Sheds", img: "/images/terrace3.webp", height: "h-72" },

  // Other Images (Car Parking)
  { id: 107, title: 'Car Parking Shed Timeline', category: 'Home Roofing Sheds', img: '/images/services/car1.webp', height: 'h-80' },
  { id: 110, title: 'Car Parking Shed Permits', category: 'Home Roofing Sheds', img: '/images/services/car2.webp', height: 'h-72' },
  { id: 111, title: 'Single vs Multi Bay Car Parking', category: 'Home Roofing Sheds', img: '/images/services/car3.webp', height: 'h-80' },
  { id: 16, title: "Custom Home Garage", category: "Home Roofing Sheds", img: "/images/services/car4.webp", height: "h-80" },
  { id: 19, title: "Luxury Carport", category: "Home Roofing Sheds", img: "/images/services/car5.webp", height: "h-64" },

  // Industrial
  { id: 1, title: "Modern Industrial Warehouse", category: "Industrial Shed", img: "/images/factory.webp", height: "h-96" },
  { id: 2, title: "Large Manufacturing Plant", category: "Industrial Shed", img: "/images/services/factory3.webp", height: "h-[28rem]" },
  { id: 3, title: "Garment Manufacturing Unit", category: "Industrial Shed", img: "/images/services/factory2.webp", height: "h-80" },
  { id: 4, title: "Logistics Center", category: "Industrial Shed", img: "/images/services/factory4.webp", height: "h-72" },
  { id: 5, title: "Automobile Factory", category: "Industrial Shed", img: "/images/factory (2).webp", height: "h-[28rem]" },
  { id: 6, title: "Steel Plant Warehouse", category: "Industrial Shed", img: "/images/services/factory6.webp", height: "h-96" },
  { id: 7, title: "Assembly Line Shed", category: "Industrial Shed", img: "/images/services/factory7.webp", height: "h-72" },
  { id: 8, title: "Commercial Storage", category: "Industrial Shed", img: "/images/services/factory8.webp", height: "h-96" },

  // Sports Turf
  { id: 101, title: 'Cricket Turf Shed Construction', category: 'Sports Turf', img: '/images/services/cricket-image-1.webp', height: 'h-96' },
  { id: 102, title: 'Cricket Turf Framework', category: 'Sports Turf', img: '/images/services/cricket-image-2.webp', height: 'h-72' },
  { id: 103, title: 'Cricket Turf Pitch Planning', category: 'Sports Turf', img: '/images/services/cricket-banner-image.webp', height: 'h-80' },
  { id: 104, title: 'Cricket Turf Structure', category: 'Sports Turf', img: '/images/services/sports-turf-main-banner.webp', height: 'h-[28rem]' },
  { id: 105, title: 'Cricket Turf Construction Phase', category: 'Sports Turf', img: '/images/services/how-long-does-badminton.webp', height: 'h-96' },
  { id: 106, title: 'Cricket Turf Finished Design', category: 'Sports Turf', img: '/images/services/badminton-court-banner-image.webp', height: 'h-72' },
];

export default function GalleryPage() {
  const [visibleCount, setVisibleCount] = useState(8);

  const visibleItems = galleryItems.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "KPN Roofing Shed Projects Gallery",
            "url": "https://kpnroofingsheds.com/gallery",
            "about": "Explore our extensive portfolio of premium roofing sheds, ranging from massive industrial complexes to bespoke residential structures.",
            "image": galleryItems.map(item => ({
              "@type": "ImageObject",
              "contentUrl": `https://kpnroofingsheds.com${item.img}`,
              "caption": item.title,
              "name": item.title
            }))
          })
        }}
      />

      <PageHero
        title="Our Inspirations"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" }
        ]}
        bgImage="/images/services/factory8.webp"
      />

      <main className="max-w-[1400px] w-full mx-auto px-6 py-16 flex-grow">
        <div className="text-center mb-12  max-w-2xl mx-auto">
          <p className="text-lg text-slate-600 font-medium">
            Explore our extensive portfolio of premium roofing sheds, ranging from massive industrial complexes to bespoke residential structures.
          </p>
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
                fill sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Image only, no overlays or text */}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < galleryItems.length && (
          <div className="mt-20 text-center">
            <button id="page-button-124" onClick={handleLoadMore}
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
