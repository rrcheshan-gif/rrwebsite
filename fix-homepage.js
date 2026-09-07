const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(
  '{ title: "Building Projects", img: "/images/wellamankara/building-projects.jpg", icon: <Building2 size={30} />, text: "Construction shaping commercial, industrial, and high-rise developments." }',
  '{ title: "Civil Structures", img: "/images/wellamankara/building-projects.jpg", icon: <Building2 size={30} />, text: "Specialized structural engineering encompassing water retaining facilities, towers, and heavy steel fabrication." }'
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Fixed homepage');
