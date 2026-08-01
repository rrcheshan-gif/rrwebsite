// Sorted array of all RR Construction completed & ongoing projects by Year (Descending)
const projectsData = [
  // ONGOING PROJECTS
  {
    type: 'ongoing',
    category: "roads",
    title: "Rehabilitation and Improvement of 14.21km of Rural Roads in Eastern Province - Lot/02",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "maritime",
    title: "Procurement of construction of boat launching ramp at Beruwala",
    client: "Ministry of Fisheries",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "bridges",
    title: "Reconstruction of Bridge No. 1/2 on Bentara - Uragaha - Elpitiya Road (B055)",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "bridges",
    title: "Reconstruction of Bridge No. 106/13 on Galle - Deniyaya - Madampe Road (AA 017)",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "bridges",
    title: "Reconstruction of Bridge No. 93/4 on Galle - Deniyaya - Madampe Road (AA 017)",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "bridges",
    title: "Reconstruction of Bridge No. 4/1 on Horawela - Pelawatta - Pitigala Road (Balance Work)",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "bridges",
    title: "Reconstruction of Bridge No. 22/3 (New No 22/4) on Elpitiya - Avittawa - Lewwanduwa Road (B114)",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "roads",
    title: "Rehabilitation and Maintenance of 14.40km of Rural Roads in Chavakachcheri and Vadamarachchi East",
    client: "Road Development Authority",
    duration: "24 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "bridges",
    title: "Reconstruction of Bridge No. 18/4 on Thihagoda - Kamburupitiya - Mawarala - Kotapola (B415) Road",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "roads",
    title: "Reconstruction of Proposed Improvement and Rehabilitation of Kurikadduvan Jetty (Approach Road)",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "bridges",
    title: "Rehabilitation of bridge No. 27/1 on Jaffna - Manipay - Karainagar Road (AB017)",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "irrigation",
    title: "Rehabilitation of Kariyalainagapaduwan Tank",
    client: "Ministry of Irrigation",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "disaster",
    title: "Landslide Mitigation Measures at 07 Locations in Badulla District (RLVMMP)",
    client: "Ministry of Defence",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "disaster",
    title: "Landslide Mitigation Measures at 06 Locations in Kegalle District (RLVMMP)",
    client: "Ministry of Defence",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "disaster",
    title: "Landslide Mitigation Measures at 11 Locations in Colombo & Kegalle District (RLVMMP)",
    client: "Ministry of Defence",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "bridges",
    title: "Reconstruction of bridge No. 52/1 & culvert No. 52/2 on Colombo - Galle - Hambantota Road",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "maritime",
    title: "Negombo Lagoon Development Project Stage I Package VII - Construction of Jetty and Mooring Facilities",
    client: "Ministry of Fisheries",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "bridges",
    title: "Reconstruction of Bridge No. 12/1 on Paranthan - Karachchi - Mullaitivu Road (A035) Balance Work",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
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
    type: 'ongoing',
    category: "bridges",
    title: "Rehabilitation of Bridge No. 51/1, 53/1 and 55/2 on Jaffna - Ponnalai - Point Pedro Road (AB021)",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "bridges",
    title: "Reconstruction of Bridge No. 50/1 on Paranthan - Karachchi - Mullativu Road (A-035)",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing",
    heroImage: 'images/kilinochchi-bridge-feature.jpg',
    galleryImages: [
      'images/kilinochchi-bridge-feature.jpg'
    ]
  },
  {
    type: 'ongoing',
    category: "bridges",
    title: "Reconstruction of Bridge No. 9/1 on Beliatta - Walasmulla (B054) Road",
    client: "Road Development Authority",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "railway",
    title: "Maho to Anuradhapura Railway Line Track Rehabilitation & Ancillary Works",
    client: "IRCON International Limited",
    duration: "12 Months",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "buildings",
    title: "Quarry And Crusher Plant - Medawachchiya",
    client: "Internal / Self",
    duration: "Continuous",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "buildings",
    title: "Quarry And Crusher Plant - Omanthai",
    client: "Internal / Self",
    duration: "Continuous",
    year: 2025,
    status: "Ongoing"
  },
  {
    type: 'ongoing',
    category: "buildings",
    title: "Quarry And Crusher Plant - Kaluthara",
    client: "Internal / Self",
    duration: "Continuous",
    year: 2025,
    status: "Ongoing"
  },
  {
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
    type: 'completed', category: "roads",
    title: "Central Expressway Project Section 3 (Pothuhera to Galagedara)",
    status: "Ongoing (65% Completed)",
    client: "Road Development Authority",
    value: "Rs 851,905,862.05",
    duration: "12 Months",
    year: 2025
  },
  {
    type: 'completed', category: "roads",
    title: "Rehabilitation of 30.12km Rural Roads in Rathnapura",
    status: "Ongoing (10% Completed)",
    client: "Road Development Authority",
    value: "Rs 1,444,611,292.97",
    duration: "18 Months",
    year: 2025
  },
  {
    type: 'completed', category: "roads",
    title: "Rehabilitation of 20.80 km Rural Roads in Palindanuwara (Kalutara)",
    status: "Ongoing (15% Completed)",
    client: "Road Development Authority",
    value: "Rs 692,706,432.20",
    duration: "12 Months",
    year: 2025
  },
  {
    type: 'completed', category: "maritime",
    title: 'Construction of Gandara Fishery Harbour',
    heroImage: 'images/maritime-harbour-site.jpg',
    galleryImages: [ 'images/maritime-harbour-site.jpg', 'images/gandara/gandara-1.jpg', 'images/gandara/gandara-2.jpg', 'images/gandara/gandara-3.jpg', 'images/gandara/gandara-4.jpg', 'images/gandara/gandara-5.jpg', 'images/gandara/gandara-6.jpg', 'images/gandara/gandara-7.jpg', 'images/gandara/gandara-8.jpg', 'images/gandara/gandara-9.jpg', 'images/gandara/gandara-10.jpg', 'images/gandara/gandara-11.jpg', 'images/gandara/gandara-12.jpg', 'images/gandara/gandara-13.jpg', 'images/gandara/gandara-14.jpg', 'images/gandara/gandara-15.jpg', 'images/gandara/gandara-16.jpg', 'images/gandara/gandara-17.jpg', 'images/gandara/gandara-18.jpg', 'images/gandara/gandara-19.jpg', 'images/gandara/gandara-20.jpg', 'images/gandara/gandara-21.jpg', 'images/gandara/gandara-22.jpg', 'images/gandara/gandara-23.jpg', 'images/gandara/gandara-24.jpg', 'images/gandara/gandara-25.jpg', 'images/gandara/gandara-26.jpg', 'images/gandara/gandara-27.jpg', 'images/gandara/gandara-28.jpg', 'images/gandara/gandara-29.jpg', 'images/gandara/gandara-30.jpg', 'images/gandara/gandara-31.jpg', 'images/gandara/gandara-32.jpg', 'images/gandara/gandara-33.jpg', 'images/gandara/gandara-34.jpg', 'images/gandara/gandara-35.jpg', 'images/gandara/gandara-36.jpg', 'images/gandara/gandara-37.jpg', 'images/gandara/gandara-38.jpg', 'images/gandara/gandara-39.jpg', 'images/gandara/gandara-40.jpg', 'images/gandara/gandara-41.jpg', 'images/gandara/gandara-42.jpg' ],
    status: "Ongoing (40% Completed)",
    client: "Ministry of Fisheries",
    value: "Rs 5,367,689,206.70",
    duration: "36 Months",
    year: 2025
  },
  
  // 2024
  {
    type: 'completed', category: "roads",
    title: "Rehabilitation of 26.05 Km of Rural Roads in Kalutara District",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 859,612,391.17",
    duration: "09 Months",
    year: 2024
  },
  {
    type: 'completed', category: "disaster",
    title: 'Rectification of Unstable Slope at NIFS Kandy',
    heroImage: 'images/nifs-landslide/nifs-hero.jpg',
    galleryImages: [ 'images/nifs-landslide/nifs-hero.jpg', 'images/nifs-landslide/nifs-1.jpg', 'images/nifs-landslide/nifs-2.jpg', 'images/nifs-landslide/nifs-3.jpg', 'images/nifs-landslide/nifs-4.jpg', 'images/nifs-landslide/nifs-5.jpg' ],
    status: "Completed",
    client: "Ministry of Defence / NBRO",
    value: "Rs 137,809,862.50",
    duration: "8 Months",
    year: 2024
  },
  {
    type: 'completed', category: "disaster",
    title: 'RLVMMP Landslide Mitigation at Nursing Training School Kandy',
    heroImage: 'images/kandy-landslide/kandy-5.jpg',
    galleryImages: [ 'images/kandy-landslide/kandy-1.jpg', 'images/kandy-landslide/kandy-2.jpg', 'images/kandy-landslide/kandy-3.jpg', 'images/kandy-landslide/kandy-4.jpg', 'images/kandy-landslide/kandy-5.jpg' ],
    status: "Completed",
    client: "Ministry of Defence",
    value: "Rs 262,824,796.00",
    duration: "12 Months",
    year: 2024
  },

  // 2023
  {
    type: 'completed', category: "railway",
    title: "Anuradhapura to Vauniya Railway Track Rehabilitation",
    status: "Completed",
    client: "IRCON International Limited",
    value: "Rs 578,858,163.33",
    duration: "6 Months",
    year: 2023
  },
  {
    type: 'completed', category: "disaster",
    title: "Landslide Mitigation in 32 sites (Kalutara, Rathnapura, Matara)",
    status: "Completed",
    client: "Ministry of Defence",
    value: "Rs 349,507,860.00",
    duration: "12 Months",
    year: 2023
  },
  {
    type: 'completed', category: "disaster",
    title: 'Landslide Mitigation on Hatton Maskeliya - Delhouse Road',
    heroImage: 'images/hatton-landslide/hatton-1.jpg',
    galleryImages: [ 'images/hatton-landslide/hatton-1.jpg', 'images/hatton-landslide/hatton-2.jpg', 'images/hatton-landslide/hatton-3.jpg', 'images/hatton-landslide/hatton-4.jpg', 'images/hatton-landslide/hatton-5.jpg', 'images/hatton-landslide/hatton-6.jpg', 'images/hatton-landslide/hatton-7.jpg', 'images/hatton-landslide/hatton-8.jpg', 'images/hatton-landslide/hatton-9.jpg' ],
    status: "Completed",
    client: "Ministry of Defence",
    value: "Rs 277,421,067.50",
    duration: "8 Months",
    year: 2023
  },
  {
    type: 'completed', category: "disaster",
    title: "Landslide Mitigation along Railway Main Line (22 Sites)",
    status: "Completed",
    client: "Ministry of Defence",
    value: "Rs 866,375,820.95",
    duration: "15 Months",
    year: 2023
  },
  {
    type: 'completed', category: "irrigation",
    title: "Rehabilitation of Kalmadu Scheme Head Works",
    status: "Completed",
    client: "Ministry of Irrigation",
    value: "Rs 484,096,095.57",
    duration: "24 Months",
    year: 2023
  },

  // 2022
  {
    type: 'completed', category: "roads",
    title: "Second Integrated Road Investment Program - Mannar District (49.01 Km)",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 2,481,994,000.80",
    duration: "24 Months",
    year: 2022
  },
  {
    type: 'completed', category: "roads",
    title: 'Second Integrated Road Investment Program - Kilinochchi (53.60 Km)',
    heroImage: 'images/kilinochchi-iroad/kilinochchi-hero.jpg',
    galleryImages: [ 'images/kilinochchi-iroad/kilinochchi-hero.jpg', 'images/kilinochchi-iroad/kilinochchi-1.jpg', 'images/kilinochchi-iroad/kilinochchi-2.jpg', 'images/kilinochchi-iroad/kilinochchi-3.jpg', 'images/kilinochchi-iroad/kilinochchi-4.jpg', 'images/kilinochchi-iroad/kilinochchi-5.jpg' ],
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 2,599,995,936.60",
    duration: "24 Months",
    year: 2022
  },
  {
    type: 'completed', category: "roads",
    title: "Integrated Road Development Program - Kurunegala (99.00 Km)",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 2,165,263,498.51",
    duration: "12 Months",
    year: 2022
  },
  {
    type: 'completed', category: "water",
    title: "Matara Stage IV Water Supply Project - Raw Water Intake",
    status: "Completed",
    client: "NWSDB",
    value: "Rs 96,744,171.43",
    duration: "27 Months",
    year: 2022
  },
  {
    type: 'completed', category: "water",
    title: "Pipe Laying Distribution Main in Katana Central Zone",
    status: "Completed",
    client: "NWSDB",
    value: "Rs 200,342,760.00",
    duration: "4 Months",
    year: 2022
  },
  {
    type: 'completed', category: "maritime",
    title: "Negombo Lagoon Dredging - Lellama Site II",
    status: "Completed",
    client: "Ministry of Fisheries",
    value: "Rs 123,163,000.00",
    duration: "09 Months",
    year: 2022
  },

  // 2021
  {
    type: 'completed', category: "maritime",
    title: "Construction of Fishery Harbor at Wellamankara Wennappuwa",
    status: "Completed",
    client: "Ministry of Fisheries",
    value: "Rs 2,153,573,852.63",
    duration: "30 Months",
    year: 2021
  },

  // 2020
  {
    type: 'completed', category: "roads",
    title: "Central Expressway Project Section - 2 (Package-A)",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 1,025,019,784.79",
    duration: "09 Months",
    year: 2020
  },
  {
    type: 'completed', category: "disaster",
    title: "Countermeasures at Six Locations in Sabaragamuwa & Uva",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 2,107,115,282.00",
    duration: "24 Months",
    year: 2020
  },
  {
    type: 'completed', category: "disaster",
    title: "Landslide Mitigation Works of Medithale - Pathanawatta",
    status: "Completed",
    client: "CRIP, UVA Provincial Council",
    value: "Rs 200,280,847.97",
    duration: "10 Months",
    year: 2020
  },
  {
    type: 'completed', category: "bridges",
    title: "Construction of Flood Gate with Culvert near Thalangama Tank",
    status: "Completed",
    client: "Ministry of Megapolis",
    value: "Rs 259,319,952.27",
    duration: "08 Months",
    year: 2020
  },
  {
    type: 'completed', category: "maritime",
    title: "Kolonnawa Canal Diversion Scheme - Stage III & IV",
    status: "Completed",
    client: "Ministry of Megapolis",
    value: "Rs 2,436,094,586.21",
    duration: "15 Months",
    year: 2020
  },

  // 2019
  {
    type: 'completed', category: "roads",
    title: "Improvement of A009 Kandy Jaffna Road (Rambewa to Medawachchiya)",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 799,544,671.29",
    duration: "12 Months",
    year: 2019
  },
  {
    type: 'completed', category: "roads",
    title: "Rehabilitation of Nawalapitiya - Nagaswella Road",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 415,415,433.88",
    duration: "12 Months",
    year: 2019
  },
  {
    type: 'completed', category: "bridges",
    title: "New Bridge at CH. 6+100 Udappuwa Town",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 414,507,009.70",
    duration: "15 Months",
    year: 2019
  },
  {
    type: 'completed', category: "maritime",
    title: "Reconstruction of Myliddy Fishery Harbor - Phase I",
    status: "Completed",
    client: "Ministry of Fisheries",
    value: "Rs 86,012,981.78",
    duration: "06 Months",
    year: 2019
  },
  {
    type: 'completed', category: "maritime",
    title: "Bank Protection Works of St.Sebestian North Canal",
    status: "Completed",
    client: "Metro Colombo Urban Dev.",
    value: "Rs 322,500,102.88",
    duration: "15 Months",
    year: 2019
  },

  // 2018
  {
    type: 'completed', category: "roads",
    title: "Southern Expressway Subsection VI Structures (Matara to Beliatta)",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 399,514,467.32",
    duration: "24 Months",
    year: 2018
  },
  {
    type: 'completed', category: "roads",
    title: "Rehabilitation of 81km of Rural Roads in Rathnapura (R3)",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 2,020,996,336.79",
    duration: "24 Months",
    year: 2018
  },
  {
    type: 'completed', category: "bridges",
    title: "Major Bridges Construction Project - Package 02",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 1,269,776,000.00",
    duration: "21 Months",
    year: 2018
  },
  {
    type: 'completed', category: "overseas",
    title: "Ha. Filadhoo Harbour Construction (Maldives)",
    status: "Completed",
    client: "Ministry of Housing (Maldives)",
    value: "MVR 28,202,486.67",
    duration: "10 Months",
    year: 2018
  },
  {
    type: 'completed', category: "maritime",
    title: "Anchorage Facility at Peraliya Landing Site",
    status: "Completed",
    client: "Ministry of Fisheries",
    value: "Rs 235,519,312.50",
    duration: "20 Months",
    year: 2018
  },

  // 2017
  {
    type: 'completed', category: "roads",
    title: "Rehabilitation of 42Km Rural Roads in Hambanthota (H3)",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 1,052,141,503.89",
    duration: "24 Months",
    year: 2017
  },
  {
    type: 'completed', category: "bridges",
    title: "Reconstruction of Bridge 53/1 & 53/2 on Colombo-Batticaloa Road",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 177,631,494.14",
    duration: "12 Months",
    year: 2017
  },
  {
    type: 'completed', category: "bridges",
    title: "Bridge Over Mahaweli River (Halloluwa & Dodanwala)",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 137,901,396.17",
    duration: "18 Months",
    year: 2017
  },
  {
    type: 'completed', category: "irrigation",
    title: "Remedial Works at Ulhitiya - Rathkinda Dams",
    status: "Completed",
    client: "Mahaweli Authority",
    value: "Rs 231,654,830.00",
    duration: "18 Months",
    year: 2017
  },
  {
    type: 'completed', category: "overseas",
    title: "Coastal Protection Structures in Seenu Hulhudhoo (Maldives)",
    status: "Completed",
    client: "Ministry of Environment (Maldives)",
    value: "MVR 22,609,123.72",
    duration: "09 Months",
    year: 2017
  },

  // 2016
  {
    type: 'completed', category: "roads",
    title: "Kiriella - Nedurana - Eheliyagoda Road (14+750 km)",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 1,898,650,000.00",
    duration: "24 Months",
    year: 2016
  },
  {
    type: 'completed', category: "roads",
    title: "Upgrading of Kotte - Bope (B240) Road",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 1,553,199,197.33",
    duration: "15 Months",
    year: 2016
  },
  {
    type: 'completed', category: "bridges",
    title: "46 Nos. Bridges under French Government (Kirimetiya - Yala)",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 167,140,258.09",
    duration: "12 Months",
    year: 2016
  },
  {
    type: 'completed', category: "water",
    title: "Distribution Mains in Eheliyagoda W.S.S.",
    status: "Completed",
    client: "NWSDB",
    value: "Rs 2,643,424.42",
    duration: "03 Months",
    year: 2016
  },
  {
    type: 'completed', category: "overseas",
    title: "Upgrading of Harbor Seawall in R.Vandhoo (Maldives)",
    status: "Completed",
    client: "Ministry of Environment (Maldives)",
    value: "MVR 10,114,727.34",
    duration: "10 Months",
    year: 2016
  },

  // 2015
  {
    type: 'completed', category: "roads",
    title: "Hendala - Hunupitiya Road (4+020Km)",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 490,294,960.74",
    duration: "18 Months",
    year: 2015
  },
  {
    type: 'completed', category: "roads",
    title: "Yakkalamulla - Imaduwa Road & Ahangama Road",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 387,030,357.94",
    duration: "06 Months",
    year: 2015
  },
  {
    type: 'completed', category: "bridges",
    title: "Navathkuli - Keraitivu - Mannar Road (Sangupitiy Bridge Approach)",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 1,119,291,894.15",
    duration: "09 Months",
    year: 2015
  },

  // 2014 & Below (Grouped)
  {
    type: 'completed', category: "roads",
    title: "Kahawatte - Ela - Bemmullegeadara Road",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 131,653,386.70",
    duration: "06 Months",
    year: 2014
  },
  {
    type: 'completed', category: "buildings",
    title: "Sama Vihara Building Project (Havelock City)",
    status: "Completed",
    client: "Mireka Capital Land",
    value: "Rs 67,072,669.53",
    duration: "14 Months",
    year: 2014
  },
  {
    type: 'completed', category: "bridges",
    title: "Kotamulla - Karangoda - Dimiyawa Road",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 316,570,533.91",
    duration: "18 Months",
    year: 2014
  },
  {
    type: 'completed', category: "bridges",
    title: "Padawkema Udamaththala Bridge",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 149,843,714.49",
    duration: "07 Months",
    year: 2013
  },
  {
    type: 'completed', category: "maritime",
    title: "Oluvil Port Project Coastal Protection",
    status: "Completed",
    client: "Sri Lanka Ports Authority",
    value: "Rs 291,312,353.05",
    duration: "06 Months",
    year: 2012
  },
  {
    type: 'completed', category: "buildings",
    title: "Colombo Port Expansion Project - 45m Control Tower",
    status: "Completed",
    client: "Sri Lanka Ports Authority",
    value: "Rs 374,500,000.00",
    duration: "09 Months",
    year: 2012
  },
  {
    type: 'completed', category: "roads",
    title: "Ullukkulama - Elayapattuwa Road",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 121,605,088.50",
    duration: "03 Months",
    year: 2012
  },
  {
    type: 'completed', category: "maritime",
    title: "SAGT Harbour Access Road",
    status: "Completed",
    client: "Hyundai Engineering",
    value: "Rs 143,090,730.00",
    duration: "06 Months",
    year: 2010
  },
  {
    type: 'completed', category: "bridges",
    title: "Four Steel Bridges (Hirana, Molkawa, Lathpadura)",
    status: "Completed",
    client: "MCE Austria",
    value: "Rs 341,746,720.00",
    duration: "24 Months",
    year: 2009
  },
  {
    type: 'completed', category: "buildings",
    title: "Matara - Kaburugamuwa Hospital",
    status: "Completed",
    client: "Sam Hee Construction Korea",
    value: "Rs 207,000,000.00",
    duration: "06 Months",
    year: 2009
  },
  {
    type: 'completed', category: "bridges",
    title: "Matara Mahanama Bridge (116.4m)",
    status: "Completed",
    client: "Road Development Authority",
    value: "Rs 185,726,256.63",
    duration: "12 Months",
    year: 2007
  },
  {
    type: 'completed', category: "buildings",
    title: "Three Storied Building at Sapugaskanda",
    status: "Completed",
    client: "Trelleborg Lanka",
    value: "Rs 50,000,000.00",
    duration: "09 Months",
    year: 2007
  },
  {
    type: 'completed', category: "water",
    title: "Water Treatment Plant - Ampara (172,000 cum/day)",
    status: "Completed",
    client: "NWSDB",
    value: "Rs 172,362,366.00",
    duration: "24 Months",
    year: 2006
  },
  {
    type: 'completed', category: "maritime",
    title: "Rock Revetment at Beruwala",
    status: "Completed",
    client: "Kundanmals group",
    value: "Rs 22,000,000.00",
    duration: "06 Months",
    year: 2006
  },
  {
    type: 'completed', category: "maritime",
    title: "Queen Elizabeth Quay Project - Colombo Harbour",
    status: "Completed",
    client: "Hyundai Engineering",
    value: "Rs 237,890,315.00",
    duration: "12 Months",
    year: 2003
  }
];

// Verify export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectsData;
}
