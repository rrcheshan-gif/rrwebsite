const fs = require('fs');
const file = 'src/app/resources/concrete/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace('district: "Eastern Province"', 'district: "Ampara"');
content = content.replace('district: "Northern Province"', 'district: "Jaffna"');
content = content.replace('district: "Uva Province"', 'district: "Monaragala"');
content = content.replace('district: "Western Province"', 'district: "Kalutara"');
content = content.replace('district: "Mullaitivu District"', 'district: "Mullaitivu"');
content = content.replace('district: "North Western Province"', 'district: "Kurunegala"');
content = content.replace('district: "Matara District"', 'district: "Matara"');

fs.writeFileSync(file, content, 'utf8');
console.log('Updated Concrete page districts');
