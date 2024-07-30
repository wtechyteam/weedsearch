const express = require('express');
const router = express.Router();
const User = require('../models/userLogin'); // Adjust the path as necessary

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    const user = await User.findOne({ email });
    res.cookie('authToken', token, { httpOnly: true });
    res.status(200).json({ message: 'Login successful', token, user: { fullName: user.fullName, email: user.email } });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(400).json({ message: 'Invalid credentials', error: error.message });
  }
});

module.exports = router;
