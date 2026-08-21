import "./globals.css";
import Preloader from "@/components/Preloader";
import LenisScrollProvider from "@/components/LenisScrollProvider";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import type { Metadata } from 'next';
import { Lora, Plus_Jakarta_Sans } from 'next/font/google';

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kpnroofingsheds.com"),
  title: {
    default: "Roofing Shed Construction in India | KPN Roofing Shed",
    template: "%s | KPN Roofing Shed"
  },
  description: "KPN Roofing Shed builds industrial, agricultural & home sheds pan-India. 10+ yrs, 600+ projects, award-winning team. Get a free quote today.",
  keywords: "Roofing Shed Construction Company India, Roofing Shed Contractors India, Industrial Shed Construction India, Factory Shed Contractors India, Steel Structure Company India, Warehouse Shed Builders India, Agricultural Sheds India, Animal Shed Solutions India, Modern Farm Sheds India",
  alternates: {
    canonical: "https://kpnroofingsheds.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Roofing Shed Construction in India | KPN Roofing Shed",
    description: "KPN Roofing Shed builds industrial, agricultural & home sheds pan-India. 10+ yrs, 600+ projects, award-winning team. Get a free quote today.",
    url: "https://kpnroofingsheds.com",
    siteName: "KPN Roofing Shed",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KPN Roofing Shed - Roofing Shed Construction in India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Shed Construction in India | KPN Roofing Shed",
    description: "KPN Roofing Shed builds industrial, agricultural & home sheds pan-India. 10+ yrs, 600+ projects, award-winning team. Get a free quote today.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className="notranslate">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FHPZGLQSQQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FHPZGLQSQQ');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://kpnroofingsheds.com/#organization",
              "name": "KPN Roofing Shed",
              "url": "https://kpnroofingsheds.com/",
              "logo": "https://kpnroofingsheds.com/images/logo.jpg",
              "description": "KPN Roofing Shed provides roofing shed construction solutions for industrial, agricultural, residential, warehouse, factory, animal husbandry and sports turf applications across India.",
              "telephone": "+91-9788770786",
              "email": "kpnroofingshed555@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plot no 151 E, 5th Cross W, South Extension, Amman Nagar, Pappakurichi Kattur",
                "addressLocality": "Tiruchirappalli",
                "addressRegion": "Tamil Nadu",
                "postalCode": "620019",
                "addressCountry": "IN"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "sameAs": [
                "https://www.instagram.com/kpnroofingshed/",
                "https://www.facebook.com/kpnroofingshed",
                "https://www.youtube.com/@kpnroofingshedindia"
              ]
            })
          }}
        />
        {/* Removed render-blocking font link, handled via next/font/google */}
      </head>
      <body suppressHydrationWarning className={`font-sans antialiased overflow-x-hidden w-full ${plusJakartaSans.variable} ${lora.variable}`}>
        <Preloader />
        <LenisScrollProvider>
          <ScrollReveal />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </LenisScrollProvider>
      </body>
    </html>
  );
}