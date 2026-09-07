const fs = require('fs');

const standardizedStyle = 'style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}';

const replacements = [
  { file: 'src/app/services/page.tsx', new: 'Technology & <span style={{ color: "var(--primary-red)" }}>Services</span>' },
  { file: 'src/app/facilities/omanthai-quarry/page.tsx', new: 'Omanthai <span style={{ color: "var(--primary-red)" }}>Plant</span>' },
  { file: 'src/app/facilities/thudugala-quarry/page.tsx', new: 'Thudugala <span style={{ color: "var(--primary-red)" }}>Plant</span>' },
  { file: 'src/app/facilities/veerapuram-asphalt-plant/page.tsx', new: 'Veerapuram <span style={{ color: "var(--primary-red)" }}>Plant</span>' },
  { file: 'src/app/facilities/yakawewa-quarry/page.tsx', new: 'Yakawewa <span style={{ color: "var(--primary-red)" }}>Plant</span>' },
  { file: 'src/app/sustainability/page.tsx', new: 'Sustainability <span style={{ color: "var(--primary-red)" }}>& HSE</span>' },
  { file: 'src/app/sustainability/environmental-stewardship/page.tsx', new: 'Environmental <span style={{ color: "var(--primary-red)" }}>Stewardship</span>' },
  { file: 'src/app/sustainability/health-and-safety/page.tsx', new: 'Occupational <span style={{ color: "var(--primary-red)" }}>Health & Safety</span>' },
  { file: 'src/app/sustainability/quality-management/page.tsx', new: 'Quality <span style={{ color: "var(--primary-red)" }}>Management</span>' },
  { file: 'src/app/sustainability/social-responsibility/page.tsx', new: 'Social <span style={{ color: "var(--primary-red)" }}>Responsibility</span>' }
];

replacements.forEach(({ file, new: newStr }) => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/, '<h1 ' + standardizedStyle + '>' + newStr + '</h1>');
    fs.writeFileSync(file, content, 'utf8');
  }
});
console.log('Fixed rest of headings');
