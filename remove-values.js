const fs = require('fs');

// 1. Fix src/app/projects/data.js
let p = fs.readFileSync('src/app/projects/data.js', 'utf8');
p = p.replace(/\s*contractAmount:\s*".*?",\n/g, '\n');
p = p.replace(/\s*value:\s*".*?",\n/g, '\n');
p = p.replace(/With an accepted contract amount of <strong>.*?<\/strong> and an/g, 'With an');
p = p.replace(/at a total accepted contract value of <strong>.*?<\/strong>\./g, '.');
p = p.replace(/at an accepted contract value of <strong>.*?<\/strong>\./g, '.');
p = p.replace(/Awarded at a contract value of <strong>.*?<\/strong> with a 730-day/g, 'With a 730-day');
fs.writeFileSync('src/app/projects/data.js', p);

// 2. Fix src/data/news-data.ts
let n = fs.readFileSync('src/data/news-data.ts', 'utf8');
n = n.replace(/ the Rs\. 1\.4 billion/g, ' the');
n = n.replace(/ at a cost of Rs\. 1\.4 billion in public funds/g, '');
n = n.replace(/ although the project was initially estimated at Rs\. 1\.8 billion, under the current government's transparent administration it will be completed at a reduced cost of Rs\. 1\.4 billion\. The remaining Rs\. 400 million will be allocated for highway development in the Vanni District\. He further stated that Rs\. 12\.5 billion has been allocated for the construction of bridges and highways in the North this year, with provisions expected to increase further in the coming year\./g, '');
n = n.replace(/This critical infrastructure project is valued at a total Contract Price of <strong>Rs\. 401,031,779\.97<\/strong> \(Four Hundred One Million Thirty-One Thousand Seven Hundred Seventy-nine Rupees and Ninety-Seven Cents\), which includes VAT and contingencies\. /g, '');
fs.writeFileSync('src/data/news-data.ts', n);

console.log('Values removed successfully');
