const fs = require('fs');

const content = fs.readFileSync('src/app/sustainability/social-responsibility/page.tsx', 'utf8');

const old1 = 'Through projects like the iRoad program and rural bridge reconstructions, we directly stimulate local agrarian economies by drastically cutting transport times for farmers reaching urban markets.';
const new1 = 'Through strategic infrastructure developments such as the iRoad program and critical rural bridge reconstructions, we play a pivotal role in bridging the urban-rural divide. By systematically enhancing regional connectivity, we directly stimulate local agrarian economies, drastically reducing transport times for agricultural supply chains, and facilitating seamless access to urban markets and essential services for remote communities.';

const old2 = 'We actively hire youth from regions adjacent to our major sites (like the Central Expressway or Northern Railway), providing them with invaluable hands-on technical training and long-term career paths in heavy civil engineering.';
const new2 = 'We are deeply committed to community empowerment through localized workforce integration. By actively recruiting and mentoring youth from regions adjacent to our major infrastructure sites—such as the Central Expressway and large-scale maritime projects—we provide invaluable, hands-on technical training. This proactive knowledge transfer equips the next generation with specialized skills, creating sustainable, long-term career trajectories in the heavy civil engineering sector.';

const old3 = 'During urban water supply works or high-traffic road rehabilitation, we employ rigorous traffic management and night-time operation schedules to ensure the daily lives of citizens are not heavily hindered by our operations.';
const new3 = 'Executing complex projects in densely populated urban centers demands meticulous logistical planning. During critical water infrastructure upgrades and high-traffic road rehabilitations, we deploy advanced traffic management protocols and strategically phased night-time operations. Our uncompromising commitment to operational efficiency ensures that public safety is prioritized and the daily routines of citizens remain undisturbed, minimizing civic disruption while maximizing project momentum.';

let newContent = content.replace(old1, new1).replace(old2, new2).replace(old3, new3);

fs.writeFileSync('src/app/sustainability/social-responsibility/page.tsx', newContent, 'utf8');
console.log('Updated making an impact details successfully');
