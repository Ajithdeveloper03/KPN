const fs = require('fs');
const map = {
  'agriculture-animal-husbandry-sheds': 'Agriculture & Animal Husbandry',
  'home-roofing-sheds': 'Home Roofing Sheds',
  'industrial-sheds': 'Industrial Sheds',
  'sports-turf-sheds': 'Sports Turf'
};

const paths = [
  'src/app/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed/page.tsx',
  'src/app/services/agriculture-animal-husbandry-sheds/goat-farm-shed/page.tsx',
  'src/app/services/agriculture-animal-husbandry-sheds/poultry-farm-shed/page.tsx',
  'src/app/services/home-roofing-sheds/car-parking-shed/page.tsx',
  'src/app/services/home-roofing-sheds/terrace-roofing-shed/page.tsx',
  'src/app/services/industrial-sheds/factory-shed/page.tsx',
  'src/app/services/industrial-sheds/garment-factory-shed/page.tsx',
  'src/app/services/industrial-sheds/warehouse-godown-shed/page.tsx',
  'src/app/services/sports-turf-sheds/badminton-court-shed/page.tsx',
  'src/app/services/sports-turf-sheds/cricket-turf-shed/page.tsx'
];

for (const p of paths) {
  let content = fs.readFileSync(p, 'utf8');
  const catSlug = p.match(/src\/app\/services\/([^\/]+)\//)[1];
  const catName = map[catSlug];
  
  const blockRegex = /<div className="flex items-center justify-center flex-wrap gap-2 text-white\/80 font-medium text-sm md:text-base mb-10">([\s\S]*?)<\/div>/;
  const match = content.match(blockRegex);
  if (match) {
    const spanMatch = match[1].match(/<span className="text-\[#[a-fA-F0-9]+\]">(.*?)<\/span>/);
    const finalSpan = spanMatch ? spanMatch[0] : '<span className="text-[#f39c12]">Subpage</span>';
    
    // Create new block without Services
    const newBlock = `<div className="flex items-center justify-center flex-wrap gap-2 text-white/80 font-medium text-sm md:text-base mb-10">
             <Link href="/" className="hover:text-white transition-colors">Home</Link>
             <span>/</span>
             <Link href="/services/${catSlug}" className="hover:text-white transition-colors">${catName}</Link>
             <span>/</span>
             ${finalSpan}
          </div>`;
    
    content = content.replace(blockRegex, newBlock);
    fs.writeFileSync(p, content, 'utf8');
    console.log("Updated", p);
  } else {
    console.log("Skipped or not found", p);
  }
}
