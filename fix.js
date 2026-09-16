const fs = require("fs");
let text = fs.readFileSync("src/app/services/page.tsx", "utf8");
const search = "<Link href=\"/\" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '1.5px',  textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '28px' }}>\r\n            Home\r\n          </Link>";
const replace = `<div style={{ width: "100%", textAlign: "left", marginBottom: "24px" }}>\r\n            <Link href="/" style={{ color: "#fff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "3px", fontWeight: "bold",  letterSpacing: "1px", fontSize: "0.85rem", textShadow: "0 2px 5px rgba(0,0,0,0.8)", display: "inline-block" }}>\r\n              &larr; Back to Home\r\n            </Link>\r\n          </div>`;
if (text.indexOf(search) !== -1) {
    text = text.replace(search, replace);
    fs.writeFileSync("src/app/services/page.tsx", text, "utf8");
    console.log("Replaced!");
} else {
    // Try without \r
    const search2 = search.replace(/\r/g, "");
    if (text.indexOf(search2) !== -1) {
        text = text.replace(search2, replace);
        fs.writeFileSync("src/app/services/page.tsx", text, "utf8");
        console.log("Replaced without carriage returns!");
    } else {
        console.log("Still not found!");
    }
}

