const fs = require('fs');

function centerIntroText(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the paragraph that needs centering
    content = content.replace(
        /<p style=\{\{\s*color:\s*"var\(--text-light\)",\s*fontSize:\s*"1\.2rem",\s*fontStyle:\s*"italic",\s*marginBottom:\s*"40px"\s*\}\}>/g,
        '<p style={{ color: "var(--text-light)", fontSize: "1.2rem", fontStyle: "italic", marginBottom: "40px", textAlign: "center" }}>'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
}

centerIntroText('src/app/resources/crusher/thudugala/page.tsx');
centerIntroText('src/app/resources/crusher/omanthai/page.tsx');
centerIntroText('src/app/resources/sand/veerapuram/page.tsx');
centerIntroText('src/app/resources/asphalt/yakawewa/page.tsx');
