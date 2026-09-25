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
    id: 1790320633834,
    slug: 'acquisition-watermaster-classic-dredger',
    tag: 'Fleet Expansion',
    title: 'RR Construction Expands Marine Capabilities with New Watermaster Classic Dredger',
    desc: 'We are thrilled to announce the latest addition to our heavy machinery fleet: the highly versatile, amphibious Watermaster Classic Multipurpose Dredger, enhancing our dredging and water infrastructure capabilities.',
    date: 'September 25, 2026',
    img: '/images/services/watermaster.webp',
    crop: 'center',
    content: `
      <p>RR Construction is proud to announce a major enhancement to our heavy machinery fleet with the acquisition of a brand-new <strong>Watermaster Classic Multipurpose Dredger</strong>. This strategic investment significantly expands our capabilities in specialized marine engineering, dredging, and water infrastructure development.</p>
      
      <p>The Watermaster Classic is renowned globally for its unique amphibious design, allowing it to navigate and operate efficiently in shallow waters, narrow urban canals, and environmentally sensitive coastal zones where traditional heavy dredging equipment simply cannot reach.</p>
      
      <h3>Versatility and Advanced Capabilities</h3>
      <p>Unlike standard machinery, the Watermaster is a true multi-purpose workhorse. Equipped with a suite of easily interchangeable, quick-connection attachments, it can seamlessly switch between tasks. Its core capabilities include:</p>
      <ul>
        <li><strong>Suction Dredging:</strong> Efficiently clearing silt, sludge, and debris from riverbeds and canals to restore natural water flow and prevent urban flooding.</li>
        <li><strong>Backhoe Dredging & Excavation:</strong> Precision digging for deepening waterways and constructing embankment protections.</li>
        <li><strong>Piling Operations:</strong> Driving timber or steel piles to reinforce riverbanks and marine structures.</li>
        <li><strong>Raking & Vegetation Removal:</strong> Clearing invasive aquatic weeds and surface debris to improve water quality and navigability.</li>
      </ul>
      
      <h3>Environmental Commitment</h3>
      <p>As an ISO 14001:2015 certified company, environmental stewardship is at the forefront of our operations. The Watermaster Classic is engineered to execute high-impact work with a remarkably low environmental footprint. Its intelligent propulsion and independent operation minimize the need for auxiliary support vessels, reducing fuel consumption and emissions.</p>
      
      <p>This state-of-the-art acquisition reaffirms RR Construction's position as a premier engineering contractor in Sri Lanka, continuously adopting innovative technologies to deliver superior, sustainable infrastructure solutions to our clients.</p>

`
  },
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
    id: 1790071356770,
    slug: 'reconstruction-of-bridge-horawela-pelawatta-pitigala',
    tag: 'Project Completion',
    title: 'Reconstruction of Bridge No. 4/1 on Horawela - Pelawatta - Pitigala Road (Balance Work)',
    desc: 'RR Construction successfully completes a comprehensive Bridges project executed for Road Development Authority, emphasizing modern engineering standards and timely delivery.',
    date: 'September 22, 2026',
    img: '/images/Photos for Web Site - HBP/Background Image.jpeg',
    crop: 'center',
    content: `
      <p>RR Construction is proud to announce the successful completion of the <strong>Reconstruction of Bridge No. 4/1 on the Horawela - Pelawatta - Pitigala Road (Balance Work)</strong>.</p>
      
      <p>Executed on behalf of the <strong>Road Development Authority (RDA)</strong>, this crucial infrastructure project reinforces our commitment to delivering high-quality, durable bridging solutions that connect communities and facilitate seamless transportation.</p>
      
      <p>Despite challenging conditions, our dedicated engineering teams utilized modern construction methodologies and stringent quality control measures to ensure the project was completed to the highest structural and safety standards.</p>
      
      <p>The successful delivery of this bridge stands as a testament to RR Construction's expertise in specialized heavy civil engineering and our ongoing contribution to the resilient development of Sri Lanka's national road network.</p>
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
,
  {
    id: 4,
    slug: 'reconstruction-of-northern-railway-line-medawachchiya-to-talai-mannar',
    tag: 'Emergency Restoration',
    title: 'Emergency Reconstruction of Northern Railway Line Damaged by Cyclone Ditwah',
    desc: 'RR Construction successfully executed the emergency reconstruction of the Northern Railway Line between Medawachchiya and Talai Mannar, rapidly restoring critical rail connectivity for IRCON International.',
    date: 'February 15, 2026',
    img: '/images/IRCON-MANNAR/Background image.jpeg',
    featured: false,
    content: `
      <p>In response to the devastating impact of Cyclone Ditwah, RR Construction (Pvt) Ltd undertook the <strong>"Emergency Reconstruction of Northern Railway Line Damaged by Cyclone Ditwah: Civil Works between Medawachchiya and Talai Mannar"</strong>. This major emergency railway restoration project was funded under Indian Grant Assistance and executed for <strong>IRCON International Limited (Government of India Undertaking)</strong>.</p>
      
      <div style="margin: 30px 0; text-align: center;">
        <img src="/images/IRCON-MANNAR/Background image.jpeg" alt="Emergency Reconstruction of Northern Railway Line" style="width: 100%; max-width: 800px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);" />
        <p style="font-size: 0.9rem; color: var(--text-light); margin-top: 10px; font-style: italic;">Heavy machinery deployed for rapid railway track restoration.</p>
      </div>

      <h3 style="font-family: var(--font-heading); color: var(--text-dark); margin-top: 40px; margin-bottom: 20px;">Rapid Restoration of Critical Infrastructure</h3>
      <p>Covering 105 km of damaged track corridor between Medawachchiya (MWH) and Talaimannar (TMP)â€”including the Chettikulam, Madhu Road, and Murukkan sectionsâ€”our engineering teams mobilized rapidly to execute large-scale formation civil works and restore safe rail connectivity.</p>
      
      <p>The critical scope of the project comprised:</p>
      <ul style="color: var(--text-light); line-height: 1.8; margin-bottom: 20px; padding-left: 20px;">
        <li style="margin-bottom: 10px;">Removal of 2,325 Cum of washed-away debris</li>
        <li style="margin-bottom: 10px;">Rock boulder formation preparation (2,820 Cum)</li>
        <li style="margin-bottom: 10px;">ABC sub-ballast compaction (2,400 Cum)</li>
        <li style="margin-bottom: 10px;">Geotextile laying spanning 8,120 Sqm</li>
        <li style="margin-bottom: 10px;">Grouted stone riprap slope stabilization (1,025 Cum)</li>
        <li style="margin-bottom: 10px;">Transportation and supply of 3,500 Cum of railway ballast</li>
      </ul>

      <h3 style="font-family: var(--font-heading); color: var(--text-dark); margin-top: 40px; margin-bottom: 20px;">Delivering Under Pressure</h3>
      <p>Executed within a strict and demanding 2-month schedule, this emergency restoration successfully re-established safe, high-speed rail transportation to Sri Lanka's northern coastal line. The project was completed strictly adhering to ISO 9001 quality management systems and IRCON's stringent railway engineering standards.</p>

      <div style="margin: 30px 0; text-align: center;">
        <img src="/images/IRCON-MANNAR/WhatsApp Image 2026-08-01 at 12.35.44.jpeg" alt="Track laying and ballast work" style="width: 100%; max-width: 800px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);" />
      </div>
      
      <p>RR Construction remains dedicated to supporting national infrastructure resilience, consistently delivering excellence even under the most challenging emergency conditions.</p>
    `
  }

];

