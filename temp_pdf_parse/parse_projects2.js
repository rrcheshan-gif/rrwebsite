const fs = require('fs');
const pdfText = fs.readFileSync('../pdf_text.txt', 'utf8');

const projects = [];
const blocks = pdfText.split(/Status\s*:\s*Completed/i);

for (let i = 1; i < blocks.length; i++) {
    // The year is usually right after "Completed on "
    const yearMatch = blocks[i].match(/on\s*(\d{4})/i);
    const year = yearMatch ? yearMatch[1] : 'Unknown';

    // The client is usually at the end of blocks[i-1]
    const prevBlock = blocks[i-1];
    const clientMatch = prevBlock.match(/Client\s*:\s*(.*?)$/im);
    const client = clientMatch ? clientMatch[1].trim() : 'Unknown Client';

    // The title is in the first few lines of blocks[i]
    let lines = blocks[i].split('\n').map(l => l.trim()).filter(l => l.length > 0 && !l.includes('Passion for engineering excellence') && !l.includes('----------------Page') && !l.match(/^\d+$/) && !l.startsWith('RR Construction'));
    
    let titleLines = [];
    for(let j=0; j < Math.min(4, lines.length); j++) {
        if (lines[j].startsWith('Contract period') || lines[j].startsWith('Contract Sum') || lines[j].startsWith('Contractor') || lines[j].startsWith('Client')) {
            break;
        }
        if (lines[j].startsWith('on ' + year) || lines[j].startsWith(year)) {
            let cl = lines[j].replace(new RegExp('^on\\\\s*' + year + '\\\\.?'), '').trim();
            if(cl) titleLines.push(cl);
            continue;
        }
        titleLines.push(lines[j]);
    }
    
    let title = titleLines.join(' ').replace(/^on \d{4}\.?\s*/i, '').trim();

    projects.push({
        title, client, year
    });
}
fs.writeFileSync('extracted_projects.json', JSON.stringify(projects, null, 2));
console.log('Found', projects.length, 'projects');
