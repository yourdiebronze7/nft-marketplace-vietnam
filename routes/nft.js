const express = require('express');
const NFT = require('../models/NFT');

const router = express.Router();

// Lấy danh sách NFT
router.get('/', async (req, res) => {
  try {
    const nfts = await NFT.find();
    res.json(nfts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Tạo NFT mới
router.post('/', async (req, res) => {
  const nft = new NFT(req.body);
  try {
    const newNFT = await nft.save();
    res.status(201).json(newNFT);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
