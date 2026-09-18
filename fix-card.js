const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Change title
content = content.replace(
  /\{ title: "Highways & Roads", img: "\/images\/home\/rathnapura\.jpg"/,
  `{ title: "Highways & Expressways", scale: "scale(1.15)", img: "/images/home/rathnapura.jpg"`
);

// Add scale to the img wrapper
const imgCode = `<img src={srv.img} alt={srv.title} className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9, transition: "opacity 0.5s ease" }}`;
const newImgCode = `<div style={{ width: "100%", height: "100%", transform: srv.scale || "scale(1)" }}>
                    <img src={srv.img} alt={srv.title} className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9, transition: "opacity 0.5s ease" }}`;

// We need to also close the div. The img tag is followed by onMouseOver and onMouseOut and a self closing />
const imgTagFull = `<img src={srv.img} alt={srv.title} className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9, transition: "opacity 0.5s ease" }} onMouseOver={(e) => { e.currentTarget.style.opacity = '1' }} onMouseOut={(e) => { e.currentTarget.style.opacity = '0.9' }} />`;

const newImgTagFull = `<div style={{ width: "100%", height: "100%", transform: srv.scale || "scale(1)" }}>
                    <img src={srv.img} alt={srv.title} className="img-polished img-hover-zoom" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9, transition: "opacity 0.5s ease" }} onMouseOver={(e) => { e.currentTarget.style.opacity = '1' }} onMouseOut={(e) => { e.currentTarget.style.opacity = '0.9' }} />
                  </div>`;

content = content.replace(imgTagFull, newImgTagFull);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Fixed black line and title');
