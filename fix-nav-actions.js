const fs = require('fs');
const file = 'src/app/globals.css';
let content = fs.readFileSync(file, 'utf8');

const oldActionsClass = `.nav-desktop-actions {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-shrink: 0;
    margin-left: auto;
  }`;

const newActionsClass = `.nav-desktop-actions {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-shrink: 0;
    margin-left: auto;
    margin-right: clamp(20px, 4vw, 60px) !important; /* Balance with the logo's left margin */
  }`;

content = content.replace(oldActionsClass, newActionsClass);

fs.writeFileSync(file, content, 'utf8');
console.log('Added margin-right to nav-desktop-actions');
