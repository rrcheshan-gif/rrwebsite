const fs = require('fs');

const standardizedStyle = 'style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}';

const replacements = [
  { file: 'src/app/about/awards/page.tsx', new: 'Project <span style={{ color: "var(--primary-red)" }}>Achievements</span>' },
  { file: 'src/app/about/leadership/page.tsx', new: 'Board of <span style={{ color: "var(--primary-red)" }}>Directors</span>' },
  { file: 'src/app/about/vision-mission/page.tsx', new: 'Vision & <span style={{ color: "var(--primary-red)" }}>Mission</span>' },
  { file: 'src/app/about/goals-and-targets/page.tsx', new: 'Goals & <span style={{ color: "var(--primary-red)" }}>Targets</span>' },
  { file: 'src/app/about/company-overview/page.tsx', new: 'RR <span style={{ color: "var(--primary-red)" }}>Overview</span>' }
];

replacements.forEach(({ file, new: newStr }) => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/, '<h1 ' + standardizedStyle + '>' + newStr + '</h1>');
    fs.writeFileSync(file, content, 'utf8');
  }
});
console.log('Fixed about headings');
