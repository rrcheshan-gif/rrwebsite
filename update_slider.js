const fs = require('fs');
const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /(img:\s*['"])\/images\/home\/slider-maritime-fihladhoo\.jpg(['"])/;

if (regex.test(content)) {
    content = content.replace(regex, "$1/images/home/slider-maritime-gandara.jpeg$2");
    fs.writeFileSync(file, content, 'utf8');
    console.log('Slider image updated successfully');
} else {
    console.log('Regex did not match.');
}
