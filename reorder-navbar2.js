const fs = require('fs');
const file = 'src/app/components/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

// The safest way is to find the exact block and replace it using regex
const regex = /<li><Link href="\/services"[\s\S]*?<li><Link href="\/services\/research-development"[\s\S]*?<li><Link href="\/facilities"/;
// Wait, that's not safe enough. Let's just swap the two items globally if they exist close to each other.

const item1 = /<li><Link href="\/services\/research-development" onClick=\{[^}]+\}>Research &amp; Development<\/Link><\/li>/;
const item2 = /<li><Link href="\/facilities" onClick=\{[^}]+\}>Quarries &amp; Aggregates<\/Link><\/li>/;

const match1 = content.match(item1);
const match2 = content.match(item2);

if (match1 && match2) {
  content = content.replace(match1[0], '%%ITEM1%%');
  content = content.replace(match2[0], '%%ITEM2%%');
  
  content = content.replace('%%ITEM1%%', match2[0]);
  content = content.replace('%%ITEM2%%', match1[0]);
  
  fs.writeFileSync(file, content, 'utf8');
  console.log('Swapped successfully');
} else {
  console.log('Could not find matches');
}
