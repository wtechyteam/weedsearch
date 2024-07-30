const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1/WeedSearch')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Import routes
const signupRoute = require('./api/signup');
const loginRoute = require('./api/login'); // Add this line
app.use('/api', signupRoute);
app.use('/api', loginRoute); // Add this line

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
