const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');

// Remove the problematic img rule that breaks images in containers
const old = `  /* Prevent images from overflowing */
  img {
    max-width: 100% !important;
    height: auto !important;
  }`;

// Replace with a safer version that only targets images that aren't inside a fixed container
const newRule = `  /* Prevent images from overflowing - only standalone images */
  img:not([style*="height"]):not([class*="img-polished"]):not([class*="logo"]) {
    max-width: 100% !important;
  }`;

css = css.replace(old, newRule);

fs.writeFileSync('src/app/globals.css', css, 'utf8');
console.log("Fixed the mobile img rule");
