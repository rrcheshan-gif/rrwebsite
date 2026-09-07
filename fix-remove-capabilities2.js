const fs = require('fs');
let content = fs.readFileSync('src/app/about/company-overview/page.tsx', 'utf8');

const regex = /<div style={{ textAlign: "center", marginBottom: "60px", maxWidth: "800px", margin: "0 auto 60px" }}>[\s\S]*?\}\)\]\}\n\s*<\/div>/;

if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync('src/app/about/company-overview/page.tsx', content, 'utf8');
    console.log('Successfully removed the capabilities grid.');
} else {
    console.log('Regex did not match.');
}
