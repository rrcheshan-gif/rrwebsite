const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace the gap in the container
content = content.replace(
  'gap: "25px", position: "relative", marginTop: "60px"',
  'gap: "15px", position: "relative", marginTop: "40px"'
);

// Replace card padding
content = content.replace(
  'display: "flex", gap: "25px", padding: "30px", position: "relative"',
  'display: "flex", gap: "20px", padding: "20px", position: "relative"'
);

// Scale down the icon box
content = content.replace(
  'width: "60px", height: "60px", background: "var(--primary-red)", borderRadius: "16px"',
  'width: "50px", height: "50px", background: "var(--primary-red)", borderRadius: "14px"'
);

// Adjust title font size and margin
content = content.replace(
  'fontSize: "1.3rem", marginBottom: "8px"',
  'fontSize: "1.1rem", marginBottom: "4px"'
);

// Adjust background number position
content = content.replace(
  'right: "20px", top: "15px", fontSize: "clamp(2rem, 6vw, 3rem)"',
  'right: "20px", top: "20px", fontSize: "clamp(1.5rem, 4vw, 2.2rem)"'
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Scaled down project list cards');
