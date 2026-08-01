const fs = require('fs');
const path = require('path');
const dir = './src/components';
['AreasWeServeSection.tsx', 'CTASection.tsx', 'Header.tsx', 'HeroSection.tsx', 'WhyKPNSection.tsx'].forEach(file => {
  const fullPath = path.join(dir, file);
  let content = fs.readFileSync(fullPath, 'utf8');
  if (content.startsWith('import { openQuoteModal }')) {
    content = content.replace(/^import \{ openQuoteModal \} from "@\/components\/QuoteModal";\n"use client";/m, '"use client";\nimport { openQuoteModal } from "@/components/QuoteModal";');
    fs.writeFileSync(fullPath, content);
    console.log("Fixed " + file);
  }
});
