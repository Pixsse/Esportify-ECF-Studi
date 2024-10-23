const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/ma_base', { useNewUrlParser: true, useUnifiedTopology: true });

const Item = mongoose.model('Item', new mongoose.Schema({
  name: String
}));

app.get('/api/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
