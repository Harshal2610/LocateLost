// backend/server.js
const express = require('express');
const cors = require('cors');
const multer = require('multer')

const app = express();

const multerStorage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,"images")
  },
  filename:(req,file,cb)=>{
    // filename: user-userid-timestamp
    const ext = file.mimetype.split('/')[1];
    const orgName = file.originalname.split('.')[0]
    cb(null,`${orgName}-${Date.now()}.${ext}`)
  }
})

const multerFilter = (req,file,cb)=>{
  if (file.mimetype.startsWith('image')){
    cb(null,true)
  }else{
    cb(new Error("not a image"),false)
  }
}

const upload = multer({
  storage:multerStorage,
  fileFilter:multerFilter
});

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Sample GET API route
app.get('/api/data', (req, res) => {
  res.json({ message: "Hello Harshal from Express!" });
});

app.get('/api/data/user', (req, res) => {
    res.status(200).json({
        status:"success",
        messaage:"Harshal sends the data from the backend"
    })
  });

// Middleware to serve static files (for serving uploaded images)
app.use('/api/uploads', express.static('uploads'));

app.post('/api/uploads',upload.single('photo'),(req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // Successfully uploaded image
  res.status(200).json({
    message: 'File uploaded successfully!',
    file: req.file,
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
