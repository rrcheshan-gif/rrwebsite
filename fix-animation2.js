const fs = require('fs');
let content = fs.readFileSync('src/app/globals.css', 'utf8');

if (!content.includes('@keyframes fadeInUp')) {
    const keyframes = '\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n';
    content += keyframes;
    fs.writeFileSync('src/app/globals.css', content, 'utf8');
    console.log('Added fadeInUp to globals.css');
}
