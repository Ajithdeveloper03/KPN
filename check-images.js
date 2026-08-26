const fs = require("fs");
const glob = require("glob");

const actualImages = new Set(
  glob.sync("public/images/**/*.*").map(f => "/" + f.replace("public/", "").replace(/\\/g, "/"))
);

const files = glob.sync("src/**/*.{tsx,ts}");
const broken = [];

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");
  const re = /src=["']?(\/images\/[^"'\s}\)>]+)/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    const imgPath = m[1];
    if (!actualImages.has(imgPath)) {
      broken.push(file.replace(/\\/g, "/") + " => " + imgPath);
    }
  }
}

if (broken.length === 0) {
  console.log("All image references are valid!");
} else {
  broken.forEach(b => console.log(b));
  console.log("\nTotal: " + broken.length + " broken references");
}