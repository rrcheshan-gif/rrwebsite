const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldCode = \              >
                {[
                  { name: "ROAD DEVELOPMENT AUTHORITY" },
                  { name: "NATIONAL WATER BOARD" },
                  { name: "U.D.A. SRI LANKA" },
                  { name: "MINISTRY OF IRRIGATION" },
                  { name: "IRCON INTERNATIONAL" }
                ].map((client, idx) => (
                  <div 
                    key={idx} 
                    className="glass-panel hover-lift" 
                    style={{ 
                      padding: "9px 20px", 
                      borderRadius: "50px", 
                      border: "1px solid var(--border-soft)", 
                      background: "white",
                      display: "flex", 
                      alignItems: "center", 
                      gap: "6px" 
                    }}
                  >
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--primary-red)" }}></div>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-dark)", letterSpacing: "0.5px" }}>
                      {client.name}
                    </span>
                  </div>\;

const newCode = \              >
                {[
                  { name: "ROAD DEVELOPMENT AUTHORITY", logo: "/images/clients/rda.png" },
                  { name: "NATIONAL WATER BOARD", logo: "/images/clients/nwsdb.png" },
                  { name: "U.D.A. SRI LANKA", logo: "/images/clients/uda.png" },
                  { name: "MINISTRY OF IRRIGATION", logo: "/images/clients/irrigation.png" },
                  { name: "IRCON INTERNATIONAL", logo: "/images/clients/ircon.png" }
                ].map((client, idx) => (
                  <div 
                    key={idx} 
                    className="glass-panel hover-lift" 
                    style={{ 
                      padding: "8px 20px 8px 10px", 
                      borderRadius: "50px", 
                      border: "1px solid var(--border-soft)", 
                      background: "white",
                      display: "flex", 
                      alignItems: "center", 
                      gap: "10px" 
                    }}
                  >
                    <div style={{ width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={client.logo} alt={client.name} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                    </div>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-dark)", letterSpacing: "0.5px" }}>
                      {client.name}
                    </span>
                  </div>\;

content = content.replace(oldCode, newCode);
fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Updated clients with logos');
