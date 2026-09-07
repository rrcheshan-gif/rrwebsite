const fs = require('fs');
const pdf = require('pdf-parse');
let dataBuffer = fs.readFileSync('public/RR_Construction_Corporate_Profile.pdf');
pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('audit-summary.txt', data.text, 'utf8');
    console.log("PDF text extracted.");
});
