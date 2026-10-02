const fs = require('fs');

let content = fs.readFileSync('src/app/projects/ongoing/page.tsx', 'utf8');

content = content.replace(
    /\{ id: 'disaster', title: 'Landslide Mitigation', img: '[^']+' \}/,
    "{ id: 'disaster', title: 'Landslide Mitigation', img: '/images/projects/ongoing/landslide/img-1.jpeg' }"
);

fs.writeFileSync('src/app/projects/ongoing/page.tsx', content, 'utf8');
console.log("Updated ongoing/page.tsx");
