import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const FILE = "students.json";

// Get all students
app.get("/students", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE));
  res.json(data);
});

// Add student
app.post("/students", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE));
  const newStudent = req.body;
  data.push(newStudent);
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
  res.json({ message: "Student added successfully" });
});

// Delete student
app.delete("/students/:rollno", (req, res) => {
  let data = JSON.parse(fs.readFileSync(FILE));
  data = data.filter((s) => s.rollno !== req.params.rollno);
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
  res.json({ message: "Student deleted" });
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
