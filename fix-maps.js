const fs = require('fs');
const file = 'src/app/projects/data.js';
let content = fs.readFileSync(file, 'utf8');

const mapQueries = {
  'project-mod-landslide-10f': 'Kegalle, Sri Lanka',
  'project-rda-kurikadduvan-jetty': 'Kurikadduvan Jetty, Jaffna, Sri Lanka',
  'project-mod-landslide-10j': 'Kegalle, Sri Lanka',
  'project-rda-colombo-galle': 'Galle Road, Bentota, Sri Lanka',
  'project-1': 'Batticaloa, Eastern Province, Sri Lanka',
  'project-rda-northern-province-lot03': 'Kilinochchi, Northern Province, Sri Lanka',
  'project-3': 'Bentota, Sri Lanka',
  'project-4': 'Deniyaya, Sri Lanka',
  'project-5': 'Deniyaya, Sri Lanka',
  'project-6': 'Horawela Pelawatta Pitigala Road, Sri Lanka',
  'project-7': 'Elpitiya, Sri Lanka',
  'project-8': 'Chavakachcheri, Jaffna, Sri Lanka',
  'project-9': 'Kamburupitiya, Matara, Sri Lanka',
  'project-14': 'Kegalle, Sri Lanka',
  'project-16': 'Galle Road, Bentota, Sri Lanka',
  'project-17': 'Negombo Lagoon, Negombo, Sri Lanka',
  'project-18': 'Paranthan Mullaitivu Road, Sri Lanka',
  'project-20': 'Point Pedro Road, Jaffna, Sri Lanka',
  'project-21': 'Mullaitivu, Sri Lanka',
  'project-22': 'Walasmulla, Sri Lanka',
  'project-23': 'Maho Railway Station, Sri Lanka',
  'project-28': 'Kilinochchi, Northern Province, Sri Lanka',
  'project-30': 'Ratnapura, Sri Lanka',
  'project-31': 'Palindanuwara, Kalutara, Sri Lanka',
  'project-33': 'Kalutara, Sri Lanka',
  'project-34': 'NIFS Kandy, Sri Lanka',
  'project-35': 'Nurses Training School, Kandy, Sri Lanka',
  'project-36': 'Anuradhapura Railway Station, Sri Lanka',
  'project-37': 'Ratnapura, Sri Lanka',
  'project-38': 'Hatton Maskeliya Road, Sri Lanka',
  'project-39': 'Kadugannawa, Sri Lanka',
  'project-42': 'Kilinochchi, Sri Lanka',
  'project-43': 'Kurunegala, Sri Lanka',
  'project-44': 'Matara, Sri Lanka',
  'project-45': 'Katana, Sri Lanka',
  'project-46': 'Lellama, Negombo, Sri Lanka',
  'project-48': 'Central Expressway, Mirigama, Sri Lanka',
  'project-49': 'Badulla, Sri Lanka',
  'project-55': 'Udappuwa, Sri Lanka',
  'project-58': 'Southern Expressway, Beliatta, Sri Lanka',
  'project-59': 'Ratnapura, Sri Lanka',
  'project-60': 'Southern Province, Sri Lanka',
  'project-61': 'Filadhoo, Haa Alif Atoll, Maldives',
  'project-63': 'Hambantota, Sri Lanka',
  'project-67': 'Hulhudhoo, Seenu Atoll, Maldives',
  'project-70': 'Kirimetiya, Sri Lanka',
  'project-77': 'Havelock City, Colombo, Sri Lanka',
  'project-84': 'Hirana, Panadura, Sri Lanka',
  'project-92': 'Nuwara Eliya, Sri Lanka',
  'project-93': 'Kegalle, Sri Lanka',
  'project-94': 'Ratnapura, Sri Lanka',
  'project-ldpp-package-02': 'Badulla, Sri Lanka',
  'project-104': 'Embilipitiya, Sri Lanka',
  'project-105': 'Negombo Lagoon, Negombo, Sri Lanka',
  'project-colombo-port-harbour-infra': 'Port of Colombo, Sri Lanka',
  'project-29': 'Central Expressway, Pothuhera, Sri Lanka'
};

for (const [id, query] of Object.entries(mapQueries)) {
  const idPattern = new RegExp(`(id:\\s*['"\`]${id.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}['"\`])`);
  const match = content.match(idPattern);
  if (match) {
    const insertPos = match.index + match[0].length;
    // Check if mapQuery already exists nearby
    const nearby = content.substring(insertPos, insertPos + 200);
    if (!nearby.includes('mapQuery')) {
      content = content.substring(0, insertPos) + `,\n    mapQuery: "${query}"` + content.substring(insertPos);
    }
  }
}

fs.writeFileSync(file, content, 'utf8');
console.log('Added mapQuery to projects');
