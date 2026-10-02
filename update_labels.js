const fs = require('fs');

// AutoBreadcrumb
let abPath = 'src/app/components/AutoBreadcrumb.tsx';
let abContent = fs.readFileSync(abPath, 'utf8');
abContent = abContent.replace(/'aggregates': 'Aggregates'/, "'aggregates': 'Aggregates and Sand Plants'");
abContent = abContent.replace(/'concrete': 'Ready Mix Concrete'/, "'concrete': 'Ready Mix Concrete Plants'");
fs.writeFileSync(abPath, abContent, 'utf8');

// Aggregates page
let aggPath = 'src/app/resources/aggregates/page.tsx';
let aggContent = fs.readFileSync(aggPath, 'utf8');
aggContent = aggContent.replace(
    /Aggregates <span style={{ color: "var\(--primary-red\)" }}>& Sand<\/span>/,
    'Aggregates and Sand <span style={{ color: "var(--primary-red)" }}>Plants</span>'
);
fs.writeFileSync(aggPath, aggContent, 'utf8');

// Concrete page
let conPath = 'src/app/resources/concrete/page.tsx';
let conContent = fs.readFileSync(conPath, 'utf8');
conContent = conContent.replace(
    /Ready Mix <span style={{ color: "var\(--primary-red\)" }}>Concrete<\/span>/,
    'Ready Mix Concrete <span style={{ color: "var(--primary-red)" }}>Plants</span>'
);
fs.writeFileSync(conPath, conContent, 'utf8');

console.log("Updated titles and breadcrumbs.");
