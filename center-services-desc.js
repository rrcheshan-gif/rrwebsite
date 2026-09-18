const fs = require('fs');
const glob = require('path'); // I'll just use a simple recursive read

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

const files = walk('src/app/services');
let replacedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // The exact string to replace
  const searchStr1 = "<p style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>";
  const replaceStr1 = "<p style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6, textAlign: 'center' }}>";
  
  const searchStr2 = '<p style={{ color: "var(--text-light)", maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.6 }}>';
  const replaceStr2 = '<p style={{ color: "var(--text-light)", maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem", lineHeight: 1.6, textAlign: "center" }}>';

  content = content.replace(new RegExp(searchStr1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replaceStr1);
  content = content.replace(new RegExp(searchStr2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replaceStr2);

  // Maybe some have double quotes or slightly different spacing, so let's do a broader regex just in case
  content = content.replace(
    /<p style=\{\{\s*color:\s*['"]var\(--text-light\)['"],\s*maxWidth:\s*['"]800px['"],\s*margin:\s*['"]0 auto['"],\s*fontSize:\s*['"]1\.1rem['"],\s*lineHeight:\s*1\.6\s*\}\}>/g,
    "<p style={{ color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6, textAlign: 'center' }}>"
  );

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed alignment in: ' + file);
    replacedCount++;
  }
}
console.log('Total files updated: ' + replacedCount);
