const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(
  /{ name: "IRCON INTERNATIONAL", logo: "\/images\/clients\/ircon.png" }/,
  '{ name: "IRCON INTERNATIONAL", logo: "/images/clients/ircon-custom.svg" }'
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Updated IRCON logo');
