const fs = require('fs');

let content = fs.readFileSync('src/app/projects/data.js', 'utf8');

content = content.replace(
  /title: "Landslide Mitigation Measures at 07 Location in Badulla District \\(Package 10D of RLVMMP\\)",[\\s\\S]*?status: "Ongoing",/g,
  'title: "Landslide Mitigation Measures at 07 Location in Badulla District (Package 10D of RLVMMP)",\n    client: "Ministry of Defence, Disaster Management Division",\n    duration: "270 Days",\n    year: 2025,\n    status: "Ongoing",\n    description: "This critical disaster management initiative focuses on stabilizing high-risk slopes across 7 vulnerable locations in the Badulla District. Executed on behalf of the Ministry of Defence, the project integrates advanced geotechnical engineering techniques including soil nailing, retaining wall construction, and improved surface drainage systems. By mitigating landslide risks, RR Construction is actively protecting local communities, vital infrastructure, and ensuring the long-term safety of the region\'s transport network.",'
);

content = content.replace(
  /title: "Landslide Mitigation Measures at 06 Location in Kegalle District \\(Package 10F of RLVMMP\\)",[\\s\\S]*?status: "Ongoing"/g,
  'title: "Landslide Mitigation Measures at 06 Location in Kegalle District (Package 10F of RLVMMP)",\n    client: "Ministry of Defence, Disaster Management Division",\n    duration: "270 Days",\n    year: 2025,\n    status: "Ongoing",\n    description: "Targeting severe geological vulnerabilities in the Kegalle District, this project involves comprehensive landslide mitigation across 6 critical sites. Our engineering approach includes extensive geological surveys, earth retaining structures, rock-fall netting, and horizontal drains to reduce groundwater pressure. This 270-day operation demonstrates RR Construction\'s expertise in specialized geotechnical works in challenging, steep-terrain environments."'
);

content = content.replace(
  /title: "Reconstruction of Proposed Improvement and Rehabilitation of Kurikadduvan Jetty",[\\s\\S]*?status: "Ongoing"/g,
  'title: "Reconstruction of Proposed Improvement and Rehabilitation of Kurikadduvan Jetty",\n    client: "Road Development Authority",\n    duration: "553 Days",\n    year: 2026,\n    status: "Ongoing",\n    description: "The Kurikadduvan Jetty rehabilitation is a major maritime infrastructure project aimed at drastically improving connectivity between the Jaffna peninsula and the surrounding islands. The scope of work encompasses structural reinforcements, underwater piling, and the construction of durable berthing facilities capable of handling increased passenger and cargo traffic. Engineered to withstand harsh coastal environments, this development will serve as a vital maritime hub."'
);

content = content.replace(
  /title: "Second Integrated Road Investment Program: Rehabilitation and Improvement of Rural Roads in the Northern Province.*Lot\\/03",[\\s\\S]*?status: "Ongoing",/g,
  'title: "Second Integrated Road Investment Program: Rehabilitation and Improvement of Rural Roads in the Northern Province — Lot/03",\n    client: "Road Development Authority",\n    duration: "15 Months",\n    year: 2026,\n    status: "Ongoing",\n    description: "As part of the pivotal iRoad program, this project focuses on the extensive rehabilitation and upgrading of rural road networks across the Northern Province. RR Construction is executing comprehensive sub-base preparation, structural pavement enhancements, asphalt overlaying, and the installation of effective drainage infrastructure. This 15-month strategic development is designed to boost rural economic integration, reduce travel times, and provide all-weather access to local communities.",'
);

fs.writeFileSync('src/app/projects/data.js', content, 'utf8');
console.log('Descriptions added.');
