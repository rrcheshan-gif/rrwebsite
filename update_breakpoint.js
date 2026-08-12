const fs = require('fs');
const file = 'src/app/globals.css';
let css = fs.readFileSync(file, 'utf8');

// Change max-width from 1366px to 1200px for mobile menu breakpoint
css = css.replace(/max-width: 1366px/g, 'max-width: 1200px');

// Change min-width from 1367px to 1201px for desktop specific styles
css = css.replace(/min-width: 1367px/g, 'min-width: 1201px');

fs.writeFileSync(file, css, 'utf8');
console.log("Successfully updated breakpoint to 1200px");
