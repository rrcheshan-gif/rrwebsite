const fs = require('fs');
let c = fs.readFileSync('src/app/projects/data.js', 'utf8');

c = c.replace(
  `  {
    {
    id: 'project-30',`,
  `  {
    id: 'project-30',`
);

fs.writeFileSync('src/app/projects/data.js', c, 'utf8');
console.log("Syntax fixed");
