// Sorted array of all RR Construction completed & ongoing projects by Year (Descending)
const projectsData = [
  // ONGOING PROJECTS
  {
    id: 'project-1',
    type: 'ongoing',
    category: "roads",
    title: "Rehabilitation and Improvement of 14.21km of Rural Roads in Eastern Province - Lot/02",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-2',
    type: 'completed',
    category: "maritime",
    title: "Procurement of construction of boat launching ramp at Beruwala",
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
    title: "Reconstruction of Bridge No. 1/2 on Bentara - Uragaha - Elpitiya Road (B055)",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-4',
    type: 'ongoing',
    category: "bridges",
    title: "Reconstruction of Bridge No. 106/13 on Galle - Deniyaya - Madampe Road (AA 017)",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-5',
    type: 'ongoing',
    category: "bridges",
    title: "Reconstruction of Bridge No. 93/4 on Galle - Deniyaya - Madampe Road (AA 017)",
    client: "Road Development Authority",
    duration: "12 Months",
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
    title: "Reconstruction of Bridge No. 22/3 (New No 22/4) on Elpitiya - Avittawa - Lewwanduwa Road (B114)",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-8',
    type: 'ongoing',
    category: "roads",
    title: "Rehabilitation and Maintenance of 14.40km of Rural Roads in Chavakachcheri and Vadamarachchi East",
    client: "Road Development Authority",
    duration: "24 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-9',
    type: 'ongoing',
    category: "bridges",
    title: "Reconstruction of Bridge No. 18/4 on Thihagoda - Kamburupitiya - Mawarala - Kotapola (B415) Road",
    client: "Road Development Authority",
    type: 'ongoing',
    category: "bridges",
    title: "Reconstruction of Bridge No. 18/4 on Thihagoda - Kamburupitiya - Mawarala - Kotapola (B415) Road",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-10',
    type: 'ongoing',
    category: "roads",
    title: "Reconstruction of Proposed Improvement and Rehabilitation of Kurikadduvan Jetty (Approach Road)",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-11',
    type: 'completed',
    category: "bridges",
    title: "Rehabilitation of bridge No. 27/1 on Jaffna - Manipay - Karainagar Road (AB017)",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2026,
    status: "Completed"
  },
  {
    id: 'project-12',
    type: 'ongoing',
    category: "irrigation",
    title: "Rehabilitation of Kariyalainagapaduwan Tank",
    client: "Ministry of Irrigation",
    duration: "12 Months",
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
    id: 'project-13',
    type: 'ongoing',
    category: "disaster",
    title: "Landslide Mitigation Measures at 07 Locations in Badulla District (RLVMMP)",
    client: "Ministry of Defence",
    duration: "12 Months",
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
    id: 'project-14',
    type: 'ongoing',
    category: "disaster",
    title: "Landslide Mitigation Measures at 06 Locations in Kegalle District (RLVMMP)",
    client: "Ministry of Defence",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-15',
    type: 'completed',
    category: "disaster",
    title: "Landslide Mitigation Measures at 11 Locations in Colombo & Kegalle District (RLVMMP)",
    client: "Ministry of Defence",
    duration: "12 Months",
    year: 2025,
    status: "Completed"
  },
  {
    id: 'project-16',
    type: 'ongoing',
    category: "bridges",
    title: "Reconstruction of bridge No. 52/1 & culvert No. 52/2 on Colombo - Galle - Hambantota Road",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-17',
    type: 'ongoing',
    category: "maritime",
    title: "Negombo Lagoon Development Project Stage I Package VII - Construction of Jetty and Mooring Facilities",
    client: "Ministry of Fisheries",
    duration: "12 Months",
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
    title: "Reconstruction of Bridge No. 9/2 on Puttalam - Marichchikade Road (B379)",
    client: "Road Development Authority",
    duration: "12 Months",
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
    title: "Rehabilitation of Bridge No. 51/1, 53/1 and 55/2 on Jaffna - Ponnalai - Point Pedro Road (AB021)",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-21',
    type: 'ongoing',
    category: "bridges",
    title: "Reconstruction of Bridge No. 50/1 on Paranthan - Karachchi - Mullativu Road (A-035)",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-22',
    type: 'ongoing',
    category: "bridges",
    title: "Reconstruction of Bridge No. 9/1 on Beliatta - Walasmulla (B054) Road",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-23',
    type: 'ongoing',
    category: "railway",
    title: "Maho to Anuradhapura Railway Line Track Rehabilitation & Ancillary Works",
    client: "IRCON International Limited",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    id: 'project-27',
    type: 'ongoing',
    category: "roads",
    title: "Rehabilitation and Mayilvakanapuram Koluthupulavu Road",
    client: "Road Development Authority",
    duration: "12 Months",
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
    title: "Rehabilitation and Improvement of Rural Roads in Northern Province - Lot/03",
    client: "Road Development Authority",
    duration: "12 Months",
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
    title: "Landslide Mitigation Measures at 06 Location in Ratnapura District (Site No. 62,65,66,70,71,106) under Package 6C of Reduction of Landslide Vulnerability by Mitigation Measures Project (RLVMMP)",
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
    contractAmount: "LKR 106,872,056.50 + 18% VAT",
    status: "Completed",
    client: "Ministry of Defence - Disaster Management Division",
    duration: "9 Months (270 Days)",
    year: 2024,
    description: `<p style="margin-bottom: 20px;">The <strong>"Landslide Mitigation Measures at 02 Locations in Matara & Hambantota Districts (Site No. 104, 151) Under Package – 06F of Reduction of Landslide Vulnerability by Mitigation Measures Project (RLVMMP)"</strong> [Contract No: RLVMMP/WORKS/06F] is a major disaster management infrastructure project executed for the <strong>Ministry of Defence - Disaster Management Division</strong>.</p>
                   <p style="margin-bottom: 20px;">With an accepted contract amount of <strong>LKR 106,872,056.50 + 18% VAT</strong> and an intensive execution duration of 270 calendar days, RR Construction (Pvt) Ltd deployed specialized slope stabilization engineering teams, heavy drilling rigs, soil nailing systems, shotcreting equipment, and subsurface drainage mechanisms to secure vulnerable landslide sites in the Matara and Hambantota districts.</p>
                   <p style="margin-bottom: 20px;">By leveraging deep geotextile engineering, high-tensile wire mesh anchoring, and rigorous geotechnical monitoring, our engineering divisions successfully stabilized unstable slopes at Site No. 104 & Site No. 151, protecting critical transportation corridors, local communities, and public infrastructure from soil erosion and slope failures.</p>
                   <p>All mitigation works were strictly executed in compliance with ISO 9001 quality, ISO 14001 environmental, and ISO 45001 occupational safety standards, as well as strict NBRO (National Building Research Organisation) engineering protocols.</p>`
  },
  {
    id: 'project-96',
    type: 'completed',
    category: "maritime",
    title: "Reactivation and Reconstruction of Myliddy Fishery Harbour in Northern Province – Phase II",
    contractAmount: "Rs. 244,651,102.00 (excl. VAT & Contingencies)",
    status: "Completed",
    client: "State Ministry of Fishery Harbour Development",
    duration: "12 Months",
    year: 2021,
    description: `<p style="margin-bottom: 20px;">The <strong>"Reactivation and Reconstruction of Myliddy Fishery Harbour in Northern Province – Phase II"</strong> project is a landmark maritime engineering development executed for the <strong>State Ministry of Fishery Harbour Development and Fish Exports</strong> at a contract price of <strong>Rs. 244,651,102.00</strong>.</p>
                   <p style="margin-bottom: 20px;">Following the successful completion of Phase I, Phase II involved extensive marine civil engineering works, including breakwater reconstruction, basin deepening through marine dredging, quay wall extension, slipway rehabilitation, and modern anchorages for multiday fishing vessels in the Jaffna peninsula.</p>
                   <p style="margin-bottom: 20px;">Deploying RR Construction's specialized marine equipment fleet, barge-mounted excavators, and coastal engineering specialists, the harbour was restored to full operational capacity, empowering northern fishing communities and boosting regional fish export logistics.</p>
                   <p>All marine construction operations strictly complied with ISO 9001 quality management standards and marine environmental safety guidelines.</p>`
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
    title: "Rehabilitation of 20.80 km Rural Roads in Palindanuwara (Kalutara)",
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
    
    duration: "36 Months",
    year: 2025
  },
  
  // 2024
  {
    id: 'project-91',
    type: 'completed',
    category: "roads",
    title: "Second Integrated Road Investment Program - Rehabilitation, Improvement and Maintenance of 23.96 km Rural Roads in Badulla District",
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
      'images/BADULLA/WhatsApp Image 2026-07-28 at 14.26.09.jpeg'
    ]
  },
  {
    id: 'project-33',
    type: 'completed', category: "roads",
    title: "Rehabilitation of 26.05 Km of Rural Roads in Kalutara District",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "09 Months",
    year: 2024
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
    title: "Anuradhapura to Vauniya Railway Track Rehabilitation",
    status: "Completed",
    client: "IRCON International Limited",
    
    duration: "6 Months",
    year: 2023
  },
  {
    id: 'project-37',
    type: 'completed', category: "disaster",
    title: "Landslide Mitigation in 32 sites (Kalutara, Rathnapura, Matara)",
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
    title: "Landslide Mitigation along Railway Main Line (22 Sites)",
    status: "Completed",
    client: "Ministry of Defence",
    
    duration: "15 Months",
    year: 2023
  },
  {
    id: 'project-40',
    type: 'completed', category: "irrigation",
    title: "Rehabilitation of Kalmadu Scheme Head Works",
    status: "Completed",
    client: "Ministry of Irrigation",
    
    duration: "24 Months",
    year: 2023
  },

  // 2022
  {
    id: 'project-41',
    type: 'completed', category: "roads",
    title: "Second Integrated Road Investment Program - Mannar District (49.01 Km)",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "24 Months",
    year: 2022
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
    year: 2022
  },
  {
    id: 'project-43',
    type: 'completed', category: "roads",
    title: "Integrated Road Development Program - Kurunegala (99.00 Km)",
    status: "Completed",
    client: "Road Development Authority",
    
    duration: "12 Months",
    year: 2022
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
    title: "Construction of Flood Gate with Culvert near Thalangama Tank",
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
    title: "Rehabilitation of 42Km Rural Roads in Hambanthota (H3)",
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
    status: "Completed",
    client: "Ministry of Environment (Maldives)",
    
    duration: "09 Months",
    year: 2017
  },

  // 2016
  {
    id: 'project-68',
    type: 'completed', category: "roads",
    title: "Kiriella - Nedurana - Eheliyagoda Road (14+750 km)",
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
    title: "46 Nos. Bridges under French Government (Kirimetiya - Yala)",
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
    title: "Matara - Kaburugamuwa Hospital",
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
    title: "Water Treatment Plant - Ampara (172,000 cum/day)",
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
  }
];

// Verify export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectsData;
}
export default projectsData;
