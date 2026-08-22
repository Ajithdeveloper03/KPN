"use client";

import React, { useState } from "react";

import { MapPin, Phone, Mail } from "lucide-react";


import PageHero from "@/components/PageHero";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    shedType: "",
    message: "",
    bot_field: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/mailer/send_mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "Contact Page",
          ...formData
        }),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", shedType: "", message: "", bot_field: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setFormStatus("error");
      setErrorMessage("Network error. Please ensure you have internet access and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#121316] text-white selection:bg-[#ee0000] selection:text-white flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://kpnroofingsheds.com/contact/#contactpage",
            "url": "https://kpnroofingsheds.com/contact/",
            "name": "Contact KPN Roofing Shed",
            "description": "Contact KPN Roofing Shed for industrial, agricultural, home roofing, animal husbandry and sports turf shed construction services across India.",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://kpnroofingsheds.com/#website"
            },
            "about": {
              "@type": "Organization",
              "@id": "https://kpnroofingsheds.com/#organization"
            },
            "publisher": {
              "@type": "Organization",
              "@id": "https://kpnroofingsheds.com/#organization"
            },
            "inLanguage": "en-IN"
          })
        }}
      />
      
      <PageHero 
        title="Let's Talk" 
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" }
        ]} 
      />
      
      {/* Container with standard padding since PageHero sits behind the fixed header */}
      <main className="max-w-[1400px] w-full mx-auto px-6 py-12 lg:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start flex-grow">
        
        {/* Left Column (Details) */}
        <section className="lg:col-span-5 space-y-8">
          <div className=" hidden md:block">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold">Connect with Excellence</span>
            <p className="text-lg text-slate-400 leading-relaxed max-w-md font-medium mt-4">
              Where Vision Meets Reality. Whether you&apos;re looking for premium industrial sheds or custom roofing solutions, our expert team is ready to assist you.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-10  mt-6">
            <div className="group">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500 block mb-3 flex items-center gap-3 font-bold">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ee0000]/20 group-hover:text-[#ee0000] transition-colors">
                  <Phone size={14}/> 
                </div>
                Main Office
              </span>
              <div className="text-white text-2xl font-bold ml-11">
                <a href="tel:+919788770786" className="hover:text-[#ee0000] transition-colors">9788770786</a>
                {", "}
                <a href="tel:04312660786" className="hover:text-[#ee0000] transition-colors">0431-2660786</a>
              </div>
            </div>
            <div className="group">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500 block mb-3 flex items-center gap-3 font-bold">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ee0000]/20 group-hover:text-[#ee0000] transition-colors">
                  <Mail size={14}/> 
                </div>
                General Email
              </span>
              <a href="mailto:kpnroofingsheds@gmail.com" className="text-white hover:text-[#ee0000] transition-colors text-xl font-medium ml-11">kpnroofingsheds@gmail.com</a>
            </div>
            <div className="group">
              <span className="text-xs uppercase tracking-[0.2em] text-slate-500 block mb-3 flex items-center gap-3 font-bold">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ee0000]/20 group-hover:text-[#ee0000] transition-colors">
                  <MapPin size={14}/> 
                </div>
                Location
              </span>
              <p className="text-slate-300 text-lg ml-11 font-medium leading-relaxed">Plot no 151 E, 5th Cross W, South Extension, Amman Nagar, Pappakurichi Kattur, Tiruchirappalli, Tamil Nadu 620019</p>
            </div>
          </div>
          
          {/* Socials */}
          <div className="flex items-center gap-4 pt-2  ml-11">
            <a href="https://www.facebook.com/kpnroofingshed" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#ee0000] hover:text-white hover:border-[#ee0000] transition-all duration-300 shadow-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" /></svg>
            </a>
            <a href="https://www.instagram.com/kpnroofingshed" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#ee0000] hover:text-white hover:border-[#ee0000] transition-all duration-300 shadow-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.youtube.com/@kpnroofingshedindia" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#ee0000] hover:text-white hover:border-[#ee0000] transition-all duration-300 shadow-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>

        </section>

        {/* Right Column (Contact Form) */}
        <section className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-14 shadow-2xl backdrop-blur-md  relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ee0000] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          {formStatus === "success" && (
            <div className="bg-[#25d366]/10 border border-[#25d366] text-[#25d366] px-6 py-4 rounded-xl mb-8 relative z-10 font-medium flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"></path></svg>
              Message sent successfully! Our team will contact you shortly.
            </div>
          )}
          {formStatus === "error" && (
            <div className="bg-red-500/10 border border-red-500 text-red-400 px-6 py-4 rounded-xl mb-8 relative z-10 font-medium">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
            {/* HONEYPOT FIELD (Hidden from real users) */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <label htmlFor="bot_field">Leave this field blank</label>
              <input type="text" id="bot_field" name="bot_field" value={formData.bot_field} onChange={handleChange} tabIndex={-1} autoComplete="off" />
            </div>
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
                  className="w-full bg-transparent border-b border-slate-600 py-3 outline-none focus:border-[#ee0000] transition-colors peer placeholder-transparent text-white font-medium text-base" 
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
                  className="w-full bg-transparent border-b border-slate-600 py-3 outline-none focus:border-[#ee0000] transition-colors peer placeholder-transparent text-white font-medium text-base" 
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
                  className="w-full bg-transparent border-b border-slate-600 py-3 outline-none focus:border-[#ee0000] transition-colors peer placeholder-transparent text-white font-medium text-base" 
                />
                <label 
                  htmlFor="phone" 
                  className="absolute left-0 top-4 text-xs uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#ee0000]"
                >
                  Phone Number
                </label>
              </div>
              {/* Service Selection field */}
              <div className="relative w-full group pt-4">
                <select 
                  id="shedType" 
                  name="shedType"
                  value={formData.shedType}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-slate-600 py-3 outline-none focus:border-[#ee0000] transition-colors peer text-white font-medium text-base appearance-none cursor-pointer"
                  style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg fill=%22white%22 height=%2224%22 viewBox=%220 0 24 24%22 width=%2224%22 xmlns=%22http://www.w3.org/2000/svg%22><path d=%22M7 10l5 5 5-5z%22/></svg>')", backgroundRepeat: "no-repeat", backgroundPosition: "right 10px center" }}
                >
                  <option value="" disabled className="text-slate-900 bg-white">Select a Service...</option>
                  <optgroup label="Industrial Sheds" className="text-slate-900 bg-white">
                    <option value="Factory Shed">Factory Shed</option>
                    <option value="Garment Factory Shed">Garment Factory Shed</option>
                    <option value="Warehouse / Godown Shed">Warehouse / Godown Shed</option>
                  </optgroup>
                  <optgroup label="Agricultural Sheds" className="text-slate-900 bg-white">
                    <option value="Poultry Farm Shed">Poultry Farm Shed</option>
                    <option value="Goat Farm Shed">Goat Farm Shed</option>
                    <option value="Cow / Dairy Farm Shed">Cow / Dairy Farm Shed</option>
                  </optgroup>
                  <optgroup label="Sports Turf Sheds" className="text-slate-900 bg-white">
                    <option value="Badminton Court Shed">Badminton Court Shed</option>
                    <option value="Cricket Turf Shed">Cricket Turf Shed</option>
                  </optgroup>
                  <optgroup label="Home Roofing Sheds" className="text-slate-900 bg-white">
                    <option value="Terrace Roofing Shed">Terrace Roofing Shed</option>
                    <option value="Car Parking Shed">Car Parking Shed</option>
                  </optgroup>
                </select>
                <label 
                  htmlFor="shedType" 
                  className={`absolute left-0 transition-all ${formData.shedType ? '-top-2 text-xs uppercase tracking-widest text-[#ee0000]' : 'top-4 text-slate-400 text-lg peer-focus:-top-2 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-[#ee0000]'}`}
                >
                  Select Service
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
              disabled={formStatus === "submitting"}
              className="w-full bg-[#ee0000] text-white py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-sm hover:bg-[#cc0000] hover:shadow-[0_10px_30px_rgba(238,0,0,0.3)] transition-all duration-300 flex items-center justify-center gap-3 transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {formStatus === "submitting" ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Sending...
                </>
              ) : (
                "Submit Enquiry"
              )}
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
