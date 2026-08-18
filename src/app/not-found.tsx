import Link from 'next/link';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "100px 20px", background: "var(--bg-light)", textAlign: "center" }}>
      <AlertTriangle size={80} color="var(--primary-red)" style={{ marginBottom: "30px", opacity: 0.8 }} />
      <h1 style={{ fontSize: "5rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 900, margin: "0 0 10px 0", lineHeight: 1 }}>404</h1>
      <h2 style={{ fontSize: "2rem", color: "var(--text-dark)", fontFamily: "var(--font-heading)", fontWeight: 700, margin: "0 0 20px 0" }}>Page Not Found</h2>
      <p style={{ color: "var(--text-light)", fontSize: "1.2rem", maxWidth: "500px", margin: "0 auto 40px", lineHeight: 1.6 }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link href="/" className="btn btn-primary hover-glow" style={{ padding: "15px 35px", fontSize: "1.1rem", borderRadius: "30px", display: "inline-flex", alignItems: "center", gap: "10px", fontWeight: 600 }}>
        <ArrowLeft size={20} /> Back to Homepage
      </Link>
    </div>
  );
}
