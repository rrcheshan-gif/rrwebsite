const fs = require('fs');
const file = 'src/app/contact/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace backgroundImage with a dark gradient
content = content.replace(
  'backgroundImage: "url(\'/images/page-headers/contact-hero.jpg\')",',
  'background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",'
);

// If the image had single quotes or double quotes differently:
content = content.replace(
  /backgroundImage:\s*['"`]url\(['"`]\/images\/page-headers\/contact-hero\.jpg['"`]\)['"`],?/,
  'background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Removed contact-hero.jpg background image');
