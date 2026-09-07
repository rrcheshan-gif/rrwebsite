const fs = require('fs');
let content = fs.readFileSync('src/app/projects/[id]/page.tsx', 'utf8');

// The replacement done in generateMetadata was correct, let's also do it in the main component.
content = content.replace(/let timePhrase = project.year \? The project operations are anchored around the year \$\{project.year\} : The project was systematically undertaken;/g, 
  "let timePhrase = (project.year && project.type !== 'ongoing') ? The project operations are anchored around the year \$\{project.year\} : The project was systematically undertaken;");

content = content.replace(/let durationPhrase = project.duration \?  and executed across an intensive \$\{project.duration\} timeframe : `;/g,
  "let durationPhrase = (project.duration && project.type !== 'ongoing') ?  and executed across an intensive \$\{project.duration\} timeframe : `;");

// Hide the Duration block in UI for ongoing projects
content = content.replace(
  /<div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var\(--border-soft\)' }}>\s*<h4 style={{ color: 'var\(--text-light\)', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '5px', letterSpacing: '1px' }}>Duration<\/h4>\s*<p style={{ color: 'var\(--text-dark\)', fontSize: '1.1rem', fontWeight: 'bold' }}>\{project.duration\}<\/p>\s*<\/div>/,
  "{project.type !== 'ongoing' && (\n                  <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--border-soft)' }}>\n                    <h4 style={{ color: 'var(--text-light)', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '5px', letterSpacing: '1px' }}>Duration</h4>\n                    <p style={{ color: 'var(--text-dark)', fontSize: '1.1rem', fontWeight: 'bold' }}>{project.duration}</p>\n                  </div>\n                )}"
);

fs.writeFileSync('src/app/projects/[id]/page.tsx', content, 'utf8');
console.log('Fixed time phrases in project details page.');
