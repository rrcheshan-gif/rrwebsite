const fs = require('fs');

function fixBackButtonText(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace whatever broken button text with just "Back"
    content = content.replace(/<button[^>]*>.*?Go Back<\/button>/g, '<button onClick={(e) => { e.preventDefault(); router.back(); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff", paddingBottom: "2px", fontWeight: "bold", fontSize: "1rem", padding: 0 }}>Back</button>');

    // Also just in case the Link was NOT replaced (e.g., thudugala still has it)
    content = content.replace(/<Link href="\/resources"[^>]*>Back to Resources<\/Link>/g, '<button onClick={(e) => { e.preventDefault(); router.back(); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff", paddingBottom: "2px", fontWeight: "bold", fontSize: "1rem", padding: 0 }}>Back</button>');

    fs.writeFileSync(file, content, 'utf8');
}

fixBackButtonText('src/app/resources/asphalt/yakawewa/page.tsx');
fixBackButtonText('src/app/resources/crusher/thudugala/page.tsx');
fixBackButtonText('src/app/resources/crusher/omanthai/page.tsx');
fixBackButtonText('src/app/resources/sand/veerapuram/page.tsx');

console.log('Fixed back buttons to just say "Back"');
