const fs = require('fs');

let p = fs.readFileSync('src/app/projects/data.js', 'utf8');

// Remove properties (handling both \n and \r\n)
p = p.replace(/\s*contractSum:\s*".*?",\r?\n/g, '\r\n');
p = p.replace(/\s*contractAmount:\s*".*?",\r?\n/g, '\r\n');
p = p.replace(/\s*value:\s*".*?",\r?\n/g, '\r\n');

// Clean up description HTML
p = p.replace(/at a massive contract sum of <strong>Rs\. [0-9,.]+<\/strong>, /g, '');
p = p.replace(/at a contract price of <strong>Rs\. [0-9,.]+ \(excl\. VAT\)<\/strong> /g, '');
p = p.replace(/at a contract price of <strong>Rs\. [0-9,.]+<\/strong>\./g, '.');
p = p.replace(/Awarded at a contract price of <strong>.*?<\/strong> with/g, 'With');
p = p.replace(/, the <strong>Rs\. [0-9,.]+<\/strong> project/g, ', the project');
p = p.replace(/With a contract sum of <strong>Rs\. [0-9,.]+<\/strong> and a /g, 'With a ');
p = p.replace(/this <strong>Rs\. [0-9,.]+<\/strong> project/g, 'this project');
p = p.replace(/With a contract value of <strong>Rs\. [0-9,.]+<\/strong>, /g, '');

fs.writeFileSync('src/app/projects/data.js', p);
console.log('Cleaned data.js properly');
