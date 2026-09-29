const fs = require('fs');
let content = fs.readFileSync('src/app/contact/page.tsx', 'utf8');
let newBlock = fs.readFileSync('newBlock.txt', 'utf8');

const marker = '</iframe>\\n                    </div>\\n                  </div>';

const index = content.indexOf('RRC%20Main%20Warehouse');
if (index !== -1) {
    const nextMarker = content.indexOf('</div>\n                  </div>', index);
    if (nextMarker !== -1) {
        const insertPosition = nextMarker + '</div>\n                  </div>'.length;
        content = content.slice(0, insertPosition) + '\n' + newBlock + content.slice(insertPosition);
        fs.writeFileSync('src/app/contact/page.tsx', content, 'utf8');
        console.log("Inserted Machine Yard successfully.");
    } else {
        console.log("Could not find the end marker of the Main Warehouse block.");
    }
} else {
    console.log("Could not find Main Warehouse block.");
}
