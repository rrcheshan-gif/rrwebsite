const fs = require('fs');

const file = 'src/app/about/company-overview/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /<div>\s*<Link href="\/about\/history"[\s\S]*?Read our full History & Milestones <ArrowRight size=\{18\} color="var\(--primary-red\)"\/>\s*<\/Link>\s*<\/div>/;

if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Removed link successfully');
} else {
    console.log('Link not found');
}
