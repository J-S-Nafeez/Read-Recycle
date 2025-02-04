const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose.connect("mongodb+srv://RRR:RRR123@cluster0.vrg22.mongodb.net/RRR", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Define Schema & Model for Transaction Data
const transactionSchema = new mongoose.Schema({
  name: String,
  regno: String,
  year: String,
  phone: String,
  action: String,
  book: String,
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', transactionSchema);

// API Route to store transaction data
app.post('/api/add-transaction', async (req, res) => {
  try {
    const { name, regno, year, phone, action, book } = req.body;
    const newTransaction = new Transaction({
      name,
      regno,
      year,
      phone,
      action,
      book,
    });

    await newTransaction.save();
    res.status(201).json({ success: true, message: "Your book has been successfully added to the system. It will be sold/bought within one day." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error storing transaction data", error });
  }
});

// API Route to fetch transaction data
app.get('/api/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json({ success: true, transactions });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching transactions", error });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
