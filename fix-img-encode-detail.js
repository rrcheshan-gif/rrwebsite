const fs = require('fs');
let content = fs.readFileSync('src/app/projects/[id]/page.tsx', 'utf8');

content = content.replace(
  'src={heroImg.startsWith(\"/\") ? heroImg : /}',
  'src={encodeURI(heroImg.startsWith(\"/\") ? heroImg : /)}'
);

// also for gallery images
content = content.replace(
  'src={img.startsWith(\"/\") ? img : /}',
  'src={encodeURI(img.startsWith(\"/\") ? img : /)}'
);

fs.writeFileSync('src/app/projects/[id]/page.tsx', content, 'utf8');
console.log('Fixed img encoding in detail page');
