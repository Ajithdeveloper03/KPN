const fs = require('fs');
const glob = require('glob');
const path = require('path');

const files = glob.sync('src/**/*.{tsx,ts}');

// Dictionaries for random selection
const animalImages = ['/images/animal1.webp', '/images/animal2.webp', '/images/animal3.webp', '/images/animal4.webp', '/images/animal5.webp', '/images/animal6.webp', '/images/services/animal.webp', '/images/aniamal2.webp', '/images/aniamal3.webp'];
const goatImages = ['/images/goat1.webp', '/images/goat2.webp', '/images/goat3.webp', '/images/goat4.webp', '/images/goat5.webp', '/images/goat6.webp', '/images/goat7.webp', '/images/services/goat.webp'];
const poultryImages = ['/images/poultry.webp', '/images/services/poultry.webp', '/images/services/poultry2.webp', '/images/services/poultry3.webp', '/images/services/poultry (2).webp'];
const factoryImages = ['/images/factory.webp', '/images/factory (2).webp', '/images/services/factory1.webp', '/images/services/factory2.webp', '/images/services/factory3.webp', '/images/services/factory4.webp', '/images/services/factory5.webp', '/images/services/factory6.webp', '/images/services/factory7.webp', '/images/services/factory8.webp'];
const homeImages = ['/images/terrace.webp', '/images/terrace3.webp', '/images/terrace (2).webp', '/images/services/car1.webp', '/images/services/car2.webp', '/images/services/car3.webp', '/images/services/car4.webp', '/images/services/car5.webp'];
const sportsImages = ['/images/services/badminton-court-banner-image.webp', '/images/services/cricket-banner-image.webp', '/images/services/cricket-image-1.webp', '/images/services/cricket-image-2.webp', '/images/services/sports-turf-main-banner.webp'];

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

let modifiedFiles = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Determine context
  let category = 'general';
  if (file.includes('cow-dairy')) category = 'animal';
  else if (file.includes('goat')) category = 'goat';
  else if (file.includes('poultry')) category = 'poultry';
  else if (file.includes('factory') || file.includes('warehouse') || file.includes('industrial')) category = 'factory';
  else if (file.includes('home-roofing') || file.includes('car-parking') || file.includes('terrace')) category = 'home';
  else if (file.includes('sports') || file.includes('cricket') || file.includes('badminton')) category = 'sports';
  
  const regex = /src=(['"])\/images\/(?:services\/)?[^'"}]+\.(?:webp|png|jpg|jpeg)(['"])/g;
  
  content = content.replace(regex, (match, q1, q2) => {
    if (match.includes('logo') || match.includes('hero-bg') || match.includes('night-bg') || match.includes('og-image')) return match;
    
    let replacement = match;
    
    if (category === 'animal') replacement = 'src=' + q1 + getRandomItem(animalImages) + q2;
    else if (category === 'goat') replacement = 'src=' + q1 + getRandomItem(goatImages) + q2;
    else if (category === 'poultry') replacement = 'src=' + q1 + getRandomItem(poultryImages) + q2;
    else if (category === 'factory') replacement = 'src=' + q1 + getRandomItem(factoryImages) + q2;
    else if (category === 'home') replacement = 'src=' + q1 + getRandomItem(homeImages) + q2;
    else if (category === 'sports') replacement = 'src=' + q1 + getRandomItem(sportsImages) + q2;
    else {
      if (file.includes('HeroSection.tsx')) {
         return match;
      }
    }
    return replacement;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    modifiedFiles++;
  }
}
console.log('Modified ' + modifiedFiles + ' files.');
