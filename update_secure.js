const fs = require('fs');

const path = 'src/app/career/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const pmCard = `              <div className="career-job-card">
                <div className="career-job-header">
                  <h4 style={{ fontSize: "1.3rem", color: "var(--primary-red)", fontFamily: "var(--font-heading)", margin: 0 }}>Project Manager (Civil)</h4>
                  <span style={{ background: "rgba(229,57,53,0.1)", color: "var(--primary-red)", padding: "5px 12px", borderRadius: "15px", fontSize: "0.8rem", fontWeight: 600 }}>Full Time</span>
                </div>
                <p style={{ color: "var(--text-light)", fontSize: "0.95rem", marginBottom: "12px", display: "flex", alignItems: "center", gap: "5px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg> Colombo / Site Locations
                </p>
                <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>B.Sc. in Civil Engineering with minimum 10 years of experience in large-scale road and bridge projects.</p>
              </div>\n`;

const seCard = `
              <div className="career-job-card">
                <div className="career-job-header">
                  <h4 style={{ fontSize: "1.3rem", color: "var(--primary-red)", fontFamily: "var(--font-heading)", margin: 0 }}>Site Engineer</h4>
                  <span style={{ background: "rgba(229,57,53,0.1)", color: "var(--primary-red)", padding: "5px 12px", borderRadius: "15px", fontSize: "0.8rem", fontWeight: 600 }}>Full Time</span>
                </div>
                <p style={{ color: "var(--text-light)", fontSize: "0.95rem", marginBottom: "12px", display: "flex", alignItems: "center", gap: "5px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg> Various Project Sites
                </p>
                <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>B.Sc. Engineering or NDES/HNDE/NCT with 3+ years experience in maritime or highway construction.</p>
              </div>\n`;

content = content.replace(pmCard, '');
content = content.replace(seCard, '');

// Remove Project Manager option
content = content.replace(
    /                      <option value="Project Manager">Project Manager \(Civil\)<\/option>\n/,
    ''
);

// Remove Site Engineer option
content = content.replace(
    /                      <option value="Site Engineer">Site Engineer<\/option>\n/,
    ''
);

fs.writeFileSync(path, content, 'utf8');
console.log('Vacancies removed securely.');
