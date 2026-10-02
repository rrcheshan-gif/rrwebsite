const fs = require('fs');

const path = 'src/app/contact/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// The Machine Yard block
const machineYardRegex = /<div style={{ background: "var\(--white\)", padding: "40px"[^>]*>[\s\S]*?Machine Yard[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

// Wait, let's extract exactly the blocks by searching for their distinct content.
// Since the HTML structure is somewhat complex, let's just find the start and end of these two cards.
