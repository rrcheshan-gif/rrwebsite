const fs = require('fs');
const path = require('path');

function findFiles(dir, exts) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) results = results.concat(findFiles(file, exts));
    else if (exts.some(ext => file.endsWith(ext))) results.push(file);
  });
  return results;
}

const files = findFiles('src/app', ['.tsx']);
let changed = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  
  // Replace the secondary headers which were 3.5rem
  const newContent = content
    .replace(/fontSize:\s*isMobile\s*\?\s*"2\.[25]rem"\s*:\s*"3\.5rem"/g, 'fontSize: isMobile ? "2rem" : "2.8rem"');
    
  if (content !== newContent) {
    fs.writeFileSync(f, newContent, 'utf8');
    console.log('Fixed secondary header in:', f);
    changed++;
  }
});

console.log('Fixed', changed, 'files.');
