const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');

if (!css.includes('grid-template-columns: 1fr !important;')) {
css += `
@media (max-width: 768px) {
  /* Force multiple columns grids to stack on mobile */
  div[style*="grid-template-columns: repeat(3"],
  div[style*="grid-template-columns: repeat(4"],
  div[style*="grid-template-columns: repeat(5"],
  div[style*="gridTemplateColumns: 'repeat(3"],
  div[style*="gridTemplateColumns: 'repeat(4"],
  div[style*="grid-template-columns: 3"],
  div[style*="grid-template-columns: 1fr 1fr"],
  div[style*="gridTemplateColumns: '1fr 1fr"] {
    grid-template-columns: 1fr !important;
  }
  
  /* Fix our-management leadership boxes that might stay flex-row initially due to SSR */
  div[style*="gap: 40px"][style*="display: flex"] {
    flex-direction: column !important;
    padding: 30px 20px !important;
  }
}
`;
fs.writeFileSync('src/app/globals.css', css, 'utf8');
console.log("Added grid overrides.");
}
