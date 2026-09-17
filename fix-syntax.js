const fs = require('fs');
const file = 'src/app/projects/overseas/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const correctBottom = `
        {/* Projects Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "30px", paddingBottom: "80px" }}>
          {filteredProjects.map(renderProjectCard)}
        </div>
      </div>
    </div>
  );
}
`;

const index = content.indexOf('{/* Projects Grid */}');
content = content.substring(0, index) + correctBottom;

// Fix the title as well, I noticed it was 'Our Portfolio' instead of 'Overseas Projects' in the output above
content = content.replace(
  'Our <span style={{ color: "var(--primary-red)" }}>Portfolio</span>',
  'Overseas <span style={{ color: "var(--primary-red)" }}>Projects</span>'
);

// We should remove the completed/ongoing toggle as this is its own page
content = content.replace(/\{\/\* Status Toggle Tabs \*\/\}[\s\S]*?<\/div>\s*<\/div>/, '');


fs.writeFileSync(file, content, 'utf8');
console.log('Fixed syntax error');
