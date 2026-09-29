const fs = require('fs');
let content = fs.readFileSync('src/app/contact/page.tsx', 'utf8');
let newBlock = fs.readFileSync('newBlock.txt', 'utf8');

const regex = /(<iframe src="https:\/\/maps\.google\.com\/maps\?q=RRC%20Main%20Warehouse[^>]+><\/iframe>\s*<\/div>\s*<\/div>)/;

if (regex.test(content)) {
    content = content.replace(regex, '1\n\n' + newBlock);
    fs.writeFileSync('src/app/contact/page.tsx', content, 'utf8');
    console.log("Inserted Machine Yard successfully via Regex.");
} else {
    console.log("Regex failed.");
}
