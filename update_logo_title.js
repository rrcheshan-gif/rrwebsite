const fs = require('fs');
let content = fs.readFileSync('src/app/globals.css', 'utf8');

// Change the base logo-title color to red
content = content.replace(
    /\.logo-title \{\s*font-family: 'Times New Roman', Times, serif !important;\s*font-weight: 700;\s*font-size: 1\.4rem;\s*line-height: 1\.1;\s*color: var\(--text-dark\);/,
    `.logo-title {\n    font-family: 'Times New Roman', Times, serif !important;\n    font-weight: 700;\n    font-size: 1.4rem;\n    line-height: 1.1;\n    color: #FF2020;`
);

// Also update the navbar-wrapper .logo-title (the scrolled/default nav case which is white)
// We keep it white on home hero (transparent nav) but make it red on scrolled navbar

fs.writeFileSync('src/app/globals.css', content, 'utf8');
console.log("Done.");
