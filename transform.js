const fs = require('fs');

let content = fs.readFileSync('src/app/projects/data.js', 'utf8');

let newContent = content.replace(/\{\s*id:\s*'[^']+',\s*type:\s*'ongoing',\s*category:\s*"([^"]+)",\s*title:\s*"[^"]+",\s*client:\s*"([^"]+)",\s*duration:\s*"([^"]+)",\s*year:\s*(\d+),\s*status:\s*"Ongoing"(?:,\s*description:\s*"[^"]*")?(?:,\s*mapQuery:\s*"[^"]*")?/g, function(match, cat) {
    let newTitle = "Ongoing Construction Project";
    if (cat === 'roads') newTitle = 'Ongoing Road Construction Project';
    else if (cat === 'bridges') newTitle = 'Ongoing Bridge Construction Project';
    else if (cat === 'disaster') newTitle = 'Ongoing Landslide Mitigation Project';
    else if (cat === 'maritime') newTitle = 'Ongoing Maritime & Dredging Project';
    else if (cat === 'irrigation') newTitle = 'Ongoing Irrigation & Water Supply Project';
    else if (cat === 'buildings') newTitle = 'Ongoing Building Construction Project';

    // We keep everything up to category
    let startMatch = match.match(/\{\s*id:\s*'[^']+',\s*type:\s*'ongoing',\s*category:\s*"[^"]+",/)[0];
    
    return startMatch + '\n    title: "' + newTitle + '",\n    client: "Confidential",\n    duration: "Ongoing",\n    year: 2025,\n    status: "Ongoing"';
});

fs.writeFileSync('src/app/projects/data.js', newContent, 'utf8');
console.log("Transformation complete.");
