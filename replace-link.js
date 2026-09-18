const fs = require('fs');
const file = 'src/app/services/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldLinkStr = `{isLink && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '7px', color: 'var(--primary-red)', fontWeight: 700, fontSize: '0.88rem', marginTop: 'auto' }}>
                        Learn more
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}`;

const newLinkStr = `{isLink && (
                      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto', paddingTop: '15px' }}>
                        <div className="btn-glass-red" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 30px !important' }}>
                          Learn more
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    )}`;

if (content.includes("Learn more") && content.includes("isLink &&")) {
  // Use regex to be safe with white space
  const regex = /\{isLink && \(\s*<div style=\{\{ display: 'flex', alignItems: 'center', gap: '7px', color: 'var\(--primary-red\)', fontWeight: 700, fontSize: '0\.88rem', marginTop: 'auto' \}\}>\s*Learn more\s*<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2\.5" strokeLinecap="round" strokeLinejoin="round">\s*<path d="M5 12h14M12 5l7 7-7 7" \/>\s*<\/svg>\s*<\/div>\s*\)\}/;
  content = content.replace(regex, newLinkStr);
  fs.writeFileSync(file, content, 'utf8');
  console.log('Replaced Learn more link with centered glass button in services page.');
} else {
  console.log('Could not find the target string');
}
