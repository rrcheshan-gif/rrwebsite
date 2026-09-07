const fs = require('fs');

let content = fs.readFileSync('src/app/about/key-data/page.tsx', 'utf8');

const startMarker = "<div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>";
const endMarker = "</div>\n        </div>\n\n      </div>\n    </main>";

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker);

if (startIndex !== -1 && endIndex !== -1) {
    const before = content.substring(0, startIndex + startMarker.length);
    const after = content.substring(endIndex);
    
    const newList = `
            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Company Name
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                RR Construction (Pvt) Ltd
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Registered / Established
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                1995
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Head Office
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem', lineHeight: 1.6 }}>
                No. 865, Dr. Danister De Silva Mawatha, Baseline Road, Colombo 9, Orugodawatta.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Company Registration No
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                PV 11346
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                CIDA Registration No
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                C-10171
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Managing Director
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                Mr. Ranjith Senadeera S. D.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Workforce
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                1,800+ Employees
              </p>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Machinery & Equipment
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                1,000+ Self-Owned Heavy Machinery Units
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                ISO Certificates
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                ISO 9001:2015, ISO 14001:2015, ISO 45001:2018
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Company Auditor
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem', lineHeight: 1.6 }}>
                P. Wijayawardana & Co.<br />
                No. 22/2, Pepiliyana Road, Gansabha Junction, Gangodawila, Nugegoda.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Company Bankers
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem', lineHeight: 1.6 }}>
                Hatton National Bank, DFCC Bank, Sampath Bank, National Development Bank, Commercial Bank, Peoples Bank & Nations Trust Bank.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Completed Projects
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                100+ Major National Projects
              </p>
            </div>
`;
    content = before + newList + after;
    fs.writeFileSync('src/app/about/key-data/page.tsx', content, 'utf8');
    console.log('Successfully updated Key Data page with exact corporate profile data.');
} else {
    console.log('Markers not found.');
}
