const fs = require('fs');

const bridgeFile = 'src/app/services/bridge-construction/page.tsx';
let bridgeContent = fs.readFileSync(bridgeFile, 'utf8');

// The bottom button is usually wrapped in a section or div at the bottom
// Let's use a regex to find the section containing the bottom back link.
const bridgeRegex = /<section[^>]*>\s*<Link\s*href="\/services"[\s\S]*?<ArrowLeft[^>]*>[\s\S]*?<\/Link>\s*<\/section>/;
if (bridgeRegex.test(bridgeContent)) {
    bridgeContent = bridgeContent.replace(bridgeRegex, '');
    fs.writeFileSync(bridgeFile, bridgeContent, 'utf8');
    console.log('Removed bottom back button from bridge.');
} else {
    // maybe it doesn't have a section wrapper just for itself
    const linkRegex = /<section style=\{\{ padding: '40px 20px', textAlign: 'center' \}\}>[\s\S]*?Back to Services[\s\S]*?<\/section>/;
    if (linkRegex.test(bridgeContent)) {
        bridgeContent = bridgeContent.replace(linkRegex, '');
        fs.writeFileSync(bridgeFile, bridgeContent, 'utf8');
        console.log('Removed bottom back button from bridge (2).');
    }
}

const waterFile = 'src/app/services/water-infrastructure/page.tsx';
let waterContent = fs.readFileSync(waterFile, 'utf8');

const waterRegex = /<section style=\{\{ padding: '40px 20px', textAlign: 'center', backgroundColor: 'var\(--white\)' \}\}>[\s\S]*?Back to Services[\s\S]*?<\/section>/;
if (waterRegex.test(waterContent)) {
    waterContent = waterContent.replace(waterRegex, '');
    fs.writeFileSync(waterFile, waterContent, 'utf8');
    console.log('Removed bottom back button from water.');
}
