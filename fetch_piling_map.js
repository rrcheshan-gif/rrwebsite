const https = require('https');
https.get('https://maps.app.goo.gl/TudewBTxFP1fVxA47', (res) => {
    console.log(res.headers.location);
});
