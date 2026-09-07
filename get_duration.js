const fs = require('fs');

// Read video file and find duration from MP4 metadata
const buf = fs.readFileSync('public/videos/home-slider.mp4');

// Find mvhd atom which contains duration
// MP4 mvhd box: 4 bytes size, 4 bytes "mvhd", 1 byte version, ...
// version 0: 4 bytes timescale, 4 bytes duration
// version 1: 4 bytes timescale, 8 bytes duration
let i = 0;
let found = false;
while (i < buf.length - 8) {
  if (buf[i]===0x6D && buf[i+1]===0x76 && buf[i+2]===0x68 && buf[i+3]===0x64) { // 'mvhd'
    const version = buf[i+4];
    let timescale, duration;
    if (version === 0) {
      timescale = buf.readUInt32BE(i+12);
      duration  = buf.readUInt32BE(i+16);
    } else {
      timescale = buf.readUInt32BE(i+20);
      duration  = Number(buf.readBigUInt64BE(i+24));
    }
    console.log(`Duration: ${(duration / timescale).toFixed(2)} seconds`);
    found = true;
    break;
  }
  i++;
}
if (!found) console.log("mvhd not found");
