const fs = require('fs');
let content = fs.readFileSync('src/app/globals.css', 'utf8');

if (!content.includes('-webkit-touch-callout: none;')) {
    content = content.replace(
        /img \{/,
        "img {\n  -webkit-touch-callout: none;\n  pointer-events: auto; /* ensure they can be clicked if needed */"
    );
    // Also add to * to prevent background images from being long-pressed
    content += "\n\n/* Global protection for background images on mobile */\n.bg-image, [style*='background-image'] {\n  -webkit-touch-callout: none;\n}\n";
    fs.writeFileSync('src/app/globals.css', content, 'utf8');
    console.log("Updated globals.css with touch-callout");
} else {
    console.log("Already has touch-callout");
}
