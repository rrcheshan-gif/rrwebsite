const fs = require('fs');

let content = fs.readFileSync('src/app/about/history/page.tsx', 'utf8');

content = content.replace(
  '<style dangerouslySetInnerHTML={{__html: \n            .no-scrollbar::-webkit-scrollbar {\n              display: none;\n            }\n          }} />',
  '<style dangerouslySetInnerHTML={{__html: \.no-scrollbar::-webkit-scrollbar { display: none; }\}} />'
);

fs.writeFileSync('src/app/about/history/page.tsx', content, 'utf8');
console.log('Fixed html style block');
