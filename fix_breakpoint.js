const fs = require('fs');

// 1. Update globals.css
let fileCss = 'src/app/globals.css';
let contentCss = fs.readFileSync(fileCss, 'utf8');

// Change breakpoints from 1024px to 1280px
contentCss = contentCss.replace(/max-width:\s*1024px/g, 'max-width: 1280px');
contentCss = contentCss.replace(/min-width:\s*1025px/g, 'min-width: 1281px');

// Reduce gap slightly on desktop to give more room
contentCss = contentCss.replace(
    /gap: clamp\(10px, 1\.5vw, 25px\);/,
    'gap: clamp(8px, 1vw, 18px);'
);

fs.writeFileSync(fileCss, contentCss, 'utf8');

// 2. Update Navbar.tsx
let fileNav = 'src/app/components/Navbar.tsx';
let contentNav = fs.readFileSync(fileNav, 'utf8');
contentNav = contentNav.replace(/window\.innerWidth <= 1024/g, 'window.innerWidth <= 1280');
fs.writeFileSync(fileNav, contentNav, 'utf8');
