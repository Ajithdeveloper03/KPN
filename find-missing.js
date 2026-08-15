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

const srcDir = path.join(__dirname, 'src');
const publicDir = path.join(__dirname, 'public');

const missing = new Set();

walkDir(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.js') || filePath.endsWith('.jsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    const regex = /src=["'](\/images\/[^"']+)["']/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      const imgPath = match[1];
      const fullPath = path.join(publicDir, imgPath);
      if (!fs.existsSync(fullPath)) {
        missing.add(imgPath);
        console.log(`Missing: ${imgPath} used in ${filePath}`);
      }
    }
  }
});
