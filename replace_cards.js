const fs = require('fs');

const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/'\/images\/service-bridge-mahanama\.jpeg'/g, "'/images/service-bridge-card.jpeg'");
content = content.replace(/'\/images\/service-maritime-wellamankara\.jpg'/g, "'/images/service-maritime-card.jpg'");

fs.writeFileSync(file, content, 'utf8');
