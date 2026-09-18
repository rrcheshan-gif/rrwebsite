const fs = require('fs');
const file = 'src/app/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace Plus_Jakarta_Sans with Montserrat
content = content.replace(
  /import \{ Plus_Jakarta_Sans \} from "next\/font\/google";/g,
  'import { Montserrat } from "next/font/google";'
);

content = content.replace(
  /const jakartaHeading = Plus_Jakarta_Sans\(\{/g,
  'const montserratHeading = Montserrat({'
);

content = content.replace(
  /const jakartaBody = Plus_Jakarta_Sans\(\{/g,
  'const montserratBody = Montserrat({'
);

content = content.replace(
  /jakartaHeading\.variable/g,
  'montserratHeading.variable'
);

content = content.replace(
  /jakartaBody\.variable/g,
  'montserratBody.variable'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated layout.tsx to use Montserrat');
