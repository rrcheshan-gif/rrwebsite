const fs = require('fs');
const path = require('path');

function titleCase(str) {
    return str.toLowerCase().split(' ').map(word => {
        if (word.length === 0) return word;
        // Keep small words lowercase if they are not the first word, but for simplicity let's just capitalize all for "First Capital"
        const smallWords = ['and', 'or', 'the', 'of', 'in', 'on', 'with', 'for', 'a', 'an'];
        if (smallWords.includes(word) && str.toLowerCase().indexOf(word) !== 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // 1. Remove textTransform: "uppercase" and similar
    content = content.replace(/textTransform:\s*["']uppercase["'],?/g, "");
    content = content.replace(/text-transform:\s*uppercase;?/g, "");

    // 2. Find ALL CAPS text between HTML tags (>TEXT<) and convert to Title Case
    // We only want to convert if it's strictly ALL CAPS (with spaces/punctuation) and at least 4 letters to avoid acronyms like ISO.
    // Also ignore {VARIABLE} blocks.
    content = content.replace(/>([^<{}]+)</g, (match, text) => {
        const trimmed = text.trim();
        // Check if it's all uppercase and has letters
        if (trimmed.length > 3 && /[A-Z]/.test(trimmed) && !/[a-z]/.test(trimmed)) {
            // It's all caps! Exclude obvious acronyms if they are single words without spaces
            if (!trimmed.includes(' ') && trimmed.length <= 4) return match; // e.g. "ISO"
            
            return '>' + text.replace(trimmed, titleCase(trimmed)) + '<';
        }
        return match;
    });

    // 3. Fix specific known strings like {"PASSION FOR".split("")}
    content = content.replace(/"([A-Z\s]{5,})"(\.split)/g, (match, text, splitFn) => {
        return '"' + titleCase(text) + '"' + splitFn;
    });
    
    // 4. Fix RR CONSTRUCTION
    content = content.replace(/RR CONSTRUCTION<br \/>\(PVT\) LTD/g, "RR Construction<br />(Pvt) Ltd");
    content = content.replace(/RR CONSTRUCTION/g, "RR Construction");

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated:', filePath);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
            processFile(fullPath);
        }
    }
}

walkDir('src/app');
