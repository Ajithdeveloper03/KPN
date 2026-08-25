const fs = require('fs');
const path = require('path');

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

const images = getAllFiles('public/images');
const srcFiles = getAllFiles('src').filter(f => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.js') || f.endsWith('.jsx'));

// Combine all code into one giant string for fast searching
let allCode = '';
srcFiles.forEach(f => {
  allCode += fs.readFileSync(f, 'utf8') + '\n';
});

let unused = [];

images.forEach(img => {
  const filename = path.basename(img);
  // Ignore some typical files
  if (filename === 'logo.jpg' || filename.endsWith('.svg') || filename === 'night-bg.png') {
      return;
  }
  
  if (!allCode.includes(filename)) {
    unused.push(img);
  }
});

console.log(`Found ${images.length} total images.`);
console.log(`Found ${unused.length} unused images:`);
unused.forEach(u => {
    console.log(u);
    // Be careful with delete, let's just log them first.
    // fs.unlinkSync(u);
});
