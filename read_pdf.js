const fs = require('fs');
const pdf = require('pdf-parse');

const pdfPath = 'C:\\Users\\hesha\\.gemini\\antigravity\\brain\\9fc826a5-7a53-46d9-a5da-0f16317973aa\\.tempmediaStorage\\media_1788693560782.pdf';

let dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('pdf_text.txt', data.text);
    console.log('PDF text extracted to pdf_text.txt');
}).catch(err => {
    console.error('Error parsing PDF', err);
});