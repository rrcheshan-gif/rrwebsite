const fs = require('fs');
let content = fs.readFileSync('src/app/sustainability/social-responsibility/page.tsx', 'utf8');

const newInitiative =           {/* Initiative Item 2 */}
          <div style={{ background: "var(--white)", borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.05)", border: "1px solid var(--border-soft)", marginBottom: "40px" }}>
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row-reverse" }}>
              <div style={{ flex: 1, padding: isMobile ? "30px" : "50px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span style={{ background: "rgba(229,57,53,0.1)", color: "var(--primary-red)", padding: "6px 16px", borderRadius: "20px", fontSize: "0.9rem", fontWeight: 700, alignSelf: "flex-start", marginBottom: "20px" }}>Community & Heritage</span>
                <h3 style={{ fontSize: "2rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 800, marginBottom: "20px", lineHeight: 1.2 }}>
                  Construction of Muddaragama Chethiyaramaya Temple
                </h3>
                <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                  As part of our continuous commitment to uplifting local communities and preserving cultural heritage, RR Construction proudly contributed to the structural development of the Muddaragama Chethiyaramaya Temple. We recognize that spiritual centers form the heart of rural communities, fostering unity and peace.
                </p>
                <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, textAlign: "justify" }}>
                  By dedicating our engineering expertise and resources to this sacred project, we ensured the delivery of a robust, beautifully crafted space for religious observances. This initiative reflects our core philosophy of giving back to the communities that host our operations, building not just commercial infrastructure, but landmarks of cultural significance.
                </p>
              </div>
              <div style={{ flex: 1, background: "var(--border-soft)", display: "flex" }}>
                <img src="/CSR/csr-temple-1.png" alt="Muddaragama Chethiyaramaya Temple" onClick={() => setLightboxImage('/CSR/csr-temple-1.png')} style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: isMobile ? "250px" : "100%", cursor: "pointer", transition: "transform 0.3s ease" }} onMouseOver={(e) => e.currentTarget.style.transform="scale(1.02)"} onMouseOut={(e) => e.currentTarget.style.transform="scale(1)"} />
              </div>
            </div>
          </div>
;

// Insert the new initiative right before the closing tag of the initiatives section container.
// The container ends right before </section> for CSR Initiatives Showcase.

content = content.replace(/(<\!-- Initiative Item -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>)\s*<\/div>\s*<\/section>/, "\\n" + newInitiative + "\n        </div>\n      </section>");

fs.writeFileSync('src/app/sustainability/social-responsibility/page.tsx', content, 'utf8');
