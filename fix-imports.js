const fs = require('fs');

function addImport(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('import QuoteForm')) {
        content = content.replace(/"use client";(\r?\n)/, '"use client";$1import QuoteForm from "@/app/components/QuoteForm";$1');
        fs.writeFileSync(filePath, content, 'utf8');
    }
}

addImport('src/app/resources/page.tsx');
addImport('src/app/resources/asphalt/page.tsx');
addImport('src/app/resources/crusher/page.tsx');
addImport('src/app/resources/sand/page.tsx');
addImport('src/app/resources/concrete/page.tsx');
addImport('src/app/resources/asphalt/yakawewa/page.tsx');
addImport('src/app/resources/crusher/thudugala/page.tsx');
addImport('src/app/resources/crusher/omanthai/page.tsx');
addImport('src/app/resources/sand/veerapuram/page.tsx');

console.log('Fixed imports');
