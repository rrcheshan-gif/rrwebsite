const fs = require('fs');
let content = fs.readFileSync('src/app/layout.tsx', 'utf8');

// Add import if not exists
if (!content.includes('ImageProtection')) {
    content = content.replace(
        'import FloatingChat from "./components/FloatingChat";',
        'import FloatingChat from "./components/FloatingChat";\nimport ImageProtection from "./components/ImageProtection";'
    );
    
    content = content.replace(
        '<ThemeProvider>',
        '<ThemeProvider>\n            <ImageProtection />'
    );
    
    fs.writeFileSync('src/app/layout.tsx', content, 'utf8');
    console.log("Updated layout.tsx");
} else {
    console.log("Already updated.");
}
