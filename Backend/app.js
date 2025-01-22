// backend/server.js
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const { spawn } = require('child_process');

const app = express();

const executePython = async (script, args) => {
  const arguments = args.map(arg => arg.toString());

  const py = spawn("python", [script, ...arguments]);

  const result = await new Promise((resolve, reject) => {
      let output='';

      // Get output from python script
      py.stdout.on('data', (data) => {
          output += data.toString();
      });

      // Handle erros
      py.stderr.on("data", (data) => {
          console.error(`[python] Error occured: ${data}`);
          reject(`Error occured in ${script}`);
      });

      py.on("exit", (code) => {
          console.log(`Child process exited with code ${code}`);
          resolve(output);
      });
  });

  return result;
}

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

app.get('/api/runpy', async (req, res) => {
  try {
      const result = await executePython('python/script.py', [10, 5]);

      res.json({ result: result });
  } catch (error) {
      res.status(500).json({ error: error });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
