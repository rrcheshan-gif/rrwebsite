const fs = require('fs');
const file = 'src/app/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace Manrope with Plus_Jakarta_Sans
content = content.replace(
  /import \{ Manrope \} from "next\/font\/google";/g,
  'import { Plus_Jakarta_Sans } from "next/font/google";'
);

content = content.replace(
  /const manropeHeading = Manrope\(\{/g,
  'const jakartaHeading = Plus_Jakarta_Sans({'
);

content = content.replace(
  /const manropeBody = Manrope\(\{/g,
  'const jakartaBody = Plus_Jakarta_Sans({'
);

content = content.replace(
  /manropeHeading\.variable/g,
  'jakartaHeading.variable'
);

content = content.replace(
  /manropeBody\.variable/g,
  'jakartaBody.variable'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated layout.tsx to use Plus Jakarta Sans');
