const fs = require('fs');

function removeForm(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    // Regex to match <QuoteForm ... /> across multiple lines if necessary
    content = content.replace(/<QuoteForm[^>]*\/>/g, '');
    fs.writeFileSync(file, content, 'utf8');
}

removeForm('src/app/resources/asphalt/yakawewa/page.tsx');
removeForm('src/app/resources/crusher/thudugala/page.tsx');
removeForm('src/app/resources/crusher/omanthai/page.tsx');
removeForm('src/app/resources/sand/veerapuram/page.tsx');

console.log('Removed quote forms from inner detail pages');
