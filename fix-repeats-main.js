const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const pools = {
  industrial: [
    '/images/services/industrial-image-01.png',
    '/images/services/industrial-image-02.png',
    '/images/services/industrial-image-03.png',
    '/images/services/industrial-image-04.png',
    '/images/services/industrial-image-05.png',
    '/images/services/industrial-image-06.png',
    '/images/services/factory-image-02.png',
    '/images/services/warehouse-02.png',
    '/images/services/garment-image-03.png'
  ],
  agriculture: [
    '/images/services/animal-1-image-1.png',
    '/images/services/animal-banaer-image-2.png',
    '/images/services/animal-la-sec-1.png',
    '/images/services/animal-sec-2.png',
    '/images/services/animal-sec-3.png',
    '/images/services/animal-sec-5.png',
    '/images/services/animal-sec-6.png',
    '/images/services/dairy-image-2.png',
    '/images/services/poultry-image-2.png'
  ],
  sports: [
    '/images/services/sports-turf-1-section-1-image.png',
    '/images/services/sports-tur-1-section-2-image.png',
    '/images/services/sports-turf-1-section-la-3-image.png',
    '/images/services/sports-turf-2-section-1-image.png',
    '/images/services/sports-turf-2-section-2-image.png',
    '/images/services/sports-turf-3-section-1-image.png',
    '/images/services/sports-turf-la-final-image-faq.png',
    '/images/services/cricket-image-2.png',
    '/images/services/badminton-faq.jpeg'
  ],
  home: [
    '/images/services/home-roofing-shed-la-1-section-la-2-image.png',
    '/images/services/home-roofing-shed-la-2-section-1-image.png',
    '/images/services/home-roofing-shed-la-3-section-1-image.png',
    '/images/services/home-roofing-shed-1-section-la-1-image.png',
    '/images/services/how-long-does-a-carparking.png',
    '/images/services/why-kpn-is-different-terrace.png'
  ]
};

const srcDir = path.join(__dirname, 'src');

walkDir(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Determine which pool to use based on file path
    let poolKey = null;
    
    // Check if it is a main category page
    if (filePath.endsWith(path.join('industrial-sheds', 'page.tsx'))) poolKey = 'industrial';
    if (filePath.endsWith(path.join('agriculture-animal-husbandry-sheds', 'page.tsx'))) poolKey = 'agriculture';
    if (filePath.endsWith(path.join('sports-turf-sheds', 'page.tsx'))) poolKey = 'sports';
    if (filePath.endsWith(path.join('home-roofing-sheds', 'page.tsx'))) poolKey = 'home';
    
    if (!poolKey) return; // Skip if no pool found
    
    const pool = pools[poolKey];
    let poolIndex = 0;
    const seenImages = new Set();
    
    // Simple regex for string literal image srcs
    const regex = /src=["'](\/images\/[^"']+)["']/g;
    
    content = content.replace(regex, (match, src) => {
      // If we haven't seen this image in this file, keep it (it's the first usage, likely hero)
      if (!seenImages.has(src)) {
        seenImages.add(src);
        return match;
      }
      
      // We have seen it. Replace it with next from pool
      if (poolIndex < pool.length) {
        const newSrc = pool[poolIndex];
        poolIndex++;
        console.log(`Replaced ${src} with ${newSrc} in ${filePath}`);
        return `src="${newSrc}"`;
      }
      
      // If we run out of pool images, keep original
      return match;
    });
    
    fs.writeFileSync(filePath, content);
  }
});
