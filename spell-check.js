const fs = require('fs');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('src');
const typos = {
    'accomodation': 'accommodation',
    'enviornment': 'environment',
    'enviroment': 'environment',
    'goverment': 'government',
    'relevent': 'relevant',
    'maintanance': 'maintenance',
    'maintainance': 'maintenance',
    'equiptment': 'equipment',
    'occured': 'occurred',
    'independant': 'independent',
    'succesful': 'successful',
    'comming': 'coming',
    'sucess': 'success'
};

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    let changed = false;
    for (let typo in typos) {
        let regex = new RegExp(typo, 'gi');
        if (regex.test(content)) {
            console.log('Found typo in', f, ':', typo);
            content = content.replace(regex, typos[typo]);
            changed = true;
        }
    }
    if (changed) {
        fs.writeFileSync(f, content, 'utf8');
    }
});
console.log('Done spell check');
