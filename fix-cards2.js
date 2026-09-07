const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /\{\/\* Large background decorative number \*\/\}\s*<div style=\{\{ position: "absolute", right: "-50px"[\s\S]*?<\/p>\s*<\/div>\s*<\/div>\s*\)\)\}\s*<\/div>/;

const newBlock = "{/* Large background decorative number */}\n" +
"               {[\n" +
"                 { icon: <Anchor color=\"white\" size={24} />, title: \"Wellamankara Fishery Harbor\", text: \"Major maritime development\" },\n" +
"                 { icon: <Anchor color=\"white\" size={24} />, title: \"Gandara Fishery Harbour\", text: \"Major maritime development\" },\n" +
"                 { icon: <GitMerge color=\"white\" size={24} />, title: \"Matara Mahanama Bridge\", text: \"116.4m Strategic crossing\" }\n" +
"               ].map((proj, i) => (\n" +
"                  <div key={i} className=\"glass-panel hover-lift\" style={{ display: \"flex\", alignItems: \"center\", gap: \"20px\", padding: \"18px 24px\", position: \"relative\", zIndex: 1, transition: \"transform 0.3s ease, box-shadow 0.3s ease\", cursor: \"pointer\", background: \"var(--white)\", border: \"1px solid var(--border-soft)\" }} onMouseOver={(e) => { e.currentTarget.style.transform = \"translateY(-5px)\"; e.currentTarget.style.boxShadow = \"0 20px 40px rgba(0,0,0,0.05)\" }} onMouseOut={(e) => { e.currentTarget.style.transform = \"none\"; e.currentTarget.style.boxShadow = \"none\" }}>\n" +
"                    <div style={{ width: \"50px\", height: \"50px\", background: \"var(--primary-red)\", borderRadius: \"14px\", display: \"flex\", alignItems: \"center\", justifyContent: \"center\", flexShrink: 0, boxShadow: \"0 10px 20px rgba(229,57,53,0.2)\" }}>\n" +
"                      {proj.icon}\n" +
"                    </div>\n" +
"                    <div style={{ flex: 1 }}>\n" +
"                      <h4 style={{ color: \"var(--text-dark)\", fontSize: \"1.1rem\", marginBottom: \"4px\", fontFamily: \"var(--font-heading)\" }}>{proj.title}</h4>\n" +
"                      <p style={{ color: \"var(--text-light)\", fontSize: \"0.95rem\", margin: 0 }}>{proj.text}</p>\n" +
"                    </div>\n" +
"                  </div>\n" +
"                ))}\n" +
"            </div>";

content = content.replace(regex, newBlock);
fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Fixed cards layout and removed 03');
