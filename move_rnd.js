const fs = require('fs');

// 1. Update Navbar
let navContent = fs.readFileSync('src/app/components/Navbar.tsx', 'utf8');
navContent = navContent.replace(
    '<li><Link href="/services" onClick={() => setMobileMenuOpen(false)}>Technology & Services</Link></li>',
    '<li><Link href="/services" onClick={() => setMobileMenuOpen(false)}>Technology & Services</Link></li>\n                  <li><Link href="/services/research-development" onClick={() => setMobileMenuOpen(false)}>Research & Development</Link></li>'
);
fs.writeFileSync('src/app/components/Navbar.tsx', navContent, 'utf8');
console.log('Updated Navbar');

// 2. Remove from services/page.tsx
let servicesContent = fs.readFileSync('src/app/services/page.tsx', 'utf8');
// find the object that has slug: 'research-development' and remove it from the array
const regex = /\s*\{\s*slug:\s*'research-development'[\s\S]*?\},?/;
if (servicesContent.match(regex)) {
    servicesContent = servicesContent.replace(regex, '');
    fs.writeFileSync('src/app/services/page.tsx', servicesContent, 'utf8');
    console.log('Removed from SERVICES array.');
} else {
    console.log('Regex did not match.');
}
