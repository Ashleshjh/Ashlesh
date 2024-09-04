import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './employeetable.css';

function EmployeeTable() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetching data from the server
    axios.get('/api/employees')
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the employee data!", error);
      });
  }, []);

  return (
    <div>
      <h1>Employee Details</h1>
      {employees.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Employee ID</th>
              <th>Employee Mobile</th>
              <th>Employee Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.Employeeid}>
                <td>{employee.Employeename}</td>
                <td>{employee.Employeeid}</td>
                <td>{employee.Employeemob}</td>
                <td>{employee.Employeesalary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
}

export default EmployeeTable;
