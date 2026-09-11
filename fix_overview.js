const fs = require('fs');
const file = 'src/app/about/company-overview/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const startStr = '          {/* Full Width Introduction Text */}';
const endStr = '          </div>\r\n        </div>\r\n      </section>';
const endStr2 = '          </div>\n        </div>\n      </section>';

const startIndex = content.indexOf(startStr);
const endIndex = Math.max(content.indexOf(endStr), content.indexOf(endStr2));

if (startIndex === -1 || endIndex === -1) {
  console.log('Could not find markers', startIndex, endIndex);
  process.exit(1);
}

const newStr = \          {/* Full Width Introduction Text */}
          <div style={{ width: "100%" }}>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", }}>
              Founded in 1995, <strong>RR Construction (Pvt) Ltd</strong> is a leading <strong>construction and civil engineering company in Sri Lanka</strong>, specializing in heavy civil engineering, infrastructure development, and large-scale construction projects. With more than three decades of industry experience, we have continuously expanded our technical expertise, resources, and operational capabilities to become a trusted Sri Lankan engineering and construction organization.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", }}>
              Our expertise covers a wide range of infrastructure development services, including <strong>road construction in Sri Lanka, highway construction, bridge construction, maritime and marine construction, geotechnical engineering, water infrastructure, and major civil engineering projects</strong>. Through our experienced engineering teams, skilled workforce, modern construction technology, and extensive equipment resources, we deliver complex projects with a strong focus on quality, safety, efficiency, and timely completion.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", }}>
              As a <strong>100% Sri Lankan-owned construction company</strong>, RR Construction provides integrated project delivery capabilities covering planning, engineering, construction, resource management, quality control, and project execution. Our in-house resources allow us to maintain greater control over construction schedules, material quality, equipment availability, and overall project performance, helping us deliver reliable and cost-effective infrastructure solutions.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", }}>
              With a workforce of <strong>over 1,400 skilled professionals</strong> and a proprietary fleet of <strong>more than 1,000 heavy construction machines</strong>, RR Construction has the capacity to undertake major infrastructure and civil engineering projects across Sri Lanka. Our operational capabilities are further strengthened by <strong>in-house aggregate production facilities</strong>, supporting efficient material supply and greater consistency in construction quality.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", }}>
              Our capabilities extend beyond conventional construction. We undertake <strong>maritime construction and marine infrastructure projects</strong>, road and highway development, bridge construction, geotechnical and earthwork solutions, water infrastructure, and other specialized civil engineering works. Our integrated approach enables us to manage demanding projects while maintaining high standards of engineering quality, occupational health and safety, environmental responsibility, and project efficiency.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "20px", }}>
              At RR Construction, we believe that sustainable infrastructure development is essential to the long-term growth of Sri Lanka. We are committed to responsible construction practices that protect the environment, promote safe working conditions, support local communities, and create infrastructure that delivers lasting value.
            </p>
            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "30px", }}>
              With a strong foundation built over more than 30 years, RR Construction (Pvt) Ltd continues to pursue <strong>engineering excellence, innovation, sustainable construction, and infrastructure development in Sri Lanka</strong>. Our goal is to remain a trusted partner for clients seeking reliable construction, civil engineering, road development, maritime construction, and infrastructure solutions across the country.
            </p>
            
\;

content = content.substring(0, startIndex) + newStr + content.substring(endIndex);

fs.writeFileSync(file, content, 'utf8');
console.log("Done replacing.");