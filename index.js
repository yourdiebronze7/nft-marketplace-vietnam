const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Successfully connected to the database');
})
.catch(err => {
  console.error('Error connecting to the database:', err);
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Vietnam NFT Marketplace!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});