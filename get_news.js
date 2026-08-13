const https = require('https');
const options = {
  hostname: 'www.news.lk',
  path: '/current-affairs/construction-of-vadduvakal-bridge-mullaitivu-commences-under-the-patronage-of-the-president',
  method: 'GET',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
};
const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    while ((match = imgRegex.exec(data)) !== null) {
      console.log(match[1]);
    }
  });
});
req.on('error', (e) => {
  console.error(e);
});
req.end();
