const Subscription = require('../Models/subscriptionModel');

// Create Subscription
const createSubscription = async (req, res) => {
  const { userId, plan, startDate, endDate } = req.body;
  try {
    const subscription = await Subscription.create({ userId, plan, startDate, endDate });
    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get User Subscriptions
const getUserSubscriptions = async (req, res) => {
  const { userId } = req.params;
  try {
    const subscriptions = await Subscription.findAll({ where: { userId } });
    res.json(subscriptions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createSubscription, getUserSubscriptions };
