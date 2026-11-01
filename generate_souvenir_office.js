const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

function getImgUrl(relPath) {
  const safeName = relPath.replace(/[\/\\]/g, '_').replace(/ /g, '_');
  const lastDot = safeName.lastIndexOf('.');
  const baseName = lastDot !== -1 ? safeName.substring(0, lastDot) : safeName;
  const optJpg = path.join(__dirname, 'souvenir_optimized_assets', baseName + '.jpg');
  const optPng = path.join(__dirname, 'souvenir_optimized_assets', baseName + '.png');
  const optOrig = path.join(__dirname, 'souvenir_optimized_assets', safeName);

  let fullPath = path.join(__dirname, 'public', relPath);
  if (fs.existsSync(optJpg)) {
    fullPath = optJpg;
  } else if (fs.existsSync(optPng)) {
    fullPath = optPng;
  } else if (fs.existsSync(optOrig)) {
    fullPath = optOrig;
  }

  if (!fs.existsSync(fullPath)) {
    console.warn('Missing image:', fullPath);
    return '';
  }
  const ext = path.extname(fullPath).toLowerCase().replace('.', '');
  let mime = 'image/jpeg';
  if (ext === 'png') mime = 'image/png';
  else if (ext === 'webp') mime = 'image/webp';
  else if (ext === 'svg') mime = 'image/svg+xml';
  const buf = fs.readFileSync(fullPath);
  return `data:${mime};base64,${buf.toString('base64')}`;
}

const imgs = {
  logo: getImgUrl('images/logo.png'),
  coverBg: getImgUrl('images/home/kjp-home.jpg'),
  headOffice: getImgUrl('images/head-office.png'),
  headOfficeBuilding: getImgUrl('images/about/head-office-building.jpg'),
  collage1: getImgUrl('images/home/new-folder/palindanuwara-1.jpeg'),
  collage2: getImgUrl('images/home/new-folder/gandara-5.jpeg'),
  collage3: getImgUrl('images/home/new-folder/excavator.jpeg'),
  collage4: getImgUrl('images/home/new-folder/hatton-7.jpg'),
  md: getImgUrl('images/director_hd.jpg'),
  gamage: getImgUrl('images/gamage.jpg'),
  iso: getImgUrl('images/awards/iso-certificate.png'),
  srvRoad: getImgUrl('images/home/rathnapura.jpg'),
  srvBridge: getImgUrl('images/home/bridge-construction-new.jpg'),
  srvMarine: getImgUrl('images/maritime-harbour-site.jpg'),
  srvLandslide: getImgUrl('images/home/landslide-mitigation-new.jpeg'),
  srvPiling: getImgUrl('images/home/piling-service-card.jpg'),
  srvRail: getImgUrl('images/projects/new-folder/maho-railway/Background image.jpg'),
  srvDredge: getImgUrl('images/services/watermaster.webp'),
  machinery: getImgUrl('images/home/slider-machinery-new.jpg'),
  plantYakawewa: getImgUrl('images/resources/asphalt/yakawewa-plant-new.png'),
  plantThudugala: getImgUrl('images/thudugala-5.jpg'),
  plantOmanthai: getImgUrl('images/omanthai/plant-1.jpg'),
  plantVeerapuram: getImgUrl('images/page-headers/veerapuram-plant-header.jpg'),
  concAmpara: getImgUrl('images/ampara-concrete.jpg'),
  concJaffna: getImgUrl('images/resources/concrete/jaffna-plant.jpg'),
  concIththapana: getImgUrl('images/iththapana-concrete.jpg'),
  concVadduvakal: getImgUrl('images/resources/concrete/vadduvakal-plant.jpg'),
  concGalgamuwa: getImgUrl('images/galgamuwa-concrete.jpg'),
  concGandara: getImgUrl('images/resources/concrete/gandara-plant.jpg'),
  prjAmpara: getImgUrl('images/projects/new-folder/CONSTRUCTION OF WATER TREATMENT PLANT -AMPARA/1.jpg'),
  prjMahanama: getImgUrl('images/projects/project-86/Background image.jpeg'),
  prjPort: getImgUrl('images/projects/new-folder/colombo-port-expansion/1.jpg'),
  prjLdpp: getImgUrl('images/IMAGES/LDPP/DJI_0087.jpg'),
  prjWellamankara: getImgUrl('images/wellamankara/background image.png'),
  prjGandara: getImgUrl('images/IMAGES/Gandara/gandara-bg.jpeg'),
  prjCep3: getImgUrl('images/projects/new-folder/CEP03/1.jpg'),
  prjMannar: getImgUrl('images/IRCON-MANNAR/Background image.jpeg'),
  prjNuwaraEliya: getImgUrl('images/Landslide Mitigation Project  - Nuwaraeliya/WhatsApp Image 2026-07-02 at 9.01.02 AM.jpeg'),
  prjKalmadu: getImgUrl('images/KALMADU/BACKGROUND IMAGE.jpeg'),
  prjBeruwala: getImgUrl('images/projects/new-folder/Construction of Rock revetment at Beruwala/1.jpg'),
  prjFiladhoo: getImgUrl('images/projects/filadhoo/img1.jpg'),
  prjHulhudhoo: getImgUrl('images/projects/hulhudhoo/img1.jpg'),
  prjVandhoo: getImgUrl('images/projects/project-72/20160428_085418.jpg'),
  csrEmp1: getImgUrl('CSR/csr-first-employee-1.jpg'),
  csrEmp2: getImgUrl('CSR/csr-first-employee-2.jpg'),
  csrTemple: getImgUrl('CSR/csr-temple-1.png'),
  trainAi: getImgUrl('images/training/coursera-ai.jpg'),
  trainErp: getImgUrl('images/training/erp-training.jpg'),
  welfare: getImgUrl('images/welfare-support.jpg'),
  clientRda: getImgUrl('images/clients/rda.png'),
  clientNwsdb: getImgUrl('images/clients/nwsdb-correct.png'),
  clientUda: getImgUrl('images/clients/uda-correct.jpg'),
  clientIrrigation: getImgUrl('images/clients/irrigation-correct.svg'),
  clientIrcon: getImgUrl('images/clients/ircon-correct.svg'),
  clientNbro: getImgUrl('images/clients/nbro.svg'),
  clientFisheries: getImgUrl('images/clients/fisheries.svg'),
  clientSlr: getImgUrl('images/clients/slr.png'),
  cPrjCep2: getImgUrl('images/projects/new-folder/CEP-02/1.jpg'),
  cPrjBadulla: getImgUrl('images/BADULLA/BACKGROUND IMAGE.jpeg'),
  cPrjKilinochchi: getImgUrl('images/kilinochchi-iroad/kilinochchi-hero.jpg'),
  cPrjRathnapura: getImgUrl('images/IMAGES/RRP/rrp-13.jpg'),
  cPrjPalindanuwara: getImgUrl('images/PYR/palindanuwara-7.jpeg'),
  cPrjSagtRoad: getImgUrl('images/projects/new-folder/sagt-road/1.jpg'),
  cPrjButtala: getImgUrl('images/projects/new-folder/badulla-buttala/1.jpg'),
  cPrjThanamalwila: getImgUrl('images/projects/new-folder/tanamalvila-road/1.jpg'),
  cPrjHorawela: getImgUrl('images/Photos for Web Site - HBP/Background Image.jpeg'),
  cPrjParanthan: getImgUrl('images/POINT PEDRO/Background image.jpeg'),
  cPrjUdappuwa: getImgUrl('images/projects/new-folder/udappuwa-bridge/1.jpg'),
  cPrjHirana: getImgUrl('images/projects/new-folder/hirana-bridges/2-cropped.jpg'),
  cPrjSouthernTransport: getImgUrl('images/projects/new-folder/southern-transport-structure/1.jpg'),
  cPrjSellakatharagama: getImgUrl('images/projects/new-folder/sellakatharagama-bridge/1.jpg'),
  cPrjPadawkema: getImgUrl('images/projects/new-folder/padawkema-bridge/1.jpg'),
  cPrjHartalBridge: getImgUrl('images/projects/new-folder/widening-of-hartal-bridge/background-image.jpg'),
  cPrjBeruwalaRamp: getImgUrl('images/Beruwala/Background image.jpeg'),
  cPrjNegomboLellama: getImgUrl('images/projects/Negombo Lagoon development Project, Dredging of Lagoon- Lellama Site II/1.jpg'),
  cPrjNegomboRegina: getImgUrl('images/projects/new-folder/negombo-lagoon-stage-1/1.jpg'),
  cPrjStSebastian: getImgUrl('images/projects/new-folder/Bank Protection Works of St.Sebestian North Canal/1.jpg'),
  cPrjPassiyoorDredge: getImgUrl('images/projects/new-folder/passiyoor-anchorage/1.jpg'),
  cPrjPassiyoorRehab: getImgUrl('images/projects/passiyoor-rehab/1.jpg'),
  cPrjPeraliya: getImgUrl('images/projects/new-folder/Proposed Anchorage Facility at Peraliya Landing Site in Galle District/1.jpg'),
  cPrjBeruwalaRevet: getImgUrl('images/projects/new-folder/Construction of Rock revetment at Beruwala/1.jpg'),
  cPrjMataraWater: getImgUrl('images/projects/new-folder/matara-stage-iv/1.jpg'),
  cPrjKatanaPipe: getImgUrl('images/projects/new-folder/katana-central-zone/1.jpg'),
  cPrjKalmaduDam: getImgUrl('images/KALMADU/BACKGROUND IMAGE.jpeg'),
  cPrjUlhitiyaDam: getImgUrl('images/projects/new-folder/Remedial Works at Ulhitiya - Rathkinda Dams/1.jpg'),
  cPrjKolonnawa1: getImgUrl('images/projects/new-folder/kolonnawa-canal/background image.jpg'),
  cPrjKolonnawa3: getImgUrl('images/projects/new-folder/kolonnawa-canal-stage3/1.png'),
  cPrjEmbilipitiya: getImgUrl('images/projects/new-folder/embilipitiya-middeniya-road/1.jpg'),
  cPrjPudavkattu: getImgUrl('images/projects/new-folder/pudavkattu-yan-oya/1.jpg'),
  cPrjCycloneDitwah: getImgUrl('images/IRCON-MANNAR/Background image.jpeg'),
  cPrjAnuradhapuraRail: getImgUrl('images/projects/Anuradhapura-Vauniya/1.jpg'),
  cPrjNuwaraEliyaLd: getImgUrl('images/Landslide Mitigation Project  - Nuwaraeliya/WhatsApp Image 2026-07-02 at 9.01.02 AM.jpeg'),
  cPrjHattonLd: getImgUrl('images/hatton-landslide/hatton-1.jpg'),
  cPrjKandyNts: getImgUrl('images/kandy-landslide/kandy-5.jpg'),
  cPrjNifsKandy: getImgUrl('images/nifs-landslide/nifs-hero.jpg'),
  cPrjSabaragamuwa: getImgUrl('images/projects/new-folder/sabaragamuwa-uva/1.jpg'),
  cPrjSamaVihara: getImgUrl('images/projects/new-folder/sama-vihara/1.jpg'),
};

const completedRoads = [
  {
    title: 'Central Expressway Project - Section 2 (Package-A)',
    cat: 'Expressways',
    yr: '2020',
    client: 'Road Development Authority (RDA)',
    img: imgs.cPrjCep2,
    desc: 'Heavy earthworks, sub-base construction, asphalt wearing course, box culverts, and structural overpasses along the Mirigama-Kurunegala corridor.'
  },
  {
    title: 'Second iRoad Program — Badulla District (23.96 km)',
    cat: 'Rural Road Network',
    yr: '2024',
    client: 'Road Development Authority (RDA)',
    img: imgs.cPrjBadulla,
    desc: 'Rehabilitation, widening, asphalt concrete surfacing, and reinforced concrete roadside drainage systems across mountainous rural terrain.'
  },
  {
    title: 'Second iRoad Program — Kilinochchi District (53.60 km)',
    cat: 'Provincial Highways',
    yr: '2022',
    client: 'Road Development Authority (RDA)',
    img: imgs.cPrjKilinochchi,
    desc: 'Upgrading and asphalt paving across 16 rural road corridors in Northern Province, significantly enhancing community and agricultural mobility.'
  },
  {
    title: 'Rural Roads Rehabilitation in Rathnapura (30.12 km)',
    cat: 'Arterial Roadways',
    yr: '2024',
    client: 'Road Development Authority (RDA)',
    img: imgs.cPrjRathnapura,
    desc: 'Bituminous surfacing, reinforced concrete retaining structures, and slope stabilization along steep hilly tea-estate road corridors.'
  },
  {
    title: 'Rural Roads Rehabilitation in Palindanuwara (20.80 km)',
    cat: 'Rural Highways',
    yr: '2025',
    client: 'Road Development Authority (RDA)',
    img: imgs.cPrjPalindanuwara,
    desc: 'Full-depth sub-base stabilization, dense graded asphalt concrete overlay, and structural culvert replacements in the Kalutara District.'
  },
  {
    title: 'SAGT Harbour Access Road & Port Civil Infrastructure',
    cat: 'Port Infrastructure',
    yr: '2010',
    client: 'Hyundai Engineering / SLPA',
    img: imgs.cPrjSagtRoad,
    desc: 'Construction of heavy-duty arterial container logistics corridors and industrial-grade interlocking concrete block paving at Colombo Port.'
  },
  {
    title: 'Badalkumbura - Buttala - Sellakataragama Road (B035)',
    cat: 'Highway Engineering',
    yr: '2011',
    client: 'Road Development Authority (RDA)',
    img: imgs.cPrjButtala,
    desc: 'Sub-base stabilization, double bituminous surface treatment (DBST), asphalt overlay, and masonry retaining walls along 52.0 - 56.8 km.'
  },
  {
    title: 'Improvement of Udawalawa - Thanamalwila Road (B436)',
    cat: 'Highway Engineering',
    yr: '2011',
    client: 'Road Development Authority (RDA)',
    img: imgs.cPrjThanamalwila,
    desc: 'Arterial roadway widening, shoulder formation, cross-drainage culverts, and heavy asphalt wearing course from 5.0 to 11.5 km.'
  }
];

const completedBridges = [
  {
    title: 'Reconstruction of Bridge 4/1 on Horawela - Pitigala Road',
    cat: 'Bridge Engineering',
    yr: '2026',
    client: 'Road Development Authority (RDA)',
    img: imgs.cPrjHorawela,
    desc: 'Reinforced concrete substructures, precast prestressed concrete girders, composite deck slab, and engineered approach embankments.'
  },
  {
    title: 'Reconstruction of Bridge 12/1 on Paranthan - Mullaitivu Road',
    cat: 'Structural Bridges',
    yr: '2026',
    client: 'Road Development Authority (RDA)',
    img: imgs.cPrjParanthan,
    desc: 'Major flood-resilient bridge reconstruction on Route A035, featuring cast-in-situ bored piling and reinforced concrete abutments.'
  },
  {
    title: 'New Structural Bridge at CH. 6+100 Udappuwa Town',
    cat: 'Lagoon Crossing',
    yr: '2019',
    client: 'Road Development Authority (RDA)',
    img: imgs.cPrjUdappuwa,
    desc: 'Multi-span reinforced concrete structural bridge spanning the tidal lagoon waterway, connecting regional coastal fishing communities.'
  },
  {
    title: 'Four Steel Bridges Project (Hirana, Molkawa, Lathpadura)',
    cat: 'Steel Truss Bridges',
    yr: '2009',
    client: 'MCE Austria / RDA',
    img: imgs.cPrjHirana,
    desc: 'Assembly and erection of Austrian modular composite steel truss bridges, RC piers, and riverbank protection works across Western Province.'
  },
  {
    title: 'Southern Transport Development Project — Structures (50-57km)',
    cat: 'Expressway Bridges',
    yr: '2014',
    client: 'Road Development Authority (RDA)',
    img: imgs.cPrjSouthernTransport,
    desc: 'Heavy structural viaducts, multi-cell underpass box culverts, and high-clearance overpass flyovers on the Southern Expressway corridor.'
  },
  {
    title: 'Construction of Sellakatharagama 6/2 Bridge',
    cat: 'River Crossing',
    yr: '2010',
    client: 'Road Development Authority (RDA)',
    img: imgs.cPrjSellakatharagama,
    desc: 'Two-span prestressed bridge across Menik Ganga, engineered to resist seasonal torrential floods and heavy cultural pilgrimage traffic.'
  },
  {
    title: 'Padawkema Udamaththala Structural Bridge',
    cat: 'Bridge Engineering',
    yr: '2013',
    client: 'Road Development Authority (RDA)',
    img: imgs.cPrjPadawkema,
    desc: 'Complete structural reconstruction with cast-in-situ reinforced concrete abutments, precast beam erection, and stone-pitched river training.'
  },
  {
    title: 'Widening of Hartal Bridge in Ports of Colombo',
    cat: 'Port Civil Works',
    yr: '2012',
    client: 'Sri Lanka Ports Authority (SLPA)',
    img: imgs.cPrjHartalBridge,
    desc: 'Deck widening and substructure strengthening to accommodate ultra-heavy maritime container transport within the busy commercial port.'
  }
];

