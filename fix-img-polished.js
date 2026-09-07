const fs = require('fs');
let content = fs.readFileSync('src/app/globals.css', 'utf8');

content = content.replace(
  ".img-polished {\n    filter: contrast(105%) saturate(110%);\n}",
  ".img-polished {\n    /* Removed filters to preserve raw image detail and quality */\n    filter: none;\n}"
);

content = content.replace(
  ".img-hover-zoom {\n    transition: transform 0.8s cubic-bezier(0.2, 1, 0.3, 1), filter 0.8s ease;\n}",
  ".img-hover-zoom {\n    transition: transform 0.8s cubic-bezier(0.2, 1, 0.3, 1);\n}"
);

content = content.replace(
  ".img-hover-zoom:hover {\n    transform: scale(1.08);\n    filter: contrast(110%) saturate(115%) brightness(95%);\n}",
  ".img-hover-zoom:hover {\n    transform: scale(1.05);\n    /* Removed filter to preserve image detail */\n}"
);

fs.writeFileSync('src/app/globals.css', content, 'utf8');
console.log('globals.css updated');
