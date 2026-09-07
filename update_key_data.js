const fs = require('fs');

let content = fs.readFileSync('src/app/about/key-data/page.tsx', 'utf8');

// The list is inside a div with display: 'flex', flexDirection: 'column', gap: '30px'
// We will replace the whole list content.

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
                Head Office
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                No. 865, Dr. Danister de Silva MW, Baseline Road, Colombo 09
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Year Established
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                1995
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Ownership
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                Private Limited Liability Company
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Managing Director
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                Mr. Ranjith Senadhera S.D.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                CIDA Registration
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                CS2 (Highest Grade)
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Workforce
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                1,400+ Employees
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Accreditations
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                ISO 9001:2015, ISO 14001:2015, ISO 45001:2018
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Annual Reporting
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                Sustainability Reporting Guidelines
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                Auditors
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                HLB Edirisinghe & Co
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1rem', color: '#1a202c', fontWeight: 800, margin: '0 0 8px', fontFamily: 'var(--font-heading)' }}>
                No of Projects
              </h3>
              <p style={{ color: '#4a5568', margin: 0, fontSize: '1.05rem' }}>
                100+ Major Projects
              </p>
            </div>
`;
    content = before + newList + after;
    fs.writeFileSync('src/app/about/key-data/page.tsx', content, 'utf8');
    console.log('Successfully updated Key Data page.');
} else {
    console.log('Markers not found.');
}
