const fs = require('fs');
let content = fs.readFileSync('src/app/sustainability/social-responsibility/page.tsx', 'utf8');
content = content.replace(/sites(.*?|\uFFFD|—|)such/g, 'sites - such');
content = content.replace(/projects(.*?|\uFFFD|—|)we/g, 'projects - we');
fs.writeFileSync('src/app/sustainability/social-responsibility/page.tsx', content, 'utf8');
console.log('Fixed dash successfully');
