const fs = require('fs');

function updateFile(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // For projects and ongoing:
    // We look for: <span style={{...}}> View Details ... </span>
    const regexProjects = /<span style=\{\{\s*display:\s*'inline-block',\s*padding:\s*'10px 20px',\s*background:\s*'transparent',\s*border:\s*'1px solid var\(--primary-red\)',\s*color:\s*'var\(--primary-red\)',\s*borderRadius:\s*'30px',\s*fontSize:\s*'0.9rem',\s*fontWeight:\s*'bold',\s*transition:\s*'all 0.3s'\s*\}\}>\s*View Details.*?\s*<\/span>/gs;
    
    content = content.replace(regexProjects, '<span className="btn-glass-red">View Details &rarr;</span>');

    // For quarries-aggregates:
    // We look for: <Link href="..." style={{...}}>View Details</Link>
    // style={{ display: "block", flex: 1, textAlign: "center", padding: "10px 0", background: "var(--bg-light)", color: "var(--text-dark)", border: "1px solid var(--border-soft)", fontWeight: "bold", borderRadius: "6px", textDecoration: "none" }}
    const regexQuarries = /<Link href="([^"]+)" style=\{\{ display: "block", flex: 1, textAlign: "center", padding: "10px 0", background: "var\(--bg-light\)", color: "var\(--text-dark\)", border: "1px solid var\(--border-soft\)", fontWeight: "bold", borderRadius: "6px", textDecoration: "none" \}\}>View Details<\/Link>/g;
    
    content = content.replace(regexQuarries, '<Link href="$1" className="btn-glass-red" style={{ flex: 1 }}>View Details</Link>');

    fs.writeFileSync(file, content, 'utf8');
}

updateFile('src/app/projects/page.tsx');
updateFile('src/app/ongoing/page.tsx');
updateFile('src/app/quarries-aggregates/page.tsx');
console.log("Updated View Details buttons.");
