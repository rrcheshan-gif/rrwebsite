const https = require('https');
https.get('https://icc-construct.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const matches = data.match(/family=([^&"'>]+)/g);
    console.log(matches);
  });
});
