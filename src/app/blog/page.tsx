import React from "react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

export default function BlogArchivePage() {
  // Hardcoded static blog post as requested
  const staticBlog = {
    slug: "ultimate-guide-to-roofing-sheds",
    title: "The Ultimate Guide to Roofing Shed Construction",
    image: "/images/image2.jpeg",
    category: "Guides",
    created_at: new Date().toISOString(),
    read_time: "8 min read",
    content: "Learn everything you need to know about choosing the right roofing shed, materials, layout planning, and maintenance in this comprehensive guide.",
    author: "KPN Experts"
  };

  const posts = [staticBlog];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111] selection:bg-[#ffcc00] selection:text-[#111] flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "KPN Roofing Shed Blog",
            "url": "https://kpnroofingsheds.com/blog/",
            "description": "Expert advice, project showcases, and industry trends to help you make informed decisions about your next roofing shed project.",
            "blogPost": posts.map(post => ({
              "@type": "BlogPosting",
              "headline": post.title,
              "image": "https://kpnroofingsheds.com" + post.image,
              "datePublished": post.created_at,
              "author": {
                "@type": "Organization",
                "name": post.author
              }
            }))
          })
        }}
      />
      <PageHero 
        title="Our Blog" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog/" }
        ]} 
        bgImage="/images/services/terrace-shed-banner-image.png"
      />

      <main className="flex-grow">
        <section className="max-w-[1400px] mx-auto px-6 py-12 lg:py-16">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-5 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-600 tracking-wide uppercase mb-6 inline-block">
              Insights & Updates
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#111] mb-6">
              Latest from <span className="font-serif font-medium text-[#ee0000] italic">KPN Roofing Shed</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              Expert advice, project showcases, and industry trends to help you make informed decisions about your next roofing shed project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <article key={idx} className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] overflow-hidden group hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col">
                <Link href={`/blog/${post.slug}/`} className="relative w-full h-[240px] block overflow-hidden">
                  <Image 
                    src={post.image || "/images/placeholder.jpg"} 
                    alt={post.title} 
                    fill sizes="100vw" 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#062088]">
                    {post.category}
                  </div>
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-4">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {new Date(post.created_at).toLocaleDateString()}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {post.read_time}</span>
                  </div>
                  <Link href={`/blog/${post.slug}/`} className="block group-hover:text-[#ee0000] transition-colors mb-4">
                    <h3 className="text-2xl font-bold text-[#111] leading-snug group-hover:text-[#ee0000] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8 line-clamp-3">
                    {post.content}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <div className="w-8 h-8 rounded-full bg-[#f8f9fa] flex items-center justify-center text-[#062088]">
                        <User size={14} />
                      </div>
                      {post.author}
                    </div>
                    <Link href={`/blog/${post.slug}/`} className="w-10 h-10 rounded-full bg-[#f8f9fa] group-hover:bg-[#ffcc00] flex items-center justify-center text-[#111] transition-colors">
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </section>
      </main>
    </div>
  );
}
