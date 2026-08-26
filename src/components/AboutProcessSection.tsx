"use client";

import React, { useEffect, useRef } from "react";
import { ClipboardList, MapPin, Ruler, Hammer, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Requirement",
    description: "Understand the customer's roofing requirement and intended usage.",
    icon: ClipboardList,
  },
  {
    number: "2",
    title: "Site Planning",
    description: "Review the available space, dimensions, and project requirements.",
    icon: MapPin,
  },
  {
    number: "3",
    title: "Design & Planning",
    description: "Develop the roofing structure based on project requirements.",
    icon: Ruler,
  },
  {
    number: "4",
    title: "Fabrication",
    description: "Prepare the required structural components.",
    icon: Hammer,
  },
  {
    number: "5",
    title: "Installation",
    description: "Install and complete the roofing structure at the project site.",
    icon: CheckCircle2,
  },
];

export default function AboutProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let ctx: any;
    let isUnmounted = false;

    const initGSAP = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");

      if (isUnmounted) return;

      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
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
                end: () => `+=${scrollAmount}`,
                scrub: 1,
              }
            });
          }
        });
      }, sectionRef);
    };

    initGSAP();

    return () => {
      isUnmounted = true;
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div>
      <section
        id="about-process"
        ref={sectionRef}
        className="bg-[#f8f9fa] min-h-[auto] md:min-h-[700px] md:h-screen flex flex-col md:justify-center overflow-hidden relative z-10 process-section-wrapper py-4 md:py-6"
      >
        {/* Header */}
        <div className="w-full z-10 pointer-events-none mt-4 md:mt-24 mb-6 md:mb-0">
          <div className="max-w-[1400px] w-full mx-auto px-6 text-center" data-reveal="stagger">
            <div className="overflow-hidden">
              <h2 className="text-[clamp(36px,5vw,48px)] font-extrabold text-[#1e2229] tracking-tight mx-auto font-heading" data-reveal="text">
                From Planning to Installation
              </h2>
              <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto mt-4" data-reveal="text">
                KPN Roofing Shed follows a structured approach to roofing shed projects to maintain a clear workflow from initial requirement to project completion.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Layout */}
        <div className="md:hidden flex flex-col gap-8 mt-8 px-6 pb-8 relative z-10 max-w-lg mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative flex gap-6 items-start z-10" data-reveal="fade-up">
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-[0_12px_30px_rgba(0,163,224,0.15)] border-2 border-white z-10 relative">
                  <Icon size={28} color="#00a3e0" strokeWidth={2.5} />
                  <div className="absolute -top-4 -left-3 text-5xl font-black text-[#e2e8f0] z-[-1] leading-none select-none">{step.number}</div>
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-extrabold text-[#1e2229] mb-2 font-heading">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Horizontal Scrolling Container (Desktop) */}
        <div
          ref={sliderRef}
          className="hidden md:flex relative mt-16"
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
              stroke="rgba(0,163,224,0.15)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              id="about-process-path"
              ref={pathRef}
              d="M 0,250 C 100,250 150,150 250,150 S 600,350 750,350 S 1100,150 1250,150 S 1600,350 1750,350 S 2100,150 2250,150 S 2400,250 2500,250"
              fill="none"
              stroke="#00a3e0"
              strokeWidth="8"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0px 25px 6px rgba(0, 163, 224, 0.4))" }}
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
                    color: "rgba(0,163,224,0.04)",
                    lineHeight: 1,
                    zIndex: -1,
                  }}
                >
                  {step.number}
                </div>

                {/* Icon Badge on the path */}
                <div className="absolute w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-[0_12px_30px_rgba(0,163,224,0.2)] border-2 border-[#00a3e0]/10 z-10"
                  style={{ left: "-32px", top: "-32px" }}>
                  <Icon size={28} color="#00a3e0" strokeWidth={2.5} />
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
    </div>
  );
}
