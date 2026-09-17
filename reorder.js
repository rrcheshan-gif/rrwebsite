const fs = require('fs');
const file = 'src/app/about/vision-mission/page.tsx';
let content = fs.readFileSync(file, 'utf8');

const brandStatementMarker = "{/* Brand Statement Banner */}";
const coreValuesMarker = "{/* Modern Core Values Grid */}";
const ourDirectionMarker = "{/* Our Direction Section */}";

// Extract Brand Statement
const brandStart = content.indexOf(brandStatementMarker);
const coreValuesStart = content.indexOf(coreValuesMarker);
const brandContent = content.substring(brandStart, coreValuesStart);

// Extract Core Values
const ourDirStart = content.indexOf(ourDirectionMarker);
const coreValuesContent = content.substring(coreValuesStart, ourDirStart);

// Extract Our Direction (from start to the final closing divs)
const finalDivIndex = content.lastIndexOf("</div>\n    );\n  }");
const ourDirectionContent = content.substring(ourDirStart, finalDivIndex);

// Now reconstruct
// Content up to brandStart
const prefix = content.substring(0, brandStart);
const suffix = content.substring(finalDivIndex);

const newContent = prefix + ourDirectionContent + brandContent + coreValuesContent + suffix;

fs.writeFileSync(file, newContent, 'utf8');
