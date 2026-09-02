const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Update text
  if (content.includes('10+ yrs') || content.includes('10+ years') || content.includes('600+ projects') || content.includes('10+ yrs, 600+ projects')) {
    content = content.replace(/10\+\s*yrs/gi, '13+ yrs').replace(/10\+\s*years/gi, '13+ years').replace(/600\+\s*projects/gi, '1000+ projects');
    changed = true;
  }

  // Handle the trailing slash fix in Header, Footer, and page files
  const oldContent = content;
  content = content.replace(/href="\/([^"]+?)"/g, (match, p1) => {
    // Only replace internal links that don't end in a slash, don't have extension, and are not root
    if (p1.endsWith('/') || p1.includes('.') || p1.startsWith('#')) return match;
    return `href="/${p1}/"`;
  });
  
  if (oldContent !== content) {
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
});
console.log('Done.');
