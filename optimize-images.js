import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const texturesDir = 'public/textures';

// Helper to recursively find png files
function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = `${dir}/${file}`;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      if (file.endsWith('.png')) {
        files.push(name);
      }
    }
  }
  return files;
}

const filesToOptimize = getFiles(texturesDir);

console.log(`Found ${filesToOptimize.length} PNG files to optimize...`);

async function optimize() {
  for (const file of filesToOptimize) {
    const dir = path.dirname(file);
    const ext = path.extname(file);
    const name = path.basename(file, ext);
    const outputPath = path.join(dir, `${name}.webp`);

    try {
      const info = await sharp(file)
        .webp({ quality: 80 }) // 80% quality is usually indistinguishable but much smaller
        .toFile(outputPath);
      
      console.log(`Optimized: ${file} -> ${outputPath}`);
      console.log(`  Old size: ${(fs.statSync(file).size / 1024).toFixed(2)} KB`);
      console.log(`  New size: ${(info.size / 1024).toFixed(2)} KB`);
      
    } catch (err) {
      console.error(`Error converting ${file}:`, err);
    }
  }
}

optimize();

