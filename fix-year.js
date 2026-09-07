const fs = require('fs');
const content = fs.readFileSync('src/app/projects/page.tsx', 'utf8');

// The block to remove:
// {project.type !== 'ongoing' && (
//   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
//     <div style={{ display: 'flex', flexDirection: 'column' }}>
//         <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase' }}>Completion Year</span>
//         <span style={{ fontSize: '1rem', color: 'var(--text-dark)', fontWeight: 'bold' }}>{project.year}</span>
//     </div>
//   </div>
// )}

const regex = /\{project\.type !== 'ongoing' && \([\s\S]*?Completion Year[\s\S]*?\)\}/g;
if (regex.test(content)) {
    const newContent = content.replace(regex, '');
    fs.writeFileSync('src/app/projects/page.tsx', newContent, 'utf8');
    console.log('Removed Completion Year block');
} else {
    console.log('Block not found');
}
