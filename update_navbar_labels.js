const fs = require('fs');

let content = fs.readFileSync('src/app/components/Navbar.tsx', 'utf8');

content = content.replace(
    />Aggregates & Sand<\/Link>/g,
    ">Aggregates and Sand Plants</Link>"
);

content = content.replace(
    />Ready Mix Concrete<\/Link>/g,
    ">Ready Mix Concrete Plants</Link>"
);

fs.writeFileSync('src/app/components/Navbar.tsx', content, 'utf8');
console.log("Updated Navbar.tsx");
