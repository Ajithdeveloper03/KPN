"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ZoomOut } from "lucide-react";

export default function CSRGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const handleClose = () => {
    setSelectedImage(null);
    setZoom(1);
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#ee0000] font-bold tracking-widest uppercase text-sm mb-3 block">Gallery</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2229] font-heading">Our Community Impact</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "/images/csr/image-1.webp",
              "/images/csr/image-2.webp",
              "/images/csr/image-3.webp",
              "/images/csr/image-4.webp",
              "/images/csr/image-5.webp",
              "/images/csr/image-6.webp",
              "/images/csr/image-7.webp",
              "/images/csr/image-8.webp",
              "/images/csr/image-9.webp",
              "/images/csr/image-10.webp"
            ].map((src, index) => (
              <div 
                key={index} 
                className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <div className="shiny-hover w-full h-full">
                  <Image 
                    src={src} 
                    alt={`KPN CSR Activity ${index + 1}`} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Zoom Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={handleClose}
        >
          <button className="absolute top-4 right-4 text-white z-[210] bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
            onClick={(e) => { e.stopPropagation(); handleClose(); }}
          >
            <X size={24} />
          </button>

          <div className="absolute bottom-24 sm:bottom-6 flex gap-4 z-[210]">
            <button className="text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); setZoom(z => Math.max(0.5, z - 0.25)); }}
            >
              <ZoomOut size={24} />
            </button>
            <button className="text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); setZoom(z => Math.min(3, z + 0.25)); }}
            >
              <ZoomIn size={24} />
            </button>
          </div>

          <div
            className="relative w-full h-full flex items-center justify-center overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s ease-out' }}
              className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            >
              <img
                src={selectedImage}
                alt="Zoomed"
                className="max-w-full max-h-[90vh] object-contain rounded-xl select-none"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
