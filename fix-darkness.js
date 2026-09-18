const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldGradient = "background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.8) 100%)'";
const newGradient = "background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.4) 100%), linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.5) 100%)'";

content = content.replace(oldGradient, newGradient);

fs.writeFileSync(file, content, 'utf8');
console.log('Reduced dark gradient overlay');
