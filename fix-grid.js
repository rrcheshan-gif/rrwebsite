const fs = require('fs');
const file = 'src/app/projects/overseas/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetIndex = content.indexOf('{/* Projects Grid */}');
content = content.substring(0, targetIndex) + `{/* Projects Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "30px", paddingBottom: "80px" }}>
              {filteredProjects.map(renderProjectCard)}
            </div>
          </div>
        </div>
      </div>
    );
  }`;

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed grids');
