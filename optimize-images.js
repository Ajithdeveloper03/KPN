const sharp = require('sharp');
const glob = require('glob');
const fs = require('fs');
const path = require('path');

async function optimize() {
  const files = glob.sync('public/images/**/*.{png,jpg,jpeg,webp}');
  for (const file of files) {
    if (file.includes('_optimized')) continue;
    const filename = path.basename(file).toLowerCase();
    
    let maxWidth = 800;
    if (filename.includes('banner') || filename.includes('hero') || filename.includes('bg')) {
      maxWidth = 1200;
    }

    try {
      const metadata = await sharp(file).metadata();
      if (metadata.width > maxWidth || metadata.size > 150 * 1024) {
        const parsed = path.parse(file);
        const optimizedFile = path.join(parsed.dir, parsed.name + '_optimized' + parsed.ext);
        
        await sharp(file)
          .resize({ width: maxWidth, withoutEnlargement: true })
          .webp({ quality: 65 })
          .toFile(optimizedFile);
      }
    } catch (err) {}
  }
}
optimize();
