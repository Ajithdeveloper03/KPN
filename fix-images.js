const fs = require("fs");
const glob = require("glob");

// All AVAILABLE images
const available = {
  factory: [
    "/images/factory.webp",
    "/images/factory (2).webp",
    "/images/services/factory1.webp",
    "/images/services/factory2.webp",
    "/images/services/factory3.webp",
    "/images/services/factory4.webp",
    "/images/services/factory5.webp",
    "/images/services/factory6.webp",
    "/images/services/factory7.webp",
    "/images/services/factory8.webp"
  ],
  animal: [
    "/images/animal1.webp",
    "/images/animal2.webp",
    "/images/animal3.webp",
    "/images/animal4.webp",
    "/images/animal5.webp",
    "/images/animal6.webp",
    "/images/aniamal2.webp",
    "/images/aniamal3.webp",
    "/images/services/animal.webp"
  ],
  goat: [
    "/images/goat1.webp",
    "/images/goat2.webp",
    "/images/goat3.webp",
    "/images/goat4.webp",
    "/images/goat5.webp",
    "/images/goat6.webp",
    "/images/goat7.webp",
    "/images/services/goat.webp"
  ],
  poultry: [
    "/images/poultry.webp",
    "/images/services/poultry.webp",
    "/images/services/poultry2.webp",
    "/images/services/poultry3.webp",
    "/images/services/poultry (2).webp"
  ],
  home: [
    "/images/terrace.webp",
    "/images/terrace3.webp",
    "/images/terrace (2).webp",
    "/images/services/car1.webp",
    "/images/services/car2.webp",
    "/images/services/car3.webp",
    "/images/services/car4.webp",
    "/images/services/car5.webp"
  ],
  sports: [
    "/images/services/sports-turf-main-banner.webp",
    "/images/services/sports-turf-1-section-1-image.webp",
    "/images/services/sports-tur-1-section-2-image.webp",
    "/images/services/sports-turf-1-section-la-3-image.webp",
    "/images/services/sports-turf-2-section-1-image.webp",
    "/images/services/sports-turf-2-section-2-image.webp",
    "/images/services/sports-turf-3-section-1-image.webp",
    "/images/services/sports-turf-la-final-image-faq.webp",
    "/images/services/weatherproof-all-season-court-roofing-with-kpn-1.webp"
  ],
  badminton: [
    "/images/services/badminton-court-banner-image.webp",
    "/images/services/how-long-does-badminton.webp",
    "/images/services/permits-and-approvals-badminton.webp"
  ],
  cricket: [
    "/images/services/cricket-banner-image.webp",
    "/images/services/cricket-image-1.webp",
    "/images/services/cricket-image-2.webp"
  ]
};

