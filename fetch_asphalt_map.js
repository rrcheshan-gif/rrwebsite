const https = require('https');
https.get('https://maps.app.goo.gl/buuRnsuKfjUGNF6aA', (res) => {
    console.log(res.headers.location);
});
