const fs = require('fs');

function removeForm(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<QuoteForm[^>]*\/>/g, '');
    fs.writeFileSync(file, content, 'utf8');
}

function removeQuoteButton(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    // The button looks like: <a href="#inquiry" className="btn-glass-red btn-glass-sm" style={{ width: "100%", textAlign: "center", textDecoration: "none" }} onClick={(e) => e.stopPropagation()}>Quote</a>
    content = content.replace(/<a href="#inquiry"[^>]*>Quote<\/a>/g, '');
    fs.writeFileSync(file, content, 'utf8');
}

// Remove from category pages
removeForm('src/app/resources/asphalt/page.tsx');
removeForm('src/app/resources/crusher/page.tsx');
removeForm('src/app/resources/sand/page.tsx');
removeForm('src/app/resources/concrete/page.tsx');

// Remove the redundant "Quote" button inside the cards on all pages that have it
const pagesWithCards = [
    'src/app/resources/asphalt/page.tsx',
    'src/app/resources/crusher/page.tsx',
    'src/app/resources/sand/page.tsx',
    'src/app/resources/page.tsx'
];
pagesWithCards.forEach(removeQuoteButton);

console.log('Removed quote forms from category pages and redundant quote buttons');
