const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'projects', 'data.js');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  /id:\s*'project-100',\s*type:\s*'completed',\s*category:\s*'dredging'/g,
  "id: 'project-100',\n    type: 'completed',\n    category: 'maritime'"
);

fs.writeFileSync(filePath, content);
console.log("Updated category to maritime");
