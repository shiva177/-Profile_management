// src/routes/userRoutes.js
const express = require('express');
const { registerUser, getProfile, updateProfile } = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/register', registerUser);
router.get('/profile', authMiddleware, getProfile);
router.put('/profile', authMiddleware, updateProfile);

module.exports = router;
