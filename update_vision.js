const fs = require('fs');
let content = fs.readFileSync('src/app/about/vision-mission/page.tsx', 'utf8');

const oldText = 'To be a leading force in Sri Lanka\'s infrastructure development, delivering world-class engineering solutions that connect communities, enable progress, and build a stronger, more resilient future.';

const newBlock = 'Passion for Engineering Excellence';

// Replace the <p> tag block
const oldFull = '<p style={{ fontSize: "1.25rem", lineHeight: 1.8, color: "var(--text-light)", margin: 0, fontWeight: 400, textAlign: "justify" }}>' + oldText + '</p>';

if (content.includes(oldText)) {
    content = content.replace(
        /<p style=\{\{ fontSize: "1\.25rem", lineHeight: 1\.8, color: "var\(--text-light\)", margin: 0, fontWeight: 400, textAlign: "justify" \}\}>\s*To be a leading force[\s\S]*?future\.\s*<\/p>/,
        '<p style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.3, color: "var(--text-dark)", margin: 0, fontWeight: 800, fontFamily: "var(--font-heading)", letterSpacing: "-0.5px" }}>Passion for <span style={{ color: "var(--primary-red)" }}>Engineering Excellence</span></p>'
    );
    fs.writeFileSync('src/app/about/vision-mission/page.tsx', content, 'utf8');
    console.log("Updated vision text successfully.");
} else {
    console.log("Old text not found - trying regex only...");
    const updated = content.replace(
        /<p style=\{\{ fontSize: "1\.25rem", lineHeight: 1\.8, color: "var\(--text-light\)", margin: 0, fontWeight: 400, textAlign: "justify" \}\}>\s*To be a leading force[\s\S]*?future\.\s*<\/p>/,
        '<p style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.3, color: "var(--text-dark)", margin: 0, fontWeight: 800, fontFamily: "var(--font-heading)", letterSpacing: "-0.5px" }}>Passion for <span style={{ color: "var(--primary-red)" }}>Engineering Excellence</span></p>'
    );
    if (updated !== content) {
        fs.writeFileSync('src/app/about/vision-mission/page.tsx', updated, 'utf8');
        console.log("Updated via regex.");
    } else {
        console.log("Nothing replaced.");
    }
}
