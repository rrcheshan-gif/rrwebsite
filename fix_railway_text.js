const fs = require('fs');

let content = fs.readFileSync('src/app/services/railway-civil-works/page.tsx', 'utf8');

// Fix the bad apostrophe replacements that should have been em-dashes or commas
content = content.replace(/upgradation'including/g, "upgradation—including");
content = content.replace(/techniques'such/g, "techniques—such");
content = content.replace(/structures'to/g, "structures—to");

fs.writeFileSync('src/app/services/railway-civil-works/page.tsx', content, 'utf8');
console.log("Fixed railway civil works text issues.");
