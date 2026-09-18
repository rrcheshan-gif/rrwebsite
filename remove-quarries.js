const fs = require('fs');
const file = 'src/app/components/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetStr = '<li><Link href="/facilities" onClick={() => setMobileMenuOpen(false)}>Quarries &amp; Aggregates</Link></li>';
content = content.replace(targetStr, '');

fs.writeFileSync(file, content, 'utf8');
console.log('Removed Quarries from Navbar');
