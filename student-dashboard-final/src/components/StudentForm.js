
import React, { useState } from 'react';

const StudentForm = ({ addStudent }) => {
  const [form, setForm] = useState({ name: '', dept: '', cgpa: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.dept || !form.cgpa) return;
    addStudent(form);
    setForm({ name: '', dept: '', cgpa: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-3">
      <div className="flex flex-col sm:flex-row gap-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded w-full" />
        <input name="dept" value={form.dept} onChange={handleChange} placeholder="Department" className="border p-2 rounded w-full" />
        <input name="cgpa" value={form.cgpa} onChange={handleChange} placeholder="CGPA" className="border p-2 rounded w-full" />
      </div>
      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">Add Student</button>
    </form>
  );
};

export default StudentForm;
