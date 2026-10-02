const fs = require('fs');
const path = 'src/app/career/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Use non-greedy regex matching exactly the card structure but allowing whitespace variations
const pmCardRegex = /<div className="career-job-card">[\s\S]*?<h4[^>]*>Project Manager \(Civil\)<\/h4>[\s\S]*?<\/div>\s*<\/div>/;
const seCardRegex = /<div className="career-job-card">[\s\S]*?<h4[^>]*>Site Engineer<\/h4>[\s\S]*?<\/div>\s*<\/div>/;

content = content.replace(pmCardRegex, '');
content = content.replace(seCardRegex, '');

// Remove Project Manager option
content = content.replace(
    /\s*<option value="Project Manager">Project Manager \(Civil\)<\/option>/,
    ''
);

// Remove Site Engineer option
content = content.replace(
    /\s*<option value="Site Engineer">Site Engineer<\/option>/,
    ''
);

fs.writeFileSync(path, content, 'utf8');
console.log('Vacancies removed securely.');