const completedMarine = [
  {
    title: 'Boat Launching Ramp at Beruwala Fishery Harbour',
    cat: 'Harbour Engineering',
    yr: '2026',
    client: 'Ministry of Fisheries',
    img: imgs.cPrjBeruwalaRamp,
    desc: 'Heavy reinforced concrete slipway and ramp structure with underwater tremie concrete casting and seabed contour preparation.'
  },
  {
    title: 'Negombo Lagoon Dredging — Lellama Site II (Package IV)',
    cat: 'Marine Dredging',
    yr: '2022',
    client: 'Ministry of Fisheries',
    img: imgs.cPrjNegomboLellama,
    desc: 'Capital channel deepening, organic silt suction dredging, and perimeter geotextile containment to improve artisanal fishing navigation.'
  },
  {
    title: 'Negombo Lagoon Dredging — Regina Road (Package III)',
    cat: 'Lagoon Restoration',
    yr: '2019',
    client: 'Ministry of Fisheries',
    img: imgs.cPrjNegomboRegina,
    desc: 'Hydraulic desilting, waterway widening, and bund formation using specialized amphibious dredgers to restore natural estuarine flow.'
  },
  {
    title: 'Bank Protection Works of St. Sebastian North Canal',
    cat: 'Canal Protection',
    yr: '2019',
    client: 'Metro Colombo Urban Dev / SLLRDC',
    img: imgs.cPrjStSebastian,
    desc: 'Cantilever sheet pile driving, reinforced concrete capping beams, and canal bed desilting under the Metro Colombo flood mitigation initiative.'
  },
  {
    title: 'Dredging of Fishery Anchorage Basin in Passiyoor, Jaffna',
    cat: 'Marine Excavation',
    yr: '2013',
    client: 'International Organization for Migration (IOM)',
    img: imgs.cPrjPassiyoorDredge,
    desc: 'Deep basin excavation and navigation channel deepening through hard seabed strata to secure safe round-the-clock anchorage for Northern fishermen.'
  },
  {
    title: 'Rehabilitation of Passiyoor Fishery Anchorage Basin',
    cat: 'Maritime Infrastructure',
    yr: '2013',
    client: 'IOM / UNOPS',
    img: imgs.cPrjPassiyoorRehab,
    desc: 'Heavy rock armour breakwater construction, concrete boat landing jetties, and coastal apron protection works along Jaffna coastline.'
  },
  {
    title: 'Proposed Anchorage Facility at Peraliya Landing Site',
    cat: 'Coastal Protection',
    yr: '2018',
    client: 'Ministry of Fisheries',
    img: imgs.cPrjPeraliya,
    desc: 'Construction of offshore rock groyne structures, boulder revetments, and reinforced beach access ramps along the Galle coastal belt.'
  },
  {
    title: 'Heavy Rock Revetment at Beruwala Coastline',
    cat: 'Shoreline Armouring',
    yr: '2006',
    client: 'Kundanmals Group',
    img: imgs.cPrjBeruwalaRevet,
    desc: 'Engineered multi-layered armour rock revetment designed to absorb extreme oceanic swell forces and arrest severe coastal erosion.'
  }
];

const completedWater = [
  {
    title: 'Matara Stage IV Water Supply — Raw Water Intake',
    cat: 'Water Infrastructure',
    yr: '2022',
    client: 'National Water Supply & Drainage Board (NWSDB)',
    img: imgs.cPrjMataraWater,
    desc: 'Turnkey civil construction of river intake well, pump house structure, electrical substation, and raw water transmission pipelines.'
  },
  {
    title: 'Pipe Laying Distribution Main in Katana Central Zone',
    cat: 'Water Distribution',
    yr: '2022',
    client: 'National Water Supply & Drainage Board (NWSDB)',
    img: imgs.cPrjKatanaPipe,
    desc: 'Trenching, installation of high-pressure ductile iron (DI) water mains, isolation valve chambers, and road surface reinstatement.'
  },
  {
    title: 'Rehabilitation of Kalmadu Scheme Headworks Dam',
    cat: 'Dam Rehabilitation',
    yr: '2023',
    client: 'Ministry of Irrigation — IWWRMP',
    img: imgs.cPrjKalmaduDam,
    desc: 'Earthen dam embankment heightening, upstream rip-rap armouring, spillway crest repairs, and sluice gate overhauls in Kilinochchi.'
  },
  {
    title: 'Remedial Works at Ulhitiya - Rathkinda Dams',
    cat: 'Dam Engineering',
    yr: '2017',
    client: 'Mahaweli Authority of Sri Lanka',
    img: imgs.cPrjUlhitiyaDam,
    desc: 'Slope protection remediation, seepage cutoff curtain grouting, spillway training wall repair, and crest access road reconstruction.'
  },
  {
    title: 'Kolonnawa Canal Diversion Scheme — Stage I',
    cat: 'Urban Drainage',
    yr: '2020',
    client: 'Ministry of Megapolis & Western Development',
    img: imgs.cPrjKolonnawa1,
    desc: 'Heavy reinforced concrete flood channel construction, retaining revetments, and high-capacity stormwater flow diversion structures.'
  },
  {
    title: 'Kolonnawa Canal Diversion Scheme — Stage III',
    cat: 'Flood Alleviation',
    yr: '2020',
    client: 'Ministry of Megapolis & Western Development',
    img: imgs.cPrjKolonnawa3,
    desc: 'Canal embankment stabilization, sheet pile driving, gabion wall protection, and channel widening to safeguard Greater Colombo from floods.'
  },
  {
    title: 'Laying of DI/uPVC Pipes for Embilipitiya - Middeniya',
    cat: 'Water Distribution',
    yr: '2015',
    client: 'National Water Supply & Drainage Board (NWSDB)',
    img: imgs.cPrjEmbilipitiya,
    desc: 'High-pressure distribution piping along provincial corridors, hydrostatic pressure testing, and rural service connections.'
  },
  {
    title: 'Civil Approach Works at Pudavkattu Bridge & Yan Oya',
    cat: 'Approach Embankments',
    yr: '2010',
    client: 'UNOPS / Golden Relief',
    img: imgs.cPrjPudavkattu,
    desc: 'Massive earthfill embankment formation, stone toe protection, and culvert structures connecting to the Yan Oya bridge crossing.'
  }
];

const completedGeotechRail = [
  {
    title: 'Cyclone Ditwah Emergency Railway Reconstruction',
    cat: 'Railway Civil Works',
    yr: '2026',
    client: 'IRCON International Limited',
    img: imgs.cPrjCycloneDitwah,
    desc: 'Rapid emergency mobilization for flood-damaged Northern railway track bed restoration, ballast packing, and culvert reconstruction.'
  },
  {
    title: 'Anuradhapura to Vavuniya Railway Track Rehabilitation',
    cat: 'Railway Infrastructure',
    yr: '2023',
    client: 'IRCON International Limited',
    img: imgs.cPrjAnuradhapuraRail,
    desc: 'Track renewal, prestressed concrete sleeper installation, embankment stabilization, level crossings, and station platform civil upgrades.'
  },
  {
    title: 'Landslide Mitigation at 05 Locations in Nuwara Eliya',
    cat: 'Slope Stabilization',
    yr: '2025',
    client: 'Ministry of Defence / NBRO (RLVMMP)',
    img: imgs.cPrjNuwaraEliyaLd,
    desc: 'High-altitude soil nailing, high-tensile wire mesh drapery, sub-surface horizontal drains, and cascaded RC retaining walls.'
  },
  {
    title: 'Slope Stabilization on Hatton - Maskeliya - Delhouse Road',
    cat: 'Geotechnical Safety',
    yr: '2023',
    client: 'Ministry of Defence / NBRO',
    img: imgs.cPrjHattonLd,
    desc: 'Anchored soldier pile retaining walls, micro-piling, shotcreting, and deep geotechnical drainage along high-risk pilgrimage corridor.'
  },
  {
    title: 'RLVMMP Landslide Mitigation at Nursing Training School Kandy',
    cat: 'Institutional Safety',
    yr: '2024',
    client: 'Ministry of Defence / NBRO',
    img: imgs.cPrjKandyNts,
    desc: 'Geotechnical slope stabilization securing hospital complex, utilizing drilled soil nails, tie-back ground anchors, and drainage cascades.'
  },
  {
    title: 'Rectification of Critical Unstable Slope at NIFS Kandy',
    cat: 'Geotechnical Works',
    yr: '2024',
    client: 'National Building Research Org. (NBRO)',
    img: imgs.cPrjNifsKandy,
    desc: 'Bio-engineering vegetative slope greening, erosion control mats, rock bolt anchoring, and structural toe retaining walls.'
  },
  {
    title: 'Slope Countermeasures at Six Sites in Sabaragamuwa & Uva',
    cat: 'Landslide Protection',
    yr: '2020',
    client: 'Road Development Authority (RDA)',
    img: imgs.cPrjSabaragamuwa,
    desc: 'JICA-funded disaster protection package including precast retaining walls, rockfall protection nets, and horizontal borehole drains.'
  },
  {
    title: 'Sama Vihara Landmark Religious Complex (Havelock City)',
    cat: 'Specialized Buildings',
    yr: '2014',
    client: 'Mireka Capital Land (Pvt) Ltd',
    img: imgs.cPrjSamaVihara,
    desc: 'Turnkey structural civil works, architectural concrete dome construction, and ornamental landscaping within Colombo landmark township.'
  }
];

// Project lists for the 5 National Contract Registry Pages (Pages 14 - 18)
const projectMasterLists = JSON.parse(fs.readFileSync(path.join(__dirname, 'project_master_lists.json'), 'utf8'));
const registryRoads = projectMasterLists.roads;
const registryBridges = projectMasterLists.bridges;
const registryMaritime = projectMasterLists.maritime;
const registryWater = projectMasterLists.water;
const registryDisaster = projectMasterLists.disaster;

function renderHeader(secNum, secName) {
  return `
    <div class="doc-header">
      <div class="header-left">
        <img src="${imgs.logo}" class="header-logo" alt="Logo" />
        <div class="header-brand-wrap">
          <div class="header-brand">RR CONSTRUCTION (PVT) LTD</div>
          <div class="header-sub">GENERAL CIVIL ENGINEERING &bull; CIDA GRADE CS2</div>
        </div>
      </div>
      <div class="header-right">
        <div class="header-sec-tag">SECTION ${secNum}: ${secName.toUpperCase()}</div>
        <div class="header-doc-tag">INSTITUTIONAL COMPANY PROFILE 2026</div>
      </div>
    </div>
  `;
}

function renderFooter(pageNum) {
  return `
    <div class="doc-footer">
      <span class="footer-left">RR Construction (Pvt) Ltd &bull; Corporate Profile &amp; Technical Capabilities</span>
      <span class="footer-center">www.rrconstruction.lk</span>
      <span class="footer-page">Page ${pageNum} of 20</span>
    </div>
  `;
}


