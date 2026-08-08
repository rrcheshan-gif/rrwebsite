const fs = require('fs');

function updateFile(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // For quarries-aggregates Quote buttons:
    const regexQuote = /<a href="#inquiry" style=\{\{\s*display:\s*"block",\s*flex:\s*1,\s*textAlign:\s*"center",\s*padding:\s*"10px 0",\s*background:\s*"var\(--primary-red\)",\s*color:\s*"white",\s*fontWeight:\s*"bold",\s*borderRadius:\s*"6px",\s*textDecoration:\s*"none"\s*\}\}>Quote<\/a>/g;
    content = content.replace(regexQuote, '<a href="#inquiry" className="btn-glass-red btn-glass-sm" style={{ flex: 1, display: "block", textDecoration: "none" }}>Quote</a>');
    
    // For people/page.tsx View Vacancies:
    content = content.replace(/borderRadius:\s*"6px"/g, 'borderRadius: "30px"');
    content = content.replace(/borderRadius:\s*'6px'/g, 'borderRadius: "30px"');

    fs.writeFileSync(file, content, 'utf8');
}

updateFile('src/app/quarries-aggregates/page.tsx');
updateFile('src/app/people/page.tsx');
updateFile('src/app/projects/page.tsx');
updateFile('src/app/ongoing/page.tsx');
updateFile('src/app/projects/[id]/page.tsx');

console.log("Updated button border radii to 30px.");
