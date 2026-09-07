const fs = require('fs');
let content = fs.readFileSync('src/app/about/key-data/page.tsx', 'utf8');

// Remove CIDA Registration block completely.
// It looks like this:
/*
            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                CIDA Registration No
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                C-10171
              </p>
            </div>
*/
const cidaRegex = /\s*<div>\s*<h3[^>]*>\s*CIDA Registration No\s*<\/h3>\s*<p[^>]*>\s*C-10171\s*<\/p>\s*<\/div>/;
content = content.replace(cidaRegex, '');

// Revert Workforce to 1,400+
// It currently has 1,800+ Employees
content = content.replace('1,800+ Employees', '1,400+ Employees');

fs.writeFileSync('src/app/about/key-data/page.tsx', content, 'utf8');
console.log('Removed CIDA registration and reverted Workforce to 1400+');
