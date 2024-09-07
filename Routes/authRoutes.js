const express = require('express');
const router = express.Router();
const { signUp, logIn, verifyToken } = require('../controllers/authControllers');

// Public routes
router.post('/signup', signUp);
router.post('/login', logIn);


module.exports = router;
