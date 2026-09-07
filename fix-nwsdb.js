const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(
  /{ name: "NATIONAL WATER BOARD", logo: "\/images\/clients\/nwsdb.png" }/,
  '{ name: "NATIONAL WATER BOARD", logo: "/images/clients/nwsdb-correct.png" }'
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Updated NWSDB logo to the correct one');
