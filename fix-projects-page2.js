const fs = require('fs');

const content = fs.readFileSync('src/app/projects/page.tsx', 'utf8');

// The exact string starting the map
const mapStart = '{filteredProjects.map((project: any) => (';
const mapEndIndex = content.indexOf('))}', content.indexOf(mapStart));
const mapEnd = content.substring(mapEndIndex, mapEndIndex + 3); // '))}'

const cardBodyRaw = content.substring(content.indexOf(mapStart) + mapStart.length, mapEndIndex).trim();

// Because the original is:
// {filteredProjects.map((project: any) => (
//   <Link ...
// ))}
// So cardBodyRaw is <Link ... </div>\n              </Link>
// We wrap it in a function: const renderProjectCard = (project: any) => (\n  \n);

const newLogic = \
  const milestoneIds = ['project-47', 'project-32', 'project-86'];
  const milestoneProjects = filteredProjects.filter((p: any) => milestoneIds.includes(p.id)).sort((a: any, b: any) => milestoneIds.indexOf(a.id) - milestoneIds.indexOf(b.id));
  const regularProjects = filteredProjects.filter((p: any) => !milestoneIds.includes(p.id));

  const renderProjectCard = (project: any) => (
    \
  );
\;

// Replace everything from <div style={{ display: "grid" up to the end of the map block
const gridStart = '{/* Projects Grid */}';
const gridStartIndex = content.indexOf(gridStart);
const gridEndIndex = mapEndIndex + 3;

const newRender = \{/* Projects Grid */}
          {filter === 'all' && milestoneProjects.length > 0 && (
            <>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <div style={{ width: '4px', height: '35px', background: 'var(--primary-red)', borderRadius: '4px' }}></div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", color: "var(--text-dark)", margin: 0, textAlign: "left" }}>
                  Milestone Projects
                </h2>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "30px", paddingBottom: "50px", borderBottom: "1px solid var(--border-soft)", marginBottom: "50px" }}>
                {milestoneProjects.map(renderProjectCard)}
              </div>
              
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", color: "var(--text-dark)", marginBottom: "30px", textAlign: "left", paddingLeft: "5px" }}>
                All Completed Projects
              </h2>
            </>
          )}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "30px", paddingBottom: "80px" }}>
            {(filter === 'all' ? regularProjects : filteredProjects).map(renderProjectCard)}
          </div>\;


// Where to inject the logic? Right before eturn (
const returnIndex = content.indexOf('return (');

let finalContent = content.substring(0, returnIndex) + newLogic + '\n\n  ' + content.substring(returnIndex, gridStartIndex) + newRender + content.substring(gridEndIndex);

fs.writeFileSync('src/app/projects/page.tsx', finalContent, 'utf8');
console.log('Successfully updated projects page with milestones');
