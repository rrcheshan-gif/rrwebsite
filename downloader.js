const fs = require('fs');
const path = require('path');
const https = require('https');

const dataPath = path.join(__dirname, 'src/app/projects/data.js');
const dataContent = fs.readFileSync(dataPath, 'utf-8');

// Regex to find all images starting with 'images/' and ending with '.jpg' or '.png'
const regex = /['"](images\/.*?\.jpg)['"]/gi;
let imagesToDownload = new Set();
let match;

while ((match = regex.exec(dataContent)) !== null) {
  imagesToDownload.add(match[1]);
}

const baseUrl = 'https://rrconstruction.lk/';
const publicImagesDir = path.join(__dirname, 'public');

const downloadImage = (urlPath) => {
  return new Promise((resolve) => {
    const fullUrl = baseUrl + urlPath;
    const destPath = path.join(publicImagesDir, urlPath);
    const destDir = path.dirname(destPath);

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    
    if (fs.existsSync(destPath)) {
      return resolve();
    }

    const file = fs.createWriteStream(destPath);
    https.get(fullUrl, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${urlPath}`);
          resolve();
        });
      } else {
        file.close();
        fs.unlink(destPath, () => {});
        console.error(`Failed to download (Status ${response.statusCode}): ${fullUrl}`);
        resolve();
      }
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      console.error(`Error downloading ${fullUrl}:`, err.message);
      resolve();
    });
  });
};

async function start() {
  const imagesArray = Array.from(imagesToDownload);
  console.log(`Found ${imagesArray.length} images to download...`);
  
  const batchSize = 10;
  for (let i = 0; i < imagesArray.length; i += batchSize) {
    const batch = imagesArray.slice(i, i + batchSize);
    await Promise.all(batch.map(img => downloadImage(img)));
  }
  console.log("All downloads completed.");
}

start();
