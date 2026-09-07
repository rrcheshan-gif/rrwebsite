const fs = require('fs');

const files = [
  'src/app/services/bridge-construction/page.tsx',
  'src/app/services/dredging-reclamation/page.tsx',
  'src/app/services/landslide-mitigation/page.tsx',
  'src/app/services/maritime-construction/page.tsx',
  'src/app/services/road-construction/page.tsx',
  'src/app/services/water-infrastructure/page.tsx'
];

const backButtonCode = `
      {/* Back Button Section */}
      <section style={{ padding: '40px 20px', backgroundColor: 'var(--white)', textAlign: 'center', borderTop: '1px solid var(--border-soft)' }}>
        <Link href="/services" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 24px',
          backgroundColor: 'var(--white)',
          color: 'var(--text-dark)',
          textDecoration: 'none',
          fontWeight: 'bold',
          borderRadius: '8px',
          border: '2px solid var(--border-soft)',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}
        onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--primary-red)'; e.currentTarget.style.color = 'var(--primary-red)'; }}
        onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border-soft)'; e.currentTarget.style.color = 'var(--text-dark)'; }}
        >
          <ArrowLeft size={20} /> Back to Services
        </Link>
      </section>
`;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Check if already added
  if (content.includes('Back Button Section')) {
    console.log('Already added to ' + file);
    return;
  }

  // Find the last section and append before the closing divs
  content = content.replace(/(<\/section>\s*<\/div>\s*\);\s*}\s*)$/, "</section>\n" + backButtonCode + "\n    </div>\n  );\n}");

  // Also replace if it ends differently
  if (!content.includes('Back Button Section')) {
      content = content.replace(/(<\/div>\s*\);\s*}\s*)$/, backButtonCode + "\n    </div>\n  );\n}");
  }

  // ensure ArrowLeft is imported
  if (!content.includes('ArrowLeft')) {
    if (content.includes('lucide-react')) {
      content = content.replace(/import\s+{([^}]+)}\s+from\s+['"]lucide-react['"];/, "import { $1, ArrowLeft } from 'lucide-react';");
    } else {
      // Add import at the top
      content = "import { ArrowLeft } from 'lucide-react';\n" + content;
    }
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log('Updated ' + file);
});
