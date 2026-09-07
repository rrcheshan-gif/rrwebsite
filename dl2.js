const https = require('https');
const fs = require('fs');

function download(url, dest) {
  const file = fs.createWriteStream(dest);
  https.get(url, function(response) {
    if (response.statusCode === 301 || response.statusCode === 302) {
      download(response.headers.location, dest);
    } else {
      response.pipe(file);
    }
  });
}

download('https://icon.horse/icon/rda.gov.lk', 'public/images/clients/rda.png');
download('https://icon.horse/icon/waterboard.lk', 'public/images/clients/nwsdb.png');
download('https://icon.horse/icon/uda.gov.lk', 'public/images/clients/uda.png');
download('https://icon.horse/icon/irrigationmin.gov.lk', 'public/images/clients/irrigation.png');
download('https://icon.horse/icon/ircon.org', 'public/images/clients/ircon.png');
