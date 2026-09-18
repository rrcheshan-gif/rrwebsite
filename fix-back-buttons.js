const fs = require('fs');

function fixBackButton(file) {
    if (!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf8');
    
    // Add useRouter import if missing
    if (!content.includes('useRouter')) {
        content = content.replace(/"use client";(\r?\n)/, '"use client";$1import { useRouter } from "next/navigation";$1');
    }

    // Add router hook inside the component
    const componentMatch = content.match(/export default function \w+\(\) \{/);
    if (componentMatch && !content.includes('const router = useRouter();')) {
        content = content.replace(componentMatch[0], componentMatch[0] + '\n  const router = useRouter();');
    }

    // Replace the Link with a router.back() button
    const linkRegex = /<Link href="\/resources"[^>]*>Back to Resources<\/Link>/g;
    const buttonHtml = `<button onClick={(e) => { e.preventDefault(); router.back(); }} style={{ background: "none", border: "none", cursor: "pointer", color: "#fff", textDecoration: "none", borderBottom: "1px solid #fff", paddingBottom: "2px", fontWeight: "bold", fontSize: "1rem", padding: 0 }}>← Go Back</button>`;
    
    content = content.replace(linkRegex, buttonHtml);

    fs.writeFileSync(file, content, 'utf8');
}

fixBackButton('src/app/resources/asphalt/yakawewa/page.tsx');
fixBackButton('src/app/resources/crusher/thudugala/page.tsx');
fixBackButton('src/app/resources/crusher/omanthai/page.tsx');
fixBackButton('src/app/resources/sand/veerapuram/page.tsx');

console.log('Fixed back buttons');
