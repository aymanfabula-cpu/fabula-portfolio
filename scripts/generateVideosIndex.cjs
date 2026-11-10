const fs = require('fs');
const path = require('path');

const videosDir = path.join(__dirname, '../public/videos');
const metadataFile = path.join(videosDir, 'metadata.json');
const outputFile = path.join(__dirname, '../src/data/videos.json');

const videoExtensions = ['.mp4', '.webm', '.mov'];

function generateIndex() {
  console.log('Scanning videos in:', videosDir);
  
  if (!fs.existsSync(videosDir)) {
    console.error('Videos directory not found!');
    process.exit(1);
  }

  // 1. Load current metadata if it exists
  let metadata = [];
  if (fs.existsSync(metadataFile)) {
    try {
      metadata = JSON.parse(fs.readFileSync(metadataFile, 'utf8'));
    } catch (e) {
      console.error('Error parsing metadata.json:', e.message);
    }
  }

  // 2. Scan actual files on disk
  const filesOnDisk = fs.readdirSync(videosDir).filter(file => 
    videoExtensions.includes(path.extname(file).toLowerCase())
  );

  // 3. Sync metadata with disk
  // Keep only entries for files that actually exist
  let syncedMetadata = metadata.filter(m => filesOnDisk.includes(m.filename));

  // Add new files that aren't in metadata yet
  filesOnDisk.forEach(file => {
    if (!syncedMetadata.find(m => m.filename === file)) {
      const nameWithoutExt = path.parse(file).name;
      syncedMetadata.push({
        filename: file,
        title: nameWithoutExt.replace(/[_-]/g, ' '),
        category: 'Branding',
        project: 'Other',
        views: '',
        order: syncedMetadata.length + 1
      });
    }
  });

  // 4. Sort synced metadata by order to keep it clean
  syncedMetadata.sort((a, b) => (a.order || 999) - (b.order || 999));

  // 5. Update the metadata.json file (Auto-sync)
  fs.writeFileSync(metadataFile, JSON.stringify(syncedMetadata, null, 2));
  console.log('Synchronized metadata.json with files on disk.');

  // 6. Build the final videos.json for the app
  const finalVideos = syncedMetadata.map((m, index) => ({
    id: (index + 1).toString(),
    filename: m.filename,
    src: `videos/${m.filename}`,
    title: m.title,
    category: m.category,
    project: m.project || 'General',
    views: m.views || '',
    order: m.order || (index + 1),
    duration: m.duration || '0:00'
  }));

  fs.writeFileSync(outputFile, JSON.stringify(finalVideos, null, 2));
  console.log(`Generated ${finalVideos.length} video entries in ${outputFile}`);
}

generateIndex();
