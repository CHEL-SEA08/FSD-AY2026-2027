const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let students = [
    { name: "Dwayitha", rollNo: "160121733001", attendancePercentage: 78 },
    { name: "Sudiksha", rollNo: "160121733002", attendancePercentage: 72 }, // Matches (65 < 72 < 75)
    { name: "Sahasra", rollNo: "160121733003", attendancePercentage: 64 },
    { name: "Ria", rollNo: "160121733004", attendancePercentage: 68 }, // Matches (65 < 68 < 75)
    { name: "Rahul", rollNo: "160121733005", attendancePercentage: 85 },
    { name: "Neha", rollNo: "160121733006", attendancePercentage: 74 }  // Matches (65 < 74 < 75)
];

app.get("/", (req, res) => {
    res.send("CBIT Student Attendance API is running");
});

app.get("/api/students", (req, res) => {
    res.json(students);
});

app.get("/api/students/shortage", (req, res) => {
    const filteredStudents = students.filter(
        student => student.attendancePercentage > 65 && student.attendancePercentage < 75
    );
   
    res.json(filteredStudents);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

