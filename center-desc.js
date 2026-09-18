const fs = require('fs');
const file = 'src/app/training/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const targetP = '<p style={{ color: "var(--text-light)", fontSize: "1.15rem", margin: 0 }}>Discover the extra steps we take to empower our team and stay ahead of industry curves.</p>';
const replacementP = '<p style={{ color: "var(--text-light)", fontSize: "1.15rem", margin: 0, textAlign: "center" }}>Discover the extra steps we take to empower our team and stay ahead of industry curves.</p>';

if (content.includes(targetP)) {
  content = content.replace(targetP, replacementP);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Centered the description');
} else {
  console.log('Target string not found, doing a regex replace just in case');
  content = content.replace(
    /<p style=\{\{ color: "var\(--text-light\)", fontSize: "1\.15rem", margin: 0 \}\}>Discover the extra steps/g,
    '<p style={{ color: "var(--text-light)", fontSize: "1.15rem", margin: 0, textAlign: "center" }}>Discover the extra steps'
  );
  fs.writeFileSync(file, content, 'utf8');
}
