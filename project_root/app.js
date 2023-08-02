const express = require('express');
const app = express();
const router = express.Router();

// Import the student model.
const Student = require('./models/student');

// Create a route for the download page.
router.get('/download', (req, res) => {
  // Get the data from the database.
  const students = Student.find();

  // Create a CSV file from the data.
  const data = [
    'Student ID,Student Name,Student College,Student Status,DSA Final Score,WebD Final Score,React Final Score',
    ...students.map(student => student.toCSV()),
  ];

  // Download the CSV file to the user's computer.
  const csvFile = new Blob([data], {type: 'text/csv'});
  const downloadLink = document.createElement('a');
  downloadLink.href = window.URL.createObjectURL(csvFile);
  downloadLink.download = 'data.csv';
  downloadLink.click();
});

// Mount the router on the app.
app.use('/', router);

// Start the server.
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
