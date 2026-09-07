const fs = require('fs');

const content = fs.readFileSync('src/app/people/page.tsx', 'utf8');

const oldText = "Recognized as the resilient backbone of our field operations, our direct workforce comprises highly trained, certified heavy machinery operators, master masons, specialized steel fixers, and expert asphalt technicians. By maintaining an extensive in-house roster of seasoned tradespeople, we guarantee uncompromising build quality, strict adherence to aggressive timelines, and the seamless execution of complex structural blueprints on every site.";
const newText = "Recognized as the resilient backbone of our field operations, our direct workforce comprises highly trained, certified heavy machinery operators, master masons, specialized steel fixers, and expert asphalt technicians. We take immense pride in our long-term employee retention, with many of our seasoned tradespeople having been with us since the company's inception. By maintaining this loyal and extensive in-house roster, we guarantee uncompromising build quality, strict adherence to aggressive timelines, and the seamless execution of complex structural blueprints on every site.";

let newContent = content.replace(oldText, newText);

fs.writeFileSync('src/app/people/page.tsx', newContent, 'utf8');
console.log('Updated employee retention details successfully');
