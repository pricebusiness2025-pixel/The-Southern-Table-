const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'images'),
    filename: (req, file, cb) => cb(null, file.originalname)
});
const upload = multer({ storage });

app.use(express.static('.'));
app.use(express.json());

// Upload multiple images
app.post('/upload', upload.array('photos'), (req, res) => {
    updateImagesList();
    res.send('Uploaded successfully!');
});

// Delete image
app.post('/delete', (req, res) => {
    const filename = req.body.filename;
    fs.unlink(path.join('images', filename), err => {
        if (err) return res.status(500).send(err);
        updateImagesList();
        res.send('Deleted successfully!');
    });
});

// Generate images_list.js
function updateImagesList() {
    const files = fs.readdirSync('images').filter(f => fs.lstatSync(path.join('images', f)).isFile());
    let content = 'const images = [\n';
    files.forEach(f => content += ` "${f}",\n`);
    content += '];';
    fs.writeFileSync('images_list.js', content);
}

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
