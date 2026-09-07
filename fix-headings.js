const fs = require('fs');

const standardizedStyle = 'style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 3.5rem)", margin: 0, fontWeight: 800, textShadow: "0 4px 20px rgba(0,0,0,0.85)" }}';

const replacements = [
  { file: 'src/app/career/page.tsx', new: 'Build Your <span style={{ color: "var(--primary-red)" }}>Career</span>' },
  { file: 'src/app/contact/page.tsx', new: 'Get In <span style={{ color: "var(--primary-red)" }}>Touch</span>' },
  { file: 'src/app/facilities/page.tsx', new: 'Quarries & <span style={{ color: "var(--primary-red)" }}>Aggregates</span>' },
  { file: 'src/app/news/page.tsx', new: 'News & <span style={{ color: "var(--primary-red)" }}>Updates</span>' },
  { file: 'src/app/people/page.tsx', new: 'Our <span style={{ color: "var(--primary-red)" }}>People</span>' },
  { file: 'src/app/projects/ongoing/page.tsx', new: 'Ongoing <span style={{ color: "var(--primary-red)" }}>Projects</span>' },
  { file: 'src/app/projects/page.tsx', new: 'Our <span style={{ color: "var(--primary-red)" }}>Portfolio</span>' },
  { file: 'src/app/quality-policy/page.tsx', new: 'Quality <span style={{ color: "var(--primary-red)" }}>Policy</span>' },
  { file: 'src/app/training/page.tsx', new: 'Training & <span style={{ color: "var(--primary-red)" }}>Development</span>' },
  { file: 'src/app/welfare/page.tsx', new: 'Employee <span style={{ color: "var(--primary-red)" }}>Welfare</span>' }
];

replacements.forEach(({ file, new: newStr }) => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/, '<h1 ' + standardizedStyle + '>' + newStr + '</h1>');
    fs.writeFileSync(file, content, 'utf8');
  }
});
console.log('Fixed headings');
