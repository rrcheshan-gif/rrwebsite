const fs = require('fs');

let data = fs.readFileSync('src/app/projects/data.js', 'utf8');

function replaceObjectById(data, id, newObjString) {
  const regex = new RegExp(`{\\s*id:\\s*'${id}'[\\s\\S]*?}`, 'g');
  if (regex.test(data)) {
    data = data.replace(regex, newObjString);
    console.log('Replaced', id);
  } else {
    console.log('Could not find', id);
  }
  return data;
}

data = replaceObjectById(data, 'project-41', `{
    id: 'project-41',
    type: 'completed', category: "roads",
    title: "Second Integrated Road Investment Program - Mannar District (49.01 Km)",
    status: "Completed",
    client: "Road Development Authority",
    contractSum: "Rs. 2,481,994,000.80",
    duration: "24 Months",
    year: 2022,
    description: \`<p style="margin-bottom: 20px;">The <strong>"Second Integrated Road Investment Program - Rehabilitation / Improvement and Maintenance of 49.01 Km Rural Roads in Mannar District in the Northern Province – Package 3"</strong> is a major infrastructure development executed for the <strong>Road Development Authority</strong>.</p>
<p style="margin-bottom: 20px;">With a contract sum of <strong>Rs. 2,481,994,000.80</strong> and a 24-month duration, RR Construction successfully rehabilitated a vast network of rural roads in the Mannar district, enhancing rural connectivity, agricultural transport, and economic development in the region.</p>
<p>The project involved extensive earthworks, sub-base and base course construction, asphalt paving, and the establishment of robust drainage systems across 49.01 kilometers.</p>\`
  }`);

data = replaceObjectById(data, 'project-42', `{
    id: 'project-42',
    type: 'completed', category: "roads",
    title: 'Second Integrated Road Investment Program - Kilinochchi (53.60 Km)',
    heroImage: 'images/kilinochchi-iroad/kilinochchi-hero.jpg',
    galleryImages: [ 'images/kilinochchi-iroad/kilinochchi-hero.jpg', 'images/kilinochchi-iroad/kilinochchi-1.jpg', 'images/kilinochchi-iroad/kilinochchi-2.jpg', 'images/kilinochchi-iroad/kilinochchi-3.jpg', 'images/kilinochchi-iroad/kilinochchi-4.jpg', 'images/kilinochchi-iroad/kilinochchi-5.jpg' ],
    status: "Completed",
    client: "Road Development Authority",
    contractSum: "Rs. 2,599,995,936.60",
    duration: "24 Months",
    year: 2022,
    description: \`<p style="margin-bottom: 20px;">Executed for the <strong>Road Development Authority</strong>, this <strong>Rs. 2,599,995,936.60</strong> project involved the rehabilitation and improvement of 53.60 km of rural roads in the Kilinochchi District (Package 2) under the Second Integrated Road Investment Program.</p>
<p>Over the 24-month contract period, our engineering teams delivered comprehensive road reconstruction, asphalt surfacing, and associated drainage structures, significantly improving the transport network in the Northern Province.</p>\`
  }`);

data = replaceObjectById(data, 'project-43', `{
    id: 'project-43',
    type: 'completed', category: "roads",
    title: "Integrated Road Development Program - Kurunegala (99.00 Km)",
    status: "Completed",
    client: "Road Development Authority",
    contractSum: "Rs. 2,165,263,498.51",
    duration: "12 Months",
    year: 2022,
    description: \`<p style="margin-bottom: 20px;">The <strong>Integrated Road Development Program - Rehabilitation/ Improvements of 99.00 Km Rural Roads in the Kurunegala District</strong> (Package 3) included performance-based maintenance for three years.</p>
<p>With a contract value of <strong>Rs. 2,165,263,498.51</strong>, this extensive 12-month project upgraded nearly 100 kilometers of rural road infrastructure, demonstrating RR Construction's capacity to deliver massive road network improvements efficiently and to the highest standards.</p>\`
  }`);

data = replaceObjectById(data, 'project-33', `{
    id: 'project-33',
    type: 'completed', category: "roads",
    title: "Rehabilitation of 26.05 Km of Rural Roads in Kalutara District",
    status: "Completed",
    client: "Road Development Authority",
    contractSum: "Rs. 859,612,391.17",
    duration: "09 Months",
    year: 2024,
    description: \`<p style="margin-bottom: 20px;">The <strong>Rehabilitation / Improvement of 26.05 Km of Rural Roads in the Kalutara District</strong> project included performance-based maintenance for three years, executed for the Road Development Authority.</p>
<p>Completed in a fast-tracked 9-month timeframe, the <strong>Rs. 859,612,391.17</strong> project dramatically enhanced rural transport infrastructure in the district.</p>\`
  }`);

data = replaceObjectById(data, 'project-23', `{
    id: 'project-23',
    type: 'completed',
    category: "railway",
    title: "Maho to Anuradhapura Railway Line Track Rehabilitation & Ancillary Works",
    client: "IRCON International Limited",
    contractSum: "Rs. 2,095,347,973.11",
    duration: "6 Months",
    year: 2023,
    status: "Completed",
    description: \`<p style="margin-bottom: 20px;"><strong>Formation, Civil & other Ancillary works between Anuradhapura to Vauniya in Connection with up gradation of Railway Line from Maho to Omanthai under Indian Line of Credit - Track Rehabilitation & Ancillary Works.</strong></p>
<p>Executed for IRCON International Limited at a massive contract sum of <strong>Rs. 2,095,347,973.11</strong>, this critical railway infrastructure project was completed in 6 months, restoring high-speed rail connectivity to the northern line.</p>\`
  }`);


fs.writeFileSync('src/app/projects/data.js', data);
console.log('Finished updating existing projects.');
