const fs = require('fs');
let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');

const newIntro = \<p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
              Founded in {COMPANY_DATA.established}, {COMPANY_DATA.name} stands at the forefront of Sri Lanka's heavy civil engineering and infrastructure development sector. Over the past {COMPANY_DATA.yearsOfExcellence} years, we have evolved from a specialized regional contractor into a fully integrated national engineering powerhouse. Our journey is defined by a systematic expansion of our capabilities, allowing us to deliver complex, large-scale infrastructure solutions that serve as the backbone of national progress.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "30px", textAlign: "justify" }}>
              By integrating an expansive, self-owned fleet of state-of-the-art heavy machinery with the technical acumen of our elite engineering divisions, we consistently execute high-stakes projects across diverse domains—including maritime structures, national highways, complex bridges, geotechnical mitigation, and major water infrastructure. As a 100% Sri Lankan-owned enterprise, we pride ourselves on our end-to-end project management capabilities, ensuring that every phase is executed with uncompromising precision, rigorous safety standards, and adherence to international quality protocols.
            </p>\;

const introRegex = /<p style=\{\{ color: "var\(--text-light\)", fontSize: "1\.1rem", lineHeight: 1\.8, marginBottom: "30px", textAlign: "justify" \}\}>\s*Founded in \{COMPANY_DATA\.established\}[\s\S]*?water infrastructure domains\.\s*<\/p>/;

if (introRegex.test(content)) {
    content = content.replace(introRegex, newIntro);
    fs.writeFileSync('src/app/about/company-overview/page.tsx', content, 'utf8');
    console.log('Successfully updated the introduction with more details.');
} else {
    console.log('Could not find the introduction paragraph to replace.');
}
