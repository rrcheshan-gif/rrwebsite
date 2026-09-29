const https = require('https');
https.get('https://maps.app.goo.gl/SJuo4o3toDg55ckS9', (res) => {
    console.log(res.headers.location);
});
