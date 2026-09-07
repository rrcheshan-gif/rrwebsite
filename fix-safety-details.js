const fs = require('fs');
let content = fs.readFileSync('src/app/sustainability/health-and-safety/page.tsx', 'utf8');

const old1 = 'Before any major excavation or structural lift, our Safety Officers conduct exhaustive hazard assessments. In high-risk environments like deep maritime dredging or steep-gradient landslide mitigations, proactive monitoring is constant.';
const new1 = 'Risk mitigation begins long before ground is broken. Prior to any major excavation or complex structural lift, our certified Health and Safety (HSE) Professionals execute exhaustive, multi-tiered hazard assessments. In exceptionally high-risk environments—such as deep maritime dredging or steep-gradient landslide mitigations—we deploy advanced predictive analysis and continuous proactive monitoring to neutralize threats before they materialize.';

const old2 = 'With a massive internal fleet of {COMPANY_DATA.machineryFleet} machines, mechanical failure is a major safety risk. We enforce rigorous daily inspections and scheduled maintenance cycles to prevent catastrophic equipment failures on site.';
const new2 = 'Managing an extensive internal fleet of over {COMPANY_DATA.machineryFleet} heavy machines necessitates an uncompromising approach to mechanical integrity. We enforce rigorous, daily multipoint inspections and strict preventive maintenance cycles. This systematic approach eradicates the risk of catastrophic equipment failures on-site, ensuring both personnel safety and seamless operational continuity.';

const old3 = 'PPE is useless without proper knowledge. We invest heavily in ongoing occupational health training, ensuring that our {COMPANY_DATA.workforce} workers understand the precise physics and dangers of the materials they handle.';
const new3 = 'Personal Protective Equipment (PPE) is only the first line of defense; true safety stems from profound technical competence. We invest heavily in continuous, specialized occupational health and safety training for our {COMPANY_DATA.workforce} personnel. By ensuring that every worker fundamentally understands the mechanics and latent hazards of their specific tasks, we foster an instinctual, proactive safety culture across all divisions.';

const old4 = 'We actively prevent work-related injuries and occupational ill health. By continuously monitoring site conditions and ensuring all workers use properly selected Personal Protective Equipment (PPE), we protect our workforce from preventable harm.';
const new4 = 'The holistic well-being of our workforce is a paramount corporate priority. Beyond standard accident prevention, we proactively combat occupational ill health through ergonomic assessments, continuous ambient site monitoring, and stringent health protocols. By equipping our personnel with meticulously selected, task-specific Personal Protective Equipment (PPE), we create a highly secure work environment free from preventable harm.';

content = content.replace(old1, new1).replace(old2, new2).replace(old3, new3).replace(old4, new4);
fs.writeFileSync('src/app/sustainability/health-and-safety/page.tsx', content, 'utf8');
console.log('Updated Health and Safety details');
