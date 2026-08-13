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
      <h2>The Country is Being Steered Towards Development</h2>
      <p><strong>The country is being steered towards development through a structured programme that identifies economic potential and expands economic opportunities to rural areas - President</strong></p>
      
      <p>President Anura Kumara Dissanayake stated that the current government’s objective is to drive national development through a structured plan that recognizes economic strengths and brings economic growth to rural areas. He further affirmed his administration’s commitment to lifting rural communities out of poverty during his address at the inauguration of the Vadduvakal Bridge construction project in the Mullaitivu District today (02).</p>

      <p>The President noted that a series of new development projects are set to begin across the country this September. He emphasized that the government will put an end to the long-standing practice of delaying projects beyond their deadlines and spending beyond allocated budgets. Instead, all projects will be completed within the scheduled timeframe to ensure their benefits reach the people without delay.</p>

      <h3>Project Details and Investment</h3>
      <p>The Vadduvakal Bridge, located near the Nandikadal Lagoon along the Paranthan – Karachchi - Mullaitivu road, accommodates more than 3,000 vehicles daily. Due to the lack of maintenance over an extended period, the bridge has become severely unsafe. The Road Development Authority has planned to construct a new two-lane bridge at a cost of Rs. 1.4 billion in public funds, with completion targeted for September 2, 2027.</p>

      <p>Minister of Transport, Highways, Ports and Civil Aviation Bimal Rathnayake, speaking at the event, highlighted that although the project was initially estimated at Rs. 1.8 billion, under the current government’s transparent administration it will be completed at a reduced cost of Rs. 1.4 billion. The remaining Rs. 400 million will be allocated for highway development in the Vanni District. He further stated that Rs. 12.5 billion has been allocated for the construction of bridges and highways in the North this year, with provisions expected to increase further in the coming year.</p>

      <h3>A Vision for the North</h3>
      <p>Minister Rathnayake also emphasized that the present government is dedicated to rebuilding the entire country while uniting the North through peace and development. He urged the public to evaluate the current administration based on observable efforts and concrete actions rather than prejudiced ideas.</p>

      <p>Minister of Fisheries, Aquatic and Ocean Resources, Ramalingam Chandrasekar, Deputy Minister of Cooperative Development Upali Samarasingha, Governor of the Northern Province Nagalingam Vethanayahan, Secretary to the Ministry of Transport, Highways, Ports and Civil Aviation Senior Professor Kapila C.K. Perera and officials of the Road Development Authority were among those present.</p>
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
    id: 8,
    slug: 'maggona-railway-bridge-contract-awarded',
    tag: 'Infrastructure',
    title: 'Contract Awarded for Maggona Double Line Railway Bridge',
    desc: 'RR Construction has been officially awarded the contract for the construction of a double line railway bridge at Maggona on the Coastal Line by Sri Lanka Railways.',
    date: 'July 21, 2026',
    img: '/images/services-build.jpg',
    featured: false,
    content: `
      <h2>New Contract Award: Maggona Railway Bridge</h2>
      <p><strong>RR Construction (Pvt) Ltd has officially received the Letter of Acceptance from Sri Lanka Railways for the construction of a major double line railway bridge.</strong></p>

      <p>On July 21, 2026, the Procurement Sub Department of Sri Lanka Railways formally awarded the contract (Procurement No. SRS/F. 8176) to RR Construction for the "CONSTRUCTION OF DOUBLE LINE RAILWAY BRIDGE AT 33M 43CH - COST LINE / MAGGONA".</p>

      <h3>Project Scope and Investment</h3>
      <p>This critical infrastructure project is valued at a total Contract Price of <strong>Rs. 401,031,779.97</strong> (Four Hundred One Million Thirty-One Thousand Seven Hundred Seventy-nine Rupees and Ninety-Seven Cents), which includes VAT and contingencies. The project marks another significant milestone in our ongoing efforts to modernize and enhance Sri Lanka's national railway network.</p>

      <h3>Commencement and Execution</h3>
      <p>Following the official acceptance, our engineering and project management teams are mobilizing for immediate deployment. The official commencement date is set for 14 days from the issuance of the Letter of Acceptance, with all preliminary material approvals and reinforcement planning already underway in strict accordance with the contract specifications and engineer's requirements.</p>

      <p>We are fully committed to delivering this project with the highest standards of safety, quality, and structural integrity that RR Construction is known for.</p>
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
