const fs = require('fs');
let content = fs.readFileSync('src/app/contact/page.tsx', 'utf8');

const startMachine = 9703;
const endPiling = 14763;
const formStart = 17577;
const formEnd = 21707;

console.log("CARDS TO MOVE:\n" + content.substring(startMachine, startMachine + 150) + "...\n..." + content.substring(endPiling - 150, endPiling));

console.log("\n\nFORM BLOCK:\n" + content.substring(formStart, formStart + 150) + "...\n..." + content.substring(formEnd - 150, formEnd));
