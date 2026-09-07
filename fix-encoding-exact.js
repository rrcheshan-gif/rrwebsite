const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');
page = page.replace(/moving forward[^\w]+built to last/, 'moving forward — built to last');
fs.writeFileSync('src/app/page.tsx', page, 'utf8');

let company = fs.readFileSync('src/data/company-data.ts', 'utf8');
company = company.replace(/General Manager[^\w]+Contracts/, 'General Manager - Contracts');
company = company.replace(/General Manager[^\w]+Operations/, 'General Manager - Operations');
fs.writeFileSync('src/data/company-data.ts', company, 'utf8');

console.log("Fixed.");
