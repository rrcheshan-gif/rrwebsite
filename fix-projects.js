const fs = require('fs');

let content = fs.readFileSync('src/app/projects/[id]/page.tsx', 'utf8');

// Fix implicitly any type
content = content.replace(/galleryImages\.find\(\(img\)/g, "galleryImages.find((img: string)");

// Fix repeated borderBottom
content = content.replace(/borderBottom: '1px solid #ccc',\s*paddingBottom: '2px',\s*background: 'none',\s*border: 'none',\s*borderBottom: '1px solid #ccc'/g, "paddingBottom: '2px', background: 'none', border: 'none', borderBottom: '1px solid #ccc'");

// Fix back arrow corruption
content = content.replace(/\+\? Back/g, "? Back");

fs.writeFileSync('src/app/projects/[id]/page.tsx', content, 'utf8');
console.log('Fixed projects/[id]/page.tsx');
