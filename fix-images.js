const fs = require('fs');
const path = require('path');
const dir = './src/components';
const files = fs.readdirSync(dir);
for (const file of files) {
  if (file.endsWith('.tsx')) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    if (content.includes('"/images/')) {
      content = content.replace(/"\/images\//g, '"/kpnroofingshed/images/');
      fs.writeFileSync(fullPath, content);
      console.log('Fixed ' + file);
    }
  }
}
