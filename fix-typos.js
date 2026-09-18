const fs = require('fs');

function readFiles(dir, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const p = dir + '/' + file;
    if (fs.statSync(p).isDirectory()) {
      readFiles(p, files);
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      files.push(p);
    }
  });
  return files;
}

const allFiles = readFiles('src');

// A list of common spelling errors to look for
const commonTypos = {
  'proffetional': 'professional',
  'proffesional': 'professional',
  'enviornment': 'environment',
  'constuction': 'construction',
  'facilties': 'facilities',
  'accomodate': 'accommodate',
  'acheive': 'achieve',
  'maintanance': 'maintenance',
  'maintainance': 'maintenance',
  'developement': 'development',
  'succesful': 'successful',
  'sucessful': 'successful',
  'responsability': 'responsibility',
  'comittment': 'commitment',
  'committment': 'commitment',
  'equiptment': 'equipment',
  'experiance': 'experience',
  'oppurtunity': 'opportunity',
  'excellance': 'excellence',
  'independant': 'independent',
  'capabilties': 'capabilities',
  'solutons': 'solutions',
  'inovation': 'innovation',
  'sustainabilty': 'sustainability',
  'efficency': 'efficiency',
  'effeciency': 'efficiency',
  'infastructure': 'infrastructure',
  'infrastucture': 'infrastructure',
  'existance': 'existence',
  'garantee': 'guarantee',
  'privilege': 'privilege', // maybe spelled priviledge
  'priviledge': 'privilege',
  'saftey': 'safety',
  'curent': 'current',
  'bussiness': 'business',
  'projetcs': 'projects',
  'foward': 'forward',
  'thourough': 'thorough',
  'thru': 'through',
  'enviroment': 'environment',
  'inovative': 'innovative',
  'stratergy': 'strategy',
  'stratigic': 'strategic',
  'mangement': 'management',
  'mangaement': 'management',
  'enginering': 'engineering',
  'enginering': 'engineering',
  'commited': 'committed'
};

let fixes = 0;

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Let's do case-insensitive search and replace while preserving original case
  for (let [typo, fix] of Object.entries(commonTypos)) {
    const regex = new RegExp("\\b" + typo + "\\b", 'gi');
    content = content.replace(regex, (match) => {
      // Maintain capitalization
      if (match === match.toUpperCase()) return fix.toUpperCase();
      if (match[0] === match[0].toUpperCase()) return fix.charAt(0).toUpperCase() + fix.slice(1);
      return fix;
    });
  }

  // Also fix missing spaces after commas and periods. 
  // Be careful not to break URLs, decimals, or JSX attributes.
  // We'll skip regex for punctuation spacing to avoid breaking code like `w-full,h-full` in tailwind or `Math.random()`.
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed typos in ${file}`);
    fixes++;
  }
});

console.log(`Total files fixed for typos: ${fixes}`);
