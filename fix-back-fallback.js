const fs = require('fs');

function manualReplace(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Fallback: replace ANY Link that has "Back to Resources"
    content = content.replace(/<Link[^>]*>Back to Resources<\/Link>/g, '<button onClick={(e) => { e.preventDefault(); router.back(); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff", paddingBottom: "2px", fontWeight: "bold", fontSize: "1rem", padding: 0 }}>Back</button>');

    fs.writeFileSync(file, content, 'utf8');
}

manualReplace('src/app/resources/crusher/thudugala/page.tsx');
manualReplace('src/app/resources/crusher/omanthai/page.tsx');
manualReplace('src/app/resources/sand/veerapuram/page.tsx');

console.log('Manually fixed remaining back links');
