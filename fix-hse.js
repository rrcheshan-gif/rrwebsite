const fs = require('fs');

const content = fs.readFileSync('src/app/people/page.tsx', 'utf8');

const oldText = 'Geotechnical Experts, and meticulous QA/QC Specialists.';
const newText = 'Geotechnical Experts, dedicated Health & Safety Professionals, and meticulous QA/QC Specialists.';

let newContent = content.replace(oldText, newText);

fs.writeFileSync('src/app/people/page.tsx', newContent, 'utf8');
console.log('Updated HSE details successfully');
