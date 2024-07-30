const express = require('express');
const router = express.Router();
const User = require('../models/userLogin'); // Ensure this path is correct

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    res.cookie('authToken', token, { httpOnly: true });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

router.post('/signup', async (req, res) => {
    const { fullName, email, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const newUser = new User({ fullName, email, password });
      await newUser.save();
  
      const token = await User.matchPasswordAndGenerateToken(email, password);
      res.cookie('authToken', token, { httpOnly: true });
      res.status(201).json({ message: 'User created successfully', token });
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error: error.message });
    }
  });

module.exports = router;