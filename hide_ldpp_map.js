const fs = require('fs');
const file = 'src/app/projects/data.js';
let content = fs.readFileSync(file, 'utf8');

const targetProject = `    id: 'project-ldpp-package-02',
      type: 'completed',`;
      
const updatedProject = `    id: 'project-ldpp-package-02',
      hideMap: true,
      type: 'completed',`;

content = content.replace(targetProject, updatedProject);

fs.writeFileSync(file, content, 'utf8');
console.log('Updated data.js');
