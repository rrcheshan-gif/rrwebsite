const fs = require('fs');
const pdf = require('pdf-parse');
let dataBuffer = fs.readFileSync('public/images/RRC Company Profile_compressed.pdf');
pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('audit-summary2.txt', data.text, 'utf8');
    console.log("PDF text extracted to audit-summary2.txt.");
}).catch(err => {
    console.error("Error reading pdf:", err);
});
