const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const servicesDir = path.join(__dirname, 'src', 'app', 'services');

walkDir(servicesDir, (filePath) => {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has the curved timeline
    if (content.includes('Curved SVG Wavy Pattern Line')) {
      // 1. Hide the wavy line on mobile, add a straight line
      const oldWavyLine = `              {/* Curved SVG Wavy Pattern Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-48 md:-translate-x-1/2 z-0 opacity-70" 
                   style={{
                     backgroundImage: \`url("data:image/svg+xml,%3Csvg width='192' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M96 0 C160 100 32 300 96 400' stroke='%23f39c12' stroke-width='32' fill='none' stroke-linecap='round' /%3E%3C/svg%3E")\`,
                     backgroundRepeat: 'repeat-y',
                     backgroundPosition: 'center',
                     maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                     WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
                   }}>
              </div>`;
              
      const newWavyLine = `              {/* Curved SVG Wavy Pattern Line (Desktop Only) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-48 -translate-x-1/2 z-0 opacity-70" 
                   style={{
                     backgroundImage: \`url("data:image/svg+xml,%3Csvg width='192' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M96 0 C160 100 32 300 96 400' stroke='%23f39c12' stroke-width='32' fill='none' stroke-linecap='round' /%3E%3C/svg%3E")\`,
                     backgroundRepeat: 'repeat-y',
                     backgroundPosition: 'center',
                     maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                     WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
                   }}>
              </div>
              
              {/* Straight Line for Mobile */}
              <div className="md:hidden absolute left-6 top-0 bottom-0 w-1 bg-white/10 z-0"></div>`;

      // 2. Fix the node position
      const oldNode = `<div className="absolute left-4 md:left-1/2 w-12 h-12 -translate-x-[8px] md:-translate-x-1/2 rounded-full border-4`;
      const newNode = `<div className="absolute left-6 md:left-1/2 w-12 h-12 -translate-x-1/2 md:-translate-x-1/2 rounded-full border-4`;
      
      // 3. Fix the padding on the content box to make room for the straight line
      const oldContentBox = `pl-20 md:pl-0`;
      const newContentBox = `pl-16 md:pl-0`;

      if (content.includes(oldWavyLine)) {
        content = content.replace(oldWavyLine, newWavyLine);
        content = content.replace(new RegExp(escapeRegExp(oldNode), 'g'), newNode);
        content = content.replace(new RegExp(escapeRegExp(oldContentBox), 'g'), newContentBox);
        
        fs.writeFileSync(filePath, content);
        console.log('Fixed timeline in:', filePath);
      }
    }
  }
});

function escapeRegExp(string) {
  return string.replace(/[.*+?^$\{}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
