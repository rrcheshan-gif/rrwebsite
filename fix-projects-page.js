const fs = require('fs');

const content = fs.readFileSync('src/app/projects/page.tsx', 'utf8');

// 1. Define the arrays
let newLogic = \
  const milestoneIds = ['project-47', 'project-32', 'project-86'];
  const milestoneProjects = filteredProjects.filter((p: any) => milestoneIds.includes(p.id)).sort((a: any, b: any) => milestoneIds.indexOf(a.id) - milestoneIds.indexOf(b.id));
  const regularProjects = filteredProjects.filter((p: any) => !milestoneIds.includes(p.id));

  const renderProjectCard = (project: any) => (
\;

// 2. Find the card JSX block
const startTag = '{filteredProjects.map((project: any) => (';
const endTag = '          </div>'; // End of Projects Grid
const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag, startIndex);

const cardJsxRaw = content.substring(startIndex + startTag.length, endIndex).trim();
// cardJsxRaw looks like <Link href=... > ... </Link>)} 
// I need to strip the trailing )}
const cardJsx = cardJsxRaw.replace(/\)\s*\}\s*$/, '');

newLogic += '    ' + cardJsx + '\n  );';

// 3. Build the new render output
const renderOutput = \
          {filter === 'all' && milestoneProjects.length > 0 && (
            <>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", color: "var(--text-dark)", marginBottom: "30px", textAlign: "left", paddingLeft: "10px", borderLeft: "4px solid var(--primary-red)" }}>
                &nbsp; Milestone Projects
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "30px", paddingBottom: "50px", borderBottom: "1px solid var(--border-soft)", marginBottom: "50px" }}>
                {milestoneProjects.map(renderProjectCard)}
              </div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", color: "var(--text-dark)", marginBottom: "30px", textAlign: "left", paddingLeft: "10px" }}>
                All Completed Projects
              </h2>
            </>
          )}

          {/* Projects Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "30px", paddingBottom: "80px" }}>
            {(filter === 'all' ? regularProjects : filteredProjects).map(renderProjectCard)}
          </div>
\;

// 4. Put it together
let newContent = content.substring(0, content.indexOf('return ('));
newContent += newLogic + '\n\n  return (\n';
// ... up to {filteredProjects.map(
const preGrid = content.substring(content.indexOf('return (') + 8, startIndex - 149); // approximately back up to { /* Projects Grid */ }

let finalContent = content.substring(0, content.indexOf('return (')) 
  + newLogic + '\n\n  return (' 
  + content.substring(content.indexOf('return (') + 8, content.indexOf('{/* Projects Grid */}'))
  + renderOutput
  + content.substring(endIndex + endTag.length);

fs.writeFileSync('src/app/projects/page.tsx', finalContent, 'utf8');
console.log('Successfully updated projects page');
