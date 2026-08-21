const fs = require('fs');
const path = require('path');

function cleanFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  
  // Replace the specific encoding artifacts
  // The mangled dash is often "?"" or "â€”" or similar. We can use a regex to catch it.
  content = content.replace(/moving forward[^\w]+built to last/g, 'moving forward — built to last');
  content = content.replace(/General Manager[^\w]+Contracts/g, 'General Manager - Contracts');
  content = content.replace(/General Manager[^\w]+Operations/g, 'General Manager - Operations');
  content = content.replace(/across Sri Lanka[^\w]+engineered/g, 'across Sri Lanka — engineered');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Cleaned:', filePath);
  }
}

cleanFile('src/app/page.tsx');
cleanFile('src/data/company-data.ts');
console.log('Encoding fixes applied.');
