
import React, { useState, useEffect } from 'react';
import StudentForm from './components/StudentForm';
import StudentTable from './components/StudentTable';
import Stats from './components/Stats';
import './App.css';

function App() {
  const [students, setStudents] = useState(() => {
    const stored = localStorage.getItem("students");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => setStudents([...students, student]);

  const deleteStudent = (index) => {
    const updated = [...students];
    updated.splice(index, 1);
    setStudents(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">🎓 Student Dashboard</h1>
      <div className="max-w-4xl mx-auto space-y-6">
        <StudentForm addStudent={addStudent} />
        <Stats students={students} />
        <StudentTable students={students} deleteStudent={deleteStudent} />
      </div>
    </div>
  );
}

export default App;
