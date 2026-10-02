const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');

if (!css.includes('max-width: 100%;\\n  height: auto;')) {
    css = css.replace(/img\s*\{\s*-webkit-user-drag:/, "img {\n  max-width: 100%;\n  height: auto;\n  -webkit-user-drag:");
    fs.writeFileSync('src/app/globals.css', css, 'utf8');
    console.log("Added max-width: 100% to img tags.");
} else {
    console.log("Already has max-width: 100%");
}
