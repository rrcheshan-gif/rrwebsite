const fs = require('fs');
let content = fs.readFileSync('src/app/about/history/page.tsx', 'utf8');

const regex = /<style dangerouslySetInnerHTML=\{\{__html: \.no-scrollbar[\s\S]*?\} \/>/;

content = content.replace(regex, '<style dangerouslySetInnerHTML={{__html: String.fromCharCode(96) + ".no-scrollbar::-webkit-scrollbar { display: none; }" + String.fromCharCode(96)}} />');

fs.writeFileSync('src/app/about/history/page.tsx', content, 'utf8');
console.log('Fixed style block properly 3');
