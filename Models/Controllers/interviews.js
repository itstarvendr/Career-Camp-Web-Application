const express = require('express');
const router = express.Router();
const Interview = require('./models/interview');

// Get all interviews.
router.get('/', (req, res) => {
  const interviews = Interview.find();
  res.json(interviews);
});

// Get an interview by ID.
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const interview = Interview.findById(id);
  res.json(interview);
});

// Create a new interview.
router.post('/', (req, res) => {
  const interview = new Interview(req.body);
  interview.save();
  res.json(interview);
});

// Update an interview.
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const interview = Interview.findById(id);
  interview.company = req.body.company;
  interview.date = req.body.date;
  interview.student_id = req.body.student_id;
  interview.result = req.body.result;
  interview.save();
  res.json(interview);
});

// Delete an interview.
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Interview.deleteById(id);
  res.json({
    message: 'Interview deleted successfully',
  });
});

module.exports = router;
