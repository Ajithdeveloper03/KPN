const sharp = require('sharp');
const glob = require('glob');
const fs = require('fs');
const path = require('path');

async function convert() {
  const files = glob.sync('public/images/**/*.{jpeg,jpg,png}');
  let converted = 0;
  for (const file of files) {
    if (file.toLowerCase().endsWith('.webp')) continue; // Skip already webp (glob shouldn't catch, but just in case)
    if (file.toLowerCase().endsWith('hero-bg.png')) continue; // Keep hero-bg.png if it's there
    
    const parsed = path.parse(file);
    const webpFile = path.join(parsed.dir, parsed.name + '.webp');

    let maxWidth = 800;
    if (file.includes('banner') || file.includes('hero') || file.includes('bg')) {
      maxWidth = 1200;
    }

    try {
      await sharp(file)
        .resize({ width: maxWidth, withoutEnlargement: true })
        .webp({ quality: 65 })
        .toFile(webpFile);
      
      fs.unlinkSync(file); // Delete original jpeg/png
      converted++;
      console.log('Converted: ' + file + ' -> ' + webpFile);
    } catch (err) {
      console.error('Error converting', file, err.message);
    }
  }
  console.log('Converted ' + converted + ' images to WebP.');
}
convert();
