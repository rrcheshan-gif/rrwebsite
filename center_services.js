const fs = require('fs');
const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// The original block
const originalBlock = `<div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1.5px',  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '28px' }}>
            &larr; Home
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
            <div style={{ width: '36px', height: '2px', background: 'var(--primary-red)' }} />
            <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '3px',  fontSize: '0.82rem' }}>Engineering Capabilities</span>
          </div>

          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}>Technology & <span style={{ color: "var(--primary-red)" }}>Services</span></h1>

          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: isMobile ? '1rem' : '1.2rem', maxWidth: '640px', lineHeight: 1.75, margin: 0, fontWeight: 400 }}>
            From national highways and river bridges to fishery harbours and hill-country landslide works &mdash; RR Construction covers the full spectrum of heavy civil engineering infrastructure in Sri Lanka.
          </p>
        </div>`;

const newBlock = `<div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1.5px',  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '28px' }}>
            &larr; Home
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
            <div style={{ width: '36px', height: '2px', background: 'var(--primary-red)' }} />
            <span style={{ color: 'var(--primary-red)', fontWeight: 800, letterSpacing: '3px',  fontSize: '0.82rem' }}>Engineering Capabilities</span>
            <div style={{ width: '36px', height: '2px', background: 'var(--primary-red)' }} />
          </div>

          <h1 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)", marginBottom: '20px' }}>Technology & <span style={{ color: "var(--primary-red)" }}>Services</span></h1>

          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: isMobile ? '1rem' : '1.2rem', maxWidth: '800px', lineHeight: 1.75, margin: 0, fontWeight: 400 }}>
            From national highways and river bridges to fishery harbours and hill-country landslide works &mdash; RR Construction covers the full spectrum of heavy civil engineering infrastructure in Sri Lanka.
          </p>
        </div>`;

// First try replacing using exact text, handling unicode weirdness
// Oh actually I can use regex to target the maxWidth div and its contents

content = content.replace(/<div style=\{\{\s*maxWidth:\s*'1100px',\s*margin:\s*'0 auto'\s*\}\}>([\s\S]*?)<\/div>/, newBlock);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated services page header.');
