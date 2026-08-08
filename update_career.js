const fs = require('fs');
let file = 'src/app/career/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Add useState
content = content.replace(
    "import Link from 'next/link';",
    "import Link from 'next/link';\nimport { useState } from 'react';"
);

// Replace handleSubmit
const newHandleSubmit = `
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };
`;

content = content.replace(
    /const handleSubmit = async.*?};/s,
    newHandleSubmit
);

// Add name attributes to inputs
content = content.replace(/<input type="text" required /g, '<input type="text" name="name" required ');
content = content.replace(/<input type="email" required /g, '<input type="email" name="email" required ');
content = content.replace(/<input type="tel" required /g, '<input type="tel" name="phone" required ');
content = content.replace(/<select required /g, '<select name="position" required ');
content = content.replace(/<input type="file" accept=".pdf,.doc,.docx" required /g, '<input type="file" name="file" accept=".pdf,.doc,.docx" required ');

// Add status messages to form
const statusMessages = `
                  {status === 'success' && (
                    <div style={{ padding: "15px", marginBottom: "20px", background: "rgba(16, 185, 129, 0.1)", color: "#10b981", borderRadius: "8px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                      Your application has been submitted successfully! We will contact you soon.
                    </div>
                  )}
                  {status === 'error' && (
                    <div style={{ padding: "15px", marginBottom: "20px", background: "rgba(239, 68, 68, 0.1)", color: "#ef4444", borderRadius: "8px", border: "1px solid rgba(239, 68, 68, 0.2)" }}>
                      Failed to submit application. Please try again or email us directly.
                    </div>
                  )}
`;
content = content.replace(
    /<form onSubmit=\{handleSubmit\}>/,
    `<form onSubmit={handleSubmit}>\n${statusMessages}`
);

// Update submit button text
content = content.replace(
    /<button type="submit" className="btn btn-primary" style={{ width: "100%" }}>Submit Application<\/button>/,
    `<button type="submit" disabled={status === 'loading'} className="btn btn-primary" style={{ width: "100%", opacity: status === 'loading' ? 0.7 : 1 }}>
                    {status === 'loading' ? 'Sending...' : 'Submit Application'}
                  </button>`
);

fs.writeFileSync(file, content, 'utf8');
console.log("Updated career page with working form.");
