const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// MongoDB URI
const mongoURI = 'mongodb+srv://RRR:RRR123@cluster0.vrg22.mongodb.net/RRR';

// MongoDB connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  regNo: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  year: { type: String, required: true },
});

// User Model
const User = mongoose.model('User', userSchema);

// API Route to register user
app.post('/register', async (req, res) => {
  const { name, regNo, phone, year } = req.body;

  try {
    const user = new User({ name, regNo, phone, year });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to register user. Please try again.' });
  }
});

// API Route to login user
app.post('/login', async (req, res) => {
  const { regNo, phone } = req.body;

  try {
    const user = await User.findOne({ regNo, phone });
    if (!user) {
      return res.status(400).json({ error: 'Invalid login credentials' });
    }
    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
