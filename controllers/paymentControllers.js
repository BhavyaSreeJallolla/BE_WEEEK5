const Payment = require('../Models/paymentModel');

// Record Payment
const recordPayment = async (req, res) => {
  const { userId, amount, date, paymentMethod } = req.body;
  try {
    const payment = await Payment.create({ userId, amount, date, paymentMethod });
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { recordPayment };
