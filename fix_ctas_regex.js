const fs = require('fs');
const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The objects look like:
// {
//   slug: 'buildings-structures',
// ...
//   cta: '/projects',
// }

let replaced = false;

// 1. Civil Structures
const buildingsMatch = content.match(/slug:\s*'buildings-structures'[\s\S]*?cta:\s*'\/projects',/);
if (buildingsMatch) {
    content = content.replace(buildingsMatch[0], buildingsMatch[0].replace("cta: '/projects'", "cta: '/services/buildings-structures'"));
    replaced = true;
}

// 2. Railway
const railwayMatch = content.match(/slug:\s*'railway-civil-works'[\s\S]*?cta:\s*'\/projects',/);
if (railwayMatch) {
    content = content.replace(railwayMatch[0], railwayMatch[0].replace("cta: '/projects'", "cta: '/services/railway-civil-works'"));
    replaced = true;
}

fs.writeFileSync(file, content, 'utf8');
if(replaced) console.log('Successfully replaced ctas.');
else console.log('Did not find the cta to replace.');
