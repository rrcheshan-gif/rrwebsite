const fs = require('fs');

const mainProjectsPage = fs.readFileSync('src/app/projects/page.tsx', 'utf8');

// We need to modify it to only show overseas projects and remove the filter tabs.
let newPage = mainProjectsPage
  .replace("const [filter, setFilter] = useState('all');", "")
  .replace(/const filteredProjects = [^;]+;/, "const filteredProjects = sortedProjects.filter((p: any) => p.category === 'overseas');")
  .replace(/<div style=\{\{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '50px' \}\}>[\s\S]*?<\/div>/, "")
  .replace(/<h1>[\s\S]*?<\/h1>/, `<h1 style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 900, 
              color: 'var(--text-dark)', 
              marginBottom: '20px',
              lineHeight: 1.1,
              letterSpacing: '-1px'
            }}>
              Overseas <span style={{ color: 'var(--primary-red)' }}>Projects</span>
            </h1>`);

// In case the h1 replace didn't work properly:
newPage = newPage.replace(
  'Our <span style={{ color: \'var(--primary-red)\' }}>Projects</span>',
  'Overseas <span style={{ color: \'var(--primary-red)\' }}>Projects</span>'
);
newPage = newPage.replace(
  'Discover RR Construction’s extensive portfolio of completed heavy civil engineering projects across Sri Lanka.',
  'Discover RR Construction’s specialized portfolio of overseas maritime and coastal protection projects in the Maldives.'
);

fs.writeFileSync('src/app/projects/overseas/page.tsx', newPage, 'utf8');
console.log('Created overseas page');
