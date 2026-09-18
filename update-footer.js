const fs = require('fs');
const file = 'src/app/components/Footer.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add lucide-react import if not present
if (!content.includes('lucide-react')) {
  content = 'import { Facebook, Linkedin, Twitter } from "lucide-react";\n' + content;
}

// Replace the text pills with actual icons
content = content.replace('<a href="#" aria-label="Facebook">FB</a>', '<a href="#" aria-label="Facebook" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><Facebook size={18} /></a>');
content = content.replace('<a href="#" aria-label="LinkedIn">IN</a>', '<a href="#" aria-label="LinkedIn" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><Linkedin size={18} /></a>');
content = content.replace('<a href="#" aria-label="Twitter">TW</a>', '<a href="#" aria-label="Twitter" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}><Twitter size={18} /></a>');

fs.writeFileSync(file, content, 'utf8');
console.log('Replaced text with lucide icons in footer');
