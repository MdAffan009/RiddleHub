const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Parse JSON bodies (POST requests)
app.use(express.json());

// Sample API route
app.get('/', (req, res) => {
  res.send('Hello Robin');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
