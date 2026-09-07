const fs = require('fs');
let content = fs.readFileSync('src/app/sustainability/social-responsibility/page.tsx', 'utf8');

// Add X icon
content = content.replace("Users, BookOpen, Building2, MapPin, CheckCircle2 }", "Users, BookOpen, Building2, MapPin, CheckCircle2, X }");

// Add state
content = content.replace("const [isMobile, setIsMobile] = useState(false);", "const [isMobile, setIsMobile] = useState(false);\n  const [lightboxImage, setLightboxImage] = useState<string | null>(null);");

// Add onClick and cursor to images
content = content.replace(/<img src="(\/CSR\/csr-first-employee-\d\.jpg)" alt="(.*?)" style=\{\{ (.*?) \}\} \/>/g, 
  '<img src="\" alt="\" onClick={() => setLightboxImage(\'\\')} style={{ \, cursor: "pointer", transition: "transform 0.3s ease", transform: "scale(1)" }} onMouseOver={(e) => e.currentTarget.style.transform="scale(1.02)"} onMouseOut={(e) => e.currentTarget.style.transform="scale(1)"} />'
);

// Add modal HTML at the end
const modalHtml = 
      {/* Lightbox Modal */}
      {lightboxImage && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.9)", zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }} onClick={() => setLightboxImage(null)}>
          <button onClick={() => setLightboxImage(null)} style={{ position: "absolute", top: "20px", right: "20px", background: "none", border: "none", color: "white", cursor: "pointer", padding: "10px" }}>
            <X size={40} />
          </button>
          <img src={lightboxImage} alt="Enlarged CSR image" style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain", borderRadius: "8px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

content = content.replace("    </div>\n  );\n}", modalHtml);

fs.writeFileSync('src/app/sustainability/social-responsibility/page.tsx', content, 'utf8');
