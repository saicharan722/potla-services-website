
const fs = require("fs");
const path = require("path");

const registryPath = path.join(
  __dirname,
  "src/assets/imageRegistry.js"
);

if (!fs.existsSync(registryPath)) {
  console.log("imageRegistry.js not found!");
  process.exit(1);
}

const content = fs.readFileSync(registryPath, "utf8");

const imports = [...content.matchAll(
  /import\s+\w+\s+from\s+['"](.+?)['"]/g
)];

let missing = [];

for (const item of imports) {
  const imagePath = path.resolve(
    path.dirname(registryPath),
    item[1]
  );

  if (!fs.existsSync(imagePath)) {
    missing.push(item[1]);
  }
}

console.log("Total imports:", imports.length);
console.log("Missing images:", missing.length);

missing.forEach(file => console.log("MISSING:", file));

if (missing.length === 0) {
  console.log("All images found successfully!");
}
