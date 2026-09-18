const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the hero section opening tag
content = content.replace(
  /<section className="hero-fullscreen" style=\{\{ position: 'relative', height: '100vh', minHeight: '600px', overflow: 'hidden' \}\}>/,
  `<section className="hero-contained" style={{ padding: '20px', paddingTop: '100px', backgroundColor: 'var(--bg-light)', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '1440px', height: 'clamp(500px, 75vh, 800px)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>`
);

// We need to add the closing </div> for the new container right before the closing </section> of the hero.
// I'll just find the first </section> after hero-fullscreen
const closingSectionIndex = content.indexOf('</section>');
content = content.substring(0, closingSectionIndex) + '</div>\n      </section>' + content.substring(closingSectionIndex + 10);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated hero to be contained');
