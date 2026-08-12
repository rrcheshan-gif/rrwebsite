const fs = require('fs');

let fileCss = 'src/app/globals.css';
let contentCss = fs.readFileSync(fileCss, 'utf8');

// 1. Remove the hardcoded gap: 60px from .navbar which causes overflow
contentCss = contentCss.replace(
    /\.navbar\s*\{\s*display:\s*flex;\s*justify-content:\s*space-between;\s*align-items:\s*center;\s*width:\s*100%;\s*gap:\s*60px;\s*\}/,
    '.navbar {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      width: 100%;\n      gap: clamp(20px, 3vw, 50px);\n    }'
);

// 2. Increase mobile breakpoint from 1280px to 1366px to completely avoid laptop crowding
contentCss = contentCss.replace(/1280px/g, '1366px');
contentCss = contentCss.replace(/1281px/g, '1367px');

fs.writeFileSync(fileCss, contentCss, 'utf8');

let fileNav = 'src/app/components/Navbar.tsx';
let contentNav = fs.readFileSync(fileNav, 'utf8');
contentNav = contentNav.replace(/1280/g, '1366');
fs.writeFileSync(fileNav, contentNav, 'utf8');
