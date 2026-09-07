const sharp = require('sharp');
const fs = require('fs');

async function processImage() {
    const inputPath = 'public/images/page-headers/veerapuram-plant-header.jpg';
    const outputPath = 'public/images/home/veerapuram-plant-enhanced.jpg';
    
    try {
        await sharp(inputPath)
            .resize(1920, null, {
                kernel: sharp.kernel.lanczos3,
                withoutEnlargement: true
            })
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
            .jpeg({ quality: 95 })
            .toFile(outputPath);
            
        console.log('Veerapuram image polished.');
        
        const pagePath = 'src/app/page.tsx';
        let content = fs.readFileSync(pagePath, 'utf8');
        
        content = content.replace("img: '/images/home/slider/polished/omanthai-enhanced.jpg'", "img: '/images/home/veerapuram-plant-enhanced.jpg'");
        
        fs.writeFileSync(pagePath, content, 'utf8');
        console.log('Updated slider in page.tsx');
        
    } catch(err) {
        console.error(err);
    }
}
processImage();
