const fs = require('fs');
const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
    `<div style={{ maxWidth: '1100px', margin: '0 auto' }}>`,
    `<div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>`
);

content = content.replace(
    `<span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '3px',  fontSize: '0.82rem' }}>Engineering Capabilities</span>`,
    `<span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '3px',  fontSize: '0.82rem' }}>Engineering Capabilities</span>\n            <div style={{ width: '36px', height: '2px', background: 'var(--primary-red)' }} />`
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed services page header carefully.');
