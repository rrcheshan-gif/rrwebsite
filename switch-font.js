const fs = require('fs');
const file = 'src/app/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/import \{ Montserrat \} from "next\/font\/google";/g, 'import { Outfit } from "next/font/google";');
content = content.replace(/const montserratHeading = Montserrat/g, 'const outfitHeading = Outfit');
content = content.replace(/const montserratBody = Montserrat/g, 'const outfitBody = Outfit');
content = content.replace(/montserratHeading\.variable/g, 'outfitHeading.variable');
content = content.replace(/montserratBody\.variable/g, 'outfitBody.variable');

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully updated layout.tsx to use Outfit font');
