const fs = require('fs');
let content = fs.readFileSync('src/app/projects/page.tsx', 'utf8');

content = content.replace(
  'const imgPath = project.heroImage || project.images?.[0] || project.galleryImages?.[0];',
  "const imgPath = project.heroImage || project.images?.[0] || project.galleryImages?.[0] || '/images/page-headers/projects-portfolio.jpg';"
);
content = content.replace(
  'if (!imgPath) return null;',
  ''
);

fs.writeFileSync('src/app/projects/page.tsx', content, 'utf8');
console.log('Fixed imgPath fallback in projects page');
