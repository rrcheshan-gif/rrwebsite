const sharp = require('sharp');
const fs = require('fs');

async function processImage() {
    const inputPath = 'C:/Users/hesha/.gemini/antigravity/brain/9fc826a5-7a53-46d9-a5da-0f16317973aa/.user_uploaded/media_1788675916040.jpg';
    const outputPath = 'public/images/home/slider-maritime-gandara.jpeg';
    
    try {
        await sharp(inputPath)
            .modulate({
                brightness: 1.05, // slightly brighter
                saturation: 1.25, // increase vibrancy significantly (looks good for blue water/green trees)
            })
            .sharpen({
                sigma: 1.5,
                m1: 1.2,
                m2: 0.9,
                x1: 2,
                y2: 10,
                y3: 20
            })
            .jpeg({ quality: 90 })
            .toFile(outputPath);
            
        console.log('Image polished and saved!');
    } catch(err) {
        console.error('Error polishing image:', err);
    }
}

processImage();
