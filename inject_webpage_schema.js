const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      // Skip dynamic routes and API for safety if we don't want to mess them up
      if (!file.includes('[slug]') && !file.includes('api')) {
        results = results.concat(walk(file));
      }
    } else { 
      if (file.endsWith('page.tsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src/app');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Skip if it already has a WebPage or AboutPage or ContactPage or Blog schema
  if (content.includes('"@type": "WebPage"') || 
      content.includes('"@type": "AboutPage"') || 
      content.includes('"@type": "ContactPage"') ||
      content.includes('"@type": "Blog"')) {
    return;
  }

  // Extract title
  let titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
  let title = titleMatch ? titleMatch[1] : 'KPN Roofing Shed';

  // Extract description
  let descMatch = content.match(/description:\s*['"]([^'"]+)['"]/);
  let description = descMatch ? descMatch[1] : 'KPN Roofing Shed Services';

  // Determine URL path
  let relativePath = file.replace(/\\/g, '/').replace('src/app', '').replace('/page.tsx', '');
  if (relativePath === '') relativePath = '/';
  else relativePath = relativePath + '/'; // ensure trailing slash

  const schemaObj = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `https://kpnroofingsheds.com${relativePath}#webpage`,
    "url": `https://kpnroofingsheds.com${relativePath}`,
    "name": title,
    "description": description,
    "isPartOf": {
      "@id": "https://kpnroofingsheds.com/#website"
    }
  };

  const schemaString = `\n      <script\n        type="application/ld+json"\n        dangerouslySetInnerHTML={{\n          __html: JSON.stringify(${JSON.stringify(schemaObj, null, 12).trim()})\n        }}\n      />`;

  // Inject right after the first <div className="..."> or <main className="..."> or return ( <>
  // We'll look for the return statement of the component.
  // A safe place is right after return ( \n <div... or return ( \n <>
  
  const returnRegex = /(return\s*\(\s*(<div[^>]*>|<>|<main[^>]*>))/i;
  
  if (returnRegex.test(content)) {
    content = content.replace(returnRegex, `$1${schemaString}`);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Injected WebPage schema into: ${file}`);
  } else {
    console.log(`Could not find injection point in: ${file}`);
  }
});

console.log('Schema injection complete.');
