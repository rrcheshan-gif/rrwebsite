const fs = require('fs');

const buttonStr = `<div style={{ textAlign: "left", marginBottom: "24px", width: "100%", maxWidth: "1200px", margin: "0 auto 24px" }}>
            <button onClick={(e) => { e.preventDefault(); router.back(); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff", paddingBottom: "2px", fontWeight: "bold", fontSize: "1.1rem", padding: "0 0 2px 0", outline: "none" }}>&larr; Back</button>
          </div>`;

function addBackToCategory(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');

    // Add useRouter import if missing
    if (!content.includes('useRouter')) {
        content = content.replace(/"use client";(\r?\n)/, '"use client";$1import { useRouter } from "next/navigation";$1');
    }

    // Add router hook
    if (!content.includes('const router = useRouter();')) {
        const componentMatch = content.match(/export default function \w+\(\) \{/);
        if (componentMatch) {
            content = content.replace(componentMatch[0], componentMatch[0] + '\n  const router = useRouter();');
        }
    }

    // Inject button above <h1>
    if (!content.includes('&larr; Back')) {
        content = content.replace(/<h1/, buttonStr + '\n          <h1');
    }

    fs.writeFileSync(file, content, 'utf8');
}

addBackToCategory('src/app/resources/asphalt/page.tsx');
addBackToCategory('src/app/resources/crusher/page.tsx');
addBackToCategory('src/app/resources/sand/page.tsx');
addBackToCategory('src/app/resources/concrete/page.tsx');

console.log('Added Back buttons to category pages');
