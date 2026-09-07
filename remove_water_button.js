const fs = require('fs');
const waterFile = 'src/app/services/water-infrastructure/page.tsx';
let waterContent = fs.readFileSync(waterFile, 'utf8');

const regex = /\{\/\*\s*Back Button Section\s*\*\/\}[\s\S]*?<\/section>/;
if (regex.test(waterContent)) {
    waterContent = waterContent.replace(regex, '');
    fs.writeFileSync(waterFile, waterContent, 'utf8');
    console.log('Removed bottom back button from water.');
}
