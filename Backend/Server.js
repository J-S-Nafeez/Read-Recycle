require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log('Error connecting to MongoDB:', err));

/* ---------------------- Transaction Schema & Routes ---------------------- */
const transactionSchema = new mongoose.Schema({
    name: String,
    regno: String,
    year: String,
    phone: String,
    action: String,
    book: String,
}, { timestamps: true });

const Transaction = mongoose.model('buysell', transactionSchema);

app.post('/api/add-transaction', async (req, res) => {
    try {
        const newTransaction = new Transaction(req.body);
        await newTransaction.save();
        res.status(201).json({ success: true, message: "Your book has been successfully added." });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error storing transaction data", error });
    }
});

app.get('/api/transactions', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json({ success: true, transactions });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching transactions", error });
    }
});

/* ---------------------- User Authentication Schema & Routes ---------------------- */
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    regNo: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    year: { type: String, required: true },
});

const User = mongoose.model('register', userSchema);

app.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(400).json({ error: 'Failed to register user' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { regNo, phone } = req.body;
        const user = await User.findOne({ regNo, phone });
        if (!user) return res.status(400).json({ error: 'Invalid login credentials' });
        res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

/* ---------------------- Lost & Found Schema & Routes ---------------------- */
const lostItemSchema = new mongoose.Schema({
    type: { type: String, required: true },
    itemName: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    contact: { type: String, required: true }
});

const LostItem = mongoose.model('LostItem', lostItemSchema);

app.get('/api/lostitems', async (req, res) => {
    try {
        const items = await LostItem.find();
        res.json(items);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

app.post('/api/lostitems', async (req, res) => {
    try {
        const newItem = new LostItem(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

app.delete('/api/lostitems/:id', async (req, res) => {
    try {
        const item = await LostItem.findById(req.params.id);
        if (!item) return res.status(404).send('Item not found');
        await item.remove();
        res.json({ msg: 'Item removed' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

/* ---------------------- Ride Sharing Schema & Routes ---------------------- */
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

app.post('/addRide', async (req, res) => {
    try {
        const newRide = new Ride(req.body);
        await newRide.save();
        res.status(201).json(newRide);
    } catch (error) {
        res.status(500).json({ error: 'Error adding ride' });
    }
});

app.get('/getRides', async (req, res) => {
    try {
        const rides = await Ride.find();
        res.json(rides);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching rides' });
    }
});

/* ---------------------- Start the Server ---------------------- */
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
