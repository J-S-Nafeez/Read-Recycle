// Importing dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Create an Express application
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// MongoDB model (Lost & Found schema)
const lostItemSchema = new mongoose.Schema({
  type: { type: String, required: true },
  itemName: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  contact: { type: String, required: true }
});

const LostItem = mongoose.model('LostItem', lostItemSchema);

// Routes for Lost & Found items
// Get all lost and found items
app.get('/api/lostitems', async (req, res) => {
  try {
    const items = await LostItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Post a new lost and found item
app.post('/api/lostitems', async (req, res) => {
  try {
    const newItem = new LostItem(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Delete a lost and found item
app.delete('/api/lostitems/:id', async (req, res) => {
  try {
    const item = await LostItem.findById(req.params.id);
    if (!item) {
      return res.status(404).send('Item not found');
    }
    await item.remove();
    res.json({ msg: 'Item removed' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

// Define the port and start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
