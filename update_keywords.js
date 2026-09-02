const fs = require('fs');
const path = require('path');

const keywordsMap = {
  'src/app/services/agriculture-animal-husbandry-sheds/page.tsx': 'Agricultural Sheds India, Modern Farm Sheds India',
  'src/app/services/agriculture-animal-husbandry-sheds/goat-farm-shed/page.tsx': 'Goat Farm Shed Builders India',
  'src/app/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed/page.tsx': 'Dairy Farm Shed Contractors India, Cow Shed Solutions India, Cattle Shed Builders India',
  'src/app/services/agriculture-animal-husbandry-sheds/poultry-farm-shed/page.tsx': 'Poultry Shed Manufacturers India, Farm Infrastructure Solutions India',
  'src/app/services/industrial-sheds/page.tsx': 'Industrial Shed Construction India, Industrial Roofing Solutions India',
  'src/app/services/industrial-sheds/factory-shed/page.tsx': 'Factory Shed Contractors India',
  'src/app/services/industrial-sheds/garment-factory-shed/page.tsx': 'Garment Factory Shed India',
  'src/app/services/industrial-sheds/warehouse-godown-shed/page.tsx': 'Warehouse Shed Builders India',
  'src/app/services/home-roofing-sheds/terrace-roofing-shed/page.tsx': 'Terrace Roofing Shed Contractors India',
  'src/app/services/home-roofing-sheds/car-parking-shed/page.tsx': 'Car Parking Shed India',
  'src/app/services/sports-turf-sheds/badminton-court-shed/page.tsx': 'Badminton Court Shed India',
  'src/app/services/sports-turf-sheds/cricket-turf-shed/page.tsx': 'Cricket Turf Shed Construction India'
};

for (const [relativePath, newKeywords] of Object.entries(keywordsMap)) {
  const filePath = path.resolve(__dirname, relativePath);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace existing keywords or add it if not exists.
    if (/keywords\s*:\s*['"][^'"]*['"]/.test(content)) {
      content = content.replace(/(keywords\s*:\s*)['"][^'"]*['"]/, `$1'${newKeywords}'`);
    } else {
      // If it doesn't have keywords, add it after description
      content = content.replace(/(description\s*:\s*['"][^'"]*['"],?)/, `$1\n  keywords: '${newKeywords}',`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated keywords in: ${relativePath}`);
  } else {
    console.error(`File not found: ${relativePath}`);
  }
}
console.log('Keyword updates complete.');
