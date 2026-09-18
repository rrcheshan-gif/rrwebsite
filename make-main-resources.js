const fs = require('fs');

const facilitiesPath = 'src/app/facilities/page.tsx';
const resourcesPath = 'src/app/resources/page.tsx';

let content = fs.readFileSync(facilitiesPath, 'utf8');

// Update the page title and descriptions
content = content.replace(/export default function Facilities\(\)/g, 'export default function ResourcesPage()');
content = content.replace(/Quarries & Aggregates/g, 'Construction Resources');
content = content.replace(/Premium construction aggregates/g, 'Premium construction resources, aggregates');
// Apply the tags updates we did earlier to this page too (it might have been overwritten or we can just run the replace)
content = content.replace(/>Western Province<\/span>/g, '>Kaluthara</span>');
content = content.replace(/>North Central Province<\/span>/g, '>Medawachchiya</span>');
content = content.replace(/>Northern Province<\/span>/g, '>Vavuniya</span>'); 

fs.writeFileSync(resourcesPath, content, 'utf8');
console.log('Successfully copied facilities to resources main page');
