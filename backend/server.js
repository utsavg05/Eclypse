import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic Test Route
app.get('/', (req, res) => {
  res.send('Eclypse backend is running!');
});

// Example POST endpoint (e.g., to simulate saving address)
app.post('/api/address', (req, res) => {
//   console.log('Address data received:', req.body);
  res.json({ message: 'Address saved successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
