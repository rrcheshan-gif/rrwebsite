const sizeOf = require('image-size');
const dimensions = sizeOf('public/images/home/rathnapura.jpg');
console.log(dimensions.width, dimensions.height);
