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
  ],
  factory: [
    '/images/services/factory-image-1.png',
    '/images/services/factory-image-2.png',
    '/images/services/factory-04-image.png',
    '/images/services/factory-05-image.png'
  ],
  warehouse: [
    '/images/services/warehouse-01.png',
    '/images/services/warehouse-02.png',
    '/images/services/warehouse-03.png',
    '/images/services/warehouse-04.png',
    '/images/services/warehouse-05-image.png',
    '/images/services/warehouse-06.png',
    '/images/services/warehouse-07.png'
  ],
  garment: [
    '/images/services/garment-image-01.png',
    '/images/services/garment-image-03.png',
    '/images/services/garment-image-05.png'
  ],
  poultry: [
    '/images/services/poultry-image-1.png',
    '/images/services/poultry-image-2.png',
    '/images/services/poultry-image-3.png',
    '/images/services/poultry-image-4.png'
  ],
  dairy: [
    '/images/services/dairy-image-1.png',
    '/images/services/dairy-image-2.png',
    '/images/services/dairy-image-3.png',
    '/images/services/dairy-image-4.png',
    '/images/services/dairy-image-5.png'
  ],
  goat: [
    '/images/services/goat01.png',
    '/images/services/animal-sec-7.png',
    '/images/services/animal-why.png'
  ],
  carparking: [
    '/images/services/how-long-does-a-carparking.png',
    '/images/services/permits-and-approval-for-carparking.png',
    '/images/services/single-bay-vs-multi-bay-sheds-carparking.png'
  ],
  terrace: [
    '/images/services/extend-your-usable-outdoor-space-with-kpn-terrace.png',
    '/images/services/how-long-does-do-a-terrace-shed-take.png',
    '/images/services/permits-approvals-terrace-page.png',
    '/images/services/why-kpn-is-different-terrace.png'
  ],
  badminton: [
    '/images/services/badminton-faq.jpeg',
    '/images/services/how-long-does-badminton.png',
    '/images/services/weatherproof-all-season-court-roofing-with-kpn-1.png'
  ],
  cricket: [
    '/images/services/cricket-image-1.png',
    '/images/services/cricket-image-2.png',
    '/images/services/cricket-image-3.png',
    '/images/services/cricket-image-4.png',
    '/images/services/cricket-image-5.png'
  ]
};

// Map file path keywords to pools
const filePoolMap = {
  'industrial-sheds\\\\page.tsx': 'industrial',
  'industrial-sheds/page.tsx': 'industrial',
  'agriculture-animal-husbandry-sheds\\\\page.tsx': 'agriculture',
  'agriculture-animal-husbandry-sheds/page.tsx': 'agriculture',
  'sports-turf-sheds\\\\page.tsx': 'sports',
  'sports-turf-sheds/page.tsx': 'sports',
  'home-roofing-sheds\\\\page.tsx': 'home',
  'home-roofing-sheds/page.tsx': 'home',
  
  'factory-shed': 'factory',
  'warehouse-godown': 'warehouse',
  'garment-factory': 'garment',
  
  'poultry-farm': 'poultry',
  'cow-dairy': 'dairy',
  'goat-farm': 'goat',
  
  'car-parking': 'carparking',
  'terrace-roofing': 'terrace',
  
  'badminton-court': 'badminton',
  'cricket-turf': 'cricket'
};

const srcDir = path.join(__dirname, 'src');

walkDir(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Determine which pool to use based on file path
    let poolKey = null;
    for (const [key, val] of Object.entries(filePoolMap)) {
      if (filePath.includes(key)) {
        poolKey = val;
        break;
      }
    }
    
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
