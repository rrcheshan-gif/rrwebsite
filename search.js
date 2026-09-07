const https = require('https');
https.get('https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/png/ircon.png', (res) => {
    console.log(res.statusCode);
});
