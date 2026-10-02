const fs = require('fs');
let content = fs.readFileSync('src/app/contact/page.tsx', 'utf8');
const formStart = 17577;
const formEnd = 21707;
console.log(content.substring(formStart - 100, formEnd + 100));
