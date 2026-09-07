const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('page.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src/app');

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (h1Match) {
    // Strip nested tags to just get text if possible, or just print it
    const innerHTML = h1Match[1].trim();
    console.log(f, '=>', innerHTML.replace(/\s+/g, ' '));
  }
});
