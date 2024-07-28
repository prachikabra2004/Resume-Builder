const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const User = require('../models/User');

// Get user profile
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user.profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update user profile
router.put('/', auth, async (req, res) => {
  const { education, experience, skills, bio } = req.body;

  const profileFields = {};
  if (education) profileFields.education = education;
  if (experience) profileFields.experience = experience;
  if (skills) profileFields.skills = skills.split(',').map(skill => skill.trim());
  if (bio) profileFields.bio = bio;

  try {
    let user = await User.findById(req.user.id);
    user.profile = profileFields;
    await user.save();
    res.json(user.profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
