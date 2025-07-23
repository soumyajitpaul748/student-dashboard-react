
import React from 'react';

const StudentTable = ({ students, deleteStudent }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-3">Student Records</h2>
      {students.length === 0 ? (
        <p className="text-gray-500">No students added yet.</p>
      ) : (
        <table className="w-full text-left border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Department</th>
              <th className="p-2 border">CGPA</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, i) => (
              <tr key={i} className="hover:bg-gray-50">
                <td className="p-2 border">{i + 1}</td>
                <td className="p-2 border">{student.name}</td>
                <td className="p-2 border">{student.dept}</td>
                <td className="p-2 border">{student.cgpa}</td>
                <td className="p-2 border">
                  <button onClick={() => deleteStudent(i)} className="text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentTable;
