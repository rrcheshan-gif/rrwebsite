const fs = require("fs");
const buf = fs.readFileSync("public/videos/home-slider.mp4");

// Search ALL boxes recursively - look for tkhd (track header) which reliably holds duration
// tkhd = 0x746B6864
let results = [];
for (let i = 0; i < buf.length - 20; i++) {
  const tag = buf.slice(i, i+4).toString("ascii");
  if (tag === "tkhd") {
    const version = buf[i+4];
    let timescale_offset = version === 0 ? i+20 : i+32;
    let dur_offset = version === 0 ? i+20 : i+32; // tkhd has no timescale, skip
    // tkhd version 0: creation_time(4), modification_time(4), track_id(4), reserved(4), duration(4)
    // = i+4+4 (version+flags) + 4 + 4 + 4 + 4 + 4 = i+28
    const duration_tkhd = version === 0 ? buf.readUInt32BE(i+20) : Number(buf.readBigUInt64BE(i+28));
    results.push({ tag: "tkhd", offset: i, version, duration_tkhd });
  }
  if (tag === "mdhd") {
    // mdhd version 0: create(4), modify(4), timescale(4), duration(4)
    // = after version+flags (4 bytes) = i+4+4+4+4 = i+16 for timescale, i+20 for duration
    const version = buf[i+4];
    const timescale = version === 0 ? buf.readUInt32BE(i+12) : buf.readUInt32BE(i+20);
    const duration  = version === 0 ? buf.readUInt32BE(i+16) : Number(buf.readBigUInt64BE(i+24));
    if (timescale > 0) {
      results.push({ tag: "mdhd", offset: i, version, timescale, duration, seconds: (duration/timescale).toFixed(2) });
    }
  }
}
results.forEach(r => console.log(JSON.stringify(r)));
