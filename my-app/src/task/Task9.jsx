import React, { useEffect, useState } from "react";

function Task9() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", rollno: "", course: "" });

  // Page load hone pe data fetch karo
  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  // Input change handle
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add student
  const addStudent = async () => {
    if (!form.name || !form.rollno || !form.course) return alert("Fill all fields!");

    const res = await fetch("http://localhost:5000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStudents([...students, form]); // UI me add karo
      setForm({ name: "", rollno: "", course: "" }); // form reset
    }
  };

  // Delete student
  const deleteStudent = async (rollno) => {
    await fetch(`http://localhost:5000/students/${rollno}`, {
      method: "DELETE",
    });
    setStudents(students.filter((s) => s.rollno !== rollno));
  };

  return (
    <div style={{ maxWidth: "600px", margin: "30px auto", padding: "20px", border: "2px solid #ddd", borderRadius: "12px" }}>
      <h2 style={{ textAlign: "center" }}>🎓 Student Directory</h2>

      {/* Form */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="rollno"
          placeholder="Roll No"
          value={form.rollno}
          onChange={handleChange}
        />
        <input
          name="course"
          placeholder="Course"
          value={form.course}
          onChange={handleChange}
        />
        <button onClick={addStudent}>Add</button>
      </div>

      {/* Student List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {students.map((s, i) => (
          <li key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px" }}>
            <span>
              <b>{s.name}</b> ({s.rollno}) - {s.course}
            </span>
            <button
              onClick={() => deleteStudent(s.rollno)}
              style={{ background: "red", color: "white" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task9;
