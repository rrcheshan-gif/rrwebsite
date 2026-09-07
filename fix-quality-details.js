const fs = require('fs');
let content = fs.readFileSync('src/app/sustainability/quality-management/page.tsx', 'utf8');

const old1 = 'By relying on our own heavy machinery fleet and self-operated crusher plants, we completely control the supply chain. This eliminates the risk of third-party delays or substandard aggregate materials entering our construction sites.';
const new1 = 'By leveraging our expansive, self-owned heavy machinery fleet and strategically operated crusher and asphalt plants, we maintain uncompromising command over our entire supply chain. This robust vertical integration effectively eradicates the risk of third-party logistical delays and ensures that only premium, rigorously tested aggregate materials are utilized across all our high-stakes construction sites.';

const old2 = 'Before an asphalt layer is laid on the Central Expressway or concrete is poured for a bridge pier, it undergoes strict laboratory testing. Core sampling, compaction tests, and load-bearing verifications are standard operating procedures.';
const new2 = 'Quality assurance is embedded at the core of our operations. Before a single asphalt layer is applied to a major expressway or a structural concrete pour commences, materials undergo exhaustive laboratory analysis. Comprehensive core sampling, precision compaction tests, and stringent load-bearing verifications form the baseline of our non-negotiable standard operating procedures.';

const old3 = 'Our sites are monitored by highly experienced Chartered Engineers and Senior Quantity Surveyors. We catch deviations from technical specifications early, ensuring every milestone is achieved right the first time.';
const new3 = 'Every project site operates under the vigilant, hands-on oversight of highly seasoned Chartered Civil Engineers and Senior Quantity Surveyors. This elite technical supervision enables us to preemptively identify and rectify any deviations from critical engineering specifications, guaranteeing that every structural milestone is executed with absolute precision and strict adherence to international standards.';

content = content.replace(old1, new1).replace(old2, new2).replace(old3, new3);
fs.writeFileSync('src/app/sustainability/quality-management/page.tsx', content, 'utf8');
console.log('Updated Quality Management details');
