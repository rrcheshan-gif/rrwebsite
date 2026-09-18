const fs = require('fs');
const file = 'src/app/about/vision-mission/page.tsx';

let content = fs.readFileSync(file, 'utf8');

const oldGrid = 'gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))"';
const newGrid = 'gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)"';
content = content.replace(oldGrid, newGrid);

// Let's also adjust the card internal design slightly to make it better formatted as requested
// We'll give it slightly more padding or adjust font sizing
const oldCardStyle = `                    <div style={{ 
                      background: "var(--white)", 
                      padding: "40px", 
                      borderRadius: "12px", 
                      borderLeft: "5px solid var(--primary-red)", 
                      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                      height: "100%",
                      transition: "transform 0.3s ease",
                    }}`;

const newCardStyle = `                    <div style={{ 
                      background: "var(--white)", 
                      padding: isMobile ? "30px 25px" : "40px 35px", 
                      borderRadius: "16px", 
                      borderTop: "5px solid var(--primary-red)", 
                      boxShadow: "0 10px 40px rgba(0,0,0,0.04)",
                      border: "1px solid var(--border-soft)",
                      height: "100%",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      position: "relative",
                      overflow: "hidden"
                    }}`;

// Swap borderLeft to borderTop, add a subtle border
content = content.replace(oldCardStyle, newCardStyle);

// Also remove the old extra border-left on hover maybe? No, hover-lift class handles transform.

// Replace text styles to make them look cleaner without relying strictly on global justify issues if they still happen.
const oldDesc = '<p style={{ color: "var(--text-light)", lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }}>';
const newDesc = '<p style={{ color: "var(--text-light)", lineHeight: 1.7, margin: 0, fontSize: "1.05rem" }}>';
content = content.replace(oldDesc, newDesc);

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed Core Values grid layout and design in vision-mission page');
