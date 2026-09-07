const fs = require('fs');
let content = fs.readFileSync('src/app/projects/ongoing/page.tsx', 'utf8');

content = content.replace(
  "<div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>",
  "<div style={{ minHeight: '70vh', background: '#f8fafc' }}>"
);

content = content.replace(
  "<section style={{ padding: '80px 20px 100px', textAlign: 'center', width: '100%' }}>",
  "<section style={{ padding: '180px 20px 100px', textAlign: 'center', width: '100%' }}>"
);

fs.writeFileSync('src/app/projects/ongoing/page.tsx', content, 'utf8');
console.log('Fixed padding');