const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>RR Construction (Pvt) Ltd - Corporate Company Profile</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 0;
    }
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    body {
      font-family: 'Calibri', 'Segoe UI', Arial, Helvetica, sans-serif;
      color: #1e293b;
      background: #f1f5f9;
      width: 210mm;
      margin: 0 auto;
      -webkit-font-smoothing: antialiased;
    }
    .page {
      width: 210mm;
      height: 297mm;
      position: relative;
      overflow: hidden;
      page-break-after: always;
      background: #ffffff;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
    }

    /* Running Header (MS Word Style) */
    .doc-header {
      height: 14mm;
      padding: 0 14mm;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1.5px solid #cbd5e1;
      background: #ffffff;
      flex-shrink: 0;
    }
    .header-left {
      display: flex;
      align-items: center;
      gap: 9px;
    }
    .header-logo {
      height: 26px;
      width: auto;
      display: block;
    }
    .header-brand-wrap {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .header-brand {
      font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
      font-weight: 700;
      font-size: 11px;
      color: #0f172a;
      letter-spacing: 0.5px;
      line-height: 1.15;
    }
    .header-sub {
      font-family: 'Calibri', 'Segoe UI', Arial, sans-serif;
      font-size: 7.5px;
      font-weight: 700;
      color: #b91c1c;
      letter-spacing: 1px;
      line-height: 1;
      margin-top: 1px;
    }
    .header-right {
      text-align: right;
    }
    .header-sec-tag {
      font-size: 9px;
      font-weight: 700;
      color: #1e3a8a;
      letter-spacing: 0.8px;
      line-height: 1.2;
    }
    .header-doc-tag {
      font-size: 7.5px;
      color: #64748b;
      letter-spacing: 0.6px;
      margin-top: 1px;
    }

    /* Running Footer (MS Word Style) */
    .doc-footer {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 11mm;
      padding: 0 14mm;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #cbd5e1;
      font-size: 8.5px;
      color: #64748b;
      background: #ffffff;
      z-index: 10;
    }
    .footer-left {
      font-weight: 500;
    }
    .footer-center {
      color: #b91c1c;
      font-weight: 600;
    }
    .footer-page {
      font-weight: 700;
      color: #0f172a;
      background: #f8fafc;
      padding: 2px 7px;
      border-radius: 3px;
      border: 1px solid #e2e8f0;
    }

    /* Content Area */
    .doc-content {
      flex: 1;
      padding: 6.5mm 14mm 12.5mm;
      display: flex;
      flex-direction: column;
      position: relative;
      box-sizing: border-box;
    }

    /* Section Headings (MS Word Heading 1 Style) */
    .sec-header-block {
      margin-bottom: 6px;
      border-bottom: 2px solid #b91c1c;
      padding-bottom: 3px;
    }
    .sec-kicker {
      font-size: 8.8px;
      font-weight: 700;
      color: #b91c1c;
      letter-spacing: 1.4px;
      text-transform: uppercase;
      margin-bottom: 1px;
    }
    .sec-heading {
      font-size: 20px;
      font-weight: 700;
      color: #0f172a;
      line-height: 1.2;
    }
    .sec-heading span {
      color: #b91c1c;
    }

    /* Standard Editorial Typography */
    p {
      text-align: justify;
      text-justify: inter-word;
      line-height: 1.5;
    }
    .doc-lead-p {
      font-size: 11px;
      color: #334155;
      line-height: 1.52;
      margin-bottom: 7px;
    }
    .img-caption {
      font-size: 8px;
      font-style: italic;
      color: #64748b;
      margin-top: 3px;
    }

    /* Callout & Fact Boxes (MS Word Sidebar Callouts) */
    .callout-box {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-left: 3.5px solid #b91c1c;
      border-radius: 4px;
      padding: 9px 12px;
    }

    /* Grids */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }
    .grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
    }

    /* Formal Table (MS Word / Excel Corporate Format) */
    table.corp-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 10px;
    }
    table.corp-table th {
      background: #1b365d;
      color: #ffffff;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 8.8px;
      letter-spacing: 0.6px;
      padding: 5.5px 8px;
      text-align: left;
      border: 1px solid #1b365d;
    }
    table.corp-table td {
      padding: 4.8px 8px;
      border: 1px solid #e2e8f0;
      vertical-align: middle;
    }
    table.corp-table tr:nth-child(even) td {
      background: #f8fafc;
    }

    /* Registry Table (Pages 14 - 18) */
    table.reg-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 8.8px;
    }
    table.reg-table thead tr {
      background: #1b365d;
      color: #ffffff;
    }
    table.reg-table th {
      font-weight: 700;
      font-size: 8.2px;
      letter-spacing: 0.6px;
      text-transform: uppercase;
      padding: 5px 7px;
      text-align: left;
      border: 1px solid #1b365d;
    }
    table.reg-table td {
      padding: 3.5px 7px;
      border: 1px solid #e2e8f0;
      vertical-align: middle;
    }
    table.reg-table tr:nth-child(even) {
      background: #f8fafc;
    }
    .p-num {
      text-align: center;
      font-weight: 700;
      color: #64748b;
      font-size: 8.0px;
    }
    .p-title {
      font-weight: 700;
      font-size: 8.8px;
      color: #0f172a;
      line-height: 1.25;
    }
    .p-client {
      font-weight: 600;
      color: #334155;
      font-size: 8.2px;
    }
    .p-loc {
      font-size: 8.0px;
      color: #64748b;
    }
    .p-yr {
      font-weight: 700;
      font-size: 9.0px;
      color: #b91c1c;
      white-space: nowrap;
      text-align: right;
    }
    .p-status {
      display: inline-block;
      font-size: 7.0px;
      font-weight: 700;
      color: #166534;
      background: #dcfce7;
      border: 1px solid #bbf7d0;
      padding: 1.5px 5px;
      border-radius: 2px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    /* Executive Stat Card (Pages 14 - 18) */
    .stats-bar-reg {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      margin-bottom: 7.5px;
    }
    .stat-card-reg {
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-left: 3.5px solid #b91c1c;
      border-radius: 4px;
      padding: 4.5px 8px;
    }
    .stat-val-reg {
      font-size: 13.5px;
      font-weight: 700;
      color: #0f172a;
      line-height: 1;
    }
    .stat-lbl-reg {
      font-size: 7.5px;
      font-weight: 700;
      color: #475569;
      text-transform: uppercase;
      margin-top: 2px;
      letter-spacing: 0.4px;
    }

    /* Summary Bar across pages to eliminate dead space */
    .summary-strip {
      background: #f1f5f9;
      border: 1px solid #cbd5e1;
      border-radius: 3px;
      padding: 5.5px 10px;
      display: flex;
      justify-content: space-between;
      font-size: 8.5px;
      color: #1e293b;
      font-weight: 600;
      margin-top: 7px;
    }
  </style>
</head>
<body>

  <!-- ================= PAGE 1: COVER PAGE (MS WORD / INDESIGN EXECUTIVE DOSSIER) ================= -->
  <div class="page" style="padding: 12mm 16mm 12mm; display: flex; flex-direction: column; justify-content: space-between;">
    <!-- Top Header Bar -->
    <div>
      <div style="display: flex; justify-content: space-between; align-items: flex-end; padding-bottom: 8px; border-bottom: 3.5px solid #b91c1c;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <img src="${imgs.logo}" style="height: 48px; width: auto;" alt="RR Construction Logo" />
          <div>
            <div style="font-size: 21px; font-weight: 700; color: #b91c1c; line-height: 1; font-family: 'Times New Roman', serif;">Construction (Pvt) Ltd</div>
            <div style="font-size: 9px; font-weight: 700; color: #0f172a; letter-spacing: 1.2px; text-transform: uppercase; margin-top: 2px;">General Civil Engineering Contractors</div>
          </div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 11px; font-weight: 700; color: #0f172a; letter-spacing: 0.8px;">CIDA GRADE CS2 &bull; HIGHEST NATIONAL RATING</div>
          <div style="font-size: 8.8px; font-weight: 600; color: #64748b; margin-top: 1px;">ISO 9001:2015 &bull; ISO 14001:2015 &bull; ISO 45001:2018 CERTIFIED</div>
          <div style="font-size: 8.8px; font-weight: 700; color: #b91c1c; margin-top: 1px;">ESTABLISHED 1995 &bull; 100% SRI LANKAN OWNED</div>
        </div>
      </div>

      <!-- Feature Image Showcase (High-Resolution Architectural & Infrastructure Panoramas) -->
      <div style="margin-top: 12px; border: 1.5px solid #cbd5e1; border-radius: 4px; overflow: hidden; position: relative;">
        <div style="display: grid; grid-template-columns: 1.5fr 1fr; height: 112mm; gap: 2px; background: #e2e8f0;">
          <div style="position: relative; overflow: hidden;">
            <img src="${imgs.headOfficeBuilding}" style="width: 100%; height: 100%; object-fit: cover;" alt="Head Office" />
            <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(15,23,42,0.85); color: #fff; padding: 7px 11px; font-size: 9px; font-weight: 600;">
              <strong>Corporate Headquarters</strong> &bull; Colombo 09, Sri Lanka
            </div>
          </div>
          <div style="display: grid; grid-template-rows: 1fr 1fr; gap: 2px;">
            <div style="position: relative; overflow: hidden;">
              <img src="${imgs.prjGandara}" style="width: 100%; height: 100%; object-fit: cover;" alt="Maritime Works" />
              <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(15,23,42,0.85); color: #fff; padding: 5px 9px; font-size: 8.5px; font-weight: 600;">
                <strong>Gandara Fishery Harbour</strong> &bull; Southern Province
              </div>
            </div>
            <div style="position: relative; overflow: hidden;">
              <img src="${imgs.prjMahanama}" style="width: 100%; height: 100%; object-fit: cover;" alt="Bridge Works" />
              <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(15,23,42,0.85); color: #fff; padding: 5px 9px; font-size: 8.5px; font-weight: 600;">
                <strong>Mahanama Bridge (116.4m)</strong> &bull; Matara
              </div>
            </div>
          </div>
        </div>
        <div style="background: #1b365d; color: #ffffff; padding: 6px 14px; font-size: 9px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; display: flex; justify-content: space-between;">
          <span>Three Decades of Integrated Civil Infrastructure Excellence</span>
          <span>1995 &ndash; 2026</span>
        </div>
      </div>

      <!-- Title & Document Heading -->
      <div style="margin-top: 14px; border-left: 5px solid #b91c1c; padding-left: 14px;">
        <div style="font-size: 9.5px; font-weight: 700; color: #b91c1c; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 2px;">Corporate Dossier &bull; Institutional Profile</div>
        <div style="font-size: 35px; font-weight: 700; color: #0f172a; line-height: 1.1; letter-spacing: 0.5px;">COMPANY PROFILE</div>
        <div style="font-size: 21px; font-weight: 700; color: #b91c1c; margin-top: 2px;">RR CONSTRUCTION (PVT) LTD</div>
        <div style="font-size: 11.5px; color: #475569; margin-top: 4px; line-height: 1.45;">
          Comprehensive profile of technical capabilities, heavy machinery assets, in-house production facilities, and authenticated national contract archive across Sri Lanka and overseas.
        </div>
        <div style="margin-top: 8px; display: flex; flex-wrap: wrap; gap: 6px; font-size: 9px; font-weight: 600; color: #1b365d;">
          <span style="background: #e2e8f0; padding: 2.5px 8px; border-radius: 3px;">Highways &amp; Expressways</span>
          <span style="background: #e2e8f0; padding: 2.5px 8px; border-radius: 3px;">Bridges &amp; Flyovers</span>
          <span style="background: #e2e8f0; padding: 2.5px 8px; border-radius: 3px;">Maritime &amp; Coastal Works</span>
          <span style="background: #e2e8f0; padding: 2.5px 8px; border-radius: 3px;">Water Supply &amp; Drainage</span>
          <span style="background: #e2e8f0; padding: 2.5px 8px; border-radius: 3px;">Landslide Mitigation</span>
          <span style="background: #e2e8f0; padding: 2.5px 8px; border-radius: 3px;">Railway Infrastructure</span>
        </div>
      </div>

      <!-- Accreditation Strip -->
      <div style="margin-top: 10px; background: #1b365d; color: #ffffff; padding: 6px 12px; border-radius: 3px; font-size: 9px; font-weight: 700; letter-spacing: 0.8px; display: flex; justify-content: space-between;">
        <span>CIDA GRADE CS2 ACCREDITED &bull; GENERAL CIVIL ENGINEERING CONTRACTOR</span>
        <span>30+ YEARS OF EXCELLENCE (1995 &ndash; 2026)</span>
      </div>
    </div>

    <!-- Executive Summary 4 Cards & Bottom Details -->
    <div>
      <!-- 4 Stat Summary Cards -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 10px;">
        <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-top: 3px solid #b91c1c; border-radius: 4px; padding: 9px 12px;">
          <div style="font-size: 15px; font-weight: 700; color: #0f172a;">Grade CS2</div>
          <div style="font-size: 8.5px; font-weight: 700; color: #b91c1c; text-transform: uppercase; margin-top: 1px;">CIDA Highest Rating</div>
          <div style="font-size: 8px; color: #64748b; margin-top: 2px;">General Construction</div>
        </div>
        <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-top: 3px solid #1b365d; border-radius: 4px; padding: 9px 12px;">
          <div style="font-size: 15px; font-weight: 700; color: #0f172a;">30+ Years</div>
          <div style="font-size: 8.5px; font-weight: 700; color: #1b365d; text-transform: uppercase; margin-top: 1px;">Operating History</div>
          <div style="font-size: 8px; color: #64748b; margin-top: 2px;">Established 1995</div>
        </div>
        <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-top: 3px solid #b91c1c; border-radius: 4px; padding: 9px 12px;">
          <div style="font-size: 15px; font-weight: 700; color: #0f172a;">2,000+ Staff</div>
          <div style="font-size: 8.5px; font-weight: 700; color: #b91c1c; text-transform: uppercase; margin-top: 1px;">Direct Workforce</div>
          <div style="font-size: 8px; color: #64748b; margin-top: 2px;">Engineers &amp; Technicians</div>
        </div>
        <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-top: 3px solid #1b365d; border-radius: 4px; padding: 9px 12px;">
          <div style="font-size: 15px; font-weight: 700; color: #0f172a;">1,000+ Units</div>
          <div style="font-size: 8.5px; font-weight: 700; color: #1b365d; text-transform: uppercase; margin-top: 1px;">Proprietary Fleet</div>
          <div style="font-size: 8px; color: #64748b; margin-top: 2px;">Zero Subcontracting Delay</div>
        </div>
      </div>

      <!-- Bottom Publication Box -->
      <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-top: 2px solid #1b365d; border-radius: 4px; padding: 9px 12px; font-size: 9px; color: #475569; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div><strong style="color: #0f172a;">Head Office:</strong> No. 865, Dr. Danister de Silva Mawatha, Baseline Road, Colombo 09, Sri Lanka.</div>
          <div style="margin-top: 2px;"><strong style="color: #0f172a;">Contact:</strong> Tel: +94 11-2433427 &bull; Fax: +94 11-2430161 &bull; Email: general@rrconstruction.lk &bull; Web: www.rrconstruction.lk</div>
        </div>
        <div style="text-align: right; border-left: 1px solid #cbd5e1; padding-left: 12px;">
          <div style="font-weight: 700; color: #0f172a;">EDITION: 2026</div>
          <div style="color: #b91c1c; font-weight: 600;">DOC REF: RRC-CP-2026/V1</div>
        </div>
      </div>
    </div>
  </div>

  <!-- ================= PAGE 2: CORPORATE OVERVIEW & KEY DATA ================= -->
  <div class="page">
    ${renderHeader('01', 'Corporate Overview & Key Data')}
    <div class="doc-content">
      <div class="sec-header-block">
        <div class="sec-kicker">Section 1.0 &bull; Corporate Identity &amp; Profile</div>
        <h2 class="sec-heading">Corporate Overview &amp; <span>Key Data Fact Sheet</span></h2>
      </div>

      <div class="grid-2" style="gap: 14px; margin-bottom: 9px;">
        <div>
          <p class="doc-lead-p" style="margin-bottom: 5px;">
            Founded in <strong>1995</strong>, <strong>RR Construction (Pvt) Ltd</strong> has grown over three decades into one of Sri Lanka's foremost 100% Sri Lankan-owned general civil engineering and infrastructure construction enterprises.
          </p>
          <p class="doc-lead-p" style="margin-bottom: 5px;">
            Operating at the prestigious <strong>CIDA Grade CS2</strong> rating (the highest tier awarded by the Construction Industry Development Authority), we provide integrated turnkey solutions spanning <strong>highways, expressways, bridges, maritime harbours, railway tracks, landslide mitigation, water supply, and piling foundations</strong>.
          </p>
          <p class="doc-lead-p" style="margin-bottom: 0;">
            Backed by a direct workforce of <strong>2,000+ professionals</strong> and a proprietary fleet of over <strong>1,000 heavy construction machines</strong>, our operations are strengthened by our own asphalt batching plants, aggregate quarries, M-sand facilities, and concrete batching plants island-wide.
          </p>
        </div>

        <div>
          <!-- 2x2 Collage -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 4px; height: 55mm; border: 1px solid #cbd5e1; border-radius: 4px; overflow: hidden; background: #e2e8f0;">
            <img src="${imgs.collage1}" style="width: 100%; height: 100%; object-fit: cover;" alt="Road Operations" />
            <img src="${imgs.collage2}" style="width: 100%; height: 100%; object-fit: cover;" alt="Harbour Operations" />
            <img src="${imgs.collage3}" style="width: 100%; height: 100%; object-fit: cover;" alt="Excavation Operations" />
            <img src="${imgs.collage4}" style="width: 100%; height: 100%; object-fit: cover;" alt="Geotechnical Operations" />
          </div>
          <div class="img-caption">Figure 1.1: Vertically integrated heavy civil infrastructure execution across Sri Lanka.</div>
        </div>
      </div>

      <!-- Corporate Fact Sheet Table -->
      <div style="margin-bottom: 9px;">
        <table class="corp-table">
          <thead>
            <tr>
              <th colspan="2">Official Corporate Fact Sheet &amp; Regulatory Credentials</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="width: 25%; font-weight: 700; color: #475569;">Company Name</td>
              <td style="font-weight: 700; color: #0f172a;">RR Construction (Pvt) Ltd</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569;">Registration Numbers</td>
              <td>Company Reg: <strong>PV 11346</strong> &bull; CIDA Registration: <strong>C-10171</strong></td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569;">CIDA Grading</td>
              <td><strong style="color: #b91c1c;">Grade CS2</strong> (Highest National Classification for Civil Engineering)</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569;">Year Established</td>
              <td>1995 (Over 30 Years of Uninterrupted Civil Construction Excellence)</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569;">Quality Certifications</td>
              <td><strong>ISO 9001:2015</strong> (QMS) &bull; <strong>ISO 14001:2015</strong> (EMS) &bull; <strong>ISO 45001:2018</strong> (OH&amp;S)</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569;">Direct Human Capital</td>
              <td>2,000+ Qualified Engineers, Project Managers, Surveyors, and Skilled Technicians</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569;">Equipment Resources</td>
              <td>1,000+ Self-Owned Heavy Construction Machines, Piling Rigs, Dredgers &amp; Transit Mixers</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569;">Headquarters</td>
              <td>No. 865, Dr. Danister de Silva Mawatha, Baseline Road, Orugodawatta, Colombo 09</td>
            </tr>
            <tr>
              <td style="font-weight: 700; color: #475569;">Primary Bankers</td>
              <td>Hatton National Bank, Seylan Bank, Sampath Bank, Cargills Bank, Pan Asia Bank, NTB &amp; NDB</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Vision, Mission & Values -->
      <div class="grid-2" style="gap: 10px; margin-bottom: 8px;">
        <div class="callout-box">
          <div style="font-size: 9.5px; font-weight: 700; color: #b91c1c; text-transform: uppercase; letter-spacing: 1px;">Our Vision</div>
          <div style="font-size: 13px; font-weight: 700; color: #0f172a; margin-top: 1px;">"Passion for Engineering Excellence"</div>
          <p style="font-size: 9.8px; color: #475569; margin-top: 3px; line-height: 1.45;">
            To be Sri Lanka's most trusted and innovative heavy infrastructure developer, building enduring national assets that accelerate socio-economic progress.
          </p>
        </div>
        <div class="callout-box" style="border-left-color: #1b365d;">
          <div style="font-size: 9.5px; font-weight: 700; color: #1b365d; text-transform: uppercase; letter-spacing: 1px;">Our Mission</div>
          <div style="font-size: 13px; font-weight: 700; color: #0f172a; margin-top: 1px;">Integrity, Safety &amp; On-Time Delivery</div>
          <p style="font-size: 9.8px; color: #475569; margin-top: 3px; line-height: 1.45;">
            Delivering superior civil engineering contracts through technical rigor, complete resource self-reliance, environmental responsibility, and zero compromise on safety.
          </p>
        </div>
      </div>

      <!-- 6 Core Values -->
      <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px;">
        ${[
          { t: 'EXCELLENCE', d: 'Highest quality standards' },
          { t: 'INTEGRITY', d: 'Transparent governance' },
          { t: 'SELF-RELIANCE', d: 'Proprietary plant assets' },
          { t: 'SAFETY FIRST', d: 'Zero-harm HSE culture' },
          { t: 'INNOVATION', d: 'Advanced civil methods' },
          { t: 'COMMUNITY', d: 'Lasting national impact' }
        ].map(v => `
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-top: 2.5px solid #b91c1c; border-radius: 3px; padding: 6px 4px; text-align: center;">
            <div style="font-size: 9px; font-weight: 700; color: #b91c1c;">${v.t}</div>
            <div style="font-size: 7.6px; color: #64748b; margin-top: 1px;">${v.d}</div>
          </div>
        `).join('')}
      </div>

      <!-- Governance Strip -->
      <div class="summary-strip">
        <span><strong>Corporate Governance:</strong> 100% Sri Lankan Directorship &bull; Registered PV 11346</span>
        <span><strong>Regulatory Compliance:</strong> CIDA CS2 Registered Contractor (C-10171)</span>
        <span><strong>Management Systems:</strong> ISO 9001, 14001 &amp; 45001 Accredited</span>
      </div>
    </div>
    ${renderFooter(2)}
  </div>

  <!-- ================= PAGE 3: EXECUTIVE LEADERSHIP ================= -->
  <div class="page">
    ${renderHeader('02', 'Executive Leadership & Governance')}
    <div class="doc-content">
      <div class="sec-header-block">
        <div class="sec-kicker">Section 2.0 &bull; Board &amp; Executive Leadership</div>
        <h2 class="sec-heading">Executive Leadership &amp; <span>Managing Director's Statement</span></h2>
      </div>

      <!-- Managing Director Profile Card -->
      <div style="background: #ffffff; border: 1.5px solid #cbd5e1; border-radius: 4px; padding: 13px 15px; margin-bottom: 10px;">
        <div style="display: flex; gap: 16px; align-items: stretch;">
          <div style="width: 48mm; flex-shrink: 0;">
            <div style="border: 1px solid #94a3b8; border-radius: 3px; overflow: hidden; height: 60mm;">
              <img src="${imgs.md}" style="width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block;" alt="Managing Director" />
            </div>
            <div style="text-align: center; margin-top: 4px;">
              <div style="font-size: 11px; font-weight: 700; color: #0f172a;">Mr. Ranjith Senadhera</div>
              <div style="font-size: 8.5px; font-weight: 600; color: #b91c1c;">Managing Director &bull; Founder</div>
            </div>
          </div>

          <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
            <div>
              <div style="font-size: 9px; font-weight: 700; color: #b91c1c; letter-spacing: 1px; text-transform: uppercase;">Founder &amp; Chief Executive</div>
              <h3 style="font-size: 19px; font-weight: 700; color: #0f172a; margin-top: 1px;">Mr. Ranjith Senadhera S.D.</h3>
              <div style="font-size: 10.5px; font-weight: 600; color: #64748b; margin-bottom: 6px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">
                B.Sc. Engineering (Hons) &bull; M.Eng. (Industrial Engineering &amp; Management)
              </div>
              <p class="doc-lead-p" style="font-size: 10.2px; line-height: 1.5; margin-bottom: 6px;">
                As the Founder and Managing Director of RR Construction (Pvt) Ltd since its inception in 1995, Mr. Ranjith Senadhera has provided the strategic vision and engineering leadership that elevated the company from a specialized civil engineering contractor into a nationally distinguished CIDA CS2 developer.
              </p>
              <p class="doc-lead-p" style="font-size: 10.2px; line-height: 1.5; margin-bottom: 0;">
                Under his direct leadership, RR Construction pioneered full vertical integration within Sri Lanka's civil engineering sector &mdash; investing aggressively in heavy machinery fleets, asphalt plants, metal quarries, and concrete plants. This self-reliance ensures that clients receive guaranteed quality, cost certainty, and timely project delivery without reliance on third-party suppliers.
              </p>
            </div>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-top: 8px; border-top: 1px solid #e2e8f0; padding-top: 6px;">
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 3px; padding: 5px 7px;">
                <div style="font-size: 7.8px; font-weight: 700; color: #b91c1c; text-transform: uppercase;">Academic Foundation</div>
                <div style="font-size: 9px; font-weight: 700; color: #0f172a;">B.Sc. Eng (Hons) / M.Eng</div>
              </div>
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 3px; padding: 5px 7px;">
                <div style="font-size: 7.8px; font-weight: 700; color: #1b365d; text-transform: uppercase;">Corporate Leadership</div>
                <div style="font-size: 9px; font-weight: 700; color: #0f172a;">30+ Years Chief Executive</div>
              </div>
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 3px; padding: 5px 7px;">
                <div style="font-size: 7.8px; font-weight: 700; color: #b91c1c; text-transform: uppercase;">Industry Contribution</div>
                <div style="font-size: 9px; font-weight: 700; color: #0f172a;">CIDA CS2 National Leader</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Formal Executive Statement (Letterhead Format) -->
      <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-top: 3px solid #1b365d; border-radius: 4px; padding: 13px 16px;">
        <div style="font-size: 9px; font-weight: 700; color: #1b365d; letter-spacing: 1.2px; text-transform: uppercase; margin-bottom: 3px;">
          Official Executive Statement
        </div>
        <div style="font-size: 14px; font-weight: 700; color: #0f172a; margin-bottom: 6px;">
          Message from the Managing Director
        </div>

        <div style="border-left: 3.5px solid #b91c1c; padding-left: 10px; margin-bottom: 7px; font-style: italic; font-size: 11px; color: #0f172a; font-weight: 600;">
          "We do not merely construct physical infrastructure; we construct the enduring foundations of Sri Lanka's economic progress through uncompromising engineering discipline."
        </div>

        <div class="grid-2" style="gap: 12px; font-size: 10px; color: #334155; line-height: 1.52;">
          <p>
            When we established RR Construction in 1995, our core ambition was simple yet uncompromising: to build a civil engineering organization capable of undertaking the most demanding engineering assignments in Sri Lanka with complete self-sufficiency and international quality standards. Over the last three decades, that vision has materialized into reality.
          </p>
          <p>
            By investing continuously in our 2,000+ strong engineering team, our 1,000+ heavy machinery fleet, and our dedicated material production plants, we have eliminated the supply-chain vulnerabilities that often challenge our industry. As we look ahead, we remain dedicated to engineering national progress with the same passion that founded our journey.
          </p>
        </div>

        <div style="margin-top: 8px; padding-top: 7px; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; align-items: flex-end;">
          <div>
            <div style="font-size: 9.5px; color: #64748b;">Yours sincerely,</div>
            <div style="font-size: 12px; font-weight: 700; color: #0f172a; margin-top: 2px;">Ranjith Senadhera S.D.</div>
            <div style="font-size: 8.5px; font-weight: 600; color: #b91c1c;">Managing Director &bull; RR Construction (Pvt) Ltd</div>
          </div>
          <div style="text-align: right; font-size: 8.5px; color: #64748b;">
            <div>Registered Office: Colombo 09, Sri Lanka</div>
            <div>CIDA Registration: C-10171 | Grade CS2</div>
          </div>
        </div>
      </div>

      <!-- Commitments Strip -->
      <div class="summary-strip">
        <span><strong>Leadership Philosophy:</strong> Technical Rigor &bull; Resource Independence &bull; Zero Delay</span>
        <span><strong>Executive Office:</strong> Baseline Road, Colombo 09</span>
        <span><strong>Established:</strong> 1995</span>
      </div>
    </div>
    ${renderFooter(3)}
  </div>

  <!-- ================= PAGE 4: HISTORY & MILESTONES (1995 - PRESENT) ================= -->
  <div class="page">
    ${renderHeader('03', 'Corporate History & Growth Milestones')}
    <div class="doc-content">
      <div class="sec-header-block">
        <div class="sec-kicker">Section 3.0 &bull; Corporate Track Record</div>
        <h2 class="sec-heading">Three Decades of Growth &amp; <span>Strategic Milestones</span></h2>
      </div>
      <p class="doc-lead-p" style="margin-bottom: 6px;">
        A chronological overview of RR Construction's transformation from a specialized regional civil contractor into a fully integrated CIDA CS2 national infrastructure leader:
      </p>

      <div style="display: flex; flex-direction: column; gap: 5.5px;">
        ${[
          { yr: '1995', title: 'Foundation & Early Civil Assignments', desc: 'Commenced operations in 1995, executing early civil works in collaboration with ED Zublin AG on the Central Bank Extension Project, establishing uncompromising standards of engineering quality.', img: imgs.prjBeruwala },
          { yr: '2003 - 2006', title: 'Maritime & Large-Scale Water Infrastructure', desc: 'Executed Queen Elizabeth Quay (QEQ) port facilities at Colombo Port (2003) and the landmark 172,000 Cum/day Ampara Water Treatment Plant (2006), establishing national water & harbour credentials.', img: imgs.prjAmpara },
          { yr: '2007 - 2009', title: 'Major River Bridges & Structural Steel Works', desc: 'Delivered landmark structural crossings including the 116.4m Matara Mahanama Bridge (2007) and four Austrian modular steel bridges across Sri Lanka (2009), demonstrating heavy structural expertise.', img: imgs.prjMahanama },
          { yr: '2012', title: 'Port Infrastructure & Marine Coastal Works', desc: 'Completed the Oluvil Port Coastal Protection and Colombo Port Expansion Harbour Infrastructure service road and heavy-duty paving works for Sri Lanka Ports Authority (SLPA).', img: imgs.prjPort },
          { yr: '2016 - 2018', title: 'International Footprint &mdash; Republic of Maldives', desc: 'Mobilized international marine fleets to deliver three coastal protection contracts for the Government of the Maldives: R. Vandhoo Seawall (2016), Seenu Hulhudhoo (2017), and Ha. Filadhoo Harbour (2018).', img: imgs.prjVandhoo },
          { yr: '2017', title: 'Pioneering Landslide Mitigation & Geotechnics', desc: 'Partnered with RDA and JICA on the Landslide Disaster Protection Project (LDPP Package 02), introducing specialized soil nailing, sub-surface horizontal drainage, and shotcreting to Sri Lanka.', img: imgs.prjLdpp },
          { yr: '2019 - 2023', title: 'Railway Corridors & Expressway Development', desc: 'Teamed with IRCON International on Northern Railway Line track rehabilitations (Maho-Anuradhapura and Anuradhapura-Vavuniya), and delivered Central Expressway (CEP Section 2 & 3) earthworks.', img: imgs.srvRail },
          { yr: '2024 - Present', title: 'CS2 Integrated National Infrastructure Leader', desc: 'Operating at Grade CS2 with 2,000+ personnel and 1,000+ machines, executing Gandara Fishery Harbour, Kurikadduvan Jetty, Cyclone Ditwah emergency railway works, and rural iRoad networks.', img: imgs.prjGandara }
        ].map(m => `
          <div style="display: flex; gap: 10px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; padding: 6.5px 10px; align-items: center;">
            <div style="width: 80px; height: 52px; flex-shrink: 0; border: 1px solid #cbd5e1; border-radius: 2px; overflow: hidden;">
              <img src="${m.img}" style="width: 100%; height: 100%; object-fit: cover; display: block;" alt="${m.title}" />
            </div>
            <div style="width: 88px; flex-shrink: 0; text-align: center;">
              <div style="background: #b91c1c; color: #ffffff; font-size: 9.5px; font-weight: 700; padding: 3px 6px; border-radius: 2px; letter-spacing: 0.3px;">${m.yr}</div>
            </div>
            <div style="flex: 1;">
              <div style="font-size: 11.5px; font-weight: 700; color: #0f172a; line-height: 1.2;">${m.title}</div>
              <div style="font-size: 9.6px; color: #475569; line-height: 1.38; margin-top: 1.5px;">${m.desc}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Milestones Summary Strip -->
      <div class="summary-strip">
        <span><strong>Three Decades of Growth:</strong> 1995 Foundation to CIDA CS2 National Tier</span>
        <span><strong>Operational Scale:</strong> 2,000+ Personnel &bull; 1,000+ Machinery Fleet</span>
        <span><strong>Contract Record:</strong> 100% Handover Rate</span>
      </div>
    </div>
    ${renderFooter(4)}
  </div>

  <!-- ================= PAGE 5: CORE ENGINEERING SERVICES ================= -->
  <div class="page">
    ${renderHeader('04', 'Core Engineering Capabilities')}
    <div class="doc-content">
      <div class="sec-header-block">
        <div class="sec-kicker">Section 4.0 &bull; Technical Domains &amp; Scope</div>
        <h2 class="sec-heading">Multidisciplinary Civil Engineering <span>Capabilities</span></h2>
      </div>
      <p class="doc-lead-p" style="margin-bottom: 6px;">
        RR Construction brings three decades of proven engineering execution and proprietary equipment resources across eight specialized civil infrastructure sectors:
      </p>

      <div class="grid-2" style="gap: 7px;">
        ${[
          { no: '4.1', title: 'Highways & Expressways', img: imgs.srvRoad, desc: 'Turnkey earthworks, sub-base stabilization, dense bituminous macadam, and hot-mix asphalt wearing course paving for national highways, Central Expressway packages, and rural iRoad networks.' },
          { no: '4.2', title: 'Bridge Construction & Overpasses', img: imgs.srvBridge, desc: 'Design-and-build and construct-only structural bridges, prestressed concrete girder river crossings, flyovers, viaducts, and multi-cell underpass culverts designed for extreme structural loads.' },
          { no: '4.3', title: 'Maritime, Harbours & Dredging', img: imgs.srvMarine, desc: 'Deep-water fishery harbours, rock armour breakwater revetments, quay walls, concrete boat ramps, capital basin dredging, and coastal protection works across Sri Lanka and the Maldives.' },
          { no: '4.4', title: 'Landslide Mitigation & Geotechnics', img: imgs.srvLandslide, desc: 'Specialized slope stabilization, drilled soil nailing, tie-back ground anchors, high-tensile wire mesh drapery, shotcreting, and sub-surface horizontal drainage in hill-country terrain.' },
          { no: '4.5', title: 'Piling & Deep Foundations', img: imgs.srvPiling, desc: 'Bored cast-in-situ concrete piling up to 1,500mm diameter, micro-piling, diaphragm wall construction, and heavy pile load testing utilizing proprietary hydraulic rotary drilling rigs.' },
          { no: '4.6', title: 'Railway Civil Works & Track Formation', img: imgs.srvRail, desc: 'Main line and northern line railway track rehabilitation, precast concrete sleeper installation, ballast screening, bridge abutment reconstruction, and rapid post-cyclone track restoration.' },
          { no: '4.7', title: 'Water Supply, Reservoirs & Dams', img: imgs.srvDredge, desc: 'Municipal water treatment plants (up to 172,000 m\xB3/day), raw water river intakes, high-pressure DI transmission pipelines, earthen dam rehabilitation, and canal diversion gates.' },
          { no: '4.8', title: 'Institutional Buildings & Materials Lab', img: imgs.headOffice, desc: 'Multi-storey commercial and institutional complexes backed by in-house accredited materials laboratories for continuous aggregate, concrete cube, and asphalt mix testing.' }
        ].map(s => `
          <div style="display: flex; gap: 8px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; padding: 6.5px 8px; align-items: center; min-height: 48mm;">
            <div style="width: 34mm; height: 100%; min-height: 44mm; flex-shrink: 0; border: 1px solid #cbd5e1; border-radius: 2px; overflow: hidden;">
              <img src="${s.img}" style="width: 100%; height: 100%; object-fit: cover; display: block;" alt="${s.title}" />
            </div>
            <div style="flex: 1; padding: 2px 4px 2px 0;">
              <div style="font-size: 8.5px; font-weight: 700; color: #b91c1c; text-transform: uppercase;">${s.no} Sector Domain</div>
              <div style="font-size: 11.5px; font-weight: 700; color: #0f172a; margin-top: 1px; line-height: 1.2;">${s.title}</div>
              <p style="font-size: 9.5px; color: #334155; line-height: 1.4; margin-top: 2.5px;">${s.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Sector Standards Strip -->
      <div class="summary-strip">
        <span><strong>CIDA Grade CS2:</strong> Certified in Highways, Bridges, Maritime, Water &amp; Geotechnics</span>
        <span><strong>National Coverage:</strong> Active Project Operations Across All 9 Provinces</span>
      </div>
    </div>
    ${renderFooter(5)}
  </div>

  <!-- ================= PAGE 6: RESOURCES, PLANTS & MACHINERY FLEET ================= -->
  <div class="page">
    ${renderHeader('05', 'Resource Base & Production Facilities')}
    <div class="doc-content">
      <div class="sec-header-block">
        <div class="sec-kicker">Section 5.0 &bull; Vertical Integration &amp; Fleet</div>
        <h2 class="sec-heading">In-House Production Plants &amp; <span>1,000+ Machinery Fleet</span></h2>
      </div>
      <p class="doc-lead-p" style="margin-bottom: 6px;">
        Complete vertical integration guarantees zero third-party delays, uncompromised material quality, and full scheduling independence across all major civil contracts:
      </p>

      <!-- 4 Asphalt & Crusher Plants -->
      <div style="font-size: 9.5px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; border-left: 3px solid #b91c1c; padding-left: 6px;">
        Asphalt Batching, Crusher &amp; M-Sand Facilities
      </div>
      <div class="grid-2" style="gap: 7px; margin-bottom: 8px;">
        ${[
          { name: 'Yakawewa Asphalt Plant', loc: 'Medawachchiya, North Central', img: imgs.plantYakawewa, desc: 'Fully automated high-output hot-mix asphalt plant supplying Binder and Wearing Courses for northern highway networks.' },
          { name: 'Thudugala Aggregate Crusher', loc: 'Kalutara District, Western', img: imgs.plantThudugala, desc: 'High-capacity hard-rock quarry and multi-stage crushing plant supplying railway ballast, aggregate base course, and concrete stone.' },
          { name: 'Omanthai Aggregate Quarry', loc: 'Vavuniya District, Northern', img: imgs.plantOmanthai, desc: 'Strategic northern quarry supplying graded aggregate for northern railway track rehabilitations and iRoad highway packages.' },
          { name: 'Veerapuram M-Sand Plant', loc: 'Vavuniya District, Northern', img: imgs.plantVeerapuram, desc: 'Environmentally sustainable Manufactured Sand (M-Sand) washing and grading plant producing premium-grade river-sand alternatives.' }
        ].map(p => `
          <div style="display: flex; gap: 8px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; padding: 6.5px 8px; align-items: center;">
            <div style="width: 27mm; height: 19mm; flex-shrink: 0; border: 1px solid #cbd5e1; border-radius: 2px; overflow: hidden;">
              <img src="${p.img}" style="width: 100%; height: 100%; object-fit: cover; display: block;" alt="${p.name}" />
            </div>
            <div style="flex: 1;">
              <div style="font-size: 10.5px; font-weight: 700; color: #0f172a;">${p.name}</div>
              <div style="font-size: 8px; font-weight: 700; color: #b91c1c;">${p.loc}</div>
              <div style="font-size: 9px; color: #475569; line-height: 1.32; margin-top: 1px;">${p.desc}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- 6 Ready-Mix Concrete Plants -->
      <div style="font-size: 9.5px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; border-left: 3px solid #1b365d; padding-left: 6px;">
        Island-Wide Ready-Mix Concrete Batching Network (06 Plants)
      </div>
      <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 5.5px; margin-bottom: 8px;">
        ${[
          { name: 'Ampara Plant', dist: 'Eastern Province', img: imgs.concAmpara },
          { name: 'Mirusuvil Plant', dist: 'Jaffna District', img: imgs.concJaffna },
          { name: 'Iththapana Plant', dist: 'Kalutara District', img: imgs.concIththapana },
          { name: 'Vadduvakal Plant', dist: 'Mullaitivu District', img: imgs.concVadduvakal },
          { name: 'Galgamuwa Plant', dist: 'Kurunegala District', img: imgs.concGalgamuwa },
          { name: 'Gandara Plant', dist: 'Matara District', img: imgs.concGandara }
        ].map(c => `
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; overflow: hidden; text-align: center;">
            <div style="height: 19mm; width: 100%; overflow: hidden;">
              <img src="${c.img}" style="width: 100%; height: 100%; object-fit: cover; display: block;" alt="${c.name}" />
            </div>
            <div style="padding: 3.5px 2px;">
              <div style="font-size: 8.8px; font-weight: 700; color: #0f172a; line-height: 1.1;">${c.name}</div>
              <div style="font-size: 7.5px; font-weight: 600; color: #b91c1c;">${c.dist}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Heavy Machinery Fleet Showcase -->
      <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-left: 4px solid #b91c1c; border-radius: 4px; padding: 8px 11px; display: flex; gap: 12px; align-items: center;">
        <div style="width: 45mm; height: 28mm; flex-shrink: 0; border: 1px solid #cbd5e1; border-radius: 3px; overflow: hidden;">
          <img src="${imgs.machinery}" style="width: 100%; height: 100%; object-fit: cover; display: block;" alt="Fleet" />
        </div>
        <div style="flex: 1;">
          <div style="font-size: 11.5px; font-weight: 700; color: #0f172a;">1,000+ Units Self-Owned Heavy Construction Plant Fleet</div>
          <p style="font-size: 9.5px; color: #334155; line-height: 1.42; margin-top: 2px;">
            Our proprietary machinery inventory includes Sri Lanka's first <strong>Wirtgen W200F Cold Milling Machine</strong>, Finnish <strong>Watermaster Classic IV Multipurpose Amphibious Dredgers</strong>, Vogele Super Asphalt Pavers, Hamm Tandem Vibratory Rollers, Bauer &amp; Sany Hydraulic Rotary Piling Rigs, Mobile Telescopic Cranes, Heavy Tracked Excavators, Motor Graders, and a 50+ fleet of Ready-Mix Transit Mixers.
          </p>
        </div>
      </div>

      <!-- Plant Production Capacity Summary Strip -->
      <div class="summary-strip">
        <span><strong>Asphalt Output:</strong> 120 TPH automated plant</span>
        <span><strong>Crusher Capacity:</strong> 350+ Cu.m / day</span>
        <span><strong>Concrete Batching:</strong> 60 Cu.m / hr per plant</span>
        <span><strong>Fleet Maintenance:</strong> Central Workshop Peliyagoda</span>
      </div>
    </div>
    ${renderFooter(6)}
  </div>

  <!-- ================= PAGE 7: LANDMARK & MILESTONE PROJECTS ================= -->
  <div class="page">
    ${renderHeader('06', 'Flagship Infrastructure Portfolio')}
    <div class="doc-content">
      <div class="sec-header-block">
        <div class="sec-kicker">Section 6.0 &bull; Landmark Civil Works</div>
        <h2 class="sec-heading">Iconic National Infrastructure <span>Projects</span></h2>
      </div>
      <p class="doc-lead-p" style="margin-bottom: 6px;">
        A showcase of eight landmark civil engineering developments that demonstrate RR Construction's multi-disciplinary execution capabilities across Sri Lanka:
      </p>

      <div class="grid-2" style="gap: 7px;">
        ${[
          { title: 'Gandara Fishery Harbour Construction', cat: 'Maritime & Harbour', yr: '2026', client: 'Ministry of Fisheries / CFHC', img: imgs.prjGandara, desc: 'Deep-water harbour development featuring heavy rock armour breakwater revetments, basin dredging, and reinforced concrete quay facilities.' },
          { title: 'Central Expressway Project (Section 2 & 3)', cat: 'National Expressway', yr: '2020 - 2024', client: 'Road Development Authority (RDA)', img: imgs.prjCep3, desc: 'Heavy earthworks, deep cut-and-fill formations, box culverts, and structural overpasses along the Mirigama-Kurunegala expressway corridor.' },
          { title: 'Maho - Anuradhapura Railway Rehabilitation', cat: 'Railway Engineering', yr: '2023 - 2026', client: 'IRCON International Limited', img: imgs.srvRail, desc: 'High-speed railway track bed renewal, embankment stabilization, ballast screening, and Cyclone Ditwah emergency restoration.' },
          { title: 'Colombo Port Expansion - Service Roads', cat: 'Port Logistics', yr: '2012', client: 'Sri Lanka Ports Authority (SLPA)', img: imgs.prjPort, desc: 'Construction of heavy-duty arterial container logistics service roads, terminal access paving, and storm drainage infrastructure.' },
          { title: 'Matara Mahanama Bridge (116.4m)', cat: 'Bridge Engineering', yr: '2007', client: 'Road Development Authority (RDA)', img: imgs.prjMahanama, desc: 'Prestigious 116.4-meter river crossing across the Nilwala River, engineered with heavy RC substructures to withstand monsoon flood events.' },
          { title: 'Ampara Water Treatment Plant (172,000 m\xB3/day)', cat: 'Water Treatment', yr: '2006', client: 'National Water Supply & Drainage Board', img: imgs.prjAmpara, desc: 'High-capacity municipal water treatment plant, river intake pump houses, clarifiers, and transmission networks serving Ampara.' },
          { title: 'Landslide Disaster Protection (LDPP & RLVMMP)', cat: 'Geotechnical Safety', yr: '2017 - 2025', client: 'RDA / Ministry of Defence / NBRO', img: imgs.prjLdpp, desc: 'Specialized geotechnical slope stabilization across 32+ high-risk sites in Nuwara Eliya, Kandy, Hatton, Badulla, and Ratnapura.' },
          { title: 'Wellamankara Fishery Harbour &mdash; Wennappuwa', cat: 'Maritime Infrastructure', yr: '2021', client: 'Ministry of Fisheries', img: imgs.prjWellamankara, desc: 'Complete fishery harbour development featuring rock breakwaters, basin dredging, concrete jetties, and onshore landing infrastructure.' }
        ].map(p => `
          <div style="display: flex; gap: 8px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; padding: 6.5px 8px; align-items: center; min-height: 48mm;">
            <div style="width: 34mm; height: 100%; min-height: 44mm; flex-shrink: 0; border: 1px solid #cbd5e1; border-radius: 2px; overflow: hidden; position: relative;">
              <img src="${p.img}" style="width: 100%; height: 100%; object-fit: cover; display: block;" alt="${p.title}" />
              <div style="position: absolute; top: 3px; left: 3px; background: rgba(15,23,42,0.85); color: #fff; font-size: 7px; font-weight: 700; padding: 1.5px 4px; border-radius: 2px;">${p.cat}</div>
            </div>
            <div style="flex: 1; padding: 2px 4px 2px 0;">
              <div style="display: flex; justify-content: space-between; align-items: baseline;">
                <span style="font-size: 8.5px; font-weight: 700; color: #b91c1c;">${p.yr}</span>
              </div>
              <div style="font-size: 11.2px; font-weight: 700; color: #0f172a; line-height: 1.2; margin-top: 1px;">${p.title}</div>
              <div style="font-size: 8.8px; font-weight: 600; color: #1b365d; margin-top: 1px;">Client: ${p.client}</div>
              <p style="font-size: 9.2px; color: #334155; line-height: 1.38; margin-top: 2.5px;">${p.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Landmark Delivery Strip -->
      <div class="summary-strip">
        <span><strong>Institutional Delivery:</strong> Multi-Billion Rupee Civil Infrastructure Contracts Commissioned</span>
        <span><strong>Key Clients:</strong> RDA, SLPA, CFHC, NWSDB, IRCON &amp; JICA</span>
      </div>
    </div>
    ${renderFooter(7)}
  </div>

  <!-- ================= PAGE 8: OVERSEAS FOOTPRINT & MAJOR CLIENTS ================= -->
  <div class="page">
    ${renderHeader('07', 'International Footprint & Client Partners')}
    <div class="doc-content">
      <div class="sec-header-block">
        <div class="sec-kicker">Section 7.0 &bull; Overseas Operations &amp; Clients</div>
        <h2 class="sec-heading">International Projects &amp; <span>Strategic Clients</span></h2>
      </div>

      <!-- Maldives Projects -->
      <div style="font-size: 9.5px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; border-left: 3px solid #b91c1c; padding-left: 6px;">
        Overseas Maritime &amp; Coastal Infrastructure (Republic of Maldives)
      </div>
      <div class="grid-3" style="gap: 8px; margin-bottom: 9px;">
        ${[
          { title: 'Ha. Filadhoo Harbour Construction', yr: '2018', client: 'Ministry of Housing, Maldives', img: imgs.prjFiladhoo, desc: 'Harbour dredging, rock armour breakwater, and concrete quay wall construction across northern atolls.' },
          { title: 'Coastal Protection in Seenu Hulhudhoo', yr: '2017', client: 'Ministry of Environment, Maldives', img: imgs.prjHulhudhoo, desc: 'Engineered rock revetments and groyne fields protecting community shorelines from severe tidal erosion.' },
          { title: 'Harbour Seawall in R. Vandhoo', yr: '2016', client: 'Ministry of Environment, Maldives', img: imgs.prjVandhoo, desc: 'Reconstruction and structural upgrading of island harbour seawall and boat landing infrastructure.' }
        ].map(m => `
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; overflow: hidden;">
            <div style="height: 30mm; width: 100%; overflow: hidden;">
              <img src="${m.img}" style="width: 100%; height: 100%; object-fit: cover; display: block;" alt="${m.title}" />
            </div>
            <div style="padding: 7px 8px;">
              <div style="font-size: 8px; font-weight: 700; color: #b91c1c;">Maldives &bull; ${m.yr}</div>
              <div style="font-size: 10.8px; font-weight: 700; color: #0f172a; line-height: 1.2; margin-top: 1px;">${m.title}</div>
              <div style="font-size: 8.2px; color: #64748b; margin-top: 1px;">Client: ${m.client}</div>
              <div style="font-size: 9px; color: #334155; line-height: 1.32; margin-top: 2px;">${m.desc}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Active Ongoing Commitments Table -->
      <div style="font-size: 9.5px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; border-left: 3px solid #1b365d; padding-left: 6px;">
        Active Ongoing Project Deployments (2025 &ndash; 2026)
      </div>
      <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 4px; padding: 8px 10px; margin-bottom: 9px;">
        <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; font-size: 8.8px;">
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 2px solid #b91c1c; padding: 5px 6px; border-radius: 2px;">
            <div style="font-weight: 700; color: #b91c1c;">Highways &amp; Roads</div>
            <div style="color: #475569; margin-top: 2px; line-height: 1.3;">Colombo-Galle corridor, Northern Lot 03, and rural road networks.</div>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 2px solid #1b365d; padding: 5px 6px; border-radius: 2px;">
            <div style="font-weight: 700; color: #1b365d;">Major Bridges</div>
            <div style="color: #475569; margin-top: 2px; line-height: 1.3;">10+ ongoing bridge reconstructions and overpasses island-wide.</div>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 2px solid #b91c1c; padding: 5px 6px; border-radius: 2px;">
            <div style="font-weight: 700; color: #b91c1c;">Maritime &amp; Jetty</div>
            <div style="color: #475569; margin-top: 2px; line-height: 1.3;">Kurikadduvan Jetty structure and Beruwala harbour ramp works.</div>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 2px solid #1b365d; padding: 5px 6px; border-radius: 2px;">
            <div style="font-weight: 700; color: #1b365d;">Landslide Safety</div>
            <div style="color: #475569; margin-top: 2px; line-height: 1.3;">MOD/NBRO Packages 10D, 10F, and 10J slope stabilization.</div>
          </div>
          <div style="background: #ffffff; border: 1px solid #e2e8f0; border-top: 2px solid #b91c1c; padding: 5px 6px; border-radius: 2px;">
            <div style="font-weight: 700; color: #b91c1c;">Railway Civil</div>
            <div style="color: #475569; margin-top: 2px; line-height: 1.3;">Cyclone Ditwah emergency restoration with IRCON International.</div>
          </div>
        </div>
      </div>

      <!-- Major Clients Grid -->
      <div style="font-size: 9.5px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; border-left: 3px solid #b91c1c; padding-left: 6px;">
        Major Institutional Clients &amp; State Authorities
      </div>
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;">
        ${[
          { name: 'Road Development Authority (RDA)', logo: imgs.clientRda },
          { name: 'National Water Supply & Drainage Board', logo: imgs.clientNwsdb },
          { name: 'Urban Development Authority (UDA)', logo: imgs.clientUda },
          { name: 'Ministry of Irrigation & Mahaweli', logo: imgs.clientIrrigation },
          { name: 'IRCON International Limited (India)', logo: imgs.clientIrcon },
          { name: 'National Building Research Org. (NBRO)', logo: imgs.clientNbro },
          { name: 'Ministry of Fisheries / CFHC', logo: imgs.clientFisheries },
          { name: 'Sri Lanka Railways (SLR)', logo: imgs.clientSlr }
        ].map(c => `
          <div style="border: 1px solid #cbd5e1; border-radius: 3px; padding: 6px; display: flex; flex-direction: column; align-items: center; text-align: center; justify-content: center; background: #ffffff; height: 24mm;">
            <img src="${c.logo}" style="height: 25px; width: auto; max-width: 80%; object-fit: contain; margin-bottom: 3px;" alt="${c.name}" />
            <div style="font-size: 8px; font-weight: 700; color: #0f172a; line-height: 1.15;">${c.name}</div>
          </div>
        `).join('')}
      </div>

      <!-- Client Partnership Strip -->
      <div class="summary-strip">
        <span><strong>Joint Ventures:</strong> Collaborative Civil Delivery with ED Zublin AG, Hyundai Engineering &amp; IRCON International</span>
        <span><strong>Procurement:</strong> FIDIC Red &amp; Yellow Book Standards</span>
      </div>
    </div>
    ${renderFooter(8)}
  </div>

  <!-- ================= PAGES 9 TO 13: COMPLETED PROJECTS CASE STUDIES BY SECTOR ================= -->

  <!-- PAGE 9: HIGHWAYS & EXPRESSWAYS -->
  <div class="page">
    ${renderHeader('08', 'Major Completed Projects: Highways & Expressways')}
    <div class="doc-content">
      <div class="sec-header-block">
        <div class="sec-kicker">Section 8.0 &bull; Project Archive</div>
        <h2 class="sec-heading">Completed Projects <span>(Highways, Expressways &amp; Roads)</span></h2>
      </div>
      <p class="doc-lead-p" style="margin-bottom: 6px;">
        Featured case studies of national highways, expressways, and provincial road development packages completed across Sri Lanka:
      </p>

      <div class="grid-2" style="gap: 8px;">
        ${completedRoads.slice(0, 6).map(p => `
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; overflow: hidden; display: flex; flex-direction: column; height: 69mm;">
            <div style="position: relative; height: 35.5mm; width: 100%;">
              <img src="${p.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${p.title}" />
              <span style="position: absolute; top: 4px; left: 4px; background: rgba(15,23,42,0.85); color: #fff; font-size: 7.2px; font-weight: 700; padding: 1.5px 5px; border-radius: 2px;">${p.cat}</span>
              <span style="position: absolute; top: 4px; right: 4px; background: #b91c1c; color: #fff; font-size: 7.8px; font-weight: 700; padding: 1.5px 5px; border-radius: 2px;">${p.yr}</span>
            </div>
            <div style="padding: 7px 9px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="font-size: 11.2px; font-weight: 700; color: #0f172a; line-height: 1.25; margin-bottom: 2px;">${p.title}</div>
                <div style="font-size: 9px; font-weight: 700; color: #b91c1c; margin-bottom: 2px;">Client: ${p.client}</div>
                <p style="font-size: 9.4px; color: #334155; line-height: 1.38;">${p.desc}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    ${renderFooter(9)}
  </div>

  <!-- PAGE 10: BRIDGES & CROSSINGS -->
  <div class="page">
    ${renderHeader('09', 'Major Completed Projects: Bridges & Flyovers')}
    <div class="doc-content">
      <div class="sec-header-block">
        <div class="sec-kicker">Section 9.0 &bull; Project Archive</div>
        <h2 class="sec-heading">Completed Projects <span>(Bridges, Flyovers &amp; Crossings)</span></h2>
      </div>
      <p class="doc-lead-p" style="margin-bottom: 6px;">
        Featured structural case studies of multi-span river crossings, prestressed bridges, overpasses, and coastal lagoon causeways:
      </p>

      <div class="grid-2" style="gap: 8px;">
        ${completedBridges.slice(0, 6).map(p => `
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; overflow: hidden; display: flex; flex-direction: column; height: 69mm;">
            <div style="position: relative; height: 35.5mm; width: 100%;">
              <img src="${p.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${p.title}" />
              <span style="position: absolute; top: 4px; left: 4px; background: rgba(15,23,42,0.85); color: #fff; font-size: 7.2px; font-weight: 700; padding: 1.5px 5px; border-radius: 2px;">${p.cat}</span>
              <span style="position: absolute; top: 4px; right: 4px; background: #b91c1c; color: #fff; font-size: 7.8px; font-weight: 700; padding: 1.5px 5px; border-radius: 2px;">${p.yr}</span>
            </div>
            <div style="padding: 7px 9px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="font-size: 11.2px; font-weight: 700; color: #0f172a; line-height: 1.25; margin-bottom: 2px;">${p.title}</div>
                <div style="font-size: 9px; font-weight: 700; color: #b91c1c; margin-bottom: 2px;">Client: ${p.client}</div>
                <p style="font-size: 9.4px; color: #334155; line-height: 1.38;">${p.desc}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    ${renderFooter(10)}
  </div>

  <!-- PAGE 11: MARITIME & DREDGING -->
  <div class="page">
    ${renderHeader('10', 'Major Completed Projects: Maritime & Dredging')}
    <div class="doc-content">
      <div class="sec-header-block">
        <div class="sec-kicker">Section 10.0 &bull; Project Archive</div>
        <h2 class="sec-heading">Completed Projects <span>(Maritime, Fishery Harbours &amp; Dredging)</span></h2>
      </div>
      <p class="doc-lead-p" style="margin-bottom: 6px;">
        Featured maritime engineering case studies of deep-water fishery harbours, rock revetments, coastal protection, and basin dredging:
      </p>

      <div class="grid-2" style="gap: 8px;">
        ${completedMarine.slice(0, 6).map(p => `
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; overflow: hidden; display: flex; flex-direction: column; height: 69mm;">
            <div style="position: relative; height: 35.5mm; width: 100%;">
              <img src="${p.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${p.title}" />
              <span style="position: absolute; top: 4px; left: 4px; background: rgba(15,23,42,0.85); color: #fff; font-size: 7.2px; font-weight: 700; padding: 1.5px 5px; border-radius: 2px;">${p.cat}</span>
              <span style="position: absolute; top: 4px; right: 4px; background: #b91c1c; color: #fff; font-size: 7.8px; font-weight: 700; padding: 1.5px 5px; border-radius: 2px;">${p.yr}</span>
            </div>
            <div style="padding: 7px 9px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="font-size: 11.2px; font-weight: 700; color: #0f172a; line-height: 1.25; margin-bottom: 2px;">${p.title}</div>
                <div style="font-size: 9px; font-weight: 700; color: #b91c1c; margin-bottom: 2px;">Client: ${p.client}</div>
                <p style="font-size: 9.4px; color: #334155; line-height: 1.38;">${p.desc}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    ${renderFooter(11)}
  </div>

  <!-- PAGE 12: WATER & IRRIGATION -->
  <div class="page">
    ${renderHeader('11', 'Major Completed Projects: Water & Irrigation')}
    <div class="doc-content">
      <div class="sec-header-block">
        <div class="sec-kicker">Section 11.0 &bull; Project Archive</div>
        <h2 class="sec-heading">Completed Projects <span>(Water Treatment, Reservoirs &amp; Canals)</span></h2>
      </div>
      <p class="doc-lead-p" style="margin-bottom: 6px;">
        Featured municipal water infrastructure case studies covering large-scale water treatment plants, river intakes, and transmission mains:
      </p>

      <div class="grid-2" style="gap: 8px;">
        ${completedWater.slice(0, 6).map(p => `
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; overflow: hidden; display: flex; flex-direction: column; height: 69mm;">
            <div style="position: relative; height: 35.5mm; width: 100%;">
              <img src="${p.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${p.title}" />
              <span style="position: absolute; top: 4px; left: 4px; background: rgba(15,23,42,0.85); color: #fff; font-size: 7.2px; font-weight: 700; padding: 1.5px 5px; border-radius: 2px;">${p.cat}</span>
              <span style="position: absolute; top: 4px; right: 4px; background: #b91c1c; color: #fff; font-size: 7.8px; font-weight: 700; padding: 1.5px 5px; border-radius: 2px;">${p.yr}</span>
            </div>
            <div style="padding: 7px 9px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="font-size: 11.2px; font-weight: 700; color: #0f172a; line-height: 1.25; margin-bottom: 2px;">${p.title}</div>
                <div style="font-size: 9px; font-weight: 700; color: #b91c1c; margin-bottom: 2px;">Client: ${p.client}</div>
                <p style="font-size: 9.4px; color: #334155; line-height: 1.38;">${p.desc}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    ${renderFooter(12)}
  </div>

  <!-- PAGE 13: LANDSLIDE MITIGATION & RAILWAY -->
  <div class="page">
    ${renderHeader('12', 'Major Completed Projects: Geotechnics & Railway')}
    <div class="doc-content">
      <div class="sec-header-block">
        <div class="sec-kicker">Section 12.0 &bull; Project Archive</div>
        <h2 class="sec-heading">Completed Projects <span>(Landslide Mitigation &amp; Railway Civil)</span></h2>
      </div>
      <p class="doc-lead-p" style="margin-bottom: 6px;">
        Featured specialized engineering case studies of slope stabilization, horizontal subsurface drainage, and railway corridor track works:
      </p>

      <div class="grid-2" style="gap: 8px;">
        ${completedGeotechRail.slice(0, 6).map(p => `
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; overflow: hidden; display: flex; flex-direction: column; height: 69mm;">
            <div style="position: relative; height: 35.5mm; width: 100%;">
              <img src="${p.img}" style="width: 100%; height: 100%; object-fit: cover;" alt="${p.title}" />
              <span style="position: absolute; top: 4px; left: 4px; background: rgba(15,23,42,0.85); color: #fff; font-size: 7.2px; font-weight: 700; padding: 1.5px 5px; border-radius: 2px;">${p.cat}</span>
              <span style="position: absolute; top: 4px; right: 4px; background: #b91c1c; color: #fff; font-size: 7.8px; font-weight: 700; padding: 1.5px 5px; border-radius: 2px;">${p.yr}</span>
            </div>
            <div style="padding: 7px 9px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <div style="font-size: 11.2px; font-weight: 700; color: #0f172a; line-height: 1.25; margin-bottom: 2px;">${p.title}</div>
                <div style="font-size: 9px; font-weight: 700; color: #b91c1c; margin-bottom: 2px;">Client: ${p.client}</div>
                <p style="font-size: 9.4px; color: #334155; line-height: 1.38;">${p.desc}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    ${renderFooter(13)}
  </div>

  <!-- ================= PAGES 14 TO 18: NATIONAL CONTRACT AUDIT REGISTRIES ================= -->

  <!-- PAGE 14: ROADS REGISTRY -->
  <div class="page">
    ${renderHeader('13', 'National Contract Registry: Highways & Roads')}
    <div class="doc-content">
      <div class="sec-header-block">
        <div class="sec-kicker">Section 13.0 &bull; Contract Audit Archive</div>
        <h2 class="sec-heading">Completed Projects <span>(Highways, Expressways &amp; Road Networks)</span></h2>
      </div>
      <p class="doc-lead-p" style="margin-bottom: 6px;">
        Official registry of national highway corridors, expressway packages, and rural road networks delivered across Sri Lanka:
      </p>

      <div class="stats-bar-reg">
        <div class="stat-card-reg">
          <div class="stat-val-reg">250+ km</div>
          <div class="stat-lbl-reg">Highways Paved</div>
        </div>
        <div class="stat-card-reg" style="border-left-color: #1b365d;">
          <div class="stat-val-reg">${registryRoads.length} Schemes</div>
          <div class="stat-lbl-reg">Registered Contracts</div>
        </div>
        <div class="stat-card-reg">
          <div class="stat-val-reg">8 Provinces</div>
          <div class="stat-lbl-reg">Network Footprint</div>
        </div>
        <div class="stat-card-reg" style="border-left-color: #1b365d;">
          <div class="stat-val-reg">Grade CS2</div>
          <div class="stat-lbl-reg">CIDA Highest Rating</div>
        </div>
      </div>

      <table class="reg-table">
        <thead>
          <tr>
            <th style="width: 24px; text-align: center;">#</th>
            <th>Project Title &amp; Engineering Scope</th>
            <th style="width: 175px;">Client / Employer</th>
            <th style="width: 125px;">Location / Province</th>
            <th style="width: 44px; text-align: center;">Year</th>
            <th style="width: 58px; text-align: center;">Status</th>
          </tr>
        </thead>
        <tbody>
          ${registryRoads.map((p, idx) => `
            <tr>
              <td class="p-num">${String(idx + 1).padStart(2, '0')}</td>
              <td><div class="p-title">${p.name}</div></td>
              <td><div class="p-client">${p.client}</div></td>
              <td><div class="p-loc">${p.loc}</div></td>
              <td style="text-align: center;"><div class="p-yr">${p.yr}</div></td>
              <td style="text-align: center;"><span class="p-status">Completed</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    ${renderFooter(14)}
  </div>

  <!-- PAGE 15: BRIDGES REGISTRY -->
  <div class="page">
    ${renderHeader('14', 'National Contract Registry: Structural Bridges')}
    <div class="doc-content">
      <div class="sec-header-block">
        <div class="sec-kicker">Section 14.0 &bull; Contract Audit Archive</div>
        <h2 class="sec-heading">Completed Projects <span>(Bridges, Flyovers &amp; River Crossings)</span></h2>
      </div>
      <p class="doc-lead-p" style="margin-bottom: 6px;">
        Documented audit record of pre-stressed concrete, steel girder, multi-span river bridges, and coastal causeways across Sri Lanka:
      </p>

      <div class="stats-bar-reg">
        <div class="stat-card-reg">
          <div class="stat-val-reg">80+ Bridges</div>
          <div class="stat-lbl-reg">Structures Delivered</div>
        </div>
        <div class="stat-card-reg" style="border-left-color: #1b365d;">
          <div class="stat-val-reg">${registryBridges.length} Schemes</div>
          <div class="stat-lbl-reg">Registered Contracts</div>
        </div>
        <div class="stat-card-reg">
          <div class="stat-val-reg">French Govt Fin.</div>
          <div class="stat-lbl-reg">46 Bridge Package</div>
        </div>
        <div class="stat-card-reg" style="border-left-color: #1b365d;">
          <div class="stat-val-reg">Bored Piling</div>
          <div class="stat-lbl-reg">Proprietary Rigs</div>
        </div>
      </div>

      <table class="reg-table" style="margin-bottom: 7px;">
        <thead>
          <tr>
            <th style="width: 24px; text-align: center;">#</th>
            <th>Project Title &amp; Engineering Scope</th>
            <th style="width: 175px;">Client / Employer</th>
            <th style="width: 125px;">Location / Province</th>
            <th style="width: 44px; text-align: center;">Year</th>
            <th style="width: 58px; text-align: center;">Status</th>
          </tr>
        </thead>
        <tbody>
          ${registryBridges.map((p, idx) => `
            <tr>
              <td class="p-num" style="padding: 4.2px 7px;">${String(idx + 1).padStart(2, '0')}</td>
              <td style="padding: 4.2px 7px;"><div class="p-title">${p.name}</div></td>
              <td style="padding: 4.2px 7px;"><div class="p-client">${p.client}</div></td>
              <td style="padding: 4.2px 7px;"><div class="p-loc">${p.loc}</div></td>
              <td style="text-align: center; padding: 4.2px 7px;"><div class="p-yr">${p.yr}</div></td>
              <td style="text-align: center; padding: 4.2px 7px;"><span class="p-status">Completed</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <!-- Bridge Technical Strip -->
      <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-left: 3.5px solid #1b365d; border-radius: 4px; padding: 6px 12px; display: flex; justify-content: space-between; align-items: center; font-size: 8.5px; color: #334155;">
        <div style="font-weight: 700; color: #0f172a;">Specialized Bridge Engineering Capabilities:</div>
        <div>Prestressed Concrete Girders &bull; Bored Piling up to 1,500mm &bull; Modular Steel Trusses &bull; Scour Protection</div>
      </div>
    </div>
    ${renderFooter(15)}
  </div>

  <!-- PAGE 16: MARITIME REGISTRY -->
  <div class="page">
    ${renderHeader('15', 'National Contract Registry: Maritime & Dredging')}
    <div class="doc-content">
      <div class="sec-header-block">
        <div class="sec-kicker">Section 15.0 &bull; Contract Audit Archive</div>
        <h2 class="sec-heading">Completed Projects <span>(Fishery Harbours, Ports &amp; Coastal Works)</span></h2>
      </div>
      <p class="doc-lead-p" style="margin-bottom: 6px;">
        Documented track record of deep-water fishery harbours, rock breakwaters, capital dredging, and coastal protection works:
      </p>

      <div class="stats-bar-reg">
        <div class="stat-card-reg">
          <div class="stat-val-reg">19 Marine Sites</div>
          <div class="stat-lbl-reg">Delivered Projects</div>
        </div>
        <div class="stat-card-reg" style="border-left-color: #1b365d;">
          <div class="stat-val-reg">Myliddy Harbour</div>
          <div class="stat-lbl-reg">Phases I &amp; II Turnkey</div>
        </div>
        <div class="stat-card-reg">
          <div class="stat-val-reg">Oluvil &amp; Colombo</div>
          <div class="stat-lbl-reg">Breakwaters &amp; Ports</div>
        </div>
        <div class="stat-card-reg" style="border-left-color: #1b365d;">
          <div class="stat-val-reg">Maldives &amp; SL</div>
          <div class="stat-lbl-reg">Regional Capability</div>
        </div>
      </div>

      <table class="reg-table" style="margin-bottom: 7px;">
        <thead>
          <tr>
            <th style="width: 24px; text-align: center;">#</th>
            <th>Project Title &amp; Engineering Scope</th>
            <th style="width: 175px;">Client / Employer</th>
            <th style="width: 125px;">Location / Province</th>
            <th style="width: 44px; text-align: center;">Year</th>
            <th style="width: 58px; text-align: center;">Status</th>
          </tr>
        </thead>
        <tbody>
          ${registryMaritime.map((p, idx) => `
            <tr>
              <td class="p-num" style="padding: 4.5px 7px;">${String(idx + 1).padStart(2, '0')}</td>
              <td style="padding: 4.5px 7px;"><div class="p-title">${p.name}</div></td>
              <td style="padding: 4.5px 7px;"><div class="p-client">${p.client}</div></td>
              <td style="padding: 4.5px 7px;"><div class="p-loc">${p.loc}</div></td>
              <td style="text-align: center; padding: 4.5px 7px;"><div class="p-yr">${p.yr}</div></td>
              <td style="text-align: center; padding: 4.5px 7px;"><span class="p-status">Completed</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <!-- Maritime Technical Strip -->
      <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-left: 3.5px solid #b91c1c; border-radius: 4px; padding: 6px 12px; display: flex; justify-content: space-between; align-items: center; font-size: 8.5px; color: #334155;">
        <div style="font-weight: 700; color: #0f172a;">Specialized Marine Engineering Fleet:</div>
        <div>Watermaster Classic IV Multipurpose Amphibious Dredgers &bull; Heavy Core-Loc &amp; Armour Revetments &bull; Concrete Quay Walls</div>
      </div>
    </div>
    ${renderFooter(16)}
  </div>

  <!-- PAGE 17: WATER & RESERVOIRS REGISTRY -->
  <div class="page">
    ${renderHeader('16', 'National Contract Registry: Water & Irrigation')}
    <div class="doc-content">
      <div class="sec-header-block">
        <div class="sec-kicker">Section 16.0 &bull; Contract Audit Archive</div>
        <h2 class="sec-heading">Completed Projects <span>(Water Supply Schemes, Reservoirs &amp; Irrigation)</span></h2>
      </div>
      <p class="doc-lead-p" style="margin-bottom: 6px;">
        Documented civil engineering contracts for water treatment facilities, raw water river intakes, transmission mains, and dam headworks:
      </p>

      <div class="stats-bar-reg">
        <div class="stat-card-reg">
          <div class="stat-val-reg">${registryWater.length} Key Schemes</div>
          <div class="stat-lbl-reg">Registered Contracts</div>
        </div>
        <div class="stat-card-reg" style="border-left-color: #1b365d;">
          <div class="stat-val-reg">150+ km</div>
          <div class="stat-lbl-reg">Pipelines Laid</div>
        </div>
        <div class="stat-card-reg">
          <div class="stat-val-reg">172,000 m\xB3/day</div>
          <div class="stat-lbl-reg">WTP Treatment Scale</div>
        </div>
        <div class="stat-card-reg" style="border-left-color: #1b365d;">
          <div class="stat-val-reg">NWSDB / ADB</div>
          <div class="stat-lbl-reg">Institutional Employers</div>
        </div>
      </div>

      <table class="reg-table" style="margin-bottom: 8px;">
        <thead>
          <tr>
            <th style="width: 24px; text-align: center;">#</th>
            <th>Project Title &amp; Engineering Scope</th>
            <th style="width: 175px;">Client / Employer</th>
            <th style="width: 125px;">Location / Province</th>
            <th style="width: 44px; text-align: center;">Year</th>
            <th style="width: 58px; text-align: center;">Status</th>
          </tr>
        </thead>
        <tbody>
          ${registryWater.map((p, idx) => `
            <tr>
              <td class="p-num" style="padding: 5px 7px;">${String(idx + 1).padStart(2, '0')}</td>
              <td style="padding: 5px 7px;"><div class="p-title" style="font-size: 9.2px;">${p.name}</div></td>
              <td style="padding: 5px 7px;"><div class="p-client" style="font-size: 8.5px;">${p.client}</div></td>
              <td style="padding: 5px 7px;"><div class="p-loc" style="font-size: 8.2px;">${p.loc}</div></td>
              <td style="text-align: center; padding: 5px 7px;"><div class="p-yr">${p.yr}</div></td>
              <td style="text-align: center; padding: 5px 7px;"><span class="p-status">Completed</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <!-- 2-Photo Water Infrastructure Feature Strip -->
      <div class="grid-2" style="gap: 8px; margin-bottom: 8px;">
        <div style="display: flex; gap: 8px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; padding: 6px; align-items: center;">
          <img src="${imgs.prjAmpara}" style="width: 28mm; height: 18mm; object-fit: cover; border-radius: 2px; flex-shrink: 0;" alt="Ampara" />
          <div>
            <div style="font-size: 10.5px; font-weight: 700; color: #0f172a;">Ampara Water Treatment Plant</div>
            <div style="font-size: 8px; font-weight: 700; color: #b91c1c;">172,000 Cu.m / day &bull; NWSDB</div>
            <div style="font-size: 8.8px; color: #475569; line-height: 1.28; margin-top: 1px;">Turnkey intake pumping station, clarifiers, and filtration plant.</div>
          </div>
        </div>
        <div style="display: flex; gap: 8px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; padding: 6px; align-items: center;">
          <img src="${imgs.srvDredge}" style="width: 28mm; height: 18mm; object-fit: cover; border-radius: 2px; flex-shrink: 0;" alt="Dredge" />
          <div>
            <div style="font-size: 10.5px; font-weight: 700; color: #0f172a;">Kalmadu Reservoir Headworks</div>
            <div style="font-size: 8px; font-weight: 700; color: #1b365d;">Ministry of Irrigation &bull; Kilinochchi</div>
            <div style="font-size: 8.8px; color: #475569; line-height: 1.28; margin-top: 1px;">Rehabilitation of earthen dam bund, spillway gates, and sluices.</div>
          </div>
        </div>
      </div>

      <!-- Sector Capabilities Highlight Strip for Water & Irrigation -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
        <div class="callout-box" style="border-left-color: #1b365d; padding: 8px 10px;">
          <div style="font-size: 9.5px; font-weight: 700; color: #1b365d; text-transform: uppercase; margin-bottom: 2px;">
            Water Treatment Plants &amp; Distribution Transmission
          </div>
          <p style="font-size: 9px; color: #475569; line-height: 1.38; margin: 0;">
            Turnkey construction of industrial and municipal water treatment plants (including the 172,000 m\xB3/day Ampara WTP), high-pressure ductile iron (DI) and uPVC pipeline transmission networks, and clean drinking water distribution systems serving thousands of rural and urban households.
          </p>
        </div>
        <div class="callout-box" style="padding: 8px 10px;">
          <div style="font-size: 9.5px; font-weight: 700; color: #b91c1c; text-transform: uppercase; margin-bottom: 2px;">
            Reservoirs, Dam Headworks &amp; Flood Mitigation
          </div>
          <p style="font-size: 9px; color: #475569; line-height: 1.38; margin: 0;">
            Specialized civil works in major dam remedial engineering, curtain grouting, spillway training walls, flood gates, and canal diversion schemes including critical works at Ulhitiya-Rathkinda, Kalmadu reservoir headworks, and the Kolonnawa canal diversion.
          </p>
        </div>
      </div>
    </div>
    ${renderFooter(17)}
  </div>

  <!-- PAGE 18: LANDSLIDE & RAILWAY REGISTRY -->
  <div class="page">
    ${renderHeader('17', 'National Contract Registry: Landslide & Railway')}
    <div class="doc-content">
      <div class="sec-header-block">
        <div class="sec-kicker">Section 17.0 &bull; Contract Audit Archive</div>
        <h2 class="sec-heading">Completed Projects <span>(Landslide Mitigation, Railways &amp; Structures)</span></h2>
      </div>
      <p class="doc-lead-p" style="margin-bottom: 6px;">
        Specialized geotechnical slope engineering, soil nailing, disaster protection, national railway corridors, and institutional civil structures:
      </p>

      <div class="stats-bar-reg">
        <div class="stat-card-reg">
          <div class="stat-val-reg">30+ Slopes</div>
          <div class="stat-lbl-reg">Stabilized Sites</div>
        </div>
        <div class="stat-card-reg" style="border-left-color: #1b365d;">
          <div class="stat-val-reg">${registryDisaster.length} Schemes</div>
          <div class="stat-lbl-reg">Registered Contracts</div>
        </div>
        <div class="stat-card-reg">
          <div class="stat-val-reg">NBRO &amp; WB</div>
          <div class="stat-lbl-reg">Disaster Mitigation</div>
        </div>
        <div class="stat-card-reg" style="border-left-color: #1b365d;">
          <div class="stat-val-reg">Railway Lines</div>
          <div class="stat-lbl-reg">Main &amp; Northern Line</div>
        </div>
      </div>

      <table class="reg-table" style="margin-bottom: 7px;">
        <thead>
          <tr>
            <th style="width: 24px; text-align: center;">#</th>
            <th>Project Title &amp; Engineering Scope</th>
            <th style="width: 175px;">Client / Employer</th>
            <th style="width: 125px;">Location / Province</th>
            <th style="width: 44px; text-align: center;">Year</th>
            <th style="width: 58px; text-align: center;">Status</th>
          </tr>
        </thead>
        <tbody>
          ${registryDisaster.map((p, idx) => `
            <tr>
              <td class="p-num" style="padding: 4.2px 7px;">${String(idx + 1).padStart(2, '0')}</td>
              <td style="padding: 4.2px 7px;"><div class="p-title">${p.name}</div></td>
              <td style="padding: 4.2px 7px;"><div class="p-client">${p.client}</div></td>
              <td style="padding: 4.2px 7px;"><div class="p-loc">${p.loc}</div></td>
              <td style="text-align: center; padding: 4.2px 7px;"><div class="p-yr">${p.yr}</div></td>
              <td style="text-align: center; padding: 4.2px 7px;"><span class="p-status">Completed</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <!-- Geotechnical & Rail Strip -->
      <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-left: 3.5px solid #1b365d; border-radius: 4px; padding: 6px 12px; display: flex; justify-content: space-between; align-items: center; font-size: 8.5px; color: #334155;">
        <div style="font-weight: 700; color: #0f172a;">Specialized Geotechnical &amp; Railway Capabilities:</div>
        <div>Drilled Soil Nailing &bull; Horizontal Subsurface Drains &bull; High-Speed Ballasted Track Renewal &bull; Emergency Rectification</div>
      </div>
    </div>
    ${renderFooter(18)}
  </div>

  <!-- ================= PAGE 19: QUALITY, ISO CERTIFICATIONS, CSR & PEOPLE ================= -->
  <div class="page">
    ${renderHeader('18', 'Quality Standards, CSR & People')}
    <div class="doc-content">
      <div class="sec-header-block">
        <div class="sec-kicker">Section 18.0 &bull; Quality, HSE &amp; Social Governance</div>
        <h2 class="sec-heading">Quality Management, HSE &amp; <span>Corporate Social Responsibility</span></h2>
      </div>

      <!-- 3 ISO Cards -->
      <div class="grid-3" style="gap: 10px; margin-bottom: 9px;">
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-top: 3px solid #b91c1c; border-radius: 3px; padding: 9px 11px;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
            <img src="${imgs.iso}" style="width: 28px; height: 36px; object-fit: cover; border: 1px solid #cbd5e1; border-radius: 2px;" alt="ISO" />
            <div>
              <div style="font-size: 12px; font-weight: 700; color: #0f172a;">ISO 9001:2015</div>
              <div style="font-size: 8px; font-weight: 700; color: #b91c1c; text-transform: uppercase;">Quality Management</div>
            </div>
          </div>
          <p style="font-size: 9px; color: #475569; line-height: 1.35; margin: 0;">Comprehensive QA/QC protocols covering raw material batch laboratory testing through to structural handover.</p>
        </div>

        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-top: 3px solid #166534; border-radius: 3px; padding: 9px 11px;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
            <img src="${imgs.iso}" style="width: 28px; height: 36px; object-fit: cover; border: 1px solid #cbd5e1; border-radius: 2px;" alt="ISO" />
            <div>
              <div style="font-size: 12px; font-weight: 700; color: #0f172a;">ISO 14001:2015</div>
              <div style="font-size: 8px; font-weight: 700; color: #166534; text-transform: uppercase;">Environmental (EMS)</div>
            </div>
          </div>
          <p style="font-size: 9px; color: #475569; line-height: 1.35; margin: 0;">Eco-friendly M-Sand production, dust suppression, water recycling, and strict biodiversity conservation across site camps.</p>
        </div>

        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-top: 3px solid #d97706; border-radius: 3px; padding: 9px 11px;">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
            <img src="${imgs.iso}" style="width: 28px; height: 36px; object-fit: cover; border: 1px solid #cbd5e1; border-radius: 2px;" alt="ISO" />
            <div>
              <div style="font-size: 12px; font-weight: 700; color: #0f172a;">ISO 45001:2018</div>
              <div style="font-size: 8px; font-weight: 700; color: #d97706; text-transform: uppercase;">Health &amp; Safety (HSE)</div>
            </div>
          </div>
          <p style="font-size: 9px; color: #475569; line-height: 1.35; margin: 0;">Strict 'Zero Harm' safety culture, mandatory certified PPE compliance, daily toolbox talks, and 24/7 site medical preparedness.</p>
        </div>
      </div>

      <!-- QA/QC Highlight Strip -->
      <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-left: 4px solid #166534; border-radius: 4px; padding: 8px 12px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 9px;">
        <div style="display: flex; gap: 18px; align-items: center;">
          <div>
            <div style="font-size: 13.5px; font-weight: 700; color: #166534;">100% Testing</div>
            <div style="font-size: 7.8px; color: #64748b; font-weight: 700; text-transform: uppercase;">QA/QC Verification</div>
          </div>
          <div>
            <div style="font-size: 13.5px; font-weight: 700; color: #1b365d;">Zero Harm</div>
            <div style="font-size: 7.8px; color: #64748b; font-weight: 700; text-transform: uppercase;">Safety Policy</div>
          </div>
          <div>
            <div style="font-size: 13.5px; font-weight: 700; color: #d97706;">In-House Lab</div>
            <div style="font-size: 7.8px; color: #64748b; font-weight: 700; text-transform: uppercase;">Material Control</div>
          </div>
        </div>
        <div style="font-size: 9.2px; color: #475569; text-align: right; max-width: 50%; line-height: 1.35;">
          Dedicated quality assurance engineers stationed across all batching plants, quarries, and highway construction sites.
        </div>
      </div>

      <!-- CSR Initiatives -->
      <div style="font-size: 9.5px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; border-left: 3px solid #b91c1c; padding-left: 6px;">
        Corporate Social Responsibility (CSR) &amp; Community Impact
      </div>
      <div class="grid-2" style="gap: 10px; margin-bottom: 9px;">
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; overflow: hidden; display: flex; flex-direction: column;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; height: 38mm; gap: 2px; background: #e2e8f0;">
            <img src="${imgs.csrEmp1}" style="width: 100%; height: 100%; object-fit: cover;" alt="CSR" />
            <img src="${imgs.csrEmp2}" style="width: 100%; height: 100%; object-fit: cover;" alt="CSR" />
          </div>
          <div style="padding: 7px 9px;">
            <div style="font-size: 8px; font-weight: 700; color: #b91c1c; text-transform: uppercase;">Employee Welfare &bull; Gratitude</div>
            <div style="font-size: 11px; font-weight: 700; color: #0f172a; margin-top: 1px;">Honoring Our Foundation: A Gift to Our Very First Employee</div>
            <p style="font-size: 9.2px; color: #475569; line-height: 1.38; margin-top: 2px;">
              Reflecting our deep gratitude and lifelong corporate family culture, RR Construction presented a special token of appreciation to our first employee &mdash; honoring the loyalty of those who laid our company's foundation.
            </p>
          </div>
        </div>

        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; overflow: hidden; display: flex; flex-direction: column;">
          <div style="height: 38mm; width: 100%; overflow: hidden;">
            <img src="${imgs.csrTemple}" style="width: 100%; height: 100%; object-fit: cover;" alt="Temple" />
          </div>
          <div style="padding: 7px 9px;">
            <div style="font-size: 8px; font-weight: 700; color: #1b365d; text-transform: uppercase;">Community Heritage &bull; Faith</div>
            <div style="font-size: 11px; font-weight: 700; color: #0f172a; margin-top: 1px;">Construction of Muddaragama Chethiyaramaya Temple</div>
            <p style="font-size: 9.2px; color: #475569; line-height: 1.38; margin-top: 2px;">
              Dedicating our engineering expertise and heavy material resources to uplift rural spiritual heritage through the complete structural construction of the Muddaragama Chethiyaramaya Temple.
            </p>
          </div>
        </div>
      </div>

      <!-- Training, People & Digital Transformation -->
      <div style="font-size: 9.5px; font-weight: 700; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; border-left: 3px solid #1b365d; padding-left: 6px;">
        People Development &amp; Digital Engineering Systems
      </div>
      <div class="grid-2" style="gap: 10px;">
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; overflow: hidden; display: flex; gap: 8px; padding: 6.5px 8px; align-items: center;">
          <img src="${imgs.trainAi}" style="width: 29mm; height: 19mm; object-fit: cover; border-radius: 2px; flex-shrink: 0;" alt="AI Training" />
          <div>
            <div style="font-size: 10.5px; font-weight: 700; color: #0f172a;">Coursera AI &amp; Professional Upskilling</div>
            <p style="font-size: 8.8px; color: #475569; line-height: 1.32; margin-top: 1px;">Empowering engineers and managers with global AI credentials for precision project execution, analytics, and automated telemetry.</p>
          </div>
        </div>

        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 3px; overflow: hidden; display: flex; gap: 8px; padding: 6.5px 8px; align-items: center;">
          <img src="${imgs.trainErp}" style="width: 29mm; height: 19mm; object-fit: cover; border-radius: 2px; flex-shrink: 0;" alt="ERP Training" />
          <div>
            <div style="font-size: 10.5px; font-weight: 700; color: #0f172a;">Proprietary Enterprise ERP System</div>
            <p style="font-size: 8.8px; color: #475569; line-height: 1.32; margin-top: 1px;">Custom-built enterprise software for live site progress tracking, plant machinery telemetry, supply chains, and material allocation.</p>
          </div>
        </div>
      </div>

      <!-- CSR & People Commitment Strip -->
      <div class="summary-strip">
        <span><strong>Workforce Strength:</strong> 2,000+ Direct Engineers, Technical Staff &amp; Skilled Artisans</span>
        <span><strong>Safety Commitment:</strong> 100% Insured Workforce &bull; Zero Harm Target</span>
      </div>
    </div>
    ${renderFooter(19)}
  </div>

  <!-- ================= PAGE 20: BACK COVER - CORPORATE NETWORK & CONTACT ================= -->
  <div class="page" style="padding: 12mm 16mm 12mm; display: flex; flex-direction: column; justify-content: space-between;">
    <!-- Top Corporate Banner -->
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #cbd5e1; padding-bottom: 8px;">
        <div style="display: flex; align-items: center; gap: 9px;">
          <img src="${imgs.logo}" style="height: 42px; width: auto;" alt="Logo" />
          <div>
            <div style="font-size: 19px; font-weight: 700; color: #b91c1c; font-family: 'Times New Roman', serif;">Construction (Pvt) Ltd</div>
            <div style="font-size: 8.5px; font-weight: 700; color: #0f172a; letter-spacing: 1px; text-transform: uppercase;">Engineering &bull; Procurement &bull; Construction</div>
          </div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 14px; font-weight: 700; color: #0f172a;">Engineering Sri Lanka's Tomorrow</div>
          <div style="font-size: 9px; color: #b91c1c; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">100% Sri Lankan Owned &bull; CIDA Grade CS2</div>
        </div>
      </div>

      <!-- Head Office Showcase & Contact Details -->
      <div class="grid-2" style="gap: 14px; margin-top: 12px; align-items: stretch;">
        <div style="border: 1px solid #cbd5e1; border-radius: 4px; overflow: hidden; position: relative; min-height: 58mm;">
          <img src="${imgs.headOffice}" style="width: 100%; height: 100%; object-fit: cover;" alt="Head Office" />
          <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(15,23,42,0.85); color: #fff; padding: 7px 11px;">
            <div style="font-size: 8px; font-weight: 700; color: #f87171; text-transform: uppercase;">Corporate Headquarters</div>
            <div style="font-size: 12px; font-weight: 700; color: #ffffff;">Colombo 09 &bull; Sri Lanka</div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; justify-content: space-between;">
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-left: 3.5px solid #b91c1c; border-radius: 4px; padding: 11px 13px;">
            <div style="font-size: 11.5px; font-weight: 700; color: #b91c1c; margin-bottom: 2px;">Main Corporate Office</div>
            <div style="font-size: 9.8px; color: #1e293b; line-height: 1.45;">No. 865, Dr. Danister de Silva Mawatha, Baseline Road, Orugodawatta, Colombo 09, Sri Lanka.</div>
            <div style="font-size: 9.8px; color: #475569; margin-top: 4px;"><strong style="color: #0f172a;">Tel:</strong> +94 11-2433427 &bull; <strong style="color: #0f172a;">Fax:</strong> +94 11-2430161</div>
            <div style="font-size: 9.8px; color: #475569;"><strong style="color: #0f172a;">Email:</strong> general@rrconstruction.lk &bull; <strong style="color: #0f172a;">Web:</strong> www.rrconstruction.lk</div>
            <div style="font-size: 9.2px; color: #475569; margin-top: 2px;"><strong style="color: #0f172a;">Facebook:</strong> RR Construction (Pvt) Ltd</div>
          </div>

          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-left: 3.5px solid #1b365d; border-radius: 4px; padding: 9px 13px; margin-top: 8px;">
            <div style="font-size: 11px; font-weight: 700; color: #0f172a;">Central Mechanical Workshop</div>
            <div style="font-size: 9.2px; color: #475569; margin-top: 1px;">No. 626C, Samurdhi Mw, Cheenagahawela, Heiyanthuduwa, Sapugaskanda.</div>
            <div style="font-size: 9.2px; color: #b91c1c; font-weight: 600; margin-top: 1px;">Tel: +94 11-2401201 &bull; Email: rrcworkshop@sltnet.lk</div>
          </div>
        </div>
      </div>

      <!-- Island-Wide Yards Table -->
      <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 4px; padding: 11px 13px; margin-top: 10px;">
        <div style="font-size: 10.5px; font-weight: 700; color: #b91c1c; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px;">
          Island-Wide Operational Yards &amp; Production Facilities Network
        </div>
        <div class="grid-3" style="gap: 8px; font-size: 8.8px;">
          <div>
            <div style="font-weight: 700; color: #0f172a;">Central Logistics Warehouse</div>
            <div style="color: #475569;">No. 150, Keragala Estate, Keragala, Henegama.</div>
          </div>
          <div>
            <div style="font-weight: 700; color: #0f172a;">Heavy Machine Yard</div>
            <div style="color: #475569;">No. 504/L, Gorakagaswaththa, Biyagama.</div>
          </div>
          <div>
            <div style="font-weight: 700; color: #0f172a;">Piling Engineering Yard</div>
            <div style="color: #475569;">No. 301, Samurdhi Mawatha, Heiyanthuduwa.</div>
          </div>
          <div>
            <div style="font-weight: 700; color: #0f172a;">Asphalt Batching Plant</div>
            <div style="color: #475569;">Yakawewa Plant &bull; Medawachchiya (NCP).</div>
          </div>
          <div>
            <div style="font-weight: 700; color: #0f172a;">Crusher &amp; M-Sand Facilities</div>
            <div style="color: #475569;">Thudugala (Kalutara), Omanthai &bull; Veerapuram.</div>
          </div>
          <div>
            <div style="font-weight: 700; color: #0f172a;">Ready-Mix Concrete Network</div>
            <div style="color: #475569;">Ampara, Jaffna, Kalutara, Mullaitivu, Kurunegala, Matara.</div>
          </div>
        </div>
      </div>

      <!-- Strategic Corporate Information Strip -->
      <div style="margin-top: 8px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 4px; padding: 7px 12px; font-size: 8.8px; color: #475569; display: flex; justify-content: space-between;">
        <span><strong style="color: #0f172a;">Primary Bankers:</strong> HNB &bull; Seylan &bull; Sampath &bull; Cargills &bull; Pan Asia &bull; NTB &bull; NDB</span>
        <span><strong style="color: #0f172a;">Company Secretary:</strong> Corporate Advisory Services (Pvt) Ltd</span>
        <span><strong style="color: #0f172a;">Auditors:</strong> Charted Accountants</span>
      </div>
    </div>

    <!-- Executive Quote & Footnote -->
    <div>
      <div style="text-align: center; padding: 11px 16px; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 4px; margin-bottom: 10px;">
        <div style="font-size: 11px; font-weight: 600; color: #0f172a; font-style: italic;">
          "By aligning our 2,000+ workforce, 1,000+ machinery fleet, and ISO-certified quality systems, we continue to engineer resilient national infrastructure that powers Sri Lanka's economic future."
        </div>
      </div>

      <div style="border-top: 1px solid #cbd5e1; padding-top: 6px; display: flex; justify-content: space-between; align-items: center; font-size: 8.2px; color: #64748b;">
        <span>&copy; ${new Date().getFullYear()} RR Construction (Pvt) Ltd. All Rights Reserved. &bull; Registered in Sri Lanka: PV 11346</span>
        <span>PASSION FOR ENGINEERING EXCELLENCE</span>
        <span style="font-weight: 700; color: #0f172a;">Page 20 of 20</span>
      </div>
    </div>
  </div>

</body>
</html>`;

(async () => {
  console.log('Writing temporary HTML file...');
  const tempHtmlPath = path.join(__dirname, 'souvenir_temp.html');
  fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');

  console.log('Launching browser to render PDF...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files']
  });
  const page = await browser.newPage();
  const fileUrl = 'file:///' + tempHtmlPath.replace(/\\/g, '/');
  await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 2000));

  const pages = await page.$$('.page');
  console.log(`Total rendered pages: ${pages.length}`);
  const capturePages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  for (const pNum of capturePages) {
    if (pages.length >= pNum) {
      await pages[pNum - 1].screenshot({ path: `C:/Users/hesha/.gemini/antigravity/brain/9fc826a5-7a53-46d9-a5da-0f16317973aa/page${pNum}-office-look.png` });
      console.log(`Saved page${pNum}-office-look.png`);
    }
  }

  const outPath1 = path.join(__dirname, 'public', 'RR-Construction-Corporate-Souvenir.pdf');
  const outPath2 = path.join(__dirname, '..', 'RR-Construction-Corporate-Souvenir.pdf');

  await page.pdf({
    path: outPath1,
    format: 'A4',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  fs.copyFileSync(outPath1, outPath2);
  await browser.close();
  if (fs.existsSync(tempHtmlPath)) fs.unlinkSync(tempHtmlPath);
  console.log('PDF generated successfully at:', outPath1);
  console.log('PDF also copied to:', outPath2);
  const desktopPdf = 'C:/Users/hesha/Desktop/RR-Construction-Corporate-Souvenir.pdf';
  fs.copyFileSync(outPath1, desktopPdf);
  console.log('PDF also copied to Desktop:', desktopPdf);

  const artifactPdf = 'C:/Users/hesha/.gemini/antigravity/brain/9fc826a5-7a53-46d9-a5da-0f16317973aa/RR-Construction-Corporate-Souvenir.pdf';
  fs.copyFileSync(outPath1, artifactPdf);
  console.log('PDF also copied to Artifacts:', artifactPdf);

})();
