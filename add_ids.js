const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src/app/projects/data.js');
let dataContent = fs.readFileSync(dataPath, 'utf-8');

// Replace "const projectsData = [" with "const projectsData = [\n" to be safe
// We will manually add an ID by replacing "{\n    type" with "{\n    id: 'proj-' + Math.random().toString(36).substr(2, 9),\n    type"

let counter = 1;
dataContent = dataContent.replace(/\{\s*type:/g, () => {
  return `{\n    id: 'project-${counter++}',\n    type:`;
});

fs.writeFileSync(dataPath, dataContent);
console.log("Added IDs to data.js");
