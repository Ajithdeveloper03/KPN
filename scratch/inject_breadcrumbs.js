const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, '..', 'src', 'app', 'services');

function toTitleCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const categoryMappings = {
  'agriculture-animal-husbandry-sheds': 'Agriculture & Animal Husbandry Sheds',
  'home-roofing-sheds': 'Home Roofing Sheds',
  'industrial-sheds': 'Industrial Sheds',
  'sports-turf-sheds': 'Sports Turf Sheds'
};

const titleMappings = {
  'factory-shed': 'Factory Shed',
  'garment-factory-shed': 'Garment Factory Shed',
  'warehouse-godown-shed': 'Warehouse & Godown Shed',
  'car-parking-shed': 'Car Parking Shed',
  'terrace-roofing-shed': 'Terrace Roofing Shed',
  'goat-farm-shed': 'Goat Farm Shed',
  'cow-dairy-farm-shed': 'Cow / Dairy Farm Shed',
  'poultry-farm-shed': 'Poultry Farm Shed',
  'badminton-court-shed': 'Badminton Court Shed',
  'cricket-turf-shed': 'Cricket Turf Shed'
};

// Undo the mistaken injections in main category pages
['agriculture-animal-husbandry-sheds', 'home-roofing-sheds', 'industrial-sheds', 'sports-turf-sheds'].forEach(cat => {
  const pagePath = path.join(servicesDir, cat, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    const regex = /<script\s+type="application\/ld\+json"\s+dangerouslySetInnerHTML=\{\{\s+__html: JSON\.stringify\(\{\s+"@context": "https:\/\/schema\.org",\s+"@type": "BreadcrumbList"[\s\S]*?\}\)\s+\}\}\s+\/>\n/;
    if (regex.test(content)) {
      content = content.replace(regex, '');
      fs.writeFileSync(pagePath, content, 'utf8');
      console.log(`Reverted mistaken injection in ${cat}/page.tsx`);
    }
  }
});

// Now inject correctly into sub-sub-folders
const categories = fs.readdirSync(servicesDir, { withFileTypes: true }).filter(d => d.isDirectory());

for (const cat of categories) {
  const catPath = path.join(servicesDir, cat.name);
  const subPages = fs.readdirSync(catPath, { withFileTypes: true }).filter(d => d.isDirectory());
  
  for (const subPage of subPages) {
    const pagePath = path.join(catPath, subPage.name, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      const categoryName = cat.name;
      const subPageName = subPage.name;
      
      const categoryTitle = categoryMappings[categoryName] || toTitleCase(categoryName);
      const subPageTitle = titleMappings[subPageName] || toTitleCase(subPageName);
      
      let content = fs.readFileSync(pagePath, 'utf8');
      
      if (content.includes('"@type": "BreadcrumbList"')) {
        console.log(`Skipping ${categoryName}/${subPageName} (already has BreadcrumbList)`);
        continue;
      }
      
      const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://kpnroofingsheds.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://kpnroofingsheds.com/services/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": categoryTitle,
            "item": `https://kpnroofingsheds.com/services/${categoryName}/`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": subPageTitle,
            "item": `https://kpnroofingsheds.com/services/${categoryName}/${subPageName}/`
          }
        ]
      };
      
      const schemaString = JSON.stringify(schema, null, 2);
      const scriptTag = `      <script\n        type="application/ld+json"\n        dangerouslySetInnerHTML={{\n          __html: JSON.stringify(${schemaString.replace(/\n/g, '\n          ')})\n        }}\n      />\n`;
      
      const regex = /(return\s*\(\s*<div[^>]*>)/;
      if (regex.test(content)) {
        content = content.replace(regex, `$1\n${scriptTag}`);
        fs.writeFileSync(pagePath, content, 'utf8');
        console.log(`Injected BreadcrumbList into ${categoryName}/${subPageName}`);
      }
    }
  }
}
