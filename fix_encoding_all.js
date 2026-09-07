const fs = require('fs');

function fixFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the specific unicode replacement sequence with an em-dash
    content = content.replace(/\uFFFD\?"/g, '-');
    // Replace the other unicode replacement with a bullet or dash
    content = content.replace(/\uFFFD\?\uFFFD/g, '•');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed encoding in ${filePath}`);
}

fixFile('src/app/page.tsx');
fixFile('src/app/services/page.tsx');
fixFile('src/app/about/company-overview/page.tsx');
