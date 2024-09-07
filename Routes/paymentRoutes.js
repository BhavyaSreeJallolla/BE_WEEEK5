const express = require('express');
const router = express.Router();
const { recordPayment } = require('../controllers/paymentControllers');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, recordPayment);

module.exports = router;
