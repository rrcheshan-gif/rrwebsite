const fs = require('fs');
const file = 'src/app/projects/ongoing/[category]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "import { projectsData } from '@/app/projects/data';",
  "import projectsData from '@/app/projects/data';"
);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed import');
