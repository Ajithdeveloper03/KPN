import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Plus, Minus, ArrowRight, HeartHandshake, Target, Medal, Users, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://kpnroofingsheds.com/corporate-social-responsibility/",
  },
  title: "Corporate Social Responsibility (CSR) | KPN Roofing Shed",
  description: "KPN Roofing Shed supports students, athletes, sports participation, and traditional arts through CSR initiatives that encourage talent and community development.",
  keywords: "KPN Roofing Shed CSR, corporate social responsibility KPN Roofing Shed, CSR activities in Trichy, student support CSR, sports CSR initiatives, traditional arts support Trichy",
};

export default function CSRPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://kpnroofingsheds.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Corporate Social Responsibility",
                "item": "https://kpnroofingsheds.com/corporate-social-responsibility/"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://kpnroofingsheds.com/corporate-social-responsibility/#webpage",
            "url": "https://kpnroofingsheds.com/corporate-social-responsibility/",
            "name": "Corporate Social Responsibility (CSR) | KPN Roofing Shed",
            "description": "Learn about KPN Roofing Shed's Corporate Social Responsibility initiatives supporting students, athletes, sports participation, traditional arts, and community activities.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://kpnroofingsheds.com/#website",
              "url": "https://kpnroofingsheds.com/",
              "name": "KPN Roofing Shed"
            },
            "about": {
              "@type": "Thing",
              "name": "Corporate Social Responsibility"
            },
            "breadcrumb": {
              "@id": "https://kpnroofingsheds.com/corporate-social-responsibility/#breadcrumb"
            },
            "mainEntity": {
              "@type": "Organization",
              "@id": "https://kpnroofingsheds.com/#organization",
              "name": "KPN Roofing Shed",
              "url": "https://kpnroofingsheds.com/"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is KPN Roofing Shed's CSR initiative?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "KPN Roofing Shed's CSR initiatives focus on supporting students, athletes, sports participation, traditional arts, and community activities through encouragement, participation, and recognition."
                }
              },
              {
                "@type": "Question",
                "name": "Does KPN Roofing Shed support students?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. KPN Roofing Shed supports students and young talents by encouraging their participation in activities and recognising their achievements and efforts."
                }
              },
              {
                "@type": "Question",
                "name": "Does KPN Roofing Shed support athletes and sports activities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. As part of its CSR activities, KPN supports athletes, sports teams, and sporting activities by encouraging participation and recognising sporting achievements."
                }
              },
              {
                "@type": "Question",
                "name": "Does KPN Roofing Shed support traditional arts?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. KPN encourages traditional arts and cultural activities as part of its CSR efforts, with a focus on supporting young participants and preserving interest in cultural heritage."
                }
              },
              {
                "@type": "Question",
                "name": "Why does KPN Roofing Shed undertake CSR activities?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "KPN believes that responsible business growth should also contribute to community development. Its CSR initiatives aim to encourage young talent, sports participation, traditional arts, and community involvement."
                }
              }
            ]
          })
        }}
      />
      <PageHero
        title="Corporate Social Responsibility"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "CSR", href: "/corporate-social-responsibility" }
        ]}
        bgImage="/images/csr/image (9).webp"
        bgPosition="object-cover object-top"
      />

      {/* 1. Intro Section (Image Left, Text Right) */}
      <section className="py-6 lg:py-8 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-square md:aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
              <div className="shiny-hover w-full h-full">
                <Image src="/images/csr/image (1).webp" alt="CSR Initiatives" fill sizes="100vw" className="object-cover" />
              </div>
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-8 -right-8 bg-[#ffcc00] p-8 rounded-3xl shadow-xl hidden md:block max-w-[280px]">
              <HeartHandshake size={40} className="text-[#111] mb-4" />
              <p className="text-[#111] font-bold text-lg leading-snug">Encouraging talent and community development.</p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-6">
            <span className="px-5 py-2 rounded-full border border-blue-100 bg-blue-50 text-sm font-bold text-[#004b87] tracking-wider uppercase inline-block">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e2229] leading-tight font-heading">
              Supporting Students, Sports & <span className="text-[#00a3e0] font-serif font-medium italic">Traditional Arts</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              At KPN Roofing Shed, our responsibility extends beyond building roofing solutions. Through our Corporate Social Responsibility (CSR) initiatives, we support students, young athletes, sports participation, and traditional arts by encouraging talent, recognising achievements, and contributing to community activities.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              Our CSR efforts are focused on creating opportunities for young people to participate, develop their skills, and gain recognition in areas that contribute to education, sports, culture, and community life.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Why CSR Matters */}
      <section className="py-6 lg:py-8 bg-[#1e2229]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white font-heading leading-tight">
                Why CSR Matters to <br/><span className="text-[#ffcc00] font-serif font-medium italic">KPN Roofing Shed</span>
              </h2>
              <div className="w-24 h-1 bg-[#ee0000] rounded-full" />
              <p className="text-xl text-slate-300 font-medium leading-relaxed">
                At KPN Roofing Shed, we believe that a business is not just about building structures — it's about building lives, communities, and futures.
              </p>
            </div>
            <div className="w-full md:w-1/2 bg-white/5 border border-white/10 p-10 rounded-[2rem] shadow-xl">
              <blockquote className="text-xl md:text-2xl font-serif text-white leading-relaxed italic">
                "Our founder, Mr. Puniyamoorthi (a) Gobi, started KPN with a vision of quality and reliability. Today, we extend that vision beyond construction — into education, sports, arts, and community development. When a student is recognised, an athlete is supported, or a traditional art form is preserved — we see that as our success too."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Approach to Community Support (Text Left, Image Right) */}
      <section className="py-6 lg:py-8 bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-5/12 relative">
            <div className="relative aspect-[3/4] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200">
              <div className="shiny-hover w-full h-full">
                <Image src="/images/csr/image (3).webp" alt="Our Approach" fill sizes="100vw" className="object-cover" />
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-7/12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e2229] leading-tight font-heading mb-6">
              Our Approach to <span className="text-[#ee0000] font-serif font-medium italic">Community Support</span>
            </h2>
            <p className="text-lg text-slate-500 mb-12 font-medium">
              KPN's CSR activities focus on encouragement, participation, recognition, and community involvement.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                <Target size={36} className="text-[#00a3e0] mb-5" />
                <h4 className="text-xl font-bold text-[#1e2229] mb-3">Encourage</h4>
                <p className="text-slate-600 font-medium">We encourage students, athletes, and young talents to participate actively in their chosen fields.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                <HeartHandshake size={36} className="text-[#ee0000] mb-5" />
                <h4 className="text-xl font-bold text-[#1e2229] mb-3">Support</h4>
                <p className="text-slate-600 font-medium">We contribute to activities and initiatives where our involvement can help participants and community programmes.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                <Medal size={36} className="text-[#ffcc00] mb-5" />
                <h4 className="text-xl font-bold text-[#1e2229] mb-3">Recognise</h4>
                <p className="text-slate-600 font-medium">We celebrate achievements and recognise the efforts of students, athletes, and talented individuals.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
                <Users size={36} className="text-[#062088] mb-5" />
                <h4 className="text-xl font-bold text-[#1e2229] mb-3">Inspire</h4>
                <p className="text-slate-600 font-medium">We aim to motivate younger generations to continue developing their skills and participating in sports, education, arts, and cultural activities.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 4. CSR Highlights (Image Left, List Right) */}
      <section className="py-6 lg:py-8 bg-white border-t border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-video md:aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-xl">
              <div className="shiny-hover w-full h-full">
                <Image src="/images/csr/image (4).webp" alt="CSR Highlights" fill sizes="100vw" className="object-cover" />
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e2229] leading-tight font-heading mb-6">
              CSR <span className="text-[#004b87] font-serif font-medium italic">Highlights</span>
            </h2>
            
            <div className="space-y-6">
              {[
                { title: "Students", desc: "Encouraging students and young talents through participation, recognition, and community support." },
                { title: "Athletes", desc: "Supporting sports participation and recognising the achievements of young athletes and teams." },
                { title: "Traditional Arts", desc: "Encouraging traditional arts, cultural programmes, and younger generations' involvement in heritage activities." },
                { title: "Community Participation", desc: "Taking part in community activities that promote talent, participation, and positive development." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-slate-100 transition-colors">
                  <CheckCircle2 size={28} className="text-[#00a3e0] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-[#1e2229] mb-2">{item.title}</h4>
                    <p className="text-slate-600 font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* 5. Frequently Asked Questions (No Images) */}
      <section className="py-6 lg:py-8 bg-[#1e2229] text-white overflow-hidden border-t border-white/10">
        <div className="max-w-[1000px] mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="px-5 py-2 rounded-full border border-white/20 bg-white/5 text-sm font-bold text-[#ffcc00] tracking-wider uppercase inline-block mb-6">
              FAQ's
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight font-heading">
              Frequently Asked <span className="font-serif font-medium text-[#00a3e0] italic">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "What is KPN Roofing Shed's CSR initiative?", a: "KPN Roofing Shed's CSR initiatives focus on supporting students, athletes, sports participation, traditional arts, and community activities through encouragement, participation, and recognition." },
              { q: "Does KPN Roofing Shed support students?", a: "Yes. KPN Roofing Shed supports students and young talents by encouraging their participation in activities and recognising their achievements and efforts." },
              { q: "Does KPN Roofing Shed support athletes and sports activities?", a: "Yes. As part of its CSR activities, KPN supports athletes, sports teams, and sporting activities by encouraging participation and recognising sporting achievements." },
              { q: "Does KPN Roofing Shed support traditional arts?", a: "Yes. KPN encourages traditional arts and cultural activities as part of its CSR efforts, with a focus on supporting young participants and preserving interest in cultural heritage." },
              { q: "Why does KPN Roofing Shed undertake CSR activities?", a: "KPN believes that responsible business growth should also contribute to community development. Its CSR initiatives aim to encourage young talent, sports participation, traditional arts, and community involvement." }
            ].map((faq, i) => (
              <details name='csr-faq' key={i} className="group bg-white/5 rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 open:bg-white/10">
                <summary className="flex justify-between items-center cursor-pointer list-none p-6 md:p-8 text-lg font-bold text-white">
                  <span className="flex gap-4 pr-4">{faq.q}</span>
                  <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center shrink-0 transition-all duration-300 group-open:bg-[#ffcc00] group-open:border-[#ffcc00] group-open:text-[#111]">
                    <Plus size={20} className="block group-open:hidden" strokeWidth={2} />
                    <Minus size={20} className="hidden group-open:block" strokeWidth={2} />
                  </span>
                </summary>
                <div className="px-6 md:px-8 pb-8 text-slate-300 font-medium leading-relaxed text-base pt-2 opacity-0 group-open:opacity-100 group-open:animate-fadeIn">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* 5.5 Community Image Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#ee0000] font-bold tracking-widest uppercase text-sm mb-3 block">Gallery</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e2229] font-heading">Our Community Impact</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "/images/csr/image (1).webp",
              "/images/csr/image (2).webp",
              "/images/csr/image (3).webp",
              "/images/csr/image (4).webp",
              "/images/csr/image (5).webp",
              "/images/csr/image (6).webp",
              "/images/csr/image (7).webp",
              "/images/csr/image (8).webp",
              "/images/csr/image (9).webp",
              "/images/csr/image (10).webp"
            ].map((src, index) => (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group">
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

      {/* 6. Outro & Call to Action (Background Image Split) */}
      <section className="relative py-24 overflow-hidden bg-[#004b87]">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/images/csr/image (7).webp" alt="CTA Background" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#004b87] to-transparent z-10" />
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-2/3 text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 font-heading">
              Building Sheds.<br/>
              <span className="text-[#ffcc00] font-serif font-medium italic">Supporting Communities.</span>
            </h2>
            <p className="text-xl text-blue-100 font-medium mb-4 max-w-2xl">
              KPN Roofing Shed believes its responsibility goes beyond construction. Through its CSR initiatives, KPN continues to encourage students, athletes, young talent, traditional arts, and community participation.
            </p>
            <p className="text-lg text-white font-bold tracking-wide uppercase mt-6 opacity-90">
              Supporting Talent • Encouraging Participation • Preserving Culture
            </p>
          </div>
          
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <h4 className="text-2xl font-bold text-white mb-2">Learn More About KPN</h4>
            <p className="text-blue-100 font-medium mb-4">Discover KPN Roofing Shed's commitment to responsible business and community development.</p>
            <Link id="page-Link-123" href="/contact/" className="bg-[#ee0000] hover:bg-[#cc0000] text-white font-bold py-4 px-8 rounded-full text-center transition-transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2">
              Contact KPN Roofing Shed <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
