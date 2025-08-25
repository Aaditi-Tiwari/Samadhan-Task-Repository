// Task5.js
const express = require("express");
const app = express();
const port = 3000;

// Dummy students data
const students = [
  { id: 1, name: "Farhan", marks: 82 },
  { id: 2, name: "Amit", marks: 76 },
  { id: 3, name: "Sneha", marks: 91 },
  { id: 4, name: "Ravi", marks: 68 }
];

// Root route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// ✅ Students list API
app.get("/students", (req, res) => {
  res.json(students);
});

// ✅ Get student by ID
app.get("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id); // string → number
  const student = students.find(s => s.id === studentId);

  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: "Student not found" });
  }
});

// Server start
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
