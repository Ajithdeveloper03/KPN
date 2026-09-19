import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import QuoteButton from "@/components/QuoteButton";
import TableOfContents from "@/components/TableOfContents";
import BlogFAQ from "@/components/BlogFAQ";

export async function generateStaticParams() {
  return [
    { slug: "ultimate-guide-to-roofing-sheds" }
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
    
  return {
    title: `${title} | KPN Roofing Shed`,
    description: "Read expert insights on roofing shed construction, industrial sheds, and agricultural sheds from KPN Roofing Shed.",
    alternates: {
      canonical: `https://kpnroofingsheds.com/blog/${slug}/`,
    },
  };
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post = null;

  if (slug === "ultimate-guide-to-roofing-sheds") {
    post = {
      title: "The Ultimate Guide to Roofing Shed Construction",
      content: `
        <h2 id="introduction" class="text-2xl md:text-3xl font-extrabold text-[#111] mt-12 mb-6 flex items-center gap-3"><span class="flex items-center justify-center w-10 h-10 rounded-xl bg-[#ee0000]/10 text-[#ee0000] text-lg shrink-0">1</span>Introduction to Roofing Sheds</h2>
        <p class="text-[17px] leading-[1.8] text-slate-600 mb-6 font-medium">Choosing the right roofing shed is critical for the long-term success of your industrial, agricultural, or residential project. A well-built shed provides protection, durability, and functional value.</p>
        <img src="/images/services/factory3.webp" alt="Interior of a warehouse shed with a truck parked for loading" class="w-full max-w-[800px] h-auto object-cover rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] my-10" />
        
        <h2 id="materials" class="text-2xl md:text-3xl font-extrabold text-[#111] mt-12 mb-6 flex items-center gap-3"><span class="flex items-center justify-center w-10 h-10 rounded-xl bg-[#ee0000]/10 text-[#ee0000] text-lg shrink-0">2</span>Choosing the Right Materials</h2>
        <p class="text-[17px] leading-[1.8] text-slate-600 mb-6 font-medium">Steel is the undisputed king of modern shed construction. Using high-quality materials like Apollo steel ensures structural integrity against heavy winds and storms.</p>
        
        <h3 id="roofing-sheets" class="text-xl md:text-2xl font-bold text-[#111] mt-8 mb-4">Types of Roofing Sheets</h3>
        <p class="text-[17px] leading-[1.8] text-slate-600 mb-6 font-medium">From color-coated galvalume sheets to polycarbonate sheets for natural light, the roof cladding determines heat resistance and lifespan.</p>
        <img src="/images/animal2.webp" alt="Elevated cattle shed with a green-and-red slatted floor loading ramp" class="w-full max-w-[800px] h-auto object-cover rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] my-10" />
        
        <h2 id="ventilation" class="text-2xl md:text-3xl font-extrabold text-[#111] mt-12 mb-6 flex items-center gap-3"><span class="flex items-center justify-center w-10 h-10 rounded-xl bg-[#ee0000]/10 text-[#ee0000] text-lg shrink-0">3</span>The Importance of Ventilation</h2>
        <p class="text-[17px] leading-[1.8] text-slate-600 mb-6 font-medium">Proper airflow prevents moisture buildup and heat accumulation, which is especially important for livestock sheds and industrial manufacturing units.</p>
        
        <ul class="space-y-4 mb-8 bg-[#f8f9fc] p-8 rounded-2xl border border-slate-100">
          <li class="flex items-start gap-3"><span class="text-[#ee0000] mt-1 font-bold">✓</span><span class="text-[17px] leading-[1.7] text-slate-700 font-medium"><strong>Turbo ventilators:</strong> Provide continuous exhaust and remove hot air trapped at the ceiling.</span></li>
          <li class="flex items-start gap-3"><span class="text-[#ee0000] mt-1 font-bold">✓</span><span class="text-[17px] leading-[1.7] text-slate-700 font-medium"><strong>Ridge vents:</strong> Utilize natural thermal lift to ensure consistent airflow along the entire roofline.</span></li>
          <li class="flex items-start gap-3"><span class="text-[#ee0000] mt-1 font-bold">✓</span><span class="text-[17px] leading-[1.7] text-slate-700 font-medium"><strong>Side mesh:</strong> Essential for cross ventilation, particularly in agricultural environments like poultry and goat farms.</span></li>
        </ul>
        <img src="/images/goat2.webp" alt="Elevated goat shed under construction next to high-rise apartments" class="w-full max-w-[800px] h-auto object-cover rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] my-10" />

        <h2 id="faqs" class="text-2xl md:text-3xl font-extrabold text-[#111] mt-12 mb-6 flex items-center gap-3"><span class="flex items-center justify-center w-10 h-10 rounded-xl bg-[#ee0000]/10 text-[#ee0000] text-lg shrink-0">4</span>Frequently Asked Questions</h2>
        <div id="faq-mount-point"></div>

        <h2 id="conclusion" class="text-2xl md:text-3xl font-extrabold text-[#111] mt-12 mb-6 flex items-center gap-3"><span class="flex items-center justify-center w-10 h-10 rounded-xl bg-[#ee0000]/10 text-[#ee0000] text-lg shrink-0">5</span>Conclusion</h2>
        <p class="text-[17px] leading-[1.8] text-slate-600 mb-6 font-medium">Planning your shed with experts like KPN Roofing Shed ensures you get maximum value, durability, and performance from your investment. The right layout, materials, and ventilation design will save you massive maintenance costs over the next decade.</p>
      `,
      faqs: [
        { question: "How long does it take to construct a standard industrial shed?", answer: "Depending on the size, a standard 2000 sq.ft industrial shed typically takes between 3 to 4 weeks from design approval to final installation." },
        { question: "Which roofing sheet is best for heat resistance?", answer: "PUF insulated sheets or color-coated galvalume sheets combined with bubble wrap insulation provide excellent heat reduction." },
        { question: "Do you provide a warranty on the construction?", answer: "Yes, KPN Roofing Shed provides a 10-year guarantee on structural integrity and a 3-year replacement warranty on specific flooring installations." }
      ],
      image: "/images/factory.webp",
      author: "KPN Experts",
      created_at: new Date().toISOString(),
      read_time: "8 min read",
      category: "Guides",
    };
  } else {
    // Fallback placeholder for any other slug
    post = {
      title: "Post Not Found",
      content: '<p class="text-xl leading-relaxed text-slate-600 mb-8 font-medium">This blog post could not be found.</p>',
      image: "/images/terrace.webp",
      author: "KPN Engineering Team",
      created_at: new Date().toISOString(),
      read_time: "1 min read",
      category: "General",
    };
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111] selection:bg-[#ffcc00] selection:text-[#111] flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "image": "https://kpnroofingsheds.com" + post.image,
            "author": {
              "@type": "Organization",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "KPN Roofing Shed",
              "logo": {
                "@type": "ImageObject",
                "url": "https://kpnroofingsheds.com/images/logo.webp"
              }
            },
            "datePublished": post.created_at
          })
        }}
      />
      <main className="flex-grow pb-20">

        {/* Article Hero: Modern Split Layout */}
        <section className="bg-slate-900 w-full pt-32 pb-12">
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
              
              {/* Left: Metadata and Title */}
              <div>
                <Link id="page-Link-112" href="/blog/"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#ee0000] hover:text-[#ff3333] transition-colors mb-8 uppercase tracking-widest"
                >
                  <ArrowLeft size={16} /> Back to Blog
                </Link>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-[#ee0000]/20 text-[#ff3333] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-bold text-slate-400">
                    <Clock size={16} /> {post.read_time}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-8">
                  {post.title}
                </h1>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 border border-slate-700">
                    <User size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{post.author}</h4>
                    <span className="text-sm text-slate-400 font-medium flex items-center gap-1.5">
                      <Calendar size={14} />{" "}
                      {new Date(post.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: Featured Image */}
              <div className="relative w-full aspect-[4/3] lg:aspect-[4/3.5] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                <Image
                  src={post.image || "/images/placeholder.webp"}
                  alt={post.title}
                  fill sizes="100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              
            </div>
          </div>
        </section>

        {/* Content Wrapper */}
        <article className="max-w-[1400px] mx-auto px-6 border-t border-slate-200 pt-16">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* Main Content (Left) */}
            <div className="w-full lg:w-[68%]">
              
              {/* Share Buttons */}
              <div className="flex items-center gap-3 mb-10 pb-10 border-b border-slate-200">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider hidden sm:block mr-4">
                  Share Article
                </span>
                <button id="page-button-113" className="w-11 h-11 rounded-full bg-[#f8f9fc] border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" /></svg>
                </button>
                <button id="page-button-114" className="w-11 h-11 rounded-full bg-[#f8f9fc] border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </button>
                <button id="page-button-115" className="w-11 h-11 rounded-full bg-[#f8f9fc] border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </button>
              </div>

              {/* Dynamic Content Injection */}
              {post.content.split('<div id="faq-mount-point"></div>').map((part: string, index: number, array: string[]) => (
                <React.Fragment key={index}>
                  <div
                    className="prose prose-lg max-w-none prose-headings:text-[#111] prose-a:text-[#062088] prose-a:font-bold hover:prose-a:text-[#ee0000] prose-strong:text-[#111]"
                    dangerouslySetInnerHTML={{ __html: part }}
                  />
                  {/* Inject the FAQ component in the middle split */}
                  {index === 0 && array.length > 1 && post.faqs && (
                    <BlogFAQ faqs={post.faqs} />
                  )}
                </React.Fragment>
              ))}

              {/* Tags & Bottom CTA */}
              <div className="mt-16 pt-10 border-t border-slate-200">
                <div className="bg-[#f8f9fc] rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-100 shadow-sm">
                  <div>
                    <h4 className="text-2xl font-bold text-[#111] mb-2">Ready to build your shed?</h4>
                    <p className="text-slate-500 font-medium text-lg">Talk to our experts for a transparent quotation.</p>
                  </div>
                  <QuoteButton className="bg-[#ee0000] text-white px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 hover:shadow-lg transition-all whitespace-nowrap" />
                </div>
              </div>
            </div>

            {/* Sidebar (Right) */}
            <div className="w-full lg:w-[30%] lg:sticky lg:top-32 self-start pt-8 lg:pt-0">
              <TableOfContents />
            </div>

          </div>
        </article>
      </main>
    </div>
  );
}
