const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'AboutProcessSection.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Update GSAP logic to use matchMedia
const gsapOld = `      ctx = gsap.context(() => {
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
            end: () => \`+=\${scrollAmount}\`,
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
              end: () => \`+=\${scrollAmount}\`,
              scrub: 1,
            }
          });
        }
      }, sectionRef);`;

const gsapNew = `      ctx = gsap.context(() => {
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
              end: () => \`+=\${scrollAmount}\`,
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
                end: () => \`+=\${scrollAmount}\`,
                scrub: 1,
              }
            });
          }
        });
      }, sectionRef);`;

content = content.replace(gsapOld, gsapNew);

// Update Section Wrapper
content = content.replace('className="bg-[#f8f9fa] h-screen flex flex-col justify-center overflow-hidden relative z-10 process-section-wrapper"', 'className="bg-[#f8f9fa] md:h-screen flex flex-col md:justify-center overflow-hidden relative z-10 process-section-wrapper py-24 md:py-0"');

// Update Slider JSX
const sliderJSXOld = `      {/* Horizontal Scrolling Container */}
      <div
        ref={sliderRef}
        className="flex relative mt-16"
        style={{ width: "2500px", height: "500px" }}
      >`;

const sliderJSXNew = `      {/* Mobile Vertical Layout */}
      <div className="md:hidden flex flex-col gap-12 mt-32 px-6 pb-20 relative z-10 max-w-lg mx-auto">
        <div className="absolute left-[38px] top-0 bottom-0 w-1 bg-slate-200 z-0" />
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
      >`;

content = content.replace(sliderJSXOld, sliderJSXNew);

// Fix fixed header on mobile overlapping content
content = content.replace('className="absolute top-20 left-0 w-full z-10 pointer-events-none"', 'className="md:absolute top-20 left-0 w-full z-10 pointer-events-none mt-10 md:mt-0"');

fs.writeFileSync(filePath, content);
console.log("Updated AboutProcessSection.tsx successfully.");
