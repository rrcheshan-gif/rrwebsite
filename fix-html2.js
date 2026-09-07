const fs = require('fs');
let content = fs.readFileSync('src/app/about/history/page.tsx', 'utf8');

const regex = /<style dangerouslySetInnerHTML=\{\{__html: \\n[\s\S]*?\}\} \/>/;

content = content.replace(regex, '<style dangerouslySetInnerHTML={{__html: \.no-scrollbar::-webkit-scrollbar { display: none; }\}} />');

fs.writeFileSync('src/app/about/history/page.tsx', content, 'utf8');
console.log('Fixed style block properly');
