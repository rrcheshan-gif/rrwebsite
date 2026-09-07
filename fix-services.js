const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldGridStart = '<div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "30px" }}>';
const oldCardStyle = 'style={{ gridColumn: i === 0 || i === 3 ? "span 7" : "span 5", minHeight: "450px", position: "relative", overflow: "hidden", padding: 0 }}';
const oldOverlayStyle = 'style={{ position: "absolute", bottom: 0, left: 0, width: "100%", padding: "40px", background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 70%, transparent)", color: "white", pointerEvents: "none" }}';

const newGridStart = '<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "25px" }}>';
const newCardStyle = 'style={{ minHeight: "340px", position: "relative", overflow: "hidden", padding: 0, borderRadius: "20px" }}';
const newOverlayStyle = 'style={{ position: "absolute", bottom: 0, left: 0, width: "100%", padding: "30px", background: "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.2) 80%, transparent)", color: "white", pointerEvents: "none" }}';

content = content.replace(oldGridStart, newGridStart);
content = content.replace(oldCardStyle, newCardStyle);
content = content.replace(oldOverlayStyle, newOverlayStyle);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Fixed services grid to be more professional and smaller.');
