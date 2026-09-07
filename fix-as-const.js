const fs = require('fs');

let content = fs.readFileSync('src/app/services/landslide-mitigation/page.tsx', 'utf8');
content = content.replace(/fontSize:\s*'14px',\s*as const,/g, "fontSize: '14px',");
fs.writeFileSync('src/app/services/landslide-mitigation/page.tsx', content, 'utf8');
console.log('Fixed floating as const');
