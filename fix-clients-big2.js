const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /<div \s*style=\{\{\s*display: "flex",\s*flexWrap: "wrap",\s*justifyContent: "center",\s*alignItems: "center",\s*gap: "10px 14px",\s*width: "100%",\s*maxWidth: "1100px"\s*\}\}\s*>\s*\{\[\s*\{\s*name:\s*'ROAD DEVELOPMENT AUTHORITY'[\s\S]*?<\/span>\s*<\/div>\s*\)\)\}\s*<\/div>/;

const newBlock = '<div \n' +
'                style={{ \n' +
'                  display: "flex", \n' +
'                  flexWrap: "wrap", \n' +
'                  justifyContent: "center", \n' +
'                  alignItems: "center", \n' +
'                  gap: "20px", \n' +
'                  width: "100%", \n' +
'                  maxWidth: "1100px" \n' +
'                }}\n' +
'              >\n' +
'                {[\n' +
'                  { name: "ROAD DEVELOPMENT AUTHORITY", logo: "/images/clients/rda.png" },\n' +
'                  { name: "NATIONAL WATER BOARD", logo: "/images/clients/nwsdb.png" },\n' +
'                  { name: "U.D.A. SRI LANKA", logo: "/images/clients/uda.png" },\n' +
'                  { name: "MINISTRY OF IRRIGATION", logo: "/images/clients/irrigation.png" },\n' +
'                  { name: "IRCON INTERNATIONAL", logo: "/images/clients/ircon.png" }\n' +
'                ].map((client, idx) => (\n' +
'                  <div \n' +
'                    key={idx} \n' +
'                    className="glass-panel hover-lift" \n' +
'                    style={{ \n' +
'                      padding: "15px 25px", \n' +
'                      borderRadius: "16px", \n' +
'                      border: "1px solid var(--border-soft)", \n' +
'                      background: "white",\n' +
'                      boxShadow: "0 10px 30px rgba(0,0,0,0.04)",\n' +
'                      display: "flex", \n' +
'                      alignItems: "center", \n' +
'                      gap: "18px",\n' +
'                      width: "min(100%, 340px)"\n' +
'                    }}\n' +
'                  >\n' +
'                    <div style={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>\n' +
'                      <img src={client.logo} alt={client.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />\n' +
'                    </div>\n' +
'                    <span style={{ fontSize: "1rem", fontWeight: 800, color: "var(--text-dark)", letterSpacing: "0.5px", lineHeight: 1.3 }}>\n' +
'                      {client.name}\n' +
'                    </span>\n' +
'                  </div>\n' +
'                ))}\n' +
'              </div>';

content = content.replace(regex, newBlock);
fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Updated clients to big cards');
