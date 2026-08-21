const fs = require('fs');

function fixFile(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Targeted replacements instead of reckless regex
    content = content.replace(/moving forward \?" built to last/g, 'moving forward — built to last');
    content = content.replace(/General Manager \?" Contracts/g, 'General Manager - Contracts');
    content = content.replace(/General Manager \?" Operations/g, 'General Manager - Operations');
    content = content.replace(/General Manager \?" Contracts/g, 'General Manager - Contracts');
    content = content.replace(/General Manager \?" Operations/g, 'General Manager - Operations');
    content = content.replace(/moving forward \?" built to last/g, 'moving forward — built to last');
    // For weird replacement characters
    content = content.replace(/\?"/g, '—');

    fs.writeFileSync(file, content, 'utf8');
}

fixFile('src/app/page.tsx');
fixFile('src/data/company-data.ts');
console.log("Encoding fixed safely.");
