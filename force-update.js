const fs = require('fs');

const buttonStr = `<button onClick={(e) => { e.preventDefault(); router.back(); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff", paddingBottom: "2px", fontWeight: "bold", fontSize: "1.1rem", padding: "0 0 2px 0", outline: "none" }}>&larr; Back</button>`;

function forceUpdate(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // Splitting by lines and finding the line with 'Back'
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('Back to Resources') || lines[i].includes('Go Back')) {
            // Replace the entire contents inside the div
            // The structure is usually <div style={{ textAlign: "left", marginBottom: "24px" }}>\n <Link...> \n </div>
            lines[i] = `            ${buttonStr}`;
        }
    }

    fs.writeFileSync(file, lines.join('\n'), 'utf8');
}

forceUpdate('src/app/resources/asphalt/yakawewa/page.tsx');
forceUpdate('src/app/resources/crusher/thudugala/page.tsx');
forceUpdate('src/app/resources/crusher/omanthai/page.tsx');
forceUpdate('src/app/resources/sand/veerapuram/page.tsx');

console.log("Forced update of back buttons by line");
