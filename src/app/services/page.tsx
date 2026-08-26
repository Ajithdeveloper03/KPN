import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { ArrowRight, Settings } from 'lucide-react';

export const metadata: Metadata = {
  alternates: {
    canonical: "src/app/services/page.tsx",
  },
  title: 'Our Services | KPN Roofing Shed',
  description: 'Explore the range of roofing shed services provided by KPN Roofing Shed, including industrial, agriculture, home, and sports turf sheds.',
};

const servicesList = [
  {
    title: 'Industrial Sheds',
    href: '/services/industrial-sheds',
    img: '/images/image4.webp',
    desc: 'Heavy-duty steel structures for factories, garments, and warehouses.',
  },
  {
    title: 'Agriculture & Animal Husbandry Sheds',
    href: '/services/agriculture-animal-husbandry-sheds',
    img: '/images/image2.webp',
    desc: 'Reliable sheds for poultry, cattle, goat farms, and agriculture.',
  },
  {
    title: 'Home Roofing Sheds',
    href: '/services/home-roofing-sheds',
    img: '/images/services/factory3.webp',
    desc: 'Aesthetic and durable roofing for home car parking and terraces.',
  },
  {
    title: 'Sports Turf Sheds',
    href: '/services/sports-turf-sheds',
    img: '/images/image1.webp',
    desc: 'High-clearance sheds for badminton courts and cricket turfs.',
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111] selection:bg-[#ffcc00] selection:text-[#111] flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": servicesList.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "url": `https://kpnroofingsheds.com${service.href}`,
              "name": service.title,
              "description": service.desc
            }))
          })
        }}
      />
      <PageHero 
        title="Our Services" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" }
        ]} 
      />

      <main className="flex-grow">
        <section className="max-w-[1400px] mx-auto px-6 py-12 lg:py-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="px-5 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 tracking-wide uppercase mb-6 inline-block">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#111] mb-6">
              Premium Roofing Shed Solutions
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              We design, build, and deliver high-quality roofing shed structures for a wide range of industries and residential needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {servicesList.map((service, index) => (
              <Link 
                key={index} 
                href={service.href}
                className="group flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <Image 
                    src={service.img} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Settings strokeWidth={1.5} size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 font-medium mb-8 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-blue-600 font-bold text-sm uppercase tracking-wide group-hover:translate-x-2 transition-transform mt-auto">
                    Explore More <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}