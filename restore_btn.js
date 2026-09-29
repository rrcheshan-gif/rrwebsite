const fs = require('fs');
let content = fs.readFileSync('src/app/resources/concrete/page.tsx', 'utf8');

const regex = /1\s*\{loc\.mapLink && \(/g;
const replacement = `<a href="/resources/request-order" className="btn-glass-red btn-glass-sm" style={{ width: "100%", textAlign: "center", textDecoration: "none" }} >Request Quote</a>
                      {loc.mapLink && (`;

content = content.replace(regex, replacement);

fs.writeFileSync('src/app/resources/concrete/page.tsx', content, 'utf8');
console.log("Restored Request Quote button.");
