import "./globals.css";
import LenisScrollProvider from "@/components/LenisScrollProvider";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "Roofing Shed Construction Company in India | KPN Roofing Shed",
  description: "KPN Roofing Shed builds industrial, agricultural & home sheds pan-India. 10+ yrs, 600+ projects, award-winning team. Get a free quote today.",
  keywords: "Roofing Shed Construction Company India, Roofing Shed Contractors India, Industrial Shed Construction India, Factory Shed Contractors India, Steel Structure Company India, Warehouse Shed Builders India, Agricultural Sheds India, Animal Shed Solutions India, Modern Farm Sheds India",
  alternates: {
    canonical: "https://kpnroofingshed.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className="notranslate">
      <head>
        <link rel="icon" href="/kpnroofingshed/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased overflow-x-hidden w-full">
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