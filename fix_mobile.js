const fs = require('fs');
const path = require('path');
const pages = [
  'src/app/page.tsx', 'src/app/about/page.tsx', 'src/app/awards/page.tsx',
  'src/app/career/page.tsx', 'src/app/contact/page.tsx', 'src/app/ongoing/page.tsx',
  'src/app/people/page.tsx', 'src/app/projects/page.tsx', 'src/app/quality-policy/page.tsx',
  'src/app/quarries-aggregates/page.tsx', 'src/app/services/page.tsx', 'src/app/sustainability/page.tsx',
  'src/app/training/page.tsx', 'src/app/welfare/page.tsx', 'src/app/omanthai-plant/page.tsx',
  'src/app/thudugala-plant/page.tsx', 'src/app/veerapuram-plant/page.tsx', 'src/app/yakawewa-plant/page.tsx',
  'src/app/components/Navbar.tsx', 'src/app/components/Footer.tsx'
];

let changedFiles = 0;

pages.forEach(file => {
  let p = path.join(__dirname, file);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    let oldContent = content;
    
    // Fix minWidth
    content = content.replace(/minWidth:\s*['"](\d{2,})px['"]/g, (match, p1) => {
      return `minWidth: 'min(100%, ${p1}px)'`;
    });
    
    // Fix width for values >= 100
    content = content.replace(/width:\s*['"](\d{3,})px['"]/g, (match, p1) => {
      return `width: 'min(100%, ${p1}px)'`;
    });

    // Fix flex container gaps causing overflow on mobile - rely on global CSS instead

    if (oldContent !== content) {
      fs.writeFileSync(p, content);
      changedFiles++;
      console.log(`Updated ${file}`);
    }
  } else {
    console.log(`Not found: ${file}`);
  }
});

console.log(`Updated ${changedFiles} files with inline style fixes.`);

// Update globals.css
const globalsCss = path.join(__dirname, 'src/app/globals.css');
if (fs.existsSync(globalsCss)) {
  let css = fs.readFileSync(globalsCss, 'utf8');
  if (!css.includes('MOBILE RESPONSIVENESS PATCH')) {
    css += `

/* --- MOBILE RESPONSIVENESS PATCH --- */
@media (max-width: 768px) {
  /* Stack flex containers that are not explicitly row on mobile */
  .container > div[style*="display: flex"],
  section > div > div[style*="display: flex"] {
    flex-direction: column !important;
    gap: 30px !important;
  }
  
  /* Reset widths and min-widths */
  div[style*="min-width:"], div[style*="minWidth"] {
    min-width: 100% !important;
  }
  div[style*="width: 50%"], div[style*="width: 60%"], div[style*="width: 40%"] {
    width: 100% !important;
  }

  /* Make grids single column */
  div[style*="grid-template-columns"] {
    grid-template-columns: 1fr !important;
  }
  
  div[style*="gridColumn:"] {
    grid-column: span 12 !important;
  }

  /* Scale down huge fonts */
  h1 {
    font-size: clamp(2rem, 8vw, 3rem) !important;
  }
  h2 {
    font-size: clamp(1.8rem, 6vw, 2.5rem) !important;
  }
  .hero-heading {
    font-size: clamp(2.5rem, 8vw, 4rem) !important;
  }
  
  /* Reduce large paddings */
  section, .section, div[style*="padding: 100px"], div[style*="padding: 140px"] {
    padding-top: 60px !important;
    padding-bottom: 60px !important;
  }

  /* Cards shouldn't have huge fixed heights */
  div[style*="minHeight: 450px"] {
    min-height: 300px !important;
  }

  /* Adjust absolute position elements that might overlap */
  .stat-card {
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  /* Further tweaks for very small screens */
  h1 { font-size: 2rem !important; }
  h2 { font-size: 1.8rem !important; }
  h3 { font-size: 1.5rem !important; }
  
  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }
  .hero-buttons a {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
}
`;
    fs.writeFileSync(globalsCss, css);
    console.log('Updated globals.css with mobile patch.');
  }
}
