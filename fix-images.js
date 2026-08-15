const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

const images = [
  "/images/services/industrial-banner-image.png",
  "/images/services/agriculture-and-animal-husbenday-bannar-image.png",
  "/images/services/home-roofing-shed-banner-image.png",
  "/images/services/factory-banner-image.png",
  "/images/services/sports-turf-main-banner.png",
  "/images/services/warehouse-01.png",
  "/images/services/poultry01.png",
  "/images/services/cricket-image-1.png",
  "/images/services/animal-1-image-1.png",
  "/images/services/goat01.png",
  "/images/services/factory-image-1.png"
];

let imageIndex = 0;

function getRandomRelevantImage() {
  const img = images[imageIndex % images.length];
  imageIndex++;
  return img;
}

const filesToUpdate = [
  "WhyKPNSection.tsx",
  "TestimonialsSection.tsx",
  "StatsSection.tsx",
  "QuoteModal.tsx",
  "Footer.tsx",
  "FAQSection.tsx",
  "ComparisonSection.tsx",
  "AreasWeServeSection.tsx"
];

for (const file of filesToUpdate) {
  const filePath = path.join(componentsDir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf8');
  // Replace generic images only if they are not already updated
  content = content.replace(/\/images\/image[0-9]+\.(jpeg|png)/g, () => getRandomRelevantImage());
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}
