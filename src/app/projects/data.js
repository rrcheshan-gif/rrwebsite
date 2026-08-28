// Sorted array of all RR Construction completed & ongoing projects by Year (Descending)
const projectsData = [
  // ONGOING PROJECTS
  {
    id: 'project-mod-landslide-10d',
    type: 'ongoing',
    category: "disaster",
    title: "Ongoing Landslide Mitigation Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing",
      heroImage: 'images/Badulla Landslide/Background image.jpeg',
      galleryImages: [
        'images/Badulla Landslide/Background image.jpeg',
        'images/Badulla Landslide/WhatsApp Image 2026-07-28 at 16.41.31.jpeg',
        'images/Badulla Landslide/WhatsApp Image 2026-07-28 at 16.41.34.jpeg',
        'images/Badulla Landslide/WhatsApp Image 2026-07-28 at 16.41.43.jpeg',
        'images/Badulla Landslide/WhatsApp Image 2026-07-28 at 16.41.45.jpeg'
      ]
  },
  {
    id: 'project-mod-landslide-10f',
    type: 'ongoing',
    category: "disaster",
    title: "Ongoing Landslide Mitigation Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-rda-kurikadduvan-jetty',
    type: 'ongoing',
    category: "maritime",
    title: "Ongoing Maritime & Dredging Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-mod-landslide-10j',
    type: 'ongoing',
    category: "disaster",
    title: "Ongoing Landslide Mitigation Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-rda-northern-province-lot03',
    type: 'ongoing',
    category: "roads",
    title: "Ongoing Road Construction Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing",
    heroImage: "images/KRP/hero.jpeg",
    galleryImages: [
      "images/KRP/img-1.jpeg",
      "images/KRP/img-2.jpeg",
      "images/KRP/img-3.jpeg",
      "images/KRP/img-4.jpeg"
    ]
  },
  {
    id: 'project-rda-colombo-galle',
    type: 'ongoing',
    category: "roads",
    title: "Ongoing Road Construction Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-1',
    type: 'ongoing',
    category: "roads",
    title: "Ongoing Road Construction Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-cfhc-kirinda-sand-removal',
    type: 'completed',
    category: "maritime",
    title: "Removal and Leveling of Accumulated Sea Sand at Kirinda Fishery Harbour",
    client: "Ceylon Fishery Harbours Corporation",
    duration: "120 Days",
    year: 2026,
    status: "Completed",
    
    
  },
  {
    id: 'project-2',
    type: 'completed',
    category: "maritime",
    title: "Procurement of Construction of Boat Launching Ramp at Beruwala",
    client: "Ministry of Fisheries",
    duration: "12 Months",
    year: "2026/06/10",
    status: "Completed",
    heroImage: 'images/Beruwala/Background image.jpeg',
    galleryImages: [
      'images/Beruwala/Background image.jpeg',
      'images/Beruwala/WhatsApp Image 2026-07-28 at 13.33.58.jpeg',
      'images/Beruwala/WhatsApp Image 2026-07-28 at 13.34.00.jpeg',
      'images/Beruwala/WhatsApp Image 2026-07-28 at 13.34.01.jpeg',
      'images/Beruwala/WhatsApp Image 2026-07-28 at 13.34.03.jpeg'
    ]
  },
  {
    id: 'project-3',
    type: 'ongoing',
    category: "bridges",
    title: "Ongoing Bridge Construction Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing",
    heroImage: "images/BBP/hero.jpeg",
    galleryImages: [
      "images/BBP/img-1.jpeg",
      "images/BBP/img-2.jpeg",
      "images/BBP/img-3.jpeg",
      "images/BBP/img-4.jpeg",
      "images/BBP/img-5.jpeg",
      "images/BBP/img-6.jpeg"
    ]
  },
  {
    id: 'project-4',
    type: 'ongoing',
    category: "bridges",
    title: "Ongoing Bridge Construction Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-5',
    type: 'ongoing',
    category: "bridges",
    title: "Ongoing Bridge Construction Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-6',
    type: 'completed',
    category: "bridges",
    title: "Reconstruction of Bridge No. 4/1 on Horawela - Pelawatta - Pitigala Road (Balance Work)",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2026,
    status: "Completed",
    heroImage: 'images/Photos for Web Site - HBP/Background Image.jpeg',
    galleryImages: [
      'images/Photos for Web Site - HBP/Background Image.jpeg',
      'images/Photos for Web Site - HBP/WhatsApp Image 2026-07-29 at 11.27.59 AM (1).jpeg',
      'images/Photos for Web Site - HBP/WhatsApp Image 2026-07-29 at 11.28.00 AM (1).jpeg',
      'images/Photos for Web Site - HBP/WhatsApp Image 2026-07-29 at 11.52.13 AM.jpeg',
      'images/Photos for Web Site - HBP/WhatsApp Image 2026-07-29 at 11.52.14 AM.jpeg',
      'images/Photos for Web Site - HBP/WhatsApp Image 2026-07-29 at 11.52.24 AM.jpeg',
      'images/Photos for Web Site - HBP/WhatsApp Image 2026-07-29 at 11.52.25 AM.jpeg'
    ]
  },
  {
    id: 'project-7',
    type: 'ongoing',
    category: "bridges",
    title: "Ongoing Bridge Construction Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-8',
    type: 'ongoing',
    category: "roads",
    title: "Ongoing Road Construction Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-9',
    type: 'ongoing',
    category: "bridges",
    title: "Ongoing Bridge Construction Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-10',
    type: 'completed',
    category: "roads",
    title: "Reconstruction of Proposed Improvement and Rehabilitation of Kurikadduvan Jetty (Approach Road)",
    client: "Road Development Authority",
      location: "Kurikadduvan Jetty, Jaffna, Sri Lanka",
      images: [
        "/images/projects/project-10/Background image.jpeg",
        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.00 (2).jpeg",
        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.00.jpeg",
        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.01.jpeg",
        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.02 (1).jpeg",
        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.02.jpeg",
        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.03 (1).jpeg",
        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.03.jpeg",
        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.04 (1).jpeg",
        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.04 (2).jpeg",
        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.04.jpeg",
        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.06 (1).jpeg",
        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.06 (2).jpeg",
        "/images/projects/project-10/WhatsApp Image 2026-08-22 at 12.42.06.jpeg"
      ],

    duration: "12 Months",
    year: 2025,
    status: "Completed"
  },
  {
    id: 'project-11',
    type: 'completed',
    category: "bridges",
    title: "Rehabilitation of Bridge No. 27/1 on Jaffna - Manipay - Karainagar Road (AB017)",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2026,
    status: "Completed"
  },
  {
    id: 'project-12',
    type: 'ongoing',
    category: "irrigation",
    title: "Ongoing Irrigation & Water Supply Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing",
    heroImage: 'images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.28.jpeg',
    images: [
      'images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.28.jpeg',
      'images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.28 (1).jpeg',
      'images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.33.jpeg',
      'images/nagapaduwan/WhatsApp Image 2026-07-24 at 23.23.55.jpeg'
    ]
  },
  {
    id: 'project-14',
    type: 'ongoing',
    category: "disaster",
    title: "Ongoing Landslide Mitigation Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-16',
    type: 'ongoing',
    category: "bridges",
    title: "Ongoing Bridge Construction Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-17',
    type: 'ongoing',
    category: "maritime",
    title: "Ongoing Maritime & Dredging Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-18',
    type: 'completed',
    category: "bridges",
    title: "Reconstruction of Bridge No. 12/1 on Paranthan - Karachchi - Mullaitivu Road (A035) Balance Work",
    client: "Road Development Authority",
    duration: "12 Months",
    year: "2026/07/28",
    status: "Completed",
    heroImage: 'images/POINT PEDRO/Background image.jpeg',
    galleryImages: [
      'images/POINT PEDRO/Background image.jpeg',
      'images/POINT PEDRO/WhatsApp Image 2026-07-28 at 09.23.10.jpeg',
      'images/POINT PEDRO/WhatsApp Image 2026-07-28 at 09.23.10 (1).jpeg',
      'images/POINT PEDRO/WhatsApp Image 2026-07-28 at 09.23.12.jpeg'
    ]
  },
  {
    id: 'project-19',
    type: 'ongoing',
    category: "bridges",
    title: "Ongoing Bridge Construction Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing",
    heroImage: 'images/puttalam/puttalam-1.jpg',
    galleryImages: [
      'images/puttalam/puttalam-1.jpg', 'images/puttalam/puttalam-2.jpg', 'images/puttalam/puttalam-3.jpg',
      'images/puttalam/puttalam-4.jpg', 'images/puttalam/puttalam-5.jpg', 'images/puttalam/puttalam-6.jpg',
      'images/puttalam/puttalam-7.jpg', 'images/puttalam/puttalam-8.jpg', 'images/puttalam/puttalam-9.jpg',
      'images/puttalam/puttalam-10.jpg', 'images/puttalam/puttalam-11.jpg', 'images/puttalam/puttalam-12.jpg',
      'images/puttalam/puttalam-13.jpg', 'images/puttalam/puttalam-14.jpg', 'images/puttalam/puttalam-15.jpg',
      'images/puttalam/puttalam-16.jpg', 'images/puttalam/puttalam-17.jpg', 'images/puttalam/puttalam-18.jpg',
      'images/puttalam/puttalam-19.jpg', 'images/puttalam/puttalam-20.jpg', 'images/puttalam/puttalam-21.jpg',
      'images/puttalam/puttalam-22.jpg', 'images/puttalam/puttalam-23.jpg', 'images/puttalam/puttalam-24.jpg',
      'images/puttalam/puttalam-25.jpg', 'images/puttalam/puttalam-26.jpg', 'images/puttalam/puttalam-27.jpg',
      'images/puttalam/puttalam-28.jpg'
    ]
  },
  {
    id: 'project-20',
    type: 'ongoing',
    category: "bridges",
    title: "Ongoing Bridge Construction Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-21',
    type: 'ongoing',
    category: "bridges",
    title: "Ongoing Bridge Construction Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing",
    heroImage: "images/VBP/hero.jpeg",
    galleryImages: [
      "images/VBP/img-1.jpeg",
      "images/VBP/img-2.jpeg",
      "images/VBP/img-3.jpeg",
      "images/VBP/img-4.jpeg"
    ]
  },
  {
    id: 'project-22',
    type: 'ongoing',
    category: "bridges",
    title: "Ongoing Bridge Construction Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing",
    heroImage: "images/WBP/hero.jpeg",
    galleryImages: [
      "images/WBP/img-1.jpeg",
      "images/WBP/img-2.jpeg",
      "images/WBP/img-3.jpeg",
      "images/WBP/img-4.jpeg",
      "images/WBP/img-5.jpeg",
      "images/WBP/img-6.jpeg"
    ]
  },
  {
    id: 'project-23',
    type: 'completed',
    category: "railway",
    title: "Maho to Anuradhapura Railway Line Track Rehabilitation & Ancillary Works",
    client: "IRCON International Limited",
    duration: "6 Months",
    year: 2023,
    status: "Completed",
    description: `<p style="margin-bottom: 20px;"><strong>Formation, Civil & other Ancillary works between Anuradhapura to Vauniya in Connection with up gradation of Railway Line from Maho to Omanthai under Indian Line of Credit - Track Rehabilitation & Ancillary Works.</strong></p>
<p>Executed for IRCON International Limited this critical railway infrastructure project was completed in 6 months, restoring high-speed rail connectivity to the northern line.</p>`
  },
  {
    id: 'project-27',
    type: 'ongoing',
    category: "roads",
    title: "Ongoing Road Construction Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing",
    heroImage: 'images/mayilvakanapuram/mayil-hero.jpg',
    galleryImages: [
      'images/mayilvakanapuram/mayil-hero.jpg',
      'images/mayilvakanapuram/mayil-1.jpg',
      'images/mayilvakanapuram/mayil-2.jpg',
      'images/mayilvakanapuram/mayil-3.jpg'
    ]
  },
  {
    id: 'project-28',
    type: 'ongoing',
    category: "roads",
    title: "Ongoing Road Construction Project",
    client: "Confidential",
    duration: "Ongoing",
    year: 2025,
    status: "Ongoing"
  },
  // ONGOING / RECENT
  {
    id: 'project-92',
    type: 'completed',
    category: "disaster",
    title: "Landslide Mitigation Measures at 05 Locations in Nuwara Eliya District (RLVMMP)",
    status: "Completed",
    client: "Ministry of Defence / NBRO",
    duration: "9 Months",
    year: 2025,
    heroImage: 'images/Landslide Mitigation Project  - Nuwaraeliya/WhatsApp Image 2026-07-02 at 9.01.02 AM.jpeg',
    galleryImages: [
      'images/Landslide Mitigation Project  - Nuwaraeliya/WhatsApp Image 2026-07-02 at 9.01.02 AM.jpeg',
      'images/Landslide Mitigation Project  - Nuwaraeliya/WhatsApp Image 2026-07-28 at 14.45.09.jpeg',
      'images/Landslide Mitigation Project  - Nuwaraeliya/WhatsApp Image 2026-07-28 at 14.46.16.jpeg',
      'images/Landslide Mitigation Project  - Nuwaraeliya/WhatsApp Image 2026-07-28 at 14.47.24.jpeg',
      'images/Landslide Mitigation Project  - Nuwaraeliya/WhatsApp Image 2026-07-28 at 14.47.56.jpeg'
    ]
  },
  {
    id: 'project-93',
    type: 'completed',
    category: "disaster",
    title: "Landslide Mitigation Measures at 05 Locations in Kegalle and Rathnapura Districts (RLVMMP)",
    status: "Completed",
    client: "Ministry of Defence / NBRO",
    duration: "9 Months",
    year: 2025
  },
  {
    id: 'project-94',
    type: 'completed',
    category: "disaster",
    title: "Landslide Mitigation Measures at 06 Location in Ratnapura District (Site No. 62,65,66,70,71,106) Under Package 6C of Reduction of Landslide Vulnerability by Mitigation Measures Project (RLVMMP)",
    status: "Completed",
    client: "Ministry of Defence / NBRO",
    duration: "9 Months",
    year: 2025
  },
  {
    id: 'project-95',
    type: 'completed',
    category: "disaster",
    title: "Landslide Mitigation Measures at 02 Locations in Matara & Hambantota Districts (Site No. 104, 151) Under Package – 06F (RLVMMP)",
    contractNo: "RLVMMP/WORKS/06F",
    status: "Completed",
    client: "Ministry of Defence - Disaster Management Division",
    duration: "9 Months (270 Days)",
    year: 2024,
    location: "Matara and Hambantota, Sri Lanka",
    description: `<p style="margin-bottom: 20px;">The <strong>"Landslide Mitigation Measures at 02 Locations in Matara & Hambantota Districts (Site No. 104, 151) Under Package – 06F of Reduction of Landslide Vulnerability by Mitigation Measures Project (RLVMMP)"</strong> [Contract No: RLVMMP/WORKS/06F] is a major disaster management infrastructure project executed for the <strong>Ministry of Defence - Disaster Management Division</strong>.</p>
                   <p style="margin-bottom: 20px;">With an intensive execution duration of 270 calendar days, RR Construction (Pvt) Ltd deployed specialized slope stabilization engineering teams, heavy drilling rigs, soil nailing systems, shotcreting equipment, and subsurface drainage mechanisms to secure vulnerable landslide sites in the Matara and Hambantota districts.</p>
                   <p style="margin-bottom: 20px;">By leveraging deep geotextile engineering, high-tensile wire mesh anchoring, and rigorous geotechnical monitoring, our engineering divisions successfully stabilized unstable slopes at Site No. 104 & Site No. 151, protecting critical transportation corridors, local communities, and public infrastructure from soil erosion and slope failures.</p>
                   <p>All mitigation works were strictly executed in compliance with ISO 9001 quality, ISO 14001 environmental, and ISO 45001 occupational safety standards, as well as strict NBRO (National Building Research Organisation) engineering protocols.</p>`
  },
  {
    id: 'project-96',
    type: 'completed',
    category: "maritime",
    title: "Reactivation and Reconstruction of Myliddy Fishery Harbour in Northern Province – Phase II",
    status: "Completed",
    client: "State Ministry of Fishery Harbour Development",
    duration: "12 Months",
    year: 2021,
    location: "Myliddy Fishery Harbour, Kankesanthurai, Sri Lanka",
    description: `<p style="margin-bottom: 20px;">The <strong>"Reactivation and Reconstruction of Myliddy Fishery Harbour in Northern Province – Phase II"</strong> project is a landmark maritime engineering development executed for the <strong>State Ministry of Fishery Harbour Development and Fish Exports</strong> .</p>
                   <p style="margin-bottom: 20px;">Following the successful completion of Phase I, Phase II involved extensive marine heavy civil engineering works, including breakwater reconstruction, basin deepening through marine dredging, quay wall extension, slipway rehabilitation, and modern anchorages for multiday fishing vessels in the Jaffna peninsula.</p>
                   <p style="margin-bottom: 20px;">Deploying RR Construction's specialized marine equipment fleet, barge-mounted excavators, and coastal engineering specialists, the harbour was restored to full operational capacity, empowering northern fishing communities and boosting regional fish export logistics.</p>
                   <p>All marine construction operations strictly complied with ISO 9001 quality management standards and marine environmental safety guidelines.</p>`
  },
  {
    id: 'project-97',
    type: 'completed',
    category: "bridges",
    title: "Widening & Redecking of Bridge No. 25/3 on Nagoda – Kalwellawa – Bellapitiya Road (B 304) – (Balance Work)",
    contractNo: "RDA/RM&M/WP/GOSL(WB)/2025/04",
    status: "Completed",
    client: "Road Development Authority",
    duration: "9 Months (273 Days)",
    year: 2025,
    location: "Nagoda Kalwellawa Bellapitiya Road, Sri Lanka",
    description: `<p style="margin-bottom: 20px;">The <strong>"Widening & Redecking of Bridge No. 25/3 on Nagoda – Kalwellawa – Bellapitiya Road (B 304) – (Balance Work)"</strong> [Contract No: RDA/RM&M/WP/GOSL(WB)/2025/04] is a vital bridge infrastructure project executed for the <strong>Road Development Authority (RDA)</strong>.</p>
                   <p style="margin-bottom: 20px;">With an execution timeframe of 273 calendar days, the scope involved extensive structural bridge engineering, including span widening, reinforced concrete deck replacement, abutment reinforcement, and asphalt approach road surfacing on the B 304 highway corridor.</p>
                   <p style="margin-bottom: 20px;">Leveraging RR Construction's heavy machinery fleet and specialized bridge construction teams, the bridge was successfully widened to modern safety standards, dramatically enhancing traffic capacity and structural resilience against heavy vehicle loads and monsoonal flood conditions.</p>
                   <p>All bridge widening and redecking operations strictly complied with RDA technical specifications, ISO 9001 quality management, and ISO 45001 safety protocols.</p>`
  },
  {
    id: 'project-98',
    type: 'completed',
    category: "railway",
    title: "Emergency Reconstruction of Northern Railway Line Damaged by Cyclone Ditwah (Maho to Omanthai)",
    contractNo: "IRCON/9046/SLR.MAHO-OMT/Restoration Work/Civil-03/LOA",
    status: "Completed",
    client: "IRCON International Limited (Government of India Undertaking)",
    duration: "2 Months",
    year: 2026,
    location: "Maho Railway Station, Maho, Sri Lanka",
    description: `<p style="margin-bottom: 20px;">The <strong>"Emergency Reconstruction of Northern Railway Line Damaged by Cyclone Ditwah: Civil Works between Maho and Omanthai"</strong> [LOA No: IRCON/9046/SLR.MAHO-OMT/Restoration Work/Civil-03/LOA] is an urgent railway infrastructure restoration project funded under Indian Grant Assistance and executed for <strong>IRCON International Limited</strong> .</p>
                   <p style="margin-bottom: 20px;">Following severe cyclone damage across 128 km of the Northern Railway Line, RR Construction deployed rapid-response heavy civil engineering teams, heavy excavators, rock boulder transportation, and specialized track machinery to perform emergency embankment restoration across multiple key sections (including Ambanpola-Galgamuwa, Galgamuwa-Senarathgama, Tambuttegama-Talawa, Sravastipura-Anuradhapura, Boo Oya-Vavuniya, and Thandikulam-Omanthai).</p>
                   <p style="margin-bottom: 20px;">The scope of work included the removal of washed-away debris, formation preparation with rock boulders (2,720 Cum), ABC layer laying and compaction (750 Cum), geotextile & geogrid bearing layer installation, gabion wall construction, grouted stone riprap slope protection (1,315 Cum), and the supply & laying of 3,500 Cum of railway ballast.</p>
                   <p>All emergency railway formation civil works were completed within an intensive 2-month timeframe during track block operations in full compliance with IRCON technical specifications and CIDA SCA/5 standards.</p>`
  },
  {
    id: 'project-99',
    type: 'completed',
    category: "railway",
    title: "Emergency Reconstruction of Northern Railway Line Damaged by Cyclone Ditwah (Medawachchiya to Talai Mannar)",
    contractNo: "IRCON/9046/SLR.MAHO-OMT/Restoration Work/Civil-04/LOA",
    status: "Completed",
    client: "IRCON International Limited (Government of India Undertaking)",
    duration: "2 Months",
    year: 2026,
    location: "Medawachchiya Railway Station, Medawachchiya, Sri Lanka",
    heroImage: 'images/IRCON-MANNAR/Background image.jpeg',
    galleryImages: [
      'images/IRCON-MANNAR/Background image.jpeg',
      'images/IRCON-MANNAR/WhatsApp Image 2026-08-01 at 12.32.07.jpeg',
      'images/IRCON-MANNAR/WhatsApp Image 2026-08-01 at 12.32.28.jpeg',
      'images/IRCON-MANNAR/WhatsApp Image 2026-08-01 at 12.34.36.jpeg',
      'images/IRCON-MANNAR/WhatsApp Image 2026-08-01 at 12.35.05.jpeg',
      'images/IRCON-MANNAR/WhatsApp Image 2026-08-01 at 12.35.44.jpeg'
    ],
    description: `<p style="margin-bottom: 20px;">The <strong>"Emergency Reconstruction of Northern Railway Line Damaged by Cyclone Ditwah: Civil Works between Medawachchiya and Talai Mannar"</strong> [LOA No: IRCON/9046/SLR.MAHO-OMT/Restoration Work/Civil-04/LOA] is a major emergency railway restoration project funded under Indian Grant Assistance and executed for <strong>IRCON International Limited</strong> .</p>
                   <p style="margin-bottom: 20px;">Covering 105 km of damaged track corridor between Medawachchiya (MWH) and Talaimannar (TMP) (including Chettikulam, Madhu Road, and Murukkan sections), RR Construction executed rapid-scale formation civil works to restore rail connectivity following Cyclone Ditwah.</p>
                   <p style="margin-bottom: 20px;">The critical scope comprised removal of washed-away debris (2,325 Cum), rock boulder formation preparation (2,820 Cum), ABC sub-ballast compaction (2,400 Cum), geotextile laying (8,120 Sqm), grouted stone riprap slope stabilization (1,025 Cum), and transportation and supply of 3,500 Cum of railway ballast.</p>
                   <p>Executed within a strict 2-month schedule, this emergency restoration restored safe, high-speed rail transportation to Sri Lanka's northern coastal line under ISO 9001 and IRCON quality standards.</p>`
  },
  {
    id: 'project-29',
    type: 'completed', category: "roads",
    title: "Central Expressway Project Section 3 (Pothuhera to Galagedara)",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "12 Months",
    year: 2025
  },
  {
    id: 'project-30',
    type: 'completed', category: "roads",
    title: "Rehabilitation of 30.12km Rural Roads in Rathnapura",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "18 Months",
    year: 2025
  },
  {
    id: 'project-31',
    type: 'completed', category: "roads",
    title: "Rehabilitation of 20.80 Km Rural Roads in Palindanuwara (Kalutara)",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "12 Months",
    year: 2025
  },
  {
    id: 'project-32',
    type: 'completed', category: "maritime",
    title: 'Construction of Gandara Fishery Harbour',
    heroImage: 'images/maritime-harbour-site.jpg',
    galleryImages: [ 'images/maritime-harbour-site.jpg', 'images/gandara/gandara-1.jpg', 'images/gandara/gandara-2.jpg', 'images/gandara/gandara-3.jpg', 'images/gandara/gandara-4.jpg', 'images/gandara/gandara-5.jpg', 'images/gandara/gandara-6.jpg', 'images/gandara/gandara-7.jpg', 'images/gandara/gandara-8.jpg', 'images/gandara/gandara-9.jpg', 'images/gandara/gandara-10.jpg', 'images/gandara/gandara-11.jpg', 'images/gandara/gandara-12.jpg', 'images/gandara/gandara-13.jpg', 'images/gandara/gandara-14.jpg', 'images/gandara/gandara-15.jpg', 'images/gandara/gandara-16.jpg', 'images/gandara/gandara-17.jpg', 'images/gandara/gandara-18.jpg', 'images/gandara/gandara-19.jpg', 'images/gandara/gandara-20.jpg', 'images/gandara/gandara-21.jpg', 'images/gandara/gandara-22.jpg', 'images/gandara/gandara-23.jpg', 'images/gandara/gandara-24.jpg', 'images/gandara/gandara-25.jpg', 'images/gandara/gandara-26.jpg', 'images/gandara/gandara-27.jpg', 'images/gandara/gandara-28.jpg', 'images/gandara/gandara-29.jpg', 'images/gandara/gandara-30.jpg', 'images/gandara/gandara-31.jpg', 'images/gandara/gandara-32.jpg', 'images/gandara/gandara-33.jpg', 'images/gandara/gandara-34.jpg', 'images/gandara/gandara-35.jpg', 'images/gandara/gandara-36.jpg', 'images/gandara/gandara-37.jpg', 'images/gandara/gandara-38.jpg', 'images/gandara/gandara-39.jpg', 'images/gandara/gandara-40.jpg', 'images/gandara/gandara-41.jpg', 'images/gandara/gandara-42.jpg' ],
    status: "Completed",
    client: "Ministry of Fisheries",
    contractNo: "MFARD/PIMU/2019/CAPC/003",
    duration: "36 Months",
    year: 2025
  },
  
  // 2024
  {
    id: 'project-91',
    type: 'completed',
    category: "roads",
    title: "Second Integrated Road Investment Program - Rehabilitation, Improvement and Maintenance of 23.96 Km Rural Roads in Badulla District",
    status: "Completed",
    client: "Road Development Authority",
    duration: "24 Months",
    year: 2024,
    heroImage: 'images/BADULLA/BACKGROUND IMAGE.jpeg',
    galleryImages: [
      'images/BADULLA/BACKGROUND IMAGE.jpeg',
      'images/BADULLA/WhatsApp Image 2026-07-28 at 14.03.18.jpeg',
      'images/BADULLA/WhatsApp Image 2026-07-28 at 14.13.10.jpeg',
      'images/BADULLA/WhatsApp Image 2026-07-28 at 14.13.38.jpeg',
      'images/BADULLA/WhatsApp Image 2026-07-28 at 14.14.10.jpeg',
      'images/BADULLA/WhatsApp Image 2026-07-28 at 14.14.28.jpeg',
      'images/BADULLA/WhatsApp Image 2026-07-28 at 14.18.21.jpeg',
      'images/BADULLA/WhatsApp Image 2026-07-28 at 14.23.11.jpeg',
      'images/BADULLA/WhatsApp Image 2026-07-28 at 14.23.53.jpeg',
      'images/BADULLA/WhatsApp Image 2026-07-28 at 14.26.09.jpeg',
      'images/BADULLA/WhatsApp Image 2026-08-01 at 12.15.02.jpeg',
      'images/BADULLA/WhatsApp Image 2026-08-01 at 12.18.10.jpeg'
    ]
  },
  {
    id: 'project-33',
    type: 'completed', category: "roads",
    title: "Rehabilitation of 26.05 Km of Rural Roads in Kalutara District",
    status: "Completed",
    client: "Road Development Authority",
    duration: "09 Months",
    year: 2024,
    description: `<p style="margin-bottom: 20px;">The <strong>Rehabilitation / Improvement of 26.05 Km of Rural Roads in the Kalutara District</strong> project included performance-based maintenance for three years, executed for the Road Development Authority.</p>
<p>Completed in a fast-tracked 9-month timeframe, the project dramatically enhanced rural transport infrastructure in the district.</p>`
  },
  {
    id: 'project-34',
    type: 'completed', category: "disaster",
    title: 'Rectification of Unstable Slope at NIFS Kandy',
    heroImage: 'images/nifs-landslide/nifs-hero.jpg',
    galleryImages: [ 'images/nifs-landslide/nifs-hero.jpg', 'images/nifs-landslide/nifs-1.jpg', 'images/nifs-landslide/nifs-2.jpg', 'images/nifs-landslide/nifs-3.jpg', 'images/nifs-landslide/nifs-4.jpg', 'images/nifs-landslide/nifs-5.jpg' ],
    status: "Completed",
    client: "Ministry of Defence / NBRO",
    
    duration: "8 Months",
    year: 2024
  },
  {
    id: 'project-35',
    type: 'completed', category: "disaster",
    title: 'RLVMMP Landslide Mitigation at Nursing Training School Kandy',
    heroImage: 'images/kandy-landslide/kandy-5.jpg',
    galleryImages: [ 'images/kandy-landslide/kandy-1.jpg', 'images/kandy-landslide/kandy-2.jpg', 'images/kandy-landslide/kandy-3.jpg', 'images/kandy-landslide/kandy-4.jpg', 'images/kandy-landslide/kandy-5.jpg' ],
    status: "Completed",
    client: "Ministry of Defence",
    
    duration: "12 Months",
    year: 2024
  },

  // 2023
  {
    id: 'project-36',
    type: 'completed', category: "railway",
    title: "Anuradhapura to Vavuniya Railway Track Rehabilitation",
    status: "Completed",
    client: "IRCON International Limited",
    
    duration: "6 Months",
    year: 2023
  },
  {
    id: 'project-37',
    type: 'completed', category: "disaster",
    title: "Landslide Mitigation in 32 Sites (Kalutara, Rathnapura, Matara)",
    status: "Completed",
    client: "Ministry of Defence",
    
    duration: "12 Months",
    year: 2023
  },
  {
    id: 'project-38',
    type: 'completed', category: "disaster",
    title: 'Landslide Mitigation on Hatton Maskeliya - Delhouse Road',
    heroImage: 'images/hatton-landslide/hatton-1.jpg',
    galleryImages: [ 'images/hatton-landslide/hatton-1.jpg', 'images/hatton-landslide/hatton-2.jpg', 'images/hatton-landslide/hatton-3.jpg', 'images/hatton-landslide/hatton-4.jpg', 'images/hatton-landslide/hatton-5.jpg', 'images/hatton-landslide/hatton-6.jpg', 'images/hatton-landslide/hatton-7.jpg', 'images/hatton-landslide/hatton-8.jpg', 'images/hatton-landslide/hatton-9.jpg' ],
    status: "Completed",
    client: "Ministry of Defence",
    
    duration: "8 Months",
    year: 2023
  },
  {
    id: 'project-39',
    type: 'completed', category: "disaster",
    title: "Landslide Mitigation Along Railway Main Line (22 Sites)",
    status: "Completed",
    client: "Ministry of Defence",
    
    duration: "15 Months",
    year: 2023
  },
  {
    id: 'project-40',
    type: 'completed',
    category: "irrigation",
    title: "Rehabilitation of Kalmadu Scheme Headworks",
    contractNo: "LK-MOMDE-163045-CW-RFB",
    status: "Completed",
    client: "Ministry of Irrigation - IWWRMP (Kilinochchi Range)",
    duration: "24 Months (730 Days)",
    year: 2023,
    location: "Kalmadu Tank, Ramanathapuram, Kilinochchi, Sri Lanka",
    heroImage: 'images/KALMADU/BACKGROUND IMAGE.jpeg',
    galleryImages: [
      'images/KALMADU/BACKGROUND IMAGE.jpeg',
      'images/KALMADU/WhatsApp Image 2026-08-01 at 11.46.27.jpeg',
      'images/KALMADU/WhatsApp Image 2026-08-01 at 11.46.47.jpeg',
      'images/KALMADU/WhatsApp Image 2026-08-01 at 11.47.08.jpeg',
      'images/KALMADU/WhatsApp Image 2026-08-01 at 11.55.27.jpeg',
      'images/KALMADU/WhatsApp Image 2026-08-01 at 11.55.53.jpeg',
      'images/KALMADU/WhatsApp Image 2026-08-01 at 11.56.12.jpeg',
      'images/KALMADU/WhatsApp Image 2026-08-01 at 11.57.55.jpeg',
      'images/KALMADU/WhatsApp Image 2026-08-01 at 11.58.39 (1).jpeg',
      'images/KALMADU/WhatsApp Image 2026-08-01 at 11.58.39.jpeg'
    ],
    description: `<p style="margin-bottom: 20px;">The <strong>"Rehabilitation of Kalmadu Scheme Headworks"</strong> [Contract No: LK-MOMDE-163045-CW-RFB] is a major water resources and irrigation infrastructure project executed under the <strong>Integrated Watershed & Water Resources Management Project (IWWRMP)</strong> of the <strong>Ministry of Irrigation</strong>.</p>
                   <p style="margin-bottom: 20px;">With a 730-day (24-month) completion schedule, the project focused on comprehensive structural rehabilitation of headworks, dam spillways, sluice gates, bund reinforcement, and water management structures in the Kilinochchi Range, Northern Province.</p>
                   <p style="margin-bottom: 20px;">Leveraging RR Construction's specialized hydraulic engineering divisions and earth-moving machinery, the headworks were restored to increase reservoir storage capacity, secure agricultural irrigation channels, and safeguard local communities against severe flood risks during heavy monsoonal seasons.</p>
                   <p>All irrigation civil works strictly complied with Northern Province Irrigation Department specifications, ICTAD/SBD/02 standards, and ISO 9001 quality management guidelines.</p>`
  },

  // 2022
  {
    id: 'project-41',
    type: 'completed', category: "roads",
    title: "Second Integrated Road Investment Program - Mannar District (49.01 Km)",
    status: "Completed",
    client: "Road Development Authority",
    duration: "24 Months",
    year: 2022,
    description: `<p style="margin-bottom: 20px;">The <strong>"Second Integrated Road Investment Program - Rehabilitation / Improvement and Maintenance of 49.01 Km Rural Roads in Mannar District in the Northern Province – Package 3"</strong> is a major infrastructure development executed for the <strong>Road Development Authority</strong>.</p>
<p style="margin-bottom: 20px;">With a 24-month duration, RR Construction successfully rehabilitated a vast network of rural roads in the Mannar district, enhancing rural connectivity, agricultural transport, and economic development in the region.</p>
<p>The project involved extensive earthworks, sub-base and base course construction, asphalt paving, and the establishment of robust drainage systems across 49.01 kilometers.</p>`
  },
  {
    id: 'project-42',
    type: 'completed', category: "roads",
    title: 'Second Integrated Road Investment Program - Kilinochchi (53.60 Km)',
    heroImage: 'images/kilinochchi-iroad/kilinochchi-hero.jpg',
    galleryImages: [ 'images/kilinochchi-iroad/kilinochchi-hero.jpg', 'images/kilinochchi-iroad/kilinochchi-1.jpg', 'images/kilinochchi-iroad/kilinochchi-2.jpg', 'images/kilinochchi-iroad/kilinochchi-3.jpg', 'images/kilinochchi-iroad/kilinochchi-4.jpg', 'images/kilinochchi-iroad/kilinochchi-5.jpg' ],
    status: "Completed",
    client: "Road Development Authority",
    duration: "24 Months",
    year: 2022,
    description: `<p style="margin-bottom: 20px;">Executed for the <strong>Road Development Authority</strong>, this project involved the rehabilitation and improvement of 53.60 km of rural roads in the Kilinochchi District (Package 2) under the Second Integrated Road Investment Program.</p>
<p>Over the 24-month contract period, our engineering teams delivered comprehensive road reconstruction, asphalt surfacing, and associated drainage structures, significantly improving the transport network in the Northern Province.</p>`
  },
  {
    id: 'project-43',
    type: 'completed', category: "roads",
    title: "Integrated Road Development Program - Kurunegala (99.00 Km)",
    status: "Completed",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2022,
    description: `<p style="margin-bottom: 20px;">The <strong>Integrated Road Development Program - Rehabilitation/ Improvements of 99.00 Km Rural Roads in the Kurunegala District</strong> (Package 3) included performance-based maintenance for three years.</p>
<p>this extensive 12-month project upgraded nearly 100 kilometers of rural road infrastructure, demonstrating RR Construction's capacity to deliver massive road network improvements efficiently and to the highest standards.</p>`
  },
  {
    id: 'project-44',
    type: 'completed', category: "water",
    title: "Matara Stage IV Water Supply Project - Raw Water Intake",
    status: "Completed",
    client: "NWSDB",
    
    duration: "27 Months",
    year: 2022
  },
  {
    id: 'project-45',
    type: 'completed', category: "water",
    title: "Pipe Laying Distribution Main in Katana Central Zone",
    status: "Completed",
    client: "NWSDB",
    
    duration: "4 Months",
    year: 2022
  },
  {
    id: 'project-46',
    type: 'completed', category: "maritime",
    title: "Negombo Lagoon Dredging - Lellama Site II",
    status: "Completed",
    client: "Ministry of Fisheries",
    
    duration: "09 Months",
    year: 2022
  },

  // 2021
  {
    id: 'project-47',
    type: 'completed', category: "maritime",
    title: "Construction of Fishery Harbor at Wellamankara Wennappuwa",
    status: "Completed",
    client: "Ministry of Fisheries",
    
    duration: "30 Months",
    year: 2021,
    heroImage: 'images/wellamankara/background image.png',
    galleryImages: [
      'images/wellamankara/background image.png',
      'images/wellamankara/IMG-20220407-WA0004.jpg',
      'images/wellamankara/IMG-20220407-WA0005.jpg',
      'images/wellamankara/IMG_20211227_182835_447.jpg',
      'images/wellamankara/IMG_20220124_083315_232.jpg',
      'images/wellamankara/IMG_20220124_083350_930.jpg',
      'images/wellamankara/IMG_20220124_083402_418.jpg',
      'images/wellamankara/IMG_20220124_083522_514.jpg',
      'images/wellamankara/IMG_20220124_084047_912.jpg',
      'images/wellamankara/IMG_20220124_084108_994.jpg',
      'images/wellamankara/IMG_20220124_084547_236.jpg',
      'images/wellamankara/IMG_20220124_084659_272.jpg',
      'images/wellamankara/IMG_20220124_084720_479.jpg',
      'images/wellamankara/building-projects.jpg',
      'images/wellamankara/IMG_20220124_084819_781.jpg',
      'images/wellamankara/IMG_20220124_084837_095.jpg',
      'images/wellamankara/IMG_20220124_084844_400.jpg',
      'images/wellamankara/IMG_20220124_084915_120.jpg',
      'images/wellamankara/IMG_20220124_084933_056.jpg',
      'images/wellamankara/IMG_20220124_084941_394.jpg',
      'images/wellamankara/IMG_20220124_085000_384.jpg',
      'images/wellamankara/IMG_20220124_085004_245.jpg',
      'images/wellamankara/IMG_20220124_085034_157.jpg',
      'images/wellamankara/IMG_20220124_085139_033.jpg',
      'images/wellamankara/IMG_20220124_085214_090.jpg',
      'images/wellamankara/IMG_20220124_085359_828.jpg',
      'images/wellamankara/IMG_20220124_085419_720.jpg',
      'images/wellamankara/IMG_20220124_085459_404.jpg',
      'images/wellamankara/IMG_20220124_085554_105.jpg',
      'images/wellamankara/IMG_20220124_085600_340.jpg',
      'images/wellamankara/IMG_20220124_085715_236.jpg',
      'images/wellamankara/IMG_20220419_080126_320.jpg'
    ]
  },

  // 2020
  {
    id: 'project-48',
    type: 'completed', category: "roads",
    title: "Central Expressway Project Section - 2 (Package-A)",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "09 Months",
    year: 2020
  },
  {
    id: 'project-49',
    type: 'completed', category: "disaster",
    title: "Countermeasures at Six Locations in Sabaragamuwa & Uva",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "24 Months",
    year: 2020
  },
  {
    id: 'project-50',
    type: 'completed', category: "disaster",
    title: "Landslide Mitigation Works of Medithale - Pathanawatta",
    status: "Completed",
    client: "CRIP, UVA Provincial Council",
    
    duration: "10 Months",
    year: 2020
  },
  {
    id: 'project-51',
    type: 'completed', category: "bridges",
    title: "Construction of Flood Gate With Culvert Near Thalangama Tank",
    status: "Completed",
    client: "Ministry of Megapolis",
    
    duration: "08 Months",
    year: 2020
  },
  {
    id: 'project-52',
    type: 'completed', category: "maritime",
    title: "Kolonnawa Canal Diversion Scheme - Stage III & IV",
    status: "Completed",
    client: "Ministry of Megapolis",
    
    duration: "15 Months",
    year: 2020
  },

  // 2019
  {
    id: 'project-53',
    type: 'completed', category: "roads",
    title: "Improvement of A009 Kandy Jaffna Road (Rambewa to Medawachchiya)",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "12 Months",
    year: 2019
  },
  {
    id: 'project-54',
    type: 'completed', category: "roads",
    title: "Rehabilitation of Nawalapitiya - Nagaswella Road",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "12 Months",
    year: 2019
  },
  {
    id: 'project-55',
    type: 'completed', category: "bridges",
    title: "New Bridge at CH. 6+100 Udappuwa Town",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "15 Months",
    year: 2019
  },
  {
    id: 'project-56',
    type: 'completed', category: "maritime",
    title: "Reconstruction of Myliddy Fishery Harbor - Phase I",
    status: "Completed",
    client: "Ministry of Fisheries",
    
    duration: "06 Months",
    year: 2019
  },
  {
    id: 'project-57',
    type: 'completed', category: "maritime",
    title: "Bank Protection Works of St.Sebestian North Canal",
    status: "Completed",
    client: "Metro Colombo Urban Dev.",
    
    duration: "15 Months",
    year: 2019
  },

  // 2018
  {
    id: 'project-58',
    type: 'completed', category: "roads",
    title: "Southern Expressway Subsection VI Structures (Matara to Beliatta)",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "24 Months",
    year: 2018
  },
  {
    id: 'project-59',
    type: 'completed', category: "roads",
    title: "Rehabilitation of 81km of Rural Roads in Rathnapura (R3)",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "24 Months",
    year: 2018
  },
  {
    id: 'project-60',
    type: 'completed', category: "bridges",
    title: "Major Bridges Construction Project - Package 02",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "21 Months",
    year: 2018
  },
  {
    id: 'project-61',
    type: 'completed', category: "overseas",
    title: "Ha. Filadhoo Harbour Construction (Maldives)",
      heroImage: '/images/IMAGES/Photos - Fihladhoo/New folder (2)/Background image.jpg',
      galleryImages: [
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/Background image.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMAG2657.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMAG2658.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMAG2659.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMAG2660.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMAG2661.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMAG2662.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMAG2675.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMAG2690.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMAG2691.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMAG2692.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMAG2701.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMAG2770.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMAG2771.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMAG2916.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMAG2924.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMAG2973.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMAG3030.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMAG3032.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMAG3033.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-00f8038d8e1d95381715bcac491c3b67-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-016293fb5b5acc08841a4e20ccdab07e-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-0dd3bdc8692a7e14baa752d8948de218-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-105334988403f3304a0f65a783e0468b-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-12b7c5f17473835063e570a659e4e206-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-146072198fef5d036da8578dd1d01975-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-17623758fe843ec2740c6fe741a636f7-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-18664bfbb34afdca2e26d6cbce03697b-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-1b8cd6f6f275ced69fe35b199c4de210-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-1c785ae5dfde226818187f690d419eac-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-23c5349799f46bcdaa3ead15a150a2d1-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-242e8c546e3feee62169c8acc7c9ab86-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-249ea9c8dc92bc813f5a8d4d9a3789f6-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-2989abb828d3cf0608aabcf37d9d3214-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-29f160f6e752f94a55a6f7e2c9ba7922-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-36b7e15c05f2ffc03d3c55b0d5660d16-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-3910c6e18a9601cb1128ab3bc0ee9b93-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-39622865c2e4cfa238d771ec187e0b8f-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-3cf3ebd066744c8b799bed83c069c7b6-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-3e60a36e31832a8c6c1f24d1d5a6ae91-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-3f669e0c4d79b7cbfdd748e1de0685ee-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-4376d102d8c713ad1f695cd4f97c7d89-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-44091d90cfe8cc37be3487ff8dbb5a57-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-46ab09cd1e797df0c0e024d431a5b04a-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-46c0659343e21e0d087251a211b2e3cd-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-4e2f7704d604072b5ed298a14aeee4cd-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-4f92427b5622d62309de47a8614742e7-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-5074fcc8db79e0ecded1018a14d7fc4c-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-5154e8d82efb99d993d46ee470c8d468-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-5216227bc23b909cd94ce1528132d62c-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-5475533a9d6eeb8e1f25352a74a47884-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-5575071ad742ca7b25a54434a14107a6-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-5896c3ab6684c44f0eaa047bcede9236-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-58f613d701f62b80d55941b45a9baaaa-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-5965c67623e4f78184e1532adbed8c93-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-597d045950320ee22d86a306c93780be-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-5abfd9aa5b880fc6ded17d70a9210028-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-5dbec4451216dc5615d5a1b6d5401267-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-6502e129053f274cf2bd130f34ecd913-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-6659d678983b16c54352186262cec266-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-679064cf93514dab627e7672a2eb05c6-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-68461d19900ec81078da5f81ec8109eb-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-6b3ced89d1dbb8572a5830880bca15cd-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-6b47e6cb31571f94e358d2ae78186bae-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-6c8c1f3a1b004c25e830bd7cc7d95277-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-723130a4e340fbd8891291428039b76e-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-74398ba525512f071efe36dae833b72e-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-7a13c1f6cbc6722af0a5e7d21d26fd35-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-7b65fe22adfebdb0edbc1fafb8d4c605-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-7be0c51b5680bc6b3c8482e78945b7cd-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-7d44fe88c6440f4e31ee90d98cc605ea-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-7d8d08641486ab7a16ead4bae33d0df8-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-7f683c4cdd2a585614949bdd25c91705-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-81af90934c7dfdbf21fc933a0dfe3ac4-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-82f8607462a8d0de0f5fd12a8af07f82-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-8617bdfe7488a5c8a00a1330a618f9f0-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-8bb2b1831d20348b98bac207b57535ab-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-8d9b370439b8b999086a9e6f0f32cee8-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-9063efe65b775cad480e6b15e895ceac-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-916612d94df1fd7ae2229c0a9d74794e-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-96627e08b3fa258e74f024258d5485c0-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-9bc50b921d978859ad9b899f70031999-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-9e50266b30ab08d929af47074cc500c0-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-9ef68a3558398a2b6109cec750303388-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-9fc6ff4b453247f170b3a12467531c31-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-a124c8055dae74c55c3b1943092b945f-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-a380c70da8fddf0c54c8cef0d5a926c3-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-a42f34b03ae29cf7d0ecc0c3f67ebe91-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-a5b3b6ecaf932644ef7d91e9fdf3bb3d-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-a9e952d3a14607672ca38c62f85508b8-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-aa4d77fd4da2c5a0f87230d644497bbb-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-ac96ca9473dc1a73e973d9c5b007a28f-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-ad65c3f8dd38ed07ec629c8cf3d036b7-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-b2a49f0fd651a5e2d6b492627793af7e-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-b75e4fae30acd90e8ee4126f0cd21eeb-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-b77784bf96f9b035e7a1a5df482a141e-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-b9041c923eef0e124db3165b965c9848-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-c0bf9e619da594fb2d24c4c9060f6380-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-c997197d5c9afa1b8f57d1b3078d4477-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-cfa4eb55ce97dccf604a4ad7fde48230-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-d0c64bdab371b4d5bfa62c1c311af153-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-d2f1c6e74864e0b1582f2c5747e95183-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-defcdae8e3f3d97b2744dedc647c3bec-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-e08043d364ff9d66a2333e65158c61f8-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG-e3a368f1e494429be2f11acd3318ef2e-V.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG_20180920_110435_834.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG_20180920_110538_369.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG_20180920_110617_419.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/IMG_20180920_110652_265.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/p1.jpg",
      "/images/IMAGES/Photos - Fihladhoo/New folder (2)/p8.jpg"
],
    status: "Completed",
    client: "Ministry of Housing (Maldives)",
    
    duration: "10 Months",
    year: 2018
  },
  {
    id: 'project-62',
    type: 'completed', category: "maritime",
    title: "Anchorage Facility at Peraliya Landing Site",
    status: "Completed",
    client: "Ministry of Fisheries",
    
    duration: "20 Months",
    year: 2018
  },

  // 2017
  {
    id: 'project-63',
    type: 'completed', category: "roads",
    title: "Rehabilitation of 42Km Rural Roads in Hambantota (H3)",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "24 Months",
    year: 2017
  },
  {
    id: 'project-64',
    type: 'completed', category: "bridges",
    title: "Reconstruction of Bridge 53/1 & 53/2 on Colombo-Batticaloa Road",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "12 Months",
    year: 2017
  },
  {
    id: 'project-65',
    type: 'completed', category: "bridges",
    title: "Bridge Over Mahaweli River (Halloluwa & Dodanwala)",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "18 Months",
    year: 2017
  },
  {
    id: 'project-66',
    type: 'completed', category: "irrigation",
    title: "Remedial Works at Ulhitiya - Rathkinda Dams",
    status: "Completed",
    client: "Mahaweli Authority",
    
    duration: "18 Months",
    year: 2017
  },
  {
    id: 'project-67',
    type: 'completed', category: "overseas",
    title: "Coastal Protection Structures in Seenu Hulhudhoo (Maldives)",
    heroImage: '/images/IMAGES/hulhudo/1.jpg',
    galleryImages: [
      '/images/IMAGES/hulhudo/1.jpg',
      '/images/IMAGES/hulhudo/2.jpg',
      '/images/IMAGES/hulhudo/3.jpg',
      '/images/IMAGES/hulhudo/4.jpg',
      '/images/IMAGES/hulhudo/5.jpg',
      '/images/IMAGES/hulhudo/6.jpg',
      '/images/IMAGES/hulhudo/7.jpg',
      '/images/IMAGES/hulhudo/8.jpg',
      '/images/IMAGES/hulhudo/9.jpg',
      '/images/IMAGES/hulhudo/10.jpg'
    ],
    status: "Completed",
    client: "Ministry of Environment (Maldives)",
    
    duration: "09 Months",
    year: 2017
  },

  // 2016
  {
    id: 'project-68',
    type: 'completed', category: "roads",
    title: "Kiriella - Nedurana - Eheliyagoda Road (14+750 Km)",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "24 Months",
    year: 2016
  },
  {
    id: 'project-69',
    type: 'completed', category: "roads",
    title: "Upgrading of Kotte - Bope (B240) Road",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "15 Months",
    year: 2016
  },
  {
    id: 'project-70',
    type: 'completed', category: "bridges",
    title: "46 Nos. Bridges Under French Government (Kirimetiya - Yala)",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "12 Months",
    year: 2016
  },
  {
    id: 'project-71',
    type: 'completed', category: "water",
    title: "Distribution Mains in Eheliyagoda W.S.S.",
    status: "Completed",
    client: "NWSDB",
    
    duration: "03 Months",
    year: 2016
  },
  {
    id: 'project-72',
    type: 'completed', category: "overseas",
    title: "Upgrading of Harbor Seawall in R.Vandhoo (Maldives)",
    status: "Completed",
    client: "Ministry of Environment (Maldives)",
      location: "R. Vandhoo, Maldives",
      images: [
        "/images/projects/project-72/20160428_085418.jpg",
        "/images/projects/project-72/20160428_085953.jpg",
        "/images/projects/project-72/20160428_090236.jpg",
        "/images/projects/project-72/20160428_091044.jpg",
        "/images/projects/project-72/20160428_091144.jpg",
        "/images/projects/project-72/20160428_121904.jpg",
        "/images/projects/project-72/20160430_090749.jpg",
        "/images/projects/project-72/20160430_090757.jpg",
        "/images/projects/project-72/20160430_100504.jpg",
        "/images/projects/project-72/20160430_100918.jpg",
        "/images/projects/project-72/20160430_100958.jpg",
        "/images/projects/project-72/Background image.jpg",
        "/images/projects/project-72/photo 2.jpg",
        "/images/projects/project-72/photo 3.jpg",
        "/images/projects/project-72/photo 4.jpg",
        "/images/projects/project-72/photo 5.jpg",
        "/images/projects/project-72/photo 6.jpg",
        "/images/projects/project-72/photo1.jpg",
        "/images/projects/project-72/Share2016-05-06-0a300812b7afdb3f0016cf22bf83b9fdb707f36387a5cf1f00fddda69d33ad55-Picture.jpg",
        "/images/projects/project-72/Share2016-05-06-49da5edaa797b3330e3e1c0728bacb03573df608a9906111e53ce30f6d230ea6-Picture.jpg",
        "/images/projects/project-72/Share2016-05-06-5db6d05018dd05537477cef5a2d29eace72f895fc5333acd0644bf72050eb7d0-Picture.jpg",
        "/images/projects/project-72/Share2016-05-06-d3433e7d7e31efac5a9b84119c6faf0361a1f9159e7bdf0887ff01c5bc6dd547-Picture.jpg"
      ],

    
    duration: "10 Months",
    year: 2016
  },

  // 2015
  {
    id: 'project-73',
    type: 'completed', category: "roads",
    title: "Hendala - Hunupitiya Road (4+020Km)",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "18 Months",
    year: 2015
  },
  {
    id: 'project-74',
    type: 'completed', category: "roads",
    title: "Yakkalamulla - Imaduwa Road & Ahangama Road",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "06 Months",
    year: 2015
  },
  {
    id: 'project-75',
    type: 'completed', category: "bridges",
    title: "Navathkuli - Keraitivu - Mannar Road (Sangupitiy Bridge Approach)",
    status: "Completed",
    client: "Road Development Authority",
      location: "Sangupiddy Bridge, Navatkuli - Mannar Road, Sri Lanka",
      images: [
        "/images/projects/project-75/Background image.jpeg",
        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.06 (2).jpeg",
        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.06 (7).jpeg",
        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.06.jpeg",
        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (1).jpeg",
        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (3).jpeg",
        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (5).jpeg",
        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (9).jpeg",
        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (13).jpeg",
        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (14).jpeg",
        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (15).jpeg",
        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (16).jpeg",
        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (22).jpeg",
        "/images/projects/project-75/WhatsApp Image 2026-08-22 at 11.52.07 (23).jpeg"
      ],

    
    duration: "09 Months",
    year: 2015
  },

  // 2014 & Below (Grouped)
  {
    id: 'project-76',
    type: 'completed', category: "roads",
    title: "Kahawatte - Ela - Bemmullegeadara Road",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "06 Months",
    year: 2014
  },
  {
    id: 'project-77',
    type: 'completed', category: "buildings",
    title: "Sama Vihara Building Project (Havelock City)",
    status: "Completed",
    client: "Mireka Capital Land",
    
    duration: "14 Months",
    year: 2014
  },
  {
    id: 'project-78',
    type: 'completed', category: "bridges",
    title: "Kotamulla - Karangoda - Dimiyawa Road",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "18 Months",
    year: 2014
  },
  {
    id: 'project-79',
    type: 'completed', category: "bridges",
    title: "Padawkema Udamaththala Bridge",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "07 Months",
    year: 2013
  },
  {
    id: 'project-80',
    type: 'completed', category: "maritime",
    title: "Oluvil Port Project Coastal Protection",
    status: "Completed",
    client: "Sri Lanka Ports Authority",
      location: "Oluvil Port, Eastern Province, Sri Lanka",
      images: [
        "/images/projects/project-80/1.jpg",
        "/images/projects/project-80/2.jpg"
      ],

    
    duration: "06 Months",
    year: 2012
  },
  {
    id: 'project-81',
    type: 'completed', category: "buildings",
    title: "Colombo Port Expansion Project - 45m Control Tower",
    status: "Completed",
    client: "Sri Lanka Ports Authority",
    
    duration: "09 Months",
    year: 2012
  },
  {
    id: 'project-82',
    type: 'completed', category: "roads",
    title: "Ullukkulama - Elayapattuwa Road",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "03 Months",
    year: 2012
  },
  {
    id: 'project-83',
    type: 'completed', category: "maritime",
    title: "SAGT Harbour Access Road",
    status: "Completed",
    client: "Hyundai Engineering",
    
    duration: "06 Months",
    year: 2010
  },
  {
    id: 'project-84',
    type: 'completed', category: "bridges",
    title: "Four Steel Bridges (Hirana, Molkawa, Lathpadura)",
    status: "Completed",
    client: "MCE Austria",
    
    duration: "24 Months",
    year: 2009
  },
  {
    id: 'project-85',
    type: 'completed', category: "buildings",
    title: "Matara - Kamburugamuwa Hospital",
    status: "Completed",
    client: "Sam Hee Construction Korea",
    
    duration: "06 Months",
    year: 2009
  },
  {
    id: 'project-86',
    type: 'completed', category: "bridges",
    title: "Matara Mahanama Bridge (116.4m)",
    status: "Completed",
    client: "Road Development Authority",
      location: "Mahanama Bridge, Matara, Sri Lanka",
      images: [
        "/images/projects/project-86/Background image.jpeg",
        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 09.59.18.jpeg",
        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 09.59.19 (1).jpeg",
        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 09.59.19.jpeg",
        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 09.59.20 (1).jpeg",
        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 09.59.20 (2).jpeg",
        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 09.59.20 (3).jpeg",
        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 09.59.20.jpeg",
        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.01 (1).jpeg",
        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.01 (2).jpeg",
        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.01 (3).jpeg",
        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.01.jpeg",
        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.02 (1).jpeg",
        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.02 (2).jpeg",
        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.02.jpeg",
        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.21.jpeg",
        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.38 (1).jpeg",
        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.38 (2).jpeg",
        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.38 (3).jpeg",
        "/images/projects/project-86/WhatsApp Image 2026-08-22 at 10.00.38.jpeg"
      ],

    
    duration: "12 Months",
    year: 2007
  },
  {
    id: 'project-87',
    type: 'completed', category: "buildings",
    title: "Three Storied Building at Sapugaskanda",
    status: "Completed",
    client: "Trelleborg Lanka",
    
    duration: "09 Months",
    year: 2007
  },
  {
    id: 'project-88',
    type: 'completed', category: "water",
    title: "Water Treatment Plant - Ampara (172,000 Cum/day)",
    status: "Completed",
    client: "NWSDB",
    
    duration: "24 Months",
    year: 2006
  },
  {
    id: 'project-89',
    type: 'completed', category: "maritime",
    title: "Rock Revetment at Beruwala",
    status: "Completed",
    client: "Kundanmals group",
    
    duration: "06 Months",
    year: 2006
  },
  {
    id: 'project-90',
    type: 'completed', category: "maritime",
    title: "Queen Elizabeth Quay Project - Colombo Harbour",
    status: "Completed",
    client: "Hyundai Engineering",
    
    duration: "12 Months",
    year: 2003
  },
  {
    id: 'project-100',
    type: 'completed',
    category: 'maritime',
    title: 'Harbour Basin Dredging up to -3m MSL Depth at Suduwella Anchorage',
    status: 'Completed',
    client: 'Ceylon Fishery Harbours Corporation (CFHC) / UNOPS',
    location: 'Suduwella Anchorage, Matara, Sri Lanka',
    duration: '10 Months',
    value: 'LKR 77 Million',
    year: 2013,
    images: [
      '/images/projects/project-100/1.jpg',
      '/images/projects/project-100/3.jpg',
      '/images/projects/project-100/4.jpg',
      '/images/projects/project-100/5.jpg',
      '/images/projects/project-100/6.jpg',
      '/images/projects/project-100/7.jpg',
      '/images/projects/project-100/8.jpg',
      '/images/projects/project-100/9.jpg',
      '/images/projects/project-100/Background image.jpg'
    ]
  }
];

// Verify export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectsData;
}
export default projectsData;
