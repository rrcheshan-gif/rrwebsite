const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

if (!css.includes('ULTIMATE RESPONSIVE')) {
css += `
/* =================================================
   ULTIMATE RESPONSIVE SAFEGUARDS
   Ensures no horizontal scrolling on mobile
   ================================================= */
/* 1. Reset root bounds */
html, body {
  max-width: 100vw !important;
  overflow-x: hidden !important;
  box-sizing: border-box !important;
}

/* 2. Global Box-Sizing Insurance */
*, *::before, *::after {
  box-sizing: border-box !important;
}

/* 3. Fluid Images & Media */
img, video, iframe, canvas {
  max-width: 100% !important;
  height: auto;
}

/* Specific fix for next/image and explicit height images */
img[style*="height"] {
  height: auto !important;
  object-fit: contain;
}
.hero-img-container img {
  height: 100% !important;
  object-fit: cover !important;
}

/* 4. Text Overflow Prevention */
h1, h2, h3, h4, h5, h6, p, a, span, li, td, th {
  word-break: break-word;
  overflow-wrap: break-word;
}

/* 5. Responsive Tables */
table {
  display: block;
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

/* 6. Smart Container Bounds for Mobile (< 768px) */
@media (max-width: 768px) {
  /* Ensure all sections and containers have safe padding */
  section, .section, .container, [style*="padding:"] {
    padding-left: 15px !important;
    padding-right: 15px !important;
    width: 100% !important;
    max-width: 100vw !important;
  }
  
  /* Fallback for components stuck in flex-row */
  .career-job-header,
  .footer-logo-container {
    flex-wrap: wrap !important;
  }
  
  /* Hard fix for inline flex grids that don't wrap */
  div[style*="display: flex"][style*="gap: 40px"] {
    flex-direction: column !important;
    gap: 20px !important;
  }
}

/* 7. Extreme Small Screens (< 480px) */
@media (max-width: 480px) {
  section, .section, .container, [style*="padding:"] {
    padding-left: 12px !important;
    padding-right: 12px !important;
  }
  
  /* Reduce massive inline fonts */
  [style*="fontSize: 4rem"], [style*="fontSize: '4rem'"], 
  [style*="fontSize: 3rem"], [style*="fontSize: '3rem'"],
  [style*="fontSize: 2.5rem"], [style*="fontSize: '2.5rem'"] {
    font-size: 2rem !important;
  }
}
`;
fs.writeFileSync('src/app/globals.css', css, 'utf8');
console.log("Added ultimate responsive CSS safeguards.");
} else {
console.log("Already has responsive safeguards.");
}
