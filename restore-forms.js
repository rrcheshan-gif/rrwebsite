const fs = require('fs');

function restoreForm(file, propsStr) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Add import if missing
    if (!content.includes('import QuoteForm')) {
        content = content.replace(/"use client";(\r?\n)/, '"use client";$1import QuoteForm from "@/app/components/QuoteForm";$1');
    }
    
    // Inject at the bottom if missing
    if (!content.includes('<QuoteForm')) {
        const endIdx = content.lastIndexOf('</div>');
        if (endIdx !== -1) {
            const prefix = content.substring(0, endIdx);
            const suffix = content.substring(endIdx);
            content = prefix + `\n      <QuoteForm ${propsStr} />\n    ` + suffix;
        }
    } else {
        // Just update props if it exists
        content = content.replace(/<QuoteForm[^>]*\/>/g, `<QuoteForm ${propsStr} />`);
    }
    
    fs.writeFileSync(file, content, 'utf8');
}

restoreForm('src/app/resources/asphalt/page.tsx', 'allowedPlants={["Yakawewa (North Central)"]} allowedProducts={["Asphalt Binder Course", "Asphalt Wearing Course", "Other"]}');
restoreForm('src/app/resources/crusher/page.tsx', 'allowedPlants={["Thudugala (Western)", "Omanthai (Northern)"]} allowedProducts={["3/4 Metal", "1/2 Metal", "1 Metal", "ABC", "Other"]}');
restoreForm('src/app/resources/sand/page.tsx', 'allowedPlants={["Veerapuram (North Central)"]} allowedProducts={["M-Sand", "Other"]}');
restoreForm('src/app/resources/concrete/page.tsx', 'allowedPlants={["Ampara (Concrete)", "Jaffna (Concrete)", "Bibila (Concrete)", "Iththapana (Concrete)", "Vadduvakal (Concrete)", "Galgamuwa (Concrete)", "Gandara (Concrete)"]} allowedProducts={["Ready-Mix Concrete", "Other"]}');

console.log('Restored filtered QuoteForms to category pages');
