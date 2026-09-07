const fs = require('fs');

let content = fs.readFileSync('src/app/globals.css', 'utf8');

const typographyTweaks = `
/* Modern Typography Tweaks */
h1, h2, h3, h4, h5, h6 {
  letter-spacing: -0.02em;
}

body {
  letter-spacing: -0.01em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page-header h1 {
  letter-spacing: -0.04em; /* Ultra modern tight tracking on huge headers */
}
`;

content = content + "\n" + typographyTweaks;

fs.writeFileSync('src/app/globals.css', content, 'utf8');
console.log("Added modern typography tweaks to globals.css");
