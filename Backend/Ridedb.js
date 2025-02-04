const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://RRR:RRR123@cluster0.vrg22.mongodb.net/RRR', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Ride Schema
const rideSchema = new mongoose.Schema({
  name: String,
  locationFrom: String,
  locationTo: String,
  date: String,
  time: String,
  registrationNumber: String,
  contact: String,
  paymentMethod: String,
  isBooked: { type: Boolean, default: false }
});

const Ride = mongoose.model('Ride', rideSchema);

// Add a new ride
app.post('/addRide', async (req, res) => {
  try {
    const newRide = new Ride(req.body);
    await newRide.save();
    res.status(201).json(newRide);
  } catch (error) {
    console.error('Error adding ride:', error);
    res.status(500).json({ error: 'Error adding ride' });
  }
});

// Get all rides
app.get('/getRides', async (req, res) => {
  try {
    const rides = await Ride.find();
    res.json(rides);
  } catch (error) {
    console.error('Error fetching rides:', error);
    res.status(500).json({ error: 'Error fetching rides' });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
