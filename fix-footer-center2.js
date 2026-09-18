const fs = require('fs');
const file = 'src/app/components/Footer.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  '<div className="footer-bottom-bar">\n          <p>&copy;',
  '<div className="footer-bottom-bar" style={{ textAlign: "center" }}>\n          <p style={{ textAlign: "center", width: "100%" }}>&copy;'
);

// Fallback if newline is different
content = content.replace(
  '<div className="footer-bottom-bar">\r\n          <p>&copy;',
  '<div className="footer-bottom-bar" style={{ textAlign: "center" }}>\r\n          <p style={{ textAlign: "center", width: "100%" }}>&copy;'
);

fs.writeFileSync(file, content, 'utf8');
console.log('Added inline text-align center to Footer.tsx');
