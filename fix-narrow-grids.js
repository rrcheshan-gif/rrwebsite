const fs = require('fs');
const glob = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('page.tsx')) results.push(file);
        }
    });
    return results;
}

const files = walk('src/app');
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace anything below 320px with at least 320px, and 280px to 320px
  // Actually, anything below 350px is dangerous for justify. Let's make the minimum 340px.
  content = content.replace(/minmax\(min\(100%,\s*280px\),\s*1fr\)/g, "minmax(min(100%, 340px), 1fr)");
  content = content.replace(/minmax\(min\(100%,\s*300px\),\s*1fr\)/g, "minmax(min(100%, 340px), 1fr)");
  content = content.replace(/minmax\(min\(100%,\s*320px\),\s*1fr\)/g, "minmax(min(100%, 340px), 1fr)");
  
  content = content.replace(/minmax\(280px,\s*1fr\)/g, "minmax(340px, 1fr)");
  content = content.replace(/minmax\(300px,\s*1fr\)/g, "minmax(340px, 1fr)");
  content = content.replace(/minmax\(320px,\s*1fr\)/g, "minmax(340px, 1fr)");

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed narrow grids in: ' + file);
  }
}
