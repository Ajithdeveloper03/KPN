const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

function toTitleCase(str) {
  return str
    .replace(/[-_]/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim();
}

function processFiles() {
  const files = globSync('src/**/*.{tsx,jsx,ts,js}');
  let updatedFilesCount = 0;

  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanges = false;
    
    const extRegex = /(\/images\/[^"'\s`]+)\.(png|jpg|jpeg|PNG|JPG|JPEG)\b/g;
    
    content = content.replace(extRegex, (match, p1, p2) => {
      const lower = match.toLowerCase();
      if (lower.includes('hero-bg') || lower.includes('night-bg')) {
        return match; 
      }
      hasChanges = true;
      return `${p1}.webp`;
    });

    const tagRegex = /<(Image|img)([^>]+)>/g;
    content = content.replace(tagRegex, (match, tag, attrs) => {
      let srcMatch = attrs.match(/src=["']([^"']+)["']/);
      if (!srcMatch) {
         srcMatch = attrs.match(/src=\{([^}]+)\}/);
      }
      
      let filename = 'Image';
      if (srcMatch) {
        const srcVal = srcMatch[1];
        const parts = srcVal.split('/');
        const name = parts[parts.length - 1].split('.')[0];
        if (!name.includes('.') && !name.includes('$')) {
           filename = toTitleCase(name);
        }
      }

      let altMatch = attrs.match(/alt=["']([^"']*)["']/);
      let newAttrs = attrs;
      
      if (altMatch) {
        if (!altMatch[1] || altMatch[1].toLowerCase() === 'image') {
           newAttrs = newAttrs.replace(altMatch[0], `alt="${filename}"`);
           if (newAttrs !== attrs) hasChanges = true;
        }
      } else {
        if (!attrs.includes('alt={') && !attrs.includes('alt=')) {
           if (attrs.endsWith('/>')) {
             newAttrs = `${attrs.slice(0, -2)} alt="${filename}" />`;
           } else {
             newAttrs = `${attrs} alt="${filename}"`;
           }
           hasChanges = true;
        }
      }

      return `<${tag}${newAttrs}>`;
    });

    if (hasChanges) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated: ${file}`);
      updatedFilesCount++;
    }
  });

  console.log(`Updated references in ${updatedFilesCount} files.`);
}

processFiles();
