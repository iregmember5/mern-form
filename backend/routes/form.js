const express = require('express');
const router = express.Router();
const FormData = require('../models/FormData');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newEntry = new FormData({ name, email, message });
    await newEntry.save();
    res.status(201).json({ success: true, data: newEntry });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get all form submissions
router.get('/', async (req, res) => {
  try {
    const entries = await FormData.find().sort({ _id: -1 }); // latest first
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await FormData.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await FormData.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



module.exports = router;
