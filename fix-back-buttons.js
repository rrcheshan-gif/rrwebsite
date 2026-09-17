const fs = require("fs");
const path = require("path");

const walkSync = function(dir, filelist) {
  files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      if (file.endsWith(".tsx")) filelist.push(path.join(dir, file));
    }
  });
  return filelist;
};

const allFiles = walkSync("src/app");
let fixedCount = 0;

for (const file of allFiles) {
  let content = fs.readFileSync(file, "utf8");
  
  // Find back buttons that are inside a centered container and move them OUT to be absolute.
  // There are a few variations.
  // E.g. <div style={{ textAlign: "left", marginBottom: "24px" }}> <Link ...>&larr; Back to Home</Link> </div>
  
  // Wait, replacing it with regex might be tricky if it spans multiple lines.
  // Let"s just do a smarter regex replacement.
  
  let modified = false;
  
  // 1. Remove the old back button block
  const oldButtonRegex = /<div style={{[^}]*textAlign:\s*["']left["'][^}]*}}>\s*<Link href=[^>]+>[^<]*&larr;\s*Back to[^<]*<\/Link>\s*<\/div>/g;
  
  // Wait, there might be newlines. Let"s use a more robust approach.
  
  // Actually, I can just find the `<Link ...>&larr; Back to ...</Link>` and the surrounding div.
}

