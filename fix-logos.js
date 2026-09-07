const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(
  /{ name: "U.D.A. SRI LANKA", logo: "\/images\/clients\/uda.png" }/,
  '{ name: "U.D.A. SRI LANKA", logo: "/images/clients/uda-correct.jpg" }'
);

content = content.replace(
  /{ name: "MINISTRY OF IRRIGATION", logo: "\/images\/clients\/irrigation.png" }/,
  '{ name: "MINISTRY OF IRRIGATION", logo: "/images/clients/irrigation-correct.svg" }'
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Updated UDA and Irrigation logos');
