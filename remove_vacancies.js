const fs = require('fs');

const path = 'src/app/career/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Remove Project Manager card
content = content.replace(
    /<div className="career-job-card">\s*<div className="career-job-header">\s*<h4[^>]*>Project Manager \(Civil\)<\/h4>[\s\S]*?<\/div>[\s\S]*?<\/div>\s*<\/div>/,
    ''
);

// Remove Site Engineer card
content = content.replace(
    /<div className="career-job-card">\s*<div className="career-job-header">\s*<h4[^>]*>Site Engineer<\/h4>[\s\S]*?<\/div>[\s\S]*?<\/div>\s*<\/div>/,
    ''
);

// Remove Project Manager option
content = content.replace(
    /<option value="Project Manager">Project Manager \(Civil\)<\/option>\s*/,
    ''
);

// Remove Site Engineer option
content = content.replace(
    /<option value="Site Engineer">Site Engineer<\/option>\s*/,
    ''
);

fs.writeFileSync(path, content, 'utf8');
console.log('Vacancies removed successfully.');
