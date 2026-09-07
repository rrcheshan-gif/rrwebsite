const fs = require('fs');

function removeBlock(file, regexStr) {
  let content = fs.readFileSync(file, 'utf8');
  const regex = new RegExp(regexStr);
  if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Removed from ' + file);
  } else {
    console.log('Not found in ' + file);
  }
}

// 1. bridge-construction
removeBlock('src/app/services/bridge-construction/page.tsx', '<div style=\\{\\{ textAlign: \'center\', marginTop: \'48px\' \\}\\}>[\\s\\S]*?<\\/div>');

// 2. maritime-construction 'View all projects'
removeBlock('src/app/services/maritime-construction/page.tsx', '<Link href="\\/projects"[\\s\\S]*?View all projects <ArrowRight size=\\{20\\} \\/>\\s*<\\/Link>');

// 3. maritime-construction 'View Project Category'
removeBlock('src/app/services/maritime-construction/page.tsx', '<div style=\\{\\{ display: \'flex\', alignItems: \'center\', gap: \'8px\', color: \'var\\(--primary-red\\)\', fontWeight: 600, fontSize: \'15px\' \\}\\}>\\s*View Project Category <ArrowRight size=\\{16\\} \\/>\\s*<\\/div>');

// 4. road-construction 'Explore Asphalt Manufacturing'
removeBlock('src/app/services/road-construction/page.tsx', '<Link\\s*href="\\/materials\\/asphalt"[\\s\\S]*?Explore Asphalt Manufacturing <ArrowRight size=\\{18\\} \\/>\\s*<\\/Link>');

// 5. road-construction 'View All Projects'
removeBlock('src/app/services/road-construction/page.tsx', '<div style=\\{\\{ textAlign: \'center\', marginTop: \'40px\' \\}\\}>[\\s\\S]*?View All Projects[\\s\\S]*?<\\/div>');

