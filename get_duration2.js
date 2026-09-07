const fs = require('fs');
const buf = fs.readFileSync('public/videos/home-slider.mp4');

// Search for mvhd by scanning buffer
for (let i = 0; i < buf.length - 20; i++) {
  if (buf[i]===0x6D && buf[i+1]===0x76 && buf[i+2]===0x68 && buf[i+3]===0x64) {
    const version = buf[i+4];
    let timescale, duration;
    if (version === 0) {
      timescale = buf.readUInt32BE(i + 12);
      duration  = buf.readUInt32BE(i + 16);
    } else {
      timescale = buf.readUInt32BE(i + 20);
      // read as two 32bit for large duration
      const hi = buf.readUInt32BE(i + 24);
      const lo = buf.readUInt32BE(i + 28);
      duration = hi * 0x100000000 + lo;
    }
    console.log(`mvhd found at offset ${i}: version=${version}, timescale=${timescale}, duration=${duration}`);
    if (timescale > 0 && duration > 0) {
      console.log(`=> Video Duration: ${(duration / timescale).toFixed(2)} seconds`);
    }
  }
}
