const fs = require('fs');

const pdfText = fs.readFileSync('pdf_text.txt', 'utf8');
const dataJs = fs.readFileSync('../src/app/projects/data.js', 'utf8');

// A very robust parser for the specific PDF format.
// The PDF has entries like:
// Title line (sometimes multi-line)
// Contract period : ...
// Contract Sum : ...
// Contractor : ...
// Client : ...
// Status : Completed on 2024
const projects = [];
const lines = pdfText.split('\n').map(l => l.trim()).filter(l => l.length > 0);

for (let i = 0; i < lines.length; i++) {
  if (lines[i].startsWith('Status') && lines[i].includes('Completed')) {
    let yearMatch = lines[i].match(/Completed.*?(\d{4})/i);
    let year = yearMatch ? yearMatch[1] : '';
    
    // go up to find the client
    let client = 'Unknown Client';
    let j = i - 1;
    while(j > Math.max(0, i-10)) {
        if (lines[j].startsWith('Client')) {
            client = lines[j].replace(/Client\s*:\s*/, '').trim();
            break;
        }
        j--;
    }
    
    // go up further to find the title. 
    // Title is usually above 'Contract period' or 'Client'.
    // Let's find 'Contract period' or the start of the block.
    let title = '';
    let k = i - 1;
    let foundStart = false;
    while(k > Math.max(0, i-20)) {
        if (lines[k].includes('----------------Page') || lines[k].includes('Passion for engineering excellence')) {
            break;
        }
        if (lines[k].startsWith('Client') || lines[k].startsWith('Contractor') || lines[k].startsWith('Contract Sum') || lines[k].startsWith('Contract period')) {
            // skip these
        } else if (lines[k].match(/^[A-Z\s]+$/) && lines[k].length > 15) {
            // Might be a section header like 'ROAD DISASTER MANAGEMENT PROJECTS'
        } else {
            // This could be part of the title! 
            // In the text, the title is usually immediately after the previous project's status, or at the start of a page.
            // Wait, looking at the previous output, the title is actually BELOW the Status line sometimes? No, the title is broken up.
            // Let's print out the context around each match to debug it first.
        }
        k--;
    }
  }
}
console.log('Script created.');