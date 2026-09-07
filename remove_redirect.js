const fs = require('fs');

let content = fs.readFileSync('next.config.ts', 'utf8');

// replace the line `{ source: '/about/key-data',                destination: '/about/company-overview', permanent: true },` with nothing.

const regex = /\s*\{\s*source:\s*'\/about\/key-data',\s*destination:\s*'\/about\/company-overview',\s*permanent:\s*true\s*\},/;
if (content.match(regex)) {
    content = content.replace(regex, '');
    fs.writeFileSync('next.config.ts', content, 'utf8');
    console.log('Successfully removed the redirect for key-data.');
} else {
    console.log('Regex did not match.');
}
