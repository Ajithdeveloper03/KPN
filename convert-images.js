const sharp = require('sharp');
const { globSync } = require('glob');
const fs = require('fs');
const path = require('path');

async function convertImages() {
  const files = globSync('public/**/*.{png,jpg,jpeg,PNG,JPG,JPEG}');
  let converted = 0;
  let skipped = 0;

  for (const file of files) {
    const filename = path.basename(file).toLowerCase();
    if (filename === 'hero-bg.png' || filename === 'night-bg.png') {
      console.log(`Skipping (Hero/Banner): ${file}`);
      skipped++;
      continue;
    }

    const parsedPath = path.parse(file);
    const webpPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

    try {
      await sharp(file).webp({ quality: 80 }).toFile(webpPath);
      console.log(`Converted: ${file} -> ${webpPath}`);
      fs.unlinkSync(file); // Delete the original file
      converted++;
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }

  console.log(`Conversion complete. Converted: ${converted}, Skipped: ${skipped}`);
}

convertImages();
