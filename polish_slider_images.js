const sharp = require('sharp');
const fs = require('fs');

const images = [
    'public/images/home/SLIDE_01_NOTEXT.jpg',
    'public/images/home/slider/polished/road.jpg',
    'public/images/home/bridge_mahanama.jpeg',
    'public/images/home/slider/polished/hatton.jpg',
    'public/images/home/slider/polished/omanthai.jpg',
    'public/images/home/slider/polished/machinery.jpg'
];

async function processImages() {
    for (const imgPath of images) {
        if (!fs.existsSync(imgPath)) {
            console.log("Not found:", imgPath);
            continue;
        }
        
        const ext = imgPath.substring(imgPath.lastIndexOf('.'));
        const outPath = imgPath.substring(0, imgPath.lastIndexOf('.')) + '-enhanced' + ext;
        
        try {
            await sharp(imgPath)
                .modulate({
                    brightness: 1.05,
                    saturation: 1.15
                })
                .sharpen({
                    sigma: 1.2,
                    m1: 1.0,
                    m2: 0.8,
                    x1: 2,
                    y2: 10,
                    y3: 20
                })
                .jpeg({ quality: 90 })
                .toFile(outPath);
            console.log('Polished:', outPath);
        } catch(err) {
            console.error('Error on', imgPath, err);
        }
    }
}

processImages();
