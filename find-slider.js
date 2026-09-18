const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldSection = `      {/* FULLSCREEN HERO SECTION */}
      <section className="hero-contained" style={{ padding: '0', paddingTop: '130px', paddingBottom: '80px', backgroundColor: 'var(--bg-light)', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: '92%', maxWidth: '1440px', height: 'clamp(550px, 70vh, 750px)', borderRadius: 'clamp(24px, 5vw, 48px)', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', transform: 'translateZ(0)', isolation: 'isolate', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}>`;

if (content.includes(oldSection)) {
  console.log('FOUND the old section');
} else {
  console.log('NOT FOUND');
  // Try to find nearest match
  const idx = content.indexOf('FULLSCREEN HERO SECTION');
  console.log('FULLSCREEN HERO at index:', idx);
  const nearby = content.substring(idx - 10, idx + 300);
  console.log('Nearby text:', JSON.stringify(nearby));
}
