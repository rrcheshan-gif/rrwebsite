const fs = require('fs');
let content = fs.readFileSync('src/app/projects/ongoing/page.tsx', 'utf8');

const oldPara = "RR Construction is currently executing a diverse and expansive portfolio of large-scale infrastructure projects across Sri Lanka. Our ongoing commitments span across critical sectors, including national road networks, major maritime developments, comprehensive water supply systems, and complex structural engineering works. Equipped with our expansive proprietary machinery fleet and unmatched technical expertise, we are continuously driving the nation's infrastructure development forward. Our dedicated engineering and project management teams ensure that every ongoing site progresses seamlessly, consistently delivering high-quality results while adhering to the strictest international standards for occupational health, safety, and environmental sustainability.";

const newPara = "RR Construction is currently executing a diverse and expansive portfolio of large-scale infrastructure projects. Our ongoing commitments span across all critical engineering sectors, including national road networks, complex bridges, comprehensive water supply and irrigation systems, major maritime developments, multi-storey buildings, railway infrastructure, disaster management and landslide mitigation, as well as specialized overseas construction projects. Equipped with our expansive proprietary machinery fleet and unmatched technical expertise, we are continuously driving infrastructure development forward. Our dedicated engineering and project management teams ensure that every ongoing site progresses seamlessly, consistently delivering high-quality results while adhering to the strictest international standards for occupational health, safety, and environmental sustainability.";

content = content.replace(oldPara, newPara);

fs.writeFileSync('src/app/projects/ongoing/page.tsx', content, 'utf8');
console.log('Fixed paragraph');
