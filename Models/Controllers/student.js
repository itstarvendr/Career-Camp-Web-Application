const express = require('express');
const router = express.Router();
const Student = require('./models/student');

// Get all students.
router.get('/', (req, res) => {
  const students = Student.find();
  res.json(students);
});

// Get a student by ID.
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const student = Student.findById(id);
  res.json(student);
});

// Create a new student.
router.post('/', (req, res) => {
  const student = new Student(req.body);
  student.save();
  res.json(student);
});

// Update a student.
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const student = Student.findById(id);
  student.name = req.body.name;
  student.college = req.body.college;
  student.status = req.body.status;
  student.dsa_score = req.body.dsa_score;
  student.webd_score = req.body.webd_score;
  student.react_score = req.body.react_score;
  student.save();
  res.json(student);
});

// Delete a student.
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Student.deleteById(id);
  res.json({
    message: 'Student deleted successfully',
  });
});

module.exports = router;
