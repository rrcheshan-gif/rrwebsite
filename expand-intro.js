const fs = require('fs');

let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');

const oldIntro = \<p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "30px", textAlign: "justify" }}>
              By integrating an expansive, self-owned fleet of state-of-the-art heavy machinery with the technical acumen of our elite engineering divisions, we consistently execute high-stakes projects across diverse domains - including maritime structures, national highways, complex bridges, geotechnical mitigation, and major water infrastructure. As a 100% Sri Lankan-owned enterprise, we pride ourselves on our end-to-end project management capabilities, ensuring that every phase is executed with uncompromising precision, rigorous safety standards, and adherence to international quality protocols.
            </p>\;

const newIntro = \<p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
              By integrating an expansive, self-owned fleet of state-of-the-art heavy machinery with the technical acumen of our elite engineering divisions, we consistently execute high-stakes projects across diverse domains - including maritime structures, national highways, complex bridges, geotechnical mitigation, and major water infrastructure. As a 100% Sri Lankan-owned enterprise, we pride ourselves on our end-to-end project management capabilities, ensuring that every phase is executed with uncompromising precision, rigorous safety standards, and adherence to international quality protocols.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
              Our success is built upon the dedication of a highly skilled workforce of over {COMPANY_DATA.workforce} professionals who share a unified vision for engineering excellence. Unlike many in the industry, our reliance on third-party dependencies is minimal; our massive proprietary fleet of {COMPANY_DATA.machineryFleet} heavy machines, alongside in-house aggregate production plants, guarantees that we maintain total control over project timelines, material quality, and operational efficiency.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "30px", textAlign: "justify" }}>
              Beyond just building physical structures, we are deeply committed to sustainable construction practices and community empowerment. Every project we undertake is guided by a profound responsibility to protect the environment and prioritize the health and safety of everyone involved. As we look to the future, {COMPANY_DATA.name} remains dedicated to pioneering innovative engineering methodologies and delivering resilient infrastructure that will empower Sri Lanka\\'s economic growth for generations to come.
            </p>\;

content = content.replace(oldIntro, newIntro.replace(/\\\\'/g, "'")); // Handle escaped quote just in case

fs.writeFileSync('src/app/about/company-overview/page.tsx', content, 'utf8');
