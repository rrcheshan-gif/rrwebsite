const fs = require('fs');

function injectForm(filePath, mode) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    // Add import if not present
    if (!content.includes('QuoteForm')) {
        content = content.replace('"use client";\n', '"use client";\n\nimport QuoteForm from "@/app/components/QuoteForm";\n');
    }

    if (mode === 'replace') {
        // Replace existing <section id="inquiry"> block
        const startIdx = content.indexOf('{/* Inquiry Form */}');
        const startIdxAlternative = content.indexOf('{/* B2B Order & Inquiry Form Section */}');
        
        let actualStart = startIdx !== -1 ? startIdx : startIdxAlternative;
        
        if (actualStart !== -1) {
            // Find the last </div>\n  );\n}
            const endIdx = content.lastIndexOf('</div>');
            if (endIdx !== -1) {
                const prefix = content.substring(0, actualStart);
                content = prefix + '\n      <QuoteForm />\n    </div>\n  );\n}\n';
            }
        }
    } else if (mode === 'append') {
        // Just append before the last </div>
        if (!content.includes('<QuoteForm />')) {
            const endIdx = content.lastIndexOf('</div>');
            if (endIdx !== -1) {
                const prefix = content.substring(0, endIdx);
                const suffix = content.substring(endIdx);
                content = prefix + '\n      <QuoteForm />\n    ' + suffix;
            }
        }
    }

    fs.writeFileSync(filePath, content, 'utf8');
}

// 1. Pages that already have a form block (replace it)
injectForm('src/app/resources/page.tsx', 'replace');
injectForm('src/app/resources/asphalt/page.tsx', 'replace');
injectForm('src/app/resources/crusher/page.tsx', 'replace');
injectForm('src/app/resources/sand/page.tsx', 'replace');
injectForm('src/app/resources/concrete/page.tsx', 'replace');

// 2. Inner pages that don't have a form block (append it)
injectForm('src/app/resources/asphalt/yakawewa/page.tsx', 'append');
injectForm('src/app/resources/crusher/thudugala/page.tsx', 'append');
injectForm('src/app/resources/crusher/omanthai/page.tsx', 'append');
injectForm('src/app/resources/sand/veerapuram/page.tsx', 'append');

console.log('Successfully injected QuoteForm into all resources pages');
