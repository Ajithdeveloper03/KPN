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
      if (file.endsWith('page.tsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src/app/services');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Skip if it already has offers
  if (content.includes('"offers":')) {
    return;
  }

  // Look for the end of the Service schema
  // "serviceType": "..."
  // }
  
  // We'll just replace the last property before the closing brace of the Service object
  const serviceRegex = /"serviceType":\s*"([^"]+)"/;
  if (serviceRegex.test(content)) {
    const replacement = `"serviceType": "$1",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": "https://kpnroofingsheds.com/contact/"
            }`;
    content = content.replace(serviceRegex, replacement);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Injected offers into: ${file}`);
  }
});

console.log('Offer injection complete.');