// Broken image paths => replacement mapping (deterministic, no random)
const replacements = {
  // Generic image1-20 placeholders - fix by context
  "/images/image3.webp": available.factory[0],
  "/images/image5.webp": available.factory[2],
  "/images/image6.webp": available.factory[3],
  "/images/imag10.webp": available.factory[4],
  "/images/image11.webp": available.factory[5],
  "/images/image12.webp": available.factory[6],
  "/images/image13.webp": available.factory[1],
  "/images/image14.webp": available.animal[0],
  "/images/image15.webp": available.home[0],
  "/images/image16.webp": available.sports[0],
  // Old agriculture/animal
  "/images/services/agriculture01.webp": available.animal[1],
  "/images/services/agriculture-and-animal-husbenday-bannar-image.webp": available.animal[2],
  "/images/services/animal-1-image-1.webp": available.animal[0],
  "/images/services/animal-banaer-image-2.webp": available.animal[3],
  "/images/services/animal-final-image.webp": available.animal[4],
  "/images/services/animal-la-sec-1.webp": available.animal[5],
  "/images/services/animal-sec-2.webp": available.animal[6],
  "/images/services/animal-sec-3.webp": available.animal[7],
  "/images/services/animal-sec-5.webp": available.goat[0],
  "/images/services/animal-sec-6.webp": available.goat[1],
  "/images/services/animal-sec-7.webp": available.goat[2],
  "/images/services/animal-why.webp": available.goat[3],
  // Old goat
  "/images/services/goat01.webp": available.goat[0],
  "/images/services/goat-banner-image.webp": available.goat[1],
  // Old poultry
  "/images/services/poultry01.webp": available.poultry[0],
  "/images/services/poultry-banner-image.webp": available.poultry[1],
  "/images/services/poultry-image-1.webp": available.poultry[2],
  "/images/services/poultry-image-2.webp": available.poultry[3],
  "/images/services/poultry-image-3.webp": available.poultry[4],
  // Old factory/industrial/warehouse/garment
  "/images/services/industrial-banner-image.webp": available.factory[2],
  "/images/services/industrial-image-01.webp": available.factory[3],
  "/images/services/industrial-image-02.webp": available.factory[4],
  "/images/services/industrial-image-03.webp": available.factory[5],
  "/images/services/industrial-image-04.webp": available.factory[6],
  "/images/services/industrial-image-05.webp": available.factory[7],
  "/images/services/industrial-image-06.webp": available.factory[8],
  "/images/services/factory-banner-image.webp": available.factory[0],
  "/images/services/factory-image-1.webp": available.factory[2],
  "/images/services/factory-image-02.webp": available.factory[3],
  "/images/services/factory-image-03.webp": available.factory[4],
  "/images/services/factory-image-2.webp": available.factory[5],
  "/images/services/garment-image-banner.webp": available.factory[6],
  "/images/services/garment-image.webp": available.factory[7],
  "/images/services/garment-image-01.webp": available.factory[8],
  "/images/services/garment-image-03.webp": available.factory[9],
  "/images/services/garment-image-05.webp": available.factory[2],
  "/images/services/warehouse-banner-image.webp": available.factory[3],
  "/images/services/warehouse-01.webp": available.factory[4],
  "/images/services/warehouse-02.webp": available.factory[5],
  "/images/services/warehouse-03.webp": available.factory[6],
  "/images/services/warehouse-04.webp": available.factory[7],
  // Old home/terrace/car
  "/images/services/home-roofing-shed-banner-image.webp": available.home[0],
  "/images/services/home-roofing-shed-1-section-la-1-image.webp": available.home[1],
  "/images/services/home-roofing-shed-la-1-section-la-2-image.webp": available.home[2],
  "/images/services/home-roofing-shed-la-2-section-1-image.webp": available.home[3],
  "/images/services/home-roofing-shed-la-3-section-1-image.webp": available.home[4],
  "/images/services/home-roofing-shed-faq.webp": available.home[0],
  "/images/services/terrace-shed-banner-image.webp": available.home[0],
  "/images/services/extend-your-usable-outdoor-space-with-kpn-terrace.webp": available.home[1],
  "/images/services/how-long-does-do-a-terrace-shed-take.webp": available.home[2],
  "/images/services/permits-approvals-terrace-page.webp": available.home[3],
  "/images/services/car-parking-banner-image.webp": available.home[5],
  "/images/services/how-long-does-a-carparking.webp": available.home[6],
  "/images/services/permits-and-approval-for-carparking.webp": available.home[7],
  "/images/services/single-bay-vs-multi-bay-sheds-carparking.webp": available.home[4],
  // Old dairy
  "/images/services/dairy-banner-image.webp": available.animal[0],
  "/images/services/dairy-image-1.webp": available.animal[1],
  "/images/services/dairy-image-2.webp": available.animal[2],
  "/images/services/dairy-image-3.webp": available.animal[3],
  "/images/services/dairy-image-4.webp": available.animal[4],
};

const files = glob.sync("src/**/*.{tsx,ts}");
let totalFixes = 0;

for (const file of files) {
  let content = fs.readFileSync(file, "utf8");
  let original = content;
  let fixes = 0;

  for (const [oldPath, newPath] of Object.entries(replacements)) {
    // Escape special characters for regex
    const escaped = oldPath.replace(/[.*+?^${}()|[\]\\]/g, "\\\\$&").replace(/\(/g, "\\\\(").replace(/\)/g, "\\\\)");
    const regex = new RegExp(escaped, "g");
    const before = content;
    content = content.replace(regex, newPath);
    if (content !== before) fixes++;
  }

  if (content !== original) {
    fs.writeFileSync(file, content);
    totalFixes += fixes;
    console.log("Fixed " + fixes + " in: " + file);
  }
}
console.log("Total: Fixed " + totalFixes + " broken image references.");

