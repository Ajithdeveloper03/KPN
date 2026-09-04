const fs = require('fs');
const path = require('path');

const files = [
  'src/app/services/agriculture-animal-husbandry-sheds/page.tsx',
  'src/app/services/agriculture-animal-husbandry-sheds/cow-dairy-farm-shed/page.tsx',
  'src/app/services/agriculture-animal-husbandry-sheds/goat-farm-shed/page.tsx',
  'src/app/services/agriculture-animal-husbandry-sheds/poultry-farm-shed/page.tsx'
];

let allValid = true;

for (const file of files) {
  try {
    const filePath = path.join(process.cwd(), file);
    const content = fs.readFileSync(filePath, 'utf8');
    const regex = /JSON\.stringify\(([\s\S]*?)\)\s*\}\}/g;
    let match;
    let schemaCount = 0;
    while ((match = regex.exec(content)) !== null) {
      schemaCount++;
      let jsonString = match[1];
      try {
        JSON.parse(jsonString);
      } catch (e) {
        console.error(`ERROR parsing schema in ${file}`);
        console.error(`Error: ${e.message}`);
        allValid = false;
      }
    }
    console.log(`Checked ${file}: Found ${schemaCount} valid schemas`);
  } catch (err) {
    console.error(`Could not read ${file}: ${err.message}`);
    allValid = false;
  }
}

if (allValid) {
  console.log('\nAll schemas are perfectly valid JSON.');
} else {
  console.log('\nFound invalid schemas.');
}
