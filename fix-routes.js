const fs = require('fs');

function replaceInFile(file, replacements) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    for (let r of replacements) {
        content = content.replace(r.from, r.to);
    }
    fs.writeFileSync(file, content, 'utf8');
}

const linkReplacements = [
    { from: /\/yakawewa-plant/g, to: '/resources/asphalt/yakawewa' },
    { from: /\/thudugala-plant/g, to: '/resources/crusher/thudugala' },
    { from: /\/omanthai-plant/g, to: '/resources/crusher/omanthai' },
    { from: /\/veerapuram-plant/g, to: '/resources/sand/veerapuram' }
];

// Update links in the main resources page and the category pages
replaceInFile('src/app/resources/page.tsx', linkReplacements);
replaceInFile('src/app/resources/asphalt/page.tsx', linkReplacements);
replaceInFile('src/app/resources/crusher/page.tsx', linkReplacements);
replaceInFile('src/app/resources/sand/page.tsx', linkReplacements);

// Update breadcrumbs/back links in the inner detail pages
const detailBackLinks = [
    { from: /href="\/facilities"/g, to: 'href="/resources"' },
    { from: /Back to Quarries & Aggregates/g, to: 'Back to Resources' }
];

replaceInFile('src/app/resources/asphalt/yakawewa/page.tsx', detailBackLinks);
replaceInFile('src/app/resources/crusher/thudugala/page.tsx', detailBackLinks);
replaceInFile('src/app/resources/crusher/omanthai/page.tsx', detailBackLinks);
replaceInFile('src/app/resources/sand/veerapuram/page.tsx', detailBackLinks);

console.log('Successfully updated all inner page routes and back links');
