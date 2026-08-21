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
  
  // Replace the massive header font sizes
  const newContent = content
    .replace(/fontSize:\s*isMobile\s*\?\s*"2\.[58]rem"\s*:\s*"5rem"/g, 'fontSize: isMobile ? "2.2rem" : "3.5rem"')
    .replace(/fontSize:\s*isMobile\s*\?\s*"2\.[58]rem"\s*:\s*"4\.5rem"/g, 'fontSize: isMobile ? "2.2rem" : "3.5rem"');
    
  if (content !== newContent) {
    fs.writeFileSync(f, newContent, 'utf8');
    console.log('Fixed header in:', f);
    changed++;
  }
});

console.log('Fixed', changed, 'files.');
