const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldS = '{ title: "Maritime & Water", img: "/images/maritime-harbour-site.jpg", icon: <Waves size={30} />, text: "Dredging, reclamation, and water supply systems engineered to serve communities at scale." }\\n            ].map';

const newS = '{ title: "Maritime & Water", img: "/images/maritime-harbour-site.jpg", icon: <Waves size={30} />, text: "Dredging, reclamation, and water supply systems engineered to serve communities at scale." },\n              { title: "Landslide Mitigation", img: "/images/kandy-landslide/kandy-5.jpg", icon: <Mountain size={30} />, text: "Expert slope stabilization and rock-fall protection systems in critical hill-country zones." }\n            ].map';

// using regex for exact match across lines
content = content.replace(/\{ title: "Maritime & Water"[^\}]+ \}\s*\].map/, '{ title: "Maritime & Water", img: "/images/maritime-harbour-site.jpg", icon: <Waves size={30} />, text: "Dredging, reclamation, and water supply systems engineered to serve communities at scale." },\n              { title: "Landslide Mitigation", img: "/images/kandy-landslide/kandy-5.jpg", icon: <Mountain size={30} />, text: "Expert slope stabilization and rock-fall protection systems in critical hill-country zones." }\n            ].map');


fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Added object');
