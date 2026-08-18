export default function Loading() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "var(--bg-light)" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
        <div style={{ 
          width: "50px", 
          height: "50px", 
          border: "4px solid var(--border-soft)", 
          borderTop: "4px solid var(--primary-red)", 
          borderRadius: "50%", 
          animation: "spin 1s linear infinite" 
        }} />
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}} />
        <p style={{ color: "var(--text-light)", fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>Loading...</p>
      </div>
    </div>
  );
}
