const fs = require('fs');
let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');

const oldText = "{COMPANY_DATA.name} is a Sri Lankan heavy civil engineering and construction company established in {COMPANY_DATA.established}. Over the last {COMPANY_DATA.yearsOfExcellence} years, the organization has progressed to establish a strong presence in the infrastructure development industry in {COMPANY_DATA.headquarters}.";

const newText = "Founded in {COMPANY_DATA.established}, {COMPANY_DATA.name} stands at the forefront of Sri Lanka's heavy civil engineering and infrastructure development sector. Over the past {COMPANY_DATA.yearsOfExcellence} years, we have systematically expanded our operational capabilities to deliver complex, large-scale engineering solutions that drive national progress. By integrating an expansive, self-owned fleet of specialized heavy machinery with the technical acumen of our elite engineering divisions, we consistently execute high-stakes projects across maritime, highway, bridge, and water infrastructure domains. Our unwavering commitment to precision, safety, and international quality standards has cemented our reputation as a trusted, uncompromising leader in shaping the nation’s most critical infrastructure.";

content = content.replace(oldText, newText);

fs.writeFileSync('src/app/about/company-overview/page.tsx', content, 'utf8');
console.log('Company overview updated.');
