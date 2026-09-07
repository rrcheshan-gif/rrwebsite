const fs = require('fs');
// Very naive parsing of the JS file just to extract titles and years
const content = fs.readFileSync('src/app/projects/data.js', 'utf8');
const lines = content.split('\n');
const results = [];
let currentTitle = null;
let currentYear = null;
for(let line of lines) {
    const titleMatch = line.match(/title:\s*["']([^"']+)["']/);
    const yearMatch = line.match(/year:\s*(["']?)([0-9]{4})[^,]*/);
    
    if(titleMatch) currentTitle = titleMatch[1];
    if(yearMatch) currentYear = yearMatch[2];
    
    if(line.includes('}') && currentTitle) {
        if(currentYear && parseInt(currentYear) <= 2015 && !currentTitle.includes('Ongoing')) {
            results.push({title: currentTitle, year: currentYear});
        }
        currentTitle = null;
        currentYear = null;
    }
}
console.log(JSON.stringify(results, null, 2));
