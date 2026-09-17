const fs = require('fs');
const file = 'src/data/news-data.ts';

const newContent = `export interface NewsItem {
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
    slug: 'gandara-fishery-harbour-90-percent-completed',
    tag: 'Maritime',
    title: 'Gandara Fishery Harbour Project 90% Completed',
    desc: 'Major milestones achieved in dredging and breakwater construction at the major southern maritime project. This facility is expected to boost the local fishing industry significantly.',
    date: 'June 15, 2026',
    img: '/images/maritime-harbour-site.jpg',
    featured: true,
    content: \`
      <h2>Transforming the Southern Coastline</h2>
      <p>RR Construction is proud to announce that the Gandara Fishery Harbour project has reached 90% completion. This monumental maritime engineering endeavor is set to revolutionize the local fishing industry in the Southern Province.</p>
      <p>Our dedicated maritime division has successfully completed the primary dredging operations and the critical breakwater construction, ensuring a safe and robust harbor basin for local vessels regardless of seasonal monsoons.</p>
      <p>The final phase will focus on onshore facilities, paving, and final structural touches before the official handover.</p>
    \`
  }
];
`;

fs.writeFileSync(file, newContent, 'utf8');
console.log('Updated news-data.ts to only keep Gandara Fishery Harbour');
