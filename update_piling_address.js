const fs = require('fs');
let content = fs.readFileSync('src/app/contact/page.tsx', 'utf8');

content = content.replace(
    /\(Address to be updated\)/g,
    'No. 301,<br/>Samurdhi Mw,<br/>Heiyanthuduwa.'
);

fs.writeFileSync('src/app/contact/page.tsx', content, 'utf8');
console.log("Updated Piling Yard address successfully.");
