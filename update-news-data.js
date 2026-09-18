const fs = require('fs');

const content = `export interface NewsItem {
  id: number;
  slug: string;
  tag: string;
  title: string;
  desc: string;
  date: string;
  img: string;
  featured?: boolean;
  crop?: 'center' | 'top' | 'bottom';
  content?: string;
}

export const NEWS_DATA: NewsItem[] = [
  {
    id: 1,
    slug: 'first-brand-new-wirtgen-w200f-milling-machine-sri-lanka',
    tag: 'Machinery & Technology',
    title: 'RR Construction Acquires Sri Lanka\\'s First Brand New Wirtgen Milling Machine',
    desc: 'Setting a new benchmark in the local construction industry, RR Construction has successfully imported the first-ever brand new Wirtgen W 200 F milling machine to Sri Lanka.',
    date: 'September 17, 2026',
    img: '/images/news/wirtgen-milling-machine/img-1.jpg',
    featured: true,
    content: \`
      <p>RR Construction (Pvt) Ltd is proud to announce the latest addition to our extensive fleet of heavy machinery: the state-of-the-art <strong>Wirtgen W 200 F Cold Milling Machine</strong>. This milestone marks a significant achievement not only for our company but for the entire Sri Lankan construction industry, as it is the <strong>first brand new milling machine of its kind</strong> to be brought into the country.</p>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 30px 0;">
        <img src="/images/news/wirtgen-milling-machine/img-2.jpg" alt="Wirtgen W 200 F Front View" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);" />
        <img src="/images/news/wirtgen-milling-machine/img-3.jpg" alt="Wirtgen W 200 F Side Profile" style="width: 100%; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);" />
      </div>

      <h3 style="font-family: var(--font-heading); color: var(--text-dark); margin-top: 40px; margin-bottom: 20px;">Unmatched Performance and Innovation</h3>
      <p>The Wirtgen W 200 F is renowned globally for its exceptional milling performance, fuel efficiency, and cutting-edge digital assistance systems. Equipped with the innovative MILL ASSIST system, the machine automatically adjusts the engine speed and milling drum speed to optimize performance while significantly reducing fuel consumption and CO2 emissions.</p>
      
      <p>By integrating this advanced equipment into our operations, RR Construction continues to uphold its commitment to adopting modern technology to deliver high-quality infrastructure projects faster, more efficiently, and with greater environmental sustainability.</p>

      <div style="margin: 30px 0; text-align: center;">
        <img src="/images/news/wirtgen-milling-machine/img-4.jpg" alt="Wirtgen W 200 F Setup" style="width: 100%; max-width: 800px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);" />
        <p style="font-size: 0.9rem; color: var(--text-light); margin-top: 10px; font-style: italic;">The new machine being prepared for deployment at our machinery yard.</p>
      </div>

      <h3 style="font-family: var(--font-heading); color: var(--text-dark); margin-top: 40px; margin-bottom: 20px;">Paving the Way Forward</h3>
      <p>This investment reinforces our position as the leading infrastructure development company in Sri Lanka. As we deploy the W 200 F to our major highway and road rehabilitation projects across the island, our clients can expect unprecedented precision and speed in asphalt removal and road surface preparation.</p>
      
      <p>We remain dedicated to our vision of equipping our expert teams with the world's best machinery, ensuring that every road we build meets the highest international standards of quality and durability.</p>
    \`
  }
];
`;

fs.writeFileSync('src/data/news-data.ts', content, 'utf8');
console.log('Updated news data');
