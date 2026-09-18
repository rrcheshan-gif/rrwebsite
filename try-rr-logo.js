const fs = require('fs');
let content = fs.readFileSync('src/app/components/PageTransition.tsx', 'utf8');

// replace logo.png with rr-logo.png in PageTransition
content = content.replace('/images/logo.png', '/images/rr-logo.png');

fs.writeFileSync('src/app/components/PageTransition.tsx', content, 'utf8');
