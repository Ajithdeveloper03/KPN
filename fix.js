const fs = require('fs'); 
const path = require('path'); 
const dir = './src/components'; 
const files = fs.readdirSync(dir); 
for (const file of files) { 
  if (file.endsWith('.tsx') && file !== 'QuoteModal.tsx') { 
    const fullPath = path.join(dir, file); 
    let content = fs.readFileSync(fullPath, 'utf8'); 
    let changed = false; 

    if (content.includes('setIsModalOpen={setIsModalOpen}')) { 
      content = content.replace(/setIsModalOpen=\{setIsModalOpen\}/g, ''); 
      changed = true; 
    } 

    if (content.includes('setIsModalOpen(true)')) { 
      content = content.replace(/setIsModalOpen\(true\)/g, 'openQuoteModal()'); 
      changed = true; 
    } 

    if (content.includes('setIsModalOpen')) { 
      // replace `{ setIsModalOpen }: { setIsModalOpen: (val: boolean) => void }` with `()`
      content = content.replace(/\{\s*setIsModalOpen\s*\}\s*:\s*\{\s*setIsModalOpen\s*:\s*\(val:\s*boolean\)\s*=>\s*void\s*\}/g, '()');
      content = content.replace(/\{\s*setIsModalOpen\s*\}\s*:\s*\{\s*setIsModalOpen\s*:\s*\(open:\s*boolean\)\s*=>\s*void\s*\}/g, '()');
      
      // Card component specific replacement in WhyKPNSection
      content = content.replace(/,\s*setIsModalOpen\s*\}/g, '}');
      content = content.replace(/,\s*setIsModalOpen\s*:\s*\(val:\s*boolean\)\s*=>\s*void/g, '');
      content = content.replace(/,\s*setIsModalOpen\s*:\s*any/g, '');
      content = content.replace(/setIsModalOpen=\{setIsModalOpen\}/g, '');
      changed = true; 
    } 
    
    if (changed) { 
      if (content.includes('openQuoteModal()') && !content.includes('import { openQuoteModal }')) { 
        content = 'import { openQuoteModal } from "@/components/QuoteModal";\n' + content; 
      } 
      fs.writeFileSync(fullPath, content); 
      console.log('Updated ' + file); 
    } 
  } 
}
