const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Kết nối đến cơ sở dữ liệu MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Kết nối tới cơ sở dữ liệu thành công');
}).catch(err => {
  console.error('Lỗi kết nối tới cơ sở dữ liệu:', err);
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Chợ NFT Việt Nam!');
});

app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});
