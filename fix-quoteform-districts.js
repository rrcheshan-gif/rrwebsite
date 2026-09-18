const fs = require('fs');
const file = 'src/app/components/QuoteForm.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace('Thudugala Plant (Western Province)', 'Thudugala Plant (Kalutara)');
content = content.replace('Veerapuram M Sand & Crusher (North Central)', 'Veerapuram M Sand & Crusher (Medawachchiya)');
content = content.replace('Omanthai Plant (Northern Province)', 'Omanthai Plant (Vavuniya)');
content = content.replace('Yakawewa Asphalt Plant (North Central)', 'Yakawewa Asphalt Plant (Medawachchiya)');

fs.writeFileSync(file, content, 'utf8');
console.log('Updated QuoteForm location labels');
