const fs = require('fs');
let content = fs.readFileSync('src/app/projects/ongoing/page.tsx', 'utf8');
content = content.replace("desc: 'Empowering Sri Lanka's socio-economic growth through critical infrastructure.'", 'desc: "Empowering Sri Lanka\'s socio-economic growth through critical infrastructure."');
fs.writeFileSync('src/app/projects/ongoing/page.tsx', content, 'utf8');
console.log('Fixed quotes 3');
