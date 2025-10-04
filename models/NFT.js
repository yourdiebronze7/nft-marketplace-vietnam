const mongoose = require('mongoose');

const nftSchema = new mongoose.Schema({
  title: { type: String, required: true },
  creator: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: Number, required: true },
  owner: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const NFT = mongoose.model('NFT', nftSchema);

module.exports = NFT;
