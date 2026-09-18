const fs = require('fs');

const mainProjectsPage = fs.readFileSync('src/app/projects/page.tsx', 'utf8');

let newPage = mainProjectsPage;

// Remove useState
newPage = newPage.replace("const [filter, setFilter] = useState('all');", "");

// Force filteredProjects to only overseas
newPage = newPage.replace(/const filteredProjects = [^;]+;/, "const filteredProjects = sortedProjects.filter((p: any) => p.category === 'overseas');");

// Remove filter tabs block
newPage = newPage.replace(/\{\/\* Filter Tabs \*\/\}(.|\n)*?\{\/\* Projects Grid \*\/\}/g, "{/* Projects Grid */}");

// Remove milestone logic completely to simplify
newPage = newPage.replace(/const milestoneIds =(.|\n)*?const regularProjects = [^;]+;/g, "");

// Replace grid rendering logic
newPage = newPage.replace(/\{filter === 'all'(.|\n)*?\n\s*\}/g, "");
newPage = newPage.replace(/\{\(filter === 'all' \? regularProjects : filteredProjects\)\.map\(renderProjectCard\)\}/g, "{filteredProjects.map(renderProjectCard)}");

// Update Titles
newPage = newPage.replace(
  'Our <span style={{ color: \'var(--primary-red)\' }}>Projects</span>',
  'Overseas <span style={{ color: \'var(--primary-red)\' }}>Projects</span>'
);
newPage = newPage.replace(
  'Discover RR Construction’s extensive portfolio of completed heavy civil engineering projects across Sri Lanka.',
  'Discover RR Construction’s specialized portfolio of overseas maritime and coastal protection projects in the Maldives.'
);

fs.writeFileSync('src/app/projects/overseas/page.tsx', newPage, 'utf8');
console.log('Fixed overseas page');
