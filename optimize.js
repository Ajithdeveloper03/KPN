const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function getAllFiles(dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });
  return arrayOfFiles;
}

const images = getAllFiles('public/images').filter(f => f.match(/\.(png|jpe?g)$/i));

async function optimizeImages() {
  console.log(`Optimizing ${images.length} images...`);
  let totalSaved = 0;
  
  for (const imgPath of images) {
    try {
      const stats = fs.statSync(imgPath);
      const originalSize = stats.size;
      
      const image = sharp(imgPath);
      const metadata = await image.metadata();
      
      let width = metadata.width;
      if (width > 1920) {
        width = 1920;
      }
      
      const ext = path.extname(imgPath).toLowerCase();
      const tempPath = imgPath + '.tmp';
      
      if (ext === '.png') {
        await image.resize({ width, withoutEnlargement: true })
                   .png({ quality: 75, compressionLevel: 8 })
                   .toFile(tempPath);
      } else {
        // jpg / jpeg
        await image.resize({ width, withoutEnlargement: true })
                   .jpeg({ quality: 75, mozjpeg: true })
                   .toFile(tempPath);
      }
      
      const newStats = fs.statSync(tempPath);
      const newSize = newStats.size;
      
      fs.unlinkSync(imgPath);
      fs.renameSync(tempPath, imgPath);
      
      const saved = originalSize - newSize;
      if (saved > 0) {
        totalSaved += saved;
      }
      console.log(`Optimized ${path.basename(imgPath)} - Saved ${(saved / 1024).toFixed(2)} KB`);
    } catch (e) {
      console.error(`Error optimizing ${imgPath}:`, e.message);
    }
  }
  
  console.log(`Finished optimization. Total space saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
}

optimizeImages();
