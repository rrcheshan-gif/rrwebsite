const fs = require('fs');
let content = fs.readFileSync('src/app/about/vision-mission/page.tsx', 'utf8');

content = content.replace(
    /To deliver complex infrastructure and heavy civil engineering projects with excellence[\s\S]*?client satisfaction\.\s*<\/p>/,
    'To consistently deliver reliable, cost-effective construction solutions with unwavering quality, integrity and environmental consciousness, fostering long-term partnerships with our clients and stakeholders.\n                </p>'
);

fs.writeFileSync('src/app/about/vision-mission/page.tsx', content, 'utf8');
console.log("Mission updated.");
