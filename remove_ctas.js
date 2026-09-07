const fs = require('fs');
const path = require('path');

const dirs = [
  'bridge-construction',
  'dredging-reclamation',
  'landslide-mitigation',
  'maritime-construction',
  'road-construction',
  'water-infrastructure'
];

dirs.forEach(dir => {
  const filePath = path.join('src/app/services', dir, 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the CTA Section completely
  const ctaRegex = /\{\/\*.*CTA Section.*\*\/\}[\s\S]*?<\/section>/i;
  if (ctaRegex.test(content)) {
    content = content.replace(ctaRegex, '');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Removed CTA from ' + dir);
  } else {
    console.log('No CTA found in ' + dir);
  }
});
