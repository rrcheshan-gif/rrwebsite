const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/app/about/awards/page.tsx',
  'src/app/about/company-overview/page.tsx',
  'src/app/about/key-data/page.tsx',
  'src/app/api/chat/site-context.ts'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/1,400/g, '2,000');
    fs.writeFileSync(filePath, content);
  }
});

console.log("Updated workforce numbers to 2,000");
