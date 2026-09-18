const fs = require('fs');

function fixGrid(file) {
  let content = fs.readFileSync(file, 'utf8');
  const oldGrid = 'gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))"';
  // 400px ensures max 3 columns on ultra wide, usually 2 columns on normal desktop, eliminating tiny columns
  const newGrid = 'gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))"';
  
  if (content.includes(oldGrid)) {
    content = content.replace(oldGrid, newGrid);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed grid in ' + file);
  }
}

fixGrid('src/app/people/page.tsx');
fixGrid('src/app/training/page.tsx');

// Let's also check if there are others globally
const glob = require('child_process').execSync('find src/app -name "page.tsx"').toString().split('\n').filter(Boolean);
for (const file of glob) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    // Replace 280px or 320px auto-fit grids that cause justification rivers
    if (content.includes('gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))"')) {
      content = content.replace(/gridTemplateColumns: "repeat\(auto-fit, minmax\(min\(100%, 280px\), 1fr\)\)"/g, 'gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))"');
      modified = true;
    }
    if (content.includes('gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))"')) {
      content = content.replace(/gridTemplateColumns: "repeat\(auto-fit, minmax\(320px, 1fr\)\)"/g, 'gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))"');
      modified = true;
    }
    if (content.includes('gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"')) {
      content = content.replace(/gridTemplateColumns: "repeat\(auto-fit, minmax\(300px, 1fr\)\)"/g, 'gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))"');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log('Swept grid in ' + file);
    }
  } catch (e) {
    // Ignore
  }
}
