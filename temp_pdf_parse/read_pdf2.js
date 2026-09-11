const fs = require('fs');
const PDFParser = require('pdf2json');
const pdfParser = new PDFParser(this, 1);
pdfParser.on('pdfParser_dataError', errData => console.error(errData.parserError));
pdfParser.on('pdfParser_dataReady', pdfData => {
    fs.writeFileSync('../pdf_text.txt', pdfParser.getRawTextContent());
    console.log('PDF text extracted');
});
pdfParser.loadPDF('C:\\Users\\hesha\\.gemini\\antigravity\\brain\\9fc826a5-7a53-46d9-a5da-0f16317973aa\\.tempmediaStorage\\media_1788693560782.pdf');