const fs = require('fs');

let content = fs.readFileSync('src/app/about/history/page.tsx', 'utf8');

// The original div
const oldDiv = \<div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '30px', marginBottom: '24px' }}>\;

const newDiv = \<div className="container" style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '30px', marginBottom: '24px' }}>\;

// Replace it
content = content.replace(oldDiv, newDiv);

fs.writeFileSync('src/app/about/history/page.tsx', content, 'utf8');
