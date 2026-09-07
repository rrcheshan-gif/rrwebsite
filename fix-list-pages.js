const fs = require('fs');

// Fix ongoing projects page
let ongoing = fs.readFileSync('src/app/projects/ongoing/page.tsx', 'utf8');
ongoing = ongoing.replace(/\{project.duration && <span style={{ fontSize: '0.85rem', color: '#666' }}><strong>Duration:<\/strong> \{project.duration\}<\/span>\}/g, 
"{/* Duration hidden for ongoing projects as requested */}");
fs.writeFileSync('src/app/projects/ongoing/page.tsx', ongoing, 'utf8');

// Fix main projects page
let main = fs.readFileSync('src/app/projects/page.tsx', 'utf8');
main = main.replace(/\{project.duration && <span style={{ fontSize: '0.85rem', color: '#666' }}><strong>Duration:<\/strong> \{project.duration\}<\/span>\}/g, 
"{project.type !== 'ongoing' && project.duration && <span style={{ fontSize: '0.85rem', color: '#666' }}><strong>Duration:</strong> {project.duration}</span>}");
fs.writeFileSync('src/app/projects/page.tsx', main, 'utf8');

console.log('Fixed list pages.');
