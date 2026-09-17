const projects = require('./src/app/projects/data.js').default || require('./src/app/projects/data.js');

const anomalies = [];

projects.forEach(p => {
    let expected = p.category;
    const title = p.title.toLowerCase();
    
    // Simple heuristic checks
    if (title.includes('bridge') && p.category !== 'bridges') anomalies.push(p);
    if (title.includes('road') && !title.includes('railway') && p.category !== 'roads') anomalies.push(p);
    if (title.includes('railway') && p.category !== 'railway') anomalies.push(p);
    if (title.includes('landslide') && p.category !== 'disaster') anomalies.push(p);
    if (title.includes('dredging') && p.category !== 'maritime' && p.category !== 'irrigation') anomalies.push(p);
    if ((title.includes('maldives') || title.includes('republic of')) && p.category !== 'overseas') anomalies.push(p);
    if ((title.includes('hospital') || title.includes('building') || title.includes('complex')) && p.category !== 'buildings') anomalies.push(p);
    if ((title.includes('water supply') || title.includes('drainage') || title.includes('sewerage')) && p.category !== 'water') anomalies.push(p);
});

console.log('Possible anomalies by heuristic:');
anomalies.forEach(a => console.log(a.id, '|', a.category, '|', a.title));

console.log('\nAll projects:');
projects.forEach(a => console.log(a.id, '|', a.category, '|', a.title));
