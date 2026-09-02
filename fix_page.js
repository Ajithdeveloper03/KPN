const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const correctStr = `"logo": {
              "@type": "ImageObject",
              "url": "https://kpnroofingsheds.com/images/logo.webp"
            },
            "description": "KPN Roofing Shed provides roofing shed construction solutions for industrial, agricultural, residential, warehouse, factory, animal husbandry and sports turf applications across India.",
            "telephone": "+91-9788770786",
            "email": "kpnroofingshed555@gmail.com",
            "priceRange": "Contact for pricing",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Plot No. 151 E, 5th Cross W, South Extension, Amman Nagar, Pappakurichi Kattur",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({`;

content = content.replace(/\"logo\": \{\r?\n\s*\"@type\": \"ImageObject\",\r?\n\s*\"url\": \"https:\/\/kpnroofingsheds\.com\/images\/logo\.webp\"\r?\n\s*__html: JSON\.stringify\(\{/m, correctStr);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Fixed page.tsx');
