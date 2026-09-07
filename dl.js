const https = require('https');
const fs = require('fs');

function download(url, dest) {
  const file = fs.createWriteStream(dest);
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, function(response) {
    if (response.statusCode === 301 || response.statusCode === 302) {
      download(response.headers.location, dest);
    } else {
      response.pipe(file);
      file.on('finish', function() {
        file.close();
      });
    }
  }).on('error', function(err) {
    fs.unlink(dest);
  });
}

download('https://upload.wikimedia.org/wikipedia/en/8/82/NWSDB_logo.png', 'public/images/clients/nwsdb.png');
download('https://upload.wikimedia.org/wikipedia/en/6/69/IRCON_International_logo.svg', 'public/images/clients/ircon.svg');
download('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Emblem_of_Sri_Lanka.svg/100px-Emblem_of_Sri_Lanka.svg.png', 'public/images/clients/sl-emblem.png');
