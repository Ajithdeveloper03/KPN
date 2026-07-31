"use client";

import React, { useEffect, useRef } from "react";
import { ClipboardList, Ruler, FileText, Hammer, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Site Visit & Requirement Assessment",
    description: "Our engineers visit your site, assess ground conditions, layout constraints, and specific project requirements before anything else.",
    icon: ClipboardList,
  },
  {
    number: "2",
    title: "Structural Design & Material Planning",
    description: "In-house structural engineers design custom trusses and plan every material, using Apollo-brand steel and our Coimbatore-manufactured flooring.",
    icon: Ruler,
  },
  {
    number: "3",
    title: "Transparent Quote & 50% Advance to Start",
    description: "You receive a fully itemized quote with zero hidden costs. Work begins once 50% advance is confirmed — remainder paid in installments as materials arrive.",
    icon: FileText,
  },
  {
    number: "4",
    title: "Fabrication & On-Site Installation",
    description: "The same KPN crew that designed your shed builds it on-site. No subcontractors — full accountability from fabrication to the final bolt.",
    icon: Hammer,
  },
  {
    number: "5",
    title: "Handover With Warranty & Maintenance Guidance",
    description: "You receive the completed shed with a 10-year structural guarantee, 3-year replacement warranty on flooring, and free repair for any damage in the first year.",
    icon: ShieldCheck,
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let ctx: any;
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      const initGSAP = async () => {
        const gsapModule = await import("gsap");
        const scrollTriggerModule = await import("gsap/ScrollTrigger");
        const gsap = gsapModule.default;
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          const slider = sliderRef.current;
          if (!slider) return;

          const scrollAmount = slider.scrollWidth - window.innerWidth;

          gsap.to(slider, {
            x: -scrollAmount,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              pin: true,
              scrub: 1,
              end: () => `+=${scrollAmount}`,
            }
          });

          if (pathRef.current) {
            const pathLength = pathRef.current.getTotalLength();
            gsap.set(pathRef.current, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
            gsap.to(pathRef.current, {
              strokeDashoffset: 0,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: () => `+=${slider.scrollWidth - window.innerWidth}`,
                scrub: 1,
              }
            });
          }
        }, sectionRef);
      };
      initGSAP();
    }
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="bg-white h-screen flex flex-col justify-center overflow-hidden relative z-10 process-section-wrapper"
      style={{ minHeight: "700px" }}
    >
      {/* Fixed Header */}
      <div className="absolute top-20 left-0 w-full z-10 pointer-events-none">
        <div className="max-w-[1400px] w-full mx-auto px-6 text-center">
          <h2 className="text-[clamp(36px,5vw,48px)] font-extrabold text-[#1e2229] tracking-tight mx-auto font-heading">
            We keep details <span className="italic font-bold font-heading">strong</span> and simple
          </h2>
        </div>
      </div>

      {/* Horizontal Scrolling Container */}
      <div
        ref={sliderRef}
        className="flex relative mt-16"
        style={{ width: "2500px", height: "500px" }}
      >
        {/* SVG Path */}
        <svg
          width="2500"
          height="500"
          viewBox="0 0 2500 500"
          className="absolute top-0 left-0 z-[1]"
        >
          <path
            d="M 0,250 C 100,250 150,150 250,150 S 600,350 750,350 S 1100,150 1250,150 S 1600,350 1750,350 S 2100,150 2250,150 S 2400,250 2500,250"
            fill="none"
            stroke="rgba(0,75,135,0.1)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            id="process-path"
            ref={pathRef}
            d="M 0,250 C 100,250 150,150 250,150 S 600,350 750,350 S 1100,150 1250,150 S 1600,350 1750,350 S 2100,150 2250,150 S 2400,250 2500,250"
            fill="none"
            stroke="#004b87"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        {/* Steps */}
        {steps.map((step, i) => {
          const isPeak = i % 2 === 0;
          const xCenter = 250 + i * 500;
          const yCenter = isPeak ? 150 : 350;
          const Icon = step.icon;

          return (
            <div key={i} className="absolute z-[5]" style={{ left: xCenter, top: yCenter }}>
              {/* Giant Background Number */}
              <div
                className="absolute pointer-events-none select-none font-extrabold font-heading"
                style={{
                  left: "-80px",
                  top: "-120px",
                  fontSize: "240px",
                  color: "rgba(0,0,0,0.03)",
                  lineHeight: 1,
                  zIndex: -1,
                }}
              >
                {step.number}
              </div>

              {/* Icon Badge on the path */}
              <div className="absolute w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-[0_12px_30px_rgba(0,75,135,0.15)] border-2 border-white z-10"
                style={{ left: "-32px", top: "-32px" }}>
                <Icon size={28} color="#004b87" strokeWidth={2.5} />
              </div>

              {/* Text Content */}
              <div
                className="absolute w-[280px] text-center"
                style={{
                  left: "-140px",
                  ...(isPeak ? { top: "60px" } : { bottom: "60px" }),
                }}
              >
                <h3 className="text-lg font-extrabold text-[#1e2229] mb-2 font-heading">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed m-0 font-medium">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
