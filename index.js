const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

const port = process.env.PORT || 8080;

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

// Work endpoint
app.get('/work', (req, res) => {
  res.status(200).send('Work in progress...');
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', uptime: process.uptime() });
});

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start the server
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
  console.log(`🌐 Access it locally: http://localhost:${port}`);
});
