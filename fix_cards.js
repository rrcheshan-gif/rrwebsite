const fs = require('fs');
const file = 'src/app/quarries-aggregates/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add import
if (!content.includes('useRouter')) {
    content = content.replace(
        "import Link from 'next/link';",
        "import Link from 'next/link';\nimport { useRouter } from 'next/navigation';"
    );
}

// Add hook
if (!content.includes('const router = useRouter();')) {
    content = content.replace(
        "export default function QuarriesAggregates() {",
        "export default function QuarriesAggregates() {\n  const router = useRouter();"
    );
}

// Helper to replace each card
function fixCard(plantName, routeUrl, imgUrl) {
    const cardStartPattern = new RegExp(`<div style=\\{\\{ background: "var\\(--white\\)", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column", height: "100%", boxShadow: "0 10px 30px rgba\\(0,0,0,0.05\\)" \\}\\}>[\\s\\S]*?<h3[^>]*>${plantName}</h3>`, 'g');
    
    // We'll replace the outer div and the image onClick manually
    content = content.replace(cardStartPattern, (match) => {
        // 1. Add onClick and cursor to outer div
        let m = match.replace(
            `boxShadow: "0 10px 30px rgba(0,0,0,0.05)"`, 
            `boxShadow: "0 10px 30px rgba(0,0,0,0.05)", cursor: "pointer", transition: "transform 0.2s ease"`
        ).replace(
            `<div style={{ background:`,
            `<div onClick={() => router.push('${routeUrl}')} style={{ background:`
        );
        // 2. Remove lightbox onClick from image wrapper
        m = m.replace(/onClick=\{\(\) => setLightboxImg\([^)]+\)\}/g, "");
        return m;
    });

    // Replace the buttons
    const buttonsPattern = new RegExp(`<div style=\\{\\{ display: "flex", flexDirection: "row", gap: "10px", marginTop: "15px" \\}\\}>\\s*<Link href="${routeUrl}" className="btn-glass-red btn-glass-sm" style=\\{\\{ flex: 1 \\}\\}>View Details</Link>\\s*<a href="#inquiry" className="btn-glass-red btn-glass-sm" style=\\{\\{ flex: 1, display: "block", textDecoration: "none" \\}\\}>Quote</a>\\s*</div>`, 'g');
    
    const newButtons = `<div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "15px" }}>
                  <div className="btn-glass-red btn-glass-sm" style={{ width: "100%", textAlign: "center" }}>View Details</div>
                  <a href="#inquiry" className="btn-glass-red btn-glass-sm" style={{ width: "100%", textAlign: "center", textDecoration: "none" }} onClick={(e) => e.stopPropagation()}>Quote</a>
                </div>`;
                
    content = content.replace(buttonsPattern, newButtons);
}

fixCard('Thudugala Crusher Plant', '/thudugala-plant', 'images/thudugala-5.jpg');
fixCard('Veerapuram M Sand Plant', '/veerapuram-plant', 'images/omanthai-1.jpg');
fixCard('Omanthai Plant', '/omanthai-plant', 'images/omanthai-1.jpg');
fixCard('Yakawewa Asphalt Plant', '/yakawewa-plant', 'images/yakawewa-asphalt-2.jpg');

fs.writeFileSync(file, content, 'utf8');
