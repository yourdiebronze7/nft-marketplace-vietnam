const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const nftRoutes = require('./routes/nft');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to the database successfully');
}).catch(err => {
  console.error('Database connection error:', err);
});

app.use(express.json());
app.use('/api/nfts', nftRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});