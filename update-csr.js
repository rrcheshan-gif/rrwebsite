const fs = require('fs');
let content = fs.readFileSync('src/app/sustainability/social-responsibility/page.tsx', 'utf8');

const newParagraphs = 
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                Large-scale construction inherently impacts local communities. Whether we are driving a new expressway through the heart of the country or mitigating dangerous landslides in the central hills, RR Construction views the local community as a primary stakeholder.
              </p>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                Our Corporate Social Responsibility (CSR) initiatives are deeply integrated into our project planning. We aim to leave every community vastly improved not just by the final infrastructure, but by the economic and social opportunities generated during the construction phase.
              </p>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                We strictly adhere to a policy of transparent communication, conducting comprehensive environmental and social impact assessments before breaking ground. By keeping community leaders informed and actively seeking their input, we ensure that our operational footprint causes zero undue disruption to their daily lives and livelihoods.
              </p>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, textAlign: "justify" }}>
                Furthermore, our commitment to sustainable development means that a portion of our project budget is reinvested directly into the local economy. From sourcing raw materials locally to empowering grassroots vendors, our operations serve as a catalyst for immediate socio-economic upliftment.
              </p>
;

content = content.replace(/<p style=\{\{\s*color:\s*"var\(--text-light\)",\s*fontSize:\s*"1\.1rem",\s*lineHeight:\s*1\.8,\s*marginBottom:\s*"20px"\s*\}\}>[\s\S]*?during the construction phase\.\s*<\/p>/, newParagraphs.trim());

fs.writeFileSync('src/app/sustainability/social-responsibility/page.tsx', content, 'utf8');
