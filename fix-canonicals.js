const fs = require("fs");
const glob = require("glob");
const path = require("path");

// 1. Remove alternates from layout.tsx
let layoutPath = "src/app/layout.tsx";
let layoutContent = fs.readFileSync(layoutPath, "utf8");
layoutContent = layoutContent.replace(/alternates:\s*\{[\s\S]*?\},/g, "");
fs.writeFileSync(layoutPath, layoutContent);

// 2. Add canonical to every page.tsx
const pages = glob.sync("src/app/**/page.tsx");
for (const page of pages) {
  let content = fs.readFileSync(page, "utf8");
  
  if (content.includes("alternates:")) continue;
  
  let relativePath = page.replace("src/app", "").replace("/page.tsx", "").replace(/\\/g, "/");
  if (relativePath === "") relativePath = "/";
  
  const metadataRegex = /export const metadata: Metadata = \{([\s\S]*?)\};/;
  const match = content.match(metadataRegex);
  
  if (match) {
    const newMetadata = "export const metadata: Metadata = {\n  alternates: {\n    canonical: \"" + relativePath + "\",\n  }," + match[1] + "};";
    content = content.replace(metadataRegex, newMetadata);
    fs.writeFileSync(page, content);
  }
}
console.log("Fixed canonicals in layout and " + pages.length + " pages.");
