const fs = require('fs');
const file = 'src/app/projects/overseas/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// I will just use string manipulation for safety
const split1 = content.split('{/* Filter Tabs */}');
const split2 = split1[1].split('{/* Projects Grid */}');
content = split1[0] + '{/* Projects Grid */}' + split2[1];

// Also remove milestone rendering logic manually
const filterAllIndex = content.indexOf(`{filter === 'all'`);
const gridIndex = content.indexOf(`<div style={{ display: "grid", gridTemplateColumns:`);
content = content.substring(0, filterAllIndex) + content.substring(gridIndex);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed exactly');
