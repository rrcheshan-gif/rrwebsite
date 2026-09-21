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
    id: 1,
    slug: 'first-brand-new-wirtgen-w200f-milling-machine-sri-lanka',
    tag: 'Machinery & Technology',
    title: 'RR Construction Acquires Sri Lanka\'s First Brand New Wirtgen Milling Machine',
    desc: 'Setting a new benchmark in the local construction industry, RR Construction has successfully imported the first-ever brand new Wirtgen W 200 F milling machine to Sri Lanka.',
    date: 'September 17, 2026',
    img: '/images/news/wirtgen-milling-machine/img-1.jpg',
    featured: true,
    content: `
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
      <p>This investment reinforces our position as the leading infrastructure development company in Sri Lanka. As we deploy the W 200 F to our major highway and expressway rehabilitation projects across the island, our clients can expect unprecedented precision and speed in asphalt removal and highway and expressway surface preparation.</p>
      
      <p>We remain dedicated to our vision of equipping our expert teams with the world's best machinery, ensuring that every road we build meets the highest international standards of quality and durability.</p>
    `
  },
  {
    id: 2,
    slug: 'rehabilitation-of-kurikadduvan-jetty-approach-road',
    tag: 'Project Completion',
    title: 'Successful Rehabilitation of Kurikadduvan Jetty Approach Road',
    desc: 'RR Construction successfully completed the rehabilitation of the Kurikadduvan Jetty approach road, improving critical maritime connectivity to Delft and Nainativu islands.',
    date: 'April 22, 2026',
    img: '/images/projects/project-10/Background image.jpeg',
    featured: false,
    content: `
      <p>RR Construction (Pvt) Ltd is proud to announce the successful completion and handover of the <strong>Reconstruction of Proposed Improvement and Rehabilitation of Kurikadduvan Jetty (Approach Road)</strong>. This vital infrastructure project was executed for the Road Development Authority (RDA) and officially inaugurated on April 22, 2026.</p>
      
      <div style="margin: 30px 0; text-align: center;">
        <img src="/images/projects/project-10/Background image.jpeg" alt="Completed Kurikadduvan Jetty Approach Road" style="width: 100%; max-width: 800px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);" />
        <p style="font-size: 0.9rem; color: var(--text-light); margin-top: 10px; font-style: italic;">The newly reconstructed coastal approach road, ensuring safe and reliable transit.</p>
      </div>

      <h3 style="font-family: var(--font-heading); color: var(--text-dark); margin-top: 40px; margin-bottom: 20px;">Transforming Coastal Connectivity</h3>
      <p>The Kurikadduvan Jetty serves as the primary embarkation point for ferries connecting the Jaffna peninsula to offshore islands such as Delft (Nedunthivu) and Nainativu. For years, the approach road presented significant transportation difficulties for local residents, pilgrims, and tourists. Through this comprehensive rehabilitation project, valued at approximately Rs. 984.73 million and funded entirely by the Government of Sri Lanka, we have completely transformed this critical transport artery.</p>
      
      <p>The extensive scope of work involved complex coastal earthworks, sub-base preparation, high-grade asphalt surfacing, and the installation of robust drainage systems designed to withstand harsh marine environments. The upgraded road now provides seamless access to the jetty, directly supporting the region's socio-economic development and boosting sustainable tourism to Delft Island.</p>

      <div style="margin: 30px 0; text-align: center;">
        <img src="/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.06.jpeg" alt="Kurikadduvan Jetty Development" style="width: 100%; max-width: 800px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);" />
      </div>

      <h3 style="font-family: var(--font-heading); color: var(--text-dark); margin-top: 40px; margin-bottom: 20px;">Commitment to National Infrastructure</h3>
      <p>We extend our deepest gratitude to the Road Development Authority (RDA) for entrusting RR Construction with this milestone project. Our dedicated engineering teams overcame unique coastal logistical challenges to deliver the project efficiently, safely, and in accordance with the highest modern structural standards.</p>
    `
  }
,
  {
    id: 3,
    slug: 'reconstruction-of-bridge-paranthan-karachchi-mullaitivu-completed',
    tag: 'Project Completion',
    title: 'Successful Completion of Bridge No. 12/1 on Paranthan - Karachchi - Mullaitivu Road',
    desc: 'RR Construction successfully completed the reconstruction of Bridge No. 12/1 for the Road Development Authority, emphasizing modern engineering standards and timely delivery.',
    date: 'July 28, 2026',
    img: '/images/POINT PEDRO/Background image.jpeg',
    featured: false,
    content: `
      <p>RR Construction (Pvt) Ltd is proud to announce the successful completion and handover of the <strong>Reconstruction of Bridge No. 12/1 on Paranthan - Karachchi - Mullaitivu Road (A035) Balance Work</strong>. This crucial infrastructure project was executed for the Road Development Authority (RDA) and officially completed on July 28, 2026.</p>
      
      <div style="margin: 30px 0; text-align: center;">
        <img src="/images/POINT PEDRO/Background image.jpeg" alt="Completed Bridge at Night" style="width: 100%; max-width: 800px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);" />
        <p style="font-size: 0.9rem; color: var(--text-light); margin-top: 10px; font-style: italic;">The newly reconstructed bridge, well-illuminated and ready for public transit.</p>
      </div>

      <h3 style="font-family: var(--font-heading); color: var(--text-dark); margin-top: 40px; margin-bottom: 20px;">Enhancing Regional Connectivity</h3>
      <p>The reconstruction of this bridge plays a vital role in enhancing connectivity and transportation efficiency in the Northern Province, directly benefiting communities traveling between Paranthan, Karachchi, and Mullaitivu. Built to modern structural engineering standards, the bridge ensures long-term durability and safety for all commuters and heavy vehicles.</p>
      
      <p>We extend our gratitude to the Road Development Authority for their continuous trust in RR Construction, and to our dedicated project team for delivering this milestone project efficiently, safely, and within the stipulated timeline.</p>
    `
  }
];
