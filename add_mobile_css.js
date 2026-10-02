const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');
css += `
/* =================================================
   ULTIMATE MOBILE RESPONSIVENESS OVERRIDES
   Ensures the entire site scales perfectly on any device
   ================================================= */
@media (max-width: 768px) {
  /* Prevent horizontal overflow globally */
  html, body {
    max-width: 100vw !important;
    overflow-x: hidden !important;
  }
  
  * {
    max-width: 100vw !important;
    box-sizing: border-box !important;
  }

  /* Text scaling and wrapping */
  h1, h2, h3, h4, h5, h6, p, span, a, div {
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
  }
  
  /* Reduce excessive paddings on containers */
  section, .section, [style*="padding:"] {
    padding-left: 15px !important;
    padding-right: 15px !important;
  }

  /* Force standard flex containers to stack if they don't wrap */
  div[style*="display: flex"][style*="flexDirection: row"] {
    flex-direction: column !important;
  }
  
  div[style*="display: 'flex'"][style*="flexDirection: 'row'"] {
    flex-direction: column !important;
  }

  /* Ensure all inline grids collapse to a single column on mobile, 
     except specific grids like collages or buttons */
  div[style*="display: grid"]:not(.collage-grid) {
    grid-template-columns: 1fr !important;
    gap: 20px !important;
  }

  /* Make sure images scale and don't push content off screen */
  img, video, iframe, canvas {
    max-width: 100% !important;
    height: auto !important;
  }
  
  /* Reduce large font sizes inline */
  [style*="fontSize: 4rem"], [style*="fontSize: '4rem'"], 
  [style*="fontSize: 3rem"], [style*="fontSize: '3rem'"] {
    font-size: 2.2rem !important;
  }

  /* Make sure modals and popups fit */
  .modal-content, [style*="position: fixed"] > div {
    width: 95% !important;
    max-width: 95vw !important;
    margin: 0 auto !important;
  }
}

@media (max-width: 480px) {
  /* Extreme small screens (e.g., iPhone SE) */
  section, .section, [style*="padding:"] {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  .container {
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
}
`;
fs.writeFileSync('src/app/globals.css', css, 'utf8');
console.log("Added ultimate mobile responsiveness overrides.");
