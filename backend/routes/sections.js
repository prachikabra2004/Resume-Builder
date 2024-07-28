const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const User = require('../models/User');

// Get resume sections
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user.profile.sections);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add or update a resume section
router.put('/', auth, async (req, res) => {
  const { title, content } = req.body;
  try {
    let user = await User.findById(req.user.id);
    const existingSection = user.profile.sections.find(section => section.title === title);
    if (existingSection) {
      existingSection.content = content;
    } else {
      user.profile.sections.push({ title, content });
    }
    await user.save();
    res.json(user.profile.sections);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Delete a resume section
router.delete('/:title', auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id);
    user.profile.sections = user.profile.sections.filter(
      section => section.title !== req.params.title
    );
    await user.save();
    res.json(user.profile.sections);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
