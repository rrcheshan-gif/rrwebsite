const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /<div style=\{\{\s*width:\s*"2px",\s*height:\s*"40px",\s*backgroundColor:\s*"rgba\(211,\s*47,\s*47,\s*0\.2\)"\s*\}\}><\/div>\s*<div style=\{\{\s*display:\s*"flex",\s*alignItems:\s*"center",\s*gap:\s*"15px"\s*\}\}>\s*<div style=\{\{\s*fontSize:\s*"2\.5rem",\s*fontWeight:\s*800,\s*fontFamily:\s*"var\(--font-heading\)",\s*lineHeight:\s*1,\s*color:\s*"var\(--primary-red\)"\s*\}\}>\{COMPANY_DATA\.completedProjects\}<\/div>\s*<div style=\{\{\s*textAlign:\s*"left"\s*\}\}>\s*<h4 style=\{\{\s*margin:\s*0,\s*fontSize:\s*"0\.9rem",\s*fontFamily:\s*"var\(--font-heading\)",\s*textTransform:\s*"uppercase",\s*letterSpacing:\s*"1px",\s*color:\s*"var\(--primary-red\)",\s*fontWeight:\s*800\s*\}\}>Completed<\/h4>\s*<p style=\{\{\s*color:\s*"var\(--text-dark\)",\s*margin:\s*0,\s*fontSize:\s*"0\.9rem",\s*fontWeight:\s*700,\s*textTransform:\s*"uppercase"\s*\}\}>Projects<\/p>\s*<\/div>\s*<\/div>/g;

content = content.replace(regex, '');

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Removed second stat using regex');
