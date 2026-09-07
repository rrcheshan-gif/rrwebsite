const fs = require('fs');

const content = fs.readFileSync('src/app/people/page.tsx', 'utf8');

const old1 = 'Our core strength lies in our multidisciplinary team of chartered civil engineers, quantity surveyors, architects, and QA/QC specialists who ensure every project meets global engineering standards.';
const new1 = 'Our core strength lies in our formidable, multidisciplinary team of industry veterans. This includes highly qualified Chartered Civil Engineers, precision-focused Quantity Surveyors, Geotechnical Experts, and meticulous QA/QC Specialists. Together, they deploy advanced engineering methodologies and innovative problem-solving to ensure that every infrastructure project not only meets but consistently exceeds rigorous global engineering benchmarks.';

const old2 = 'The backbone of our operations. We directly employ hundreds of highly trained heavy machinery operators, master masons, steel fixers, and asphalt technicians who bring designs to reality.';
const new2 = 'Recognized as the resilient backbone of our field operations, our direct workforce comprises highly trained, certified heavy machinery operators, master masons, specialized steel fixers, and expert asphalt technicians. By maintaining an extensive in-house roster of seasoned tradespeople, we guarantee uncompromising build quality, strict adherence to aggressive timelines, and the seamless execution of complex structural blueprints on every site.';

const old3 = 'We invest heavily in continuous professional development. From ISO safety training to advanced BIM software workshops, we ensure our team remains at the cutting edge of modern construction methodologies.';
const new3 = 'We are profoundly committed to the continuous professional evolution of our workforce. We invest heavily in structured upskilling programs, ranging from rigorous ISO-certified occupational health and safety training to advanced workshops in modern structural technologies. By empowering our personnel with cutting-edge proficiencies, we foster a culture of perpetual innovation and operational excellence.';

let newContent = content.replace(old1, new1).replace(old2, new2).replace(old3, new3);

fs.writeFileSync('src/app/people/page.tsx', newContent, 'utf8');
console.log('Updated people details successfully');
