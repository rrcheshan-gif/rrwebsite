const fs = require('fs');
const file = 'src/app/training/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add imports
if (!content.includes('import { useState, useEffect }')) {
  content = content.replace("import Link from 'next/link';", "import Link from 'next/link';\nimport { useState, useEffect } from 'react';\nimport { CheckCircle } from 'lucide-react';");
}

// Add state
if (!content.includes('const [isMobile')) {
  content = content.replace('export default function Training() {', 'export default function Training() {\n  const [isMobile, setIsMobile] = useState(false);\n  useEffect(() => {\n    const checkMobile = () => setIsMobile(window.innerWidth < 768);\n    checkMobile();\n    window.addEventListener("resize", checkMobile);\n    return () => window.removeEventListener("resize", checkMobile);\n  }, []);\n');
}

// And also add "use client" if it's not there, because we use state
if (!content.includes('"use client"') && !content.includes("'use client'")) {
  content = '"use client";\n' + content;
}

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed React imports, isMobile state, and added use client');
