const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Route to login
router.post('/login', async (req, res) => {
  try {
    const result = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (result) {
      res.send(result);
    } else {
      res.status(404).json('User not found');
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Route to register
router.post('/register', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.send('User Registered Successfully');
  } catch (error) {
    res.status(500).json(error);
  }
});

// Route to edit username
router.put('/edit-username', async (req, res) => {
  try {
    const { email, newName } = req.body;
    const updatedUser = await User.findOneAndUpdate(
      { email },
      { name: newName },
      { new: true }
    );

    if (updatedUser) {
      res.send('Username updated successfully');
    } else {
      res.status(404).json('User not found');
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Route to update password
router.put('/update-password', async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;
    const user = await User.findOne({
      email,
      password: oldPassword,
    });

    if (user) {
      user.password = newPassword;
      await user.save();
      res.send('Password updated successfully');
    } else {
      res.status(400).json('Incorrect current password');
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Route to delete account
router.delete('/terminate-account', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOneAndDelete({ email });

    if (user) {
      res.send('Account deleted successfully');
    } else {
      res.status(404).json('User not found');
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
