
import React from 'react';

const Stats = ({ students }) => {
  const avgCGPA = students.length > 0
    ? (students.reduce((sum, s) => sum + parseFloat(s.cgpa), 0) / students.length).toFixed(2)
    : 0;

  return (
    <div className="bg-white p-4 rounded shadow flex justify-between">
      <div><strong>Total Students:</strong> {students.length}</div>
      <div><strong>Average CGPA:</strong> {avgCGPA}</div>
    </div>
  );
};

export default Stats;
