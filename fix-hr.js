const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// The horizontal rule accent is:
// <div style={{ width: 'clamp(50px, 8vw, 70px)', height: '3px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px', marginBottom: 'clamp(14px, 2.5vh, 22px)' }}></div>
content = content.replace(
  /<div style=\{\{ width: 'clamp\(50px, 8vw, 70px\)', height: '3px', background: 'rgba\(255,255,255,0\.3\)', borderRadius: '2px', marginBottom: 'clamp\(14px, 2\.5vh, 22px\)' \}\}/,
  "<div style={{ width: 'clamp(50px, 8vw, 70px)', height: '3px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px', marginBottom: 'clamp(14px, 2.5vh, 22px)', marginLeft: 'auto', marginRight: 'auto' }}"
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Centered horizontal rule');
