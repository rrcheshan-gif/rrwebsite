const fs = require('fs');
let content = fs.readFileSync('src/app/about/vision-mission/page.tsx', 'utf8');
content = content.replace('</section>n>', '</section>');
fs.writeFileSync('src/app/about/vision-mission/page.tsx', content, 'utf8');
