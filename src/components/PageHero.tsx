import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  breadcrumbs: Breadcrumb[];
  bgImage?: string;
  bgPosition?: string;
}

export default function PageHero({ title, breadcrumbs, bgImage = "/images/night-bg.webp", bgPosition = "object-cover object-center" }: PageHeroProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.label,
      "item": `https://kpnroofingsheds.com${crumb.href}`
    }))
  };

  return (
    <div className="relative w-full h-[60vh] min-h-[450px] flex flex-col justify-center items-center overflow-hidden bg-slate-900 mt-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={`${title} Background`}
          fill sizes="100vw"
          className={`${bgPosition} opacity-90`}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-[#121316]/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 mt-16 md:mt-26 ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight drop-shadow-xl">{title}</h1>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm font-bold tracking-[0.1em]  text-slate-300">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <ChevronRight size={16} className="text-[#ee0000]" />}
              {idx === breadcrumbs.length - 1 ? (
                <span className="text-[#ee0000] drop-shadow-md">{crumb.label}</span>
              ) : crumb.href === "#" || crumb.href === "" ? (
                <span className="text-slate-300">{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
