const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walkDir(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walkDir('src');
let changedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    // Convert hex representations back to string to avoid terminal encoding issues
    const EM_DASH = String.fromCharCode(0xE2, 0x80, 0x94);
    const EN_DASH = String.fromCharCode(0xE2, 0x80, 0x93);
    const RIGHT_SINGLE_QUOTE = String.fromCharCode(0xE2, 0x80, 0x99);
    const LEFT_DOUBLE_QUOTE = String.fromCharCode(0xE2, 0x80, 0x9C);
    const RIGHT_DOUBLE_QUOTE = String.fromCharCode(0xE2, 0x80, 0x9D);
    const LEFT_ARROW = String.fromCharCode(0xE2, 0x86, 0x90);
    
    // Instead of raw weird bytes, we'll replace the exact bad byte sequences that Next.js read
    // from the badly encoded files.
    // If the files were saved as Latin1 but contained UTF-8, they have literal characters like 'â€“'
    // 'â' is \xC3\xA2
    // '€' is \xE2\x82\xAC
    // '”' is \xE2\x80\x9D
    
    // Safest way is just to replace the specific substrings
    content = content.replace(/â€”/g, '—');
    content = content.replace(/â€“/g, '–');
    content = content.replace(/â€™/g, '\'');
    content = content.replace(/â€œ/g, '"');
    content = content.replace(/â€/g, '"');
    
    // Replace the exact error strings from cspell and grep
    content = content.replace(/Lankaâ€/g, 'Lanka\'s');
    content = content.replace(/capabilitiesâ€/g, 'capabilities');
    content = content.replace(/nationâ€/g, 'nation\'s');
    content = content.replace(/organizationâ€/g, 'organization\'s');
    content = content.replace(/materialsâ€”/g, 'materials—');
    content = content.replace(/asphaltâ€”/g, 'asphalt—');

    // Also look for literal '?' followed by '"' or 'T'
    content = content.replace(/\?\"/g, '—');
    content = content.replace(/\?Ts/g, '\'s');
    content = content.replace(/\?\+/g, '←');
    content = content.replace(/\+\?/g, '←');
    content = content.replace(/\+\?/g, '←'); // replacement char + ?
    content = content.replace(/\+'/g, '←'); 
    content = content.replace(/\?"/g, '—'); 
    content = content.replace(/\?Ts/g, '\'s'); 

    // Handle generic ''
    // Usually '' in text is a corrupted apostrophe, dash, or quote.
    // Let's replace instances found manually:
    content = content.replace(/were/gi, "we're");
    content = content.replace(/Sri Lankas/gi, "Sri Lanka's");
    content = content.replace(/nations/gi, "nation's");
    content = content.replace(/organizations/gi, "organization's");
    
    // Let's just fix the rest manually if any remain.

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        changedFiles++;
        console.log('Fixed:', file);
    }
});

console.log('Total files fixed:', changedFiles);
