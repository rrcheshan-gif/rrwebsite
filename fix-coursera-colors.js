const fs = require('fs');
const file = 'src/app/training/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace blue badge
content = content.replace(
  'background: "rgba(0, 86, 210, 0.1)", color: "#0056D2"',
  'background: "rgba(15, 23, 42, 0.08)", color: "var(--text-dark)"'
);

// Replace title color
content = content.replace(
  '<span style={{ color: "#0056D2" }}>Coursera AI Certification</span>',
  '<span style={{ color: "var(--primary-red)" }}>Coursera AI Certification</span>'
);

// Replace CheckCircle color
content = content.replace(
  /color="#0056D2"/g,
  'color="var(--primary-red)"'
);

// Replace Right panel background
content = content.replace(
  'background: "linear-gradient(135deg, #f0f7ff 0%, #e0efff 100%)"',
  'background: "var(--bg-light)"'
);

// Replace "coursera" logo color
content = content.replace(
  'color: "#0056D2", letterSpacing: "-2px", fontFamily: "Arial, sans-serif", marginBottom: "25px" }}>\n                   coursera\n                 </div>',
  'color: "var(--text-dark)", letterSpacing: "-2px", fontFamily: "Arial, sans-serif", marginBottom: "25px" }}>\n                   coursera\n                 </div>'
);
// Also just string replace the color if regex/newline differs
content = content.replace(
  'fontWeight: 900, color: "#0056D2", letterSpacing: "-2px"',
  'fontWeight: 900, color: "var(--text-dark)", letterSpacing: "-2px"'
);

// Replace "Global Standard" text color
content = content.replace(
  'color: "#003b8e", fontWeight: 800, fontSize: "1.2rem"',
  'color: "var(--text-dark)", fontWeight: 800, fontSize: "1.2rem"'
);

// Replace decorative dots color
content = content.replace(
  /background: "#0056D2"/g,
  'background: "var(--primary-red)"'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Removed Coursera blue and integrated site theme colors');
