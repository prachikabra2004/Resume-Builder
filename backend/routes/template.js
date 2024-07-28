const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const User = require('../models/User');

// Update user template
router.put('/', auth, async (req, res) => {
  const { template } = req.body;
  try {
    let user = await User.findById(req.user.id);
    user.template = template;
    await user.save();
    res.json({ template: user.template });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
