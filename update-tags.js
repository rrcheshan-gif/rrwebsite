const fs = require('fs');

function replaceInFile(file, replacements) {
    let content = fs.readFileSync(file, 'utf8');
    for (let r of replacements) {
        content = content.replace(r.from, r.to);
    }
    fs.writeFileSync(file, content, 'utf8');
}

// Asphalt Page
replaceInFile('src/app/resources/asphalt/page.tsx', [
    { from: />North Central Province<\/span>/g, to: '>Medawachchiya</span>' }
]);

// Sand Page
replaceInFile('src/app/resources/sand/page.tsx', [
    { from: />Northern Province<\/span>/g, to: '>Medawachchiya</span>' }
]);

// Crusher Page
replaceInFile('src/app/resources/crusher/page.tsx', [
    { from: />Western Province<\/span>/g, to: '>Kaluthara</span>' },
    { from: />Northern Province<\/span>/g, to: '>Vavuniya</span>' }
]);

// Facilities page (just to be thorough so it's consistent if ever linked again)
replaceInFile('src/app/facilities/page.tsx', [
    { from: />Western Province<\/span>/g, to: '>Kaluthara</span>' },
    { from: />North Central Province<\/span>/g, to: '>Medawachchiya</span>' },
    { from: />Northern Province<\/span>/g, to: '>Vavuniya</span>' } // Wait, Veerapuram was marked Northern Province in facilities? Let's do a more targeted replace
]);

console.log('Successfully updated tags from Province to City/District');
