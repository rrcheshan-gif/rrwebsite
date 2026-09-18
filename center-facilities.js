const fs = require('fs');
const file = 'src/app/facilities/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const target1 = '<p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginTop: "10px" }}>Three crushing powerhouses placed strategically to cover the Western, North Central, and Northern Provinces.</p>';
const rep1 = '<p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginTop: "10px", textAlign: "center" }}>Three crushing powerhouses placed strategically to cover the Western, North Central, and Northern Provinces.</p>';

const target2 = '<p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginTop: "10px" }}>Select from our wide range of crushed rock aggregates to suit your exact engineering needs.</p>';
const rep2 = '<p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginTop: "10px", textAlign: "center" }}>Select from our wide range of crushed rock aggregates to suit your exact engineering needs.</p>';

content = content.replace(target1, rep1);
content = content.replace(target2, rep2);

fs.writeFileSync(file, content, 'utf8');
console.log('Centered the descriptions in facilities page');
