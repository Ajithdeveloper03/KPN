"use client";

import React, { useState } from "react";

import { MapPin, Phone, Mail } from "lucide-react";


import PageHero from "@/components/PageHero";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-[#121316] text-white selection:bg-[#ee0000] selection:text-white flex flex-col">
      
      <PageHero 
        title="Let's Talk" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" }
        ]} 
      />
      
      {/* Container with standard padding since PageHero sits behind the fixed header */}
      <main className="max-w-[1400px] w-full mx-auto px-6 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start flex-grow">
        
        {/* Left Column (Details) */}
        <section className="lg:col-span-5 space-y-12">
          <div className=" hidden md:block">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">Connect with Excellence</span>
            <p className="text-lg text-slate-400 leading-relaxed max-w-md font-medium mt-4">
              Where Vision Meets Reality. Whether you&apos;re looking for premium industrial sheds or custom roofing solutions, our expert team is ready to assist you.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-10  mt-12">
            <div className="group">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500 block mb-3 flex items-center gap-3 font-bold">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ee0000]/20 group-hover:text-[#ee0000] transition-colors">
                  <Phone size={14}/> 
                </div>
                Main Office
              </span>
              <a href="tel:+919876543210" className="text-white hover:text-[#ee0000] transition-colors text-2xl font-bold ml-11">+91 98765 43210</a>
            </div>
            <div className="group">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500 block mb-3 flex items-center gap-3 font-bold">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ee0000]/20 group-hover:text-[#ee0000] transition-colors">
                  <Mail size={14}/> 
                </div>
                General Email
              </span>
              <a href="mailto:info@kpnroofingshed.com" className="text-white hover:text-[#ee0000] transition-colors text-xl font-medium ml-11">info@kpnroofingshed.com</a>
            </div>
            <div className="group">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500 block mb-3 flex items-center gap-3 font-bold">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ee0000]/20 group-hover:text-[#ee0000] transition-colors">
                  <MapPin size={14}/> 
                </div>
                Location
              </span>
              <p className="text-slate-300 text-lg ml-11 font-medium leading-relaxed">123 Industrial Area, Phase 1,<br />Coimbatore, Tamil Nadu 641001</p>
            </div>
          </div>
          
          {/* Socials */}
          <div className="flex items-center gap-4 pt-8  ml-11">
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#ee0000] hover:text-white hover:border-[#ee0000] transition-all duration-300 shadow-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#ee0000] hover:text-white hover:border-[#ee0000] transition-all duration-300 shadow-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#ee0000] hover:text-white hover:border-[#ee0000] transition-all duration-300 shadow-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>

        </section>

        {/* Right Column (Contact Form) */}
        <section className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-14 shadow-2xl backdrop-blur-md  relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ee0000] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Name field */}
              <div className="relative w-full group pt-4">
                <input 
                  id="name" 
                  name="name"
                  type="text" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required
                  className="w-full bg-transparent border-b border-slate-600 py-3 outline-none focus:border-[#ee0000] transition-colors peer placeholder-transparent text-white font-medium text-lg" 
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-4 text-xs uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#ee0000]"
                >
                  Your Name
                </label>
              </div>
              {/* Email field */}
              <div className="relative w-full group pt-4">
                <input 
                  id="email" 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address" 
                  required
                  className="w-full bg-transparent border-b border-slate-600 py-3 outline-none focus:border-[#ee0000] transition-colors peer placeholder-transparent text-white font-medium text-lg" 
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-4 text-xs uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#ee0000]"
                >
                  Email Address
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Phone field */}
              <div className="relative w-full group pt-4">
                <input 
                  id="phone" 
                  name="phone"
                  type="tel" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number" 
                  required
                  className="w-full bg-transparent border-b border-slate-600 py-3 outline-none focus:border-[#ee0000] transition-colors peer placeholder-transparent text-white font-medium text-lg" 
                />
                <label 
                  htmlFor="phone" 
                  className="absolute left-0 top-4 text-xs uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#ee0000]"
                >
                  Phone Number
                </label>
              </div>
              {/* Subject field */}
              <div className="relative w-full group pt-4">
                <input 
                  id="subject" 
                  name="subject"
                  type="text" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  required
                  className="w-full bg-transparent border-b border-slate-600 py-3 outline-none focus:border-[#ee0000] transition-colors peer placeholder-transparent text-white font-medium text-lg" 
                />
                <label 
                  htmlFor="subject" 
                  className="absolute left-0 top-4 text-xs uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#ee0000]"
                >
                  Subject
                </label>
              </div>
            </div>

            {/* Message Field */}
            <div className="relative w-full group pt-4">
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirements..." 
                required
                className="w-full bg-transparent border-b border-slate-600 py-3 outline-none focus:border-[#ee0000] transition-colors resize-none h-32 peer placeholder-transparent text-white font-medium text-lg"
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute left-0 top-4 text-xs uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#ee0000]"
              >
                Tell us about your requirements...
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#ee0000] text-white py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#cc0000] hover:shadow-[0_10px_30px_rgba(238,0,0,0.3)] transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1"
            >
              Submit Enquiry
            </button>
          </form>
        </section>
      </main>
      
      {/* Full-width Google Map */}
      <section className="w-full h-[400px] md:h-[500px] bg-slate-800">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.86532454504!2d76.95147551000624!3d11.01980315802281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className=""
        ></iframe>
      </section>
    </div>
  );
}
