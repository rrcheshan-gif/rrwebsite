const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

content = content.replace(
  'img: "/images/kandy-landslide/kandy-5.jpg", icon: <Mountain size={30} />',
  'img: "/images/home/landslide-mitigation-new.jpeg", icon: <Mountain size={30} />'
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Replaced landslide image');
