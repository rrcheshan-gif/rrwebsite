const fs = require('fs');
let content = fs.readFileSync('src/data/company-data.ts', 'utf8');

const oldLine = '{ name: "Mr. Ranjith Senadheera S.D.", role: "Managing Director", qual: "B.Sc. Engineering (Hons), M.Eng. (IEM)", image: "/images/director.jpg" }';
const newLine = '{ name: "Mr. Ranjith Senadheera S.D.", role: "Managing Director", qual: "B.Sc. Engineering (Hons), M.Eng. (IEM)", image: "/images/director.jpg", bio: "Mr. Ranjith Senadheera brings decades of visionary leadership and extensive engineering expertise to RR Construction. Under his strategic guidance, the company has grown into a leading force in Sri Lanka\'s civil engineering sector, successfully delivering complex infrastructure, maritime, and highway projects. His unwavering commitment to quality, technological innovation, and sustainable development continues to drive the organization toward new horizons." }';

content = content.replace(oldLine, newLine);
fs.writeFileSync('src/data/company-data.ts', content, 'utf8');
console.log('Updated MD data.');
