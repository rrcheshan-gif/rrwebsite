const fs = require('fs');
const path = require('path');

// 1. Create clean directories
const baseDest = path.join('public', 'images', 'projects');
if (!fs.existsSync(baseDest)) fs.mkdirSync(baseDest, { recursive: true });

const hulhudhooDest = path.join(baseDest, 'hulhudhoo');
if (!fs.existsSync(hulhudhooDest)) fs.mkdirSync(hulhudhooDest, { recursive: true });

const filadhooDest = path.join(baseDest, 'filadhoo');
if (!fs.existsSync(filadhooDest)) fs.mkdirSync(filadhooDest, { recursive: true });

// 2. Copy Hulhudhoo images
const hulhudhooSrc = path.join('public', 'images', 'IMAGES', 'hulhudo');
let hulhudhooPaths = [];
if (fs.existsSync(hulhudhooSrc)) {
    const files = fs.readdirSync(hulhudhooSrc).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
    files.forEach((f, i) => {
        const ext = path.extname(f);
        const newName = \img\\\;
        fs.copyFileSync(path.join(hulhudhooSrc, f), path.join(hulhudhooDest, newName));
        hulhudhooPaths.push(\/images/projects/hulhudhoo/\\);
    });
}

// 3. Copy Filadhoo images
const filadhooSrc = path.join('public', 'images', 'IMAGES', 'Photos - Fihladhoo', 'New folder (2)');
let filadhooPaths = [];
if (fs.existsSync(filadhooSrc)) {
    const files = fs.readdirSync(filadhooSrc).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg'));
    files.forEach((f, i) => {
        const ext = path.extname(f);
        const newName = \img\\\;
        fs.copyFileSync(path.join(filadhooSrc, f), path.join(filadhooDest, newName));
        filadhooPaths.push(\/images/projects/filadhoo/\\);
    });
}

// 4. Update data.js
let dataContent = fs.readFileSync('src/app/projects/data.js', 'utf8');

// A function to replace a project's heroImage and galleryImages
function updateProject(content, titleSearch, heroImg, galleryArray) {
    const lines = content.split('\n');
    let inProject = false;
    let foundTitle = false;
    let result = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes(titleSearch)) {
            foundTitle = true;
            result.push(line);
            result.push(\      heroImage: '\',\);
            result.push(\      galleryImages: \,\);
            
            // Now skip any existing heroImage or galleryImages in the old structure
            let j = i + 1;
            while(j < lines.length) {
                if (lines[j].includes('heroImage:') || lines[j].includes('galleryImages:')) {
                    // skip these lines, also skip the array block if it's galleryImages
                    if (lines[j].includes('galleryImages: [')) {
                        while(!lines[j].includes('],') && !lines[j].includes('] ,') && j < lines.length) {
                            j++;
                        }
                    }
                    j++;
                } else {
                    break;
                }
            }
            i = j - 1; // Advance main loop
        } else {
            result.push(line);
        }
    }
    return result.join('\n');
}

if (hulhudhooPaths.length > 0) {
    dataContent = updateProject(dataContent, 'Coastal Protection Structures in Seenu Hulhudhoo', hulhudhooPaths[0], hulhudhooPaths);
    console.log('Updated Hulhudhoo in data.js');
}
if (filadhooPaths.length > 0) {
    dataContent = updateProject(dataContent, 'Ha. Filadhoo Harbour Construction', filadhooPaths[0], filadhooPaths);
    console.log('Updated Filadhoo in data.js');
}

fs.writeFileSync('src/app/projects/data.js', dataContent, 'utf8');
console.log('Done organizing images and updating data.js.');
