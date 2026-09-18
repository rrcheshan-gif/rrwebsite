const fs = require('fs');
const file = 'src/app/training/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const newCard = `          <div style={{ background: "var(--white)", padding: "40px", borderRadius: "12px", borderLeft: "5px solid var(--primary-red)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "15px", color: "var(--text-dark)" }}>
              AI & Future Tech Integration
              <span style={{ marginLeft: "15px", fontSize: "0.75rem", background: "var(--primary-red)", color: "white", padding: "4px 10px", borderRadius: "20px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px", verticalAlign: "middle" }}>Upcoming</span>
            </h3>
            <p style={{ color: "var(--text-light)", lineHeight: 1.7 }}>
              Embracing the future of engineering, we are launching a comprehensive <strong>Coursera AI Certification</strong> for our staff. This upcoming program will equip our team with cutting-edge knowledge in Artificial Intelligence, data-driven project management, and automated construction workflows to significantly enhance our operational efficiency and innovation capacity.
            </p>
          </div>
        </div>`;

content = content.replace('        </div>\n      </section>', newCard + '\n      </section>');

// If the newline format is different:
if (content.indexOf(newCard) === -1) {
  content = content.replace('        </div>\r\n      </section>', newCard + '\r\n      </section>');
}

fs.writeFileSync(file, content, 'utf8');
console.log('Added AI Course section to Training page');
