const fs = require("fs");
const path = require("path");

const rootDir = __dirname;
const sourcePath = path.join(rootDir, ".htaccess");
const outDir = path.join(rootDir, "out");
const targetPath = path.join(outDir, ".htaccess");

if (!fs.existsSync(sourcePath)) {
  console.error("Missing source .htaccess in project root.");
  process.exit(1);
}

if (!fs.existsSync(outDir)) {
  console.error("Missing out/ directory. Run next build first.");
  process.exit(1);
}

fs.copyFileSync(sourcePath, targetPath);
console.log("Copied .htaccess to out/.htaccess");
