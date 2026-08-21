const fs = require('fs');
const files = [
  'src/app/services/bridge-construction/page.tsx',
  'src/app/services/dredging-reclamation/page.tsx',
  'src/app/services/road-construction/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // replace q: "some text—, with q: "some text?",
  content = content.replace(/q: "([^"]+)—,/g, 'q: "$1?",');
  fs.writeFileSync(file, content, 'utf8');
});
console.log('Fixed quotes in FAQs');
