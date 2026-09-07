const sharp = require('sharp');
sharp('public/images/IMAGES/LDPP/DJI_0087.DNG', { failOn: 'none' })
  .jpeg()
  .toFile('public/images/IMAGES/LDPP/DJI_0087.jpg')
  .then(info => console.log('Success:', info))
  .catch(err => console.error('Error:', err));
