export interface NewsItem {
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
    id: 7,
    slug: 'vadduvakal-bridge-construction-commences',
    tag: 'Infrastructure',
    title: 'Construction of Vadduvakal Bridge Commences in Mullaitivu',
    desc: 'President Anura Kumara Dissanayake officially inaugurated the construction of the Rs. 1.4 billion two-lane Vadduvakal Bridge over the Nandikadal Lagoon, a major project awarded to RR Construction.',
    date: 'September 02, 2025',
    img: '/images/news/vadduvakal-bridge.jpg',
    featured: true,
    content: `
      <h2>A Milestone for Northern Infrastructure</h2>
      <p>The construction of the new Vadduvakal Bridge in the Mullaitivu District is officially underway. The project was inaugurated by President Anura Kumara Dissanayake on September 2, 2025, marking a significant milestone in the development of the Northern Province's transport network.</p>
      
      <p>The new structure is being built as a modern, two-lane bridge to replace the existing, long-standing causeway/bridge on the Paranthan–Karachchi–Mullaitivu road (A035), which spans across the historic Nandikadal Lagoon. The existing bridge had become severely unsafe due to a lack of maintenance and structural deterioration over an extended period.</p>

      <h3>Project Scope and Investment</h3>
      <p>The project is being executed at an estimated cost of <strong>Rs. 1.4 billion</strong>. This reflects a strategic reduction from the initial estimate of Rs. 1.8 billion, with the government reallocating the Rs. 400 million in savings toward other vital highway development projects in the Vanni District.</p>
      
      <p>M/s RR Construction (Pvt) Limited was awarded the construction contract following a highly competitive bidding process, reaffirming our position as a leader in national civil engineering projects. Our engineering teams have already mobilized at the site, bringing in state-of-the-art piling and bridge construction equipment.</p>

      <h3>Looking Ahead</h3>
      <p>The project is targeted for completion by <strong>September 2, 2027</strong>. Once completed, the Vadduvakal Bridge will provide a safe, uninterrupted, and highly efficient transport link for the communities in the Mullaitivu and Kilinochchi districts, facilitating enhanced trade, accessibility, and socio-economic growth in the region.</p>
      
      <p>Government officials, including the Deputy Minister of Transport and Highways, will conduct regular site inspections alongside our project managers to monitor the progress and ensure the highest standards of quality and safety are maintained throughout the construction lifecycle.</p>
    `
  },
  {
    id: 1,
    slug: 'gandara-fishery-harbour-90-percent-completed',
    tag: 'Maritime',
    title: 'Gandara Fishery Harbour Project 90% Completed',
    desc: 'Major milestones achieved in dredging and breakwater construction at the major southern maritime project. This facility is expected to boost the local fishing industry significantly.',
    date: 'June 15, 2026',
    img: '/images/maritime-harbour-site.jpg',
    featured: false,
    content: `
      <h2>Transforming the Southern Coastline</h2>
      <p>RR Construction is proud to announce that the Gandara Fishery Harbour project has reached 90% completion. This monumental maritime engineering endeavor is set to revolutionize the local fishing industry in the Southern Province.</p>
      <p>Our dedicated maritime division has successfully completed the primary dredging operations and the critical breakwater construction, ensuring a safe and robust harbor basin for local vessels regardless of seasonal monsoons.</p>
      <p>The final phase will focus on onshore facilities, paving, and final structural touches before the official handover.</p>
    `
  },
  {
    id: 2,
    slug: 'rr-construction-passes-iso-audit',
    tag: 'Corporate',
    title: 'RR Construction Passes Annual ISO Surveillance Audit',
    desc: 'Successfully maintaining our ISO 9001, 14001, and 45001 certifications, reaffirming our commitment to global quality, environmental, and occupational health standards.',
    date: 'May 28, 2026',
    img: '/images/health-safety-site.jpg',
    content: `
      <h2>Global Standards Maintained</h2>
      <p>RR Construction has successfully cleared its annual integrated ISO surveillance audit with flying colors. We have proudly maintained our triple certification:</p>
      <ul>
        <li><strong>ISO 9001:</strong> Quality Management Systems</li>
        <li><strong>ISO 14001:</strong> Environmental Management Systems</li>
        <li><strong>ISO 45001:</strong> Occupational Health and Safety Management</li>
      </ul>
      <p>This achievement highlights our unwavering dedication to not just meeting, but exceeding international benchmarks in every project we undertake.</p>
    `
  },
  {
    id: 3,
    slug: 'new-asphalt-plant-commissioned',
    tag: 'Machinery',
    title: 'New High-Capacity Asphalt Plant Commissioned',
    desc: 'Expanding our self-owned fleet capabilities to accelerate the delivery of the Central Expressway Project Section 3 and other major national road networks.',
    date: 'May 10, 2026',
    img: '/images/kalutara-crusher-plant.jpg',
    crop: 'top',
    content: `
      <h2>Accelerating National Infrastructure</h2>
      <p>To support the rapid development of the Central Expressway Project Section 3, RR Construction has commissioned a brand new, high-capacity asphalt plant.</p>
      <p>This strategic addition to our machinery fleet significantly boosts our internal production capacity, ensuring we have a continuous, high-quality supply of asphalt for our road paving operations without relying on external vendors. This allows for tighter quality control and faster project delivery.</p>
    `
  },
  {
    id: 4,
    slug: 'kandy-landslide-mitigation-commences',
    tag: 'Infrastructure',
    title: 'Landslide Mitigation Works Commence in Kandy District',
    desc: 'RR Construction has mobilized specialized geotechnical teams to secure vulnerable slopes along major transport routes, ensuring public safety during monsoon seasons.',
    date: 'April 22, 2026',
    img: '/images/kandy-landslide/kandy-5.jpg',
    content: `
      <h2>Securing Vulnerable Slopes</h2>
      <p>With the onset of the monsoon season, ensuring the safety of major transport routes in the central highlands is a top national priority. RR Construction has officially commenced extensive landslide mitigation works across several high-risk zones in the Kandy District.</p>
      <p>Our geotechnical engineering teams are utilizing soil nailing, shotcreting, and retaining wall constructions to stabilize slopes and prevent future soil anchoring failures.</p>
    `
  },
  {
    id: 5,
    slug: 'annual-csr-rural-school-renovation',
    tag: 'Community',
    title: 'Annual CSR Initiative: Rural School Renovation',
    desc: 'As part of our commitment to giving back, our teams have successfully completely the structural renovation and roofing of a rural school in the Anuradhapura district.',
    date: 'March 18, 2026',
    img: '/images/CSR.jpeg',
    content: `
      <h2>Building Better Communities</h2>
      <p>RR Construction believes that true national development starts at the community level. For our annual CSR initiative, our teams volunteered their time and expertise to fully renovate a dilapidated rural school in the Anuradhapura district.</p>
      <p>The project involved replacing the entire roofing structure, repairing damaged masonry, and providing a fresh coat of paint, ensuring the students have a safe and inspiring environment to learn in.</p>
    `
  },
  {
    id: 6,
    slug: 'omanthai-crusher-plant-output-exceeds-targets',
    tag: 'Projects',
    title: 'Omanthai Crusher Plant Output Exceeds Targets',
    desc: 'Our strategic investments in the Northern Province are yielding results, with aggregate production at Omanthai exceeding monthly targets to supply regional road development.',
    date: 'February 05, 2026',
    img: '/images/omanthai.jpg',
    content: `
      <h2>Meeting Regional Demands</h2>
      <p>We are pleased to report that our Omanthai Crusher Plant has exceeded its production targets for the third consecutive month. This facility plays a crucial role in supplying high-grade aggregates (ABC, metal) to various road development projects across the Northern Province.</p>
      <p>By optimizing our crushing processes and upgrading our heavy machinery on-site, we have managed to increase yield by 15% while maintaining strict adherence to environmental and dust-control regulations.</p>
    `
  }
];
