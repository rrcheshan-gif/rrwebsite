const fs = require('fs');
const pages = [
  'src/app/services/road-construction/page.tsx',
  'src/app/services/bridge-construction/page.tsx',
  'src/app/services/dredging-reclamation/page.tsx',
  'src/app/services/maritime-construction/page.tsx',
  'src/app/services/water-infrastructure/page.tsx',
  'src/app/services/landslide-mitigation/page.tsx'
];

pages.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // We can replace `<section ` with `<section style={{ position: 'relative' }} ` if there is no style prop
    // Or if there is a style prop, insert `position: 'relative', `
    // A safer way is to just inject it if style={{ exists on the first section
    const match = content.match(/<section[^>]*style=\{\{/);
    if (match) {
        if (!content.substring(match.index, match.index + 200).includes('position:')) {
            content = content.replace(match[0], match[0] + " position: 'relative', ");
        }
    }
    
    fs.writeFileSync(file, content, 'utf8');
});

console.log('Ensured position relative on all hero sections.');
