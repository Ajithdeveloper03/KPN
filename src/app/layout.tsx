import "./globals.css";
import Preloader from "@/components/Preloader";
import LenisScrollProvider from "@/components/LenisScrollProvider";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL("https://kpnroofingshed.com"),
  title: {
    default: "Roofing Shed Construction Company in India | KPN Roofing Shed",
    template: "%s | KPN Roofing Shed"
  },
  description: "KPN Roofing Shed builds industrial, agricultural & home sheds pan-India. 10+ yrs, 600+ projects, award-winning team. Get a free quote today.",
  keywords: "Roofing Shed Construction Company India, Roofing Shed Contractors India, Industrial Shed Construction India, Factory Shed Contractors India, Steel Structure Company India, Warehouse Shed Builders India, Agricultural Sheds India, Animal Shed Solutions India, Modern Farm Sheds India",
  alternates: {
    canonical: "https://kpnroofingshed.com",
  },
  icons: {
    icon: "/images/logo.jpg",
    shortcut: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
  openGraph: {
    title: "Roofing Shed Construction Company in India | KPN Roofing Shed",
    description: "KPN Roofing Shed builds industrial, agricultural & home sheds pan-India. 10+ yrs, 600+ projects, award-winning team. Get a free quote today.",
    url: "https://kpnroofingshed.com",
    siteName: "KPN Roofing Shed",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 600,
        alt: "KPN Roofing Shed Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roofing Shed Construction Company in India | KPN Roofing Shed",
    description: "KPN Roofing Shed builds industrial, agricultural & home sheds pan-India. 10+ yrs, 600+ projects, award-winning team. Get a free quote today.",
    images: ["/images/logo.jpg"],
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
        <link rel="icon" href="/images/logo.jpg" type="image/jpeg" />
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased overflow-x-hidden w-full">
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