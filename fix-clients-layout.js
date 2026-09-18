const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Change container maxWidth to 1400px
content = content.replace(
  /maxWidth:\s*"1100px"/,
  'maxWidth: "1400px"'
);

// Change card width from 340px to 320px to ensure 4 fit on standard desktop
content = content.replace(
  /width:\s*"min\(100%,\s*340px\)"/g,
  'width: "min(100%, 320px)"'
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Fixed client logos layout for 4 top 3 bottom');
