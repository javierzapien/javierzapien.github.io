const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

// Reads CLOUDINARY_URL from environment automatically
const imgDir = path.join(__dirname, 'img');
const files = fs.readdirSync(imgDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

console.log(`Uploading ${files.length} files to Cloudinary...\n`);

const urls = {};

async function uploadAll() {
  for (const file of files) {
    const filePath = path.join(imgDir, file);
    const publicId = 'portfolio/' + path.parse(file).name;
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        public_id: publicId,
        overwrite: true,
        resource_type: 'image',
      });
      urls[file] = result.secure_url;
      console.log(`✓ ${file}`);
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
    }
  }

  fs.writeFileSync('cloudinary-urls.json', JSON.stringify(urls, null, 2));
  console.log('\nDone! URLs saved to cloudinary-urls.json');
}

uploadAll();
