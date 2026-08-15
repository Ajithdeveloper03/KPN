const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const srcDir = path.join(__dirname, 'src');
const imageUsageMap = {}; // imageSrc -> array of { file, line, lineNumber }

walkDir(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx')) {
    const lines = fs.readFileSync(filePath, 'utf8').split('\n');
    lines.forEach((line, index) => {
      // Look for src="..." or src={'...'} or src={...}
      // Simple regex for string literal image srcs
      const matches = [...line.matchAll(/src=["'](\/images\/[^"']+)["']/g)];
      matches.forEach(match => {
        const src = match[1];
        if (!imageUsageMap[src]) {
          imageUsageMap[src] = [];
        }
        imageUsageMap[src].push({
          file: path.relative(__dirname, filePath),
          line: line.trim(),
          lineNumber: index + 1
        });
      });
    });
  }
});

let duplicates = 0;
for (const [src, usages] of Object.entries(imageUsageMap)) {
  if (usages.length > 1) {
    duplicates++;
    console.log(`\nImage: ${src} is used ${usages.length} times:`);
    usages.forEach(u => {
      console.log(`  - ${u.file}:${u.lineNumber} => ${u.line}`);
    });
  }
}

if (duplicates === 0) {
  console.log("No duplicate images found!");
}
