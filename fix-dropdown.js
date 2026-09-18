const fs = require('fs');
let content = fs.readFileSync('src/app/components/Navbar.tsx', 'utf8');

content = content.replace(/>Asphalt<\/Link>/, '>RR Asphalt</Link>');
content = content.replace(/>Crusher<\/Link>/, '>RR Crusher</Link>');
content = content.replace(/>Sand<\/Link>/, '>RR Sand</Link>');
content = content.replace(/>Concrete<\/Link>/, '>RR Concrete</Link>');

fs.writeFileSync('src/app/components/Navbar.tsx', content, 'utf8');
console.log('Updated Resources dropdown names');
