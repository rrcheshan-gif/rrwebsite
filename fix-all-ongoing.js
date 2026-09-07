const fs = require('fs');
let content = fs.readFileSync('src/app/projects/data.js', 'utf8');

// Split by block
let blocks = content.split(/  \{\s*id:/);
for (let i = 1; i < blocks.length; i++) {
  // Restore the split part
  let block = "  {\n    id:" + blocks[i];
  
  if (block.includes("type: 'ongoing'")) {
    let categoryMatch = block.match(/category:\s*"([^"]+)"/);
    let cat = categoryMatch ? categoryMatch[1] : 'other';
    
    let newTitle = "Ongoing Construction Project";
    if (cat === 'roads') newTitle = 'Ongoing Road Construction Project';
    else if (cat === 'bridges') newTitle = 'Ongoing Bridge Construction Project';
    else if (cat === 'disaster') newTitle = 'Ongoing Landslide Mitigation Project';
    else if (cat === 'maritime') newTitle = 'Ongoing Maritime & Dredging Project';
    else if (cat === 'irrigation') newTitle = 'Ongoing Irrigation & Water Supply Project';
    else if (cat === 'buildings') newTitle = 'Ongoing Building Construction Project';
    else if (cat === 'railway') newTitle = 'Ongoing Railway Civil Works Project';
    
    // Replace title (global, just in case)
    block = block.replace(/title:\s*"[^"]*",?/g, 'title: "' + newTitle + '",');
    
    // Replace client
    block = block.replace(/client:\s*"[^"]*",?/g, 'client: "Confidential",');
    
    // Replace duration
    block = block.replace(/duration:\s*"[^"]*",?/g, 'duration: "Ongoing",');
    
    // Remove lines with description or mapQuery
    let lines = block.split('\n');
    lines = lines.filter(line => !line.includes('description:') && !line.includes('mapQuery:'));
    
    // Check if duplicate type: 'ongoing' exists and remove the extra lines if it's a mess, but usually standard replacement is fine
    // Let's fix that weird duplication in project-9 and project-18
    let cleanedLines = [];
    let seenTypes = 0;
    let seenCategories = 0;
    let seenTitles = 0;
    let seenClients = 0;
    for (let l of lines) {
        if (l.includes("type: 'ongoing'")) {
            seenTypes++;
            if (seenTypes > 1) continue;
        }
        if (l.includes("category:")) {
            seenCategories++;
            if (seenCategories > 1) continue;
        }
        if (l.includes("title:")) {
            seenTitles++;
            if (seenTitles > 1) continue;
        }
        if (l.includes("client:")) {
            seenClients++;
            if (seenClients > 1) continue;
        }
        cleanedLines.push(l);
    }
    block = cleanedLines.join('\n');
    blocks[i] = block.substring(7); // remove "  {\n    id:" from the start because we join with it later
  }
}

let newContent = blocks[0] + "  {\n    id:" + blocks.slice(1).join("  {\n    id:");
fs.writeFileSync('src/app/projects/data.js', newContent, 'utf8');
console.log("Transformation complete.");
