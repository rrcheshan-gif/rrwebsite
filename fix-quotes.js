const fs = require('fs');
let content = fs.readFileSync('src/app/about/vision-mission/page.tsx', 'utf8');

content = content.replace(/\?oTo engineer a stronger, smarter, and more sustainable Sri Lanka \?" building infrastructure that connects communities, drives progress, and stands the test of time\.\?\?/g, 
  '"To engineer a stronger, smarter, and more sustainable Sri Lanka - building infrastructure that connects communities, drives progress, and stands the test of time."');

content = content.replace(/\?oTo deliver world-class construction and civil engineering solutions through engineering excellence, advanced technology, responsible resource management, uncompromising quality, and a relentless commitment to safety, sustainability, and client satisfaction\.\?\?/g,
  '"To deliver world-class construction and civil engineering solutions through engineering excellence, advanced technology, responsible resource management, uncompromising quality, and a relentless commitment to safety, sustainability, and client satisfaction."');

content = content.replace(/\?oWe don't simply build projects\. We build the infrastructure that shapes Sri Lanka's future\.\?\?/g,
  '"We do not simply build projects. We build the infrastructure that shapes Sri Lanka\\'s future."'.replace('do not', 'don\\'t'));

fs.writeFileSync('src/app/about/vision-mission/page.tsx', content, 'utf8');
console.log('Fixed exactly.');
