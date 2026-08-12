const fs = require('fs');

let fileCss = 'src/app/globals.css';
let contentCss = fs.readFileSync(fileCss, 'utf8');

// 1. Expand the navbar wrapper width slightly
contentCss = contentCss.replace(
    /width: 95%;\s*max-width: 1400px;/g,
    'width: 98%;\n    max-width: 1500px;'
);

// 2. Reduce the container padding to save space
contentCss = contentCss.replace(
    /\.navbar-wrapper \.container \{\s*max-width: 100%;\s*padding: 0 40px;\s*\}/,
    '.navbar-wrapper .container {\n    max-width: 100%;\n    padding: 0 20px;\n  }'
);

// 3. Slightly reduce the nav link font size to prevent overflow
contentCss = contentCss.replace(
    /font-size: clamp\(0\.8rem, 0\.9vw, 1rem\);/,
    'font-size: clamp(0.75rem, 0.85vw, 0.95rem);'
);

// 4. Force Contact us to stay inside
contentCss = contentCss.replace(
    /\.nav-contact-btn \{/,
    '.nav-contact-btn {\n    white-space: nowrap;\n    flex-shrink: 0;'
);


fs.writeFileSync(fileCss, contentCss, 'utf8');

