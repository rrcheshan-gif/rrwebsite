const fs = require('fs');

const buttonStr = `<button onClick={(e) => { e.preventDefault(); router.back(); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff", paddingBottom: "2px", fontWeight: "bold", fontSize: "1.1rem", padding: "0 0 2px 0", outline: "none" }}>&larr; Back</button>`;

function updateFile(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // 1. Replace the corrupted/old button (like +? Go Back)
    content = content.replace(/<button[^>]*>.*?Go Back<\/button>/g, buttonStr);
    
    // 2. Replace the old Back to Resources link if it wasn't caught
    content = content.replace(/<Link href="\/resources"[^>]*>Back to Resources<\/Link>/g, buttonStr);

    fs.writeFileSync(file, content, 'utf8');
}

updateFile('src/app/resources/asphalt/yakawewa/page.tsx');
updateFile('src/app/resources/crusher/thudugala/page.tsx');
updateFile('src/app/resources/crusher/omanthai/page.tsx');
updateFile('src/app/resources/sand/veerapuram/page.tsx');

console.log("Updated Back buttons");
