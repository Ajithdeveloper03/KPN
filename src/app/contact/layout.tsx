import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us | KPN Roofing Shed",
  description: "Get in touch with KPN Roofing Shed for all your industrial, agricultural, and residential roofing needs in India. Request a free quote today.",
  alternates: {
    canonical: "https://kpnroofingsheds.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact KPN Roofing Shed",
            "url": "https://kpnroofingsheds.com/contact",
            "description": "Get in touch with KPN Roofing Shed for all your industrial, agricultural, and residential roofing needs in India.",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "KPN Roofing Shed",
              "image": "https://kpnroofingsheds.com/images/logo.jpg",
              "telephone": "+91-9788770786",
              "email": "kpnroofingsheds@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plot no 151 E, 5th Cross W, South Extension, Amman Nagar, Pappakurichi Kattur",
                "addressLocality": "Tiruchirappalli",
                "addressRegion": "Tamil Nadu",
                "postalCode": "620019",
                "addressCountry": "IN"
              }
            }
          })
        }}
      />
      {children}
    </>
  );
}
