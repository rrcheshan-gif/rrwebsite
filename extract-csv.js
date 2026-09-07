const fs = require('fs');

const content = fs.readFileSync('src/app/projects/data.js', 'utf8');

let projects = [];
const blocks = content.split('{');
let isFirst = true;

for (const block of blocks) {
    if(isFirst) { isFirst = false; continue; }
    
    const typeMatch = block.match(/type:\s*['"]([^'"]+)['"]/);
    const titleMatch = block.match(/title:\s*['"]([^'"]+)['"]/);
    const clientMatch = block.match(/client:\s*['"]([^'"]+)['"]/);
    const yearMatch = block.match(/year:\s*['"]?([0-9]{4})['"]?/);
    const idMatch = block.match(/id:\s*['"]([^'"]+)['"]/);
    
    if (typeMatch && typeMatch[1] === 'completed' && titleMatch) {
        // avoid duplicates
        let id = idMatch ? idMatch[1] : '';
        if(!projects.find(p => p.id === id)) {
            projects.push({
                id: id,
                title: titleMatch[1],
                client: clientMatch ? clientMatch[1] : '',
                year: yearMatch ? yearMatch[1] : ''
            });
        }
    }
}

let csv = 'Project ID,Title,Client,Year,Contract Value (Rs.)\n';
projects.forEach(p => {
    let title = p.title.replace(/"/g, '""');
    let client = p.client.replace(/"/g, '""');
    csv += p.id + ',"' + title + '","' + client + '",' + p.year + ',\n';
});

fs.writeFileSync('C:/Users/hesha/.gemini/antigravity/brain/9fc826a5-7a53-46d9-a5da-0f16317973aa/RR_Completed_Projects.csv', csv, 'utf8');
console.log('Total completed extracted: ' + projects.length);
