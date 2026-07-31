import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Roofing Shed Construction Company in India | KPN Roofing Shed",
  description: "KPN Roofing Shed builds industrial, agricultural & home sheds pan-India. 13+ yrs, 600+ projects, award-winning team. Get a free quote today.",
  keywords: "Roofing Shed Construction Company India, Roofing Shed Contractors India, Industrial Shed Construction India, Factory Shed Contractors India, Steel Structure Company India, Warehouse Shed Builders India, Agricultural Sheds India, Animal Shed Solutions India, Modern Farm Sheds India",
  alternates: {
    canonical: "https://kpnroofingshed.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}