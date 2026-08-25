const sharp = require('sharp');
const glob = require('glob');
const fs = require('fs');
const path = require('path');

async function optimize() {
  const files = glob.sync('public/images/**/*.{png,jpg,jpeg,webp}');
  let converted = 0;
  for (const file of files) {
    const filename = path.basename(file).toLowerCase();
    
    let maxWidth = 800; // default for most images
    if (filename.includes('banner') || filename.includes('hero') || filename.includes('bg')) {
      maxWidth = 1200; // larger for banners
    }

    try {
      const metadata = await sharp(file).metadata();
      // Only resize if the image is wider than our max width
      if (metadata.width > maxWidth || metadata.size > 200 * 1024) {
        const buffer = await sharp(file)
          .resize({ width: maxWidth, withoutEnlargement: true })
          .webp({ quality: 70 })
          .toBuffer();
        
        fs.writeFileSync(file, buffer);
        converted++;
      }
    } catch (err) {
      console.error('Error optimizing', file, err.message);
    }
  }
  console.log('Optimized ' + converted + ' images.');
}
optimize();
