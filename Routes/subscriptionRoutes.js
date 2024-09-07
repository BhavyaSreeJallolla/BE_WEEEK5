const express = require('express');
const router = express.Router();
const { createSubscription, getUserSubscriptions } = require('../controllers/subscriptionControllers');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, createSubscription);
router.get('/:userId', authMiddleware, getUserSubscriptions);

module.exports = router;
